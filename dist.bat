if "%1"=="dev" goto xcopy_only
del /q ..\
:xcopy_only
xcopy .\dist\ ..\ /y /s