$(function () {
    $('li:has(ol)').addClass('expand').click(function () {
        $(this).toggleClass('fold').children('ol').toggle(200);
    });
    $('li').click(function (ev) {
        // 阻止冒泡
        ev.stopPropagation();
    });

})