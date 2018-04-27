// Function for hover
$('.back-select').hover(function(){
    var img = $(this).data('img');
    console.log(img)
    $('.wrapper').css('background', 'url(' + img + ')');
    $('.wrapper').css('background-size', 'cover');
}, function(){
    $('.wrapper').css('background', 'black');
})
// Function for click 
$('.back-select').click(function(){

    $(this).off('mouseenter mouseleave'); 
    $('.background-box').hide();
    $('.ninja-box').show();
    
    var img = $(this).data('img');
    $('.wrapper').css('background', 'url(' + img + ')');
    $('.wrapper').css('background-size', 'cover');
});
$('.ninja-choice').change(function(){
    var side = $(this).attr('id');
    var img = $(this).val();
    console.log(img);
    console.log(side);
    var html_str = "<img src='" + img + "' alt=''>";
    if(side == 'ninjaOne'){
        $('#left').html(html_str);
    }else{
        $('#right').html(html_str);
    }
})

