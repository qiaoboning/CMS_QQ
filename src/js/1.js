$(function () {
    $(".aside,.contentRight").niceScroll();
     $("#qq").niceScroll();
     $(document).click(function(){
        console.log(this)
        // $('#box').css('width','10px')
        // $('#box').css('display','block')
        $('#box').toggleClass('showhide')
        // $('#box').toggleClass('hide')
    })
    $('.three_hide').click(function(){
        $(this).children('ol').toggleClass('hide')

    })
    //退出登录
    $('#logout').click(function(){
        $('.right .logout').toggleClass('hide')
        $('.right .log_up').toggleClass('hide')
    })
    // $('aside').tinyscrollbar();

    //树形菜单
    $('li:has(ol)').addClass('expand').click(function () {
        $(this).toggleClass('fold').children('ol').toggle(200);
    });
    $('li,.Ser').click(function (ev) {
        // 阻止冒泡
        ev.stopPropagation();
    });

    // $('.list li a').click(function(){
    // 	$(this).toggleClass('.green')
    // })
    //显示树形菜单
    $('#btn').click(function(){
        $('#bottom .aside').toggleClass('hide')
    })
    //文本框显示与否
    $('.Sea').click(function(){
        $(this).addClass('Rch').blur(function(){
            $(this).removeClass('Rch')
        })
    })

})
