const menu=document.querySelector("#menu");
const cross=document.querySelector("#cross");
const value = document.querySelector(".menu-slider");
const main=document.querySelector("#menu")
menu.addEventListener("click", function(e){
    value.style.display="block";
    menu.style.display="none";
    document.body.classList.toggle('fixed-body');
})
cross.addEventListener("click", function(){
    value.style.display="none";
    document.body.classList.remove('fixed-body');
    menu.style.display="block";
})

//this is for work experience 

const expand1=document.querySelector("#expand1");
const expand2=document.querySelector("#expand2");
const expand3=document.querySelector("#expand3");
const expand4=document.querySelector("#expand4");
const expand5=document.querySelector("#expand5");
const imagehtml=document.querySelector("#image-html");
const imageinsta=document.querySelector("#image-insta");
const imagetelegram=document.querySelector("#image-telegram");
const imageyoutube=document.querySelector("#image-youtube");
const imagewhatsapp=document.querySelector("#image-whatsapp");

imagehtml.addEventListener("click",function(){
    expand1.style.display=(expand1.style.display==="block")?"none":"block"; 
    
})
imageinsta.addEventListener("click",function(){
    expand2.style.display=(expand2.style.display==="block")?"none":"block"; 
})
imagetelegram.addEventListener("click",function(){
    expand3.style.display=(expand3.style.display==="block")?"none":"block"; 
})
imageyoutube.addEventListener("click",function(){
    expand4.style.display=(expand4.style.display==="block")?"none":"block"; 
})
imagewhatsapp.addEventListener("click",function(){
    expand5.style.display=(expand5.style.display==="block")?"none":"block"; 
})
