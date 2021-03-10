function isElementInViewport(elem) {
    var $elem = $(elem);

    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

function checkAnimation() {
    var $elem = $('.segment1 .cat2');

    if ($elem.hasClass('animate__animated animate__bounce')) return;

    if (isElementInViewport($elem)) {
        $elem.addClass('animate__animated animate__bounce');
    }
}

$(window).scroll(function(){
    checkAnimation();
});