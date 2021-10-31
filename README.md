# Chat App

## About the Project
 In this project the main focus was to make a Chat App, that looks like WhatsApp and Telegram, using JS, HTML and CSS. We had the freedom to do it on our way, that means that doesn't especially need to look like WhatsApp and Telegram 

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
- [x] VARS
- [x] STYLE-DIW
- [x] STYLE-DWEC
- [x] SEPAR
- [x] EMOJ
- [x] PENJA



### INTER
---
 The Chat App is divided in three parts, the `message Area`, where the messages and the date will be displayed, to be able to send the messages and the emojis, we need to have an area to get the input from the user , this will be the  `send Area`, and finally we have the `keyboard`, in this area we are going to be able to write our messages.  

### MESSAG
---

To get the message i need to create a `new Date` object,
    
    const date = new Date()
 
for then later on get the month(short version), day, hour and minutes, and added inside the message, I will explain later how I add the date inside the message `TEXTAR`

    const hours = date.getHours().toLocaleString()
    const minutes = date.getMinutes().toLocaleString()
    const day = date.getDate().toLocaleString()
    const nameMonth = date.toLocaleString('default', { month: 'short' })

### TEXTAR
---

When we send a message, this one needs to be displayed on the text Area,

So the first thing we do is  add an `addEventListener()`, to register the click event

    

    document.getElementById('sendButton').addEventListener('click', () => {
 
  Now we need to get the input of the user `inputValue`

        let inputValue = document.getElementById('keyValue').value //input value

  the place were the message will be displayed `areaMessage

        let areaMessage = document.querySelector('.messageArea') // area message

  we need to create the element, for later on append it on the area message `createElementt`
 
        let createElementt = document.createElement('h3') // create p element

  another thing that we need is the length of the input, like that we can measure the width and if it's an empty string `lenginp`  

        let lenginp = inputValue.length


the first conditional, if the length of the input is equal to 0, then, it will return nothing

    if(lenginp == 0){
        return;
    }
if it's not equal to 0, it will display the message

    else{
        if(lenginp > 0){

 We need a variable to save the element `h3`, to then give style to it `appendChild`  

        let appendChild = areaMessage.appendChild(createElementt)

Now that `createElementt` is appended inside the `areaMessage`, and stored inside a variable `appendChild`, we need to add content to it, for this, the variable `appendChild` will innerHTML from `inputValue`, plus a `h6` that will contain the date

        appendChild.innerHTML =
            document.getElementById('keyValue').value + ' ' + `<h6 class="dateSendStyle" >${hours}:${minutes}</h6>`

now that the message is in the `areaMessage`, I need to add style to it, 
for this i will use `className`

        appendChild.className = 'message'

So now the last thing is to get the `lenginp`, and added as the width for the message plus 9

        appendChild.style.width = lenginp + 9 + 'vh'

we need to remove the text from the textarea, like that the if the user wants to add more messages, it will be available

        document.getElementById('keyValue').value = document.getElementById('keyValue').value.replace(inputValue, '')

Finally, if there are a lot of messages, and they start to go down, this line of code will always stay at the bottom of the text area

        areaMessage.scrollTop =  areaMessage.scrollHeight

            }   
        }
    })



### KEYB
---
For the keyboard, I wanted to make a loop, like that I wouldn't have so much repeated code.


First, we add the same class to all the letters and special keys,
after that we use `querySelectorAll()`, to get a nodeList

    var arrBtn = document.querySelectorAll('.btn')

We need a  global counter `contadorShift`, to count the times that the shift button was clicked
    
    var contadorShift = 0


We use forEach loop, and add an `addEventListener()` to every element inside the nodeList to register a click event

    arrBtn.forEach((element) =>
        element.addEventListener('click', () => {


We get the shift class, to style it depending on the state

    let shift = document.querySelector('.shiftStyle')


if the shift wasn't pressed, then it will return the letter in `lowerCase()`

                if (contadorShift == 0) {
                    return (document.getElementById('keyValue').value +=
                        element.innerHTML.toLowerCase())
                }

 however if the shift was pressed one time, it will return the letter in uppercase, after that it will return all the buttons in lowercase

                if (contadorShift == 1) {
                    document.getElementById('keyValue').value +=
                        element.innerHTML.toUpperCase()
                    arrBtn.forEach((e) => (e.style.textTransform = 'lowercase'))
                    shift.style.backgroundColor = '#e9e9ed'
                    contadorShift = 0
                } 
                
 but if the shift was pressed two times, it will return the letters in `upperCase()`

                else if (contadorShift == 2) {
                    return (document.getElementById('keyValue').value +=
                        element.innerHTML.toUpperCase())
                }
                
 last if the shift was pressed tree times it will return the letters in `lowerCase()`

                 else {
                    if (contadorShift == 3) {
                        return (document.getElementById('keyValue').value +=
                            element.innerHTML.toLowerCase())
                    }
                }
            })
        )





### EMOJI
---

All the emojis are inside of a div, this div is not visible until the emoji button is clicked, if it's clicked the div that contains the letters will hide, and the emojis will be visible.

 We add a 

    
    var emojiContador = 0

 
 If we look at the code, first we get all the emojis

    let emojiButton = document.getElementById('emojiButton')

We add an `addEventListener()`, to register the click event

    emojiButton.addEventListener('click', () => {

we get the keyboard div and the emoji div, and store it inside let variable

        let emojiBox = document.getElementById('emojiBox')
        let keybord = document.getElementById('keybordBox')

before going inside the if statements, we need to add one to the counter, because the moment that the user clicked the button it started to count

        emojiContador++

If the counter is equal to one, then the first conditional will be true, and it will hide the keyboard div and show the emoji div

        if (emojiContador == 1) {
            keybord.style.visibility = 'hidden'
            emojiBox.style.visibility = 'visible'
        } 
Else if the counter is equal to two, the emoji div it will hide, and show the keyboard div, then the counter will return to 0.

        else {
            if (emojiContador == 2) {
                emojiBox.style.visibility = 'hidden'
                keybord.style.visibility = 'visible'
                emojiContador = 0
            }
        }
    })

To be able to show the emojis, first in the HTML, I added the same class to every emoji, like that I will be able to get a nodeList with `querySelectorAll()`

    let emoj = document.querySelectorAll('.emoj')

Now we use a forEach loop, to print the emoji inside the `textarea`

    emoj.forEach((elem) =>
        elem.addEventListener('click', () => {
            document.getElementById('keyValue').value += elem.innerHTML
        })
    )

    
### CE C
---
When clicking `CE` it will delete the last word in a sentence, however when clicking `C`, it will delete all the message that textarea has

First, we need to check if the button is equal to `C`

    else if (element.innerHTML === 'C') {

if it's equal, we need to get the input of the user `inputValue`

        let inputValue = document.getElementById('keyValue').value

Then we replace the actual value for `''`, this will delete all the message in the textarea

        return (document.getElementById('keyValue').value = document
                                                        .getElementById('keyValue')
                                                        .value.replace(inputValue, ''))
    } 
however, if the button that was pressed equals to `CE`

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

When we delete, we have two ways to make it, first we have the `←` this will delete the last letter on the `textarea`, and `→` will delete the first letter on the `textarea`.

First, we need to check if it's equal to `←`

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
I guess that the shift button was the most complicated to make, because I didn't know from where to start, I came to the conclusión that the best option was to make a counter, this counter will only reach to three, because the shift only has three states.

First, we need to check if button clicked is equal to shift

    else if (element.innerHTML === 'shift') {
if  it's true, then `contadorShift` will equal to +1

        contadorShift++

we get the shift class to style it later, `shiftStyle`

        let shift = document.querySelector('.shiftStyle')

Now if counter equals to one, CSS style will be applied, and I use a forEach, to `textTransform` all the buttons to uppercase

        if (contadorShift == 1) {
            shift.style.backgroundColor = 'cyan'
            arrBtn.forEach((e) => (e.style.textTransform = 'uppercase'))
        } 
however if the `contadorShift` equals to two, another CSS will be applied

        else if (contadorShift == 2) {
            shift.style.border = 'thick solid black'
        }
and if `contadorShift` doesn't equal one or two, some CSS will be applied to restore the same background as before, and used a forEach  to `textTransform` all the buttons to lowercase, finally set `contadorShift` to 0

         else {
            shift.style.backgroundColor = '#e9e9ed'
            shift.style.border = '#e9e9ed'
            arrBtn.forEach((e) => (e.style.textTransform = 'lowercase'))
            contadorShift = 0
        }
    } 


When clicking the shift button it will only affect the shift and the buttons,  however, it will not affect the letters in the `textarea`, this is because the shift has his own states, and if we want to add `uppercase()` on `textarea`, then we need to look the `KEYB` section


### ESPAI
---
To add a space we, basically, check if the button clicked is equal to `space`

    if (element.innerHTML === 'SPACE') {

if it's true then we add `' '` to the current message

        return (document.getElementById('keyValue').value += ' ')
    } 

### SALT
---
To add a line break, first we check if the button equals to `enter`

    else if (element.innerHTML === 'enter') {

if it's true, we return a `<br>`, behind the actual message

        return (document.getElementById('keyValue').value += '<br>')
    } 


### Grid
---
In the class `container` is where we add the grid

    .container{
        display: grid;
        width: 100%;

I use `grid-template-columns`, and `grid-template-rows`, to divide the page in 5x5


        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: .2fr 0fr 0fr 0fr .2fr;

and finally, using `grid-template-areas`, to adjust the content, the `.`, means a blank space

        grid-template-areas: 
            ". . . . ."
            ". . topPhone . ."
            ". . content1 . ."
            ". . content2 . ."
            ". . content3 . ."; 
    }

Now that the container has a `grid-template-areas`, we need to use `grid-area` in the children if we want this to make an effect.

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


### Netlify

Now the page is available on Netlify too

[![Netlify Page](https://api.netlify.com/api/v1/badges/72578027-62e0-4396-be70-db18268e3b71/deploy-status)](https://chatappdiwdaw.netlify.app)

