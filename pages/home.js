const getStarted = document.getElementById("getStartedBtn")
const popup = document.getElementById("popupContainer")
const closeBtn = document.getElementById("close")
console.log("getStarted")
getStarted.addEventListener('click', function(){
    popup.style.display = 'flex'
})
closeBtn.addEventListener('click', function(){
    popup.style.display = 'none'
})

// validating input

const formContainer = document.getElementById("formContainer")
formContainer.addEventListener('submit', function() {
    const password=document.getElementById("password").value
    const confirmPassword = document.getElementById("confirmPassword").value
    if (password!==confirmPassword){
        alert("Password does not match!")
        return
    }

})