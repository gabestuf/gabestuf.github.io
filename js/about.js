// $(function() { // wait for document ready

//     var controller = new ScrollMagic.Controller();

//     var horizontalSlide = new TimelineMax()
//         // animate panels
//         .to("#js-slideContainer", 1, { x: "-20%" })
//         .to("#js-slideContainer", 1, { x: "-40%" })
//         .to("#js-slideContainer", 1, { x: "-60%" })
//         .to("#js-slideContainer", 1, { x: "-80%" })


//     // create scene to pin and link animation
//     new ScrollMagic.Scene({
//             triggerElement: "#js-wrapper",
//             triggerHook: "onLeave",
//             duration: "400%"
//         })
//         .setPin("#js-wrapper")
//         .setTween(horizontalSlide)
//         //.addIndicators() // add indicators (requires plugin)
//         .addTo(controller);



// });
jQuery(function($) {
    $.fn.hScroll = function(amount) {
        amount = amount || 120;
        $(this).bind("DOMMouseScroll mousewheel", function(event) {
            var oEvent = event.originalEvent,
                direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta,
                position = $(this).scrollLeft();
            position += direction > 0 ? -amount : amount;
            $(this).scrollLeft(position);
            event.preventDefault();
        })
    };
});

$(document).ready(function() {
    $('#js-wrapper').hScroll(100); // You can pass (optionally) scrolling amount

    $('body').scrollTo('#212'); // Scroll screen 500 pixels down

});