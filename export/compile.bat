@ECHO OFF

if [%1] == [] (
echo:
echo Nessun linguaggio specificato, compilo tutti i linguaggi
echo:

compile.bat cpp
exit
)

:: nome del file di output, modifica questo campo per avere un nome personalizzato
set OUTPUT=manuale_%1

:: se non viene inserito un nome, lo si recupera dal nome della cartella
if [%OUTPUT%] == [] (
for %%I in (.) do set OUTPUT=%%~nxI
)

:: crea la cartella per gli output
if not exist ".\output" mkdir .\output


:: nomi dei file di output che verranno generati
set PDFNAME="./output/%OUTPUT%.pdf"
set WEBNAME="./output/%OUTPUT%.html"
set EPUBNAME="./output/%OUTPUT%.epub"

if %1 == cpp (set "TITLE=C++")
if %1 == java (set "TITLE=Java")
if %1 == c (set "TITLE=C")
if %1 == py (set "TITLE=Python")
if %1 == python (set "TITLE=Python")
if %1 == algo (set "TITLE=Algoritmi e Strutture Dati")
if %1 == compu (set TITLE="Teoria della Complessita'")

if %1 == cpp (set COLOR="FFFFFF")
if %1 == java (set COLOR="FFFFFF")
if %1 == c (set COLOR="FFFFFF")
if %1 == python (set COLOR="22496a")
if %1 == algo (set COLOR="FFFFFF")
if %1 == compu (set COLOR="000000")

SETLOCAL EnableDelayedExpansion 

:: recupera la lista di file contenuti in includes.txt
for /f "Tokens=* Delims=" %%x in (includes/includes_%1.txt) do set files=!files! "../docs/%%x"

:: notifica l'utente della creazione del file
echo Creazione in corso dei file:
for /f "Tokens=* Delims=" %%x in (includes/includes_%1.txt) do echo - "%%x"
echo:

:: esegue il comando di creazione
echo Creazione "%OUTPUT%.pdf" in corso...
pandoc --pdf-engine=xelatex -s %files% -o %PDFNAME% --from markdown --template eisvogel --listings --number-sections -V lang=it --top-level-division=chapter -V toc=true --resource-path="./docs/" --standalone --embed-resources --metadata-file=config.yaml -V title=%TITLE% -V titlepage-background="./backgrounds/background_%1.pdf" -V titlepage-text-color=%COLOR% --toc-depth=2 --filter pandoc-latex-environment
echo Compilazione PDF terminata.
echo:

:: export per la visualizzazione web
:: echo Creazione "%OUTPUT%.html" in corso...
:: pandoc -s %files% -o %WEBNAME% --template=elegant_bootstrap_menu.html --toc --standalone --embed-resources --resource-path="./output/" --metadata-file=config.yaml
:: echo Compilazione HTML terminata.
:: echo:

:: export per la visualizzazione epub
:: echo Creazione "%OUTPUT%.epub" in corso...
:: pandoc -s %files% -o %EPUBNAME% --standalone --embed-resources --resource-path="./output/" --metadata-file=config.yaml --toc --css ./assets/epub.css
:: echo Compilazione EPUB terminata.
:: echo:

:: --resource-path="./output/" specifica a partire da quale path recuperare le risorse, lo rende coerente al md
:: --standalone --embed-resources permette il funzionamento anche fuori dalla cartella

echo Esportazione terminata.
timeout 5