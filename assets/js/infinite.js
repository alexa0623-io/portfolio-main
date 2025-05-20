$(function() {
    const $marqueeInner = $('.marquee-inner');
    const $items = $('.marquee-item');

    $items.clone().appendTo($marqueeInner);

    gsap.to($marqueeInner, {
        x: -$marqueeInner[0].scrollWidth / 2,
        duration: 24, // Speed control
        ease: 'linear',
        repeat: -1
    });
});