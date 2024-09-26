const lastVisit = sessionStorage.getItem("lastVisit")*1
const now = Date.now()
if (now-lastVisit > ((5*1000)*60)) {
    sessionStorage.setItem("lastVisit",`${now}`)
    window.location.reload()
    console.log("Reloading...")
}