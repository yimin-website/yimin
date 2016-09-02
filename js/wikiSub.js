//baner
var slider = $('.banner').bxSlider({
    mode:'horizontal',
    displaySlideQty:1,//��ʾli�ĸ���
    moveSlideQty: 1,//�ƶ�li�ĸ���
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
//-----------start 页面tab
var oIndex = 0;
$('.country').eq(0).addClass('over').next().slideDown('fast');
$('.country').on('click',function(){
    var index = $('.country').index($(this));
    if(index == oIndex){
        return;
    }
    $('.country').eq(oIndex).removeClass('over').next().slideUp('fast');
    $(this).addClass('over').next().slideToggle("fast");
    oIndex = index;
});
//-----------end 页面tab


