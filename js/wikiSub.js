
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


