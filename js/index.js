function indexInit(){
    $('#country-flag-more').on('mouseover',function(){
        console.log(3);
        $('.country-flag-tips').toggleClass('hide show');
    });
    $('#country-flag-more').on('mouseout',function(){
        console.log(3);
        $('.country-flag-tips').toggleClass('hide show');
    });
}
indexInit();
$('.news-left .ct a').on('mouseover',function(){
    var index = $(this).index();
    $('.news-left .ct a').removeClass('bgGreen');
    $(this).addClass("bgGreen");
    $('.news-left-tab').removeClass('show').eq(index).addClass('show');
});
$('.news-right .ct a').on('mouseover',function(){
    var index = $(this).index();
    $('.news-right .ct a').removeClass('bgGreen');
    $(this).addClass("bgGreen");
    $('.news-right-tab').removeClass('show').eq(index).addClass('show');
});
$('.body-info .w .ys-btn a').on('mouseover',function(){
    var index = $(this).index();
    $('.body-info .w .ys-btn a').removeClass('bt');
    $(this).addClass("bt");
});
$('.ymxm li').on('mouseover',function(){
    var index = $(this).index();
    $('.ymxm li').removeClass('over');
    $(this).addClass("over");
});

