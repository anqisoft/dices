@echo off
set filename=simple
set pwd=%cd%\..\js\
set src=%pwd%%filename%.js
set goal=%pwd%%filename%.min.js
start /B "" uglifyjs %src% -m -o %goal%