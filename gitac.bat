git status
REM enter a comment
set /p commitM=commit -m
git add .
git commit -m "%commitM%"
git status
