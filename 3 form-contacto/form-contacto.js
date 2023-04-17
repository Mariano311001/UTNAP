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

//API MAP
function iniciarMap(){
    var coord = {lat:-34.5887873 ,lng: -58.4154961};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}