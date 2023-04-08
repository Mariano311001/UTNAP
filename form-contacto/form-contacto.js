jQuery('document').ready(function($) {
    
    var menu_boton = $('.menu-icon'),
        menu = $('.navigation ul');

    menu_boton.click(function() {

        if(menu.hasClass('show')){
            menu.removeClass('show')
        }
        else {
            menu.addClass('show');
        }


    })
})