

		$('.submit').on('click', function(){
			event.preventDefault();
			console.log('the button was clicked')
			var newFriend = {
				name: $('#name').val().trim(),
				photo: $('#photo').val().trim(),
				scores: [
				$('#s1').val(),
				$('#s2').val(),
				$('#s3').val(),
				$('#s4').val(),
				$('#s5').val(),
				$('#s6').val(),
				$('#s7').val(),
				$('#s8').val(),
				$('#s9').val(),
				$('#s10').val()
				]
			}


			var currentURL = window.location.origin;

			$.post(currentURL + '/api/friends', newFriend,
				function(data) {

					
					if (data) {

						data.forEach(function(res) {
							$("#friend-name").text(res.name);
							$("#friend-photo").attr("src", res.photo);
							$("#myModal").show();
							

						});

					}

				});
		});