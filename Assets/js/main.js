// Sticky Navigation
let navbar =$(".navbar");

$(window).scroll(function(){
    let oTop =$(".section-2").offset().top-window.innerHeight;

    if($(window).scrollTop()>oTop){
        navbar.addClass("sticky");
    }else{
        navbar.removeClass("sticky");
    }
});


// Counter Animation
let  nCount= function(selector){
    $(selector).each(function(){
        $(this).animate({
            counter:$(this).text()
        },{
            duration:4000,
            easing:"swing",
            step:function(value){
                $(this).text(Math.ceil(value));
            }
        })
    });
};

let a = 0;
$(window).scroll(function(){
    let oTop =$(".numbers").offset().top-window.innerHeight;

    if((a==0) && $(window).scrollTop()>=oTop){
        a++;
        nCount(".rect>h1");
    } 
})


/*FOOTER CURRENT YEAR AUTO UPDATE*/
const year = document.getElementById('year');
currentYear = new Date().getFullYear();
newYear = new Date(`january 01 ${currentYear +1} 00:00:00`);
year.innerText = currentYear;
/*END OF FOOTER CURRENT YEAR AUTO UPDATE*/



