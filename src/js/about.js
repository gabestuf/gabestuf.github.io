//https://greensock.com/forums/topic/17564-scrollmagic-horizontal-scroll-with-anchor-navigation/

// Init controller
var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        duration: $('section').height(),
        triggerHook: .025,
        reverse: true
    },
    vertical: false
});

/*
object to hold href values of links inside our nav with
the class '.anchor-nav'
  
scene_object = {
  '[scene-name]' : {
    '[target-scene-id]' : '[anchor-href-value]'
  }
}
*/
var scenes = {
    'scene1': {
        'section-0': 'anchor0'
    },
    'scene2': {
        'section-1': 'anchor1'
    },
    'scene3': {
        'section-2': 'anchor2'
    },
    'scene4': {
        'section-3': 'anchor3'
    },
    'scene5': {
        'section-4': 'anchor4'
    }
}

for (var key in scenes) {
    // skip loop if the property is from prototype
    if (!scenes.hasOwnProperty(key)) continue;

    var obj = scenes[key];

    for (var prop in obj) {
        // skip loop if the property is from prototype
        if (!obj.hasOwnProperty(prop)) continue;

        new ScrollMagic.Scene({ triggerElement: '#' + prop })
            .setClassToggle('#' + obj[prop], 'active')
            .addTo(controller);
    }
}

// Change behaviour of controller
// to animate scroll instead of jump
controller.scrollTo(function (target) {

    TweenMax.to(window, 0.5, {
        scrollTo: {
            x: target,
            autoKill: true // Allow scroll position to change outside itself
        },
        ease: Cubic.easeInOut
    });

});

//  Bind scroll to anchor links using Vanilla JavaScript
var anchor_nav = document.querySelector('.anchor-nav');

anchor_nav.addEventListener('click', function (e) {
    var target = e.target,
        id = target.getAttribute('href');

    if (id !== null && id.length > 0) {
        e.preventDefault();
        controller.scrollTo(id);

        if (window.history && window.history.pushState) {
            history.pushState("", document.title, id);
        }
    }
});

var $navs = $('.anchor-nav a');

window.addEventListener("wheel", onWheel);

function onWheel(event) {
    event.preventDefault();

    var normalized;
    var delta = event.wheelDelta;
    var scroll = (window.pageXOffset || document.scrollLeft) - (document.clientLeft || 0) || 0;

    if (delta) {
        normalized = (delta % 120) == 0 ? delta / 120 : delta / 12;
    } else {
        delta = event.deltaY || event.detail || 0;
        normalized = -(delta % 3 ? delta * 10 : delta / 3);
    }

    var currentIndex = $navs.index($('.active'));
    var newIndex;
    newIndex = normalized > 0 ? currentIndex + 1 : currentIndex - 1;

    if (newIndex >= 0 && newIndex < $navs.length) {
        $navs.eq(newIndex)[0].click()
    }
}