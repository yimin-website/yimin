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
$('.news-left .ct a').on('mouseover',function(a,b){
    var index = $(this).index();
    $('.news-left-tab').removeClass('show');
    $('.news-left-tab').addClass('hide');
    $('.news-left .ct a').removeClass('bgGreen bgNone');
    $('.news-left .ct a').addClass('bgNone');
    $('.news-left-tab').eq(index).addClass('show');
    $(this).toggleClass('bgNone bgGreen');
    console.log(this);
});