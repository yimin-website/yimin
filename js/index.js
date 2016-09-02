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
//������Ŀ
$('.ymxm li').on('mouseover',function(){
    $(this).addClass("over");
});
$('.ymxm li').on('mouseout',function(){
    $(this).removeClass("over");
});
//����֮·tab
$('.ymzl-tab-btn a').on('mouseover',function(){
    var index = $(this).index();
    $('.ymzl-tab-btn a').removeClass('over').eq(index).addClass("over");
    $('.ymzl-tab').removeClass('show').eq(index).addClass("show");
});
