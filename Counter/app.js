const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

let count = 0

btns.forEach((btn) => {
    btn.addEventListener('click', (button) => {
        const styles = button.currentTarget.classList
        if(styles.contains('random')) {
            getRandomNum()
        } else if (styles.contains('reset')) {
            count = 0
        } else if (styles.contains('increase')) {
            count++
        } else if (styles.contains('decrease')) {
            count--
        }
        value.textContent = count

        if (count > 0) {
            value.style.color = "green"
        } else if (count < 0) {
            value.style.color = "red"
        } else {
            value.style.color = "black"
        }
    })
})

getRandomNum = () => {
    if (count > 0){
        count = (Math.floor(Math.random() * 100)) * -1
    } else if (count < 0) {
        count = Math.floor(Math.random() * 100) 
    } else {
        count = Math.floor(Math.random() * 100)
    }
}

