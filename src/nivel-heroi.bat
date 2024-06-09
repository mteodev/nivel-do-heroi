REM Comentários em batch são inseridos usando o comando REM e & REM é utilizado no final de uma linha para explicar

REM Código utilizado para funcionar os acentos de forma correta.
chcp 65001

REM Limpa a tela
@echo off
cls

REM Código para leitura do nome através de entrada do usuário, se não for digitado, PLAYER 1 é atribuido a variável.
:lerNome
set /p nome=Digite o nome do herói: 
if "%nome%"=="" (
    set nome=PLAYER 1
    echo O nome do Herói não foi digitado e será chamado de %nome%
)

REM Código para leitura da experiência através de entrada do usuário, se não for digitado um número válido, PLAYER, exibe uma mensagem na tela e solicita novamente a inserção do valor da experiência até que a condição seja satisfeita.
:lerXP
set /p xp=Digite o valor da experiência do herói: 
for /f "delims=" %%a in ('echo %xp% ^| findstr /r "[0-9]"') do set valid=%%a
if "%valid%"=="" (
    echo Por favor, digite um valor numérico válido para a experiência.
    goto lerXP
)

REM Atribui o valor da variável nível de acordo com o valor da experiência usando a estrutura de decisão if
set nivel=
if %xp% leq 1000 (
    set nivel=Ferro
) else if %xp% leq 2000 (
    set nivel=Bronze
) else if %xp% leq 5000 (
    set nivel=Prata
) else if %xp% leq 7000 (
    set nivel=Ouro
) else if %xp% leq 8000 (
    set nivel=Platina
) else if %xp% leq 9000 (
    set nivel=Ascendente
) else if %xp% leq 10000 (
    set nivel=Imortal
) else (
    set nivel=Radiante
)


REM Exibe a mensagem com nome do usuário e nível para o usuário
echo O Herói de nome %nome% está no nível de %nivel%

REM Comando para aguardar que uma tecla seja digitada para fechar a janela, sem ele, o usuário não leria a mensagem após ser exibida na tela.
pause
