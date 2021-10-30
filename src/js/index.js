const date = new Date();

const hours = date.getHours().toLocaleString();
const minutes = date.getMinutes().toLocaleString();
const day = date.getDate().toLocaleString();
const nameMonth = date.toLocaleString('default',{month:'short'});

// var ghipyKey 

document.getElementById('datee').innerHTML = `${day} ${nameMonth}`;

var contadorShift = 0;
var giftContador = 0;
var arrBtn = document.querySelectorAll('.btn');
arrBtn.forEach(element => element.addEventListener('click',(e)=>{

    if(element.innerHTML === 'SPACE'){
        return document.getElementById('keyValue').value += ' ';
    }
    else if(element.innerHTML === 'enter'){
        return document.getElementById('keyValue').value += "<br>";
    }

    else if(element.innerHTML === '|--'){
        let inputValue = document.getElementById('keyValue').value
        return document.getElementById('keyValue').value  = document.getElementById('keyValue').value.substr(0, inputValue.length - 1);
        

    }
    else if(element.innerHTML === '--|'){
        let inputValue = document.getElementById('keyValue').value
        return document.getElementById('keyValue').value  = inputValue.substring(1);


    }
    else if(element.innerHTML === 'C'){
        let inputValue = document.getElementById('keyValue').value
        return document.getElementById('keyValue').value  = document.getElementById('keyValue').value.replace(inputValue,'');


    }
    else if(element.innerHTML === 'CE'){
        let inputValue = document.getElementById('keyValue').value
        return document.getElementById('keyValue').value  = document.getElementById('keyValue').value.substr(0, inputValue.lastIndexOf(" ")); 
    }
    else if(element.innerHTML === 'shift'){
        contadorShift++;
        let shift = document.querySelector('.shiftStyle')

        if(contadorShift == 1){
            shift.style.backgroundColor = 'cyan';
            arrBtn.forEach(e => e.style.textTransform = 'uppercase');
        }

        else if(contadorShift == 2){
            shift.style.border = 'thick solid black';

        }else{
            shift.style.backgroundColor = '#e9e9ed';
            shift.style.border = '#e9e9ed';
            arrBtn.forEach(e => e.style.textTransform = 'lowercase');
            contadorShift = 0;
        }
    }   

    else{
            let shift = document.querySelector('.shiftStyle')
            if(contadorShift == 0){
                return document.getElementById('keyValue').value += element.innerHTML.toLowerCase();
            }
            if(contadorShift == 1){
                document.getElementById('keyValue').value += element.innerHTML.toUpperCase();
                arrBtn.forEach(e => e.style.textTransform = 'lowercase');
                shift.style.backgroundColor = '#e9e9ed';
                contadorShift = 0;
            }
            else if(contadorShift == 2){

                return document.getElementById('keyValue').value += element.innerHTML.toUpperCase();
            }
            else{
                if(contadorShift == 3){
                return document.getElementById('keyValue').value += element.innerHTML.toLowerCase();
                }
            }
    }}));

    let emojiButton = document.getElementById('gifButton');
    let emoj = document.querySelectorAll('.emoj');

    emojiButton.addEventListener('click',()=>{
        let emojiBox = document.getElementById('gifBox');
        let keybord = document.getElementById('keybordBox');

        giftContador++
        
        if(giftContador == 1){
            keybord.style.visibility = 'hidden';
            emojiBox.style.visibility = 'visible';
            
    }
        else{
            if(giftContador == 2){
                emojiBox.style.visibility = 'hidden';
                keybord.style.visibility = 'visible';
                giftContador = 0;
            }
        }
    })
    emoj.forEach(elem => elem.addEventListener('click',()=>{
        // elem.style.visibility = 'visible';
        document.getElementById('keyValue').value += elem.innerHTML
    }
    ))


    document.getElementById('sendButton').addEventListener('click',()=>{

    let inputValue = document.getElementById('keyValue').value //input value
    let areaMessage =  document.querySelector('.messageArea') ; // area message
    let createParagraf = document.createElement('h3'); // create p element
    let  lenginp = inputValue.length;
    let appendChild = areaMessage.appendChild(createParagraf);


    appendChild.innerHTML = document.getElementById('keyValue').value + " " +`<h6 class="dateSendStyle" >${hours}:${minutes}</h6>` ;
    appendChild.className = 'message'
    appendChild.style.width = (lenginp + 9) + 'vh';
    document.getElementById('keyValue').value  = document.getElementById('keyValue').value.replace(inputValue,'');
})



