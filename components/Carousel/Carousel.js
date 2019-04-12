class Carousel {
    constructor(element)
    {
        this.element = element;
        this.images = element.querySelectorAll("img");
        this.curent = 0;
        console.log("hello")
        element.querySelector(".right-button").addEventListener("click",() => this.onclick(1));
        element.querySelector(".left-button").addEventListener("click",()=> this.onclick(-1));
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