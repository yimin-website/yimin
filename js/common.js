/**
 * Created by wendy on 2016/9/3.
 */
//baner
var slider = $('.banner').bxSlider({
    mode:'horizontal',
    displaySlideQty:1,//???li?????
    moveSlideQty: 1,//???li?????
    auto: true,
    onSlideNext:setBads
});
function setBads(a,b,c){
    $('.bads a').removeClass('over').eq(c).addClass('over');
}

$('.bads a').on('click',function(){
    var i = $(this).index();
    slider.goToSlide(i);
    $('.bads a').removeClass('over').eq(i).addClass('over');
});
//------------end baner