let object1 = document.querySelector(".object1");
let object2 = document.querySelector(".object2");
let var1 = 0

window.addEventListener("keyup", e => {
    var1 += 10
    if (e.key == "ArrowLeft") {
        object1.style.marginRight = -var1 + "px";
    } else if (e.key == "ArrowRight") {
        object1.style.marginLeft = var1 + "px";
    } else if (e.key == "ArrowUp") {
        object1.style.marginBottom = var1 + "px";
    } else if (e.key == "ArrowDown") {
        object1.style.marginTop = var1 + "px";
    } else if (e.key == "d") {
        object2.style.marginRight = var1 + "px";
    } else if (e.key == "s") {
        object2.style.marginTop = var1 + "px";
    } else if (e.key == "a") {
        object2.style.marginBottom = var1 + "px";
    }
})