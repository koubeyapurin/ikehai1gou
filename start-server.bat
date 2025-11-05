@echo off
echo ====================================
echo   イケ配 PWA ローカルサーバー起動
echo ====================================
echo.
echo サーバーを起動しています...
echo ブラウザで http://localhost:8000 を開いてください
echo.
echo 終了するには Ctrl+C を押してください
echo ====================================
echo.

python -m http.server 8000

