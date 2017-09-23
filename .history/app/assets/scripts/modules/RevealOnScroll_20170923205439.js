import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor() {
        this.itemsToReveal = $(".feature-item");
        this.hideInitially();
        this.createWaypoints();

    }

    hideInitially() {
        this.itemsToReveal.addClass("reveal-item");
    }

    createWaypoints() {
        this.itemsToReaveal.each(function() {
            alert("testing");
        });
    }
}

export default RevealOnScroll;