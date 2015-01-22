
var show = "visible"; var height = "auto";

$(document).ready(function () {
    document.getElementById("introduction").style.visibility = show;
    document.getElementById("introduction").style.height = height;
})

function dropItem(item) {
    document.getElementsByClassName("drop-content-item").visibility = "hidden";
    toggle(item);
    document.getElementById(item).style.visibility = show;
    document.getElementById(item).style.height = height;
    document.getElementById(item).style.transform = "2s";
}
function toggle(item) {
    if (document.getElementById(item).style.visibility == "visible") {
        height = "1px";
        show = "hidden";
    }
    else {
        height = "auto";
        show = "visible";
    }
}