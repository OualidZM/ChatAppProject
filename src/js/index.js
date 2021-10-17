var arrBtn = document.querySelectorAll('.btn');
arrBtn.forEach(element => element.addEventListener('click',(e)=>{

    if(element.innerHTML === 'space'){
        return document.getElementById('keyValue').value += ' ';
    }
    else if(element.innerHTML === 'enterr'){
        return document.getElementById('keyValue').value += "\n";
    }
    else if(element.innerHTML === 'shift'){
        element[e]
    }
    else if(element.innerHTML === '|--'){
        return alert('arrow left')

    }
    else if(element.innerHTML === '--|'){
        return alert('arrow right')

    }
    else if(element.innerHTML === 'C'){
        let inputValue = document.getElementById('keyValue').value
        return document.getElementById('keyValue').value  = document.getElementById('keyValue').value.substr(0, inputValue.length - 1);

    }
    else if(element.innerHTML === 'CE'){
        let inputValue = document.getElementById('keyValue').value
        return document.getElementById('keyValue').value  = document.getElementById('keyValue').value.replace(inputValue,'');
    }
    else{
        document.getElementById('keyValue').value += element.innerHTML;
    }
    }));
// console.log(arrBtn);







//     window.addEventListener('keypress',function(event) {MyFunction(event.key)}
// )
    
//     function MyFunction (Key) {
        
//         document.getElementById('testletters').innerHTML += Key;
//     }