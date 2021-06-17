
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementsByClassName("CornerButtons")[0].style.display = "flex";
    } else {
        document.getElementsByClassName("CornerButtons")[0].style.display = "none";
    }
}