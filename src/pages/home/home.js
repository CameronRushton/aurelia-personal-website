export class Home {
    scrollTop = 0;
    showNokia = false;
    showSolace = false;
    constructor() {
    }

    handleScroll(event) {
        // console.log(this.scrollTop)
    }

    makeVisible(event) {
        // console.log(event);
    }

    scrollFn() {
        window.scrollTo({top: 0, behavior: 'smooth'});
        document.getElementById("top").scrollIntoView({ 
            behavior: 'smooth'
        });
    }

}