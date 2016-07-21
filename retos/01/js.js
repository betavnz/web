

// L nunca permite mis trampas
$('.caminito').mouseenter( function () {

	// L es mas facil como dije, x.x, algo como, si el mause pasa por el fondo, si, entiendo.delete();

	// statePlayer = true; ["cam","n", "to"," sh", "1"]
	window.onmouseover=function(event) { 
    
    	var req = event.target.className.split(" ")[0]; //"caminito shi1" ["caminito", "shi1"]

	    if( req === "caminito"){

	    }else{
	    	console.log("no estoy ahi");
		    $('.loss').attr('src', 'https://66.media.tumblr.com/avatar_4ddf1cbd02a8_128.png');
	    }

	}; 

});

// $('.caminito').mouseleave( function () {

//     console.log('mouse ah salido'); 
//     statePlayer = false;
//     // con or or or or or si esta en el shi or shi1 or shi2 statePlayer= true  se pone los 1000 hahahaha
//     if( statePlayer === true){

//     }else{

//     }



// });



