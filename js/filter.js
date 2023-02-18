let lis=document.querySelectorAll(".filter li");
let showDiv=document.querySelectorAll(".moon");
let image=document.querySelector(".main-content figure img");
lis.forEach((li)=>{
    li.onclick=function(){
        showDiv.forEach((div)=>{
            if(li.dataset.destination == div.id ){
                removeActiveToLists();
                removeActiveDiv();
                li.classList.add("active");
                div.classList.add("active");
            }
            
        })
        if(li.dataset.destination=="moon"){
            image.src="images/destination/image-moon.png";
        }else if(li.dataset.destination == "mars"){
            image.src="images/destination/image-mars.png"
        }else if(li.dataset.destination == "europa"){
            image.src="images/destination/image-europa.png"
        }else if(li.dataset.destination == "titan"){
            image.src="images/destination/image-titan.png"
        }
    }
})
function removeActiveToLists(){
    document.querySelectorAll(".filter .active").forEach((li)=>{
        li.classList.remove("active")
    })
}
function removeActiveDiv(){
    document.querySelectorAll(".content-div .active").forEach((div)=>{
        div.classList.remove("active");
    })
}

