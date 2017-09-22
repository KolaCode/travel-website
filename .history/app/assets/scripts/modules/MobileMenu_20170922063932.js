import $ from 'jquery';

class MobileMenu {
    constructor() {
       $(".site-header__menu-icon").click(function() {
        console.log("The top right icon was clicked");
       });
    }
}

export default MobileMenu;