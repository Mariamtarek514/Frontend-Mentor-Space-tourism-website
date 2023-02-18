let filterList=document.querySelectorAll(".technology-filter li");
let text=document.querySelectorAll(".crew-content div");
let images=document.querySelectorAll(".image-container .image");
filterList.forEach((li)=>{
    li.onclick=function(){
        removeAllList();
        removeActiveImage();
        li.classList.add("active")
        text.forEach((div)=>{
            if(li.dataset.id== div.id){
                div.classList.add("active")
                filterImage(images,div.id)
            }

        })
    }

})

function removeAllList(){
    document.querySelectorAll(".crew-content .active").forEach((li)=>{
        li.classList.remove("active");
    })
}

function removeActiveImage(){
    document.querySelectorAll(".image-container .active").forEach((image)=>{
        image.classList.remove("active");
    })
}
function filterImage(images,id){
    images.forEach((image)=>{
        if(image.dataset.image==id){
            image.classList.add("active");
        }
    })

}