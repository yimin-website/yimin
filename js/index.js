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