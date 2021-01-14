cd .\src\components

# npm version patch
vue build --target lib --name eudoFront eudo-front.js

Get-ChildItem -Path ".\dist" -Exclude "*.html" | Move-Item -Force -Destination "F:\Projets\_Eudo\DEV\eudonetXRM\XRM\IRISBlack\Front\Scripts\libraries\eudofront"

cd..
cd..
