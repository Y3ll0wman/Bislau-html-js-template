$( document ).ready(function() {
    $('#navigation__metalStructures').click(function(){
        $(".tabletsCards").css("display", "none");
        $(".metalStructuresCards").css("display", "flex");
        $(".navigation__metalStructures__wrapper").css("background-color", "#ffffff");
        $(".navigation__metalStructures__wrapper").css("box-shadow", "0px -4px 3px 2px rgba(0,0,0,.1)");
        $(".navigation__tablets__wrapper").css("background-color", "transparent");
        $(".navigation__tablets__wrapper").css("box-shadow", "0px 0px 0px 0px rgba(0,0,0,.1)");
        $(".navigation__tablets__line").css("display", "none");
        $(".navigation__metalStructures__line").css("display", "block");
    });
    $('#navigation__tablets').click(function(){
        $(".metalStructuresCards").css("display", "none");
        $(".tabletsCards").css("display", "flex");
        $(".navigation__tablets__wrapper").css("background-color", "#ffffff");
        $(".navigation__tablets__wrapper").css("box-shadow", "0px -4px 3px 2px rgba(0,0,0,.1)");
        $(".navigation__metalStructures__wrapper").css("background-color", "transparent");
        $(".navigation__metalStructures__wrapper").css("box-shadow", "0px 0px 0px 0px rgba(0,0,0,.1)");
        $(".navigation__tablets__line").css("display", "block");
        $(".navigation__metalStructures__line").css("display", "none");
    });
    $('.header__search-wrapper').mouseover(function(){
        $(".search-form").css("display", "flex");
    });
    $('.header__search-wrapper').mouseout(function(){
        $(".search-form").css("display", "none");
    });
    $('.tabletsCards__item1').mouseover(function(){
        $(".tabletsCards__icon__effect1").css("display", "flex");
    });
    $('.tabletsCards__item1').mouseout(function(){
        $(".tabletsCards__icon__effect1").css("display", "none");
    });
    $('.tabletsCards__item2').mouseover(function(){
        $(".tabletsCards__icon__effect2").css("display", "flex");
    });
    $('.tabletsCards__item2').mouseout(function(){
        $(".tabletsCards__icon__effect2").css("display", "none");
    });$('.tabletsCards__item3').mouseover(function(){
        $(".tabletsCards__icon__effect3").css("display", "flex");
    });
    $('.tabletsCards__item3').mouseout(function(){
        $(".tabletsCards__icon__effect3").css("display", "none");
    });$('.tabletsCards__item4').mouseover(function(){
        $(".tabletsCards__icon__effect4").css("display", "flex");
    });
    $('.tabletsCards__item4').mouseout(function(){
        $(".tabletsCards__icon__effect4").css("display", "none");
    });$('.tabletsCards__item5').mouseover(function(){
        $(".tabletsCards__icon__effect5").css("display", "flex");
    });
    $('.tabletsCards__item5').mouseout(function(){
        $(".tabletsCards__icon__effect5").css("display", "none");
    });$('.tabletsCards__item6').mouseover(function(){
        $(".tabletsCards__icon__effect6").css("display", "flex");
    });
    $('.tabletsCards__item6').mouseout(function(){
        $(".tabletsCards__icon__effect6").css("display", "none");
    });$('.tabletsCards__item7').mouseover(function(){
        $(".tabletsCards__icon__effect7").css("display", "flex");
    });
    $('.tabletsCards__item7').mouseout(function(){
        $(".tabletsCards__icon__effect7").css("display", "none");
    });$('.tabletsCards__item8').mouseover(function(){
        $(".tabletsCards__icon__effect8").css("display", "flex");
    });
    $('.tabletsCards__item8').mouseout(function(){
        $(".tabletsCards__icon__effect8").css("display", "none");
    });
});