$(document).ready(function(){
	maxWidth = $(window).width();
	var citySliderLoaded = false,
		ageSliderLoaded = false,
		firstTabLoaded = false,
		secondTabLoaded = false,
		thirdTabLoaded = false;
	function citySlider() {
		if (citySliderLoaded) {
			var slider = $(".city-slider");
		}else {
			var slider = $(".city-slider").bxSlider({ pager: false });
			citySliderLoaded = true;
		}
		setTimeout(slider.reloadSlider, 300);
	};
	function ageSlider() {
		if (ageSliderLoaded) {
			var slider = $(".age-slider");
		}else {
			var slider = $(".age-slider").bxSlider({ pager: false });
			ageSliderLoaded = true;
		}
		setTimeout(slider.reloadSlider, 300);
	};
	var segwaySlider = $('#tab-1 .segway-slider').bxSlider({
		minSlides: 2,
		maxSlides: 2,
		slideWidth: 140,
		slideMargin: 20,
		auto: false,
		controls: false
	});
	$(".segway-slider img").click(function () {
		$(".segway-slider .active").removeClass("active");
		$(this).addClass("active");
	})
	
	if (maxWidth < 480) {
		var customersVideoSlider = $(".customers-slider").bxSlider({
			minSlides: 1,
			maxSlides: 1,
			pager: false,
			slideWidth: 440,
			slideMargin: 20
		});
	} else {
		var customersVideoSlider = $(".customers-slider").bxSlider({
			minSlides: 3,
			maxSlides: 3,
			pager: false,
			slideWidth: 440,
			slideMargin: 20
		});
	}
	
	var customersSlider = $(".reviews-slider .slider").bxSlider({
		pager: false
	});
	var workersSlider = $(".workers-slider").bxSlider({
		pagerCustom: "#workers-pager"
	});
	if (maxWidth < 480) {
		var gallerySlider = $(".gallery-slider>div").bxSlider({
			slideWidth: 200,
			minSlides: 2,
			maxSlides: 2,
			moveSlides: 1,
			slideMargin: 10,
			pager: false
		});
	} else {
		var gallerySlider = $(".gallery-slider>div").bxSlider({
			slideWidth: 200,
			minSlides: 7,
			maxSlides: 7,
			moveSlides: 1,
			slideMargin: 10,
			pager: false
		});
	}

	$("#city-models-btn").on("click", citySlider);
	$("#age-models-btn").on("click", ageSlider);
	new WOW().init();
	$(".btn-calculator").click(function () {
		$(".calculator-result").slideDown();
		var label = $(".calculator-result span");
		label.text("0");
		function sumCounter() {
			if (parseInt(label.text())<500) {
				label.text(parseInt(label.text()) + 25);
			} else {
				clearInterval(sumInterval);
				return false;
			}
		}
		var sumInterval = setInterval(sumCounter, 70);
	});
	$(".to-catalog").click(function(){
		$("html, body").animate({scrollTop:$("#review").position().top-100}, 1000);
	});
	$(".to-calculator").click(function(){
		$("html, body").animate({scrollTop:$("#calculator").position().top}, 1000);
	});
	$(".to-wholesale").click(function(){
		$("html, body").animate({scrollTop:$("#wholesale").position().top}, 1000);
	});
	$(".to-video").click(function(){
		$("html, body").animate({scrollTop:$("#video").position().top}, 1000);
	});
	$(".about form").click(function () {
		$(".about form h2").removeClass("infinite");
	});

	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		var target = $(e.target).attr("href");
		if ($(String(target)).find(".bx-viewport").length===0) {
			var sliderPath = String(target) + " .segway-slider";
			var segwaySlider1 = $(sliderPath).bxSlider({
				minSlides: 2,
				maxSlides: 2,
				slideWidth: 140,
				slideMargin: 20,
				auto: false,
				controls: false
			});
			setTimeout(segwaySlider1.reloadSlider, 300);
			console.log("reloaded");
		}
	});

	$(".take-consultation").click(function(){
		$("#modal-thx-1").modal();
	});
	$(".take-call").click(function () {
		$("#modal-thx-2").modal();
	});
	$(".buy").click(function () {
		$(".modal").modal("hide");
		setTimeout(function () {
			$("#modal-thx-5").modal();
		}, 350 );		
	})
	$(".make-review").click(function () {
		$("#modal-thx-3").modal();
	});
	$(".modal-thx .btn").click(function () {
		$(".modal-thx").modal("hide");
	});
	$(".discount .btn").click(function () {
		$("#modal-thx-2").modal();
	});
	$(".test-drive .btn").click(function () {
		$("#modal-thx-5").modal();
	});
	$(".open-video").click(function () {
		$("#modal-thx-6").modal();
		var videoSrc = $(this).data("video");
		setTimeout(function () {
			$("#modal-thx-6 iframe").attr("src", videoSrc);
		}, 300);
	})
	
});