/**
 * Created by wendy on 2016/9/4.
 */
/*�����л�*/
$('.wiki .list-ti .unit span').on('click',function(){
    $('.wiki .list-ti .unit span').removeClass('bt').eq($(this).index()).addClass('bt');
});