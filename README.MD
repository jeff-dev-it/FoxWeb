# Fox Web - A JavaScript Shortener

## Which is?

FoxWeb is a JS script that aims to make JS easier. It can be used on both frontend and backend.

- In the browser
```
<script type="module">
    import {FoxModule} from "https://cdn.jsdelivr.net/gh/Nhac-dev/FoxWeb@latest/JS/FoxWeb.js"

    ...
</script>
```

<a href="https://github.com/Nhac-dev/FoxWebNode">For NodeJS read here</a>

- In the Den
```
import FoxModule from "https://cdn.jsdelivr.net/gh/Nhac-dev/FoxWeb@latest/JS/FoxWeb.js"
```

## Understanding FoxWeb

### Return objects

| Name | Description |
|------|-------------|
| DOM |Object that contains methods for obtaining dom elements.|
|$VerifyTypes|Object with type checker|
|$Math|Use the math library more easily|
|$Utils|Make some tasks easier|

## SUN
> Works in browser only.

| Keys | Description |
|------|----------------|
|$|Transform a DOM element into a DOMFOX.|
|$Fox|Get a DOM object|
|$Foxes|Get too many DOM objects|
|$Create|Create a DOM object|

* Transform DOM element into DOM FOX
```
import FoxModule from "./FoxWeb/sources/JS/FoxWeb.js";
const {DOM} = FoxModule;
const myElement = document.getElementById("my-element");

const myFoxElement = DOM.$(myElement);
```


* Get a FOX DOM
```
const myFoxElement = DOM.$Fox("#my-element");
```
* Create a FOX DOM
```
const myFoxElement = DOM.$Create("div", {
    id: "example-create",
    class: ["card", "Hello"],
    feather: myFoxElement
});
// DOM.$Create(tagname, settings_initial?);
// All settings_initial value is optional
```

## DOM manipulation

```
element.$Env("event_name", (e)=>{...});
.OnPress(func) // Execute func on click event
.OnRightPress(func) // Execute func on right click event
.OnHover(func) // Execute the func event when the mouse enters the element
.OnHoverOut(func)// Executes the func event when the mouse leaves the element
.OnSubmit(func) // Execute the func event when the form is submitted
.OnChange(func)// Executes func the event changes the input value
.OnKeyDown(func) // When a key is clicked
.OnKeyUp(func) // When the key is released
.OnKeyPress(func) // When pressing the key

.GetContent(type="txt") // Returns the content of the element, type: "html" || "txt"
.GetHTML() // Returns the html content
.GetTXT() // Returns the content of text
.SetContent(type="txt", content, add?=false)
//Put content in the element
.SetHTML(content)
.SetTXT(content)
.AddHTML(content)
.AddTXT(content)
.Remove() // Remove it from the parent element
.RemoveChild(index) // remove a child element(by index)
.GetChild(index)//Get a child element
.AddChild(...child) // Add a child element
.$Styles({object}) // Add style to element
.AddClass(...class) // Add one/or more class/s
.DeleteClass(...class) // Remove one/or more class/s
.AddProps(prop, value) // add a property
.DeleteProps(prop) // Remove a property
.GetProps(prop) // Get a prop
.SetID(ID) // add an ID to the element
.GetVal() // Get the value of "value"
.SetSettings(settings) // Add settings
```
In the element returned by $Foxes these properties can be accessed to manipulate all of that array, obs. Some of these methods are not present in Foxes. Only on individual items.
```
elmFoxes[0]
// or
elmFoxes.elms[0]
```

### About SetSettings
The parameter value should be something like:
```
{
    id?: String, // id
    typeBtn?: "button" | "submit" // button type
    typeInput?: "text" | "email" | "password" | "search" | "date", // input type
    placeholder?: string, // placeholder if input
    class?: string[], // classes ["str", "a"]
    initialInputValue?: string, // initial value (input)
    text?: string, // text
    textHTML?: string, // HTML text
    rel?: string, // value of the rel attribute
    href?: string, // Value of href
    style?: StylesFoxes, // styles in object form
    feather?: $FoxElm // Parent Element
}
```

## $VerifyTypes


| Keys | Description |
|------|----------------|
|IsArray|Check if the value is an array|
|IsNum|Check if the value is a number|
|IsObj|Check if value is an object|

* isArray

```
const languages ​​= ["JS", "Go", "Rust"];
const myFavLang = languages[1]; // Go

console.log($VerifyTypes.IsArray(languages)) // true
console.log($VerifyTypes.IsArray(myFavLang)) // false
```

* ÉNum

```
const {IsNum} = $VerifyTypes;
const num1 = 10
const num2 = "a"
const num3 = "20"

console.log(IsNum(num1), IsNum(num2), IsNum(num3))
// output: true, false, true
// Even though it's a string, it should return true if it's a number
```

* isObject
```
const foxInfo = {
    Author: "Jefferson",
    packageName: "FoxWeb"
};
const languages ​​= ["JS", "Go", "Rust"];
 
console.log(IsObj(foxInfo), IsObj(languages))

// output: true, false
// Array is not an object in this case
```

## $Math


| Keys | Description |
|------|----------------|
|RoundNum|Logical round number|
|RoundNumUp|Rounds the numberro up 5,4 > 6|
|RoundNumDown|Rounds the number down 5.5 > 5|
|GenRandom|Generate a random number|

* RoundNum Examples
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

| Keys | Description |
|------|----------------|
|FindAllIndex|Find all indexes of a value in Array/string|
|GenRandomText|Gen random string|
|MaskText|Mask a text|

* FindAllIndex
```
const languages ​​= ["JS", "Go", "Rust", "JS"];
const language_str = "JS, Go, Rust";

console.log(FindAllIndex(languages, "JS")); // [0, 3]
console.log(FindAllIndex(languages_str, "S")); // [1, 10]

// FindAllIndex(arr, item)
```

* GenRandomText
```
const text = GenRandomText(10);
const text_mask = GenRandomText(10, {
    noUpChar: true, //Text will not be capitalized
    noLowerChar: true, //Text will not be lowercase
    noSpecial: true, //Text will have no special character
    templateMask: "##.##-#(#####)"
});
const text_mask2 = GenRandomText(10, {
    noNum: true, // Text will not have numbers
    firstChar: "r", // The first letter must be "r"
    templateMask: "###.##-#(#####)"
}); // Error: Template does not match text index amount

// No console.log because all text is random
```

* MaskText

```
const phone_number = "55000000000000"
const masked = MaskText(phone_number, "+## (##) #####-####)";

console.log(masked); // +55 (00) 00000-0000

//MaskText(text, template)
```
*If the amount of # is different from the length of the string, an error will be returned.*
___
## Modifications in Native JS

### In the number constructor
- Added format(x) method - This method changes from 1 to "01", "001".
- Added iterator;
```
console.log(10..format("3")); // 010
consolee.log([...3], [...-2]); // [0, 1, 2, 3], [0, -1, -2]
```
### In object constructor
- The toString method now returns the JSON string
- Add Method values, returns all Object values
- Add method keys, returns all object keys
### In the String constructor
- Add Method toObject, it returns an object or null
- Added toNum method (convert string to num)
- Added toInt method (convert string to int num)
- Added method toFloat(fractionsDigits) (convert string to float string (yes to string, example: "1"..ToFloat(2) -> "1.00", "1.234"..toFloat(2) -> "1.23" ))