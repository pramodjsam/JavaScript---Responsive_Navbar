const navSlide= function(){
	const burger= document.querySelector(".burger");
	const nav= document.querySelector(".nav-links");
	const navLinks = document.querySelectorAll(".nav-links li");

	burger.addEventListener("click",function(){
		nav.classList.toggle("nav-active")
		navLinks.forEach(function(link,index){
		if(link.style.animation){
			link.style.animation=""
		}else{
			link.style.animation=`navLinkFade 0.5s ease forward ${index/7}s`;
		}
	})
		burger.classList.toggle("toggle")
	})

}

navSlide();