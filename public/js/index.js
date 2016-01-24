var bookItem = `<div class='BookItem align-center'>
	  				<div class='BookCoverImage InlineBlockElement'>
	  					<img src="" height="121" width="121">
	  				</div>
	  				<div class='BookInfo InlineBlockElement v-align-top align-right'>
		  				<div class='BookTitle'>
		  					<h4>Linear Algebra</h4>
		  				</div>
		  				<div class='BookAuthor align-right'>
		  					<p class='InlineBlockElement'>by </p>
		  					<p class='InlineBlockElement'>Me</p>
		  				</div>
	  				</div>
	  			</div>`;

var bookDetail = `<div class='BookDetail ContentContainer'>
					<div class= 'BookCoverImage'>
						<img src="" height="225" width="225">
					</div>
					<div class='BookInfo'>
		  				<div class='BookTitle'>
		  					Book Title
		  				</div>
		  				<div class='BookAuthor'>
		  					Book Author
		  				</div>
	  				</div>
	  				<div class='BookDescription'>
		  					Book Description
		  			</div>
		  			<button id='button_buy' class="button info block-shadow-info text-shadow">Buy</button>
		  			<button id='button_rent' class="button info block-shadow-info text-shadow">Rent</button>
		  			<button id='button_swap' class="button info block-shadow-info text-shadow">Sway</button>
				</div>`;

var signUpPage = `<div class='SignUpPage ContentContainer'>
					<div class='UserAvatar margin20'>
						<img src="" height="270" width="270">
						<button class="button margin20">Upload Your Avatar</button>
					</div>
					<div id='email'>
						<div class='InlineBlockElement'>
							<div class="input-control text">
						    	<input type="text">
							</div>
						</div>
						<p class='InlineBlockElement'> Email</p>
					</div>
					<div id='display_name'>
						<div class='InlineBlockElement'>
							<div class="input-control text">
						    	<input type="text">
							</div>
						</div>
						<p class='InlineBlockElement'> Display Name</p>
					</div>
					<div id='password'>
						<div class='InlineBlockElement'>
							<div class="input-control text">
						    	<input type="text">
							</div>
						</div>
						<p class='InlineBlockElement'> Password</p>
					</div>
					<div id='re_enter_password'>
						<div class='InlineBlockElement'>
							<div class="input-control text">
						    	<input type="text">
							</div>
						</div>
						<p class='InlineBlockElement'> Re Enter Password</p>
					</div>
					<p class='margin10'>Behold! Please Double Check Your Info!</p>
					<button id='button_create_account' class="button">Create</button>
				</div>`;

var userProfile = `<div class='UserProfile'>
					<div class='UserAvatar'>
						<img height='100px' width='100px'>
						<p>You Avartar</p>
					</div>
					<div class='UserName'>
						User Name
						<button class="button">Change UserName</button>
					</div>
					<div class='Email'>
						Email
					</div>
				</div>`;

$(document).ready(function() {
		console.log('ready!!');
		populateBookFlow(bookItem);
		addListeners();
		sizeAdapter();
	}
);

function populateBookFlow(html) {
	$('#bookflow').append(html);
	$('#bookflow').append(html);
	$('#bookflow').append(html);
	$('#bookflow').append(html);
	$('.BookItem').on('click', function() {
		console.log('123');
		$('#page_content_container').html(bookDetail);
		$('#button_buy').on('click', function() {
			sendMessagePage();
		});
		$('#button_rent').on('click', function() {
			sendMessagePage();
		});
		$('#button_swap').on('click', function() {
			sendMessagePage();
		});
	});
}

function sendMessagePage() {
	$('#page_content_container').html(`
		<div class='SendMessagePage'>
			<div id='Message' class="input-control text big-input">
			    <input type="text">
			</div>
			<div>
				<button id='button_send' class="button info block-shadow-info text-shadow">Send</button>
			</div>
		</div>
	`);
}

function addListeners() {
	$('#button_signup').on('click', function() {
		$('#page_content_container').html(signUpPage);
		$('#button_create_account').on('click', function() {
			$('#page_content_container').html("<div id='bookflow'></div>");
			populateBookFlow(bookItem);
		});
	});
}

function sizeAdapter() {
	$(window).resize(function() {
		
	});
}
