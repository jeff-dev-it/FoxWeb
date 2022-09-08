# Fox Web - Um encurtador de JavaScript

## Qual é?

FoxWeb é um script JS que visa tornar o JS mais fácil. Pode ser usado tanto no front-end quanto no back-end.

- No navegador
```
<script type="módulo">
    import FoxModule from "https://cdn.jsdelivr.net/gh/Nhac-dev/FoxWeb@latest/sources/JS/FoxWeb.js"

    ...
</script>
```

- No NodeJs
```
$ cd ./my_projects
$ git clone https://github.com/Nhac-dev/FoxWeb
```
* * Arquivo package.json
```
{
    ...
    "type": "module",
    ...
}
```
* * Arquivo index.js
```
import FoxModule from "./FoxWeb/sources/JS/FoxWeb.js"
...
```
Se você quiser usar o modo commonjs, faça:
```
$ cd ./my_projects
$ git clone https://github.com/Nhac-dev/FoxWeb
$ cd ./FoxWeb
```
Abra o tsconfig.json e edite:
```
{
    ...
    "module": "CommonJS",
    ...
}
```
E execute o
```
$ tsc
```
* * Em index.js
```
const FoxModule = require("./FoxWeb/sources/JS/FoxWeb.js");

...
```

* * No Deno JS
```
import FoxModule from "https://cdn.jsdelivr.net/gh/Nhac-dev/FoxWeb@latest/sources/JS/FoxWeb.js"
...
```
## Entendendo a FoxWeb

### Retorna objetos

| Nome | Descrição |
|------|-------------|
| DOM |Objeto que contém métodos para obtenção de elementos dom.|
|$VerifyTypes|Objeto com verificador de tipo|
|$Math|Use a biblioteca de matemática com mais facilidade|
|$Utils|Facilite algumas tarefas|

## DOM
> Funciona apenas no navegador.

| Chaves | Descrição |
|------|----------------|
|$|Transforme um elemento DOM em um DOMFOX.|
|$Fox|Obter um objeto DOM|
|$Foxes|Obter muitos objetos DOM|
|$Create|Criar um objeto DOM|

* Transforme o elemento DOM em DOM FOX
```
import FoxModule from "./FoxWeb/sources/JS/FoxWeb.js";
const {DOM} = FoxModule;
const meuElemento = document.getElementById("meu-elemento");

const meuFoxElement = DOM.$(meuElemento);
```


* Obtenha um DOM FOX
```
const meuFoxElement = DOM.$Fox("#meu-elemento");
```
* Crie um DOM FOX
```
const myFoxElement = DOM.$Create("div", {
    id: "exemplo-criar",
    class: ["cartão", "Olá"],
    pena: myFoxElement
});
// DOM.$Create(tagname, settings_initial?);
// Todo o valor de settings_initial é opcional
```


## $VerifyTypes


| Chaves | Descrição |
|------|----------------|
|IsArray|Verifique se o valor é um array|
|IsNum|Verifique se o valor é um número|
|IsObj|Verifique se valor é um objeto|

* IsArray

```
const linguagens = ["JS", "Go", "Rust"];
const minhaFavLang = linguagens[1]; // Vai

console.log($VerifyTypes.IsArray(linguagens)) // true
console.log($VerifyTypes.IsArray(minhaFavLang)) // false
```

* ÉNum

```
const {IsNum} = $VerifyTypes;
const num1 = 10
const num2 = "a"
const num3 = "20"

console.log(IsNum(num1), IsNum(num2), IsNum(num3))
// saída: true, false, true
// Mesmo sendo uma string, deve retornar true se for um número
```

* IsObject
```
const foxInfo = {
    autor: "Jefferson",
    packageName: "FoxWeb"
};
const linguagens = ["JS", "Go", "Rust"];
 
console.log(IsObj(foxInfo), IsObj(linguagens))

// saída: true, false
// Array não é um objeto neste caso
```

## $Math


| Chaves | Descrição |
|------|----------------|
|RoundNum|Número redondo lógico|
|RoundNumUp|Arredonda o número para cima 5,4 > 6|
|RoundNumDown|Arredonda o número para baixo 5,5 > 5|
|GenRandom|Gerar um número aleatório|

* Exemplos RoundNum
```
const n1 = 5,5
const n2 = 5,4

console.log(
    RoundNum(n1), // 6
    RoundNum(n2), // 5
    RoundNumUp(n1), // 6
    RoundNumUp(n2), // 6
    RoundNumDown(n1), // 5
    RoundNumDown(n2), // 5
)
```

* GenRandom
```
const randomNum = GenRandom(100, 110);
console.log(randomNum);
// output: Qualquer número entre 100 e 110
// GenRandom(min, max);
```

## $Utils

| Chaves | Descrição |
|------|----------------|
|FindAllIndex|Localizar todos os índices de um valor em Array/string|
|GenRandomText|Gen string aleatória|
|MaskText|Mascarar um texto|

* FindAllIndex
```
const languages = ["JS", "Go", "Rust", "JS"];
const language_str = "JS, Go, Rust";

console.log(FindAllIndex(languages, "JS")); // [0, 3]
console.log(FindAllIndex(languages_str, "S")); // [1, 10]

// FindAllIndex(arr, item)
```

* GenRandomText
```
const texto = GenRandomText(10);
const text_mask = GenRandomText(10, {
    noUpChar: true, //O texto não terá letras maiúsculas
    noLowerChar: true, //O texto não terá letras minúsculas
    noSpecial: true, //O texto não terá caractere especial
    templateMask: "##.##-#(#####)"
});
const text_mask2 = GenRandomText(10, {
    noNum: true, // O texto não terá números
    firstChar: "r", // A primeira letra deve ser "r"
    templateMask: "###.##-#(#####)"
}); // Erro: O modelo não corresponde à quantidade de índice do texto

// Sem console.log porque todo o texto é aleatório
```

* MaskText

```
const phone_number = "5500000000000"
const mascarado = MaskText(número_telefone, "+## (##) #####-####)";

console.log(mascarado); // +55 (00) 00000-0000

//MaskText(texto, modelo)
```
*Se a quantidade de # for diferente do comprimento da string, um erro será retornado.*
___
## Modificações em JS Nativo

### No construtor de número
- Método format(x) adicionado - Este método muda de 1 para "01", "001".
- Iterador Adicionado;
```
console.log(10..format("3")); // 010
consolee.log([...3], [...-2]); // [0, 1, 2, 3], [0, -1, -2]
```
### No construtor de objetos
- O método toString agora retorna a string JSON
- Adicionar valores de Método, o retorna todos os valores de Objeto
- Adicionar chaves de método, retorna todas as chaves do objeto
### No construtor String
- Add Method toObject, ela retorna um objeto ou null
- Método toNum adicionado (converter a string para num)
- Método toInt adicionado (converter a string para int num)
- Método toFloat(fractionsDigits) adicionado (converta a string para float string (sim para string, exemplo: "1"..ToFloat(2) -> "1.00", "1.234"..toFloat(2) -> "1.23" ))