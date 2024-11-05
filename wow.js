var icon = document.querySelector(".icon")
const max = 400
icon.addEventListener("click",()=>{
    icon.classList.add("clicked")

    document.querySelectorAll(".will_fly").forEach((e)=>{
        setTimeout(()=>{
            e.classList.add("flying")
        },Math.random()*max)
    })
    setTimeout(()=>{
        document.querySelectorAll(".flying").forEach((e)=>{
            e.classList.remove("flying")
            icon.classList.remove("clicked")
        })
    },max+500+5000)
})