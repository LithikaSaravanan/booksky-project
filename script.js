//selecting popup overlay,popupbox,button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addbtn=document.getElementById("add-popupbtn")
var cancelpopup=document.getElementById("cancel-popup")

addbtn.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//selecting container,book-title-input,book-author-input,book-shortdescription,add-book
var container=document.querySelector(".container")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")
var addbook=document.getElementById("add-book")//ADD button

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.className="container-book"
    div.innerHTML=`
    <h2>${booktitleinput.value}</h2> 
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deleteitem(event)">Delete</button></div> `
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
function deleteitem(event){
    event.target.parentElement.remove()
}
