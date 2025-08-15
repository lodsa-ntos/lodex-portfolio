@echo off
echo Switching to development version of index.html (removes external resources that may be blocked)...
copy index.dev.html index.html
echo Development version activated. External resources (Analytics, Fonts, CDNs) have been removed.
echo.
echo To restore production version, run: npm run prod-html
pause
