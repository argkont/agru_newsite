$a=jQuery.noConflict();
jQuery(window).load(function(){
	$a('.load').delay(1000).fadeOut();
	$a('p, h1, h2, h3, h4, h5, img, li, ul, #btn_login, #btn_register, .oferta_top, .ocult').delay(1400).fadeIn();
});
jQuery(document).ready(function($){
   //script header
   $a('#btn_login').click(function(){
		$('.cont-login').show().slideDown('slow');
		
		$('.cont_login').fadeIn();
		
		$('.close_login').show('slow');
   });
   $a('.close_login').click(function(){
   		$('.cont_login').fadeOut().delay(1000).slideUp('slow').hide();
   		$('.close_login').hide('slow');
   });
   
   //script masonry cupones
   	$a('#posts').masonry({
  	// set columnWidth a fraction of the container width
  	itemSelector: '.post',
  	containerStyle: {position:'relative'},
  	isAnimated:true,
 	columnWidth: function( containerWidth ) {
			if(containerWidth < 1200 && containerWidth>=980){
				return containerWidth / 3;
			}
		//phone < 767
		//tablet < 768 >979
			if(containerWidth < 980 && containerWidth>=768){
				return containerWidth / 3;
			}
		
			if(containerWidth < 767){
				return containerWidth / 2;
			}
		//return containerWidth / 2;
  		}
	});
	
	//script back history
	$a('.btn_back').click(function(){
		window.history.back()
	});
	
	//script incluye anima
		$a('.btn_oc').click(function(){
			$('.in_box_animate').toggle('fast', function(){
				var $anima = $('.in_box');
				$(this).is(':visible') ? $anima.animate({top:'-123px'},500) : $anima.animate({top:'0'},500);
			});
		});
	
	//script view map comercio
	$a('.btn_mapa').click(function(){
		$('.view_mapa').toggle('slow');
	});
	
	$a('.scroll_dest').slimScroll({
          height: '380px',
          width: '100%',
		  color: '#c22820',
		  size: '8px',
    	  position: 'right',
    	  distance: '5px',
    	  railColor: '#fff',
    	  alwaysVisible: true,
    	  opacity: 1,
    	  railVisible : true,
		  railOpacity: 1
      });
      $a('.in_box_animate').slimScroll({
      	  height: '100px',
          width: '90%',
		  color: '#801a1e',
		  size: '5px',
    	  position: 'right',
    	  distance: '10px',
    	  railColor: '#c22820',
    	  alwaysVisible: true,
    	  opacity: 1,
    	  railVisible : true,
		  railOpacity: 1
      });
	  //script scroll cupones
	  $a('.scroll_cup').slimScroll({
      	  height: '500px',
          width: '100%',
		  color: '#801a1e',
		  size: '5px',
    	  position: 'right',
    	  distance: '10px',
    	  railColor: '#c22820',
    	  alwaysVisible: true,
    	  opacity: 1,
    	  railVisible : true,
		  railOpacity: 1
      });
	  
	  //script scroll creditos
	  $a('.scroll_cre').slimScroll({
      	  height: '450px',
          width: '100%',
		  color: '#801a1e',
		  size: '5px',
    	  position: 'right',
    	  distance: '10px',
    	  railColor: '#c22820',
    	  alwaysVisible: true,
    	  opacity: 1,
    	  railVisible : true,
		  railOpacity: 1
      });
	  
	  //script uniform
	  $("select, #checksty").uniform();
  
});