const FullDay = 1000 * 60 * 60 * 24
document.getElementById('datee').innerHTML = `${actualDate()}`

var contadorShift = 0
var emojiContador = 0
var arrBtn = document.querySelectorAll('.btn')
arrBtn.forEach((element) =>
    element.addEventListener('click', () => {
        if (element.innerHTML === 'SPACE') {
            return (document.getElementById('keyValue').value += ' ')
        } else if (element.innerHTML === 'enter') {
            return (document.getElementById('keyValue').value += '<br>')
        } else if (element.innerHTML === '←') {
            let inputValue = document.getElementById('keyValue').value
            return (document.getElementById('keyValue').value = document
                .getElementById('keyValue')
                .value.substr(0, inputValue.length - 1))
        } else if (element.innerHTML === '→') {
            let inputValue = document.getElementById('keyValue').value
            return (document.getElementById('keyValue').value =
                inputValue.substring(1))
        } else if (element.innerHTML === 'C') {
            let inputValue = document.getElementById('keyValue').value
            return (document.getElementById('keyValue').value = document
                .getElementById('keyValue')
                .value.replace(inputValue, ''))
        } else if (element.innerHTML === 'CE') {
            let inputValue = document.getElementById('keyValue').value
            return (document.getElementById('keyValue').value = document
                .getElementById('keyValue')
                .value.substr(0, inputValue.lastIndexOf(' ')))
        } else if (element.innerHTML === 'shift') {
            contadorShift++
            let shift = document.querySelector('.shiftStyle')

            if (contadorShift == 1) {
                shift.style.backgroundColor = '#48cae4'
                arrBtn.forEach((e) => (e.style.textTransform = 'uppercase'))
            } else if (contadorShift == 2) {
                shift.style.border = 'thick solid #0884ff'
            } else {
                shift.style.backgroundColor = '#b5b5c6'
                shift.style.border = '#e9e9ed'
                arrBtn.forEach((e) => (e.style.textTransform = 'lowercase'))
                contadorShift = 0
            }
        } else {
            let shift = document.querySelector('.shiftStyle')
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
        }
    })
)

let emojiButton = document.getElementById('emojiButton')

emojiButton.addEventListener('click', () => {
    let emojiBox = document.getElementById('emojiBox')
    let keybord = document.getElementById('keybordBox')
    emojiContador++

    if (emojiContador == 1) {
        keybord.style.visibility = 'hidden'
        emojiBox.style.visibility = 'visible'
    } else {
        if (emojiContador == 2) {
            emojiBox.style.visibility = 'hidden'
            keybord.style.visibility = 'visible'
            emojiContador = 0
        }
    }
})

let emoj = document.querySelectorAll('.emoj')
emoj.forEach((elem) =>
    elem.addEventListener('click', () => {
        document.getElementById('keyValue').value += elem.innerHTML
    })
)

document.getElementById('sendButton').addEventListener('click', () => {
    let date = new Date()
    let hours = date.getHours().toLocaleString()
    let minutes = date.getMinutes().toLocaleString()

    let inputValue = document.getElementById('keyValue').value //input value
    let areaMessage = document.querySelector('.messageArea') // area message
    let createElementt = document.createElement('h3') // create p element
    let lenginp = inputValue.length

    if (lenginp == 0) {
        return
    } else {
        if (lenginp > 0) {
            let appendChild = areaMessage.appendChild(createElementt)
            appendChild.innerHTML =
                document.getElementById('keyValue').value + ' ' + `<h6 class="dateSendStyle" >${actualTime()}</h6>`
            appendChild.className = 'message'
            appendChild.style.width = lenginp + 9 + 'vh'
            document.getElementById('keyValue').value = document
                .getElementById('keyValue')
                .value.replace(inputValue, '')
            areaMessage.scrollTop = areaMessage.scrollHeight
        }
    }
})
function actualTime() {
    let currentTime = new Date()
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    let actualTime = hours + ':' + minutes + ' '
    
    if (hours > 11) {
        actualTime += 'PM'
    } else {
        actualTime += 'AM'
    }
    return actualTime
}
setInterval(actualTime, 1000)

function actualDate() {
    let currentDate = new Date()
    let day = currentDate.getDate()
    let nameMonth = currentDate.toLocaleString('default', { month: 'short' })
    let actualDateValue = day + ' ' + nameMonth
    return actualDateValue
}
setInterval(actualDate, FullDay)
