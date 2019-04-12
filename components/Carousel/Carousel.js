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
    }
    onmousehover(enter)
    {
        this.buttonLeft.classList.toggle("active-img")
        this.buttonRight.classList.toggle("active-img")
    }

    onclick(dir)
    {
        this.images.forEach(x=> x.classList.remove("active-img"));
        this.curent = (this.curent + ([...this.images].length+dir))%[...this.images].length;
        this.images[this.curent].classList.add("active-img")
        console.log(this.curent);
    }
}

new Carousel(document.querySelector(".carousel"));