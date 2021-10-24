var contadorShift = 0;
var arrBtn = document.querySelectorAll('.btn');
arrBtn.forEach(element => element.addEventListener('click',(e)=>{

    if(element.innerHTML === 'SPACE'){
        return document.getElementById('keyValue').value += ' ';
    }
    else if(element.innerHTML === 'enter'){
        return document.getElementById('keyValue').value += "\n";
    }

    else if(element.innerHTML === '|--'){
        let inputValue = document.getElementById('keyValue').value
        return document.getElementById('keyValue').value  = document.getElementById('keyValue').value.substr(0, inputValue.length - 1);
        

    }
    else if(element.innerHTML === '--|'){
        let inputValue = document.getElementById('keyValue').value
        return document.getElementById('keyValue').value  = document.getElementById('keyValue').value.substring(1);


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

document.getElementById('giftButton').addEventListener('click',()=>{
    alert('Gift Button')
})

document.getElementById('sendButton').addEventListener('click',()=>{
    let inputValue = document.getElementById('keyValue').value //input value
    let areaMessage =  document.querySelector('.messageArea') ; // area message
    let createParagraf = document.createElement('p'); // create p element
    
    let appendChild = areaMessage.appendChild(createParagraf);
    appendChild.innerHTML = document.getElementById('keyValue').value;
    appendChild.className = 'message'

    document.getElementById('keyValue').value  = document.getElementById('keyValue').value.replace(inputValue,'');
})