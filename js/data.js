// Google Gemini 於 K-12 中小學教育的 100+ 種應用指南 - 完整繁體中文資料庫
window.APP_DATA = {
  "siteInfo": {
    "title": "Google Gemini 於 K-12 中小學教育的 100+ 種應用指南",
    "subtitle": "專為教師、學校管理者與學生打造的繁體中文互動實戰手冊與提示詞庫",
    "version": "2026年7月最新繁體中文在地化增強版",
    "originalTitle": "100+ Ways to Use Gemini in K-12 Education",
    "author": "Google for Education 攜手全球教育工作者共同編撰",
    "totalSlides": 129,
    "totalPrompts": 48,
    "lastUpdated": "2026年7月"
  },
  "partsFramework": {
    "name": "PARTS 提示詞設計黃金心法",
    "description": "Google 官方專為教育工作者研發的提問架構，透過清晰的五大步驟，讓 AI 精準產出吻合課程標準與教學情境的高品質成果。",
    "elements": [
      {
        "letter": "P",
        "nameZh": "Persona 角色設定",
        "nameEn": "Persona",
        "whatZh": "賦予 Gemini 明確的專業身份與角色視角",
        "whyZh": "引導 AI 調用正確的語氣、專業知識深度與行為準則（例如：『請擔任資深探究教學輔導員』、『擔任高中生物教師』或『擔任課程設計專家』）。",
        "example": "你是一位擁有10年教學經驗的高中生物老師與課程設計專家。"
      },
      {
        "letter": "A",
        "nameZh": "Act 行動任務",
        "nameEn": "Act",
        "whatZh": "使用明確、具體且強有力的動作動詞陳述任務",
        "whyZh": "使用如『設計』、『重寫』、『解構』、『對齊標準』或『評估』等動詞，避免模糊不清的籠統指令。",
        "example": "請為高一學生設計一個為期三天的 5E 探究教學單元教案。"
      },
      {
        "letter": "R",
        "nameZh": "Recipient 受眾對象",
        "nameEn": "Recipient",
        "whatZh": "明確定義學習者年級、程度背景與班級特質",
        "whyZh": "讓產出的內容深淺適中，精準對應目標對象的認知發展水準、興趣點或特殊學習需求（例如：不同閱讀程度的學生、新住民家庭）。",
        "example": "目標對象為初次接觸遺傳學的國中八年級學生，班上有部分學生需要較多圖像鷹架支援。"
      },
      {
        "letter": "T",
        "nameZh": "Theme 主題與情境",
        "nameEn": "Theme",
        "whatZh": "鎖定具體的學科核心概念、學習重點或真實生活情境",
        "whyZh": "為 AI 提供清晰的邊界與專業語境（例如：『DNA雙螺旋結構與轉錄轉譯』、『牛頓第三運動定律與火箭推進』）。",
        "example": "主題為光學中的『光的折射與全反射原理』及其在光纖通訊中的生活應用。"
      },
      {
        "letter": "S",
        "nameZh": "Structure 格式與架構",
        "nameEn": "Structure",
        "whatZh": "指定具體的輸出形式、架構模型或評量模式",
        "whyZh": "讓 AI 將答案組織成教師熟悉的專業格式（例如：5E 教學架構、4 等級規準表格、CER 聲明-證據-推理課堂退出票、Markdown 格式）。",
        "example": "請以表格呈現，包含：學習目標、探究步驟、引導提問，並在文末附上 1 道 CER 課堂退出票。"
      }
    ],
    "evolutionExample": {
      "title": "提示詞三層境界演進（以九年級生物課為例）",
      "simple": {
        "level": "初階 (Simple)",
        "prompt": "給我一些九年級生物課的教案點子。",
        "flaw": "指令過於空泛模糊，沒有具體主題（生物範疇廣大）、教學活動型態或評量目標。AI 只能給出普遍性、未聚焦的泛用建議。"
      },
      "better": {
        "level": "進階 (Better)",
        "prompt": "建議三個教九年級學生認識 DNA 的活動。",
        "flaw": "限縮了範圍至 DNA 並指定了數量，但仍缺乏教學架構指引與課堂實施型態（如：探究實驗、合作學習還是自主閱讀）。"
      },
      "best": {
        "level": "大師級 (Best - PARTS完整體)",
        "prompt": "你是一位九年級生物老師的課程設計專家 (Persona)。請為即將向學生介紹 DNA 結構與功能的課堂 (Theme)，建議三個教學活動 (Act)：包含一個動手操作互動實驗、一個探究式引導活動、一個小組合作專案 (Structure)，目標對象是初次學習此概念的 14-15 歲學生 (Recipient)。",
        "flaw": "完美兼顧角色深度、受眾認知、特定主題與多樣化教學架構，能直接產出立即可用的高規格教案！"
      }
    }
  },
  "classroomTools": [
    {
      "id": "tool-lesson-plan",
      "nameZh": "規劃教案大綱",
      "nameEn": "Outline a lesson plan",
      "category": "規劃",
      "tags": [
        "精選",
        "規劃"
      ],
      "icon": "clipboard-list",
      "color": "#1a73e8",
      "descZh": "引導式 AI 範本，依據適用年級、學科主題、教學時長與教學模式（如 5E 探究教學法或通用模式），自動生成完整單元架構、學習目標、引導活動與評量規劃。",
      "descEn": "Guided AI template that generates a complete first draft of a standards-aligned lesson sequence based on your target grade, learning objectives, and instructional model.",
      "inputGuideZh": "輸入年級（例如：國中七年級、高中十年級）、指定教學主題與對齊的課程標準指標（可直接複製貼上課綱標準），並可附加 Google 雲端硬碟中的單元教材或大綱以強化情境深度。",
      "promptTemplateZh": "你是一位[年級與學科，例如：高一物理]老師。請為[單元主題，例如：牛頓第三運動定律與動量守恆]設計一個為期[天數，例如：3天]的教案大綱。請採用[教學模式，例如：5E 探究教學架構]，內容需包含：引起動機、探究活動、核心概念解說、應用延伸與形成性評量（附課堂退出票）。",
      "promptTemplateEn": "You are a [grade & subject] teacher. Outline a [number of days]-day lesson sequence introducing [topic & standard]. Use the [5E / General] instructional model and include engaging inquiry activities, student checks, and an exit ticket.",
      "proTipsZh": "在 Google Classroom 內生成初稿後，可直接在對話框中要求 Gemini 微調（例如：「請為第二天的活動增加分組合作學習策略」），滿意後點擊『匯出至 Google 文件』進行最終格式調整與分享！",
      "slideRef": 83
    },
    {
      "id": "tool-generate-quiz",
      "nameZh": "生成測驗",
      "nameEn": "Generate quiz",
      "category": "評量",
      "tags": [
        "精選",
        "評量"
      ],
      "icon": "help-circle",
      "color": "#9334e6",
      "descZh": "快速產出符合特定年級與評量標準的多元題型隨堂測驗或單元評量，包含單選題、多選題、簡答題與探究題，並附上詳盡解析與評分參考。",
      "descEn": "Quickly create diverse quizzes aligned with specific learning objectives, complete with multiple-choice questions, short answers, reasoning prompts, and detailed answer explanations.",
      "inputGuideZh": "指定題目數量（例如：5題選擇題、2題問答題）、目標認知層次（布魯姆認知歷程：理解、應用、分析）與測驗範圍，並可上傳授課講義使題目精準扣合教學內容。",
      "promptTemplateZh": "你是一位[年級與學科，例如：國八理化]老師。請根據[單元主題，例如：光學與光的折射現象]，設計一份包含[題數，例如：5題單選題與2題開放式情境分析題]的形成性測驗。每題請標註測驗目標、正確答案，並提供易懂的解題剖析與常見錯誤觀念指引。",
      "promptTemplateEn": "You are a [grade & subject] teacher. Create a formative quiz with [number of questions] multiple-choice and open-ended questions testing student understanding of [topic]. Include answer keys and explanations addressing common misconceptions.",
      "proTipsZh": "可直接請 Gemini 將題目輸出為表格或 Google Forms 友善格式，一鍵快速轉入 Google 表單進行線上派卷自動閱卷！",
      "slideRef": 65
    },
    {
      "id": "tool-create-rubric",
      "nameZh": "建立評分量表",
      "nameEn": "Create rubric",
      "category": "評量",
      "tags": [
        "精選",
        "評量"
      ],
      "icon": "table",
      "color": "#e37400",
      "descZh": "建立結構完整、規準清晰的評分量表 (Rubric)，涵蓋多個評量維度與不同表現水準（例如：傑出、良好、尚可、待加強），讓學生學習表現有客觀標準可循。",
      "descEn": "Design comprehensive, multi-dimensional rubrics with clear performance levels (Exemplary, Proficient, Developing, Beginning) for any project, paper, or lab presentation.",
      "inputGuideZh": "明確定義作業型態（如：專案研究報告、分組口頭簡報、科學實驗手冊）、評分向度（內容深度、邏輯組織、團隊合作、表達技巧）與滿分權重。",
      "promptTemplateZh": "你是一位[年級與學科]教師。請為[作業或專案名稱，例如：『綠色能源永續校園提案簡報』]設計一份 4 個等級（精熟 4分、良好 3分、基礎 2分、待加強 1分）的綜合評分量表。評分維度需包含：[1. 科學知識準確性、2. 創新思維與可行性、3. 簡報組織與視覺設計、4. 現場問答表現]，各等級需有具體且客觀的行為指標敘述。",
      "promptTemplateEn": "Act as an educational assessment specialist. Design a 4-level analytic rubric (Exemplary, Proficient, Developing, Beginning) for a [grade level] project on [project topic]. Include criteria for [content mastery, critical thinking, organization, and presentation].",
      "proTipsZh": "評分量表可直接貼至 Google Classroom 的「評分規準 (Rubrics)」設定中，在線上批改學生作業時直接點選等級自動計分！",
      "slideRef": 13
    },
    {
      "id": "tool-project-ideas",
      "nameZh": "發想專題靈感",
      "nameEn": "Brainstorm project ideas",
      "category": "規劃",
      "tags": [
        "精選",
        "規劃"
      ],
      "icon": "lightbulb",
      "color": "#12b5cb",
      "descZh": "結合真實世界情境（PBL 專題導向學習），為不同年級與學科發想吸睛、跨領域且深具啟發性的探究主題與實作專題構想。",
      "descEn": "Generate creative, interdisciplinary Project-Based Learning (PBL) ideas that connect curriculum standards to authentic real-world challenges.",
      "inputGuideZh": "提供學生年級、學科核心概念、專案預計執行週數，以及任何在地生活情境或跨領域結合方向（如結合生活科技、環境永續）。",
      "promptTemplateZh": "請擔任專題導向學習 (PBL) 課程設計專家。我正在為[年級，例如：國九學生]規劃一門結合[學科，例如：地球科學與生活科技]的跨領域專題課程。請提供 3 個引人入勝且具備真實世界挑戰性的專案構想。每個構想請列出：專案名稱、核心驅動問題 (Driving Question)、學生的最終產出物、所需運用的關鍵技能，以及在地社群連結方式。",
      "promptTemplateEn": "Act as a Project-Based Learning (PBL) curriculum specialist. Brainstorm 3 authentic project ideas for [grade level] students connecting [subject concepts] with real-world community challenges. Include driving questions and final deliverables.",
      "proTipsZh": "可進一步請 Gemini 針對選定的專案構想，為學生擬定每週進度檢核里程碑 (Milestones) 與階段成果檢核表！",
      "slideRef": 87
    },
    {
      "id": "tool-write-explanations",
      "nameZh": "撰寫說明文字",
      "nameEn": "Write explanations / instructions",
      "category": "說明用教材",
      "tags": [
        "說明用教材"
      ],
      "icon": "file-text",
      "color": "#0d904f",
      "descZh": "將複雜、抽象或深奧的學術概念，轉化為親切生動、具備貼切比喻且易於學生理解的說明文字或任務指示說明。",
      "descEn": "Transform dense, complex academic concepts or task instructions into clear, engaging, student-friendly explanations with relatable everyday analogies.",
      "inputGuideZh": "輸入需要解釋的核心概念、學生的年齡層與先備知識程度，並可指定說明風格（例如：故事化、對比生活情境、問答式引導）。",
      "promptTemplateZh": "你是一位熱愛教學的[學科]老師。請向[目標年級，例如：小學六年級或國一]學生解釋[抽象概念，例如：光的折射與全反射原理]。請使用一個生動貼切的日常生活比喻（例如游泳池底部的視覺落差），語氣親切熱情、具啟發性，篇幅約 300 字，並在最後設計一個讓學生能在家自主嘗試的簡單觀察小挑戰。",
      "promptTemplateEn": "You are an enthusiastic [subject] educator. Explain [complex concept] to [grade level] students using an intuitive real-world analogy. Keep the tone engaging and accessible, and end with an observational challenge.",
      "proTipsZh": "如果班上有閱讀理解困難或特教生，可請 Gemini 依 Lexile 閱讀難度指標產出更簡短、圖像化輔助的精簡版本。",
      "slideRef": 45
    },
    {
      "id": "tool-choice-boards",
      "nameZh": "建立選項板",
      "nameEn": "Create choice boards",
      "category": "說明用教材",
      "tags": [
        "說明用教材",
        "學生支援"
      ],
      "icon": "grid",
      "color": "#188038",
      "descZh": "建立九宮格或多元選項板 (Choice Boards / Tic-Tac-Toe)，賦予學生自主選擇學習活動與評量展現方式的權力，體現差異化教學與普遍學習設計 (UDL)。",
      "descEn": "Design 3x3 grid choice boards or flexible activity menus that give students agency over how they demonstrate their learning, embodying UDL principles.",
      "inputGuideZh": "指定單元主題與多元智能範疇（如：視覺圖像、動手實作、邏輯分析、口語表達、文學創作），確保不同強項的學生都能找到展現優勢的方式。",
      "promptTemplateZh": "你是一位推動普及學習設計 (UDL) 的教學顧問。請為[年級與單元，例如：高一生物遺傳與變異]設計一個 3x3 九宮格學習選項板 (Choice Board)。每個格子需代表一項能展現學習成效的獨立任務，涵蓋不同學習風格（包含：數位資訊圖表、微播客錄音、手繪漫畫、實驗模型、短篇故事等）。請明確標註各任務的評量重點與所需時間。",
      "promptTemplateEn": "Design a 3x3 student choice board for a [grade level] unit on [topic]. Provide 9 diverse activities spanning visual, kinesthetic, analytical, and narrative expressions, ensuring equal rigor across all options.",
      "proTipsZh": "在 Google Classroom 發布選項板作業時，學生可自由挑選連成一線的三個格子或挑選指定數量任務繳交，大幅提升學習動機！",
      "slideRef": 81
    },
    {
      "id": "tool-vocab-lists",
      "nameZh": "建立單字清單",
      "nameEn": "Create vocabulary lists",
      "category": "說明用教材",
      "tags": [
        "說明用教材"
      ],
      "icon": "book-marked",
      "color": "#d93025",
      "descZh": "為新單元快速梳理核心學科詞彙清單，包含友善定義、情境例句、字根詞源解析與圖像化聯想提示，協助學生建立紮實的學術語言能力。",
      "descEn": "Generate comprehensive academic vocabulary lists with student-friendly definitions, contextual sample sentences, word roots, and visual memory triggers.",
      "inputGuideZh": "提供閱讀章節、主題文章或指定學科單元，設定單字數量（例如：8-12個核心關鍵詞）與目標學生程度。",
      "promptTemplateZh": "你是一位學術詞彙教學專家。請為[年級與單元，例如：國七生物生態系與食物鏈]挑選 8 個最關鍵的核心詞彙。請以表格形式呈現：包含詞彙名稱、學生友善的簡明定義、一個貼近生活的課堂情境造句、詞彙記憶記憶法/聯想技巧，以及一題課堂快問快答檢核題。",
      "promptTemplateEn": "Generate a tier-2 and tier-3 academic vocabulary list of [number] essential terms for a [grade level] unit on [topic]. Include student-friendly definitions, contextual sentences, and memory hooks in a clear table.",
      "proTipsZh": "可進一步請 Gemini 將單字清單轉化為『Gemini Notebook (NotebookLM)』的單元字彙庫，讓學生隨時在課堂提問查詢！",
      "slideRef": 81
    },
    {
      "id": "tool-engaging-hooks",
      "nameZh": "製作吸引人的開場",
      "nameEn": "Craft engaging hooks",
      "category": "規劃",
      "tags": [
        "規劃",
        "視覺輔助"
      ],
      "icon": "zap",
      "color": "#f29900",
      "descZh": "設計課堂前 5 分鐘能瞬間抓住全班目光的引起動機活動 (Hooks / Warm-ups)，如神秘懸疑情境、爭議性思辨問題、趣味體驗小實驗或日常矛盾現象。",
      "descEn": "Design captivating 5-minute lesson hooks, mystery puzzles, cognitive dissonance scenarios, and warm-up questions that instantly ignite curiosity at the start of class.",
      "inputGuideZh": "輸入本堂課的核心探究主題、學生的生活經驗或熱門話題（如動漫、運動、科技生活），指定希望採用的引起動機型態。",
      "promptTemplateZh": "你是一位善於抓住學生專注力的名師。我即將向[目標年級]學生講授[難點主題，例如：作用力與反作用力 / 牛頓第三定律]。請提供 3 個完全不同風格、可在課堂前 3-5 分鐘實施的破冰引起動機開場 (Lesson Hook)：1. 一個反直覺的日常生活矛盾現象謎題；2. 一個動手實作的快速迷你小實驗；3. 一個生活爭議思辨情境（如溜冰場或太空人推動太空艙）。請附上引起全班熱烈討論的引導提問句。",
      "promptTemplateEn": "Generate 3 engaging lesson hooks for [grade level] introducing [topic]. Provide: 1. A counter-intuitive riddle; 2. A 3-minute hands-on demonstration; 3. A compelling real-world dilemma with guiding discussion questions.",
      "proTipsZh": "可搭配 Google Slides 或 Vids，一鍵將生成的爭議情境化為開場投影片的醒目標題，在鐘響前就讓學生沉浸在思考中！",
      "slideRef": 87
    },
    {
      "id": "tool-misconceptions",
      "nameZh": "解決常見的誤解",
      "nameEn": "Address common misconceptions",
      "category": "學生支援",
      "tags": [
        "學生支援",
        "評量"
      ],
      "icon": "alert-triangle",
      "color": "#1a73e8",
      "descZh": "預先辨識學生在特定主題上最容易產生的迷思概念 (Misconceptions)，並提供針對性的概念釐清教學策略、反例示範與探究式引導問答。",
      "descEn": "Identify entrenched student misconceptions on challenging topics and generate targeted conceptual change strategies, refutational analogies, and diagnostic questions.",
      "inputGuideZh": "輸入教學概念，要求 AI 列出該年齡層學生最常見的 3-4 個錯誤觀念，以及背後的思維成因與破解教學建議。",
      "promptTemplateZh": "你是一位資深學科輔導專家。在教授[年級與單元，例如：國中理化浮力與密度]時，學生通常會抱持哪些直覺但錯誤的迷思概念（例如誤以為『重的物體一定下沉、輕的物體一定漂浮』）？請列出最常見的 3 個迷思，並為每一個迷思提供：1. 學生產生錯誤直覺的原因分析；2. 一個能打破該迷思的具體反例或課堂探究實驗；3. 老師可以用來診斷全班理解度的階梯式追問問題。",
      "promptTemplateEn": "Act as a learning science researcher. What are the top 3 common misconceptions [grade level] students have about [topic]? For each, explain the underlying logic flaw and provide a refutational demonstration and diagnostic questioning sequence.",
      "proTipsZh": "在設計單元期中考或隨堂測驗時，可將這些常見迷思概念設計成選擇題的『高誘答力誘答選項 (Distractors)』，有效診斷學生深層理解！",
      "slideRef": 80
    },
    {
      "id": "tool-write-stories",
      "nameZh": "編寫故事",
      "nameEn": "Write stories",
      "category": "說明用教材",
      "tags": [
        "說明用教材"
      ],
      "icon": "book",
      "color": "#ea4335",
      "descZh": "將枯燥或繁瑣的學科知識，編織進充滿冒險、懸疑、幽默或歷史背景的引人入勝教學故事中，大幅強化學生的情境記憶與情感共鳴。",
      "descEn": "Weave complex curricular concepts into imaginative, relatable pedagogical narratives that boost retention, empathy, and emotional engagement.",
      "inputGuideZh": "提供想要融入故事中的核心概念與學習重點、故事主角設定、情節氛圍與篇幅字數，並可設定中途留有需要學生協助解決的懸念問題。",
      "promptTemplateZh": "你是一位富有想像力的科普作家與教育家。請為[年級學生]創作一篇約 500 字的引人入勝冒險故事，以生動有趣的方式帶出[學科主題，例如：紅血球在人體循環系統中的旅程，或是電子在電路中的冒險]。故事中需自然融入關鍵概念[如：養分輸送、肺泡交換、動脈與靜脈壓力差別]，並在故事高潮處設計一個需要學生運用本課知識來破解的難題。",
      "promptTemplateEn": "Write an engaging educational narrative for [grade level] students that brings [scientific / historical concept] to life. Weave core facts seamlessly into character dialogue and end with a cliffhanger question for students to solve.",
      "proTipsZh": "可將故事匯入『Gemini Notebook (NotebookLM)』生成播客音訊導覽 (Audio Overview)，讓學生戴上耳機彷彿在聽廣播劇！",
      "slideRef": 80
    },
    {
      "id": "tool-translate-text",
      "nameZh": "翻譯文字",
      "nameEn": "Translate text",
      "category": "學生支援",
      "tags": [
        "學生支援",
        "行政工作"
      ],
      "icon": "languages",
      "color": "#34a853",
      "descZh": "以高水準教育專業語氣，迅速翻譯親師聯絡函、課堂作業說明、家庭作業指引或多語系學習單，搭起跨語言族群與新住民家庭溝通橋樑。",
      "descEn": "Translate classroom materials, homework sheets, and parent newsletters across languages with pedagogical sensitivity, natural tone, and educational accuracy.",
      "inputGuideZh": "輸入欲翻譯的原始文本，指定來源語言與目標語言（支援繁體中文、英文、越南文、印尼文等全球80+語言），並註明目標讀者是家長還是學生。",
      "promptTemplateZh": "你是一位具備教育專業背景的翻譯專家。請將以下[課堂通知 / 作業說明 / 親師通訊信函]翻譯為優雅、親切且精準的[目標語言，例如：英文 / 越南文 / 繁體中文]，請保持專業溫暖的教育語氣，並確保專有名詞符合當前教育現場慣用語：\n\n[在此貼上原始文本]",
      "promptTemplateEn": "You are a professional educational translator. Translate the following [parent newsletter / assignment description] into [target language], maintaining an encouraging, clear, and culturally responsive tone.",
      "proTipsZh": "可進一步利用自訂 Gem 功能建立專屬『班級翻譯秘書 Gem』，隨時貼入任何公告即時產出雙語版本！",
      "slideRef": 55
    },
    {
      "id": "tool-lab-guides",
      "nameZh": "實驗指引製作",
      "nameEn": "Lab guide creation",
      "category": "說明用教材",
      "tags": [
        "說明用教材",
        "規劃"
      ],
      "icon": "flask-conical",
      "color": "#4285f4",
      "descZh": "一鍵生成結構嚴謹、條理分明且高度注重安全的學生端科學實驗手冊，包含實驗目的、器材清單、圖解步驟說明、數據紀錄表與分析反思問題。",
      "descEn": "Generate comprehensive, student-friendly science laboratory manuals with safety protocols, apparatus checklists, step-by-step procedures, data tables, and post-lab analysis prompts.",
      "inputGuideZh": "指定年級、實驗主題（例如：光的折射率測量、洋蔥表皮細胞顯微鏡觀察）、現有實驗器材限制與預計課堂時間。",
      "promptTemplateZh": "你是一位資深中學科學實驗室指導教師。請為[年級學生]設計一份[實驗主題，例如：利用半圓形玻璃磚測量光在不同介質中的折射率]的學生端實作指引手冊。格式需包含：1. 實驗目標與探究問題；2. 安全注意事項與器材盤點清單；3. 分步驟實作步驟（附操作提示）；4. 空白數據觀察紀錄表格；5. 三題引導學生進行誤差分析與推論的課後討論題。",
      "promptTemplateEn": "You are a science lab coordinator. Create a student-facing lab guide for a [grade level] experiment on [topic]. Include learning objectives, safety rules, required materials, step-by-step procedures, a data collection table, and post-lab analysis questions.",
      "proTipsZh": "若將現有的實驗教案 PDF 上傳至 Gemini Notebook (NotebookLM)，可直接一鍵生成完全吻合您實驗室器材規格的客製化實驗單！",
      "slideRef": 22
    }
  ],
  "sections": [
    {
      "id": "classroom",
      "title": "Google Classroom 課堂專區 (鷹架工具與作業整合)",
      "subtitle": "對應 Google 教室內「運用 Gemini 建立內容和資源」各項功能",
      "icon": "graduation-cap",
      "badge": "最熱門實用",
      "slideRange": "第 78 - 108 頁",
      "desc": "深入探討 Google Classroom 內建的 12 種鷹架工具 (Scaffolded Tools)、起始提示詞、指派 Gem/NotebookLM 作業、置頂學習資源，以及 @Classroom 班級連動功能。"
    },
    {
      "id": "parts",
      "title": "PARTS 提示詞黃金架構與專業心法",
      "subtitle": "Google 官方推薦的教學提示詞設計心法",
      "icon": "sparkles",
      "badge": "核心方法論",
      "slideRange": "第 12 - 15 頁",
      "desc": "Persona (角色)、Act (行動任務)、Recipient (受眾對象)、Theme (主題背景)、Structure (格式架構)。掌握從初階、進階到大師級提示詞的質變關鍵。"
    },
    {
      "id": "core_prompts",
      "title": "Gemini for Education 核心教學實戰庫",
      "subtitle": "涵蓋規劃、評量、教材、差異化、行政與專題研究",
      "icon": "book-open",
      "badge": "實用提示詞",
      "slideRange": "第 16 - 32 頁",
      "desc": "包含 5 天單元課程序列、差異化評量命題、實驗指引製作、考程規劃、補助企劃案、學生自主學習導引等立即可用的範本。"
    },
    {
      "id": "gems",
      "title": "自訂教學專家：Gemini Gems",
      "subtitle": "打造 24 小時專屬的學科助理與學生學伴",
      "icon": "gem",
      "badge": "專屬助理",
      "slideRange": "第 48 - 60 頁",
      "desc": "掌握系統指令 (System Instructions) 與知識庫配置。提供課程標準教案專家、課堂翻譯小幫手、活動遊戲化專家、化學學伴等 7 套現成指令範本。"
    },
    {
      "id": "notebooklm",
      "title": "Gemini Notebook (NotebookLM) 知識庫實戰",
      "subtitle": "以 8 週物理單元貫穿示範的精準教研庫",
      "icon": "folder-git2",
      "badge": "無幻覺精準",
      "slideRange": "第 61 - 77 頁",
      "desc": "基於上傳教材與課程綱要進行精準問答、生成播客語音導覽 (Audio Overviews)、影片導覽、跨章節心智圖 (Mind Map)，以及教師 PLC 專業社群共備。"
    },
    {
      "id": "advanced",
      "title": "前沿進階功能：深度研究、引導學習與畫布協作",
      "subtitle": "Deep Research、Guided Learning 與 Gemini Canvas",
      "icon": "cpu",
      "badge": "強大科技",
      "slideRange": "第 33 - 47 頁",
      "desc": "數分鐘產出數十頁學術研究報告 (Deep Research)、以蘇格拉底式提問引導學生解題 (Guided Learning)，以及在雙欄畫布即時編修教案與執行程式碼 (Canvas)。"
    },
    {
      "id": "workspace",
      "title": "Google Workspace 跨工具協作實務",
      "subtitle": "Docs、Gmail、Sheets、Forms、Meet、Vids 與 Imagen",
      "icon": "briefcase",
      "badge": "效率加倍",
      "slideRange": "第 109 - 124 頁",
      "desc": "Docs 教學進度排程與個別回饋、Gmail 家長信建議回覆、Sheets 班級統計公式、Forms 雲端一鍵轉題庫、Meet 自動會議筆記、Vids 教學影片與 Imagen 科普插圖。"
    },
    {
      "id": "overview",
      "title": "導讀、產品總覽與介面功能剖析",
      "subtitle": "認識 Gemini 3.1 Pro、LearnLM 與教育帳號優勢",
      "icon": "compass",
      "badge": "基礎入門",
      "slideRange": "第 1 - 11 頁",
      "desc": "了解 Google for Education 生成式 AI 套件結構、企業級隱私保護（不以教育資料訓練模型）、18歲以下防護機制與各平台入口。"
    },
    {
      "id": "admin_literacy",
      "title": "AI 素養資源與 IT 管理員設定",
      "subtitle": "Google 官方認證路徑與 Admin 控制台管理",
      "icon": "shield-check",
      "badge": "資安與認證",
      "slideRange": "第 125 - 129 頁",
      "desc": "Google 官方 AI 素養資源與證書指引、IT 管理員在 Admin Console 如何配置學生與教職員的存取權限與安全性政策。"
    }
  ],
  "prompts": [
    {
      "id": "p-12",
      "slideNum": 12,
      "category": "parts",
      "subCategory": "提示詞心法",
      "titleZh": "大師級提示詞示範：九年級 DNA 結構教學活動設計",
      "titleEn": "How to Prompt Like a Pro: 9th Grade DNA Lesson Ideas",
      "roleScenarioZh": "九年級生物教師引導初學者進入分子生物學領域",
      "promptZh": "請擔任九年級生物老師的課程設計專家。我們即將向學生介紹 DNA 的結構與功能。請建議三個教學點子：一個動手操作的互動實驗、一個探究式引導活動、一個分組合作專案。請針對初次學習此概念的 14-15 歲學生設計。",
      "promptEn": "Act as an instructional designer for a 9th grade biology teacher introducing students to DNA structure and function. Suggest three lesson ideas: one interactive lab, one inquiry-based exploration, and one collaborative project.",
      "parts": {
        "persona": "九年級生物科課程設計專家 (Instructional designer for 9th grade biology)",
        "act": "建議三種不同型態的教學活動點子 (Suggest three lesson ideas)",
        "recipient": "初次接觸 DNA 概念的 14-15 歲九年級國中/高中學生 (9th grade students)",
        "theme": "DNA 雙螺旋結構與其生物學功能 (DNA structure and function)",
        "structure": "三種類型：互動實驗、探究活動、合作專案 (Interactive lab, inquiry exploration, collaborative project)"
      },
      "tipsZh": "當你明確指定教學型態（實驗、探究、專案）時，AI 給出的建議就不會只是概念講解，而是可以直接排入行事曆的多元課堂活動！",
      "applicableTools": [
        "Gemini App",
        "Google Classroom",
        "Google Docs"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-14",
      "slideNum": 14,
      "category": "parts",
      "subCategory": "5E 教案架構",
      "titleZh": "PARTS 黃金範例：十年級 DNA 結構與功能 5E 探究教案",
      "titleEn": "Breaking Down a Great Prompt with PARTS: 10th Grade DNA 5E Lesson",
      "roleScenarioZh": "高中生物教師規劃探究導向的 5E 教學單元與形成性評量",
      "promptZh": "你是一位高中生物教師。請為十年級學生設計一個 5E 探究式教案，介紹 DNA 的結構與功能。請針對探究導向的科學課堂量身打造，內容需包含一個引人入勝的實驗活動，並在文末附上一道主張-證據-推理 (CER) 寫作提示作為課堂退出票。",
      "promptEn": "You are a high school educator. Design a 5E lesson for 10th grade students introducing the structure and function of DNA. Tailor the lesson for an inquiry-based science class and include an engaging lab activity and a claim-evidence-reasoning (CER) writing prompt as the exit ticket.",
      "parts": {
        "persona": "高中生物專業教師 (High school educator)",
        "act": "設計完整的 5E 教案 (Design a 5E lesson)",
        "recipient": "十年級探究導向科學課堂學生 (10th grade students in an inquiry-based classroom)",
        "theme": "DNA 的分子結構與遺傳功能 (Structure and function of DNA)",
        "structure": "5E 教學模式（參與、探索、解釋、精緻化、評量）+ 動手實驗 + CER 課堂退出票"
      },
      "tipsZh": "CER (Claim-Evidence-Reasoning) 是國際標準的科學論證寫作框架，用來做課堂退出票 (Exit Ticket) 能立即診斷學生是否真正理解實驗數據背後的科學意涵。",
      "applicableTools": [
        "Gemini App",
        "Google Classroom",
        "Google Docs"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-18",
      "slideNum": 18,
      "category": "core_prompts",
      "subCategory": "規劃",
      "titleZh": "規劃教案大綱：九年級細胞分裂 5 天單元課程序列",
      "titleEn": "Planning: Generate Lesson Ideas for 9th Grade Cell Division",
      "roleScenarioZh": "九年級生物教師規劃完整的單元學習歷程",
      "promptZh": "你是一位九年級生物教師。請設計一個為期 5 天的教案序列，介紹細胞分裂（有絲分裂與減數分裂）。這 5 天的規劃需循序漸進引導學生達成精熟，請包含主動學習活動、日常檢核提問，以及為進度超前學生準備的延伸挑戰。",
      "promptEn": "You are a 9th grade biology teacher. Design a 5-day lesson sequence introducing cell division (mitosis and meiosis). The 5 days should build progressively toward student mastery, incorporating active learning, daily checks for understanding, and extension activities for students who are ready to move on.",
      "parts": {
        "persona": "九年級生物科專業教師",
        "act": "設計 5 天循序漸進的課程序列",
        "recipient": "九年級學生（包含不同學習進度者）",
        "theme": "細胞分裂：有絲分裂 (Mitosis) 與減數分裂 (Meiosis)",
        "structure": "按日排列之單元序列 + 主動學習活動 + 形成性檢核 + 延伸挑戰題"
      },
      "tipsZh": "可進一步追問：『請為第 3 天的有絲分裂染色體觀察活動，設計一份包含安全注意事項的學生操作檢核表』。",
      "applicableTools": [
        "Gemini App",
        "Google Classroom",
        "Google Docs"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-20",
      "slideNum": 20,
      "category": "core_prompts",
      "subCategory": "評量",
      "titleZh": "差異化現有評量：十年級世界歷史三次工業革命多層次測驗",
      "titleEn": "Assessment: Differentiate an Existing Assessment for 10th Grade History",
      "roleScenarioZh": "十年級歷史教師為多元程度學生設計同等認知深度的評量",
      "promptZh": "你是一位十年級世界歷史教師。請將一份關於三次工業革命（蒸氣機、電力、資訊科技）的評量重新改寫為三種不同難易度水準的版本。所有版本需評量相同的核心歷史概念，但提供不同層次的鷹架支援（例如：提供詞彙提示庫、引導思考框架或開放式申論題）。",
      "promptEn": "You are a 10th grade world history teacher. Rewrite an assessment on the three industrial revolutions (steam, electric, information technology) to create three differentiated levels for students. All three assessments should test the same core concepts, but offer varying levels of scaffolding (such as word banks, sentence stems, or open-ended analytical questions).",
      "parts": {
        "persona": "十年級世界歷史專業教師",
        "act": "將現有評量改寫為三種差異化層級版本",
        "recipient": "十年級多元學習程度學生（需不同鷹架支援者）",
        "theme": "三次工業革命（蒸氣動力、電力普及、資訊科技革新）",
        "structure": "三級分層評量（入門級附詞彙庫與填空、中級附引導句首、挑戰級全開放批判分析）"
      },
      "tipsZh": "差異化評量的核心原則是『認知標準不打折，但提供多樣化的展現途徑與鷹架輔助』，確保特教生或語言學習生也能公平展現歷史思維。",
      "applicableTools": [
        "Gemini App",
        "Google Classroom",
        "Google Forms"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-22",
      "slideNum": 22,
      "category": "core_prompts",
      "subCategory": "說明用教材",
      "titleZh": "製作學生實驗手冊：生物顯微鏡細胞觀察指引",
      "titleEn": "Instructional Materials: Biology Lab Guide Creation",
      "roleScenarioZh": "生物科實驗室指導員為學生撰寫條理分明、安全第一的實作單",
      "promptZh": "你是一位生物實驗室協調指導員。請為九年級生物課的洋蔥表皮細胞顯微鏡觀察實驗，製作一份學生專用的實驗操作指引手冊。內容需包含清晰的逐步操作步驟、醒目的安全注意事項提醒、圖文並茂的數據紀錄表格，以及 3 道引導學生探究細胞構造與功能的課後討論問題。",
      "promptEn": "You are a biology lab coordinator. Create a student-facing lab guide for a 9th grade biology class investigating plant and animal cells under a microscope. Include clear step-by-step procedures, safety reminders, data recording tables, and three post-lab inquiry questions.",
      "parts": {
        "persona": "生物實驗室協調指導員 (Biology lab coordinator)",
        "act": "製作學生專用實驗操作指引手冊",
        "recipient": "初次操作光學顯微鏡的九年級學生",
        "theme": "動植物細胞（洋蔥表皮與口腔皮膜細胞）顯微觀察",
        "structure": "分步驟操作步驟 + 安全須知 + 觀察紀錄表格 + 3 道課後探究問題"
      },
      "tipsZh": "可以直接將手冊複製到 Google 文件中加上插圖，或直接匯入 Google Classroom 作為作業附加材料！",
      "applicableTools": [
        "Gemini App",
        "Google Docs",
        "Google Classroom"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-25",
      "slideNum": 25,
      "category": "core_prompts",
      "subCategory": "行政工作",
      "titleZh": "考試週考程與排班規劃：平衡特殊需求考場與教師輪替",
      "titleEn": "Administrative Tasks: Schedule Planning for Testing Week",
      "roleScenarioZh": "教務處教學組長/學校行政助理安排全校段考週考程與監考輪值",
      "promptZh": "你是一位學校教務處行政助理。請為期末評量週建立一份詳盡的考程與監考排班規劃表。需考量：特殊教育學生所需的延長作答時間與安靜獨立考場安排、教師監考輪替公平性、考卷收發動線與閱卷休息時間，並以清晰的表格形式呈現每日考程。",
      "promptEn": "You are a school operations assistant. Create a comprehensive testing schedule and proctor rotation for finals week. Factor in accommodations for students with extended time, equitable distribution of proctoring duties among faculty, secure test distribution, and break periods. Present the schedule as an easy-to-read table.",
      "parts": {
        "persona": "學校教務行政助理 (School operations assistant)",
        "act": "規劃全校評量週考程與監考輪替表",
        "recipient": "全校教師、監考人員與特殊需求考生",
        "theme": "期末考考場規劃、特教延長時間安置與監考時數公平分配",
        "structure": "時間矩陣排程表格 + 特教支援配套 + 應急替代方案"
      },
      "tipsZh": "可進一步請 Gemini 產出一份發給全校教職員的提醒 Email 與監考守則摘要！",
      "applicableTools": [
        "Gemini App",
        "Google Sheets",
        "Google Docs"
      ],
      "targetAudience": "行政主管"
    },
    {
      "id": "p-27",
      "slideNum": 27,
      "category": "core_prompts",
      "subCategory": "專案研究與補助",
      "titleZh": "科技教育創新補助企劃案發想與大綱撰寫",
      "titleEn": "Research: Grant Proposal Brainstorming for Educational Tech",
      "roleScenarioZh": "學科召集人或學校主任申請政府或民間教育創新補助專案",
      "promptZh": "你是一位專業的教育補助案撰寫顧問。我正在為學校撰寫一份爭取科技融入教學的創新計畫企劃案，目標是建立『中學跨領域 AI 與科學創客中心』。請協助發想企劃書核心架構，包含：引人入勝的專案摘要、迫切的校園痛點與需求陳述、符合 SMART 原則的具體目標、實施方法與階段進度表、預期量化與質化效益，以及初步經費預算編列範疇。",
      "promptEn": "You are a grant writing support coach. I’m developing a proposal for an educational innovation grant to build a secondary school AI & STEM maker lab. Help me outline the core proposal: executive summary, compelling statement of need, SMART objectives, implementation timeline, expected student outcomes, and budget allocation categories.",
      "parts": {
        "persona": "專業教育計畫補助案撰寫顧問",
        "act": "發想並建立完整的創新補助計畫書架構",
        "recipient": "補助案審查委員、校長與外部評審",
        "theme": "跨領域 AI 與科學創客中心建置與素養教學",
        "structure": "摘要 + 需求分析 + SMART 目標 + 實施甘特圖 + 效益指標 + 預算表"
      },
      "tipsZh": "將企劃書大綱生成後，可利用 Deep Research (深度研究) 功能自動搜集國內外最新 STEM 實驗室教學成效的實證數據來強化論點！",
      "applicableTools": [
        "Gemini App",
        "Deep Research",
        "Google Docs"
      ],
      "targetAudience": "行政主管"
    },
    {
      "id": "p-29",
      "slideNum": 29,
      "category": "core_prompts",
      "subCategory": "學生自學",
      "titleZh": "概念解構引導：以生活化比喻搞懂 DNA 複製機制",
      "titleEn": "Student Use: Deepen Understanding with Guidance on DNA Replication",
      "roleScenarioZh": "中學生在課後複習時請求 AI 擔任一對一家教耐心解惑",
      "promptZh": "你是一位耐心且善於打比方的生物老師。我正在準備考試，但我一直搞不懂『DNA 複製過程中的半保留複製 (semi-conservative replication) 和引子 (primers) 的作用』。請不要一下子丟出一大堆專有名詞，請先用一個我們日常生活中隨處可見的物品（例如拉鍊或食譜複印）來打比方解釋，並在最後問我一個問題，看看我是不是真的理解了。",
      "promptEn": "You are a biology teacher. I need to understand DNA replication, especially semi-conservative replication and primers, for my upcoming test. Don’t overwhelm me with jargon right away. Start with a simple everyday analogy (like a zipper or recipe copying) to explain how it works, and end by asking me a check-in question to see if I got it.",
      "parts": {
        "persona": "耐心循序漸進的生物科一對一家教",
        "act": "運用生活比喻解構抽象生化反應，並進行理解檢核",
        "recipient": "準備考試的高中生物課自學學生",
        "theme": "DNA 半保留複製機制與引子 (Primers) 功能",
        "structure": "生活直覺比喻 -> 逐步對照生化分子 -> 觀念診斷檢核問題"
      },
      "tipsZh": "學生可以在 Gemini 中開啟語音對話功能，就像真正跟一位私人課後助教在咖啡廳討論一樣聊天互動！",
      "applicableTools": [
        "Gemini App",
        "Guided Learning"
      ],
      "targetAudience": "學生"
    },
    {
      "id": "p-30",
      "slideNum": 30,
      "category": "core_prompts",
      "subCategory": "學生自學",
      "titleZh": "數位單字記憶卡設計：高中歷史關鍵術語強化複習",
      "titleEn": "Student Use: Reinforcing Concepts with Digital Flashcards",
      "roleScenarioZh": "學生自主複習重要名詞，建立高效率記憶翻翻卡",
      "promptZh": "請擔任教育內容設計師。請為準備世界史期末考的學生，設計一組包含 8 張雙面數位記憶卡 (Flashcards) 的複習內容，主題為『冷戰時期的關鍵名詞（包含：鐵幕、圍堵政策、馬歇爾計畫、古巴飛彈危機等）』。正面請列出關鍵術語與啟發聯想線索；背面請提供 30 字以內的簡明核心意義、歷史影響，以及一個趣味好記的記憶諧音或口訣。",
      "promptEn": "Act as an educational content creator and design an interactive flashcard review set for a high school student studying the Cold War. Create 8 cards covering core terms (Iron Curtain, Containment, Marshall Plan, Cuban Missile Crisis). Front: term + clue; Back: concise definition (<30 words), historical significance, and a memorable mnemonic device.",
      "parts": {
        "persona": "教育記憶與學習策略設計師",
        "act": "設計 8 張具備記憶線索與口訣的雙面記憶卡",
        "recipient": "準備歷史大考的高中學生",
        "theme": "冷戰關鍵歷史術語與地緣政治概念",
        "structure": "正面（術語 + 線索）/ 背面（精練定義 + 意義 + 記憶口訣）"
      },
      "tipsZh": "產出的內容可直接匯入 Quizlet、Anki 或直接貼在 Google Keep 中隨身翻閱複習！",
      "applicableTools": [
        "Gemini App",
        "NotebookLM"
      ],
      "targetAudience": "學生"
    },
    {
      "id": "p-36",
      "slideNum": 36,
      "category": "advanced",
      "subCategory": "Deep Research 深度研究",
      "titleZh": "學術文獻探討綜述：AI 融入中小學 STEM 教學成效研究",
      "titleEn": "Deep Research Example: Literature Review Starter on AI in STEM Education",
      "roleScenarioZh": "教育研究所研究生或在職進修教師撰寫論文文獻探討與專案研究",
      "promptZh": "請擔任高階學術研究助理，協助正在進行教育研究的學者。請利用 Deep Research 深度研究功能，全面檢索近 5 年來經同行評審 (Peer-reviewed) 的學術文獻，綜述『生成式人工智慧對中學生 STEM 批判性思維與問題解決能力之影響』。報告需包含：各國量化研究的主要發現、質性課堂觀察的挑戰、現存研究盲點與爭議，並提供完整符合 APA 第七版格式的文獻引用清單。",
      "promptEn": "Act as a research assistant supporting a faculty member. Summarize the literature from the past 5 years on the efficacy of generative AI tools in enhancing secondary STEM students’ critical thinking and problem-solving skills. Synthesize key empirical findings, methodological gaps, ethical concerns, and format citations in APA 7th edition.",
      "parts": {
        "persona": "資深高等教育學術研究助理",
        "act": "執行跨資料庫深度檢索並產出學術文獻探討報告",
        "recipient": "教育學者、研究生或進行行動研究之第一線教師",
        "theme": "生成式 AI 在中小學 STEM 教學對高階思維之實證成效",
        "structure": "學術綜述報告（背景、核心實證發現、方法論限制、未來研究方向、APA 引用）"
      },
      "tipsZh": "Deep Research 啟動後會自動擬定搜尋計畫、走訪數十個高信度學術來源並生成數頁完整報告；報告完成後，可直接在對話中繼續追問細節！",
      "applicableTools": [
        "Gemini App (Deep Research)",
        "NotebookLM"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-41",
      "slideNum": 41,
      "category": "advanced",
      "subCategory": "Guided Learning 引導式學習",
      "titleZh": "蘇格拉底式解題引導：斜面力學與重力加速度題型",
      "titleEn": "Guided Learning: Learn Deeply Instead of Just Getting Answers",
      "roleScenarioZh": "學生遇到物理作業卡關，AI 不直接給答案而是逐步提問啟發",
      "promptZh": "請幫我解這道物理家庭作業題目：『一個質量 10.5 公斤的木塊沿著傾角 30 度的斜面下滑，動摩擦係數為 0.2，求木塊下滑的加速度大小。』請啟動 Guided Learning 引導式教學模式，絕對不要直接把最終計算答案算給我！請先引導我畫出受力分析圖 (Free Body Diagram)，問我斜面上垂直與平行方向分別有哪些分力，並一步步引導我自己列出牛頓第二定律方程式求出答案。",
      "promptEn": "Help me with this physics homework problem: 'A 10.5 kg block slides down an incline of 30 degrees with a coefficient of kinetic friction of 0.2. Find its acceleration.' Use Guided Learning mode. Do NOT give me the final numeric answer directly! Instead, prompt me to identify the forces acting on the block, guide me through breaking down gravity into components, and ask questions to help me set up the equations myself.",
      "parts": {
        "persona": "堅持啟發式教學的蘇格拉底物理名師",
        "act": "不給答案，透過連續診斷式追問引導學生自主解題",
        "recipient": "正在寫物理作業、需要深層思考的高中生",
        "theme": "斜面運動、重力分力與動摩擦力分析 (Newton's 2nd Law)",
        "structure": "分步驟對話：受力辨識 -> 正交分解 -> 方程式建立 -> 計算檢驗"
      },
      "tipsZh": "這是 Google LearnLM 模型的招牌功能，專門打破學生過度依賴 AI 抄作業的壞習慣，真正培養解題邏輯與思辨韌性！",
      "applicableTools": [
        "Gemini App (Guided Learning)"
      ],
      "targetAudience": "學生"
    },
    {
      "id": "p-45",
      "slideNum": 45,
      "category": "advanced",
      "subCategory": "Gemini Canvas 畫布協作",
      "titleZh": "雙欄畫布即時編修：現有歷史教案改版為差異化教學方案",
      "titleEn": "Gemini Canvas: Revise an Old Lesson for Multiple Learners",
      "roleScenarioZh": "教學設計師在右側畫布邊對話邊修改教案文字結構",
      "promptZh": "請擔任教學設計專家。我正在 Canvas 畫布中編修一份傳統講述式的美國獨立戰爭歷史教案。請在右側畫布中建立一份差異化改進版本，將原本單一的閱讀教材擴展為適用三種不同閱讀程度的文本，為閱讀有挑戰的學生提供段落指引問題，並為高成就學生設計一個『撰寫不同政治立場立場書』的進階思辨任務。",
      "promptEn": "Act as an instructional designer. I’m revising an existing direct-instruction history lesson on the American Revolution. In the Canvas workspace, build a differentiated revision that creates tiered reading passages for three different reading levels, adds scaffolding reflection prompts in the margins, and introduces an extension task for advanced learners to write opposing political op-eds.",
      "parts": {
        "persona": "高階教學設計與課程改版專家",
        "act": "在 Canvas 雙欄畫布中重構傳統教案為多層次差異化架構",
        "recipient": "同一班級內具有多元閱讀理解能力的學生群體",
        "theme": "歷史事件的多視角詮釋與文本差異化閱讀",
        "structure": "Canvas 動態教案：分層文本 + 側邊欄提問鷹架 + 挑戰延伸任務"
      },
      "tipsZh": "在 Gemini Canvas 中，你可以隨時圈選右側畫布中的某一段文字，點擊按鈕一鍵要求：『將此段改寫得更淺顯易懂』或『轉化為要點清單』！",
      "applicableTools": [
        "Gemini Canvas"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-46",
      "slideNum": 46,
      "category": "advanced",
      "subCategory": "Gemini Canvas 畫布協作",
      "titleZh": "程式碼即時撰寫與執行：自由落體與空氣阻力物理模擬動畫",
      "titleEn": "Gemini Canvas: Coding in Canvas - Physics Simulation",
      "roleScenarioZh": "自然科教師或學生在 Canvas 中撰寫 HTML5/JS 動態模擬並即時預覽",
      "promptZh": "請在 Gemini Canvas 中幫我建立一個簡單直覺的 HTML/JavaScript 物理模擬網頁。模擬內容為：在畫面上有一個小球從頂部下落，使用者可以透過滑動軸 (Sliders) 即時調整『物體質量、重力加速度常數 g、以及空氣阻力係數』，畫面上需即時顯示小球當前的速度向量與位移曲線圖表，並支援一鍵重設與慢動作播放。",
      "promptEn": "Help me build a simple interactive physics simulation in Canvas using HTML, CSS, and JavaScript. Show a ball falling under gravity. Allow users to adjust mass, gravitational constant (g), and air resistance coefficient using sliders. Display live velocity and distance graphs alongside the animation with reset and slow-motion toggles.",
      "parts": {
        "persona": "STEM 科學教育程式設計工程師",
        "act": "撰寫單一檔案的互動式物理模擬網頁程式碼",
        "recipient": "學習運動學與力學的高中物理學生",
        "theme": "自由落體、終端速度與空氣阻力之數值模擬",
        "structure": "Canvas 即時可執行程式碼（包含 Canvas 動畫渲染、即時圖表與控制滑桿）"
      },
      "tipsZh": "在 Canvas 介面中，右側可直接切換『預覽 (Preview)』標籤，無需下載任何開發軟體，直接在瀏覽器中操作互動模擬！",
      "applicableTools": [
        "Gemini Canvas"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-52",
      "slideNum": 52,
      "category": "gems",
      "subCategory": "官方精選 Gem",
      "titleZh": "官方精選 Gem：學習教練 (Learning Coach)",
      "titleEn": "Premade Gem: Deepen Understanding with Learning Coach",
      "roleScenarioZh": "學生遇到難題時，向 Google 官方調校的專屬學習教練請教",
      "promptZh": "嗨！我現在在上國三理化的酸鹼中和單元。我已經知道了酸跟鹼反應會產生鹽和水，但我不太明白為什麼強酸滴定弱鹼時，當量點的 pH 值不會剛好等於 7？請不要直接用一大堆複雜的化學公式回答我，請先問問我的理解，再引導我思考水解反應是怎麼發生的。",
      "promptEn": "Hi! I’m studying acid-base neutralization in high school chemistry. I understand that an acid and base react to form water and salt, but I don't understand why the equivalence point pH isn't always 7 when titrating a strong acid with a weak base. Guide me through the concept without just throwing formulas at me.",
      "parts": {
        "persona": "Google 官方預設學習教練 (Learning Coach Gem)",
        "act": "診斷學生先備知識並引導深層概念建構",
        "recipient": "遇到化學概念盲點的中學生",
        "theme": "酸鹼滴定與鹽類水解平衡常數 (Hydrolysis equilibrium)",
        "structure": "啟發式對話回饋 + 梯形問題推進"
      },
      "tipsZh": "✨Google 官方提示技巧：向學習教練提問時，記得『主動提及你已經懂了什麼，或者你在哪個具體步驟卡住了』，教練就能精準切入核心盲點！",
      "applicableTools": [
        "Gemini Gems"
      ],
      "targetAudience": "學生"
    },
    {
      "id": "p-53",
      "slideNum": 53,
      "category": "gems",
      "subCategory": "官方精選 Gem",
      "titleZh": "官方精選 Gem：面試教練 (Career/Interview Coach)",
      "titleEn": "Premade Gem: Prepare for a Job or College Interview with Confidence",
      "roleScenarioZh": "高三學生準備大學甄選個人申請面試，或社會新鮮人求職模擬",
      "promptZh": "請擔任我的模擬面試官。我正在申請[頂尖大學資訊工程學系 / 某科技公司初階軟體實習生]。請一次只問我一個面試問題，涵蓋：自我介紹、專案經驗、挫折克服經驗以及對未來技術趨勢的看法。每當我回答完之後，請針對我的回答給出 3 點具體回饋：優點、可以加強的邏輯或說服力盲點，以及一個更好的改寫示範，然後再進入下一題。",
      "promptEn": "Act as my mock interviewer. I am preparing for an interview for [a university computer science program / an entry-level software internship]. Ask me one interview question at a time. After I answer, provide constructive feedback on my response (strengths, areas to sharpen, sample alternative phrasing), then ask the next question.",
      "parts": {
        "persona": "嚴謹且善於賦能的專業高校/職場模擬面試官",
        "act": "進行一問一答的真實模擬面試，並給予結構化講評",
        "recipient": "準備升學申請或求職面試的青年學子",
        "theme": "個人優勢展現、STAR 原則案例陳述與應變能力",
        "structure": "單題互動提問 -> 結構化回饋 (優點/盲點/示範) -> 遞進下一題"
      },
      "tipsZh": "✨Google 官方技巧：你可以要求面試教練調整提問難度（例如：加強行為面試題或技術深入題），甚至用語音模式直接練習口語表達流暢度！",
      "applicableTools": [
        "Gemini Gems"
      ],
      "targetAudience": "學生"
    },
    {
      "id": "p-54",
      "slideNum": 54,
      "category": "gems",
      "subCategory": "自訂 Gem",
      "titleZh": "自訂 Gem 系統指令：課程標準本位教案專家 Gem",
      "titleEn": "Custom Gem Instructions: Standards-Based Lesson Planning Coach",
      "roleScenarioZh": "教師建立專屬教案設計專家，隨時為任何單元設計符合課綱的教案",
      "promptZh": "【Gem 系統設定指令 / Instructions】：\n你是一位專精於素養導向與標準本位 (Standards-based) 的資深教學教練。你的任務是協助教師設計結構嚴謹、高學生參與度且精準對齊教育標準的單元教案。當教師提供單元主題時，請依序執行以下任務：\n1. 協助釐清對應的核心素養指標與學習表現\n2. 運用 5E 教學模式或逆向設計 (Understanding by Design, UbD) 規劃完整課程序列\n3. 嵌入形成性評量檢核點與差異化學習策略\n4. 提供清晰的課堂時間配置與提問清單\n語氣請保持專業、鼓勵且高度聚焦於學生學習成效。",
      "promptEn": "[Gem Instructions]: You are an instructional coach supporting standards-based lesson planning. Create lesson templates that prioritize active learning, clear objectives, and rigorous assessment. When given a topic, align the activities to specified standards, embed formative assessment checks, suggest tiered differentiation strategies, and provide pacing estimates.",
      "parts": {
        "persona": "素養導向與標準本位資深教學教練 (Instructional coach)",
        "act": "標準對齊、5E/UbD 架構化教案生成、差異化支援",
        "recipient": "需要高效設計嚴謹單元課表的學科教師",
        "theme": "課程標準轉化、逆向設計教學法與課堂實施細節",
        "structure": "完整 Gem 系統指令範本（角色、四大執行步驟、專業語氣）"
      },
      "tipsZh": "在建立 Gem 時，可將學校的課程綱要、學年行事曆或特定規準 PDF 直接上傳到 Gem 的『知識庫 (Knowledge)』中，Gem 就會完全依照你學校的標準回答！",
      "applicableTools": [
        "Gemini Gems"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-55",
      "slideNum": 55,
      "category": "gems",
      "subCategory": "自訂 Gem",
      "titleZh": "自訂 Gem 系統指令：課堂多語言翻譯與親師溝通助手 Gem",
      "titleEn": "Custom Gem Instructions: Classroom Translator Gem",
      "roleScenarioZh": "協助有多元文化家庭、雙語教學或新住民學生的班級進行流暢翻譯",
      "promptZh": "【Gem 系統設定指令 / Instructions】：\n請擔任一位專業的教育翻譯專家，專門協助教師將課堂教材、家庭作業指引、學校重要通知與親師聯絡信函翻譯為多種目標語言（如：英文、越南文、印尼文、日文等）。請嚴格遵守以下準則：\n1. 保持溫暖、尊重且鼓勵的教育專用親師溝通語氣\n2. 精準轉換學術術語，避免生硬的字面直譯，確保文化適應性\n3. 每次輸出時，並列提供『雙語對照版』，方便家長與學生同時對照閱讀\n4. 若原文中有專屬專有名詞（如班級名稱或系統名），請在括號內保留原語言供查對。",
      "promptEn": "[Gem Instructions]: Create a Translator Gem to help me translate classroom materials, homework sheets, and parent updates into multiple languages. Prioritize an encouraging, professional, and accessible tone. Ensure educational terminology is translated accurately and culturally appropriately. Provide side-by-side bilingual output for ease of reading.",
      "parts": {
        "persona": "教育與跨文化親師溝通翻譯專員",
        "act": "多語言精準在地化翻譯、雙語對照排版",
        "recipient": "多元文化家庭、外籍學生家長與雙語學習者",
        "theme": "校園通知、學業評量進度、親師交流聯絡簿",
        "structure": "Gem 系統指令（語氣標準、名詞轉換規範、雙語排版要求）"
      },
      "tipsZh": "平時收到外語家長來信或需要發布班級重要行事時，只要直接把草稿丟進這個 Gem，幾秒鐘就能產出完美的雙語家長通知！",
      "applicableTools": [
        "Gemini Gems"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-56",
      "slideNum": 56,
      "category": "gems",
      "subCategory": "自訂 Gem",
      "titleZh": "自訂 Gem 系統指令：課堂教學遊戲化專家 Gem",
      "titleEn": "Custom Gem Instructions: Lesson-to-Game Gamifier Gem",
      "roleScenarioZh": "教師將任何抽象枯燥的章節快速變身為趣味課堂分組競賽遊戲",
      "promptZh": "【Gem 系統設定指令 / Instructions】：\n你是一位專精於遊戲化學習 (Gamification) 的教學創意顧問。你的使命是將教師提供的任何學科核心概念或單元重點，轉化為生動、刺激且高度參與的課堂小遊戲（例如：益智問答競賽 Trivia、角色扮演任務、逃脫解謎密室或分組積分挑戰）。\n每次產出需具備：\n1. 遊戲名稱與引人入勝的情境背景設定\n2. 規則簡明、可在 10-15 分鐘內完成的流程機制\n3. 即開即用的題目清單與對應分值\n4. 團隊合作與策略討論設計，確保不同程度學生都能參與貢獻。",
      "promptEn": "[Gem Instructions]: Create a Gem that helps me turn classroom lessons into short, engaging group games. Focus on simple, low-prep mechanics like trivia competitions, team challenges, or collaborative puzzle-solving that can be run in about 10-15 minutes. Ensure rules are dead simple and inclusive of all ability levels.",
      "parts": {
        "persona": "遊戲化學習與課堂互動設計大師",
        "act": "將單元學術知識快速轉化為 10-15 分鐘低門檻課堂互動遊戲",
        "recipient": "渴望有趣互動、注意力需要被活化的中小學班級學生",
        "theme": "單元複習、概念強化與團隊合作遊戲機制",
        "structure": "情境故事 + 遊戲規則 + 題目計分機制 + 獎勵反思"
      },
      "tipsZh": "可以把單元單字表或考卷錯題上傳到這個 Gem 的知識庫中，週五最後一堂課隨手就能生成一場 High 翻全班的複習大對抗！",
      "applicableTools": [
        "Gemini Gems"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-57",
      "slideNum": 57,
      "category": "gems",
      "subCategory": "自訂 Gem",
      "titleZh": "自訂 Gem 系統指令：學術嚴謹度評量與作業命題專家 Gem",
      "titleEn": "Custom Gem Instructions: Assessment Rigor & Academic Challenge Assistant",
      "roleScenarioZh": "設計具備學術嚴謹度、高層次思維與防抄襲特性的專案作業",
      "promptZh": "【Gem 系統設定指令 / Instructions】：\n你是一位注重學術嚴謹度 (Academic Rigor) 與高階思維的大學與中學資深助教。你的目標是協助教師設計能激發批判性思考、分析與綜合能力的作業題目與評量規準。要求如下：\n1. 題目需超越單純的記憶檢索，聚焦布魯姆認知架構的『評鑑』與『創造』層次\n2. 題型融入真實世界的情境挑戰或反直覺的案例研究 (Case studies)\n3. 附帶結構嚴謹的分析型評分量表 (Analytic Rubrics)\n4. 設計防 AI 簡易複製貼上的特色，例如要求結合個人經驗、課堂即時辯論或在地實地觀察。",
      "promptEn": "[Gem Instructions]: You are a university teaching assistant focused on academic rigor. Create assignment prompts and rubrics that prioritize high-level cognitive skills (analysis, evaluation, synthesis) over simple recall. Design questions grounded in real-world messy dilemmas that cannot be answered with generic summaries.",
      "parts": {
        "persona": "學術嚴謹度評量與高階認知思維專家",
        "act": "命題高思維深度作業與多維度評量規準",
        "recipient": "高中高年級、先修課程 (AP/IB) 或大專院校學生",
        "theme": "高階認知歷程、真實情境案例分析與學術誠信",
        "structure": "情境任務 + 評估問題 + 4向度評分表 + 反作弊設計機制"
      },
      "tipsZh": "當你希望學生不要只是上網 Google 答案，而是能整合多方資料提出獨立見解時，這個 Gem 是最佳把關者！",
      "applicableTools": [
        "Gemini Gems"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-58",
      "slideNum": 58,
      "category": "gems",
      "subCategory": "自訂 Gem",
      "titleZh": "自訂 Gem 系統指令：學校行政與 AI 培訓協調員 Gem",
      "titleEn": "Custom Gem Instructions: AI Onboarding and Tech Training Coordinator",
      "roleScenarioZh": "資訊組長或科技專任教師為全校同仁建立 AI 工具上手諮詢助理",
      "promptZh": "【Gem 系統設定指令 / Instructions】：\n你是一位學校資訊科技組長兼 AI 教育培訓專員。你的使命是協助全校教職員輕鬆、安全、自信地將 Google AI 工具（包括 Gemini, NotebookLM, Classroom AI）融入日常教學與行政工作。指導準則：\n1. 用最親切、無技術門檻的白話語言解答老師的疑難雜症\n2. 提供立竿見影的日常教學省時小撇步 (Quick Wins)\n3. 每次建議方案時，主動提醒 Google Workspace 教育版的資料隱私安全優勢（絕不用校園資料訓練模型）\n4. 提供分步驟、可直接複製貼上的實用教學提示詞範例。",
      "promptEn": "[Gem Instructions]: You are a technology coordinator developing AI onboarding and training materials. Create helpful, step-by-step guidance for educators on using Google AI tools safely and effectively. Keep technical jargon to an absolute minimum, emphasize data privacy assurances, and provide immediate quick wins.",
      "parts": {
        "persona": "校園 AI 科技融入推廣專員與資訊協調員",
        "act": "提供親切無痛的 AI 上手指南、研習素材與隱私安全諮詢",
        "recipient": "對 AI 尚不熟悉或有資安顧慮的第一線教師與行政人員",
        "theme": "生成式 AI 教育工具落地、數位增能與資料保護法規",
        "structure": "痛點診斷 -> 步驟化指引 -> 實用範本 -> 隱私安心叮嚀"
      },
      "tipsZh": "資訊組長可將校內的資安規範與帳號權限須知放入知識庫，讓同仁隨時提問，成為 24 小時線上的資訊科技助教！",
      "applicableTools": [
        "Gemini Gems"
      ],
      "targetAudience": "行政主管"
    },
    {
      "id": "p-59",
      "slideNum": 59,
      "category": "gems",
      "subCategory": "自訂 Gem",
      "titleZh": "自訂 Gem 系統指令：中學化學專屬互動學伴 Gem",
      "titleEn": "Custom Gem Instructions: High School Chemistry Tutor Gem",
      "roleScenarioZh": "中學生自修化學時的專屬耐心理化學伴，打破抽象微觀世界的迷思",
      "promptZh": "【Gem 系統設定指令 / Instructions】：\n你是我專屬的化學課後輔導家教。請幫助我徹底搞懂課堂上的重要主題（例如：化學鍵、氧化還原、莫耳濃度、化學平衡）。請遵守以下教學原則：\n1. 將抽象的原子與分子概念，拆解為日常生活中的生動實例與比喻\n2. 每次只解釋一個小概念，隨後向我丟出一個簡短的檢核問題，確認我真的懂了再往下推進\n3. 如果我答錯了，請溫和地指出我邏輯中哪裡出現偏差，不要直接罵我或丟答案\n4. 當我需要記憶複雜的週期表規律或反應通式時，教我好記的記憶口訣或圖像法。",
      "promptEn": "[Gem Instructions]: You’re my chemistry tutor. Help me understand key topics from class by breaking them down into simple explanations, real-world examples, and step-by-step problem-solving. Ask me check-in questions to make sure I understand before moving on to the next topic.",
      "parts": {
        "persona": "生動風趣且耐心的一對一化學專屬學伴",
        "act": "微觀世界概念解構、步進式互動問答、記憶口訣賦能",
        "recipient": "感到化學抽象難懂、需要大量鷹架的國高中學生",
        "theme": "中學化學核心單元（化學鍵、氧化還原、平衡與濃度）",
        "structure": "生動概念解構 -> 一對一理解檢核 -> 溫和糾錯引導"
      },
      "tipsZh": "老師可以直接把這個 Gem 建立好之後，在 Google Classroom 中『置頂』或指派給全班學生，每位學生課後都有專屬的化學助教！",
      "applicableTools": [
        "Gemini Gems",
        "Google Classroom"
      ],
      "targetAudience": "學生"
    },
    {
      "id": "p-60",
      "slideNum": 60,
      "category": "gems",
      "subCategory": "自訂 Gem",
      "titleZh": "自訂 Gem 系統指令：學校親師通訊與社群小編 Gem",
      "titleEn": "Custom Gem Instructions: School Communications Assistant Gem",
      "roleScenarioZh": "行政團隊或導師撰寫學校每週電子報、活動快訊與社群推廣貼文",
      "promptZh": "【Gem 系統設定指令 / Instructions】：\n你是一位專門協助學校對外宣傳與親師關係的資深校園通訊助理。你的職責是將校內各項活動通知、行政公告、學生優異表現與重要時程，轉化為溫馨動人、清楚明瞭且吸引人的文章。要求如下：\n1. 支援多種體裁：包括家長每週電子報 (Newsletter)、官方社群媒體貼文 (FB/IG)、校務會議摘要與重要活動新聞稿\n2. 語氣維持專業、溫暖、充滿活力且具備社群凝聚力\n3. 自動將冗長混亂的條列資訊，整理為版面清爽、標題吸睛的段落，並標註清晰的行動呼籲 (Call-to-Action) 與關鍵日期\n4. 提供適合不同受眾（家長、校友、社區民眾）的語氣調整建議。",
      "promptEn": "[Gem Instructions]: You are a communications assistant supporting a school. Write newsletters, updates, and social posts that are clear, engaging, and professional. Highlight student success and keep families informed in a warm, welcoming tone that fosters community trust.",
      "parts": {
        "persona": "專業校園通訊與親師公關助理 (School communications assistant)",
        "act": "撰寫校園電子報、家長通訊、活動社群文案與新聞稿",
        "recipient": "學生家長、社區鄰里、校友與關心教育的公眾",
        "theme": "校園重要動態、學生多元表現、親師合作與活動行事",
        "structure": "吸睛標題 + 溫暖引言 + 條理要點 + 明確行動呼籲 (CTA)"
      },
      "tipsZh": "每次學校辦完運動會、科學展覽或親職講座，把各組隨筆筆記丟進來，1 分鐘就能產出三篇不同風格的精彩報導！",
      "applicableTools": [
        "Gemini Gems",
        "Google Docs"
      ],
      "targetAudience": "行政主管"
    },
    {
      "id": "p-63",
      "slideNum": 63,
      "category": "notebooklm",
      "subCategory": "知識庫教學實戰",
      "titleZh": "NotebookLM 課程串接：第 8 週物理單元總複習課程序列設計",
      "titleEn": "NotebookLM Planning: Sequence the Unit Lessons (Physics Unit)",
      "roleScenarioZh": "以 8 週物理單元為例，讓 AI 研讀全部來源文件後規劃跨章節複習",
      "promptZh": "【在 Gemini Notebook / NotebookLM 中提問】：\n根據我上傳的 8 週物理單元教材，第 7 週（光與光學）中介紹了哪些核心概念，應該在即將到來的第 8 週（單元總複習）中進行全面複習？請為第 8 週的複習課提出一個循序漸進的課序規劃，並明確指出哪些學習重點與核心概念（例如：折射率與司乃耳定律）是學生最容易在期末評量中混淆的高風險盲點。",
      "promptEn": "Prompt (in NotebookLM): What concepts introduced in Week 7 (Light & Optics) should be reviewed in Week 8’s unit review lesson to best prepare students for the final assessment? Suggest a progressive pacing sequence highlighting high-misconception topics.",
      "parts": {
        "persona": "基於專屬物理單元教材的精準課程專家",
        "act": "交叉檢索上傳的第 7 週與第 8 週講義，規劃針對性複習課序",
        "recipient": "準備期末大考的高中物理學生與授課教師",
        "theme": "光學概念整合（反射、折射、全反射）與單元總複習",
        "structure": "章節概念對照表 + 複習時序建議 + 盲點強化清單（附原文引文出處）"
      },
      "tipsZh": "Gemini Notebook 的回答全部帶有『行內引用來源編號』，點擊引文編號即可瞬間定位到你上傳的講義具體頁面，保證零幻覺、零瞎掰！",
      "applicableTools": [
        "Gemini Notebook (NotebookLM)"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-64",
      "slideNum": 64,
      "category": "notebooklm",
      "subCategory": "知識庫教學實戰",
      "titleZh": "NotebookLM 快速生成教材：根據第 7 週光學講義產出學生實驗單",
      "titleEn": "NotebookLM Instructional Materials: Lab Guide Creation for Light Refraction",
      "roleScenarioZh": "教師上傳教案大綱後，請 NotebookLM 自動提煉專屬實驗手冊",
      "promptZh": "【在 Gemini Notebook / NotebookLM 中提問】：\n請根據我上傳的第 7 週第 3 課『光的折射與界面傳播』教案資料，建立一份以學生為中心的完整實驗手冊。格式需包含：本實驗探究目標、所需實驗器材清單、安全注意事項、條理分明的步驟指引，以及一張供學生填寫入射角與折射角測量值的空白數據表格。",
      "promptEn": "Prompt (in NotebookLM): Create a student lab guide based on Week 7’s lesson on light and optics. Include learning objectives, required apparatus, step-by-step procedures, safety guidelines, and a blank data table for angle measurements.",
      "parts": {
        "persona": "熟悉本學期教材進度的專案實驗助理",
        "act": "從上傳的教案材料中自動擷取並組織成學生端實驗手冊",
        "recipient": "進實驗室親自動手操作量測光學折射的學生",
        "theme": "光的折射實驗（入射角、折射角、介質介面偏折）",
        "structure": "學習目標 + 設備清單 + 操作步驟 + 數據紀錄表"
      },
      "tipsZh": "因為完全基於教師自己的講義生成，實驗步驟使用的名詞與實驗室器材型號會跟課堂教的完全一致，不會出現外國規格不符的困擾！",
      "applicableTools": [
        "Gemini Notebook (NotebookLM)",
        "Google Docs"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-65",
      "slideNum": 65,
      "category": "notebooklm",
      "subCategory": "知識庫教學實戰",
      "titleZh": "NotebookLM 命題檢核：光學折射概念形成性開放問答題",
      "titleEn": "NotebookLM Assessment: Building Knowledge Checks on Light Refraction",
      "roleScenarioZh": "快速從單元教材中提煉出精準檢驗學生高階思維的形成性問題",
      "promptZh": "【在 Gemini Notebook / NotebookLM 中提問】：\n請參考第 7 週第 3 課關於光的折射之內容，建立 2 道開放式情境問題，用以檢核學生是否真正理解光從空氣進入水中時傳播方向與速度發生的變化。每題請附上預期的理想學生回答重點，以及可能代表學生尚未理解的典型錯誤徵兆。",
      "promptEn": "Prompt (in NotebookLM): Using Week 7, Lesson 3 on light refraction, create 2 open-ended questions to check for understanding about how light bends as it enters a new medium. Include ideal answer criteria and warning signs of incomplete comprehension.",
      "parts": {
        "persona": "專注於形成性評量診斷的學科評量專家",
        "act": "依據教材精準命製 2 道開放式概念理解檢核題與評核準則",
        "recipient": "正在學習幾何光學與介質傳播的高中學生",
        "theme": "光在不同光學介質中的行進速度改變與折射方向",
        "structure": "情境檢核題 2 道 + 正確思維評分規準 + 典型錯誤思維指引"
      },
      "tipsZh": "利用 NotebookLM 的 Studio 工作室面板，還可以直接將這些題目一鍵轉成互動式 Quiz 測驗卡！",
      "applicableTools": [
        "Gemini Notebook (NotebookLM)"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-66",
      "slideNum": 66,
      "category": "notebooklm",
      "subCategory": "知識庫教學實戰",
      "titleZh": "NotebookLM 差異化教學：為光學單元多元學習者設計分層任務",
      "titleEn": "NotebookLM Differentiation: Ideas for Diverse Learners in Optics",
      "roleScenarioZh": "利用單元講義為超前學習者與需要支援的學生量身訂做分流任務",
      "promptZh": "【在 Gemini Notebook / NotebookLM 中提問】：\n請根據第 7 週第 3 課光的折射教材，為多元程度學生設計分層學習方案。請提供：1. 一個針對需要額外視覺與實體鷹架支援學生的補強探索活動；2. 一個針對已掌握基礎概念、準備接受進階挑戰學生的延伸探究活動（例如探討海市蜃樓成因或全反射光纖技術）。",
      "promptEn": "Prompt (in NotebookLM): Using Week 7, Lesson 3 on light refraction, create a differentiated activity menu for diverse learners: one scaffolded visual activity for students needing extra support, and one advanced inquiry extension exploring atmospheric mirages or total internal reflection.",
      "parts": {
        "persona": "普及學習設計 (UDL) 與差異化教學教練",
        "act": "從教材提煉並分化出基礎補強與高階挑戰兩套活動",
        "recipient": "同一個班級中學習節奏截然不同的學生",
        "theme": "光的折射原理在自然界與現代科技中的應用展現",
        "structure": "基礎組活動（多感官鷹架） vs 挑戰組活動（深層探究專案）"
      },
      "tipsZh": "這讓老師在同一個單元中輕鬆落實彈性分組與個別化學習，無需再為不同程度學生挑燈夜戰編寫不同的講義！",
      "applicableTools": [
        "Gemini Notebook (NotebookLM)"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-67",
      "slideNum": 67,
      "category": "notebooklm",
      "subCategory": "知識庫教學實戰",
      "titleZh": "NotebookLM 心智圖生成：8 週物理單元跨章節概念視覺化",
      "titleEn": "NotebookLM Pro Tip: Generate a Visual Mind Map Across Sources",
      "roleScenarioZh": "一鍵將厚重繁複的 8 週講義轉化為層次分明的知識架構心智圖",
      "promptZh": "【在 Gemini Notebook / NotebookLM Studio 中操作】：\n在 Studio 面板中點擊『心智圖 (Mind Map)』按鈕。NotebookLM 將自動通盤分析上傳的 8 週教材，建立一張可縮放、可點擊展開的互動式視覺概念關聯圖。從運動學（速度、加速度）、動力學（牛頓三定律、動量）、能量（功與能）到波動與光學，將所有核心概念如何相互關聯視覺化呈現。",
      "promptEn": "Generate a Mind Map in Gemini Notebook. What it does: Creates a visual overview connecting core concepts across all uploaded weekly sources (kinematics, dynamics, energy, waves, optics), allowing students to explore conceptual nodes interactively.",
      "parts": {
        "persona": "視覺化知識圖譜建構引擎",
        "act": "分析多來源文件並生成可互動探索的概念心智圖",
        "recipient": "視覺型學習者與準備全單元複習的學生",
        "theme": "跨章節物理定律的內在邏輯與層級架構",
        "structure": "動態節點視覺圖 + 核心定義速覽 + 關聯脈絡標記"
      },
      "tipsZh": "✨專家技巧：你可以直接點擊心智圖中的任何一個節點（如『全反射』），NotebookLM 會立即彈出該概念在講義中的具體定義與相關出處！",
      "applicableTools": [
        "Gemini Notebook (NotebookLM)"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-68",
      "slideNum": 68,
      "category": "notebooklm",
      "subCategory": "知識庫教學實戰",
      "titleZh": "NotebookLM 教師共備：PLC 專業學習社群研習與觀議課準備",
      "titleEn": "NotebookLM Administrative: Prep for Your Next PLC Meeting",
      "roleScenarioZh": "學科領域教學研究會 (PLC) 教師群上傳共同教材，快速整合共備素材",
      "promptZh": "【在 Gemini Notebook / NotebookLM 中提問】：\n根據我們學科團隊上傳的完整 8 週物理單元教材，請為我們明天即將召開的領域專業學習社群 (PLC) 共備會議建立一份準備清單。內容需包含：1. 過去數週各課進度中最關鍵的教學里程碑；2. 根據教材難度預測學生最可能卡關的 3 大觀念瓶頸；3. 建議領域夥伴在會議中共同研討的 3 個教學精進提問。",
      "promptEn": "Prompt (in NotebookLM): Based on the full 8-week physics unit materials, create a preparation brief for our next Professional Learning Community (PLC) meeting. Summarize major milestones, predict top 3 student learning bottlenecks, and propose 3 collaborative discussion questions for our faculty team.",
      "parts": {
        "persona": "學校學科領域召集人與 PLC 教研引言人",
        "act": "通盤盤點 8 週教材，產出高效共備會議前導摘要與研討題綱",
        "recipient": "同領域授課教師、科召集人與觀課夥伴",
        "theme": "單元教學進度盤點、學生迷思預測與跨班協同教學精進",
        "structure": "里程碑回顧 + 瓶頸預警 + 3 題 PLC 深層探討問題"
      },
      "tipsZh": "老師們可以共用同一個 NotebookLM 筆記本，每個人上傳自己的學習單與補充資料，幾秒鐘就能完成全領域的協同備課！",
      "applicableTools": [
        "Gemini Notebook (NotebookLM)"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-69",
      "slideNum": 69,
      "category": "notebooklm",
      "subCategory": "知識庫教學實戰",
      "titleZh": "NotebookLM 學生自學：運動學 (Kinematics) 核心觀念解惑",
      "titleEn": "NotebookLM Student Use: Clarifying Complex Topics in Kinematics",
      "roleScenarioZh": "學生在閱讀老師提供的講義時，隨時框選不懂的段落精準提問",
      "promptZh": "【學生在 Gemini Notebook / NotebookLM 中提問】：\n我讀了第 1 週的講義，但我還是很難理解『運動學 (Kinematics)』到底是甚麼意思？它跟我們日常生活有甚麼關聯？它跟動力學 (Dynamics) 又有甚麼區別？請只根據老師上傳的物理講義內容，用生活化的方式為我解釋清楚。",
      "promptEn": "Prompt (in NotebookLM): I’m struggling to understand what kinematics is based on the Week 1 materials. Help me understand what it means, why it matters in daily life, and how it differs from dynamics, using only what’s in the uploaded course notes.",
      "parts": {
        "persona": "專為本門課程打造的專屬忠實助教",
        "act": "嚴格基於課堂指定教材解讀定義，杜絕課外超綱資訊混淆",
        "recipient": "對物理專有名詞感到困惑的初學學生",
        "theme": "運動學 (Kinematics) 的核心定義、描述方法與力學體系定位",
        "structure": "教材定義白話化 + 生活化例子 + 與動力學對比表 + 講義頁碼參照"
      },
      "tipsZh": "學生永遠不用擔心 AI 會查到大學微積分程度的超綱解答，因為 NotebookLM 嚴格限定只在老師給的高中範圍內進行最貼切的引導！",
      "applicableTools": [
        "Gemini Notebook (NotebookLM)"
      ],
      "targetAudience": "學生"
    },
    {
      "id": "p-70",
      "slideNum": 70,
      "category": "notebooklm",
      "subCategory": "知識庫教學實戰",
      "titleZh": "NotebookLM 翻轉課堂：生成雙主持播客語音導覽 (Audio Overview)",
      "titleEn": "NotebookLM Pro Tip: Generate Podcast-Style Audio Overviews for Flipped Learning",
      "roleScenarioZh": "將枯燥繁複的單元講義一鍵轉化為生動逼真的男女雙主持廣播節目",
      "promptZh": "【在 Gemini Notebook / NotebookLM Studio 中操作】：\n在 Studio 面板中點擊『音訊導覽 (Audio Overview)』。選取第 7 週『光與光學』的所有材料。NotebookLM 將自動透過 AI 生成兩位主持人生動自然對談的 Podcast 音檔！兩位主持人會像真正的廣播節目一樣互相搭腔、討論光的折射原理、分享生動比喻，甚至探討學生最容易犯錯的陷阱。教師還可自訂導覽重點（例如：專注於期末考複習或實驗步驟）。",
      "promptEn": "Generate a podcast-style Audio Overview in Gemini Notebook. Choose Week 7 sources on light and optics. NotebookLM generates an engaging deep-dive conversation between two AI hosts who explain core concepts, break down complex ideas with banter and analogies, and review key takeaways. Downloadable for offline listening.",
      "parts": {
        "persona": "幽默專業且具備極佳化學反應的科學廣播雙主持人",
        "act": "將多份學術講義轉譯為高品質口語化播客音訊導覽",
        "recipient": "通勤中、運動中或聽覺型學習的學生與教師",
        "theme": "以對話討論形式剖析光學定律、迷思陷阱與核心概念",
        "structure": "雙人對談音訊檔 (.wav/.mp3) + 自訂聚焦指引"
      },
      "tipsZh": "教師可以在開車通勤或備課時用聽的吸收教材，也可以將音檔下載後指派給學生作為『翻轉課堂 (Flipped Classroom)』的課前預習作業！",
      "applicableTools": [
        "Gemini Notebook (NotebookLM)"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-87",
      "slideNum": 87,
      "category": "classroom",
      "subCategory": "Classroom 起始提示詞",
      "titleZh": "Classroom 起始提示詞：發想生活情境實例 (速度 vs 速率)",
      "titleEn": "Classroom Starter Prompt: Brainstorm Real-World Examples",
      "roleScenarioZh": "在 Google Classroom 內點選靈感卡片，一鍵帶入物理概念生活比喻",
      "promptZh": "【在 Google Classroom 中點擊『發想生活實例』卡片】：\n點擊後系統自動在 Gemini 中開啟對話。Gemini 會主動提問：『我很樂意協助！為了提供最貼切的生活範例，請告訴我：你正在教什麼主題？適用於哪個年級？』\n教師回覆：『我正在為國中七年級理化課講授運動學。我需要一些生活中的實例作為開場引起動機，幫助學生理解「速度 (Velocity)」與「速率 (Speed)」的本質區別。』\nGemini 立即回饋：提供 3 個貼近青少年日常的實例（例如：高鐵儀表板顯示 vs 導航地圖方向、操場跑步一圈與百米衝刺）。教師更可進一步追問：『請再給我一個跟棒球運動相關的例子！』",
      "promptEn": "Starter prompt in Classroom: Select 'Brainstorm real-world examples'. Gemini asks for grade and topic. Teacher responds: 'I’m teaching my 7th grade physics class about motion. I need some examples of lesson hooks to help explain the difference between speed and velocity.' Gemini delivers age-appropriate examples and allows iterative refinement.",
      "parts": {
        "persona": "Google Classroom 內建教學共備夥伴",
        "act": "引導式訪談 (Helpful Interview) -> 產出生活情境範例 -> 互動微調",
        "recipient": "國中七年級初學運動學的學生",
        "theme": "純量 (速率 Speed) 與向量 (速度 Velocity) 的本質差異",
        "structure": "對話式問答 -> 結構化生活範例清單 -> 專題追問迭代"
      },
      "tipsZh": "起始提示詞就像一位經驗豐富的實習輔導教師，它主動幫你想好發問結構，你只需輸入自己班級的專屬細節就能獲得完美解答！",
      "applicableTools": [
        "Google Classroom",
        "Gemini for Education"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-90",
      "slideNum": 90,
      "category": "classroom",
      "subCategory": "Classroom 自訂 Gem",
      "titleZh": "Classroom UDL 教學教練 Gem：完善波動單元多元評量",
      "titleEn": "Classroom Custom Gem: Universal Design for Learning (UDL) Coach",
      "roleScenarioZh": "教師建立專屬 UDL 教練 Gem，全面提升課程對多元學習者的包容性",
      "promptZh": "【向 UDL 教學教練 Gem 提問】：\n請擔任普及學習設計 (UDL) 專業顧問。請審視我上傳的第 6 週『波動與聲波』教案內容，並根據 UDL 的三大原則（多元表徵、多元表達、多元參與），為學生提出 3 種全新且多元的評量方式，讓學生能夠跳脫傳統紙筆測驗，展現他們對『光的折射與波長關係』的深層理解。",
      "promptEn": "Using a custom Gem for instructional improvement, a teacher creates a 'UDL Coach' Gem, grounded in Universal Design for Learning principles, and asks it to review their Week 6 'Waves' lesson and suggest three new ways students could demonstrate their understanding of refraction beyond tests.",
      "parts": {
        "persona": "普及學習設計 (UDL) 權威教學顧問 Gem",
        "act": "診斷現有教案並提出符合多元感官與多元智能的評量替代方案",
        "recipient": "班級內包含各類學習特質、特殊需求與資優學生",
        "theme": "波動特性、聲波傳播與光學折射概念理解",
        "structure": "三大 UDL 向度改進建議 + 3 套非紙筆實作評量方案"
      },
      "tipsZh": "在 Google Classroom 中，這類專屬教練 Gem 能幫助教師持續檢視教案是否具備足夠的包容性，落實真正的教育公平！",
      "applicableTools": [
        "Google Classroom",
        "Gemini Gems"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-94",
      "slideNum": 94,
      "category": "classroom",
      "subCategory": "Classroom 作業指派",
      "titleZh": "Classroom 作業附件：指派『Quiz me 測驗小助手』與辯論準備筆記本",
      "titleEn": "Classroom Assignment: Attach Quiz Me Gem and Debate Notebook to Assignments",
      "roleScenarioZh": "教師建立 Google Classroom 作業時，直接將互動 AI 學習工具作為附件發給學生",
      "promptZh": "【在 Google Classroom 中發布作業操作情境】：\n情境 1（第一週複習）：教師在 Classroom 建立作業，直接點選附件中的『Gem』圖示，掛上『物理隨堂測驗小幫手 (Quiz me Gem)』。每位學生在繳交作業前，都可以點開該 Gem 生成專屬的運動學隨堂練習題，並獲得即時的個別化回饋。\n情境 2（第六週辯論）：教師建立作業並附上『能源科技爭議議題 NotebookLM 筆記本』，學生點開後即可在教師審核過的可靠文獻範圍內，進行正反方論點研究並模擬辯論攻防。",
      "promptEn": "Attach AI learning experiences to Classroom assignments: Example 1: Attach a 'Quiz me' Gem to an assignment for Week 1 physics review so students get customized practice and feedback. Example 2: Attach a teacher-provided NotebookLM notebook to a debate assignment so students prep using curated sources.",
      "parts": {
        "persona": "Google Classroom 課堂教學推動者",
        "act": "將受控安全之 AI 學習工具直接掛載於學生作業任務中",
        "recipient": "全班修課學生（以受控環境進行安全互動）",
        "theme": "物理概念自我檢核與公共議題批判性辯論準備",
        "structure": "Classroom 作業指派流程 + Gem / NotebookLM 受控存取架構"
      },
      "tipsZh": "學生打開時是專屬的『僅供檢視/互動 (View-only)』體驗，能自由問答但無法刪改老師設定的原始文獻，安全又有保障！",
      "applicableTools": [
        "Google Classroom",
        "Gemini Notebook (NotebookLM)",
        "Gemini Gems"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-100",
      "slideNum": 100,
      "category": "classroom",
      "subCategory": "Classroom 置頂資源",
      "titleZh": "Classroom 課堂頂端置頂：牛頓運動定律學習嚮導與隨身實驗手冊",
      "titleEn": "Classroom Highlighted Resources: Newton's Laws Navigator & Interactive Lab Companion",
      "roleScenarioZh": "將全學期/全單元不可或缺的核心 AI 工具置頂在課堂作業最頂端",
      "promptZh": "【在 Google Classroom 課堂作業頁面置頂】：\n教師在『課堂作業 (Classwork)』分頁中，勾選『置頂於課堂頂端 (Highlight at top of class)』。\n工具 1：『牛頓運動定律學習嚮導 Gem』：全單元期間學生隨時可點開提問。當學生問『為什麼滑冰選手推別人自己也會後退？』時，Gem 不直接給死板公式，而是引導學生思考冰面與推力的反作用力關係。\n工具 2：『物理實驗室數位隨身手冊 NotebookLM』：學生在實驗課隨時提問『這個步驟的安全規則是什麼？』，AI 立即精準引述官方實驗手冊回答。",
      "promptEn": "Provide highlighted class learning resources at the top of the 'Classwork' tab. 1: Newton's Laws Navigator Gem: an on-demand tutor answering conceptual physics questions using everyday analogies. 2: Interactive Lab Companion NotebookLM: allows students to instantly ask questions about lab procedures and safety grounded strictly in official manuals.",
      "parts": {
        "persona": "班級常駐專屬智慧助教 (Class-level Persistent AI Assistant)",
        "act": "置頂於 Classroom 課堂作業分頁最頂端，提供隨選即用支援",
        "recipient": "整個單元期間隨時需要解惑與實驗指引的全部學生",
        "theme": "牛頓力學日常應用解構與實驗安全規範即時查詢",
        "structure": "課堂頂端置頂資源 (Highlighted at Top) + 常駐輔導機制"
      },
      "tipsZh": "置頂後學生不必在幾十篇發文中滾動翻找，一進 Classroom 就能直接點開求助，大幅降低迷航率！",
      "applicableTools": [
        "Google Classroom",
        "Gemini Notebook (NotebookLM)",
        "Gemini Gems"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-102",
      "slideNum": 102,
      "category": "classroom",
      "subCategory": "Classroom 後台洞察",
      "titleZh": "Classroom 教師後台洞察：掌握學生對 AI 學習工具的開啟與參與率",
      "titleEn": "Classroom Insights: Tracking Student Engagement with AI Resources",
      "roleScenarioZh": "教師後台一鍵查看哪些學生已開啟 AI 工具、哪些尚未開始，即時關懷",
      "promptZh": "【在 Google Classroom 中查看使用數據】：\n在指派的任何 Notebook 或 Gem 旁，教師會看到即時的『開啟狀態 (Opened by)』徽章（例如顯示『15 位學生已開啟』）。\n點擊狀態連結即可展開學生名單，清楚分為『已開啟 (Opened)』與『尚未開啟 (Not opened)』兩大清單。\n教師可一鍵發送溫馨提醒給尚未啟動學習工具的同學，或結合課堂觀察，關心遇到學習阻礙的學生，實現精準教學干預！",
      "promptEn": "Get insights into student use in Classroom. An 'Opened by' status shows live counts of which students have accessed assigned AI tools. Teachers can easily see who has opened and who has not opened, allowing targeted reminders and intervention.",
      "parts": {
        "persona": "以學習資料為本的精準課堂管理教師",
        "act": "檢視學生自主學習工具開啟紀錄並實施差異化督導提醒",
        "recipient": "全班已登入與尚未參與 AI 學習活動的學生",
        "theme": "自主學習參與度監控、預警機制與個別化輔導介入",
        "structure": "後台儀表板即時數據 (Opened vs Not opened) + 一鍵催繳與輔導"
      },
      "tipsZh": "這打破了傳統課後作業無法掌握學生預習進度的黑盒子，讓教師在踏入教室前就對全班預習概況了然於胸！",
      "applicableTools": [
        "Google Classroom"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-108",
      "slideNum": 108,
      "category": "classroom",
      "subCategory": "Classroom App 連動",
      "titleZh": "Classroom App 整合連動：在 Gemini 中使用 @Classroom 進行深度班級協作",
      "titleEn": "Bring Classroom Context into Gemini: 6 Powerful Prompts Using @Classroom",
      "roleScenarioZh": "在 Gemini 應用程式中直接呼叫 Google Classroom 班級資料進行智慧調閱與分析",
      "promptZh": "【在 Gemini App 中使用 @Classroom 專用提示詞】：\n1. 診斷教學弱點：『@Classroom，在我的八年級理化班中，哪些作業和單元主題的平均得分最低？請為需要重新補救教學的主題產出精華摘要。』\n2. 智慧調閱歷史教案：『@Classroom，去封存課程中找出我去年在「生物101」用過的達爾文演化論寫作作業，並依此更新今年的版本。』\n3. 依成績自動分組：『@Classroom，根據上週第三次數學小考的作答結果，將學生分為 3 個互補的專案小組，並為每組設計不同的引導挑戰。』\n4. 根據作業繳交狀況差異化：『@Classroom，根據八年級數學班最新提交的作業情況，為不同程度的學生設計三套難度遞進的課後延伸練習。』\n5. 一鍵建立作業：『@Classroom，為我的科學班建立一項新作業，並附上我 Google 雲端硬碟中名為「太陽系行星探索」的 PDF 檔案。』",
      "promptEn": "Ideas for prompts you can ask Gemini using @Classroom: 1. '@Classroom, Which assignments have the lowest scores? Summarize related topics that need reteaching.' 2. '@Classroom, Go find the evolution essay assignment from last year's archive.' 3. '@Classroom, Create three groups based on last math test results.' 4. '@Classroom, Create differentiated activities based on assignment submissions.' 5. '@Classroom, Create a new assignment and attach the PDF from my Drive.'",
      "parts": {
        "persona": "高度整合班級實體資料的超級 AI 行政教學助手",
        "act": "跨課程調閱歷史檔案、分析學生作答數據、自動分組與派工",
        "recipient": "任教班級的各科學生群體",
        "theme": "Google Classroom 與 Gemini 跨系統 API 安全情境整合",
        "structure": "@Classroom 語法指令 + 條件篩選 + 智慧產出 (符合企業級資安)"
      },
      "tipsZh": "當你使用 @Classroom 時，Google 是在完全受保護的教育企業級環境下讀取資料，學生名單與成績絕不會外洩，也不會被拿去公開訓練模型！",
      "applicableTools": [
        "Gemini App",
        "Google Classroom"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-113",
      "slideNum": 113,
      "category": "workspace",
      "subCategory": "Google Vids 影片製作",
      "titleZh": "Google Vids 影片製作：全校全新 STEM 實驗學程推廣宣傳短片",
      "titleEn": "Gemini in Google Vids: Create Promotional Video for New STEM Program",
      "roleScenarioZh": "資訊組或招生宣傳團隊利用 Google Vids 快速生成專業宣傳短片",
      "promptZh": "【在 Google Vids 中提問】：\n請擔任學校招生與行銷總監。請為我們學校即將在下學期推出的全新『跨領域高中 STEM 菁英計畫』製作一段 60 秒的宣傳影片分鏡腳本。影片需包含：節奏明快且具啟發性的旁白旁述、每個場景的視覺畫面建議（例如：學生操作 3D 列印機、AI 機器人編程競賽、實驗室探究）、背景音樂風格推薦，以及最後呼籲學生踴躍報名的行動標語。",
      "promptEn": "Acting as a marketing director, help me create a promotional video in Google Vids announcing a new STEM program at my academy. Include an inspiring 60-second voiceover script, suggested B-roll visuals (3D printing, robotics, lab experiments), background music mood, and a compelling call-to-action slide.",
      "parts": {
        "persona": "學校招生行銷與多媒體影音總監",
        "act": "撰寫 60 秒宣傳影片分鏡腳本、旁白語音與視覺畫面搭配",
        "recipient": "國高中學生、家長與潛在申請新生",
        "theme": "STEM 跨領域科技教育創新學程宣傳",
        "structure": "分鏡秒數 + 畫面描述 (B-roll) + 旁白口白 + 音樂建議 + 片尾 CTA"
      },
      "tipsZh": "在 Google Vids 中，AI 不僅能幫你寫腳本，還能自動挑選高質感素材庫圖片、自動配上 AI 語音旁白並生成完整影片！",
      "applicableTools": [
        "Google Vids",
        "Gemini in Workspace"
      ],
      "targetAudience": "行政主管"
    },
    {
      "id": "p-114",
      "slideNum": 114,
      "category": "workspace",
      "subCategory": "Gmail 電子郵件助理",
      "titleZh": "Gmail 智慧側邊欄：長篇家長信郵件討論串摘要與建議回覆",
      "titleEn": "Gemini in Gmail: Summarize Email Thread and Draft Empathetic Reply",
      "roleScenarioZh": "導師在 Gmail 側邊欄面對數十封長信，一鍵提煉重點並產出專業回信",
      "promptZh": "【在 Gmail 側邊欄點擊 Gemini 圖示】：\n請摘要這封由家長寄來、包含多個來回討論的長篇郵件討論串，列出家長最核心關切的 3 個重點（包括學生近期課業壓力、同儕相處困擾與請假補考需求）。並請以導師專業、溫暖且同理的語氣，擬定一封建議回覆信函草稿，明確列出學校的具體支援措施與建議面談的時間區間。",
      "promptEn": "Summarize this email thread and provide a suggested reply with next steps. Identify the parent’s top 3 concerns regarding workload and peer interaction, and draft an empathetic, professional response outlining concrete school supports and proposing an in-person meeting time.",
      "parts": {
        "persona": "具備高度同理心與溝通智慧的資深班級導師",
        "act": "多輪電郵討論串智慧摘要 + 擬定高情商專業回信草稿",
        "recipient": "焦慮關心孩子在校表現的學生家長",
        "theme": "學生在校適應、課業減壓與親師合作溝通",
        "structure": "3 點核心關切摘要 + 結構完整之溫暖回覆信 + 行動後續約定"
      },
      "tipsZh": "教師只需在 Gmail 右側邊欄輕點一下，即可直接將產出的草稿一鍵插入回覆信件框，大幅節省親師往來溝通心力！",
      "applicableTools": [
        "Gemini in Gmail",
        "Gemini in Workspace"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-115",
      "slideNum": 115,
      "category": "workspace",
      "subCategory": "Google Forms 表單測驗",
      "titleZh": "Google Forms 一鍵轉題庫：讀取雲端教材自動建立評量表單",
      "titleEn": "Gemini in Forms: Create a Quiz from a Drive Document",
      "roleScenarioZh": "教師直接讓 Google 表單讀取 Google 雲端硬碟內的講義自動出題",
      "promptZh": "【在 Google Forms 中直接提問】：\n請讀取我 Google 雲端硬碟中名為 @[八年級理化第三單元_力與運動] 的教材文件，為第二章節『摩擦力與正向力』建立一份包含 10 題選擇題與 2 題簡答題的隨堂小考表單。請直接為每題設定正確答案、配分（選擇題每題 8 分、簡答題每題 10 分），並在詳解欄位填寫淺顯易懂的概念解析。",
      "promptEn": "In Google Forms: Create a quiz testing the second module of @[name of your document from Drive]. Generate 10 multiple choice questions and 2 short answer questions with answer keys, automated point scoring, and detailed explanation feedback for each question.",
      "parts": {
        "persona": "精準對應指定教材的線上命題助理",
        "act": "自動解析雲端硬碟指定文件，一鍵建立具備評分與詳解的線上表單",
        "recipient": "進行線上隨堂測驗評量的國中學生",
        "theme": "力學基礎、摩擦力種類與受力分析計算",
        "structure": "自動配置好配分與回饋之 Google 表單測驗卷"
      },
      "tipsZh": "使用 @ 符號可以直接在 Google 表單中關聯雲端硬碟內的任何 Docs、PDF 或 Slides，不再需要一題題手動複製貼上！",
      "applicableTools": [
        "Gemini in Forms",
        "Gemini in Workspace"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-116",
      "slideNum": 116,
      "category": "workspace",
      "subCategory": "Google Docs 會議摘要",
      "titleZh": "Google Docs 連續會議紀錄整理：提煉三週校務決策與待辦清單",
      "titleEn": "Gemini in Docs: Key Takeaways from Past 3 Weeks of Staff Meetings",
      "roleScenarioZh": "請假歸來或剛接任行政職務的教師快速掌握全校最新決策脈動",
      "promptZh": "【在 Google Docs 中提問】：\n我剛休假結束返回學校。請幫我閱讀並分析過去三週的全校教職員週會紀錄文件 @[全校行政週會紀錄整合本]，提煉出 5 個最重要的全校關鍵決策、即將到來的重大活動變更，以及各處室需要全體教師在下週五前配合完成的待辦事項 (Action Items) 清單。",
      "promptEn": "I’m just returning from vacation. What are the key takeaways from the last 3 weeks of staff meetings in @[Weekly Staff Meeting Notes]? Summarize the top 5 school-wide policy decisions, calendar updates, and immediate action items required of faculty by next Friday.",
      "parts": {
        "persona": "高效校務行政秘書與決策情報彙整員",
        "act": "跨多週長篇會議記錄提煉核心政策變更與待辦清單",
        "recipient": "剛銷假歸隊的教師或需要追蹤進度的處室主任",
        "theme": "校園行政決策追蹤、跨處室協調與重要行事交辦",
        "structure": "5 大決策要點 + 行事曆變更 + 責任處室與截稿時間清單"
      },
      "tipsZh": "不用再痛苦爬完 30 頁會議紀錄，10 秒內掌握所有重要資訊與待辦時程！",
      "applicableTools": [
        "Gemini in Docs",
        "Gemini in Workspace"
      ],
      "targetAudience": "行政主管"
    },
    {
      "id": "p-117",
      "slideNum": 117,
      "category": "workspace",
      "subCategory": "Google Sheets 試算表公式",
      "titleZh": "Google Sheets 資料分析：自動編寫複雜加權成績與統計公式",
      "titleEn": "Gemini in Sheets: Create Formula to Calculate Average Grade and Analyze Data",
      "roleScenarioZh": "教師期末結算段考、平常考、作業與出席之複雜加權總成績",
      "promptZh": "【在 Google Sheets 側邊欄提問】：\n請幫我在 H 欄建立一個試算表公式，用來計算全班每位學生的學期總成績。計算權重為：第一次段考（B欄）佔 20%、第二次段考（C欄）佔 20%、期末考（D欄）佔 30%、平常隨堂測驗（E欄）佔 15%、課堂參與與作業（F欄）佔 15%。若有缺考者請自動以其他成績比例等權重折算，並為低於 60 分的欄位自動設定條件式格式醒目提示。",
      "promptEn": "In Google Sheets: Create a formula that calculates the weighted average semester grade in column H (Exam 1 20%, Exam 2 20%, Final 30%, Quizzes 15%, Participation 15%). Handle missing scores gracefully and suggest a conditional formatting rule to highlight at-risk students below 60%.",
      "parts": {
        "persona": "試算表公式與學業成績統計專家",
        "act": "自動撰寫加權平均與防錯公式，並配置預警條件式格式",
        "recipient": "期末結算成績、需要辨識學習預警學生的導師與科任老師",
        "theme": "多元評量加權計分、防呆例外處理與學業風險標記",
        "structure": "可直接套用的 Sheets 陣列公式 + 條件式格式設定教學"
      },
      "tipsZh": "完全不用死記 `SUMPRODUCT`、`AVERAGEIFS` 或複雜巢狀 `IF`，用自然中文說出你的計分規則，AI 直接把公式寫好！",
      "applicableTools": [
        "Gemini in Sheets",
        "Gemini in Workspace"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-118",
      "slideNum": 118,
      "category": "workspace",
      "subCategory": "Google Meet 會議助理",
      "titleZh": "Google Meet 智慧開會：AI 自動即時會議逐字記錄與重點筆記",
      "titleEn": "Gemini in Meet: Takes Notes for You Automatically",
      "roleScenarioZh": "召開全校線上領域教學會議或親師座談會，AI 全程自動代做筆記",
      "promptZh": "【在 Google Meet 會議中操作】：\n進入線上會議室後，直接點擊視窗頂端的『Gemini 鉛筆圖示（幫我做筆記 / Take notes for me）』。\n會議進行過程中，Gemini 會在後台安靜聆聽各發言者的討論內容。會議結束後數分鐘內，一份格式精美的 Google Docs 文件將自動寄送給會議發起人並共享給所有與會者！內容包含：出席名單、討論主題摘要、關鍵共識與具體指派的待辦工作清單。",
      "promptEn": "In Google Meet: Gemini takes notes for you. Just click the Gemini pencil icon once you’re in the meeting. Afterward, you’ll get a structured Google Doc with bulleted discussion points, decisions made, and assigned action items automatically shared with all participants.",
      "parts": {
        "persona": "全自動會議智慧秘書 (Gemini in Meet)",
        "act": "語音自動辨識、重點摘要提取、會議決議與待辦事項自動產出",
        "recipient": "參與線上教研會議、校務協調會或家長線上面談的全體同仁",
        "theme": "無紙化線上會議協同記錄與決策追蹤",
        "structure": "自動生成的 Google Docs 會議紀要（摘要、共識、待辦分工）"
      },
      "tipsZh": "從此開會再也不需要輪流指派一位倒楣的老師負責打字記筆記，所有人都能專注在深入研討交流上！",
      "applicableTools": [
        "Gemini in Meet",
        "Google Docs"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-119",
      "slideNum": 119,
      "category": "workspace",
      "subCategory": "Google Docs 教材設計",
      "titleZh": "Google Docs 階梯式課堂退出票：七年級光合作用三層次檢核",
      "titleEn": "Gemini in Docs: Generate Tiered Exit Ticket Questions on Photosynthesis",
      "roleScenarioZh": "七年級生物老師在下課前 5 分鐘進行分層次理解檢核",
      "promptZh": "【在 Google Docs 中提問】：\n請擔任國中自然科理化老師。請為七年級剛學完『植物光合作用與能量轉換』的班級，編寫 3 道不同認知層次的下課退出票 (Exit Ticket) 問題：\n第 1 題（記憶與回想）：確認基礎原料與產物；\n第 2 題（理解與應用）：解釋葉綠體中光反應與暗反應（碳反應）的相互依賴關係；\n第 3 題（高階分析）：評估如果全球大氣中的二氧化碳濃度突然驟降 50%，對陸生植物與海洋藻類生態可能引發的連鎖生態衝擊。",
      "promptEn": "Act as a middle school science teacher. Write three exit ticket questions on photosynthesis for a 7th-grade class: one recall question to check foundational knowledge, one comprehension question exploring light/dark reaction interdependence, and one analytical challenge asking students to predict the ecological cascade if global CO2 dropped by 50%.",
      "parts": {
        "persona": "資深中學自然科教學設計師",
        "act": "設計 3 題階梯式布魯姆認知認知層次課堂退出票",
        "recipient": "剛完成光合作用章節學習的七年級國中生",
        "theme": "光合作用機制（光能轉化化學能）與全球碳循環生態關聯",
        "structure": "三級階梯退出票：記憶題 -> 理解題 -> 高階情境分析題"
      },
      "tipsZh": "印出成 3 格小紙條或直接發在 Classroom 的『提問』功能中，下課鐘響收回，立即掌握全班各層次的吸收狀況！",
      "applicableTools": [
        "Gemini in Docs",
        "Google Classroom"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-120",
      "slideNum": 120,
      "category": "workspace",
      "subCategory": "Google Docs 作業回饋",
      "titleZh": "Google Docs 個別化回饋：為高中生現代詩作業提供具體修訂建議",
      "titleEn": "Gemini in Docs: Differentiated Feedback on Student Poetry Assignment",
      "roleScenarioZh": "國文/英語科教師為學生的文學創作提供細膩、溫暖且具體的推手式回饋",
      "promptZh": "【在 Google Docs 側邊欄提問】：\n以下是我的一位高二學生為現代詩創作單元繳交的詩作草稿。請擔任富有啟發性的國文老師，為這篇學生作品撰寫一段量身打造的個別化回饋評語。請包含：\n1. 具體指出詩中最令人驚豔的 2 處意象營造或節奏轉折（讚美需具體，引用詩句）；\n2. 提出 2 個溫和且具體的修訂建議，引導學生如何在第二節加強隱喻的深度；\n3. 推薦一位台灣或現代著名詩人的類似風格篇章，鼓勵學生進行延伸對比閱讀。",
      "promptEn": "Here is an assignment a student of mine wrote for a high school poetry class. Acting as the class teacher, provide tailored feedback highlighting two striking imagery choices they made, two constructive suggestions to deepen metaphorical resonance in stanza two, and recommend a contemporary poet with a similar thematic voice for further reading.",
      "parts": {
        "persona": "富有同理心與文學素養的現代文學指導教師",
        "act": "撰寫讚賞亮點、提供具體推手建議並推薦延伸名家名篇",
        "recipient": "投入文學創作但需要指引深化意象的高中學生",
        "theme": "現代詩意象營造、隱喻層次與節奏語感提升",
        "structure": "具體閃光點讚賞 + 溫和修改引導 + 延伸閱讀名家推薦"
      },
      "tipsZh": "當全班有 40 篇長短不一的創作時，AI 能協助教師迅速抓出每位學生的閃光點，讓批改作業不再是枯燥的體力活！",
      "applicableTools": [
        "Gemini in Docs"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-121",
      "slideNum": 121,
      "category": "workspace",
      "subCategory": "Imagen AI 插畫生成",
      "titleZh": "Imagen AI 教學繪圖：暑期跨領域科學探索夏令營宣傳插畫",
      "titleEn": "Imagen in Workspace: Create an Illustration for Summer Science Program",
      "roleScenarioZh": "活動主辦教師生成充滿想像力與科學元素的原創宣傳海報主視覺",
      "promptZh": "【在 Google Docs / Slides 中使用 Imagen 生成圖片】：\n請為學校舉辦的『中學暑期跨領域科學探索夏令營』生成一張色彩繽紛、充滿未來感且溫暖親切的高解析度宣傳插畫。畫面中需巧妙融合物理學（如軌道光芒、齒輪）、生物學（如綠色葉片細胞、DNA雙螺旋）與化學（如發光的實驗燒杯、分子鍵），呈現一群多元背景的中學生正在好奇合作探索的景象，風格為現代扁平化向量插畫，視覺活潑具啟發性。",
      "promptEn": "Create an illustration for a summer science program for middle schoolers. Include elements of physics (glowing orbital paths), biology (botanical cell structures, double helix), and chemistry (glowing beakers), depicting a diverse group of curious young students collaborating outdoors. Vibrant, modern educational vector art style.",
      "parts": {
        "persona": "跨領域科學教育視覺設計師 (Imagen 3)",
        "act": "生成融合三大學科象徵與多元探索氛圍的教學主視覺插畫",
        "recipient": "對科學充滿好奇的中學學生及其家長",
        "theme": "跨學科科學探索、動手實驗與團隊合作精神",
        "structure": "高品質現代扁平向量插畫 (Vector Illustration)"
      },
      "tipsZh": "在 Google Slides 中直接點選『插入 -> 圖片 -> 使用 Gemini 建立圖片』，幾秒內即可生成無版權爭議的高品質原創主視覺！",
      "applicableTools": [
        "Gemini in Workspace (Imagen 3)",
        "Google Slides"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-122",
      "slideNum": 122,
      "category": "workspace",
      "subCategory": "Google Vids 影片製作",
      "titleZh": "Google Vids 概念微動畫：1 分鐘看懂動能與位能的能量轉換",
      "titleEn": "Gemini in Google Vids: Short Video Explaining Kinetic vs Potential Energy",
      "roleScenarioZh": "物理教師製作 60 秒科普微影片，放在雲端供學生課前自主預習",
      "promptZh": "【在 Google Vids 中提問】：\n請為高中物理課製作一段 1 分鐘的科普概念解說影片，主題為『動能 (Kinetic Energy) 與位能 (Potential Energy) 的差別與能量守恆』。請使用雲霄飛車 (Roller Coaster) 從最高點俯衝到底部的生活化場景作為貫穿範例，包含：簡潔有力的雙人旁白對話腳本、畫面上能量長條圖消長變化的視覺特效描述，以及文末 10 秒總結關鍵公式 E = K + U 的複習字卡。",
      "promptEn": "Create a short 1-minute video in Google Vids that explains the difference between kinetic and potential energy for a high school science class. Use a roller coaster climbing to its peak and plunging down as the main visual metaphor. Include a snappy voiceover script, visual descriptions of animated energy bar graphs, and a 10-second summary slide of the conservation of energy law.",
      "parts": {
        "persona": "科普短影音企劃與物理教育專家",
        "act": "編寫 1 分鐘短影片分鏡、能量動態圖表與雙人旁白腳本",
        "recipient": "學習能量與功定律的高中一、二年級學生",
        "theme": "動能、重力位能與力學能守恆定律的生活實例",
        "structure": "60 秒分鏡腳本 + 雲霄飛車動態視覺 + 即時能量長條圖 + 結論字卡"
      },
      "tipsZh": "Google Vids 會直接依據這段腳本自動排版投影片、配置轉場動態效果並合成自然擬真的 AI 語音旁白，省下數小時的剪輯時間！",
      "applicableTools": [
        "Google Vids",
        "Gemini in Workspace"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-123",
      "slideNum": 123,
      "category": "workspace",
      "subCategory": "Google Docs 課程進度配當",
      "titleZh": "Google Docs 教學進度規劃：高二物理『波與能量』4 週進度配當表",
      "titleEn": "Gemini in Docs: Pacing Guide for 4-Week 11th Grade Physics Unit on Waves",
      "roleScenarioZh": "學期初規劃單元整體進度配當表，精準平衡課堂講述、探究實作與段考複習",
      "promptZh": "【在 Google Docs 中提問】：\n請為十一年級（高二）物理科規劃一份為期 4 週的『波動與能量 (Waves and Energy)』單元教學進度配當表 (Pacing Guide)。每週有 4 節課，內容需涵蓋：機械波與電磁波的特性、波的疊加與干涉、都卜勒效應、聲波共振實驗與單元評量。請以清晰的表格呈現每週學習目標、建議課堂活動、實驗實作安排，以及週末課後作業規劃。",
      "promptEn": "Help me create a pacing guide for a 4-week, 11th grade high school physics unit on waves and energy. The schedule should assume 4 periods per week. Include weekly learning targets, recommended interactive activities, lab experiment days, formative check dates, and weekend homework assignments in an organized table.",
      "parts": {
        "persona": "資深高中物理課程督導與進度規劃專家",
        "act": "規劃為期 4 週（每週 4 節課）之嚴謹單元教學進度配當表",
        "recipient": "高二物理全體修課學生與共同備課教師群",
        "theme": "波的傳播、疊加干涉、駐波、都卜勒效應與能量傳遞",
        "structure": "4 週時間矩陣表格（學習目標、活動規劃、實驗實作、作業指派）"
      },
      "tipsZh": "配當表建立在 Google Docs 中後，可一鍵轉成 PDF 分享給家長與學生，亦可直接分享給同學科夥伴作為共備基底！",
      "applicableTools": [
        "Gemini in Docs",
        "Google Classroom"
      ],
      "targetAudience": "教師"
    },
    {
      "id": "p-124",
      "slideNum": 124,
      "category": "workspace",
      "subCategory": "Google Docs 企劃撰寫",
      "titleZh": "Google Docs 計畫書撰寫：高中化學實驗室現代化升級補助企劃案",
      "titleEn": "Gemini in Docs: Grant Proposal for Upgrading Chemistry Lab Equipment",
      "roleScenarioZh": "化學科召集人申請教育部或民間基金會專款補助升級實驗器材",
      "promptZh": "【在 Google Docs 中提問】：\n我正在向教育主管機關申請一筆專案補助，用以全面現代化升級學校的化學實驗室（引進數位感測器、分光光度計、通風櫥安全設施與微型化綠色化學器材）。請協助我根據以下痛點草稿，撰寫一份具說服力且格式正規的補助申請企劃案：\n1. 專案摘要與背景緣起\n2. 現有設備老舊對學生實作探究與安全的嚴重限制\n3. 引進新設備對培養學生 STEM 核心素養與科展專案的具體提升效益\n4. 為期一年的推動甘特圖與成效評估 KPI 指標\n5. 初步經費預算估算表。",
      "promptEn": "I’m applying for a grant to upgrade the science equipment in our chemistry labs (digital sensors, spectrophotometers, modern fume hoods). Help me create a persuasive grant proposal based on these draft notes: executive summary, urgent statement of lab safety and obsolescence, educational impact on student STEM inquiry, project milestones, and a categorized budget table.",
      "parts": {
        "persona": "專業教育基金與校園設施改善企劃專家",
        "act": "撰寫高說服力、結構嚴謹之實驗室升級補助申請企劃案",
        "recipient": "政府補助評審委員、校長與捐助企業基金會",
        "theme": "校園化學實驗室數位化升級、實驗安全與綠色化學探究",
        "structure": "背景摘要 + 痛點陳述 + 預期學習成效 + 實施時程 + 經費編列"
      },
      "tipsZh": "可進一步請 Gemini Docs 協助校對語氣，確保用詞精確專業、符合政府公文與採購規範的嚴謹要求！",
      "applicableTools": [
        "Gemini in Docs",
        "Google Sheets"
      ],
      "targetAudience": "行政主管"
    }
  ],
  "slides": [
    {
      "slideNumber": 1,
      "sectionId": "overview",
      "titleZh": "封面：運用 Gemini 於 K-12 中小學教育的 100+ 種方法",
      "titleEn": "July 2026",
      "summaryZh": "由 Google 攜手全球教育工作者共同編撰的官方實戰指南，專為中小學教育行政人員、教師與學生打造。",
      "allTextsEn": [
        "July 2026",
        "100+ ways to use\nin K-12 education",
        "Created in partnership with educators from around the world, this guide is designed to help K-12 educators and administrators get started with Google AI tools like Gemini for Education, Gemini Notebook, and Gemini in Classroom.",
        "Gemini"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image79.png"
      ]
    },
    {
      "slideNumber": 2,
      "sectionId": "overview",
      "titleZh": "本指南的核心學習目標",
      "titleEn": "This guide can help you learn how to:",
      "summaryZh": "學習撰寫專業提示詞、掌握 Gems/Canvas/Deep Research、活用 NotebookLM、教學與評量提示詞庫，以及 Classroom 與 Workspace 整合。",
      "allTextsEn": [
        "This guide can help you learn how to:",
        "Apply best practices to write clear, effective prompts that maximize Gemini’s capabilities\nUnderstand how the Gemini app and many of its key features (Gems, Gemini Canvas, Deep Research) can support teaching, learning, and working\nUse Gemini Notebook to organize sources, deepen research, and support personalized learning workflows\nSelect and use prompts for planning, instruction, assessment, student support, and administrative work\nDiscover prompts students can use in Gemini to support independent learning, study skills, coding, career exploration, and creative projects\nExplore ways to improve efficiency with Gemini in Google Workspace apps\nUse Gemini in Classroom to plan lessons, personalize learning, and create interactive student experiences grounded in your course materials"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image60.png"
      ]
    },
    {
      "slideNumber": 3,
      "sectionId": "overview",
      "titleZh": "本指南完整章節導覽 (目錄)",
      "titleEn": "Sections",
      "summaryZh": "涵蓋 Gemini for Education、NotebookLM、Workspace、Classroom、Gems、AI 素養與 IT 管理員設定。",
      "allTextsEn": [
        "Sections",
        "Ways to use Gemini for Education",
        "Ways to use Gemini Notebook",
        "Ways to use Gemini in Workspace",
        "AI literacy resources",
        "Product overview and prompting best practices",
        "Admin setup",
        "Ways to use Gemini: Gems",
        "Ways to use Gemini in Classroom"
      ],
      "tables": [],
      "notes": "",
      "images": []
    },
    {
      "slideNumber": 4,
      "sectionId": "overview",
      "titleZh": "專為教育量身打造的 AI 智慧助理",
      "titleEn": "Your AI-powered \u000bassistant for education",
      "summaryZh": "以安全、嚴謹的學習科學為基礎，賦能教師教學創新與學生自主學習。",
      "allTextsEn": [
        "Your AI-powered \u000bassistant for education"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image43.png"
      ]
    },
    {
      "slideNumber": 5,
      "sectionId": "overview",
      "titleZh": "運用 Gemini 翻轉教育的四大基石",
      "titleEn": "Transform education\nwith the help of Gemini",
      "summaryZh": "節省備課時間、實現個別化因材施教、激發教學創意靈感、培養自信學習，並嚴格保障校園隱私與資安。",
      "allTextsEn": [
        "Transform education\nwith the help of Gemini",
        "Save \u000btime\nSpeed up time-consuming tasks so you can focus on what matters most.",
        "Make learning more personal\nCaptivate each student with content that’s tailored to their needs and interests.",
        "Inspire \u000bcreativity\nGet fresh ideas and inspiration for new approaches with your AI assistant.",
        "While keeping your data private and secure",
        "Learn \u000bconfidently\nEmpower students with AI-guided support to help them learn with confidence."
      ],
      "tables": [],
      "notes": "",
      "images": []
    },
    {
      "slideNumber": 6,
      "sectionId": "overview",
      "titleZh": "教育社群三大角色的熱門應用總覽",
      "titleEn": "Education leaders",
      "summaryZh": "教育行政主管（企劃書、會議摘要、大數據分析）、學生（解構難題、客製測驗、論文寫作指引）、教師（教案序列、分層閱讀、規準評量）。",
      "allTextsEn": [
        "Education leaders",
        "Students",
        "Educators",
        "Top use cases at a glance",
        "Gemini can help your education community achieve more",
        "Go from a blank page to a grant proposal, alumni-outreach template, newsletter, recommendation letter, or email to a parent\nSummarize long documents, analyze data, and create templates for budget proposals, permission slips, and more\nBrainstorm new initiatives, develop project plans, and draft presentations",
        "Deepen understanding with on-demand support, like explanations of challenging concepts and step-by-step guidance\nPrepare for exams by creating personalized practice quizzes based on hard-to-grasp concepts\nBrainstorm and research ideas, get feedback on writing, and generate citations",
        "Draft lesson plans aligned with learning objectives and education standards\nRe-level texts and assignments, and increase student engagement by adjusting content to fit their interests\nGenerate assessments, assignments, and rubrics from scratch, or use previous examples with corresponding answer keys"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image91.jpg",
        "assets/images/image55.jpg",
        "assets/images/image103.jpg"
      ]
    },
    {
      "slideNumber": 7,
      "sectionId": "overview",
      "titleZh": "免費且安全的教育專用生成式 AI 工具套件",
      "titleEn": "Empower your education community with secure, free-of-charge generative AI tools",
      "summaryZh": "三大核心入口：Gemini for Education (gemini.google.com)、Gemini Notebook (notebook.google.com)、Gemini in Classroom (教室內建 30+ 鷹架工具)。",
      "allTextsEn": [
        "Empower your education community with secure, free-of-charge generative AI tools",
        "Gemini for Education",
        "Plan lessons, differentiate learning materials, summarize content, and more at gemini.google.com.",
        "Gemini Notebook",
        "Understand anything with AI that’s grounded only in the information you provide at notebook.google.com.",
        "Core Services with enterprise-grade data protection: data isn’t reviewed or used to train AI models",
        "Gemini in Classroom",
        "Plan lessons, differentiate learning materials, and tackle administrative tasks faster with help from 30+ tools in Google Classroom."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image49.png",
        "assets/images/image54.png",
        "assets/images/image47.png"
      ]
    },
    {
      "slideNumber": 8,
      "sectionId": "overview",
      "titleZh": "以 Gemini 翻轉教與學：搭載最強大之 Gemini 3.1 Pro",
      "titleEn": "Transform how you teach, learn, and work with the Gemini app",
      "summaryZh": "搭載最聰明的 Gemini 3.1 Pro 模型、18歲以下專屬內容安全過濾機制，並深度融入奠基於學習科學的 LearnLM 系列模型。",
      "allTextsEn": [
        "Transform how you teach, learn, and work with the Gemini app",
        "Access our most capable AI models\nGemini for Education includes expanded access to Gemini 3.1 Pro, our most intelligent model, which consistently ranks highly in 3rd party assessments.*",
        "Distinct experience for students under 18\nGemini has stricter content policies that prevent potentially inappropriate or harmful responses for users under 18, as well as a youth onboarding experience with AI literacy resources endorsed by ConnectSafely and the Family Online Safety Institute.",
        "Grounded in learning science\nGemini is infused with LearnLM, our family of models and capabilities fine-tuned for learning, rooted in learning science principles, and built in partnership with education and child development experts.",
        "The Gemini app is available to users of all ages",
        "* Source:  LMArena, as of February 2026"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image75.gif"
      ]
    },
    {
      "slideNumber": 9,
      "sectionId": "overview",
      "titleZh": "Gemini 應用程式介面剖析與功能入口",
      "titleEn": "Add files to your prompt",
      "summaryZh": "支援語音輸入、附加檔案（雲端硬碟與本機上傳）、快速切換聊天或專案，教育專業版更解鎖 Omni 影片生成強大功能。",
      "allTextsEn": [
        "Add files to your prompt",
        "Prompt input area",
        "Instead of typing your prompt, speak it!",
        "Anatomy of the Gemini app",
        "Start a new chat",
        "Access Gemini tools",
        "Note: Google AI Pro for Education accounts get higher access to new and powerful features, including unlocking access to video generation (Omni).",
        "Start creating",
        "Start learning"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image46.png",
        "assets/images/image50.png",
        "assets/images/image44.png",
        "assets/images/image48.png",
        "assets/images/image62.png",
        "assets/images/image73.png"
      ]
    },
    {
      "slideNumber": 10,
      "sectionId": "overview",
      "titleZh": "認識 Gemini Notebook (NotebookLM)：基於專屬來源的個人化 AI",
      "titleEn": "Understand anything with Gemini Notebook\nMeet your personal AI-powered research ",
      "summaryZh": "完全植基於你上傳的文件進行解答，零幻覺、零瞎掰，支援 80+ 種語言，並自動提供精確的原文引註出處。",
      "allTextsEn": [
        "Understand anything with Gemini Notebook\nMeet your personal AI-powered research and learning partner, grounded only in the information you provide",
        "When you ask Gemini Notebook  questions or to generate content, it only uses information from sources you provide. Think of it as an expert \u000bon your specific documents.",
        "Upload your sources (like strategy plans, education standards, and class materials) and Gemini Notebook can answer questions and generate summaries, lesson plans, study guides, discussion questions, and quizzes – all with in-line citations to ensure accuracy.",
        "Gemini Notebook is multilingual. You can upload sources from over 80 supported languages, including a combination of different languages, and then generate content in any of those languages."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image45.png"
      ]
    },
    {
      "slideNumber": 11,
      "sectionId": "overview",
      "titleZh": "深入與來源資料對話：工作室 (Studio) 多元產出",
      "titleEn": "Ask questions of your sources",
      "summaryZh": "使用 Studio 面板一鍵將上傳的講義轉化為雙主持播客語音導覽 (Audio Overview)、研讀指南、測驗卷或心智圖。",
      "allTextsEn": [
        "Ask questions of your sources",
        "Optional: Use the Studio panel to transform your uploaded resources into a podcast-style Audio Overview, study guide, Quiz, infographic, and more",
        "Anatomy of Gemini Notebook",
        "Give your notebook a name",
        "Upload your sources",
        "Optional: Share your notebook with colleagues or students"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image51.png"
      ]
    },
    {
      "slideNumber": 12,
      "sectionId": "parts",
      "titleZh": "提示詞專業心法：初階 vs 進階 vs 大師級",
      "titleEn": "Less effective",
      "summaryZh": "以九年級生物課為例，清楚對比模糊指令、進階指令與包含角色、目標、架構的大師級提示詞效果差距。",
      "allTextsEn": [
        "Less effective",
        "More effective",
        "How to prompt like a pro",
        "Simple",
        "Better",
        "Best",
        "Give me some lesson ideas for 9th grade biology.",
        "Why it’s just OK\nIt’s vague. There’s no clarity on topic (biology is broad), types of activities, or instructional goals. Gemini might return general ideas not aligned with the topic or instructional needs.",
        "Suggest three activities to teach 9th graders about DNA.",
        "Why it’s better\nIt narrows the focus to DNA and specifies the number of ideas. But it still lacks detail on instructional design style or classroom formats (for example, lab, inquiry, or collaboration).",
        "Act as an instructional designer for a 9th grade biology teacher introducing students to DNA structure and function. Suggest three lesson ideas: one interactive lab, one inquiry-based exploration, and one collaborative project.",
        "Why it’s best\nIt defines a role for Gemini to play (curriculum designer), provides a clear audience and grade level, focuses on a specific learning objective (DNA structure and function), and outlines exact instructional formats to tailor the output."
      ],
      "tables": [],
      "notes": "",
      "images": []
    },
    {
      "slideNumber": 13,
      "sectionId": "parts",
      "titleZh": "PARTS 提示詞黃金架構解析",
      "titleEn": "PARTS framework",
      "summaryZh": "Persona (角色)、Act (行動任務)、Recipient (受眾對象)、Theme (主題背景)、Structure (格式架構)。",
      "allTextsEn": [
        "PARTS framework",
        "Anatomy of a great prompt\nGreat prompts follow the PARTS framework – a simple way to guide Gemini step-by-step in creating exactly what you need. Use this model when you want Gemini to create something from scratch, like a lesson plan, rubric, email, or communication."
      ],
      "tables": [
        [
          [
            "Element",
            "What it means",
            "Why it matters"
          ],
          [
            "P: Persona",
            "Set Gemini’s role",
            "Helps Gemini respond with the right tone, expertise, and behavior (for example, “Act like a coach”, \u000b“Act like an educator”, or “Act like an instructional designer”)"
          ],
          [
            "A: Act",
            "Ask clearly for the task",
            "Uses action words like “create”, “rewrite”, “explain”, or “align” to get specific results"
          ],
          [
            "R: Recipient",
            "Say who it’s for",
            "Helps tailor output to the student group, staff, or community members"
          ],
          [
            "T: Theme",
            "Add your topic or concept",
            "Guides the content with context like “early literacy,” “DNA structure,” or “social-emotional learning”"
          ],
          [
            "S: Structure",
            "Name the format or model you want",
            "Helps Gemini tailor its output into specific formats like lesson plans, rubrics, slides, newsletters, or instructional frameworks (for example, 5E or UDL)"
          ]
        ]
      ],
      "notes": "",
      "images": []
    },
    {
      "slideNumber": 14,
      "sectionId": "parts",
      "titleZh": "PARTS 實戰拆解：高中生物 5E 探究教案範例",
      "titleEn": "PARTS framework",
      "summaryZh": "詳細示範如何將 PARTS 五大元素完美映射到高中 DNA 結構 5E 教學設計中。",
      "allTextsEn": [
        "PARTS framework",
        "Breaking down a great prompt with PARTS\nHere’s how a strong classroom prompt maps to each element of the PARTS framework. Use this as a model when building your own.",
        "You are a high school educator. Design a 5E lesson for 10th grade students introducing the structure and function of DNA. Tailor the lesson for an inquiry-based science class and include an engaging lab activity and a claim-evidence-reasoning (CER) writing prompt as the exit ticket."
      ],
      "tables": [
        [
          [
            "Element",
            "What it means",
            "Why it matters"
          ],
          [
            "P: Persona",
            "High school educator",
            "Sets Gemini’s tone and expertise level; expects a standards-aligned, professional lesson"
          ],
          [
            "A: Act",
            "Design a 5E lesson",
            "Directs Gemini to create a complete lesson using a well-known structure educators recognize"
          ],
          [
            "R: Recipient",
            "10th grade students in an inquiry-based classroom",
            "Helps tailor the level of difficulty and engagement strategies to fit real learners"
          ],
          [
            "T: Theme",
            "Structure and function of DNA",
            "Focuses the lesson on a specific science concept that needs to be introduced and explored"
          ],
          [
            "S: Structure",
            "5E model with lab and CER writing prompt",
            "Ensures the response uses an inquiry-based format and ends with a meaningful assessment aligned with Next Generation Science Standards-style practices"
          ]
        ]
      ],
      "notes": "",
      "images": [
        "assets/images/image60.png"
      ]
    },
    {
      "slideNumber": 15,
      "sectionId": "parts",
      "titleZh": "快速跳轉各單元章節",
      "titleEn": "Gemini Notebook",
      "summaryZh": "方便讀者直接定位至 Gemini for Education、NotebookLM、Classroom 或 Workspace 各大應用模組。",
      "allTextsEn": [
        "Gemini Notebook",
        "Gemini for Education",
        "Jump to the following sections:",
        "Gemini in Workspace",
        "Find your way to the tools and prompts you want to explore",
        "Gemini in Classroom"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image47.png",
        "assets/images/image61.png",
        "assets/images/image52.png",
        "assets/images/image58.png",
        "assets/images/image59.png"
      ]
    },
    {
      "slideNumber": 16,
      "sectionId": "core_prompts",
      "titleZh": "Gemini for Education",
      "titleEn": "Gemini for Education",
      "summaryZh": "Chat with the Gemini app and use powerful capabilities like Deep Research, Gemini Canvas, and Gems, all of which are ava",
      "allTextsEn": [
        "Gemini for Education",
        "Chat with the Gemini app and use powerful capabilities like Deep Research, Gemini Canvas, and Gems, all of which are available free of charge."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image53.png"
      ]
    },
    {
      "slideNumber": 17,
      "sectionId": "core_prompts",
      "titleZh": "Get started with Gemini, your AI-powered assistant",
      "titleEn": "Get started with Gemini, your AI-powered assistant for education",
      "summaryZh": "04",
      "allTextsEn": [
        "Get started with Gemini, your AI-powered assistant for education",
        "04",
        "Planning",
        "Assessment",
        "Instructional materials",
        "Administrative tasks",
        "01",
        "02",
        "03",
        "Differentiation",
        "Deep Research",
        "05",
        "08",
        "Get started with Gemini use cases by category",
        "Gemini Canvas",
        "10",
        "Gems",
        "11",
        "Take your work to the next level",
        "Explore ideas, brainstorm ways to make them yours, then challenge yourself to create your own from scratch.",
        "Research",
        "06",
        "Student use",
        "07",
        "Guided Learning",
        "09"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image60.png"
      ]
    },
    {
      "slideNumber": 18,
      "sectionId": "core_prompts",
      "titleZh": "Planning",
      "titleEn": "Planning",
      "summaryZh": "Generate lesson ideas\nPrompt",
      "allTextsEn": [
        "Planning",
        "Generate lesson ideas\nPrompt",
        "You are a 9th grade biology teacher. Design a 5-day lesson sequence introducing DNA structure and function to students with mixed prior knowledge. Align each day’s focus to NGSS standards, and include a balance of interactive, inquiry-based, and collaborative learning. Use an anchoring phenomenon or real-world context students can return to as they deepen their understanding.",
        "✨Tip\nAsk Gemini to include vocabulary scaffolds and formative checks for Day 3 and Day 5.\n🔥Great for\nStandards-aligned science planning with intentional pacing and differentiation."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image56.png",
        "assets/images/image206.png"
      ]
    },
    {
      "slideNumber": 19,
      "sectionId": "core_prompts",
      "titleZh": "Planning",
      "titleEn": "Planning",
      "summaryZh": "Planning",
      "allTextsEn": [
        "Planning"
      ],
      "tables": [
        [
          [
            "Use case",
            "Prompt",
            "Tip",
            "Great for"
          ],
          [
            "Lesson creation",
            "You are a curriculum co-designer. Create a 3-part lesson on decimal division word problems for a 5th grade math class using the gradual release model (I do, we do, you do).",
            "Include a specific standard or student learning objective.",
            "Creative, scaffolded lessons"
          ],
          [
            "Unit design",
            "You are an interdisciplinary unit planner. Design a 2-week high school humanities unit on WWII and media literacy with a driving question, aligned standards and learning outcomes, built-in assessment checkpoints, and a day-by-day learning experience plan.",
            "Ask Gemini to propose performance-based assessments and pacing suggestions.",
            "Integrated unit design with cross-curricular connections"
          ],
          [
            "Course syllabus",
            "You are a high school course designer. Create a syllabus for an introductory sociology course, including weekly topics, major assignments, and a grading breakdown.",
            "Ask Gemini to align each week’s topics with specific learning outcomes or skills.",
            "Structured course planning with clear progression and expectations"
          ],
          [
            "Interdisciplinary planning",
            "You are a cross-curricular planning partner. Develop a 2-day project for 8th graders combining environmental science and persuasive writing. Students should argue for or against a local sustainability policy.",
            "Ask Gemini to recommend a student reflection or discussion prompt.",
            "Creative real-world projects across disciplines"
          ],
          [
            "Professional development (PD)",
            "You are a PD  designer for an instructional coach. Outline a 60-minute session that helps teachers explore how AI supports instructional planning. Include learning objectives, engagement strategies, and reflection prompts.",
            "Include breakout formats or follow-up tasks for use by the professional learning community (PLC).",
            "Planning meaningful, structured educator PD"
          ],
          [
            "Tech adoption plan",
            "You are an IT planning lead. Draft a 6-week onboarding plan to help faculty adopt Gemini for instruction and admin tasks. Include 1 professional learning per week, as well as progress monitoring and feedback loops throughout the month.",
            "Ask Gemini to create follow-up emails, slide decks, or tip sheets for faculty.",
            "Tech integration with measurable rollout phases"
          ]
        ]
      ],
      "notes": "",
      "images": []
    },
    {
      "slideNumber": 20,
      "sectionId": "core_prompts",
      "titleZh": "Assessment",
      "titleEn": "Assessment",
      "summaryZh": "Differentiate an existing assessment\nPrompt",
      "allTextsEn": [
        "Assessment",
        "Differentiate an existing assessment\nPrompt",
        "You are a 10th grade world history teacher. Rewrite an Industrial Revolution exam using the same learning objectives and number of questions. Adjust the wording and format to provide new practice opportunities for students who need an alternative version. [Upload exam]",
        "✨Tip\nMention if you want specific formats (for example, short answer) or paste a sample question to match tone and rigor. Don’t forget to upload the exam!\n🔥Great for\nDifferentiating assessments for makeups, \u000baccommodations, or review."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image57.png"
      ]
    },
    {
      "slideNumber": 21,
      "sectionId": "core_prompts",
      "titleZh": "Assessment",
      "titleEn": "Assessment",
      "summaryZh": "Assessment",
      "allTextsEn": [
        "Assessment"
      ],
      "tables": [
        [
          [
            "Use case",
            "Prompt",
            "Tip",
            "Great for"
          ],
          [
            "Quiz generation",
            "You are an assessment designer. Quiz my 9th graders on factoring binomials. Ensure questions assess both understanding and reasoning.",
            "Ask Gemini to include answer keys and brief explanations for each question.",
            "Creating varied, standards-aligned assessments with built-in feedback"
          ],
          [
            "Data analysis for instruction",
            "You are a teaching partner reviewing assessment results from a 5th grade reading benchmark. Analyze the data, identify learning trends, and suggest flexible grouping strategies for reteaching. [Upload document to analyze]",
            "Upload anonymized results for tailored insights or ask for Tier 2 intervention ideas. Don’t forget to upload the document to analyze!",
            "Linking data to responsive instruction"
          ],
          [
            "Case-based assessment design",
            "You are a high school teacher teaching an introductory psychology course. Design a case-based assessment that asks students to apply theories of behavior to a real-world scenario. Include the scenario, 3 analysis questions, and a rubric with criteria for evidence use and conceptual accuracy.",
            "Ask Gemini to suggest variations of the case for different student groups or scaffold it for tutoring use.",
            "Applying theory to real-world analysis in a secondary school context"
          ],
          [
            "Rubric co-design",
            "You are a rubric co-designer. Create a project-based rubric for a high school environmental science task where students will make policy recommendations to mitigate the pollutants in a body of water. Include criteria for research, collaboration, product quality, and reflection. Make the rubric clear and specific enough for students to use for self-assessment.",
            "Ask Gemini to revise the rubric for peer assessment or self-reflection use.",
            "Aligning assessment with goals and student ownership"
          ],
          [
            "Performance task",
            "You are a high school writing coach. Design a performance assessment that asks students to write an argumentative essay responding to a real-world issue. Include a brief scenario, clear task prompt, sample source material students can use or respond to within their arguments, and grading criteria.",
            "Ask Gemini to align the task with outcomes like thesis clarity, evidence use, and tone.",
            "Assessment in secondary school  courses"
          ],
          [
            "Professional learning community support for assessment literacy",
            "You are an instructional leader supporting a 6th grade PLC. Plan a 45-minute session to help teachers analyze student work samples in math. Include discussion protocols, look-for guidance, and next-step actions.",
            "Request sample slides, handouts, or a norm-setting kickoff activity.",
            "Building shared assessment practices and calibration"
          ]
        ]
      ],
      "notes": "",
      "images": []
    },
    {
      "slideNumber": 22,
      "sectionId": "core_prompts",
      "titleZh": "Instructional materials",
      "titleEn": "Instructional materials",
      "summaryZh": "Lab guide creation\nPrompt",
      "allTextsEn": [
        "Instructional materials",
        "Lab guide creation\nPrompt",
        "You are a biology lab coordinator. Create a student-facing lab guide for a DNA extraction experiment that includes step-by-step procedures, safety tips, prediction prompts, and space for observations.",
        "✨Tip\nAsk Gemini to provide an appendix that includes vocabulary words and a version for digital or printed use.\n🔥Great for\nCreating structured, inquiry-based lab experiences."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image74.png"
      ]
    },
    {
      "slideNumber": 23,
      "sectionId": "core_prompts",
      "titleZh": "Instructional materials",
      "titleEn": "Instructional materials",
      "summaryZh": "Instructional materials",
      "allTextsEn": [
        "Instructional materials"
      ],
      "tables": [
        [
          [
            "Use case",
            "Prompt",
            "Tip",
            "Great for"
          ],
          [
            "Re-level a reading passage",
            "You are a cross-content literacy expert. Use this attachment to generate an article for 7th graders on photosynthesis at 3 reading levels: emerging (late 5th–6th), on-grade-level, and advanced readers (8th–9th). All the articles must cover the content in the attachment, but with varied scaffolds. Include 2 comprehension questions per version. [Upload document with the reading passage]",
            "Ask Gemini to include a glossary or add icons to support concept understanding. Don’t forget to upload the reading passage!",
            "Differentiating reading materials to support varied learners"
          ],
          [
            "Student-facing handout creation",
            "You are an instructional assistant for a 10th grade (ages 15–16) English language arts teacher. Create a student handout that teaches how to identify theme in literature. Include a short passage, guiding questions, and a reflection prompt.",
            "Ask Gemini to format it as a \u000bone-pager with visual structure.",
            "Ready-to-use scaffolds for literary analysis"
          ],
          [
            "Content personalization from a textbook",
            "Act as a learning designer. I’ve uploaded a page from a 9th-grade biology textbook. Create a simplified summary for general ed students, and include a follow-up prompt to encourage discussion or journaling. [Upload textbook content]",
            "Ask Gemini to keep technical accuracy while adjusting tone and vocabulary. Don’t forget to upload the textbook content!",
            "Making complex materials more accessible for diverse learners"
          ],
          [
            "Discussion guide creation",
            "You are a high school teacher preparing a discussion-based class on digital privacy and surveillance. Create a student-facing discussion guide with a brief scenario, 3 open-ended questions, and a reflection activity.",
            "Ask Gemini to scaffold the questions using Bloom’s Taxonomy or align them to course themes you’ve attached.",
            "Supporting student-led dialogue and deeper analysis in secondary school  settings"
          ],
          [
            "Skill-focused practice activity",
            "You are an instructional coach supporting a 6th grade teacher. Create a student-facing activity that builds the skill of using text evidence in responses. Include a short nonfiction passage, 3 scaffolded questions (from surface-level to analytical), and a self-check checklist for students to use.",
            "Ask Gemini to adjust the reading level or reword the checklist in student-friendly language.",
            "Building focused practice tied to comprehension skills and saving prep time for scaffolded literacy tasks"
          ]
        ]
      ],
      "notes": "",
      "images": []
    },
    {
      "slideNumber": 24,
      "sectionId": "core_prompts",
      "titleZh": "Differentiation",
      "titleEn": "Differentiation",
      "summaryZh": "Differentiation",
      "allTextsEn": [
        "Differentiation"
      ],
      "tables": [
        [
          [
            "Use case",
            "Prompt",
            "Tip",
            "Great for"
          ],
          [
            "Give tailored feedback to each student",
            "Act as an instructional coach for 7th grade English language arts. For a student’s persuasive essay on “Should tablets replace textbooks?” where they have a clear main idea but weak evidence and an abrupt conclusion, please draft 2 encouraging, actionable feedback points focusing on improving the strength of the evidence and developing a structured conclusion. Explain the suggestions and provide a script for me to use. [Upload student paper]",
            "Upload your rubric or list 2 to 3 key learning objectives for the assignment. Don’t forget to upload the paper before submitting your prompt!",
            "Saving time, enhancing the quality and personalization of feedback, making comments more actionable, and fostering individual student growth and reflection"
          ],
          [
            "Tiered reading activity",
            "You are a curriculum designer for a 7th grade (12–13 year olds) ELA class. Create 3 versions of a reading task on theme using the short story “Seventh Grade” by Gary Soto: one for emerging, one for on-level, and one for advanced readers.",
            "Ask Gemini to include vocabulary scaffolds or guiding questions per level.",
            "Tiered instruction that meets students where they are"
          ],
          [
            "Small group support plan",
            "You are a literacy interventionist. Create a 3-day small-group support plan for 3rd grade students who are struggling with decoding multisyllabic words. Include one interactive activity, one guided practice, and one review game.",
            "Ask Gemini to include materials or printable cards to use with students.",
            "Targeted intervention that’s ready to implement"
          ],
          [
            "UDL lesson adaptation",
            "You are a co-teacher planning a 9th grade science lesson on cell structures. Adapt the lesson using Universal Design for Learning (UDL) to support students with varied cognitive, language, and sensory needs. Include multiple ways for students to engage and show understanding.",
            "Ask Gemini to generate a table with access, expression, and engagement strategies.",
            "Planning inclusive lessons from the start"
          ],
          [
            "Multilingual support strategy",
            "You are an instructional coach supporting a 6th grade team with multilingual learners. Create a support strategy for an upcoming unit on persuasive writing. Include vocabulary supports, visuals, and sentence frames and explain your decisions so I understand the principles involved.",
            "Ask Gemini to generate home-language versions or culturally relevant examples.",
            "Integrating academic language supports across content"
          ],
          [
            "Choice board creation",
            "You are a curriculum designer. Create a 6-option choice board for a unit on climate change that allows students to demonstrate understanding through different formats (for example, writing, visuals, discussion, multimedia). Align each option with the same learning goal and vary complexity.",
            "Ask Gemini to tag each option with suggested tools (for example, Slides, Jamboard, Docs) or alignment to learning styles.",
            "Offering students flexible ways to show what they know"
          ]
        ]
      ],
      "notes": "",
      "images": []
    },
    {
      "slideNumber": 25,
      "sectionId": "core_prompts",
      "titleZh": "Administrative tasks",
      "titleEn": "Administrative tasks",
      "summaryZh": "Schedule planning for testing week\nPrompt",
      "allTextsEn": [
        "Administrative tasks",
        "Schedule planning for testing week\nPrompt",
        "You are a school operations assistant. Create a daily schedule for state testing week at a middle school. Include core testing blocks, break times, and alternative activities for non-tested grades. Cover Monday through Friday and ensure the schedule is staff-friendly.",
        "✨Tip\nAsk Gemini to add setup and reminder tasks for proctors and admin support.\n🔥Great for\nStructuring complex weeks with clarity\nEnsuring coverage, communication, and classroom flow"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image64.gif"
      ]
    },
    {
      "slideNumber": 26,
      "sectionId": "core_prompts",
      "titleZh": "Administrative tasks",
      "titleEn": "Administrative tasks",
      "summaryZh": "Administrative tasks",
      "allTextsEn": [
        "Administrative tasks"
      ],
      "tables": [
        [
          [
            "Use case",
            "Prompt",
            "Tip",
            "Great for"
          ],
          [
            "Staff meeting agenda creation",
            "You are an instructional coach. Create a 45-minute staff meeting agenda focused on integrating AI in instruction. Include time blocks, discussion prompts, and action steps.",
            "Ask Gemini to align the agenda with district goals or a schoolwide professional development theme.",
            "Focused, goal-driven collaboration around innovation"
          ],
          [
            "Email drafting for policy updates",
            "You are a school communications coordinator. Draft an email for staff that summarizes updates to your school’s AI use policy. Keep the tone professional and supportive, and include a link to full documentation.",
            "Ask Gemini to create alternate versions for families or students.",
            "Clear, consistent communication around evolving policy"
          ],
          [
            "Rollout plan for new tech tool",
            "You are an IT implementation lead. Create a 3-phase rollout tool for a new digital learning tool to be used by teachers, including key dates, training sessions, and progress check-ins.",
            "Upload your tech calendar or resource list for tailored planning.",
            "Structured, realistic tech-adoption strategies"
          ],
          [
            "Template creation for school communities",
            "You are a school communications manager. Draft a flexible newsletter template for alumni outreach. Include placeholders for event recaps, donation links, and class updates.",
            "Ask Gemini to generate sample content to accelerate your workflow.",
            "Consistent, scalable messaging to school communities"
          ],
          [
            "Performance review notes starter",
            "You are an instructional coach preparing for teacher evaluations. Draft 3 open-ended reflection prompts to guide performance conversations that support professional growth.",
            "Ask Gemini to differentiate prompts based on experience level.",
            "Reflective, constructive coaching conversations"
          ],
          [
            "Schoolwide announcement drafting",
            "You are a principal preparing a schoolwide announcement about an emergency drill. Write a clear, calming message to be read over the intercom that informs and reassures students and staff.",
            "Ask Gemini to generate alternate versions for email or text alerts.",
            "Quick drafting of urgent, high-clarity communications"
          ]
        ]
      ],
      "notes": "",
      "images": []
    },
    {
      "slideNumber": 27,
      "sectionId": "core_prompts",
      "titleZh": "Research",
      "titleEn": "Research",
      "summaryZh": "Grant proposal brainstorming\nPrompt",
      "allTextsEn": [
        "Research",
        "Grant proposal brainstorming\nPrompt",
        "You are a grant writing support coach. I’m developing a proposal to study the impact of AI tools on teaching practices in K-12 education. Help me outline a compelling draft that includes a research question, rationale, methods, and potential outcomes by facilitating a brainstorm session to make sure the draft meets my needs.",
        "✨Tip\nAsk Gemini to align the proposal structure with National Science Foundation, Spencer Foundation, \u000bor institutional research funding templates.\n🔥Great for\nAccelerating grant drafts for AI-focused educational research."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image84.gif"
      ]
    },
    {
      "slideNumber": 28,
      "sectionId": "core_prompts",
      "titleZh": "Research",
      "titleEn": "Research",
      "summaryZh": "Research",
      "allTextsEn": [
        "Research"
      ],
      "tables": [
        [
          [
            "Use case",
            "Prompt",
            "Tip",
            "Great for"
          ],
          [
            "Literature review",
            "You are a research assistant. Help outline a literature review for a final paper on the impact of AI on workplace productivity. Group key themes, recommend structure, and suggest potential sources to explore further.",
            "Paste in working notes or prior citations for Gemini to cluster and build on.",
            "Structuring messy research inputs into a coherent review"
          ],
          [
            "Refining a research question",
            "You are a writing coach. Please guide me through an iterative process to narrow my starting topic, “urban food insecurity.” Please start by asking me 3–4 diagnostic questions to probe my specific interests in population, context/location, and problem, mechanism, or intervention. Then, let’s work together to refine that idea into a focused question.",
            "Ask Gemini to align each version with possible methods or data sources.",
            "Moving from idea to focused, researchable inquiry"
          ],
          [
            "Source comparison",
            "You are a critical reading partner. Compare two academic sources on climate migration. Summarize the key arguments, note areas of agreement or disagreement, and suggest how I might synthesize them in my own paper.",
            "Paste in two abstracts or excerpts for Gemini to analyze in context.",
            "Accelerating synthesis across multiple viewpoints"
          ],
          [
            "Citation starter and formatting help",
            "You are a research assistant. I’m writing a paper in APA 7. Help me generate citations for 3 articles and format a reference page. Also flag any citation elements I’m missing.",
            "Ask Gemini to double-check digital object identifiers or generate BibTeX entries for academic software.",
            "Saving time and improving accuracy in academic writing"
          ]
        ]
      ],
      "notes": "",
      "images": []
    },
    {
      "slideNumber": 29,
      "sectionId": "core_prompts",
      "titleZh": "Student use",
      "titleEn": "Student use",
      "summaryZh": "Deepen understanding with guidance\nPrompt",
      "allTextsEn": [
        "Student use",
        "Deepen understanding with guidance\nPrompt",
        "You are a biology teacher. I need to understand DNA replication. Explain it simply. Then, show me step-by-step how to outline the key stages and the main enzymes involved in each stage.",
        "✨Tip\nBe specific with the concept and the task. You can say, “Explain it like I’m an 11th grade biology student.”\n🔥Great for\nQuickly clarifying complex topics, getting unstuck on homework, or test preparation."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image65.png"
      ]
    },
    {
      "slideNumber": 30,
      "sectionId": "core_prompts",
      "titleZh": "Student use",
      "titleEn": "Student use",
      "summaryZh": "Reinforcing concepts with flash cards\nPrompt",
      "allTextsEn": [
        "Student use",
        "Reinforcing concepts with flash cards\nPrompt",
        "Act as an educational content creator and design interactive flashcards for freshman biology students focusing on key vocabulary from the provided class material, structured as question-and-answer flashcards to aid in review and understanding. [Upload class material]",
        "✨Tip\nAdding your class materials helps Gemini produce more relevant outputs.\n🔥Great for\nReinforcing concepts and preparing for quizzes or exams."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image90.gif"
      ]
    },
    {
      "slideNumber": 31,
      "sectionId": "core_prompts",
      "titleZh": "Student use",
      "titleEn": "Student use",
      "summaryZh": "Student use",
      "allTextsEn": [
        "Student use"
      ],
      "tables": [
        [
          [
            "Use case",
            "Prompt",
            "Tip",
            "Great for"
          ],
          [
            "Preparing for an exam with personalized practice quizzes",
            "Act as a biology teacher. I am a HS freshman and I have a biology midterm coming up. Create a practice quiz for me. Focus on these concepts I find hard: “cellular respiration vs. photosynthesis,” “the stages of mitosis,” and “Mendelian genetics (Punnett squares).” Give me 10 multiple-choice questions and 5 short answer questions, and provide the answers separately.",
            "Be very specific about the subject, exam type (for example, final, midterm, quiz), and the exact topics you want the quiz to cover.",
            "Targeted review, identifying weak spots, and active recall practice before exams"
          ],
          [
            "Getting constructive feedback on a written draft for improvement",
            "Act as a high school history teacher. I am a high school freshman, and I’ve written a draft for my history essay on the causes of World War I. I’m not looking for revisions, but can you give me feedback on (1) the clarity of my thesis statement, (2) the strength of my supporting evidence, and (3) the overall organization and flow. [Upload essay]",
            "For targeted insights, ask questions like, “Is my introduction engaging?” Or “Are my counterarguments addressed well?” Don’t forget to upload the essay before submitting your prompt!",
            "Refining arguments, checking for clarity, understanding a reader’s perspective, and improving specific writing skills"
          ],
          [
            "Identifying citations and missing evidence",
            "Act as a writing instructor. Here’s my essay on the ethical implications of AI in healthcare. Can you help me identify specific sentences or claims that need citations to support them, and suggest where I might need to add evidence.",
            "Attach your draft. You can ask for additional feedback like “fix any grammatical errors” or “check for conciseness.”",
            "Instant, personalized writing feedback"
          ],
          [
            "Brainstorming project ideas",
            "Act as a research librarian. I need to choose a topic for a 10-page research paper for my environmental science class. Help me brainstorm 3 distinct project ideas related to the impact of microplastics on marine ecosystems, and briefly explain why each would be a compelling and researchable topic for a high school junior.",
            "Specify your subject, project type (for example, a presentation or essay), length, and any initial areas of interest. Then, ask Gemini to help you “develop one of these ideas into a research question” or “suggest some initial keywords for research.”",
            "Finding meaningful, relevant project topics"
          ]
        ]
      ],
      "notes": "",
      "images": []
    },
    {
      "slideNumber": 32,
      "sectionId": "core_prompts",
      "titleZh": "Student use",
      "titleEn": "Student use",
      "summaryZh": "Student use",
      "allTextsEn": [
        "Student use"
      ],
      "tables": [
        [
          [
            "Use case",
            "Prompt",
            "Tip",
            "Great for"
          ],
          [
            "Practicing coding with real examples",
            "Act as a senior software developer. Show me how to write a simple Python program that takes a list of numbers and returns the average. Please explain each part of the code, especially how to handle potential errors like an empty list. I’m a high school student in an introductory programming course.",
            "Mention the programming language and your current skill level (such as “beginner Java”). You can paste your own code and ask “Can you help me debug this?” or “How can I make this more efficient?” Pro tip: Generate code to prototype this with Gemini Canvas.",
            "Interactive, scaffolded practice in computer science"
          ],
          [
            "Practicing for the SAT exam\n\n\nAdditional standard exam support coming soon: ACT, GRE, and Akira ENEM",
            "I want to take a practice SAT test.",
            "Use the immediate feedback you receive to identify areas for further study and ask Gemini to create a customized study plan based on your performance. If a concept still feels fuzzy, ask Gemini to explain the correct answer using a different analogy or real-world example.",
            "Full-length standardized exam practice experience, grounded in fully vetted material from The Princeton Review."
          ],
          [
            "Practicing for the JEE Main exam",
            "I want to take a JEE Main mock test.",
            "Take the feedback from each practice question to identify your weak spots and have Gemini create a customized study plan to bridge those gaps.",
            "Full-length standardized exam practice experience, grounded in fully vetted material from Physics Wallah and Careers360."
          ]
        ]
      ],
      "notes": "Use the immediate feedback received to identify areas for further study and create a customized study plan with Gemini. Gain further understanding on anything you didn’t understand by asking Gemini to explain the correct answer",
      "images": []
    },
    {
      "slideNumber": 33,
      "sectionId": "advanced",
      "titleZh": "Take Gemini to the next level \u000bwith advanced capab",
      "titleEn": "Take Gemini to the next level \u000bwith advanced capabilities",
      "summaryZh": "Take Gemini to the next level \u000bwith advanced capabilities",
      "allTextsEn": [
        "Take Gemini to the next level \u000bwith advanced capabilities"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image43.png"
      ]
    },
    {
      "slideNumber": 34,
      "sectionId": "advanced",
      "titleZh": "Deep Research\nGenerate in-depth reports in minutes",
      "titleEn": "Deep Research\nGenerate in-depth reports in minutes",
      "summaryZh": "Get up to speed on just about anything with Deep Research, an agentic feature in Gemini that can automatically search up",
      "allTextsEn": [
        "Deep Research\nGenerate in-depth reports in minutes",
        "Get up to speed on just about anything with Deep Research, an agentic feature in Gemini that can automatically search up to hundreds of websites on your behalf, think through its findings, and create insightful multipage reports with citations."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image63.png",
        "assets/images/image80.gif"
      ]
    },
    {
      "slideNumber": 35,
      "sectionId": "advanced",
      "titleZh": "Tip: After your report is complete, you can ask Ge",
      "titleEn": "Tip: After your report is complete, you can ask Gemini follow-up questions about",
      "summaryZh": "How Deep Research works",
      "allTextsEn": [
        "Tip: After your report is complete, you can ask Gemini follow-up questions about it. These questions do not count toward your monthly limit of Deep Research reports.",
        "How Deep Research works",
        "Select Deep Research mode. You can do this in two ways:\nChoose “Deep Research” from the options at the bottom of the chat box.\nAlternatively, select “Deep Research” using the model picker located under the Gemini logo at the top of the interface.",
        "A",
        "B",
        "C",
        "A",
        "B",
        "C",
        "Initiate your request. Submit your prompt in Gemini.",
        "Review and refine the proposed research plan. Gemini will develop and present a draft research plan. Take this opportunity to review it and make any edits or refinements to better suit your needs (for example, ask to “add a section on implementation costs” or “include international examples”).",
        "D",
        "Start the research and observe execution. Click “Start research” to begin. You can then watch in real time as Deep Research executes the plan and gathers information.",
        "E",
        "Observe the comprehensive report. After the research is complete, Gemini will provide you with a detailed report.",
        "D"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image67.png",
        "assets/images/image68.png"
      ]
    },
    {
      "slideNumber": 36,
      "sectionId": "advanced",
      "titleZh": "Deep Research example",
      "titleEn": "Deep Research example",
      "summaryZh": "Lit review starter\nPrompt",
      "allTextsEn": [
        "Deep Research example",
        "Lit review starter\nPrompt",
        "Act as a research assistant supporting a faculty member. Summarize 3 to 5 recent findings from peer-reviewed sources on project-based learning in middle school science. Include APA citations and group findings into key themes.",
        "✨Tip\nAsk Gemini to organize results by outcome type \u000b(for example, engagement or achievement).\n🔥Great for\nLiterature reviews, grant narratives, or professional development design grounded in research."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image66.png"
      ]
    },
    {
      "slideNumber": 37,
      "sectionId": "advanced",
      "titleZh": "Deep Research\nAudio Overviews for flexible learnin",
      "titleEn": "Deep Research\nAudio Overviews for flexible learning",
      "summaryZh": "Don’t just read – listen",
      "allTextsEn": [
        "Deep Research\nAudio Overviews for flexible learning",
        "Don’t just read – listen",
        "You can also download the audio file to:\nSave for offline listening\nEmbed in a course hub or learning management system\nShare with a professional learning community (PLC) or student group",
        "You can generate an Audio Overview of your Deep Research reports – a podcast-style narration of the key findings. It’s a fast, accessible way to listen to your research findings while you multitask.",
        "Download and share"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image63.png",
        "assets/images/image163.png",
        "assets/images/image70.png",
        "assets/images/image60.png"
      ]
    },
    {
      "slideNumber": 38,
      "sectionId": "advanced",
      "titleZh": "Deep Research",
      "titleEn": "Deep Research",
      "summaryZh": "Deep Research",
      "allTextsEn": [
        "Deep Research"
      ],
      "tables": [
        [
          [
            "Use case",
            "Prompt",
            "Great for"
          ],
          [
            "Planning",
            "Research examples of effective interdisciplinary teaching models in secondary education. Include a comparison of 2–3 approaches used in public schools and summarize their benefits, challenges, and implementation strategies.",
            "Planning cross-curricular units or collaborative teaching strategies"
          ],
          [
            "Assessment",
            "Compare the following alternative grading systems: ungrading, mastery-based grading, and contract grading. Highlight research on outcomes, student engagement, and instructor workload.",
            "Exploring modern assessment models with evidence"
          ],
          [
            "Instructional materials",
            "Research how graphic organizers support comprehension for multilingual learners. Include evidence-based examples across content areas and grade levels.",
            "Building a foundation for inclusive teaching materials"
          ],
          [
            "Differentiation",
            "Research effective strategies for supporting students with executive function challenges in inclusive classrooms. Include tools, routines, and teacher-facing supports.",
            "Creating supports that improve access and independence"
          ],
          [
            "Administrative tasks",
            "What does recent research say about the impact of AI on K-12 school operations and teacher workload? Include trends, pilot programs, and leadership considerations.",
            "Strategic planning and schoolwide decision-making"
          ],
          [
            "Research \u000b(meta research)",
            "Examine the body of research on the effectiveness of inquiry-based learning in science. Describe how research in this area has evolved, identify common study designs and their limitations, and summarize conclusions from recent meta-analysis or systematic reviews regarding the overall findings and their applicability.",
            "Gaining a deep, critical understanding of the evidence base for a specific topic, identifying research trends and gaps, and evaluating the robustness of research claims"
          ]
        ]
      ],
      "notes": "",
      "images": []
    },
    {
      "slideNumber": 39,
      "sectionId": "advanced",
      "titleZh": "Guided Learning Go beyond answers and build a deep",
      "titleEn": "Guided Learning Go beyond answers and build a deep understanding",
      "summaryZh": "Guided Learning encourages participation through probing and open-ended questions that spark a discussion and provide an",
      "allTextsEn": [
        "Guided Learning Go beyond answers and build a deep understanding",
        "Guided Learning encourages participation through probing and open-ended questions that spark a discussion and provide an opportunity to dive deeper into a subject. The aim is to help you build a deep understanding instead of just getting answers.\nGuided Learning breaks down problems step-by-step and adapts explanations to your needs – all to help you build knowledge and skills."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image82.gif"
      ]
    },
    {
      "slideNumber": 40,
      "sectionId": "advanced",
      "titleZh": "How Guided Learning works",
      "titleEn": "How Guided Learning works",
      "summaryZh": "B",
      "allTextsEn": [
        "How Guided Learning works",
        "B",
        "A",
        "C",
        "D",
        "D",
        "Enter your prompt in the Gemini chat box."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image69.png",
        "assets/images/image77.png"
      ]
    },
    {
      "slideNumber": 41,
      "sectionId": "advanced",
      "titleZh": "Student use",
      "titleEn": "Student use",
      "summaryZh": "Learn deeply instead of just getting quick understanding",
      "allTextsEn": [
        "Student use",
        "Learn deeply instead of just getting quick understanding",
        "Help me with this homework problem. A 10.5 kg test rocket is fired vertically from Cape Canaveral. Its fuel gives it a kinetic energy of 1925 J by the time the rocket engine burns all of the fuel. What additional height will the rocket rise? Assume that air resistance is negligible.",
        "✨Tip\nGuided Learning is already built to help you develop a deep understanding instead of just providing an answer so it can help you explore a topic well even when prompting best practices aren’t followed.\n🔥Great for\nStudying for exams\nGetting homework help"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image94.gif"
      ]
    },
    {
      "slideNumber": 42,
      "sectionId": "advanced",
      "titleZh": "Guided Learning",
      "titleEn": "Guided Learning",
      "summaryZh": "Guided Learning",
      "allTextsEn": [
        "Guided Learning"
      ],
      "tables": [
        [
          [
            "Use case",
            "Prompt",
            "Tip"
          ],
          [
            "Homework help",
            "I’m not sure how to set up the equation for this homework problem:\n\n276 students went on a field trip. Four buses were filled and 12 students traveled in cars. How many students were in each bus?",
            "You can take a photo of your assignment and upload it to Gemini along with your prompt."
          ],
          [
            "Coding help",
            "I’m having trouble figuring out why my code isn’t working. Can you help me understand what’s wrong with it? [Insert code snippet]",
            "Gemini will walk you through debugging your code step-by-step, but if you have questions about specific parts of the code, you can ask Gemini to home in on that as well."
          ],
          [
            "Learning about a new topic before drafting a paper",
            "How do bees support our food systems?",
            "Once you’ve studied up with Guided Learning, use Deep Research in Gemini to pull together insights and perspectives from across the web."
          ],
          [
            "Exam prep",
            "I’m a freshman preparing for an exam in my Intro to Biology class. Can you help me learn about enzymes?",
            "Once you’re feeling ready to test your knowledge, ask Gemini to create a personalized quiz for you."
          ],
          [
            "Explore a curiosity",
            "I’m passionate about photography and want to learn more.",
            "Upload some of your favorite photos and ask Gemini to analyze them for you."
          ]
        ]
      ],
      "notes": "",
      "images": []
    },
    {
      "slideNumber": 43,
      "sectionId": "advanced",
      "titleZh": "Gemini Canvas Create, code, and collaborate with G",
      "titleEn": "Gemini Canvas Create, code, and collaborate with Gemini in one space",
      "summaryZh": "Gemini Canvas is an interactive workspace for turning your ideas into polished creations. Transform your prompts into an",
      "allTextsEn": [
        "Gemini Canvas Create, code, and collaborate with Gemini in one space",
        "Gemini Canvas is an interactive workspace for turning your ideas into polished creations. Transform your prompts into an editable canvas for creating lessons, coding projects, or building resources – and evolve your thinking visually in real time. Your content instantly updates and you get AI-powered suggestions to level up your work. This space is designed for rapid iteration, allowing you to easily refine and develop your concepts.\nUse Canvas to:\nDraft editable documents, lesson plans, or study guides in real time\nBuild and test working code that can be exported into Google Colab\nEdit copy tone, length, formatting, and content\nCreate interactive quizzes and flashcards\nExport to Docs, then copy, or present what you’ve built instantly"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image163.png",
        "assets/images/image98.gif"
      ]
    },
    {
      "slideNumber": 44,
      "sectionId": "advanced",
      "titleZh": "How Gemini Canvas works",
      "titleEn": "How Gemini Canvas works",
      "summaryZh": "C",
      "allTextsEn": [
        "How Gemini Canvas works",
        "C",
        "A",
        "B"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image72.png",
        "assets/images/image71.png"
      ]
    },
    {
      "slideNumber": 45,
      "sectionId": "advanced",
      "titleZh": "Instructional materials",
      "titleEn": "Instructional materials",
      "summaryZh": "Revise an old lesson for multiple learners\nPrompt",
      "allTextsEn": [
        "Instructional materials",
        "Revise an old lesson for multiple learners\nPrompt",
        "Act as an instructional designer. I’ve uploaded a legacy lesson plan on persuasive writing for 8th grade students. Help me revise it to support three learner profiles: an English learner, a student with executive functioning needs, and an advanced writer. Suggest changes to the task instructions, pacing, and support strategies for each learner.",
        "✨Tip\nAsk Gemini to generate a side-by-side chart comparing how each version supports different learners, or include Universal Design for Learning (UDL)-aligned scaffolds.\n🔥Great for\nDifferentiating without re-creating from scratch\nMaking learning materials more accessible"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image72.png"
      ]
    },
    {
      "slideNumber": 46,
      "sectionId": "advanced",
      "titleZh": "Student use",
      "titleEn": "Student use",
      "summaryZh": "Coding in Canvas\nPrompt",
      "allTextsEn": [
        "Student use",
        "Coding in Canvas\nPrompt",
        "Help me build a simple physics simulation that shows a ball falling under gravity. Use Python and show how to adjust gravity, time, and object mass. Explain what each part of the code does.",
        "✨Tip\nTry adjusting variables like mass or time and ask Gemini to visualize how it affects the simulation. Ask for step-by-step explanations or request extensions, like adding horizontal motion or air resistance.\n🔥Great for\nSTEM project-based learning\nBuilding conceptual understanding of physics \u000bthrough code\nLearning how to modify and explain real-world simulations"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image89.gif"
      ]
    },
    {
      "slideNumber": 47,
      "sectionId": "advanced",
      "titleZh": "Gemini Canvas",
      "titleEn": "Gemini Canvas",
      "summaryZh": "Gemini Canvas",
      "allTextsEn": [
        "Gemini Canvas"
      ],
      "tables": [
        [
          [
            "Use case",
            "Prompt",
            "Tip"
          ],
          [
            "Planning",
            "Act as a curriculum designer. Create a week-long unit plan on the US Constitution for 8th grade students. Focus on civic understanding and include daily objectives, learning activities, and formative checks. Format the unit using section headers for each day.",
            "Use heading styles and bullet points to organize by day. Ask Gemini to change tone if you’re prepping for students, as opposed to staff."
          ],
          [
            "Assessment",
            "Act as an assessment designer. Create a performance task for high school environmental science students focused on sustainability. Include a student-facing prompt, rubric criteria, and a peer/self-assessment checklist. Organize the content into clearly labeled sections.",
            "Ask Gemini to suggest edits or condense instructions for clarity. Use formatting tools to separate teacher and student content."
          ],
          [
            "Differentiation",
            "Act as a learning specialist. Develop a flexible algebra support plan for a 9th grade student needing extra help with linear equations. Include learning goals, scaffolded tasks, reflection prompts, and checkpoints. Format it as a weekly plan with bolded key actions.",
            "Use formatting to emphasize key actions. Ask Gemini to suggest edits or simplify language for accessibility."
          ],
          [
            "Research",
            "Act as an educational research assistant. I need to understand the latest research on the impact of project-based learning on student engagement in middle school. Please provide a concise summary of key findings from the last 3 to 5 years, outline 2 to 3 evidence-based strategies related to this topic that I can consider for my classroom/school, and list potential challenges or considerations for implementation. Organize this information with clear headings for each section.",
            "Be specific about the student age group or educational context if relevant. Ask Gemini to focus on actionable strategies or practical takeaways. You can also ask for a list of keywords to find more in-depth research articles."
          ],
          [
            "Administrative tasks",
            "Act as a professional development coordinator. Design a 60-minute professional development session for educators or faculty introducing Gemini. Include session objectives, timed agenda sections, interactive moments, and a closing reflection. Use headings for each segment.",
            "Use headings to organize each section of the session. Ask Gemini to rephrase content for different audiences (for example, coaches vs. teachers)."
          ]
        ]
      ],
      "notes": "",
      "images": []
    },
    {
      "slideNumber": 48,
      "sectionId": "gems",
      "titleZh": "Gemini:\nGems",
      "titleEn": "Gemini:\nGems",
      "summaryZh": "Gems are customized versions of Gemini that you can personalize \u000bto be experts on any topic.",
      "allTextsEn": [
        "Gemini:\nGems",
        "Gems are customized versions of Gemini that you can personalize \u000bto be experts on any topic."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image53.png"
      ]
    },
    {
      "slideNumber": 49,
      "sectionId": "gems",
      "titleZh": "Personalize Gemini with Gems\nCustom AI experts for",
      "titleEn": "Personalize Gemini with Gems\nCustom AI experts for any topic",
      "summaryZh": "A Gem is a customized version of Gemini that you can create with specific instructions to act like an expert on a certai",
      "allTextsEn": [
        "Personalize Gemini with Gems\nCustom AI experts for any topic",
        "A Gem is a customized version of Gemini that you can create with specific instructions to act like an expert on a certain topic or follow particular guidelines every time you use it.\nYou can get started with Google’s premade Gems like Learning coach, Career guide, and Brainstormer."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image163.png",
        "assets/images/image117.gif"
      ]
    },
    {
      "slideNumber": 50,
      "sectionId": "gems",
      "titleZh": "Set up your Gem",
      "titleEn": "Set up your Gem",
      "summaryZh": "With the instructions and knowledge provided up front, Gems can provide better results with less time spent prompting, w",
      "allTextsEn": [
        "Set up your Gem",
        "With the instructions and knowledge provided up front, Gems can provide better results with less time spent prompting, while also allowing your interactions to be more conversational.",
        "Think of creating a Gem as doing a detailed PARTS-level setup once. You define its expert persona, its purpose, the rules it follows, and any crucial context upfront.\nThis “best practice” foundation is then saved within your Gem."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image76.png"
      ]
    },
    {
      "slideNumber": 51,
      "sectionId": "gems",
      "titleZh": "Provide detailed instructions to make your Gem wor",
      "titleEn": "Provide detailed instructions to make your Gem work for you.",
      "summaryZh": "Leverage premade Gems or create your own",
      "allTextsEn": [
        "Provide detailed instructions to make your Gem work for you.",
        "Leverage premade Gems or create your own",
        "D",
        "E",
        "F",
        "Give your new, personalized Gem a name.",
        "Optional: Upload files to give more context and get more helpful responses.",
        "C",
        "A",
        "B",
        "D",
        "E",
        "F"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image198.png",
        "assets/images/image76.png"
      ]
    },
    {
      "slideNumber": 52,
      "sectionId": "gems",
      "titleZh": "Premade Gem",
      "titleEn": "Premade Gem",
      "summaryZh": "Deepen understanding \u000bwith Learning coach",
      "allTextsEn": [
        "Premade Gem",
        "Deepen understanding \u000bwith Learning coach",
        "✨Tip\nMention what you’ve already learned or where you’re stuck \u000bso the Learning coach can tailor its explanation even better.\n🔥Great for\nGrasping fundamental principles in math and science, building conceptual understanding beyond rote memorization, and practicing targeted problems.",
        "Prompt",
        "I’m trying to really get my head around the concept of a derivative in calculus. Can you break it down for me in a clear way, maybe using a real-world analogy, and then create a few practice problems that test my understanding of the core idea, not just memorizing formulas?"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image100.gif"
      ]
    },
    {
      "slideNumber": 53,
      "sectionId": "gems",
      "titleZh": "Premade Gem",
      "titleEn": "Premade Gem",
      "summaryZh": "Prepare for a job interview with confidence",
      "allTextsEn": [
        "Premade Gem",
        "Prepare for a job interview with confidence",
        "✨Tip\nAsk Gemini to adjust the sample responses for different industries (like tech, education, or business), or make it more conversational or formal based on the job type.\n🔥Great for\nBuilding interview confidence, practicing soft skills, and preparing for real opportunities.",
        "Prompt",
        "Help me prepare for a behavioral interview in the healthcare field. Include 5 common interview questions, sample answers I can customize, and a checklist of things I can do to build confidence. Add 2 reflection prompts I can use to evaluate how I did after mock interviews."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image107.gif"
      ]
    },
    {
      "slideNumber": 54,
      "sectionId": "gems",
      "titleZh": "Planning",
      "titleEn": "Planning",
      "summaryZh": "Instructions",
      "allTextsEn": [
        "Planning",
        "Instructions",
        "You are an instructional coach supporting standards-based lesson planning. Create lesson templates that align with grade-level standards and include clear learning objectives, aligned instructional activities, and formative assessments. Format the output using sections like objective, essential questions, materials, procedure, and knowledge checks. Use educator-friendly language and adjust based on subject area or grade level as needed.",
        "Name",
        "Standards-based lesson planner",
        "State or district standards\nExamples of previously approved or aligned lesson plans\nInstructional frameworks used at the school (such as gradual release, Universal Design for Learning (UDL), or the 5E model)\nCoaching notes on lesson plan feedback",
        "Add files for your Gem to reference"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image81.png"
      ]
    },
    {
      "slideNumber": 55,
      "sectionId": "gems",
      "titleZh": "Instructional materials",
      "titleEn": "Instructional materials",
      "summaryZh": "Instructions",
      "allTextsEn": [
        "Instructional materials",
        "Instructions",
        "Create a Translator Gem to help me translate classroom materials, homework assignments, and family communications into Spanish. Use clear, professional language appropriate for families and school-aged students. Maintain the original tone and format, and ensure translations are culturally respectful and easy to understand.",
        "Name",
        "Instructional material translator",
        "Grading or feedback language samples\nSchool/department communication templates\nSyllabus or course overview\nAssignment instructions or templates",
        "Add files for your Gem to reference"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image83.png"
      ]
    },
    {
      "slideNumber": 56,
      "sectionId": "gems",
      "titleZh": "Instructional materials",
      "titleEn": "Instructional materials",
      "summaryZh": "Instructions",
      "allTextsEn": [
        "Instructional materials",
        "Instructions",
        "Create a Gem that helps me turn classroom lessons into short, engaging group games for 5 students. The games should take about 10 minutes and align with the content I share. Prioritize formats like trivia, team challenges, or creative scenario play. Keep language student-friendly, and adjust tone for grade level when possible.",
        "Name",
        "Lesson gamifier",
        "Topics students are currently exploring/learning\nClass discussion questions or exit tickets\nGame formats you’ve used or liked before",
        "Add files for your Gem to reference"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image85.png"
      ]
    },
    {
      "slideNumber": 57,
      "sectionId": "gems",
      "titleZh": "Assessment",
      "titleEn": "Assessment",
      "summaryZh": "Instructions",
      "allTextsEn": [
        "Assessment",
        "Instructions",
        "You are a university teaching assistant focused on academic rigor. Create assignment prompts and rubrics that align with specific course learning outcomes (CLOs). Responses should maintain a professional, scholarly tone appropriate for undergraduate or graduate students.",
        "Name",
        "Assignment rubric builder",
        "Course syllabus and CLOs document\nExample of previously approved rubric\nInstitutional grading policy or assessment guidelines\nExamples of assignments common to the course \u000b(optional for deeper alignment)",
        "Add files for your Gem to reference"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image86.png"
      ]
    },
    {
      "slideNumber": 58,
      "sectionId": "gems",
      "titleZh": "Administrative tasks",
      "titleEn": "Administrative tasks",
      "summaryZh": "Instructions",
      "allTextsEn": [
        "Administrative tasks",
        "Instructions",
        "You are a technology coordinator developing AI onboarding and training materials. Write concise checklists, an FAQ, and Professional Development (PD) agendas. Language should be educator-friendly (avoiding heavy tech jargon) but precise and compliant with privacy and security standards.",
        "Name",
        "AI rollout assistant",
        "This toolkit!\nDistrict or institution AI policy\nExample PD agendas or onboarding slide decks\nCommunication templates used in past tech rollouts",
        "Add files for your Gem to reference"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image87.png"
      ]
    },
    {
      "slideNumber": 59,
      "sectionId": "gems",
      "titleZh": "Instructions",
      "titleEn": "Instructions",
      "summaryZh": "You’re my chemistry tutor. Help me understand key topics from class by breaking them down into simple explanations with ",
      "allTextsEn": [
        "Instructions",
        "You’re my chemistry tutor. Help me understand key topics from class by breaking them down into simple explanations with examples. Then give me 3 to 5 open-ended practice questions and a quick summary to help me review. Keep it friendly and easy to follow.",
        "Name",
        "Chemistry tutor",
        "Class syllabus or unit overview with objectives\nVocabulary list or glossary from class\nStudy guide, review packet, or lab instructions\nNotes from class or homework summaries\nPrevious quiz or test",
        "Add files for your Gem to reference",
        "Student use"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image88.png"
      ]
    },
    {
      "slideNumber": 60,
      "sectionId": "gems",
      "titleZh": "Communication",
      "titleEn": "Communication",
      "summaryZh": "Instructions",
      "allTextsEn": [
        "Communication",
        "Instructions",
        "You are a communications assistant supporting a school. Write newsletters, updates, and announcements that are aligned with institutional goals and upcoming events. Tone should be professional, warm, and easily understood by families and community members. Include headings, brief summaries, and clear calls to action when appropriate.",
        "Name",
        "Communication assistant",
        "Mission and vision statement\nCalendar of key events and deadlines\nSample past newsletters or family communications\nCommunity engagement goals or strategic plan excerpts",
        "Add files for your Gem to reference"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image92.png"
      ]
    },
    {
      "slideNumber": 61,
      "sectionId": "notebooklm",
      "titleZh": "Understand anything with Gemini Notebook, your per",
      "titleEn": "Understand anything with Gemini Notebook, your personalized AI expert on the inf",
      "summaryZh": "Gemini Notebook",
      "allTextsEn": [
        "Understand anything with Gemini Notebook, your personalized AI expert on the information that matters most to you.",
        "Gemini Notebook"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image53.png"
      ]
    },
    {
      "slideNumber": 62,
      "sectionId": "notebooklm",
      "titleZh": "Grounding \u000bour use case examples\nUsing a hypotheti",
      "titleEn": "Grounding \u000bour use case examples\nUsing a hypothetical 8-week unit on foundationa",
      "summaryZh": "While we use a physics unit to demonstrate an instructional workflow, Gemini Notebook is subject-agnostic. Simply swap i",
      "allTextsEn": [
        "Grounding \u000bour use case examples\nUsing a hypothetical 8-week unit on foundational physics concepts",
        "While we use a physics unit to demonstrate an instructional workflow, Gemini Notebook is subject-agnostic. Simply swap in your own materials to get started.\nStudents can also upload their own class notes for these weeks into their copies of this notebook.\nAll of the following examples assume the sources are already loaded."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image104.png"
      ]
    },
    {
      "slideNumber": 63,
      "sectionId": "notebooklm",
      "titleZh": "Planning",
      "titleEn": "Planning",
      "summaryZh": "Sequence the unit lessons\nPrompt",
      "allTextsEn": [
        "Planning",
        "Sequence the unit lessons\nPrompt",
        "What concepts introduced in Week 7 (Light & Optics) should be reviewed or reinforced to help students better understand electromagnetic forces in Week 8 (Electricity & Magnetism)?",
        "✨Tip\nFollow up with: “Create a short review activity I can use before starting Week 8.”\n🔥Great for\nScaffolding conceptual transitions between topics and preparing students for deeper understanding before starting \u000ba new unit section."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image93.png"
      ]
    },
    {
      "slideNumber": 64,
      "sectionId": "notebooklm",
      "titleZh": "Instructional materials",
      "titleEn": "Instructional materials",
      "summaryZh": "Lab guide creation\nPrompt",
      "allTextsEn": [
        "Instructional materials",
        "Lab guide creation\nPrompt",
        "Create a student lab guide based on Week 7’s lesson on light refraction. Include a clear objective, a list of materials, step-by-step instructions for observing refraction through different media, space for student observations, and 2 to 3 reflection questions. Keep the tone student-friendly for high school learners.",
        "✨Tip\nAfter generating the lab guide, click “Save to note” to store it in the Notes panel – perfect for easy access, reusing, or exporting to Docs for edits or lab partner collaboration.\n🔥Great for\nQuickly creating structured, student-ready lab guides directly from your unit materials without starting from scratch."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image95.png"
      ]
    },
    {
      "slideNumber": 65,
      "sectionId": "notebooklm",
      "titleZh": "Assessment",
      "titleEn": "Assessment",
      "summaryZh": "Building knowledge checks\nPrompt",
      "allTextsEn": [
        "Assessment",
        "Building knowledge checks\nPrompt",
        "Using Week 7, Lesson 3 on light refraction, create 2 open-ended questions that assess students’ understanding of how light bends when moving between materials with different refractive indices. Make the questions appropriate for high school students and design them to spark critical thinking.",
        "✨Tip\nOnce generated, click “Save to note” to store the questions for future quizzes or discussion prompts.\n🔥Great for\nChecking for understanding and aligning assessment items directly with specific lesson content."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image96.png"
      ]
    },
    {
      "slideNumber": 66,
      "sectionId": "notebooklm",
      "titleZh": "Differentiation",
      "titleEn": "Differentiation",
      "summaryZh": "Ideas for diverse learners\nPrompt",
      "allTextsEn": [
        "Differentiation",
        "Ideas for diverse learners\nPrompt",
        "Using Week 7, Lesson 3 on light refraction, create a differentiated choice board with 3 activity options tailored for emerging, on-level, and advanced learners. Provide vocabulary supports for all versions.",
        "✨Tip\nUse the draft to ask Gemini Notebook to tailor 1 activity per tier for varied learning needs (for example, multilingual learners, focus support, or advanced extensions).\n🔥Great for\nCreating accessible, leveled activities that support diverse learners while staying aligned with core lesson goals."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image101.png"
      ]
    },
    {
      "slideNumber": 67,
      "sectionId": "notebooklm",
      "titleZh": "Visualize connections across sources by generating",
      "titleEn": "Visualize connections across sources by generating a Mind Map",
      "summaryZh": "Pro tip",
      "allTextsEn": [
        "Visualize connections across sources by generating a Mind Map",
        "Pro tip",
        "What it does: Creates a visual overview connecting key concepts, themes, and entities found across all the sources you’ve uploaded to your notebook. Click any concept to explore how it’s discussed across your uploaded materials.",
        "Why it matters in learning:\nHelps surface conceptual relationships across texts and weeks such as supports sequencing or transfer with connecting related ideas\nAids knowledge organization and recall such as dual coding or retrieval practices\nSupports student review and educator planning for reteaching or pre-teaching moments",
        "Look for the ‘Mind Map’ option in the Chat or Studio panels"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image137.gif"
      ]
    },
    {
      "slideNumber": 68,
      "sectionId": "notebooklm",
      "titleZh": "Administrative tasks",
      "titleEn": "Administrative tasks",
      "summaryZh": "Prep for your next professional learning community (PLC) event\nPrompt",
      "allTextsEn": [
        "Administrative tasks",
        "Prep for your next professional learning community (PLC) event\nPrompt",
        "Based on the full 8-week physics unit plan and pacing guide, create a summary I can share at our next science PLC event. Include key content \u000bgoals for the next 2 weeks, any pacing considerations, and suggested focus points\nfor classroom observations or collaborative planning.",
        "✨Tip\nSelect all relevant curriculum sources, then click “Briefing doc” in the Notes panel to generate a comprehensive summary of key themes and instructional priorities. Save or refine it to share with your team.\n🔥Great for\nGenerating high-level planning overviews, talking points, or \u000bcurriculum summaries for team meetings, presentation prep, or department updates."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image141.gif"
      ]
    },
    {
      "slideNumber": 69,
      "sectionId": "notebooklm",
      "titleZh": "Student use",
      "titleEn": "Student use",
      "summaryZh": "Clarifying complex topics\nPrompt",
      "allTextsEn": [
        "Student use",
        "Clarifying complex topics\nPrompt",
        "I’m struggling to understand what kinematics is. Help me understand in the most basic way.",
        "✨Tip\nAfter reviewing the explanation, click “Save to note” to keep this information handy, then select your kinematics sources and click “Study guide” in the Notes panel to generate a full review with a quiz, essay questions, and a glossary of key terms.\n🔥Great for\nBreaking down tough topics, reviewing foundational concepts, and creating personalized study materials."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image102.png",
        "assets/images/image99.png"
      ]
    },
    {
      "slideNumber": 70,
      "sectionId": "notebooklm",
      "titleZh": "Generate a podcast style audio overview to use in ",
      "titleEn": "Generate a podcast style audio overview to use in flipped classroom activities.",
      "summaryZh": "Pro tip",
      "allTextsEn": [
        "Generate a podcast style audio overview to use in flipped classroom activities.",
        "Pro tip",
        "Quickly generate a study guide",
        "Gemini Notebook helps you organize your notes, class materials, or uploaded resources into a structured study guide, instantly. Everything you need to review is grouped in one place.\nClick “Study guide” in the Notes panel to generate a study guide that includes:\nQuiz questions with answer keys\nPractice essay prompts\nA glossary of key terms\nUse it at your own pace to review before a quiz, prep for a big test, or reflect on what you’ve learned."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image146.gif"
      ]
    },
    {
      "slideNumber": 71,
      "sectionId": "notebooklm",
      "titleZh": "Generate a podcast style audio overview to use in ",
      "titleEn": "Generate a podcast style audio overview to use in flipped classroom activities.",
      "summaryZh": "Pro tip",
      "allTextsEn": [
        "Generate a podcast style audio overview to use in flipped classroom activities.",
        "Pro tip",
        "Listen and learn on the go with Audio Overviews",
        "Audio Overviews turn your sources into a podcast-style summary, voiced by two AI hosts. It’s a fast, engaging way to absorb your materials, and it’s perfect for multitasking or auditory learning.\nWith just one click, Gemini Notebook summarizes your notes, lesson plans, documents, research, articles, website links, or videos into a conversational audio file. And with the Customize feature, you can guide the hosts to focus on what’s most important to you.",
        "Click on the button for an example."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image106.png",
        "assets/images/image97.png"
      ]
    },
    {
      "slideNumber": 72,
      "sectionId": "notebooklm",
      "titleZh": "How to generate an Audio Overview in Gemini Notebo",
      "titleEn": "How to generate an Audio Overview in Gemini Notebook",
      "summaryZh": "Select your sources\nChoose one or more files in your notebook, such as lesson plans, student notes, research articles.",
      "allTextsEn": [
        "How to generate an Audio Overview in Gemini Notebook",
        "Select your sources\nChoose one or more files in your notebook, such as lesson plans, student notes, research articles.",
        "A",
        "Locate the ‘Audio Overview’\nYou’ll find this option in the Studio panel. When you click the “Generate” button, Gemini will generate a podcast-style summary with two AI hosts.",
        "B",
        "Use ‘Customize’ to guide the focus\nWant the audio to highlight specific topics or to address a student audience? Use the “Customize” option to steer tone, audience, or content area.",
        "C",
        "Listen, download, or share\nPlay the audio in Gemini Notebook, download it for later, or share it with students or colleagues.",
        "D",
        "Optional: Interact with an Audio Overview:\nTo interact with an Audio Overview, tap “Interactive mode” located below the generated Audio Overview. While listening, tap “Join” to ask your question. Gemini’s hosts will pause, respond based on your sources, and then return to the original overview.",
        "E"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image105.png",
        "assets/images/image112.png",
        "assets/images/image108.gif",
        "assets/images/image102.png"
      ]
    },
    {
      "slideNumber": 73,
      "sectionId": "notebooklm",
      "titleZh": "Audio Overviews",
      "titleEn": "Audio Overviews",
      "summaryZh": "Audio Overviews",
      "allTextsEn": [
        "Audio Overviews"
      ],
      "tables": [
        [
          [
            "Use case",
            "Using the ‘Customize’ prompt option in the ‘Studio’ panel",
            "Tip",
            "Great for"
          ],
          [
            "Planning",
            "Using the “Customize” option in the “Studio” panel, enter a prompt such as: “Generate an audio overview of the full 8-week physics unit plan and pacing guide. Summarize key learning goals for each week, and flag any pacing bottlenecks or concept-heavy transitions.”",
            "Customize for audience and intent (for example, “Make this useful for collaboration with other teachers” or “Highlight areas we might want to discuss as a team”)",
            "Listening on the go, prepping for curriculum meetings, or refreshing your memory before planning sessions"
          ],
          [
            "Instructional materials",
            "Using the “Customize” option in the “Studio” panel, enter a prompt such as as: Create an audio overview of Week 3 on Work and Energy. Keep it student-friendly and include real-world examples.",
            "Customize for tone and accessibility (for example, “Make this engaging for students” or “Use simple language with real-life examples”",
            "Flipped classroom, substitute-day activities, or homework support"
          ],
          [
            "Assessment",
            "Using the “Customize” option in the “Studio” panel, enter a prompt such as: Speaking to me as the teacher, create an audio overview with two ideas for a performance-based assessment for students for the unit. Include a description of each idea and what skills should be assessed.",
            "Customize for audience and utility (for example, “Make it useful for a department meeting”)",
            "Generating ideas for performance tasks, rubric alignment, or instructional planning reflection"
          ],
          [
            "Differentiation",
            "Using the “Customize” option in the “Studio” panel, enter a prompt such as: Create an audio overview of vocabulary and key takeaways from Week 5 (thermal physics). Make it friendly for students who need extra time with content, and include definitions of key terms.",
            "Customize for clarity and scaffolding (for example, “Break down key concepts step-by-step, define terms explicitly, and use simple, accessible language”)",
            "Auditory learners, reinforcing key vocabulary and concepts, and providing flexible review for students who need extra processing time"
          ],
          [
            "Research",
            "Using the “Customize” option in the “Studio” panel, enter a prompt such as: Generate a brief audio overview for the selected research paper “The Physics of Flight: Deconstructing the Basketball Shot.” Focus on its key findings and the core physics principles discussed for a successful shot. Keep it concise and engaging.",
            "Customize for comparative insights (for example, “Highlight differences in how each article explains wave behavior”)",
            "Synthesizing across sources, quick research review and preparing for academic discussions"
          ],
          [
            "Student use",
            "Using the “Customize” option in the “Studio” panel, enter a prompt such as: Speaking to me, the student, turn my notes from weeks 7 and 8 into an audio guide for review before our quiz. Be direct and to the point. Keep the audio overview concise.",
            "Customize for study focus (for example, “Focus on key terms and equations”)",
            "Self-paced study, exam prep, auditory processing support, or commuting to campus"
          ],
          [
            "Administrative tasks",
            "Using the “Customize” option in the “Studio” panel, enter a prompt such as: Summarize our curriculum pacing guide and last Professional Learning Community (PLC) notes into an audio overview I can send out as a follow-up or review on the go.",
            "Customize for tone (for example, “Make it concise and action-oriented”)",
            "Staying current while commuting or prepping for professional learning communities"
          ]
        ]
      ],
      "notes": "",
      "images": []
    },
    {
      "slideNumber": 74,
      "sectionId": "notebooklm",
      "titleZh": "Generate a podcast style audio overview to use in ",
      "titleEn": "Generate a podcast style audio overview to use in flipped classroom activities.",
      "summaryZh": "Pro tip",
      "allTextsEn": [
        "Generate a podcast style audio overview to use in flipped classroom activities.",
        "Pro tip",
        "Turn your sources into engaging visual explainers with Video Overviews",
        "Video Overviews transform your sources into a short, illustrated video summary with AI-powered hosts. It’s a dynamic way to visualize your content, and it’s ideal for visual learners or for quickly getting the gist of a long document.\nWith a single click, Gemini Notebook can now create a video from your lesson plans, research, articles, or other sources."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image109.jpg"
      ]
    },
    {
      "slideNumber": 75,
      "sectionId": "notebooklm",
      "titleZh": "How to generate a Video Overview in Gemini Noteboo",
      "titleEn": "How to generate a Video Overview in Gemini Notebook",
      "summaryZh": "Select your sources\nChoose one or more files in your notebook, such as lesson plans, student notes, research articles.",
      "allTextsEn": [
        "How to generate a Video Overview in Gemini Notebook",
        "Select your sources\nChoose one or more files in your notebook, such as lesson plans, student notes, research articles.",
        "A",
        "Locate ‘Video Overview’\nYou’ll find this option in the Studio panel. When you click the “Video Overview” button, Gemini will generate a summary-style video with an AI host.",
        "B",
        "Use ‘Customize’ to guide the focus\nWant the video to highlight specific topics or address a student audience? Use the “Customize” option in the top-right corner to steer tone, audience, or content area.",
        "C",
        "Listen, download, or share\nPlay the video in Gemini Notebook, download it for later, or share it with students or colleagues.",
        "D"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image102.png",
        "assets/images/image116.png",
        "assets/images/image130.png",
        "assets/images/image114.png"
      ]
    },
    {
      "slideNumber": 76,
      "sectionId": "notebooklm",
      "titleZh": "Video Overviews",
      "titleEn": "Video Overviews",
      "summaryZh": "Video Overviews",
      "allTextsEn": [
        "Video Overviews"
      ],
      "tables": [
        [
          [
            "Use case",
            "Using the ‘Customize’ prompt option in the ‘Studio’ panel",
            "Tip",
            "Great for"
          ],
          [
            "Planning",
            "Using the “Customize” option in the “Studio” panel, enter a prompt such as: “Generate an engaging Video Overview of our full 8-week physics unit on Newton’s laws. Include key concepts, demonstrations, and flags for common student misconceptions.”",
            "Customize for visuals and student engagement (for example, “Suggest a hands-on experiment for each law” or “Use a friendly tone to introduce the topic”)",
            "Previewing curriculum, refreshing your memory on a topic before teaching, or for sharing with other teachers"
          ],
          [
            "Instructional materials",
            "Using the “Customize” option in the “Studio” panel, enter a prompt such as: “Create a short Video Overview of the law of conservation of momentum for my 11th grade physics class. Make it student-friendly and include a simple animation of a two-car collision.”",
            "Customize for clarity and visual aids (for example, “Use simple language and animated diagrams to explain the principle”)",
            "Flipped classrooms, substitute-day activities, or as a quick homework resource"
          ],
          [
            "Assessment",
            "Using the “Customize” option in the “Studio” panel, enter a prompt such as: “As a physics teacher, create a video for a project rubric on designing a roller coaster. Include a breakdown of what makes a good use of potential and kinetic energy in the design.”",
            "Customize for audience and utility (for example, “Explain the scoring criteria clearly and highlight common pitfalls in designs”)",
            "Generating ideas for performance tasks, reinforcing rubric alignment, or for personal instructional planning and reflection"
          ],
          [
            "Differentiation",
            "Using the “Customize” option in the “Studio” panel, enter a prompt such as: “Create a simple Video Overview of the key concepts from our electricity unit for my students who need extra support. Keep it concise and visually engaging.”",
            "Customize for tone and accessibility (for example, “Break down complex terms with simple analogies, like a water hose for current”)",
            "Reinforcing key vocabulary, providing flexible content for students who need extra processing time, or for parent communication"
          ],
          [
            "Research",
            "Using the “Customize” option in the “Studio” panel, enter a prompt such as: “Generate a brief video summary of this research paper on gravitational waves. Focus on its key findings and the core principles discussed, and use simple charts and graphs.”",
            "Customize for comparative insights (for example, “Highlight the differences in data between the last two detections”)",
            "Synthesizing across sources, quick research review, or preparing for academic discussions"
          ],
          [
            "Student use",
            "Using the “Customize” option in the “Studio” panel, enter a prompt such as: “Summarize my notes on classical mechanics into a quick video for my final exam. Be direct and to the point, and provide an overview of key formulas and problem-solving steps.”",
            "Customize for study focus (for example, “Highlight key formulas and figures in a timeline”)",
            "Self-paced study, exam prep, or auditory processing support"
          ],
          [
            "Administrative tasks",
            "Using the “Customize” option in the “Studio” panel, enter a prompt such as: “Summarize our weekly team meeting notes and upcoming events into a short, informative video overview I can send out to staff.”",
            "Customize for tone (for example, “Make it concise and action-oriented” or “Use a professional, upbeat tone”)",
            "Staying current while commuting, preparing for professional learning communities, or for quick parent updates"
          ]
        ]
      ],
      "notes": "",
      "images": []
    },
    {
      "slideNumber": 77,
      "sectionId": "notebooklm",
      "titleZh": "Getting the most \u000bout of Gemini Notebook",
      "titleEn": "Getting the most \u000bout of Gemini Notebook",
      "summaryZh": "Pro tip",
      "allTextsEn": [
        "Getting the most \u000bout of Gemini Notebook",
        "Pro tip",
        "Upload quality sources\nYour research files, outlines, notes, links to quality websites, key readings, and similar documents.",
        "Be specific\nAsk clear, targeted questions.",
        "Explore generated content\nUse the buttons \u000bfor study guides, timelines, Mind Maps, Audio Overviews, and FAQs.",
        "Check citations\nView\u000bwhich sources Gemini Notebook used for its answer.",
        "Click ‘Save to note’\nSave key insights, draft outlines, and add your own thoughts.",
        "Iterate\nRephrase questions if you don’t get the answer you need the first time around."
      ],
      "tables": [],
      "notes": "",
      "images": []
    },
    {
      "slideNumber": 78,
      "sectionId": "classroom",
      "titleZh": "Classroom 課堂專區：Gemini in Classroom",
      "titleEn": "Gemini in Classroom",
      "summaryZh": "深入探討 Google Classroom 內建的鷹架工具 (Scaffolded Tools)、起始提示詞、輸入指引與將構想化為初稿的完整工作流程。",
      "allTextsEn": [
        "Gemini in Classroom",
        "Your collaborative partner in Google Classroom."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image53.png"
      ]
    },
    {
      "slideNumber": 79,
      "sectionId": "classroom",
      "titleZh": "Classroom 課堂專區：Amplify learning impact with Gemini in C",
      "titleEn": "Amplify learning impact with Gemini in Classroom, a suite of AI tools for teachi",
      "summaryZh": "深入探討 Google Classroom 內建的鷹架工具 (Scaffolded Tools)、起始提示詞、輸入指引與將構想化為初稿的完整工作流程。",
      "allTextsEn": [
        "Amplify learning impact with Gemini in Classroom, a suite of AI tools for teaching and learning",
        "AI tools built for educators\nPlan lessons, personalize learning, and tackle everyday tasks faster with help from Gemini, your AI assistant for education, from a central destination in Google Classroom.",
        "Teacher-led AI learning experiences        for students\nEnable interactive learning tools using Gemini Notebook and Gems, grounded in class materials."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image113.jpg",
        "assets/images/image111.png"
      ]
    },
    {
      "slideNumber": 80,
      "sectionId": "classroom",
      "titleZh": "Classroom 課堂專區：Anatomy of Gemini in Classroom",
      "titleEn": "Anatomy of Gemini in Classroom",
      "summaryZh": "深入探討 Google Classroom 內建的鷹架工具 (Scaffolded Tools)、起始提示詞、輸入指引與將構想化為初稿的完整工作流程。",
      "allTextsEn": [
        "Anatomy of Gemini in Classroom",
        "Scaffolded tools\nTask-specific help.",
        "👀 Look for the colorful icons.\nThese are guided AI tools for common teaching tasks. They help you quickly get started on generating content and resources, such as lesson plans, vocabulary lists, lesson hooks, activities, and more.",
        "Starter prompts for Gemini for Education\nQuick access to broader AI.",
        "These tools help educators collaborate \u000bwith Gemini for Education on common tasks. When you select a starter prompt, \u000ba prewritten prompt is loaded into the Gemini app to help you get started.",
        "Google AI tools\nCreate custom resources and guide AI experiences.",
        "Gems: Build custom AI assistants grounded in your class materials and the web. Use them for yourself to brainstorm and create content, or attach them to assignments as guided learning tools for students.",
        "Gemini Notebook: Build a binder of resources from your class materials, grounded only in your content. Use it for yourself for lesson prep, or attach it to an assignment as a focused, interactive study guide for students.",
        "Filter by category"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image113.jpg"
      ]
    },
    {
      "slideNumber": 81,
      "sectionId": "classroom",
      "titleZh": "Classroom 課堂專區：What they are: Guided AI templates that ",
      "titleEn": "What they are: Guided AI templates that generate first drafts for specific teach",
      "summaryZh": "深入探討 Google Classroom 內建的鷹架工具 (Scaffolded Tools)、起始提示詞、輸入指引與將構想化為初稿的完整工作流程。",
      "allTextsEn": [
        "What they are: Guided AI templates that generate first drafts for specific teaching resources.\nWhy use them: Save hours of prep time by generating first drafts of tailored content, resources, or activities based on your input, such as grade level, learning objectives, uploaded instructional resources, and class context.\nThink: Intelligent templates that adapt to your specific needs.\nExample: Create first drafts of custom lesson plans, choice boards, vocabulary lists, lesson hooks, re-leveled text for diverse readers, and more.",
        "What they are: Prewritten prompts that give you a starting point for collaborating with Gemini for Education on a teaching task.\nWhy use them: To brainstorm, draft, and iterate ideas with an AI partner. Ideal for when you want to explore a topic, get inspiration, and refine content through conversation.\nThink: Your collaboration partner for brainstorming and drafting.\nExample: Brainstorm real-world examples to use in lessons, generate differentiation strategies, drafted emails, and more.",
        "What they are: Tools that allow teachers to create their own custom AI assistants, for deeper collaboration, research, and custom tools grounded in your content.\nWhy use them: To accelerate lesson planning, summarize dense research, differentiate materials, and get new ideas for instruction.\nThink: Your personal research assistant or creative partner for curriculum design.\nExample: Brainstorm a project with Gemini for Education, create an interactive study guide from your resources in Gemini Notebook, or build a custom Gem that acts as a Universal Design for Learning (UDL) partner to make lessons more accessible for all.",
        "Provide instructional details to tailor content and resources",
        "Collaborate with Gemini for Education",
        "Go deeper and build custom experiences with Google AI tools",
        "A spectrum of AI support in Classroom",
        "More structured input guidance",
        "Less structured input guidance",
        "Scaffolded tools",
        "Starter prompts for \u000bGemini for Education",
        "Google AI tools"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image115.png",
        "assets/images/image118.png"
      ]
    },
    {
      "slideNumber": 82,
      "sectionId": "classroom",
      "titleZh": "Classroom 課堂專區：Scaffolded tools",
      "titleEn": "Scaffolded tools",
      "summaryZh": "深入探討 Google Classroom 內建的鷹架工具 (Scaffolded Tools)、起始提示詞、輸入指引與將構想化為初稿的完整工作流程。",
      "allTextsEn": [
        "Scaffolded tools",
        "Use scaffolded tools to get a strong first draft, faster",
        "Look for the colorful icons that indicate the scaffolded tools\nProvide key details like grade level, topic, and learning objectives into the tools’ guided prompts\nInstantly generate a first draft of a lesson plan, quiz, or differentiated text that you can immediately edit and refine"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image113.jpg"
      ]
    },
    {
      "slideNumber": 83,
      "sectionId": "classroom",
      "titleZh": "Classroom 課堂專區：Select a target grade and template: You ",
      "titleEn": "Select a target grade and template: You begin by entering the grade level and se",
      "summaryZh": "深入探討 Google Classroom 內建的鷹架工具 (Scaffolded Tools)、起始提示詞、輸入指引與將構想化為初稿的完整工作流程。",
      "allTextsEn": [
        "Select a target grade and template: You begin by entering the grade level and selecting a template from options like “General” or the 5E instructional model. (Note that 5E stands for the five phases in the model: engage, explore, explain, elaborate, and evaluate.)\nDescribe the topic and standard: You are prompted to describe the topic you want to teach and the knowledge or skill you want students to demonstrate, such as Newton’s third law of motion.\n✨Tip: We encourage you to copy and paste your standards and learning objectives directly into the prompt box for a more aligned output.\nAdd additional context: You have the option to upload relevant instructional materials to inform the lesson plan draft (for example, a unit plan, lesson outline, or rubric) from your Google Drive. This additional, high-quality content helps Gemini inform the output in your specific materials and context.",
        "Scaffolded tools",
        "Outline a lesson plan\nExample use case"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image124.png"
      ]
    },
    {
      "slideNumber": 84,
      "sectionId": "classroom",
      "titleZh": "Classroom 課堂專區：The content generated by Gemini is a str",
      "titleEn": "The content generated by Gemini is a strong first draft, not a final product. Yo",
      "summaryZh": "深入探討 Google Classroom 內建的鷹架工具 (Scaffolded Tools)、起始提示詞、輸入指引與將構想化為初稿的完整工作流程。",
      "allTextsEn": [
        "The content generated by Gemini is a strong first draft, not a final product. You have flexible options for how to edit and personalize it:\nIterate directly in Classroom\nWith some scaffolded tools, like “Outline a lesson plan,” you can continue collaborating with Gemini to refine the draft right in Classroom. You can ask it to add a new section, adjust the tone, or brainstorm different activities. Go back and forth until you’re happy with the result.\nExport to Google Docs\nOnce you have a solid foundation, you can move the content to a Google Docs file for final formatting, adding your personal touch, or sharing with colleagues.\nWhy it matters: This process keeps you in the driver’s seat. It allows you to use AI for the initial creation while ensuring you apply your professional expertise to make the final lesson accurate, engaging, and perfectly suited to the needs of your class.",
        "Scaffolded tools",
        "Outline a lesson plan",
        "How it works"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image192.gif"
      ]
    },
    {
      "slideNumber": 85,
      "sectionId": "classroom",
      "titleZh": "Classroom 課堂專區：Starter prompts for Gemini for Education",
      "titleEn": "Starter prompts for Gemini for Education",
      "summaryZh": "深入探討 Google Classroom 內建的鷹架工具 (Scaffolded Tools)、起始提示詞、輸入指引與將構想化為初稿的完整工作流程。",
      "allTextsEn": [
        "Starter prompts for Gemini for Education",
        "Use starter prompts to brainstorm and draft",
        "Look for the Gemini icon that indicates the scaffolded tools\nSelect a prewritten prompt to \u000bget a running start on tasks like brainstorming examples or drafting discussion prompts\nContinue the conversation in \u000bGemini for Education, iterating back and forth to refine your ideas and content\nYour conversations are secure and private; as a Google Workspace for Education user, your data is not reviewed or used to train AI models"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image113.jpg"
      ]
    },
    {
      "slideNumber": 86,
      "sectionId": "classroom",
      "titleZh": "Classroom 課堂專區：Your role with starter prompts for Gemin",
      "titleEn": "Your role with starter prompts for Gemini for Education",
      "summaryZh": "深入探討 Google Classroom 內建的鷹架工具 (Scaffolded Tools)、起始提示詞、輸入指引與將構想化為初稿的完整工作流程。",
      "allTextsEn": [
        "Your role with starter prompts for Gemini for Education",
        "Just add your classroom context\nStarter prompts handle the setup for you. They begin the conversation by telling Gemini the main goal, such as “brainstorm real-world examples.”\nYour role is to provide key classroom details. Gemini will then ask you simple guiding questions to learn more about:\nYour students: Their grade level, interests, and unique needs\nYour topic: The specific lesson or concept you’re working on\nYour goal: How you plan to use the output – for example, as a discussion starter or a handout for a substitute\nThink: It’s like a helpful interview. Gemini knows what questions to ask – you just provide the answers about your class. You can also proactively give Gemini a robust description of your grade, subject area, class makeup, and goals to speed up the process.",
        "The prompt sets the stage",
        "You provide the details"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image119.png",
        "assets/images/image60.png"
      ]
    },
    {
      "slideNumber": 87,
      "sectionId": "classroom",
      "titleZh": "Classroom 課堂專區：You select the starter prompt. Click the",
      "titleEn": "You select the starter prompt. Click the starter prompt card labeled “Brainstorm",
      "summaryZh": "深入探討 Google Classroom 內建的鷹架工具 (Scaffolded Tools)、起始提示詞、輸入指引與將構想化為初稿的完整工作流程。",
      "allTextsEn": [
        "You select the starter prompt. Click the starter prompt card labeled “Brainstorm real-world examples.” This opens Gemini for Education in a new tab with the conversation already started for you.\nGemini asks for context. Gemini begins the conversation by asking for the key details it needs. It might say, “I can help with that! To give you the best real-world examples, please tell me a bit more. What topic are you teaching, and what grade level is it for?”\nYou provide your class details. You reply with your specific teaching context. For example, “I’m teaching my 7th grade physics class about motion. I need some examples of lesson hooks to help explain the difference between speed and velocity.”\nGemini delivers a tailored starting point based on your input. Gemini provides a list of specific, age-appropriate ideas that you can use immediately.\nContinue the conversation to refine. The conversation doesn’t have to stop there. You can continue to iterate with Gemini. For example, you could say, “These are great. Can you give me another one that involves sports?”",
        "Starter prompt",
        "Brainstorm real-world examples\nExample use case"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image147.gif"
      ]
    },
    {
      "slideNumber": 88,
      "sectionId": "classroom",
      "titleZh": "Classroom 深度整合：Google AI tools: Gems and Gemini Noteboo",
      "titleEn": "Google AI tools: Gems and Gemini Notebook",
      "summaryZh": "探討自訂 Gem、指派 Notebook/Gem 到課堂作業、頂端置頂資源、學生端受控體驗、教師後台洞察與 @Classroom 連動功能。",
      "allTextsEn": [
        "Google AI tools: Gems and Gemini Notebook",
        "Your custom AI assistants for planning and prep",
        "Build a custom Gem to act as \u000byour specialized partner for any project. Ground it in your own materials and the web to get \u000bmore relevant ideas, feedback, and answers.\nUse Gemini Notebook to understand any topic on a deeper level. Upload your source materials to get instant summaries, study guides, and answers grounded only in the content you provide."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image113.jpg"
      ]
    },
    {
      "slideNumber": 89,
      "sectionId": "classroom",
      "titleZh": "Classroom 深度整合：We’ve grounded \u000bour use case examples\nin",
      "titleEn": "We’ve grounded \u000bour use case examples\nin a hypothetical 8-week unit on foundatio",
      "summaryZh": "探討自訂 Gem、指派 Notebook/Gem 到課堂作業、頂端置頂資源、學生端受控體驗、教師後台洞察與 @Classroom 連動功能。",
      "allTextsEn": [
        "We’ve grounded \u000bour use case examples\nin a hypothetical 8-week unit on foundational physics concepts",
        "While we use a physics unit to demonstrate an instructional workflow, Gemini Notebook and Gems are subject-agnostic. Simply swap in your own materials to get started."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image45.png"
      ]
    },
    {
      "slideNumber": 90,
      "sectionId": "classroom",
      "titleZh": "Classroom 深度整合：Your custom AI assistants for planning a",
      "titleEn": "Your custom AI assistants for planning and prep\nEducators can use Gemini Noteboo",
      "summaryZh": "探討自訂 Gem、指派 Notebook/Gem 到課堂作業、頂端置頂資源、學生端受控體驗、教師後台洞察與 @Classroom 連動功能。",
      "allTextsEn": [
        "Your custom AI assistants for planning and prep\nEducators can use Gemini Notebook and Gems as their personal assistants to brainstorm ideas, differentiate materials, and accelerate lesson planning.",
        "Example use case: Using a custom Gem for instructional improvement, a teacher creates a “UDL Coach” Gem, grounded in articles about Universal Design for Learning, and asks it to review their Week 6 “Waves” lesson and suggest three new ways students could demonstrate their understanding of refraction.",
        "Example use case: To save time preparing a lab on light and optics, a teacher uploads their Week 7 lesson materials into Gemini Notebook and then uses it to instantly generate a structured, student-friendly lab guide for an experiment on light refraction.",
        "Gems"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image123.png",
        "assets/images/image121.png",
        "assets/images/image120.png"
      ]
    },
    {
      "slideNumber": 91,
      "sectionId": "classroom",
      "titleZh": "Classroom 深度整合：Tips for using Gemini Notebook for plann",
      "titleEn": "Tips for using Gemini Notebook for planning",
      "summaryZh": "探討自訂 Gem、指派 Notebook/Gem 到課堂作業、頂端置頂資源、學生端受控體驗、教師後台洞察與 @Classroom 連動功能。",
      "allTextsEn": [
        "Tips for using Gemini Notebook for planning",
        "Use Gemini Notebook as your curriculum assistant to consolidate planning materials and save valuable prep time. By combining your professional documents into a single intelligent notebook, you can unlock new efficiencies.\nCreate a master notebook for the unit. Upload your entire unit’s materials – scope and sequence, lesson plans, readings, and standards documents – into one notebook. This creates a central hub for all your planning, which you can then ask questions of or listen to on the go.\nListen to your plans with Audio Overviews. Instead of rereading documents, use the Audio Overview feature to listen to a podcast-style summary of your lesson plans or weekly scope and sequence while you commute or prep your classroom – and it can be shared with your colleagues. Customize the overview to focus on key learning objectives or potential student misconceptions.\nGenerate differentiation and alignment ideas. Ask your notebook to generate targeted resources from your materials. For example, “Suggest three discussion questions for advanced learners based on this article,” or “Which specific standards does my ‘Newton’s Third Law’ lesson address?”"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image122.png"
      ]
    },
    {
      "slideNumber": 92,
      "sectionId": "classroom",
      "titleZh": "Classroom 深度整合：Tips for using Gems for planning",
      "titleEn": "Tips for using Gems for planning",
      "summaryZh": "探討自訂 Gem、指派 Notebook/Gem 到課堂作業、頂端置頂資源、學生端受控體驗、教師後台洞察與 @Classroom 連動功能。",
      "allTextsEn": [
        "Tips for using Gems for planning",
        "Use Gems to create personalized AI assistants that streamline your professional workflow. By giving a Gem a specific role and instructions, you can turn it into a dedicated partner for lesson design, material creation, and administrative tasks.\nCreate your own “Instructional Coach” Gem. Set up a Gem with the persona of an expert instructional coach. In the instructions, tell it to help you design lessons using specific frameworks (like 5E or UDL), brainstorm engagement strategies, and create standards-aligned learning objectives.\nBuild a “Differentiation Assistant” Gem. Instruct a Gem to act as a learning specialist focused on making content accessible. Instruct it to re-level reading passages for different Lexile levels, create small group activities, or generate tiered questions for assessments.\nDesign a “Lesson Gamifier” Gem. Create a Gem that specializes in turning any topic into an engaging student activity. Instruct it to prioritize formats like trivia, team challenges, or creative scenarios that can be completed in about 10 minutes. Upload your unit’s vocabulary list to its knowledge base to quickly generate fun review games."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image123.png"
      ]
    },
    {
      "slideNumber": 93,
      "sectionId": "classroom",
      "titleZh": "Classroom 深度整合：Teacher-led  AI learning experiences for",
      "titleEn": "Teacher-led  AI learning experiences for students",
      "summaryZh": "探討自訂 Gem、指派 Notebook/Gem 到課堂作業、頂端置頂資源、學生端受控體驗、教師後台洞察與 @Classroom 連動功能。",
      "allTextsEn": [
        "Teacher-led  AI learning experiences for students",
        "Create and assign notebooks and Gems in Google Classroom."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image53.png"
      ]
    },
    {
      "slideNumber": 94,
      "sectionId": "classroom",
      "titleZh": "Classroom 深度整合：Attach AI learning experiences to assign",
      "titleEn": "Attach AI learning experiences to assignments\nAttach a teacher-led Gemini Notebo",
      "summaryZh": "探討自訂 Gem、指派 Notebook/Gem 到課堂作業、頂端置頂資源、學生端受控體驗、教師後台洞察與 @Classroom 連動功能。",
      "allTextsEn": [
        "Attach AI learning experiences to assignments\nAttach a teacher-led Gemini Notebook notebook or Gem to a specific assignment for a guided, interactive student activity.",
        "Example use case: Check their knowledge\nFor a Week 1 review, the teacher attaches a Quiz me Gem to an assignment. Each student can use it to generate practice questions on the introduction to physics and kinematics, and to get personalized feedback.",
        "Example use case: Prepare for a class debate\nFor a Week 6 assignment, students will use the teacher-provided notebook and resources to learn about a topic and then prepare and practice for a debate on its real-world application.",
        "Gems"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image126.png",
        "assets/images/image133.png",
        "assets/images/image120.png"
      ]
    },
    {
      "slideNumber": 95,
      "sectionId": "classroom",
      "titleZh": "Classroom 深度整合：Two paths to create and assign notebooks",
      "titleEn": "Two paths to create and assign notebooks and Gems",
      "summaryZh": "探討自訂 Gem、指派 Notebook/Gem 到課堂作業、頂端置頂資源、學生端受控體驗、教師後台洞察與 @Classroom 連動功能。",
      "allTextsEn": [
        "Two paths to create and assign notebooks and Gems",
        "In Classroom, you have two flexible starting points for creating and assigning your AI-powered learning tools.\nCreate a class-level resource\nTo create a resource for your whole class, start from the “Classwork” tab. Click “+ Create” and select “Gemini Notebook” or “Gem” directly from the menu. This is perfect for unit-long tools like a study guide or an interactive lab book that you want to highlight for all students.\nAttach to a specific assignment\nWhen you want a tool to support a specific task, start by creating an “Assignment.” Use the “Attach” button to add a targeted notebook or Gem. This connects the resource directly to the relevant work that students need to complete."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image127.png",
        "assets/images/image129.png",
        "assets/images/image128.gif",
        "assets/images/image131.png"
      ]
    },
    {
      "slideNumber": 96,
      "sectionId": "classroom",
      "titleZh": "Classroom 深度整合：Selecting an existing notebook or creati",
      "titleEn": "Selecting an existing notebook or creating a new notebook",
      "summaryZh": "探討自訂 Gem、指派 Notebook/Gem 到課堂作業、頂端置頂資源、學生端受控體驗、教師後台洞察與 @Classroom 連動功能。",
      "allTextsEn": [
        "Selecting an existing notebook or creating a new notebook",
        "After you click the Gemini Notebook  icon, a pop-up window will appear that gives you two options:\nTo create a new notebook\nClick the “Create new” option.\nYou will be guided through the process of creating a new notebook by adding sources.\nOnce created, the new notebook will be automatically attached to your assignment.\nTo select an existing notebook\nEnsure the “Select existing” option is chosen.\nFrom the list of your notebooks, click the one you want to attach (for example, “Unit 1: Student Lab Book”).\nClick “Attach” to add it to your assignment."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image132.png"
      ]
    },
    {
      "slideNumber": 97,
      "sectionId": "classroom",
      "titleZh": "Classroom 深度整合：Creating a new Gem with templates",
      "titleEn": "Creating a new Gem with templates",
      "summaryZh": "探討自訂 Gem、指派 Notebook/Gem 到課堂作業、頂端置頂資源、學生端受控體驗、教師後台洞察與 @Classroom 連動功能。",
      "allTextsEn": [
        "Creating a new Gem with templates",
        "When creating a teacher-led Gem, you can use templates to get started quickly.\nIn the “Add a Gem” window, select “Create new.”\nUnder “Get started with a template,” choose a prebuilt starting point that fits your goal, such as Study partner or Quiz me. Each template automatically populates the Gem with prewritten instructions that you can further edit.\n(Optional) Select “Choose class content to personalize the Gem” to ground the Gem’s responses in specific class materials, making it more relevant for your students.\n(Optional) Personalize it further. Click the “Instructions” field to edit the template’s text before you click “Create Gem.”\nClick “Create Gem” to finish and attach it to your material."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image135.png",
        "assets/images/image139.png"
      ]
    },
    {
      "slideNumber": 98,
      "sectionId": "classroom",
      "titleZh": "Classroom 深度整合：Create a custom Gem from scratch",
      "titleEn": "Create a custom Gem from scratch",
      "summaryZh": "探討自訂 Gem、指派 Notebook/Gem 到課堂作業、頂端置頂資源、學生端受控體驗、教師後台洞察與 @Classroom 連動功能。",
      "allTextsEn": [
        "Create a custom Gem from scratch",
        "After you select “Create Gem” from the pop-up window, the Gem-creation page will open in a new tab, allowing you to personalize the Gem for your class.\nCustomize the name: The Gem will have a default name based on the template you selected. Click the “Name” field to change it to something specific, like “Physics Discovery Guide.”\nEdit the instructions: The “Instructions” field will be prefilled with details from the template. You can now edit this text to give the Gem a specific persona, add rules for how it should interact with students, or outline a series of steps for it to follow.\nReview the knowledge files: Any class materials you attach will appear in the “Knowledge” section, to further specialize your Gem.\nPreview and save: Use the “Preview” pane on the right to test how your Gem will respond. When you are ready, click “Save” (or “Update”) to finalize your new custom Gem."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image136.png"
      ]
    },
    {
      "slideNumber": 99,
      "sectionId": "classroom",
      "titleZh": "Classroom 深度整合：Keep highlighted resources at the top of",
      "titleEn": "Keep highlighted resources at the top of the page\nCreate persistent, on-demand s",
      "summaryZh": "探討自訂 Gem、指派 Notebook/Gem 到課堂作業、頂端置頂資源、學生端受控體驗、教師後台洞察與 @Classroom 連動功能。",
      "allTextsEn": [
        "Keep highlighted resources at the top of the page\nCreate persistent, on-demand support tools that students can access anytime they need help or want to dive deeper into a topic.",
        "You can now highlight AI learning tools, like a student lab notebook or a helpful Gem, in a dedicated “Class learning tools” section by checking the “Highlight at top of class” box on the assignment.\nThis new section appears at the very top of the “Classwork” tab, above all of your units and topics. This makes your resources always visible and easily accessible, ensuring students don’t have to scroll through weeks of posts to find the tools they need most."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image111.png",
        "assets/images/image128.gif"
      ]
    },
    {
      "slideNumber": 100,
      "sectionId": "classroom",
      "titleZh": "Classroom 深度整合：Class-level resources in action\nProvide ",
      "titleEn": "Class-level resources in action\nProvide highlighted class learning resources at ",
      "summaryZh": "探討自訂 Gem、指派 Notebook/Gem 到課堂作業、頂端置頂資源、學生端受控體驗、教師後台洞察與 @Classroom 連動功能。",
      "allTextsEn": [
        "Class-level resources in action\nProvide highlighted class learning resources at the top of the ‘Classwork’ tab for students to access throughout an entire unit.",
        "Example use case: Newton’s Laws Navigator\nTo help students connect theory to the real world, a teacher can build a Newton’s Laws Navigator Gem, grounded in the resources the teacher provided and the web, to provide students with an on-demand expert to answer questions and explain concepts like inertia and F=ma using relevant, everyday examples.",
        "Example use case: The interactive lab companion\nThe teacher creates a highlighted Unit 1: Student Lab Book notebook, allowing students to instantly ask questions about lab procedures, clarify safety rules, and get summaries of key concepts directly from the core resources the teacher provided.",
        "Gems"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image140.png",
        "assets/images/image138.png",
        "assets/images/image153.png"
      ]
    },
    {
      "slideNumber": 101,
      "sectionId": "classroom",
      "titleZh": "Classroom 深度整合：Posting to the Classwork tab",
      "titleEn": "Posting to the Classwork tab",
      "summaryZh": "探討自訂 Gem、指派 Notebook/Gem 到課堂作業、頂端置頂資源、學生端受控體驗、教師後台洞察與 @Classroom 連動功能。",
      "allTextsEn": [
        "Posting to the Classwork tab",
        "You can post a notebook or Gem as a highlighted, class-level resource for your students to easily access.\nIn the “Classwork” tab, click “+ Create” and select “Material”.\nAdd a title (for example, “Newton’s Laws Navigator”) and a brief description for your students.\nUnder “Attach”, select the Gemini Notebook  or Gem icon and choose the specific resource you want to share. (You can also create a new resource if you haven’t already done so.)\nOnce attached, select the checkbox ✅ next to “Highlight at top of class”.\nAssign a topic and click “Post.” The material will now appear in its topic section and as a highlighted resource at the top of the “Classwork” tab."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image142.png",
        "assets/images/image128.gif"
      ]
    },
    {
      "slideNumber": 102,
      "sectionId": "classroom",
      "titleZh": "Classroom 深度整合：Get insights into student use",
      "titleEn": "Get insights into student use",
      "summaryZh": "探討自訂 Gem、指派 Notebook/Gem 到課堂作業、頂端置頂資源、學生端受控體驗、教師後台洞察與 @Classroom 連動功能。",
      "allTextsEn": [
        "Get insights into student use",
        "Teachers can easily see which students have opened any assigned notebook or Gem, giving teachers a quick way to gauge engagement with their AI-powered resources.\nAn “Opened by” status appears next to any assigned notebook or Gem, showing a live count of how many students have accessed it.\nYou can find this status on highlighted class-level resources at the top of the “Classwork” tab, and also on resources attached to individual assignments within your topics.\nClick the status link (for example, “1 student”) from either location to open an insight.\nThis insight shows a list of students sorted into who has “Opened” and who has “Not opened” the resource, allowing you to quickly see who might need a reminder."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image149.png",
        "assets/images/image143.png",
        "assets/images/image128.gif"
      ]
    },
    {
      "slideNumber": 103,
      "sectionId": "classroom",
      "titleZh": "Classroom 深度整合：Student experience",
      "titleEn": "Student experience",
      "summaryZh": "探討自訂 Gem、指派 Notebook/Gem 到課堂作業、頂端置頂資源、學生端受控體驗、教師後台洞察與 @Classroom 連動功能。",
      "allTextsEn": [
        "Student experience",
        "When students open an assigned notebook or Gem, they receive a curated, “view only” experience. This allows them to freely ask questions and interact with the content you’ve provided, but they can’t add, edit, or delete source materials.\nAny learning aids you create for them in the “Studio” pane – such as study guides, Mind Maps, and Audio Overviews – will be visible and ready for them to use, allowing all students access to the resources you’ve generated."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image150.png"
      ]
    },
    {
      "slideNumber": 104,
      "sectionId": "classroom",
      "titleZh": "Classroom 深度整合：Student experience",
      "titleEn": "Student experience",
      "summaryZh": "探討自訂 Gem、指派 Notebook/Gem 到課堂作業、頂端置頂資源、學生端受控體驗、教師後台洞察與 @Classroom 連動功能。",
      "allTextsEn": [
        "Student experience",
        "Students can access the “Class learning tools” highlighted at the top of their “Classwork” tab. The tool loads in a new tab when clicked. Example use cases:\nInteractive Lab Companion (Gemini Notebook): When a student is prepping for an experiment and asks a question – like “What are the safety rules for this lab?” or “Can you find every mention of velocity?” – the Interactive Lab Companion provides a direct, concise answer pulled exclusively from the official Student Lab Book. All answers include citations, so students can see exactly where the information came from, making it a reliable single source of truth for all lab work.\nNewton’s Laws Navigator (Gem): When a student asks a conceptual question – like “How does inertia apply to hockey?” – the Newton’s Laws Navigator Gem avoids giving a direct definition. Instead, it uses its grounded sources to respond with a targeted, guiding question like “Think about the puck before the game starts. What has to happen for it to move? Once it’s sliding on the ice, what forces are trying to slow it down?” This helps the student use real-world scenarios to build their own understanding of the concept.",
        "Discover how we’re grounding AI in learning science"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image111.png",
        "assets/images/image128.gif"
      ]
    },
    {
      "slideNumber": 105,
      "sectionId": "classroom",
      "titleZh": "Classroom 深度整合：Student experience",
      "titleEn": "Student experience",
      "summaryZh": "探討自訂 Gem、指派 Notebook/Gem 到課堂作業、頂端置頂資源、學生端受控體驗、教師後台洞察與 @Classroom 連動功能。",
      "allTextsEn": [
        "Student experience",
        "Using the ‘Study partner’ Gem\nStudents can access the Gem attached to the top of their “Classwork” tab. Gemini for Education loads in a new tab when clicked. Example use cases:\nFor conceptual help: When a student asks a conceptual question – for example, “Why don’t action-reaction forces cancel out?” – the Gem avoids giving a direct answer. Instead, it responds with a targeted, Socratic question that helps the student break down the problem and use their own knowledge to arrive at the solution.\nFor problem-solving: When a student asks for help with a specific problem, the Gem first initiates a short, diagnostic conversation to understand the student’s grade level and current thinking. It will ask what the student has already tried or which formula they think applies before starting to guide them through the problem-solving process.",
        "Discover how we’re grounding AI in learning science"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image145.png"
      ]
    },
    {
      "slideNumber": 106,
      "sectionId": "classroom",
      "titleZh": "Classroom 深度整合：Google Classroom app in Gemini",
      "titleEn": "Google Classroom app in Gemini",
      "summaryZh": "探討自訂 Gem、指派 Notebook/Gem 到課堂作業、頂端置頂資源、學生端受控體驗、教師後台洞察與 @Classroom 連動功能。",
      "allTextsEn": [
        "Google Classroom app in Gemini",
        "Tackle time-consuming tasks using context from your classes to inform Gemini outputs, or help complete tasks.",
        "Available now for 18+"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image148.png"
      ]
    },
    {
      "slideNumber": 107,
      "sectionId": "classroom",
      "titleZh": "Classroom 深度整合：Bring Google Classroom context into the ",
      "titleEn": "Bring Google Classroom context into the Gemini app\nThe Classroom app in Gemini u",
      "summaryZh": "探討自訂 Gem、指派 Notebook/Gem 到課堂作業、頂端置頂資源、學生端受控體驗、教師後台洞察與 @Classroom 連動功能。",
      "allTextsEn": [
        "Bring Google Classroom context into the Gemini app\nThe Classroom app in Gemini unlocks  new secure, contextual ways to collaborate with Gemini. Based on your prompts, Gemini will identify when content from Google Classroom will be relevant, and use it to inform outputs.",
        "Discover more ways to use Classroom in Gemini",
        "Uncover insights\nQuickly analyze student progress, review trends, summarize insights, and more",
        "Reuse what works\nSearch instantly across active and archived classes to surface assignments, materials, and Google Drive resources",
        "Draft content faster\nHave Gemini draft posts in Classroom, including across classes"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image203.gif",
        "assets/images/image152.png",
        "assets/images/image61.png",
        "assets/images/image155.jpg"
      ]
    },
    {
      "slideNumber": 108,
      "sectionId": "classroom",
      "titleZh": "Classroom 深度整合：Ideas for prompts you can now ask Gemini",
      "titleEn": "Ideas for prompts you can now ask Gemini",
      "summaryZh": "探討自訂 Gem、指派 Notebook/Gem 到課堂作業、頂端置頂資源、學生端受控體驗、教師後台洞察與 @Classroom 連動功能。",
      "allTextsEn": [
        "Ideas for prompts you can now ask Gemini",
        "Assist with differentiation",
        "Get custom activity ideas",
        "Find and reuse past content",
        "Summarize learning progress",
        "Quickly draft assignments",
        "Get insights for instruction",
        "“@Classroom, Which assignments and topics have the lowest scores? Summarize the related topics that need reteaching.”",
        "“@Classroom, Create a new assignment for my science class and attach the PDF titled ‘Solar System’ from my Drive.”",
        "“@Classroom, Create a summary of my [Class Name] course this quarter so I can create an action plan.”",
        "While Gemini identifies context automatically, you can always use @Classroom to explicitly pull information from a specific class to help you work through your daily tasks.\nWith Gemini for Education, you have enterprise-grade data protection, allowing you to use context from Classroom in a fully secure environment.",
        "“@Classroom, Go find the evolution essay assignment I used last year in ‘Biology 101’ from my archive.”",
        "“@Classroom, Create three groups for a new project based on the results of the last math test.”",
        "“@Classroom, Create three differentiated activities for my ‘Grade 8 Math’ class based on their assignment submissions.”",
        "See the full Google Classroom app in Gemini guide"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image152.png",
        "assets/images/image61.png"
      ]
    },
    {
      "slideNumber": 109,
      "sectionId": "workspace",
      "titleZh": "Workspace 工具整合：Gemini in Workspace",
      "titleEn": "Gemini in Workspace",
      "summaryZh": "詳細解說 Gemini 在 Google Docs, Gmail, Sheets, Forms, Meet, Vids 與 Imagen 的跨工具高效整合操作。",
      "allTextsEn": [
        "Gemini in Workspace",
        "Unlock the power of Gemini as your assistant across Google Workspace for Education tools"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image53.png"
      ]
    },
    {
      "slideNumber": 110,
      "sectionId": "workspace",
      "titleZh": "Workspace 工具整合：Gemini in Workspace\nGoogle Workspace wit",
      "titleEn": "Gemini in Workspace\nGoogle Workspace with Gemini brings together the power of Ge",
      "summaryZh": "詳細解說 Gemini 在 Google Docs, Gmail, Sheets, Forms, Meet, Vids 與 Imagen 的跨工具高效整合操作。",
      "allTextsEn": [
        "Gemini in Workspace\nGoogle Workspace with Gemini brings together the power of Gemini with the collaboration and productivity benefits of Google Workspace – embedding generative AI into the tools you’re already using every day.\nAvailable to users 18+ with a Gemini Education add-on.",
        "Helps you connect",
        "Helps you create",
        "Helps you organize",
        "Google Sheets",
        "Google Meet",
        "Google Vids",
        "Google Drive",
        "Google Chat",
        "Paid offering",
        "Helps you plan",
        "Helps you visualize",
        "Helps you write",
        "Google Slides",
        "Google Classroom",
        "Gmail",
        "Google Docs"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image167.png",
        "assets/images/image168.png",
        "assets/images/image159.png",
        "assets/images/image152.png",
        "assets/images/image151.png",
        "assets/images/image161.png",
        "assets/images/image160.png",
        "assets/images/image158.png",
        "assets/images/image164.png",
        "assets/images/image157.png"
      ]
    },
    {
      "slideNumber": 111,
      "sectionId": "workspace",
      "titleZh": "Workspace 工具整合：Gemini in Workspace availability varies ",
      "titleEn": "Gemini in Workspace availability varies by Google Workspace for Education editio",
      "summaryZh": "詳細解說 Gemini 在 Google Docs, Gmail, Sheets, Forms, Meet, Vids 與 Imagen 的跨工具高效整合操作。",
      "allTextsEn": [
        "Gemini in Workspace availability varies by Google Workspace for Education edition"
      ],
      "tables": [
        [
          [
            "Gemini in Workspace",
            "Education Fundamentals \n(free of charge)",
            "Education Plus \n(paid)",
            "Google AI Pro for Education \n(paid add-on)"
          ],
          [
            "Workspace Studio",
            "✓",
            "Expanded access",
            "Highest access"
          ],
          [
            "Gemini in Gmail",
            "Coming soon",
            "Coming soon",
            "Expanded access"
          ],
          [
            "Gemini in Docs",
            "-",
            "✓",
            "✓"
          ],
          [
            "Gemini in Slides",
            "-",
            "✓",
            "✓"
          ],
          [
            "Gemini in Sheets",
            "-",
            "Coming soon",
            "✓"
          ],
          [
            "Gemini in Forms",
            "-",
            "✓",
            "✓"
          ],
          [
            "Gemini in Vids",
            "-",
            "✓",
            "✓"
          ],
          [
            "Gemini in Meet",
            "-",
            "-",
            "✓"
          ],
          [
            "Gemini in Drive",
            "-",
            "-",
            "✓"
          ],
          [
            "Gemini in Chat",
            "-",
            "-",
            "✓"
          ]
        ]
      ],
      "notes": "",
      "images": []
    },
    {
      "slideNumber": 112,
      "sectionId": "workspace",
      "titleZh": "Workspace 工具整合：Improve productivity with Gemini\nin the ",
      "titleEn": "Improve productivity with Gemini\nin the side panel of your apps",
      "summaryZh": "詳細解說 Gemini 在 Google Docs, Gmail, Sheets, Forms, Meet, Vids 與 Imagen 的跨工具高效整合操作。",
      "allTextsEn": [
        "Improve productivity with Gemini\nin the side panel of your apps",
        "Access Gemini from wherever \u000byou’re working\nQuickly get help from Gemini right in the side panel of your apps – all without switching applications or tabs.",
        "Unlock the power of your Drive files\nThrough the side panel, Gemini can assist you with summarizing, analyzing, and generating content by using insights gathered from your emails, documents, and more.",
        "View suggested prompts and \u000bautomatic summaries\nGemini automatically summarizes the content you’re working on and provides contextually relevant prompts to help you get started."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image197.gif"
      ]
    },
    {
      "slideNumber": 113,
      "sectionId": "workspace",
      "titleZh": "Workspace 工具整合：Acting as a marketing director, help me ",
      "titleEn": "Acting as a marketing director, help me create a promotional video announcing a ",
      "summaryZh": "詳細解說 Gemini 在 Google Docs, Gmail, Sheets, Forms, Meet, Vids 與 Imagen 的跨工具高效整合操作。",
      "allTextsEn": [
        "Acting as a marketing director, help me create a promotional video announcing a new STEM program at my academy.",
        "Create informative videos\nPrompt",
        "Administrative tasks",
        "Gemini in Vids",
        "✨Tip\nUse Veo 3.1 to bring your vision to life and generate original videos with audio.\n🔥Great for\nInformational videos, school announcements, and more."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image165.jpg",
        "assets/images/image168.png"
      ]
    },
    {
      "slideNumber": 114,
      "sectionId": "workspace",
      "titleZh": "Workspace 工具整合：Summarize this email thread and provide ",
      "titleEn": "Summarize this email thread and provide a suggested reply with next steps.",
      "summaryZh": "詳細解說 Gemini 在 Google Docs, Gmail, Sheets, Forms, Meet, Vids 與 Imagen 的跨工具高效整合操作。",
      "allTextsEn": [
        "Summarize this email thread and provide a suggested reply with next steps.",
        "Recap email threads and draft responses\nPrompt",
        "✨Tip\nRefine the email for tone and length.\n🔥Great for\nQuickly catching up on long email threads and drafting professional, actionable replies without losing the key context.",
        "Administrative tasks",
        "Gemini in Gmail"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image175.gif",
        "assets/images/image158.png"
      ]
    },
    {
      "slideNumber": 115,
      "sectionId": "workspace",
      "titleZh": "Workspace 工具整合：Administrative tasks",
      "titleEn": "Administrative tasks",
      "summaryZh": "詳細解說 Gemini 在 Google Docs, Gmail, Sheets, Forms, Meet, Vids 與 Imagen 的跨工具高效整合操作。",
      "allTextsEn": [
        "Administrative tasks",
        "Gemini in Forms",
        "Create a quiz testing the second module of @[name of your document from Drive]. Add two short-answer questions about Newton’s second law.",
        "Generate draft forms based on content from your Drive\nPrompt",
        "✨Tip\nRefine the form by specifying question types (for example,  change short-answer to multiple-choice). Adjust the number of questions generated or their level of complexity.\n🔥Great for\nRapidly creating registration forms, surveys, or quizzes based on existing content stored in Drive."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image180.gif",
        "assets/images/image171.png"
      ]
    },
    {
      "slideNumber": 116,
      "sectionId": "workspace",
      "titleZh": "Workspace 工具整合：I’m just returning from vacation. What a",
      "titleEn": "I’m just returning from vacation. What are the key takeaways from the last 3 wee",
      "summaryZh": "詳細解說 Gemini 在 Google Docs, Gmail, Sheets, Forms, Meet, Vids 與 Imagen 的跨工具高效整合操作。",
      "allTextsEn": [
        "I’m just returning from vacation. What are the key takeaways from the last 3 weeks of staff meetings in @[the Weekly Staff Meeting Notes doc from Drive].",
        "Administrative tasks",
        "Summarize key info from Drive files\nPrompt",
        "✨Tip\nUse @ to reference specific files if needed.\n🔥Great for\nQuickly getting up to speed and pulling insights from across your Drive.",
        "Gemini in Drive"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image197.gif",
        "assets/images/image160.png"
      ]
    },
    {
      "slideNumber": 117,
      "sectionId": "workspace",
      "titleZh": "Workspace 工具整合：Create a formula that calculates the ave",
      "titleEn": "Create a formula that calculates the average grade for all students.",
      "summaryZh": "詳細解說 Gemini 在 Google Docs, Gmail, Sheets, Forms, Meet, Vids 與 Imagen 的跨工具高效整合操作。",
      "allTextsEn": [
        "Create a formula that calculates the average grade for all students.",
        "Administrative tasks",
        "Analyze student data with a formula\nPrompt",
        "✨Tip\nAfter generating the formula, ask Gemini to summarize your spreadsheet or visualize your data using a table or chart.\n🔥Great for\nAutomating routine data tasks and turning raw numbers into clear insights for planning, reporting, or intervention support.",
        "Gemini in Sheets"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image182.gif",
        "assets/images/image157.png"
      ]
    },
    {
      "slideNumber": 118,
      "sectionId": "workspace",
      "titleZh": "Workspace 工具整合：Gemini in Meet takes notes for you. Just",
      "titleEn": "Gemini in Meet takes notes for you. Just click the Gemini pencil icon once you’r",
      "summaryZh": "詳細解說 Gemini 在 Google Docs, Gmail, Sheets, Forms, Meet, Vids 與 Imagen 的跨工具高效整合操作。",
      "allTextsEn": [
        "Gemini in Meet takes notes for you. Just click the Gemini pencil icon once you’re in the meeting. Afterward, you’ll get a link to a Docs file in your inbox with a summary, key discussion points, and suggested next steps, so you can stay fully present and take action later.",
        "Administrative tasks",
        "Automatically capture and summarize meeting notes with Gemini in Meet",
        "✨Tip\nUse the Suggested next steps section to delegate follow-up tasks by tagging team members, or leave comments directly \u000bin the Docs file to align on decisions and deadlines together.\n🔥Great for\nStaying fully present in meetings, eliminating manual note-taking, and turning conversations into actionable plans.",
        "Gemini in Meet"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image172.png",
        "assets/images/image170.png",
        "assets/images/image164.png"
      ]
    },
    {
      "slideNumber": 119,
      "sectionId": "workspace",
      "titleZh": "Workspace 工具整合：Act as a middle school science teacher. ",
      "titleEn": "Act as a middle school science teacher. Write three exit ticket questions on pho",
      "summaryZh": "詳細解說 Gemini 在 Google Docs, Gmail, Sheets, Forms, Meet, Vids 與 Imagen 的跨工具高效整合操作。",
      "allTextsEn": [
        "Act as a middle school science teacher. Write three exit ticket questions on photosynthesis for a 7th-grade class: one recall, one application, and one analysis-level question. Keep the language student-friendly and age-appropriate.",
        "Generate tiered exit ticket questions\nPrompt",
        "✨Tip\nBefore clicking “Insert”, use “Refine” to adjust tone or length, or choose “Elaborate” to add context and depth to each question.\n🔥Great for\nQuick, differentiated exit tickets to check for understanding at multiple levels – without starting from scratch.",
        "Assessment",
        "Gemini in Docs"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image179.gif",
        "assets/images/image167.png"
      ]
    },
    {
      "slideNumber": 120,
      "sectionId": "workspace",
      "titleZh": "Workspace 工具整合：Here is an assignment a student of mine ",
      "titleEn": "Here is an assignment a student of mine wrote for a high school poetry class. Ac",
      "summaryZh": "詳細解說 Gemini 在 Google Docs, Gmail, Sheets, Forms, Meet, Vids 與 Imagen 的跨工具高效整合操作。",
      "allTextsEn": [
        "Here is an assignment a student of mine wrote for a high school poetry class. Acting as the class teacher, provide tailored feedback for this student’s assignment.",
        "Differentiation",
        "Provide tailored feedback in Docs\nPrompt",
        "✨Tip\nIt is important to always review Gemini’s output and add your own thoughts, especially when using it for feedback.\n🔥Great for\nSaving time while giving each student meaningful, differentiated feedback that supports their growth.",
        "Gemini in Docs"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image202.gif",
        "assets/images/image167.png"
      ]
    },
    {
      "slideNumber": 121,
      "sectionId": "workspace",
      "titleZh": "Workspace 工具整合：Create an illustration for a summer scie",
      "titleEn": "Create an illustration for a summer science program. Include elements of physics",
      "summaryZh": "詳細解說 Gemini 在 Google Docs, Gmail, Sheets, Forms, Meet, Vids 與 Imagen 的跨工具高效整合操作。",
      "allTextsEn": [
        "Create an illustration for a summer science program. Include elements of physics, biology, and chemistry, and incorporate white and olive green.",
        "Instructional materials",
        "Create custom visuals for instruction\nPrompt",
        "✨Tip\nClick “Add a style” and select from the options provided to customize the look and feel.\n🔥Great for\nCreating custom visuals to add to your slides.",
        "Gemini in Slides"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image204.gif",
        "assets/images/image161.png"
      ]
    },
    {
      "slideNumber": 122,
      "sectionId": "workspace",
      "titleZh": "Workspace 工具整合：Create a short video that explains the d",
      "titleEn": "Create a short video that explains the difference between kinetic and potential ",
      "summaryZh": "詳細解說 Gemini 在 Google Docs, Gmail, Sheets, Forms, Meet, Vids 與 Imagen 的跨工具高效整合操作。",
      "allTextsEn": [
        "Create a short video that explains the difference between kinetic and potential energy for a high school science class. Keep the tone friendly and educational, and include a visual to support the explanation.",
        "Instructional materials",
        "Create a concept explainer video in Vids\nPrompt",
        "✨Tip\nUse the @ symbol to pull in your notes, lesson plan, or a lab doc from Drive to help Gemini tailor the explanation.\n🔥Great for\nCreating quick, reusable video explainers that support flipped learning, warm-ups, reteaching, or small group review.",
        "Gemini in Vids",
        "Kinetic energy is all about motion. If something is moving, it has kinetic energy. Think of a car speeding down a highway or someone running a race. They both possess kinetic energy because they are in motion."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image181.png",
        "assets/images/image178.png",
        "assets/images/image183.png",
        "assets/images/image168.png"
      ]
    },
    {
      "slideNumber": 123,
      "sectionId": "workspace",
      "titleZh": "Workspace 工具整合：Help me create a pacing guide for a 4-we",
      "titleEn": "Help me create a pacing guide for a 4-week, 11th grade high school physics unit ",
      "summaryZh": "詳細解說 Gemini 在 Google Docs, Gmail, Sheets, Forms, Meet, Vids 與 Imagen 的跨工具高效整合操作。",
      "allTextsEn": [
        "Help me create a pacing guide for a 4-week, 11th grade high school physics unit on waves and energy. Include weekly learning goals, daily activities, and essential questions.",
        "Planning",
        "Create a unit-pacing guide in Docs\nPrompt",
        "✨Tip\nYou can guide the response further by selecting “Refine” or “Refine with a prompt.”\n🔥Great for\nJump-starting unit planning with clear structure and learning targets, collaborative planning, and aligning weekly instruction with essential questions and learning goals.",
        "Gemini in Docs"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image199.gif",
        "assets/images/image167.png"
      ]
    },
    {
      "slideNumber": 124,
      "sectionId": "workspace",
      "titleZh": "Workspace 工具整合：I’m applying for a grant to upgrade the ",
      "titleEn": "I’m applying for a grant to upgrade the science equipment in our chemistry labs.",
      "summaryZh": "詳細解說 Gemini 在 Google Docs, Gmail, Sheets, Forms, Meet, Vids 與 Imagen 的跨工具高效整合操作。",
      "allTextsEn": [
        "I’m applying for a grant to upgrade the science equipment in our chemistry labs. Help me create a grant proposal based off of @[a Docs resource in your Drive].",
        "Research",
        "Draft a grant proposal from a source doc\nPrompt",
        "✨Tip\nAsk Gemini to organize the proposal into key sections like project overview, goals, justification, and budget.\n🔥Great for\nTurning detailed documents into professional proposals or formal writing.",
        "Gemini in Docs"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image200.gif",
        "assets/images/image167.png"
      ]
    },
    {
      "slideNumber": 125,
      "sectionId": "admin_literacy",
      "titleZh": "素養與管理：AI literacy resources",
      "titleEn": "AI literacy resources",
      "summaryZh": "Google 官方 AI 素養課程、證書資源，以及 Google Admin Console 的安全控制與存取權限管理。",
      "allTextsEn": [
        "AI literacy resources"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image186.png"
      ]
    },
    {
      "slideNumber": 126,
      "sectionId": "admin_literacy",
      "titleZh": "素養與管理：goo.gle/genai-resources",
      "titleEn": "goo.gle/genai-resources",
      "summaryZh": "Google 官方 AI 素養課程、證書資源，以及 Google Admin Console 的安全控制與存取權限管理。",
      "allTextsEn": [
        "goo.gle/genai-resources",
        "Get started",
        "Explore our range of guides, courses, certifications, and learning resources available at no cost."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image190.png"
      ]
    },
    {
      "slideNumber": 127,
      "sectionId": "admin_literacy",
      "titleZh": "素養與管理：Admin setup",
      "titleEn": "Admin setup",
      "summaryZh": "Google 官方 AI 素養課程、證書資源，以及 Google Admin Console 的安全控制與存取權限管理。",
      "allTextsEn": [
        "Admin setup",
        "EDITED - 13.08"
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image186.png"
      ]
    },
    {
      "slideNumber": 128,
      "sectionId": "admin_literacy",
      "titleZh": "素養與管理：Admins can manage who has access to the ",
      "titleEn": "Admins can manage who has access to the Gemini app and Gemini Notebook in Admin ",
      "summaryZh": "Google 官方 AI 素養課程、證書資源，以及 Google Admin Console 的安全控制與存取權限管理。",
      "allTextsEn": [
        "Admins can manage who has access to the Gemini app and Gemini Notebook in Admin console",
        "Manage access to \u000bthe Gemini app and Gemini Notebook for students, faculty, and staff in Admin console."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image184.png"
      ]
    },
    {
      "slideNumber": 129,
      "sectionId": "admin_literacy",
      "titleZh": "素養與管理：Gemini in Workspace \u000bis simple for IT ad",
      "titleEn": "Gemini in Workspace \u000bis simple for IT admins to set up",
      "summaryZh": "Google 官方 AI 素養課程、證書資源，以及 Google Admin Console 的安全控制與存取權限管理。",
      "allTextsEn": [
        "Gemini in Workspace \u000bis simple for IT admins to set up",
        "1",
        "2",
        "3",
        "Purchase Google AI Pro for Education as an \u000badd-on to your existing \u000bGoogle Workspace \u000bfor Education edition.",
        "Assign Google AI Pro for Education licenses to educators and students 18+.",
        "Ensure Gemini in Workspace is \u000bturned on in Admin console.",
        "4",
        "Once licenses are \u000bassigned, your users can get started with Gemini in Workspace right away."
      ],
      "tables": [],
      "notes": "",
      "images": [
        "assets/images/image160.png",
        "assets/images/image164.png",
        "assets/images/image157.png",
        "assets/images/image161.png",
        "assets/images/image158.png",
        "assets/images/image167.png",
        "assets/images/image152.png",
        "assets/images/image60.png"
      ]
    }
  ]
};
