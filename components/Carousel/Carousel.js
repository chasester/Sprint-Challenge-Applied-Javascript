class Carousel {
    constructor(element)
    {
        this.element = element;
        this.images = element.querySelectorAll("img");
        this.curent = 0;
        this.buttonRight = element.querySelector(".right-button");
        this.buttonRight.addEventListener("click",() => this.onclick(1));
        this.buttonLeft = element.querySelector(".left-button");
        this.buttonLeft.addEventListener("click",()=> this.onclick(-1));
        this.element.addEventListener("mouseenter", ()=>this.onmousehover(1));
        this.element.addEventListener("mouseleave", ()=>this.onmousehover(0));
        this.allowchange = true;
    }
    onmousehover(enter)
    {
        this.buttonLeft.classList.toggle("active-img")
        this.buttonRight.classList.toggle("active-img")
        clearTimeout(inter);
        inter = setTimeout(()=>this.onclick(1),10000);
    }
    onclick(dir)
    {
        if(!this.allowchange) return;
        this.images.forEach(x=> x.classList.remove("active-img"));
        this.curent = (this.curent + ([...this.images].length+dir))%[...this.images].length;
        this.images[this.curent].classList.add("active-img")
        //stop the user from clicking through these quickly
        this.allowchange = false;
        setTimeout(()=> this.allowchange = true, 1500)
    }
}

var car = new Carousel(document.querySelector(".carousel"));
var inter =  setTimeout(()=>
    car.onclick(1)
,10000)