$(document).ready(function(){




	/*  Hamburger Menu & Icon  */
	$('.hamburger').on('click', function(e){
		
		e.preventDefault();
		$(this).toggleClass('opned');
		$('header nav').toggleClass('active');
		
	});




	/*  Advanced search form & Icon  */
	$('#advanced_search_btn').on("click", function(e){
		e.preventDefault();

		var ads_box =$('.advanced_search');
		
		if(!ads_box.hasClass('advanced_displayed')){

			$(this).addClass('active');
			ads_box.stop().fadeIn(200).addClass('advanced_displayed');

		}else{

			$(this).removeClass('active');
			ads_box.stop().fadeOut(200).removeClass('advanced_displayed');

		}

	});

	// Rozwijanie FAQ
	var faq = document.getElementsByClassName("faq-page");
	var i;
	for (i = 0; i < faq.length; i++) {
		faq[i].addEventListener("click", function () {
			/* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
			this.classList.toggle("active");
			/* Toggle between hiding and showing the active panel */
			var body = this.nextElementSibling;
			if (body.style.display === "block") {
				body.style.display = "none";
			} else {
				body.style.display = "block";
			}
		});
	}




});