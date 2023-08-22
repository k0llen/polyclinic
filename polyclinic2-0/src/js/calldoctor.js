

if (document.querySelector('.calldoctor')) {
    new AirDatepicker('#input-birthday', {
        view: 'years',
        position: 'bottom right',
    })
}

if (document.querySelector('#input-phone')) {
    jQuery(function($){
        $("#input-phone").mask("+7 (999) 999-99-99");
    });
}