import $ from 'jquery';

class MobileMenu {
    constructor() {
       this.menuIcon = $(".site-header__menu-icon");
       this.menuContent = $(".site-header__menu-content");
       this.event();
    }

    event() {
        this.menuIcon.click(this.toggleTheMenu.bind("hello world"));
        console.log(this);
    }

    toggleTheMenu() {
        alert(this);
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
    }
}

export default MobileMenu;