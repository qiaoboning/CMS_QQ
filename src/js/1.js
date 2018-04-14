$(function () {
    $('li:has(ol)').addClass('expand').click(function () {
        $(this).toggleClass('fold').children('ol').toggle(200);
    });
    $('li').click(function (ev) {
        // 阻止冒泡
        ev.stopPropagation();
    });
    // $('.list li a').click(()=>{
    // 	this.css('background','#92c609')
    // })
    $('#btn').click(function(){
        $('#bottom aside').toggleClass('hide')
    })

})
// (function () {
//     new Vue({
//         el:'#bottom'
//     })
// })()