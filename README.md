# 運用 Gemini 於 K-12 中小學教育的 100+ 種方法
### Google for Education 官方指南 · 繁體中文互動實戰指南

[![GitHub Pages](https://img.shields.io/badge/線上實戰手冊-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://begin0808.github.io/Gemini_K12Education100/)
[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg?style=for-the-badge)](https://creativecommons.org/licenses/by-nc/4.0/)

---

## 📖 專案發起與在地化構想

本專案旨在將 **Google for Education 官方發布的英文簡報《100+ ways to use Gemini in K-12 education》（共 129 頁）**，完整轉化為專為台灣中小學教師、行政團隊與學生量身打造的**繁體中文互動式實戰網站**。

* **原創內容來源**：[Google for Education 幼兒園到高中 AI 應用實例（教學適用的現成 AI 提示詞） ↗](https://edu.google.com/intl/ALL_tw/resources/ai-for-k-12-educators/) 與推薦之 [官方簡報《在教育領域運用 Gemini 的 100 多種構想》(100+ ways to use Gemini in K-12 education) ↗](https://docs.google.com/presentation/d/1MTyP-BBusYw2rHKE_lQ2QVDA7uT7ngYaGfBy9HypQdY/view)
* **繁體中文化構想與在地化整理**：**國立南大附中 李佳恩老師**
  > 「有感於 Google 官方這份高達 129 頁的 AI 教育指南內容極具深度與前瞻性，但全英文且篇幅龐大，許多科目老師看到英文往往直接放棄。特提出繁中化構想並製作成互動實踐指南網頁，希望能推廣這寶貴教材。」
* **意見交流與修訂建議**：歡迎各級學校教師來信交流教學心得或提供勘誤建議：[`begin@gm.tntcsh.tn.edu.tw`](mailto:begin@gm.tntcsh.tn.edu.tw)
* **技術協作與前端建置**：Google Antigravity IDE & Gemini 3.8 Flash

---

## 🌟 核心功能架構（聚焦分頁獨立切換模式）

為了徹底告別長達數萬像素的「一頁式無限滾動」帶來的閱讀負擔，本網站採用**單一模組獨立切換架構**（點選頂部功能標籤，畫面只專注顯示該專區的精彩內容）：

1. **🚀 Google 官方現成 25 款 AI 提示詞（一鍵直通 Gemini）**：
   - 完整收錄 Google for Education 台灣官方專區精選的 25 款教學高階提示詞。
   - 涵蓋「規劃 (8)」、「教材 (10)」、「評量 (4)」、「行政工作 (3)」四大實戰向度。
   - 每個卡片均配備「問問 Gemini ↗」官方直連按鈕，點擊自動開啟 Gemini 並預載官方特調的角色任務、分步互動流程與澄清引導！

2. **🏫 Classroom 課堂鷹架工具（12 種完整對照）**：
   - 完整對齊 Google Classroom 介面之鷹架模組：教案大綱、測驗生成、表現規準量表、專題發想、說明教材、九宮格選項板、單字清單、吸引人開場、常見迷思剖析、故事編寫、文本翻譯與實驗指引。
   - 附帶「輸入欄位指引（年級/概念/指標）」、「繁中提示詞範本（帶填空標籤）」、「英文原文」與「Classroom 微調心法」。

3. **✨ PARTS 提示詞設計黃金心法**：
   - **P (Persona 角色)**：設定 AI 的專業身份與教學視角
   - **A (Act 行動)**：使用精確動詞提出具體教學任務
   - **R (Recipient 受眾)**：精準錨定學習者年級、程度與個別差異
   - **T (Theme 主題)**：設定清晰學科知識邊界與情境
   - **S (Structure 架構)**：指定 5E 教學架構、4 等級量表或 CER 課堂退出票
   - 內建「初階 vs 進階 vs 大師級」進化階梯對比剖析。

4. **⚡ 互動式 PARTS 提示詞客製生成器**：
   - 老師只需選擇「適用年級」、「學科領域」、「單元核心概念」與「期待輸出架構（5E、評量表、測驗卷、選項板、破冰開場）」，系統即時拼裝出高階專業提示詞，支援一鍵複製！

5. **📚 48+ 實戰教學提示詞庫**：
   - 依教學環節（教案評量、課堂引導、知識庫、專家、Workspace）、適用工具與目標角色三維度交叉篩選。
   - 支援頂部即時模糊關鍵字搜尋（快捷鍵 `/`），中英文雙語對照切換。

6. **📖 129 頁全簡報全景閱覽 (Slide-by-Slide Deck Reader)**：
   - 完整收錄原版 129 頁投影片！支援下拉選單瞬間跳頁、前後翻頁導覽。
   - 左側提供繁體中文重點導讀、核心提示詞提煉與關鍵條列；右側對照原廠高解析投影片畫面。

7. **💎 7 大自訂專家 Gems 指令集**：
   - 包含：課程標準教案專家、寫作回饋導師、蘇格拉底探究夥伴、雙語沉浸語伴、UDL 差異化專家、自然科學生活家教等完整 System Prompts。

8. **📓 NotebookLM 知識庫深度實戰**：
   - 以 8 週物理單元貫穿示範！解析 100% 根植於教師教材的零幻覺教研、一鍵雙人對談語音摘要 (Audio Overview) 與跨章節心智圖 (Mind Map)。

9. **💼 Google Workspace 跨工具協作**：
   - 整合 Google Docs（現代詩回饋）、Gmail（同理心家長回信）、Sheets（複雜加權公式）、Forms（關聯教材一鍵出題）、Meet（AI 逐字記錄）與 Vids（科普微短片）。

10. **❤️ 我的隨身收藏庫與深色模式**：
   - 瀏覽過程中隨時點選提示詞右上角愛心圖示，將心儀提示詞存入隨身清單（自動保存於瀏覽器 LocalStorage）。
   - 支援深色模式 (Dark Theme) 與淺色模式切換。

---

## 🚀 本機快速預覽方式

### 方式 1：Windows 一鍵啟動（推薦）
直接雙擊資料夾內的 **`啟動網站.bat`**，系統將自動啟動本機伺服器並開啟瀏覽器：
```text
http://localhost:8080
```

### 方式 2：使用 Python 啟動
在專案根目錄開啟命令提示字元或 PowerShell：
```bash
python -m http.server 8080
```
隨後在瀏覽器開啟 `http://localhost:8080` 即可。

### 方式 3：直接開啟 HTML
本專案為純靜態現代前端應用，無需安裝任何伺服器或依賴，直接以 Chrome 或 Edge 雙擊開啟 `index.html` 亦可完整離線運作！

---

## 🌐 線上公開實戰指南

本指南已正式發布於 GitHub Pages，歡迎全台中小學教師與教育夥伴直接線上使用與分享：
👉 **[https://begin0808.github.io/Gemini_K12Education100/](https://begin0808.github.io/Gemini_K12Education100/)**

---

## ⚖️ 教材版權與使用聲明

1. **原創教材版權**：本網站所引述之英文教材內容、概念圖表與結構框架，其智慧財產權與版權均歸原作者 **Google for Education** 所有。
2. **非營利教育使用聲明**：本專案為台灣非商業性質之教育研究推廣與在地化編譯成果，專供全台各級中小學校教師備課、校園教學社群研習與學術交流免費使用 (Educational & Non-commercial Use Only)。
