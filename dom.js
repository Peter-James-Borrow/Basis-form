const inputfirstName = document.querySelector('#firstname')
const inputEmail = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')
const button = document.querySelector('.button')

button.addEventListener('click', function(e) {
    e.preventDefault()
    if(inputfirstName.value === '' || inputEmail === '') {
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields'
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${inputfirstName.value} : ${inputEmail.value}`))
        
        userList.appendChild(li);

        inputfirstName.value = ''
        inputEmail.value = ''
    }

})
   
    
  

