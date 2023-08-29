let startIcon = document.getElementById("start-icon"),
startMenu = document.querySelector("#start-menu img")

let searchIcon = document.getElementById("search-icon"),
searchMenu = document.querySelector("#search img")

let widgetsIcon = document.getElementById("widgets-icon"),
widgets = document.querySelector("#widgets img")

let explorerIcon = document.getElementById("explorer-icon"),
explorer = document.querySelector("#explorer img")

let storeIcon = document.getElementById("store-icon"),
store = document.querySelector("#store img")

startIcon.addEventListener("click",function(){
    startMenu.classList.toggle("show")
})
searchIcon.addEventListener("click",function(){
    searchMenu.classList.toggle("show")
})
widgetsIcon.addEventListener("click",function(){
    widgets.classList.toggle("show")
})
explorerIcon.addEventListener("click",function(){
    explorer.classList.toggle("show")
})
storeIcon.addEventListener("click",function(){
    store.classList.toggle("show")
})
