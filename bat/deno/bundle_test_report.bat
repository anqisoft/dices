set pwd=%cd%\
set filename=report

start "" _bundle_test_core %filename%
ping 127.0.0.1 -n 3 >nul
cd %pwd%..\..\test\bat\
compressJs_%filename%.bat