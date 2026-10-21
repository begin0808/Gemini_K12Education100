// ===================================================================
// Google Gemini 於 K-12 中小學教育的 100+ 種應用指南 - 核心邏輯
// ===================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Ensure APP_DATA is loaded
  if (!window.APP_DATA) {
    console.error('APP_DATA not loaded!');
    return;
  }

  const { siteInfo, partsFramework, classroomTools, sections, prompts, slides } = window.APP_DATA;

  // --- STATE ---
  let state = {
    theme: localStorage.getItem('gemini_k12_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    activeClassroomTab: 'all',
    activePromptCategory: 'all',
    activeToolFilter: 'all',
    activeAudienceFilter: 'all',
    searchQuery: '',
    currentSlideNum: 80, // Default to Slide 80 (Gemini in Classroom from user screenshot!)
    favorites: JSON.parse(localStorage.getItem('gemini_k12_favs') || '[]'),
    bilingualDefault: false
  };

  // Set Theme
  document.documentElement.setAttribute('data-theme', state.theme);

  // --- DOM ELEMENTS ---
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const navSearchInput = document.getElementById('nav-search-input');
  const classroomGrid = document.getElementById('classroom-tools-grid');
  const classroomTabsContainer = document.getElementById('classroom-tabs-bar');
  const promptsGrid = document.getElementById('prompts-grid');
  const promptCountBadge = document.getElementById('prompt-count-badge');
  const favCountBadge = document.getElementById('fav-count-badge');
  const favoritesModal = document.getElementById('favorites-modal');
  const favoritesList = document.getElementById('favorites-list');
  const toastNotice = document.getElementById('toast-notice');
  const toastMessage = document.getElementById('toast-message');

  // Deck Reader elements
  const slideNumTag = document.getElementById('deck-slide-num');
  const slideCanvasTitle = document.getElementById('deck-slide-title');
  const slideCanvasSummary = document.getElementById('deck-slide-summary');
  const slideCanvasPoints = document.getElementById('deck-slide-points');
  const slideMediaBox = document.getElementById('deck-media-box');
  const slideJumpSelect = document.getElementById('slide-jump-select');
  const prevSlideBtn = document.getElementById('prev-slide-btn');
  const nextSlideBtn = document.getElementById('next-slide-btn');

  // Builder elements
  const builderGrade = document.getElementById('builder-grade');
  const builderSubject = document.getElementById('builder-subject');
  const builderTopic = document.getElementById('builder-topic');
  const builderStructure = document.getElementById('builder-structure');
  const builderPromptOutput = document.getElementById('builder-prompt-output');
  const copyBuilderBtn = document.getElementById('copy-builder-btn');

  // --- TOAST HELPER ---
  let toastTimer = null;
  function showToast(msg) {
    if (toastTimer) clearTimeout(toastTimer);
    toastMessage.textContent = msg;
    toastNotice.classList.add('show');
    toastTimer = setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 2500);
  }

  // --- COPY HELPER ---
  window.copyTextToClipboard = function(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
      if (btn) {
        const originalText = btn.innerHTML;
        btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> 已複製！`;
        btn.classList.add('copied');
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove('copied');
        }, 2000);
      }
      showToast('提示詞已複製至剪貼簿！可直接貼至 Gemini 或 Classroom');
    }).catch(err => {
      console.error('複製失敗:', err);
      showToast('複製失敗，請手動複製文字');
    });
  };

  // --- THEME TOGGLE ---
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('gemini_k12_theme', state.theme);
      showToast(state.theme === 'dark' ? '已切換至深色主題 🌙' : '已切換至淺色主題 ☀️');
    });
  }

  // --- TABBED VIEW SWITCHING (SINGLE-VIEW PAGE ARCHITECTURE) ---
  const tabIdAliasMap = {
    'overview': 'tab-overview',
    'home': 'tab-overview',
    'hero': 'tab-overview',
    'classroom': 'tab-classroom',
    'classroom-section': 'tab-classroom',
    'parts': 'tab-parts',
    'parts-section': 'tab-parts',
    'builder': 'tab-builder',
    'builder-section': 'tab-builder',
    'catalog': 'tab-catalog',
    'prompts': 'tab-catalog',
    'prompts-catalog-section': 'tab-catalog',
    'deck': 'tab-deck',
    'deck-section': 'tab-deck',
    'gems': 'tab-gems',
    'gems-section': 'tab-gems',
    'notebooklm': 'tab-notebooklm',
    'notebooklm-section': 'tab-notebooklm',
    'workspace': 'tab-workspace',
    'workspace-section': 'tab-workspace'
  };

  window.switchTab = function(targetTabId, updateHash = true) {
    if (!targetTabId) return;
    let cleanId = targetTabId.replace(/^#/, '');
    if (tabIdAliasMap[cleanId]) {
      cleanId = tabIdAliasMap[cleanId];
    }
    if (!cleanId.startsWith('tab-')) {
      cleanId = 'tab-' + cleanId;
    }

    const targetEl = document.getElementById(cleanId);
    if (!targetEl) return;

    // Toggle active tab view
    document.querySelectorAll('.tab-view').forEach(view => {
      view.classList.remove('active');
    });
    targetEl.classList.add('active');

    // Toggle active subnav button
    document.querySelectorAll('.subnav-btn').forEach(btn => {
      const bTab = btn.getAttribute('data-tab');
      btn.classList.toggle('active', bTab === cleanId);
    });

    // Update URL hash
    const hashVal = cleanId.replace('tab-', '');
    if (updateHash && window.location.hash !== '#' + hashVal) {
      if (history.pushState) {
        history.pushState(null, null, '#' + hashVal);
      } else {
        window.location.hash = hashVal;
      }
    }

    // Scroll smoothly to top of the selected view
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync hash on navigation or load
  function syncTabFromHash() {
    const rawHash = (window.location.hash || '').replace(/^#/, '');
    if (rawHash && tabIdAliasMap[rawHash]) {
      window.switchTab(tabIdAliasMap[rawHash], false);
    }
  }

  window.addEventListener('hashchange', syncTabFromHash);

  // --- SEARCH INPUT LISTENER ---
  if (navSearchInput) {
    navSearchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      // If user starts typing a query, auto-switch to catalog view so they see matching prompts!
      if (state.searchQuery.length > 0) {
        const activeTab = document.querySelector('.tab-view.active');
        if (activeTab && activeTab.id !== 'tab-catalog') {
          window.switchTab('tab-catalog', true);
        }
      }
      renderPrompts();
    });
  }

  // --- FAVORITES TOGGLE ---
  window.toggleFavoritePrompt = function(promptId) {
    const idx = state.favorites.indexOf(promptId);
    const isNowFav = idx === -1;
    if (isNowFav) {
      state.favorites.push(promptId);
      showToast('已加入您的喜愛提示詞清單 ❤️');
    } else {
      state.favorites.splice(idx, 1);
      showToast('已自收藏清單移除');
    }
    localStorage.setItem('gemini_k12_favs', JSON.stringify(state.favorites));
    updateFavBadge();

    // Dynamically update ALL heart buttons on the page for this prompt
    document.querySelectorAll(`.fav-btn[data-prompt-id="${promptId}"]`).forEach(btn => {
      btn.classList.toggle('active', isNowFav);
      btn.setAttribute('title', isNowFav ? '已收藏（點擊取消）' : '加入收藏');
      const svg = btn.querySelector('.heart-svg');
      if (svg) {
        svg.style.fill = isNowFav ? '#ea4335' : 'none';
        svg.style.stroke = isNowFav ? '#ea4335' : 'currentColor';
      }
    });

    if (favoritesModal && favoritesModal.classList.contains('active')) {
      renderFavoritesModal();
    }
  };

  function updateFavBadge() {
    if (favCountBadge) {
      favCountBadge.textContent = state.favorites.length;
      favCountBadge.style.display = state.favorites.length > 0 ? 'inline-block' : 'none';
    }
  }
  updateFavBadge();

  // --- RENDER CLASSROOM TOOLS ---
  function renderClassroomTools() {
    if (!classroomGrid) return;

    let filtered = classroomTools;
    if (state.activeClassroomTab !== 'all') {
      filtered = classroomTools.filter(t => t.tags.includes(state.activeClassroomTab) || t.category === state.activeClassroomTab);
    }

    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      filtered = filtered.filter(t => 
        t.nameZh.toLowerCase().includes(q) ||
        t.nameEn.toLowerCase().includes(q) ||
        t.descZh.toLowerCase().includes(q) ||
        t.promptTemplateZh.toLowerCase().includes(q)
      );
    }

    if (filtered.length === 0) {
      classroomGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
          <p style="font-size: 1.1rem; font-weight: 600;">未找到符合條件的 Google Classroom 鷹架工具</p>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">請嘗試不同關鍵字或切換標籤</p>
        </div>
      `;
      return;
    }

    classroomGrid.innerHTML = filtered.map(tool => {
      // Highlight variables in prompt
      const highlightedPrompt = tool.promptTemplateZh.replace(/\[(.*?)\]/g, '<mark class="variable-tag">[$1]</mark>');

      return `
        <div class="tool-card" id="${tool.id}">
          <div class="tool-card-head">
            <div class="tool-icon-box" style="background: ${tool.color};">
              <i data-lucide="${tool.icon}"></i>
            </div>
            <div class="tool-card-titles">
              <div class="tool-card-title">${tool.nameZh}</div>
              <div class="tool-card-en">${tool.nameEn}</div>
            </div>
            <span class="tool-category-badge">${tool.category}</span>
          </div>

          <div class="tool-card-desc">${tool.descZh}</div>

          <div class="tool-input-guide">
            <div class="tool-input-guide-title">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8.01"></line></svg>
              Classroom 輸入欄位建議
            </div>
            <div>${tool.inputGuideZh}</div>
          </div>

          <div class="prompt-box">
            <div class="prompt-box-header">
              <span>🌟 即開即用繁中提示詞範本</span>
              <button class="toggle-en-btn" onclick="toggleToolEnPrompt('${tool.id}')">查看英文對照</button>
            </div>
            <div class="prompt-text" id="tool-text-zh-${tool.id}">${highlightedPrompt}</div>
            <div class="prompt-text" id="tool-text-en-${tool.id}" style="display: none; margin-top: 0.5rem; color: var(--text-muted); font-size: 0.82rem; font-style: italic;">
              ${tool.promptTemplateEn}
            </div>

            <div class="prompt-actions-row">
              <button class="copy-btn" onclick="copyTextToClipboard('${tool.promptTemplateZh.replace(/'/g, "\\'")}', this)">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                複製繁中範本
              </button>
              <button class="copy-btn" style="background: var(--bg-surface); color: var(--text-muted);" onclick="copyTextToClipboard('${tool.promptTemplateEn.replace(/'/g, "\\'")}', this)">
                複製英文
              </button>
            </div>
          </div>

          <div class="tool-card-tip">
            <span>💡</span>
            <div><strong>微調秘訣：</strong>${tool.proTipsZh}</div>
          </div>
        </div>
      `;
    }).join('');

    // Re-initialize Lucide icons if loaded
    if (window.lucide) window.lucide.createIcons();
  }

  window.toggleToolEnPrompt = function(toolId) {
    const enEl = document.getElementById(`tool-text-en-${toolId}`);
    if (enEl) {
      const isHidden = enEl.style.display === 'none';
      enEl.style.display = isHidden ? 'block' : 'none';
    }
  };

  // Classroom Tabs click
  if (classroomTabsContainer) {
    classroomTabsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.c-tab-btn');
      if (!btn) return;
      document.querySelectorAll('.c-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeClassroomTab = btn.getAttribute('data-tab');
      renderClassroomTools();
    });
  }

  // --- RENDER PROMPT CATALOG ---
  function renderPrompts() {
    if (!promptsGrid) return;

    let filtered = prompts;

    // Filter by Category
    if (state.activePromptCategory !== 'all') {
      filtered = filtered.filter(p => p.category === state.activePromptCategory);
    }

    // Filter by Tool
    if (state.activeToolFilter !== 'all') {
      filtered = filtered.filter(p => p.applicableTools && p.applicableTools.some(t => t.toLowerCase().includes(state.activeToolFilter.toLowerCase())));
    }

    // Filter by Audience
    if (state.activeAudienceFilter !== 'all') {
      filtered = filtered.filter(p => p.targetAudience === state.activeAudienceFilter);
    }

    // Filter by Search Query
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.titleZh.toLowerCase().includes(q) ||
        p.titleEn.toLowerCase().includes(q) ||
        p.promptZh.toLowerCase().includes(q) ||
        p.roleScenarioZh.toLowerCase().includes(q) ||
        (p.tipsZh && p.tipsZh.toLowerCase().includes(q))
      );
    }

    if (promptCountBadge) {
      promptCountBadge.textContent = `${filtered.length} 則`;
    }

    if (filtered.length === 0) {
      promptsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1.5rem; color: var(--text-muted);">
          <p style="font-size: 1.2rem; font-weight: 700; color: var(--text-main);">未找到符合條件的教學提示詞</p>
          <p style="margin-top: 0.5rem;">請嘗試清除搜尋條件或選取其他類別標籤</p>
        </div>
      `;
      return;
    }

    promptsGrid.innerHTML = filtered.map(p => {
      const isFav = state.favorites.includes(p.id);
      const highlightedPrompt = p.promptZh.replace(/\[(.*?)\]/g, '<mark class="variable-tag">[$1]</mark>');

      return `
        <div class="prompt-card" id="${p.id}">
          <div class="prompt-card-top">
            <div class="prompt-badges">
              <span class="badge-pill slide-ref">投影片 #${p.slideNum}</span>
              <span class="badge-pill">${p.subCategory}</span>
              <span class="badge-pill" style="background: var(--gemini-purple-light); color: var(--gemini-purple);">${p.targetAudience}</span>
            </div>
            <button class="fav-btn ${isFav ? 'active' : ''}" data-prompt-id="${p.id}" title="${isFav ? '已收藏（點擊取消）' : '加入收藏'}" onclick="toggleFavoritePrompt('${p.id}')">
              <svg class="heart-svg" width="20" height="20" viewBox="0 0 24 24" fill="${isFav ? '#ea4335' : 'none'}" stroke="${isFav ? '#ea4335' : 'currentColor'}">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>

          <div>
            <h4 class="prompt-card-title">${p.titleZh}</h4>
            <div class="prompt-card-scenario">${p.roleScenarioZh}</div>
          </div>

          <!-- Prompt Box -->
          <div class="prompt-box">
            <div class="prompt-box-header">
              <span>繁體中文實戰提示詞</span>
              <button class="toggle-en-btn" onclick="togglePromptEn('${p.id}')">英文原版</button>
            </div>
            <div class="prompt-text" id="prompt-zh-${p.id}">${highlightedPrompt}</div>
            <div class="prompt-text" id="prompt-en-${p.id}" style="display: none; margin-top: 0.6rem; color: var(--text-muted); font-size: 0.82rem; font-style: italic;">
              ${p.promptEn}
            </div>

            <div class="prompt-actions-row">
              <button class="copy-btn" onclick="copyTextToClipboard('${p.promptZh.replace(/'/g, "\\'")}', this)">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                複製繁中
              </button>
              <button class="copy-btn" style="background: var(--bg-surface); color: var(--text-muted);" onclick="copyTextToClipboard('${p.promptEn.replace(/'/g, "\\'")}', this)">
                複製英文原版
              </button>
            </div>
          </div>

          <!-- PARTS Breakdown -->
          ${p.parts ? `
            <div class="parts-breakdown-details">
              <div style="font-weight: 700; color: var(--text-muted); margin-bottom: 0.2rem; font-size: 0.75rem;">PARTS 提示詞架構拆解：</div>
              <div class="parts-item"><span class="parts-badge p">P: 角色</span><span>${p.parts.persona}</span></div>
              <div class="parts-item"><span class="parts-badge a">A: 任務</span><span>${p.parts.act}</span></div>
              <div class="parts-item"><span class="parts-badge r">R: 受眾</span><span>${p.parts.recipient}</span></div>
              <div class="parts-item"><span class="parts-badge t">T: 主題</span><span>${p.parts.theme}</span></div>
              <div class="parts-item"><span class="parts-badge s">S: 格式</span><span>${p.parts.structure}</span></div>
            </div>
          ` : ''}

          <!-- Pro Tip -->
          ${p.tipsZh ? `
            <div class="tool-card-tip">
              <span>💡</span>
              <div><strong>專家心法：</strong>${p.tipsZh}</div>
            </div>
          ` : ''}

          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 0.5rem; font-size: 0.75rem; color: var(--text-subtle);">
            <div>適用：${p.applicableTools ? p.applicableTools.join(' · ') : 'Gemini'}</div>
            <a href="#deck-section" onclick="jumpToSlide(${p.slideNum})" style="font-weight: 600;">跳轉投影片 ➔</a>
          </div>
        </div>
      `;
    }).join('');
  }

  window.togglePromptEn = function(promptId) {
    const el = document.getElementById(`prompt-en-${promptId}`);
    if (el) {
      const isHidden = el.style.display === 'none';
      el.style.display = isHidden ? 'block' : 'none';
    }
  };

  // --- FILTER CHIPS LISTENER ---
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      const type = chip.getAttribute('data-filter-type');
      const val = chip.getAttribute('data-value');

      // Unselect siblings
      chip.parentElement.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      if (type === 'category') state.activePromptCategory = val;
      if (type === 'tool') state.activeToolFilter = val;
      if (type === 'audience') state.activeAudienceFilter = val;

      renderPrompts();
    });
  });

  // --- SEARCH INPUT LISTENER ---
  if (navSearchInput) {
    navSearchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim();
      renderClassroomTools();
      renderPrompts();
    });
  }

  // --- DECK READER CONTROLLER ---
  function initSlideJumpSelect() {
    if (!slideJumpSelect) return;
    slideJumpSelect.innerHTML = slides.map(s => {
      return `<option value="${s.slideNumber}">投影片 ${String(s.slideNumber).padStart(3, '0')}: ${s.titleZh.substring(0, 32)}</option>`;
    }).join('');

    slideJumpSelect.addEventListener('change', (e) => {
      renderSlideDeck(parseInt(e.target.value, 10));
    });
  }

  window.jumpToSlide = function(slideNumber) {
    renderSlideDeck(slideNumber);
    window.switchTab('tab-deck');
  };

  function renderSlideDeck(slideNumber) {
    const slide = slides.find(s => s.slideNumber === slideNumber) || slides[0];
    state.currentSlideNum = slide.slideNumber;

    if (slideJumpSelect) {
      slideJumpSelect.value = String(slide.slideNumber);
    }

    if (slideNumTag) slideNumTag.textContent = `SLIDE ${String(slide.slideNumber).padStart(3, '0')} / ${slides.length}`;
    if (slideCanvasTitle) slideCanvasTitle.textContent = slide.titleZh;
    if (slideCanvasSummary) slideCanvasSummary.textContent = slide.summaryZh;

    // Render key bullet points
    if (slideCanvasPoints) {
      slideCanvasPoints.innerHTML = slide.allTextsEn.slice(1).map(txt => {
        return `
          <div class="slide-point-item">
            <span style="color: var(--primary); font-weight: 700;">•</span>
            <div>${txt}</div>
          </div>
        `;
      }).join('');
    }

    // Render media box
    if (slideMediaBox) {
      if (slide.images && slide.images.length > 0) {
        slideMediaBox.innerHTML = slide.images.map(img => {
          return `
            <div class="slide-img-frame">
              <img src="${img}" alt="投影片截圖" loading="lazy">
            </div>
          `;
        }).join('');
      } else {
        slideMediaBox.innerHTML = `
          <div style="background: var(--bg-surface); border: 1px dashed var(--border-subtle); border-radius: var(--radius-md); padding: 3rem 1.5rem; text-align: center; color: var(--text-subtle);">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 0.75rem;"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            <div>此投影片為純文字概念說明，無附圖</div>
          </div>
        `;
      }
    }
  }

  if (prevSlideBtn) {
    prevSlideBtn.addEventListener('click', () => {
      if (state.currentSlideNum > 1) {
        renderSlideDeck(state.currentSlideNum - 1);
      }
    });
  }

  if (nextSlideBtn) {
    nextSlideBtn.addEventListener('click', () => {
      if (state.currentSlideNum < slides.length) {
        renderSlideDeck(state.currentSlideNum + 1);
      }
    });
  }

  // --- INTERACTIVE PROMPT BUILDER ---
  function updatePromptBuilder() {
    const grade = builderGrade ? builderGrade.value : '高中十年級';
    const subject = builderSubject ? builderSubject.value : '物理科';
    const topic = builderTopic ? (builderTopic.value.trim() || '牛頓第三運動定律') : '牛頓第三運動定律';
    const struct = builderStructure ? builderStructure.value : '5E';

    let promptText = '';
    if (struct === '5E') {
      promptText = `你是一位資深的${grade}${subject}教師與課程設計專家 (Persona)。請為我們即將進行的「${topic}」單元 (Theme)，設計一份為期 3 天的 5E 探究教學教案大綱 (Act)。對象為該年級初次接觸此概念的學生 (Recipient)。請嚴格依照 5E 階段（參與、探索、解釋、精緻化、評量）撰寫，並在最後提供一份結合生活情境的「主張-證據-推理 (CER)」課堂退出票 (Structure)。`;
    } else if (struct === 'rubric') {
      promptText = `你是一位專業的學科評量規準設計師 (Persona)。請為${grade}${subject}的「${topic}」專案實作成果 (Theme)，建立一份 4 個等級（精熟4分、良好3分、基礎2分、待加強1分）的表現規準評分量表 (Act)。目標讀者為學生與評分教師 (Recipient)。請包含 4 個核心向度（概念掌握、探究方法、邏輯論述與視覺呈現），並為每個等級提供具體客觀的行為描述 (Structure)。`;
    } else if (struct === 'quiz') {
      promptText = `你是一位專精於形成性評量的${grade}${subject}名師 (Persona)。請根據「${topic}」的核心知識點 (Theme)，設計一份包含 5 題單選題與 2 題開放式探究簡答題的隨堂測驗卷 (Act)。請針對目標年級學生的認知層次 (Recipient)，在答案後附上每題的測驗目標、正確詳解，並特別點出學生容易陷入的典型迷思概念 (Structure)。`;
    } else if (struct === 'choice') {
      promptText = `你是一位致力於普及學習設計 (UDL) 的教學顧問 (Persona)。請為${grade}${subject}的「${topic}」單元 (Theme)，設計一個 3x3 九宮格學習選項板 (Choice Board) (Act)。對象為班內具備不同學習風格與長處的多元學習者 (Recipient)。九個格子需涵蓋動手實驗、視覺圖解、邏輯分析、口語表達與寫作等多元展現方式，並具有同等的學術嚴謹度 (Structure)。`;
    } else {
      promptText = `你是一位富啟發性的${grade}${subject}老師 (Persona)。請為「${topic}」單元 (Theme) 設計 3 個在課堂前 3-5 分鐘實施的破冰引起動機開場 (Hook) (Act)。針對目標年級學生 (Recipient)，請包含一個反直覺的謎題、一個迷你小實驗與一個生活爭議討論，並附上引導問題 (Structure)。`;
    }

    if (builderPromptOutput) {
      builderPromptOutput.textContent = promptText;
    }
  }

  [builderGrade, builderSubject, builderTopic, builderStructure].forEach(el => {
    if (el) el.addEventListener('input', updatePromptBuilder);
  });

  if (copyBuilderBtn) {
    copyBuilderBtn.addEventListener('click', () => {
      if (builderPromptOutput) {
        copyTextToClipboard(builderPromptOutput.textContent, copyBuilderBtn);
      }
    });
  }

  // --- FAVORITES MODAL ---
  window.openFavoritesModal = function() {
    renderFavoritesModal();
    if (favoritesModal) favoritesModal.classList.add('active');
  };

  window.closeFavoritesModal = function() {
    if (favoritesModal) favoritesModal.classList.remove('active');
  };

  function renderFavoritesModal() {
    if (!favoritesList) return;
    if (state.favorites.length === 0) {
      favoritesList.innerHTML = `
        <div style="text-align: center; padding: 2.5rem; color: var(--text-muted);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🤍</div>
          <p style="font-weight: 600;">您尚未收藏任何提示詞</p>
          <p style="font-size: 0.85rem; margin-top: 0.3rem;">點擊提示詞卡片右上角的愛心圖示即可加入隨身清單！</p>
        </div>
      `;
      return;
    }

    const favPrompts = prompts.filter(p => state.favorites.includes(p.id));
    favoritesList.innerHTML = favPrompts.map(p => {
      return `
        <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem; display: flex; flex-direction: column; gap: 0.6rem;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <div style="font-weight: 700; color: var(--text-main); font-size: 1rem;">${p.titleZh}</div>
            <button class="fav-btn active" data-prompt-id="${p.id}" title="移除收藏" onclick="toggleFavoritePrompt('${p.id}')">
              <svg class="heart-svg" width="20" height="20" viewBox="0 0 24 24" fill="#ea4335" stroke="#ea4335">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>
          <div style="font-size: 0.85rem; color: var(--text-muted);">${p.promptZh.substring(0, 120)}...</div>
          <div style="display: flex; justify-content: flex-end; gap: 0.5rem; margin-top: 0.4rem;">
            <button class="copy-btn" onclick="copyTextToClipboard('${p.promptZh.replace(/'/g, "\\'")}', this)">
              複製提示詞
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // --- KEYBOARD SHORTCUTS ---
  document.addEventListener('keydown', (e) => {
    // Press '/' to search
    if (e.key === '/' && document.activeElement !== navSearchInput && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      if (navSearchInput) navSearchInput.focus();
    }
    // Press 'Esc' to close modal
    if (e.key === 'Escape') {
      closeFavoritesModal();
    }
  });

  // --- INITIALIZE UI ---
  renderClassroomTools();
  renderPrompts();
  initSlideJumpSelect();
  renderSlideDeck(80); // Default to Slide 80 (Gemini in Classroom)
  updatePromptBuilder();
  syncTabFromHash(); // Restore active tab from URL hash if provided

  console.log('Gemini K-12 Education Web App Initialized Successfully!');
});
