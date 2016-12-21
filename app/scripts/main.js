console.log('\'Allo \'Allo!');

$(document).ready(function() {
    var owl = $('#owl-demo');
    owl.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 7000,
        dots: true
    });
    // Go to the next item
    $('#next').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('#prev').click(function() {
        owl.trigger('prev.owl.carousel');
    })






});
