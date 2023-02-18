let crewContent=document.querySelectorAll(".crew-content .text");
let filter=document.querySelectorAll(".crew-filter li");

let image=["image-douglas-hurley.png","image-mark-shuttleworth.png","image-victor-glover.png","image-anousheh-ansari.png"];
 let picture=document.querySelector(".image img");
filter.forEach((li)=>{
    li.addEventListener("click",()=>{
        removeActive();
        removeActiveDiv();
        li.classList.add("active");
        crewContent.forEach((div)=>{
            if(li.dataset.id == div.id){
                div.classList.add("active");
                picture.src="images/crew/"+image[(li.dataset.id)-1];
            }
        })
    })
})

function removeActive(){
    document.querySelectorAll(".crew-filter .active").forEach((element)=>{element.classList.remove("active")})
}

function removeActiveDiv(){
    document.querySelectorAll(".crew-content .active").forEach((div)=>{div.classList.remove("active")})
}