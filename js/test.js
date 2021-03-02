var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();



tl2.from("#box", 1, { opacity: 0, scale: 0 });
tl2.to("#box", .5, { left: "20%", scale: 1.3, borderColor: 'white', borderWidth: 12, boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09)' })



const scene2 = new ScrollMagic.Scene({
        triggerElement: "blockquote"
    })
    .setTween(tl2)
    .addTo(controller);