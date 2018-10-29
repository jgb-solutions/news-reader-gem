/* Dynamic Window Ajax Portfolio Content */
"use strict";

var $actual= null;
var obert=false;
$(".ch-grid").click(function() {
		obre($(this).attr('id'));
		$actual=$(this);
});
$(".folio-btn").click(function() {
		$(".project-window").slideUp("fast");
		obert=false;
});

//obre('/portfolio-1',1);

		
function obre(quin, dummy){
$.ajax({
	url: quin,
	success: function(data) {					
		$('.project-content').html(data);
		$(".project-content").hide(0)
		$('.project-window').hide(0)	
		tanca();
		canvia();
		worksCarousel();
		
		
		if(dummy!=1){
			
//			if(obert!=true){
				$("html, body").animate({ scrollTop: $('#anchor-services').offset().top -75}, 0, function(){
					$('.project-window').show(0);
					$('.project-window').animate({height:900}, 0,function(){
						$('.project-window').css('height','auto');
//					$(".project-window").slideDown(1500, function() {
						$(".project-content").fadeIn("fast");
					});				
				});
				
/*			}else{
				$("html, body").animate({ scrollTop: $('#anchor5').offset().top }, 300, function(){
					$('.project-window').show(0);
					$(".project-content").fadeIn("fast");
				});
			}
			obert=true;		*/
		}
	}
});
}

function tanca(){
	$(".close").click(function() {
		$(".project-window").slideUp("fast");
		$("html, body").animate({ scrollTop: $('#anchor-services').offset().top -75}, 0);
		obert=false;
	});
}

function seguent(){
	if($actual.next().hasClass('final')){
		$actual=$($('.inici').next());
	}else{
		$actual=$($actual.next());
	}
	if($actual.hasClass('isotope-hidden')){
		seguent();
	}else{
		obre($actual.attr('id'));
	}
}

function enrera(){
	if($actual.prev().hasClass('inici')){
		$actual=$($('.final').prev());
	}else{
		$actual=$($actual.prev());
	}

	if($actual.hasClass('isotope-hidden')){
		enrera();
	}else{
		obre($actual.attr('id'));
	}
}

function canvia(){
	$('.btn-next').click(function() {
		seguent();
		$("html, body").fadeIn();
	});
	$('.btn-prev').click(function() {
		enrera();
		$("html, body").fadeIn();
	});
}

// Carousel Project Opened
function worksCarousel(){
var totalWorks = $(".wrapper-project ul li").length;
var ampleWork = $(".project-content").width();
var ampleTotalWorks = totalWorks*ampleWork;
$('.wrapper-project ul').css('width',ampleTotalWorks)
	
var fragment = document.createDocumentFragment(), 
li = document.createElement('li');
while (totalWorks--) {
	fragment.appendChild(li.cloneNode(true));
}

$('.controller-2 ul').append(fragment);

var index3 = 0;
var pos3 = 1;
$('.controller-2 ul li:first-child').addClass('selected');

$(".controller-2 ul li").click(function(){
	index3 = $(this).index();
	$(".wrapper-project").stop().animate({scrollLeft:ampleWork*index3},'fast');
	 $('.controller-2 ul li').removeClass('selected');
	$(this).addClass('selected');
	//alert(ampleitem);
});
$(".w-next").click(function(){
		if( index3 != $(".controller-2 ul li").size()-1){
		  index3++;
		  $(".wrapper-project").stop().animate({scrollLeft:ampleWork*index3},'fast');
		  pos3++;
		  $('.controller-2 ul li.selected').removeClass('selected').next().addClass('selected');
	}
   });
$(".w-prev").click(function(){
  if( index3!=0 ){
	  index3--;
	  $(".wrapper-project").stop().animate({scrollLeft:ampleWork*index3},'fast');
	  pos3--;
	  $('.controller-2 ul li.selected').removeClass('selected').prev().addClass('selected');
  }
});
}