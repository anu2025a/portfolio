
var typed = new Typed(".text", {
    strings: ["Programming" , "Cybersecurity" , "Web Development"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})
let btn=document.getElementById("btn1");
let currMode="dark";
btn.addEventListener("click",()=>{
    if (currMode=="dark")
    {
        currMode="light";
        document.body.style.backgroundColor="black";
    }
    else{
        currMode="dark";
        document.body.style.backgroundColor="light";
    }
})