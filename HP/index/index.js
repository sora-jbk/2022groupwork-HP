const img_src= [ "slide-img/slide-img01.jpg", "slide-img/slide-img02.jpg", "slide-img/slide-img03.jpg", "slide-img/slide-img04.jpg", "slide-img/slide-img05.jpg", "slide-img/slide-img06.jpg", "slide-img/slide-img-07.jpg"];
let num = -1;
function slide_time() {
    if (num === 5) {
        num=0;
    } else {
        num++;
    }
    document.getElementById("slide-content").src = img_src[num];
}
setInterval(slide_time,2500);