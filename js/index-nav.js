$( document ).ready(function() {
    $('#navigation__metalStructures').click(function(){
        $(".tabletsCards").css("display", "none");
        $(".metalStructuresCards").css("display", "flex");
        $(".navigation__metalStructures").css("background-color", "#ffffff");
        $(".navigation__metalStructures").css("box-shadow", "0px -4px 3px 2px rgba(0,0,0,.1)");
        $(".navigation__tablets").css("background-color", "transparent");
        $(".navigation__tablets").css("box-shadow", "0px 0px 0px 0px rgba(0,0,0,.1)");
        $(".navigation__tablets__line").css("display", "none");
        $(".navigation__metalStructures__line").css("display", "block");
    });
    $('#navigation__tablets').click(function(){
        $(".metalStructuresCards").css("display", "none");
        $(".tabletsCards").css("display", "flex");
        $(".navigation__tablets").css("background-color", "#ffffff");
        $(".navigation__tablets").css("box-shadow", "0px -4px 3px 2px rgba(0,0,0,.1)");
        $(".navigation__metalStructures").css("background-color", "transparent");
        $(".navigation__metalStructures").css("box-shadow", "0px 0px 0px 0px rgba(0,0,0,.1)");
        $(".navigation__tablets__line").css("display", "block");
        $(".navigation__metalStructures__line").css("display", "none");
    });
    $('.tabletsCards__item1__icon').mouseover(function(){
        $(".tabletsCards__icon__effect1").css("display", "flex");
    });
    $('.tabletsCards__item1__icon').mouseout(function(){
        $(".tabletsCards__icon__effect1").css("display", "none");
    });
    $('.tabletsCards__item2__icon').mouseover(function(){
        $(".tabletsCards__icon__effect2").css("display", "flex");
    });
    $('.tabletsCards__item2__icon').mouseout(function(){
        $(".tabletsCards__icon__effect2").css("display", "none");
    });$('.tabletsCards__item3__icon').mouseover(function(){
        $(".tabletsCards__icon__effect3").css("display", "flex");
    });
    $('.tabletsCards__item3__icon').mouseout(function(){
        $(".tabletsCards__icon__effect3").css("display", "none");
    });$('.tabletsCards__item4__icon').mouseover(function(){
        $(".tabletsCards__icon__effect4").css("display", "flex");
    });
    $('.tabletsCards__item4__icon').mouseout(function(){
        $(".tabletsCards__icon__effect4").css("display", "none");
    });$('.tabletsCards__item5__icon').mouseover(function(){
        $(".tabletsCards__icon__effect5").css("display", "flex");
    });
    $('.tabletsCards__item5__icon').mouseout(function(){
        $(".tabletsCards__icon__effect5").css("display", "none");
    });$('.tabletsCards__item6__icon').mouseover(function(){
        $(".tabletsCards__icon__effect6").css("display", "flex");
    });
    $('.tabletsCards__item6__icon').mouseout(function(){
        $(".tabletsCards__icon__effect6").css("display", "none");
    });$('.tabletsCards__item7__icon').mouseover(function(){
        $(".tabletsCards__icon__effect7").css("display", "flex");
    });
    $('.tabletsCards__item7__icon').mouseout(function(){
        $(".tabletsCards__icon__effect7").css("display", "none");
    });$('.tabletsCards__item8__icon').mouseover(function(){
        $(".tabletsCards__icon__effect8").css("display", "flex");
    });
    $('.tabletsCards__item8__icon').mouseout(function(){
        $(".tabletsCards__icon__effect8").css("display", "none");
    });
});