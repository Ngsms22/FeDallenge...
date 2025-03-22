alert("connected....")

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