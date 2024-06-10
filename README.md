# Projeto DIO Base em Lógica de Programação para Jogos
## _Classificador de Nível de Herói_ 
\
### Olá Devs! :raised_hand:

Esse é meu primeiro projeto REAL no bootcamp SANTANDER 2024 :fire:.  
Ele faz parte do módulo **Lógica de Programação para Jogos** desenvolvido pelo Felipão.

### :pushpin: Qual o desafio do projeto?

```
- O Que deve ser utilizado

Variáveis
Operadores
Laços de repetição
Estruturas de decisões

- Objetivo

Crie uma variável para armazenar o nome e a quantidade de
experiência (XP) de um herói, depois utilize uma estrutura
de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

- Saída 
Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
```
Como a gente está careca de saber (desculpa a brincadeira Felipão), não tem nada de novo debaixo do sol :sunny: e assim desenvolvi o projeto usando apenas como base o conteúdo ministrado nas aulas.

#### Para minha surpresa o trabalho ficou uma tremenda M%#$¨* :speak_no_evil:

 :question: E por que isso aconteceu?

Nas aulas, a gente não utilizou entrada de dados do usuários, nós fazíamos a atribuição nas variáveis e exibia as mensagens no console. Isso trazia alguns problemas.

- Para alterar os valores nas variáveis, o usuário deve conhecer o mínimo de lógica de programação, senão o programa se torna inútil.
- Qualquer alteração indevida no código ele pode parar de funcionar e perde sua utilidade.
- É preciso ter um ambiente próprio para codificação para que o programa seja executado.

Daí surgiu uma idéia brilhante!!! **Vamos executar esse projeto no navegador!** :metal:  
Fiz as alterações necessárias para que o projeto tivesse uma interação com o usuário, sendo possível inserir o nome do herói e o valor da sua experiência. Além disso, enfim usei a estrutura de repetição para verificar o valor inserido na experiência, se fosse diferente de número, ele volta e solicita de novo o valor da experiência para o usuário. Já no nome do herói, se não fosse inserido nenhum valor, seria atribuida de forma automática o valor _PLAYER 1_ na variável. :sunglasses:

Ficou muito legal, muito maneiro, mas...Não executava no VSCode :dizzy_face:. E por que isso aconteceu?  
Porque eu usei prompt e alert para fazer a inserção de dados e exibir mensagem para o usuário e não funcionam no NodeJS. Aí a raiva reinou. :sweat_smile:

Voltei para a IDE e fui implementar um código que funcionasse bem no NodeJS e enfim rodou no VSCode e tudo era exibido como uma linha de comando do cmd do windows.

Daí surgiu uma nova ideia :smiling_imp: (preciso parar de ter ideias, estou agarrado no curso), por que não desenvolver esse projeto em batch script?  
É simples e qualquer um consegue executar apenas dando 2 cliques no arquivos. Pois bem, está feito! :yum:

Esse foi o projeto e espero que esteja bem documentado para que qualquer um possa entender.

| Versão | Link |
| ------ | ------ |
| Básica sem interação com usuário | [https://codepen.io/][codeInicial] [https://github.com/][githubInicial] |
| Executada no navegador | [https://codepen.io/][codepen] [https://github.com/][githubPrompt]|
| Executada com NodeJS | [https://github.com/][githubNode] |
| Batch Script | [https://github.com/][githubBatch] |


[//]: # (Esses são links de referência usados ​​no corpo desta nota e são removidos quando o processador de remarcação faz seu trabalho. Não há necessidade de formatar bem porque não deve ser visto. Obrigado, então - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax
   MARKDOWN CRIADO NO SITE https://dillinger.io/
)

   [codepen]: <https://codepen.io/mteo/pen/abryjom>
   [codeInicial]: <https://codepen.io/mteo/pen/jOoLjNR?editors=0011>
   [githubNode]: <https://github.com/mteodev/nivel-do-heroi/blob/main/src/nivel-heroi-node.js>
   [githubBatch]: <https://github.com/mteodev/nivel-do-heroi/blob/main/src/nivel-heroi.bat>
   [githubInicial]: <https://github.com/mteodev/nivel-do-heroi/blob/main/src/nivel-heroi-inicial.js>
   [githubPrompt]: <https://github.com/mteodev/nivel-do-heroi/blob/main/src/nivel-heroi-codepen.js>

