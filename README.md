# Chat App

## About the Project
### In this project, the main focus was to make a Chat App
### that looks like whatsapp and telegram, using JS,Html and
### Css.
### We had the freedom to make it on our way, that means that doesn't specialy need to look like whatsapp and telegram 

## TODO LIST

- [x] INTER
- [x] MESSAG
- [x] TEXTAR
- [x] KEYB
- [x] EMOJI
- [x] CEC
- [x] DELET
- [x] MAJUS
- [x] ESPAI
- [x] SALT
- [x] GRID
- [x] FLEX
- [x] RESP
- [x] CENTR
- [x] FONTS
- [ ] VARS
- [x] STYLE-DIW
- [x] STYLE-DWEC
- [x] SEPAR
- [x] EMOJ
- [ ] PENJA
- [ ] ALTRES



### INTER
---
 The Chat App is divided in tree parts, the "message Area", were the  
 messages and the date will be displayed, to be able to send the messages we need to have a place to write the message and send it, this will be the  "send Area", that we going to be able to find emojis too, and finally we have the keyboard, were we going to be able to write our messages.  

### MESSAG
---

I create a `new Date` object,
    
    const date = new Date()
 
for then later on get the month(short),day,hour and minuts

    const hours = date.getHours().toLocaleString()
    const minutes = date.getMinutes().toLocaleString()
    const day = date.getDate().toLocaleString()
    const nameMonth = date.toLocaleString('default', { month: 'short' })

### TEXTAR
---

When we send a message, this one needs to be displayed on the text Area,

So the first thing we do is  add an `addEventListener()`, to register the click event

    

    document.getElementById('sendButton').addEventListener('click', () => {
 
 Now we need to get the input of the user `inputValue`, the place were the message will be displayed `areaMessage`, we need to create the element too `createParagraf`, another thing that we need is the length of the input, like that we can measure the width that the message will have `lenginp`, and finally we need a variable that appends the message inside the area Message `appendChild`    

   
        let inputValue = document.getElementById('keyValue').value //input value
        let areaMessage = document.querySelector('.messageArea') // area message
        let createParagraf = document.createElement('h3') // create p element
        let lenginp = inputValue.length
        let appendChild = areaMessage.appendChild(createParagraf)

Now that `createParagraf` is appended inside the `areaMessage`, we need to add content to it, for this, the variable `appendChild` will innerHTML from `inputValue`, plus a `h6` that will contain the date

        appendChild.innerHTML =
            document.getElementById('keyValue').value + ' ' + `<h6 class="dateSendStyle" >${hours}:${minutes}</h6>`

When the message is in the `areaMessage`, then we need to add style to it, 
for this i will use `className`

        appendChild.className = 'message'

So now the last thing is to get the `lenginp`, and add some width to it

        appendChild.style.width = lenginp + 9 + 'vh'

last we remove the text from the textarea, like that the user will add more messages

        document.getElementById('keyValue').value = document.getElementById('keyValue').value.replace(inputValue, '')
    })



### KEYB
---
For the keyboard, i wanted to make a loop, like that i will not have repetead code.


First we need to add the same class to all the letters and specials keys,
after that we use `querySelectorAll()`, to get a nodeList

    var arrBtn = document.querySelectorAll('.btn')

We need a  global counter `contadorShift`, to count the times that the shift button was clicked
    
    var contadorShift = 0


We use forEach loop, and add an `addEventListener()` to every element inside the nodeList to register a click event

    arrBtn.forEach((element) =>
        element.addEventListener('click', () => {


We get the shift class, to style it depending on the state

    let shift = document.querySelector('.shiftStyle')


if the shift wasn't pressed, then it will return the letter in `lowerCase()`, however if the shift was pressed one time, it will return the letter in uppercase, after that will return all the buttons in lowercase, but if the shift was pressed two times, it will return the letters in `upperCase()` and 
last if the shift was pressed tree times it will return the letters in `lowerCase()` and set the counter to 0

                if (contadorShift == 0) {
                    return (document.getElementById('keyValue').value +=
                        element.innerHTML.toLowerCase())
                }
                if (contadorShift == 1) {
                    document.getElementById('keyValue').value +=
                        element.innerHTML.toUpperCase()
                    arrBtn.forEach((e) => (e.style.textTransform = 'lowercase'))
                    shift.style.backgroundColor = '#e9e9ed'
                    contadorShift = 0
                } else if (contadorShift == 2) {
                    return (document.getElementById('keyValue').value +=
                        element.innerHTML.toUpperCase())
                } else {
                    if (contadorShift == 3) {
                        return (document.getElementById('keyValue').value +=
                            element.innerHTML.toLowerCase())
                    }
                }
            })
        )





### EMOJI
---

All the emojis are inside of a div, this div is not visible until the emoji button is clicked, if it's clicked the div that contains the letters will 
 hidde, and the emojis will be visible.  

 We add a 

    
    var emojiContador = 0

 
 If we look at the code, first we get all the emojis

    let emojiButton = document.getElementById('emojiButton')

We add an `addEventListener()`, to register the click event

    emojiButton.addEventListener('click', () => {

we get the keyboard div and the emoji div, and store it inside let variable

        let emojiBox = document.getElementById('emojiBox')
        let keybord = document.getElementById('keybordBox')

We add one to the counter-revisa

        emojiContador++

If the counter is equal to one, then the first conditional will be true,
and will hidde the keyboard div and show the emoji div

        if (emojiContador == 1) {
            keybord.style.visibility = 'hidden'
            emojiBox.style.visibility = 'visible'
        } 
Else if the counter is equal to two, will hidde the emoji div and show the keyboard div, then the counter will be equal to 0.

        else {
            if (emojiContador == 2) {
                emojiBox.style.visibility = 'hidden'
                keybord.style.visibility = 'visible'
                emojiContador = 0
            }
        }
    })

To be able to show the emojis, first in the html, i added the same class to every emoji, like that i will be able to get a nodeList with `querySelectorAll()`

    let emoj = document.querySelectorAll('.emoj')

Now we use a forEach loop, to print the emoji inside the textarea

    emoj.forEach((elem) =>
        elem.addEventListener('click', () => {
            document.getElementById('keyValue').value += elem.innerHTML
        })
    )

    
### CE C
---
When clicking `CE` it will delete the last word in a sentence, however when clicking `C`, it will delete all the message from the textarea

First we need to check if the button is equal to `C`

    else if (element.innerHTML === 'C') {

if it's equal, we need to get the input of the user `inputValue`

        let inputValue = document.getElementById('keyValue').value

Then we replace the actual value for `''`, this will delete all the message in the textarea

        return (document.getElementById('keyValue').value = document
                                                        .getElementById('keyValue')
                                                        .value.replace(inputValue, ''))
    } 
If the button that was pressed equals to `CE`

    else if (element.innerHTML === 'CE') {

We need to get the input of the user `inputValue`

        let inputValue = document.getElementById('keyValue').value

Now, we replace the actual value for the new one, that will start from the index 0 and will end to the last index.

        return (document.getElementById('keyValue').value = document
            .getElementById('keyValue')
            .value.substr(0, inputValue.lastIndexOf(' ')))
    } 



### DELET
---

when we delete, we have to ways to make it,first we have the `←` this will delete the last letter on the `textarea`, and `→` will delete the first letter on the `textarea`.

First we need to check if it's equal to `←`

    else if (element.innerHTML === '|--') {

if it's equal, then we need to get the input of the user `inputValue`

        let inputValue = document.getElementById('keyValue').value

And replace the `inputValue` without the last letter

        return (document.getElementById('keyValue').value = document
            .getElementById('keyValue')
            .value.substr(0, inputValue.length - 1))
    } 

However if it's equal to `→`

    else if (element.innerHTML === '--|') {

We need to get the input of the user `inputValue`

        let inputValue = document.getElementById('keyValue').value

And replace the `inputValue`without the first letter

        return (document.getElementById('keyValue').value =
            inputValue.substring(1))
    } 

### MAJUS
---
I guess that the shift button was the most complicated to make, because i didn't know from were to start, i came to the conclusión that the best option was to make a counter, this counter will only reach to tree, because the shift only has tree states.

First we need to check if button clicked is equal to shift

    else if (element.innerHTML === 'shift') {
if  it's true, then `contadorShift` will equal to +1

        contadorShift++

we get the shift class to style it later, `shiftStyle`

        let shift = document.querySelector('.shiftStyle')

Now if contador equals to one, css style will be applied, and i use a forEach, to `textTransform` all the buttons

        if (contadorShift == 1) {
            shift.style.backgroundColor = 'cyan'
            arrBtn.forEach((e) => (e.style.textTransform = 'uppercase'))
        } 
however if the `contadorShift` equals to two, some css will be applied

        else if (contadorShift == 2) {
            shift.style.border = 'thick solid black'
        }
and if `contadorShift` doesn't equal one or two, some css will be applied to restore the same background as before,and used a forEach  to `textTransform` all the buttons to lowercase, finally set `contadorShift` to 0

         else {
            shift.style.backgroundColor = '#e9e9ed'
            shift.style.border = '#e9e9ed'
            arrBtn.forEach((e) => (e.style.textTransform = 'lowercase'))
            contadorShift = 0
        }
    } 


When clicking the shift button it will only affect the shift and the buttons, however it will not affect the letters in the `textarea`, this is because the shift has his own functionalitis, and if we want to add `uppercase()` on `textarea`, then we need to look the `KEYB` section


### ESPAI
---
To add a space we basicly, check if the button clicked is equal to `space`

    if (element.innerHTML === 'SPACE') {

if it's true then we add `' '` to the current message

        return (document.getElementById('keyValue').value += ' ')
    } 

### SALT
---
To add a line break, first we check if the button equals to `enter`

    else if (element.innerHTML === 'enter') {

if it's true, we return a `<br>`, to the actual message

        return (document.getElementById('keyValue').value += '<br>')
    } 


### Grid
---
In the class `container` is were we add the grid

    .container{
        display: grid;
        width: 100%;

i use `grid-template-columns`, and `grid-template-rows`, to divide the page in 5x5


        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: .2fr 0fr 0fr 0fr .2fr;

and finally using `grid-template-areas`, to adjust the content, the `.`, means a blank space

        grid-template-areas: 
            ". . . . ."
            ". . topPhone . ."
            ". . content1 . ."
            ". . content2 . ."
            ". . content3 . ."; 
    }

now that have a `grid-template-areas`, we need to use `grid-area` in the childs if we want this to make effect.

    .topPhone{
        grid-area: topPhone;
    }
    .messageArea{
        grid-area: content1;
    }
    .sendAreaStyle{
        grid-area: content2;
    }
    #keybordBox{
        grid-area: content3;
    }