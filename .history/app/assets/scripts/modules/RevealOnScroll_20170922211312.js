import $ from 'jquery';

class RevealOnScroll {
    constructor() {
        this.itemsToReveal = $(".feature-item");
        this.hideInitially();

    }

    hideInitially() {
        this.itemsToReveal.addClass("reveal-items");
    }
}

export default RevealOnScroll'