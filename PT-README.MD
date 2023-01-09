# Fox Web - Um encurtador de JavaScript

## Qual é?

FoxWeb é um script JS que visa tornar o JS mais fácil. Pode ser usado tanto no front-end quanto no back-end.

- No navegador
```html
<script type="module">
    import FoxModule from "https://cdn.jsdelivr.net/gh/jefferson-developer-it/FoxWeb@latest/JS/FoxWeb.js"

    ...
</script>
```

> Na versão 3.1 saiu o FoxScript, uma versão integrada para navegador, diferente do exemplo acima você pode ter acesso fora do módulo

```html
<head>
    <script>
            var FoxScript = {};
    </script>
    <script src="../JS/FoxScript.js" type="module"></script>
</head>
```
<<<<<<< HEAD
import FoxModule from "https://cdn.jsdelivr.net/gh/jefferson-developer-it/FoxWeb@latest/JS/FoxWeb.js"
=======
O FoxScript será equivalente ao FoxModule, você poderá usar tudo conforme a documentação abaixo, trocando FoxModule por FoxScript.

- No Deno
```js
import {FoxModule} from "https://cdn.jsdelivr.net/gh/jefferson-developer-it/FoxWeb@latest/JS/FoxWeb.js"
>>>>>>> 318a363274816ad912723fd737f60efe7186c0cb
```
<a href="https://github.com/jefferson-developer-it/FoxWebNode">Para NodeJS leia aqui</a>


## Entendendo a FoxWeb

### Retorna objetos

| Nome | Descrição |
|------|-------------|
| DOM |Objeto que contém métodos para obtenção de elementos dom.|
|$VerifyTypes|Objeto com verificador de tipo|
|$Math|Use a biblioteca de matemática com mais facilidade|
|$Utils|Facilite algumas tarefas|
|HTTP|Realize Requisições HTTP|

## DOM
> Funciona apenas no navegador.

| Chaves | Descrição |
|------|----------------|
|$|Transforme um elemento DOM em um DOMFOX.|
|$Fox|Obter um objeto DOM|
|$Foxes|Obter muitos objetos DOM|
|$Create|Criar um objeto DOM|

* Transforme o elemento DOM em DOM FOX
```js
import FoxModule from "./FoxWeb/sources/JS/FoxWeb.js";
const {DOM} = FoxModule;
const meuElemento = document.getElementById("meu-elemento");

const meuFoxElement = DOM.$(meuElemento);
```


* Obtenha um DOM FOX
```js
const meuFoxElement = DOM.$Fox("#meu-elemento");
```
* Crie um DOM FOX
```js
const myFoxElement = DOM.$Create("div", {
    id: "exemplo-criar",
    class: ["cartão", "Olá"],
    pena: myFoxElement
});
// DOM.$Create(tagname, settings_initial?);
// Todo o valor de settings_initial é opcional
```

## Manipulação DOM

```js
element.$Env("evento_nome", (e)=>{...});
.OnPress(func) // Executa func no evento de click
.OnRightPress(func) // Executa func no evento de click com botão direito
.OnHover(func) // Executa func o evento quando o mouse entra no elemento
.OnHoverOut(func)// Executa func o evento quando o mouse sai no elemento
.OnSubmit(func) // Executa func o evento quando o formulário e submitado
.OnChange(func)// Executa func o evento altera o valor do input 
.OnKeyDown(func) // Quando clica uma tecla
.OnKeyUp(func) // Quando solta a tecla
.OnKeyPress(func) // Quando pressiona a tecla 

.GetContent(tipo="txt") // Retorna o conteúdo do element, tipo: "html" || "txt"
.GetHTML() // Retorna o conteúdo html
.GetTXT() // Retorna o conteúdo de text
.SetContent(tipo="txt", conteúdo, adicionar?=false)
//Coloque um conteúdo no elemento
.SetHTML(conteúdo)
.SetTXT(conteúdo)
.AddHTML(conteúdo)
.AddTXT(conteúdo)
.Remove() // Remove ele do elemento pai
.RemoveChild(index) // remove um elemento filho(pelo index)
.GetChild(index)//Obtenha um elemento filho
.AddChild(...child) // Adicione um elemento filho
.$Styles({object}) // Adicione estilo ao elemento
.AddClass(...class) // Adicione uma/ou mais classe/s
.DeleteClass(...class) // Remova uma/ou mais classe/s
.AddProps(prop, valor) // adicione uma propriedade
.DeleteProps(prop) // Remova uma propriedade
.GetProps(prop) // Obtenha uma prop
.SetID(ID) // adicione um ID ao elemento
.GetVal() // Obtenha o valor de "value"
.SetSettings(settings) // Adicione configurações
```
No elemento retornado por $Foxes essas propriedades poderão ser acessadas para manipular todos daquele array, obs. Alguns desses métodos não estão presente no foxes. Apenas nos itens individuais.
```js
elmFoxes[0] 
// ou
elmFoxes.elms[0] 
```

### Sobre o SetSettings
O valor do parâmetro deve ser algo como:
```js
{
    id?: String, // id
    typeBtn?: "button" | "submit" // tipo de botão
    typeInput?: "text" | "email" | "password" | "search" | "date", // tipo de input
    placeholder?: string, // placeholder se for input
    class?: string[], // classes ["str", "a"]
    initialInputValue?: string, // valor inicial (input)
    text?: string, // texto
    textHTML?: string, // Texto em HTML
    rel?: string, // valor do atributo rel
    href?: string, // Valor de href
    style?: StylesFoxes, // estilos em forma de objeto
    feather?: $FoxElm // Elemento Pai
}
```

## $VerifyTypes


| Chaves | Descrição |
|------|----------------|
|IsArray|Verifique se o valor é um array|
|IsNum|Verifique se o valor é um número|
|IsObj|Verifique se valor é um objeto|

* IsArray

```js
const linguagens = ["JS", "Go", "Rust"];
const minhaFavLang = linguagens[1]; // Vai

console.log($VerifyTypes.IsArray(linguagens)) // true
console.log($VerifyTypes.IsArray(minhaFavLang)) // false
```

* isNum

```js
const {IsNum} = $VerifyTypes;
const num1 = 10
const num2 = "a"
const num3 = "20"

console.log(IsNum(num1), IsNum(num2), IsNum(num3))
// saída: true, false, true
// Mesmo sendo uma string, deve retornar true se for um número
```

* IsObject
```js
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
```js
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
```js
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
```js
const languages = ["JS", "Go", "Rust", "JS"];
const language_str = "JS, Go, Rust";

console.log(FindAllIndex(languages, "JS")); // [0, 3]
console.log(FindAllIndex(languages_str, "S")); // [1, 10]

// FindAllIndex(arr, item)
```

* GenRandomText
```js
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

```js
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
```js
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

# HTTP
> Use o SendRequest para enviar requisições
```js
const res = FoxModule.HTTP.SendRequest("http://example.com", {
    body: {},
    method: "GET",
    headers: {
        "content-type": "application/json"
    },
    query: {
        labelName: "teste"
    }
})

// FoxModule.HTTP.SendRequest(uri, config?)


res.then(rs=>{
    console.log(rs.res);
    console.log(rs.resJSON); // Objeto JSON convertido
})
```

> Crie instancias para facilitar suas requisições:
```js
const base = FoxModule.HTTP.RequestInstance("http://www.example.com")
const api = base.instance("/list");

api.send("/1").then(d=>{
    console.log(d.resJSON);
})

// use api.instance para criar uma nova instancia
```
> Converta query:
```js
const myQuery = {
    name: "jeff",
    token: "xxx-xxx.23.aa"
}

const stringQuery = FoxModule.HTTP.QueryParser(myQuery)
// ou: FoxModule.HTTP.QueryParser(myQuery, "string")
// ?name=jeff&token=xxx-xxx.23.aa
const objQuery = FoxModule.HTTP.QueryParser("?app=Fox", "object")
// {app: "Fox"}
```