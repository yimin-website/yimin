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
    $('.news-left .ct a').removeClass('bgGreen');
    $(this).addClass("bgGreen");
    $('.news-left-tab').removeClass('show').eq(index).addClass('show');
});