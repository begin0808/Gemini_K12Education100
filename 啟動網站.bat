@echo off
chcp 65001 >nul
echo ========================================================
echo   Google Gemini in K-12 Education (繁體中文互動網站)
echo ========================================================
echo.
echo 正在為您啟動本地網站服務器...
echo 請在瀏覽器中開啟: http://localhost:8080
echo.
start http://localhost:8080
python -m http.server 8080
pause
