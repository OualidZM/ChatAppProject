let contadorShift = 0;


var arrBtn = document.querySelectorAll('.btn');
arrBtn.forEach(element => element.addEventListener('click',(e)=>{

    if(element.innerHTML === 'space'){
        return document.getElementById('keyValue').value += ' ';
    }
    else if(element.innerHTML === 'enterr'){
        return document.getElementById('keyValue').value += "\n";
    }

    else if(element.innerHTML === '|--'){
        let arr = [...document.getElementById('keyValue').value]
        

    }
    else if(element.innerHTML === '--|'){
        let arr = [...document.getElementById('keyValue').value]


    }
    else if(element.innerHTML === 'C'){
        let inputValue = document.getElementById('keyValue').value
        return document.getElementById('keyValue').value  = document.getElementById('keyValue').value.substr(0, inputValue.length - 1);

    }
    else if(element.innerHTML === 'CE'){
        let inputValue = document.getElementById('keyValue').value
        return document.getElementById('keyValue').value  = document.getElementById('keyValue').value.replace(inputValue,'');
    }
    else if(element.innerHTML === 'shift'){
        contadorShift++;
        let shift = document.querySelector('.shiftStyle')

        if(contadorShift != 3){
            shift.style.backgroundColor = 'red';
            shift.style.border = 'red';
            arrBtn.forEach(e => e.style.textTransform = 'uppercase');
    
        }else{
            shift.style.backgroundColor = 'green';
            shift.style.border = 'green';
            arrBtn.forEach(e => e.style.textTransform = 'lowercase');
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
                contadorShift = 0;
                return document.getElementById('keyValue').value += element.innerHTML.toLowerCase();
                }
            }
        
    }
    
    }));


    // function toShiftUp(letter){
    //     return letter.toUpperCase();
    // }
// console.log(arrBtn);
// document.getElementById().style.textTransform = 'uppercase'






//     window.addEventListener('keypress',function(event) {MyFunction(event.key)}
// )
    
//     function MyFunction (Key) {
        
//         document.getElementById('testletters').innerHTML += Key;
//     }






// var arrBtn = document.querySelectorAll('.btn');
// arrBtn.forEach(element => element.addEventListener('click',(e)=>{

//     if(element.innerHTML === 'space'){
//         return document.getElementById('keyValue').value += ' ';
//     }
//     else if(element.innerHTML === 'enterr'){
//         return document.getElementById('keyValue').value += "\n";
//     }
//     else if(element.innerHTML === 'shift'){
//         let shiftActive = false;
//         let dbclick = element.addEventListener('dblclick',(e)=>{
//             document.getElementById('keyValue').value = "doble click" + e.keycode;
//         })
//         if(dbclick){
//             alert("dbclick")
//         }
//         else{
//             if(shiftActive = false){
//                 shiftActive = true;
//                 element.toUpperCase();
//             }
//             else{
//                 dbclick;
//             }
            
//         }
//     }
//     else if(element.innerHTML === '|--'){
//         let arr = [...document.getElementById('keyValue').value]
        

//     }
//     else if(element.innerHTML === '--|'){
//         let arr = [...document.getElementById('keyValue').value]


//     }
//     else if(element.innerHTML === 'C'){
//         let inputValue = document.getElementById('keyValue').value
//         return document.getElementById('keyValue').value  = document.getElementById('keyValue').value.substr(0, inputValue.length - 1);

//     }
//     else if(element.innerHTML === 'CE'){
//         let inputValue = document.getElementById('keyValue').value
//         return document.getElementById('keyValue').value  = document.getElementById('keyValue').value.replace(inputValue,'');
//     }
//     else{
//         document.getElementById('keyValue').value += element.innerHTML;
//     }
//     }));





// let shift = document.querySelector('.shiftStyle')
// if(shift.style.backgroundColor == 'red' && contadorShift == 1){
//     document.getElementById('keyValue').value += element.innerHTML.toUpperCase();
//     arrBtn.forEach(e => e.style.textTransform = 'lowercase');
//     shift.style.backgroundColor = '#e9e9ed';


// }

// else if(shift.style.backgroundColor == 'red' && contadorShift == 2){
//     document.getElementById('keyValue').value += element.innerHTML.toUpperCase();

// }
 
// else{
//     if(contadorShift == 3){

//     document.getElementById('keyValue').value += element.innerHTML.toLowerCase();
//     contadorShift = 0;
//     }
        
// }