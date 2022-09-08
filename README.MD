# Fox Web - A JavaScript Shortener

## Which is?

FoxWeb is a JS script that aims to make JS easier. It can be used on both frontend and backend.

- On Browser
```
<script type="module">
    import FoxModule from "https://cdn.jsdelivr.net/gh/Nhac-dev/FoxWeb@latest/sources/JS/FoxWeb.js"

    ...
</script>
```

- On NodeJs
```
$ cd ./my_projects
$ git clone https://github.com/Nhac-dev/FoxWeb
``` 
* * On package.json 
```
{
    ...
    "type": "module",
    ...
}
```
* * On index.js 
```
import FoxModule from "./FoxWeb/sources/JS/FoxWeb.js"
...
```
If you want to use commonjs mode do:
```
$ cd ./my_projects
$ git clone https://github.com/Nhac-dev/FoxWeb
$ cd ./FoxWeb
``` 
Open the tsconfig.json and edit:
```
{
    ...
    "module": "CommonJS",
    ...
}
```
And run the 
```
$ tsc
```
* * On index.js 
```
const FoxModule = require("./FoxWeb/sources/JS/FoxWeb.js");

...
```

* * On Deno JS
```
import FoxModule from "https://cdn.jsdelivr.net/gh/Nhac-dev/FoxWeb@latest/sources/JS/FoxWeb.js"
...
```
## Understanding FoxWeb

### Return objects

| Name | Description |
|------|-------------|
| DOM  |Object that contains methods for obtaining dom Elements.|
|$VerifyTypes|Object with type checker|
|$Math|Use the Math Library Easier|
|$Utils|Make it easy to do some tasks|

## DOM 
> Work only in browser.

| Children | Description |
|------|----------------|
|$|Transform a DOM element into a DOMFOX.|
|$Fox|Get a DOM object|
|$Foxes|Get many DOM object|
|$Create|Create a Object DOM|

* Transform legacy in DOM FOX
```
import FoxModule from "./FoxWeb/sources/JS/FoxWeb.js";
const {DOM} = FoxModule;
const myElement = document.getElementById("my-element");

const myFoxElement = DOM.$(myElement);
```


* Get a DOM FOX
```
const myFoxElement = DOM.$Fox("#my-element");
```
* Create a DOM FOX
```
const myFoxElement = DOM.$Create("div", {
    id: "example-create",
    class: ["card", "Hello"],
    feather: myFoxElement 
});
// DOM.$Create(tagname, settings_initial?);
// All Value of settings_initial is optional
```


## $VerifyTypes


| Children | Description |
|------|----------------|
|IsArray|Verify if value is a array|
|IsNum|Verify if value is a number|
|IsObj|Verify if value is a object|

* IsArray

```
const languages = ["JS", "Go", "Rust"];
const myFavLang = languages[1]; // Go

console.log($VerifyTypes.IsArray(languages)) // true
console.log($VerifyTypes.IsArray(myFavLang)) // false
```

* IsNum

```
const {IsNum} = $VerifyTypes;
const num1 = 10
const num2 = "a"
const num3 = "20"

console.log(IsNum(num1), IsNum(num2), IsNum(num3))
// output: true, false, true
// Even though it's a string it should return true if it's a number
```

* IsObject
```
const foxInfo = {
    author: "Jefferson",
    packageName: "FoxWeb"
};
const languages = ["JS", "Go", "Rust"];
 
console.log(IsObj(foxInfo), IsObj(languages))

// output: true, false
// Array is not an object in this case
```

## $Math


| Children | Description |
|------|----------------|
|RoundNum|Logical Round Num|
|RoundNumUp|Round num to up 5.4 > 6|
|RoundNumDown|Round num to down 5.5 > 5|
|GenRandom|Gen a random num|

* Examples RoundNum
```
const n1 = 5.5
const n2 = 5.4

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
// output: Any number between 100 and 110
// GenRandom(min, max);
```

## $Utils

| Children | Description |
|------|----------------|
|FindAllIndex|Find all index of a value in Array/string|
|GenRandomText|Gen random string|
|MaskText|Mask a text|

* FindAllIndex
```
const languages = ["JS", "Go", "Rust", "JS"];
const languages_str = "JS, Go, Rust";

console.log(FindAllIndex(languages, "JS")); // [0, 3] 
console.log(FindAllIndex(languages_str, "S")); // [1, 10] 

// FindAllIndex(arr, item)
```

* GenRandomText
```
const text = GenRandomText(10);
const text_mask = GenRandomText(10, {
    noUpChar: true, //The text will not have uppercase letters
    noLowerChar: true, //The text will not have lowercase letters
    noSpecial: true, //The text will not have special char
    templateMask: "##.##-#(#####)"
});
const text_mask2 = GenRandomText(10, {
    noNum: true, // The text will no have numbers
    firstChar: "r", // The first letter must be "r"
    templateMask: "###.##-#(#####)"
}); // Error: The template does not match the amount of index of the text

// No console.log because all text is random
```

* MaskText

```
const phone_number = "5500000000000"
const masked = MaskText(phone_number, "+## (##) #####-####)";

console.log(masked); // +55 (00) 00000-0000

//MaskText(text, template)
```
*If the amount of # is different from the length of the string, an error will be returned.*
___
## Modifications in Native JS

### In Number constructor
- Add Method format(x) - This method change 1 to "01", "001".
- Add Iterator
```
console.log(10..format("3")); // 010
console.log([...3], [...-2]); // [0, 1, 2, 3], [0, -1, -2]
```
### In Object constructor
- Method toString now return JSON string
- Add Method values, the returns all values of Object 
- Add Method keys, the returns all keys of Object 
### In String constructor
- Add Method toObject, her return a object or null
- Add Method toNum (convert the string to num)
- Add Method toInt (convert the string to int num)
- Add Method toFloat(fractionsDigits) (convert the string to float string(yes to string, example: "1"..ToFloat(2) -> "1.00", "1.234"..toFloat(2) -> "1.23"))


