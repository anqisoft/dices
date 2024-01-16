set pwd=%cd%\
start "" _bundle_test_core index

ping 127.0.0.1 -n 3 >nul
cd %pwd%..\..\test\bat\
compressJs.bat