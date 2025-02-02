const btn = document.getElementById("btn")
const items = ["-5 kiberon","Call mom","Ban in roblox",
    "Delete your steam","Swatt your info to darkweb",
    "Gets skibidy toalet in darknet","Mr Proper dont wash your"]
btn.addEventListener("click", ()=>{
    let randomInt = Math.floor(Math.random() * items.length)
    btn.innerText = items[randomInt]
    btn.classList.add("animation")
    setTimeout(() => {
        btn.classList.remove("animation")
    }, 3000); 
})