$(document).ready(()=> {
    // sidebar kategory
    const obj = $('.list li');
    $('.list li').click(function() {
        $(this).toggleClass('show');
    });
});