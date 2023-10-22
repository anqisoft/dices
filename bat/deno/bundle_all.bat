@ECHO OFF
set original_path=%cd%
cd %original_path% && call _bundle_core const
cd %original_path% && call _bundle_core dice

cd %original_path% && call _bundle_core dom
cd %original_path% && call _bundle_core DPIHelper
cd %original_path% && call _bundle_core svgHelper
cd %original_path% && call _bundle_core storage

cd %original_path% && call _bundle_core DiceBase

cd %original_path% && call _bundle_core DiceFace4
cd %original_path% && call _bundle_core DiceFace6
cd %original_path% && call _bundle_core DiceFace8
cd %original_path% && call _bundle_core DiceFace12
cd %original_path% && call _bundle_core DiceFace20

cd %original_path% && call _bundle_core DiceFace24

cd %original_path% && call _bundle_core DiceFace10
cd %original_path% && call _bundle_core DiceFace14
cd %original_path% && call _bundle_core DiceFace16
cd %original_path% && call _bundle_core DiceFace26
cd %original_path% && call _bundle_core DiceFace60

pause