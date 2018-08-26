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
    $('.sb-search').click(function(){
        $(".sb-search.sb-search-open, .no-js .sb-search").css("width", "100%");
        $(".header__logo__line, .header__logo__text").css("display", "none");
        $(".header__logo__img").css("margin-right", "0");
        $(".header__logo").removeClass("col-xl-3");
        $(".header__logo").addClass("col-xl-1");
        $(".sb-search-wrapper").removeClass(" col-xl-1");
        $(".sb-search-wrapper").addClass("col-xl-3");
    });
        $(document).mouseup(function (e){ // событие клика по веб-документу
            var div = $("#sb-search"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                $(".header__logo__line, .header__logo__text").css("display", "block");
                $(".header__logo__img").css("margin-right", "13px");
                $(".header__logo").removeClass("col-xl-1");
                $(".header__logo").addClass("col-xl-3");
                $(".sb-search-wrapper").removeClass("col-xl-3");
                $(".sb-search-wrapper").addClass("col-xl-1");
                $(".sb-search.sb-search-open, .no-js .sb-search").css("width", "0");
                $(".sb-search").css("width", "70px"); // выполняем чтонибудь
            }
    });
});