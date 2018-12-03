var loadFile = function(event){

		var image = document.getElementById('image');
		image.src= URL.createObjectURL(event.target.files[0]);
	}


$('#compare').on("click",function(){
	var width = $('#image').width();
	$('h3').text(" width is " + width);	
 
	if(width > 600)
	{

		$('#myModal').fadeIn();
		$('span').on("click", function() {
   			$('#myModal').fadeOut(); 
		});
		$('.Again').on("click", function() {
   		window.location.reload();
   		}); 
	
	}

	else {

		if(width == 600) 
		{
			$('#myModal1').fadeIn();
			$('span').on("click", function() {
   				$('#myModal1').fadeOut(); 
			});
			$('.Again').on("click", function() {
   			window.location.reload();
   			}); 

		}
	}
	
 if(width < 600) 
		{
			$('#myModal2').fadeIn();
			$('span').on("click", function() {
   				$('#myModal2').fadeOut(); 
			});
			$('.Again').on("click", function() {
   			window.location.reload();
   			}); 

		}




});
















// const compare = () => {
// var width = $('img').width();
// var modal = $('#myModal');	
// 	if(width > 600){

// 		// swal({
//   // 				title: "Error",
//   // 				text: "image is too big",
//   // 				icon: "error",
//   // 				button: "Upload Again"

// 		// })

		

		

// 	}

// 	if(width == 600){
 
// 		swal({
//   				title: "Good job!",
//   				text: "image can be uploaded",
//   				icon: "success",
//   				button: "Aww yiss!",
// 		})

// 	}

// 	if(width < 600 ){

// 		swal({
//   				title: "Error",
//   				text: "image is too small",
//   				icon: "error",
//   				button: "Upload Again",
// 		})

// 	}
	
	
// }