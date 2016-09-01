(function(){
    $('#country-flag-more').on('mouseover',function(){
        $('.country-flag-tips').toggleClass('hide show');
    });
    $('#country-flag-more').on('mouseout',function(){
        $('.country-flag-tips').toggleClass('hide show');
    });
})();
$('.news-left .ct a').on('mouseover',function(){
    var index = $(this).index();
    $('.news-left .ct a').removeClass('bgGreen').eq(index).addClass("bgGreen");
    $('.news-left-tab').removeClass('show').eq(index).addClass('show');
});
$('.news-right .ct a').on('mouseover',function(){
    var index = $(this).index();
    $('.news-right .ct a').removeClass('bgGreen').eq(index).addClass("bgGreen");;
    $('.news-right-tab').removeClass('show').eq(index).addClass('show');
});
$('.body-info .w .ys-btn a').on('mouseover',function(){
    var index = $(this).index();
    $('.body-info .w .ys-btn a').removeClass('bt').eq(index).addClass("bt");
});
//移民项目
$('.ymxm li').on('mouseover',function(){
    $(this).addClass("over");
});
$('.ymxm li').on('mouseout',function(){
    $(this).removeClass("over");
});
//移民之路tab
$('.ymzl-tab-btn a').on('mouseover',function(){
    var index = $(this).index();
    $('.ymzl-tab-btn a').removeClass('over').eq(index).addClass("over");
    $('.ymzl-tab').removeClass('show').eq(index).addClass("show");
});
