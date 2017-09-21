// JavaScript Document
$(function(){


  var mySwiper01 = new Swiper('.swiper-container',{
	autoplay:3000,
	mode : 'horizontal', 
	resistance:'100%',
	loop:true,
	mousewheelControl : true,
	grabCursor: true,
	pagination: '.pagination',
  paginationClickable: true,
	onFirstInit:function(){
		$('.slide1').addClass('ani-slide');
		}
  })
  
	mySwiper01.wrapperTransitionEnd(function () {//隐藏方法
	$('.ani-slide').removeClass('ani-slide')
	$('.swiper-slide').eq(mySwiper01.activeIndex).addClass('ani-slide')
	},true);
	

		slidesPerView=4
		slidesPerGroup=4
	if(document.body.clientWidth>1400){
		slidesPerView=5
		slidesPerGroup=5
	}

  var mySwiper02 = new Swiper('.swiper-container01',{
    loop: true,
    speed:1000,
	onlyExternal : true,
	slidesPerView :  slidesPerView,
	slidesPerGroup : slidesPerGroup,
	loopedSlides :20,
	loopAdditionalSlides : 20,
	onSlideChangeEnd: function(swiper){
	//alert(swiper.activeIndex);
		if(swiper.activeIndex==40){
			swiper.swipeTo(0,0)
			}
    },

  });  
  $('.ss-left').on('click', function(e){
    e.preventDefault()
    mySwiper02.swipePrev()
  })
  $('.ss-right').on('click', function(e){
    e.preventDefault()
    mySwiper02.swipeNext()
  })

}) 