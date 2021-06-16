$(".hero__our-clients-slider").slick({
    infinite: true,
    speed: 300,
    cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: $('.hero__our-clients-list .arrow_prev'),
    nextArrow: $('.hero__our-clients-list .arrow_next'),
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ] 
})
$(".expert__specialist-list").slick({
    infinite: true,
    speed: 300,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.expert__right-content .arrow_prev'),
    nextArrow: $('.expert__right-content .arrow_next') 
})
$(".hero__audit-whatis").on("click",function(){
    $('.hero__audit-popup').fadeToggle(300)
})

$(".cases__slider").slick({
    infinite: true,
    speed: 300,
    cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: $('.cases__list .arrow_prev'),
    nextArrow: $('.cases__list .arrow_next'),
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll:2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
})
$(".promotion__item").css("display", "flex");
$(".promotion__item").each(function(index){
    if (index != 0) {
        $(this).hide()
    }
})
$(".promotion__select-item").on("click",function(){
    $(".promotion__select-item.active").removeClass('active');
    $(this).addClass("active");
    let currentSelected = this
    $(".promotion__item.active").removeClass("active").fadeOut(300,function(){
        $(".promotion__select-item").each(function(index){
            if(this == currentSelected ) {
                $($(".promotion__item")[index]).addClass("active").fadeIn(300);
            }
        })
    });
   
 
})

$(".info__item-title").on("click",function(){
    $(this).toggleClass("active");
    $(this).next().slideToggle(300)
})

$(".specialist__open-about").on("click",function(){
    $(this).closest(".expert__specialist").find(".specialist__about").slideToggle(300)
})
$(".promition__item-example").on('click',function(){
    $(".promotion__form-popup").fadeIn(300)
})
$(".cases__slider").on('click',function(e){
    if (e.target.tagName == 'A') {
        $(".cases__form-popup").fadeIn(300)
    }
})
$('.form-popup').on('click', function(e) {
    if (!$(e.target).closest("form").length ) {
      $('.form-popup').fadeOut(300)
    }
    e.stopPropagation();
  });
  $(".form-popup__close").on("click",function(){
    $(this).closest(".form-popup").fadeOut(300)
})
$(".specialist__ask.btn").on('click',function(){
    $(".expert__form-popup").fadeIn(300)
})
$(".form__button").on('click',function(e){
    e.preventDefault();
    if ($(this).closest(".cases__form").hasClass("cases__form") || $(this).closest(".expert__form-popup").hasClass("expert__form-popup") ) {
        $(this).closest(".form-popup").fadeOut(300)
    }
})
$(".promotion__form .btn.form__button").on('click',function(){
  $(".promo_note").css("color","black")
})
jQuery(function($){
  $("input").each(function(){
      if($(this).attr("name") == "tel") {
          Inputmask({"mask": "+7 (999) 999-99-99"}).mask(this);
      }
  })
  $('.basic_select').select2();

})

let bg = document.querySelectorAll('.hero_parallax');
for (let i = 0; i < bg.length; i++){
    window.addEventListener('mousemove', function(e) { 
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;     
        bg[i].style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
    });    
}

