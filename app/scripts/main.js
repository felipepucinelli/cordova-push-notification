document.addEventListener('deviceready', init, false);
function init() {

	console.log('//// Device is ready ////');

	var push = PushNotification.init({
		'android': {
				'senderID': '1004785135103'
		},
		'ios': {
       'sound': true,
       'alert': true,
       'badge': true,
       'categories': {
         'newmusic': {
             'yes': {
                 'callback': 'playMusic', 'title': 'Play',
                 'foreground': false, 'destructive': false
             },
             'no': {
                 'callback': 'archive', 'title': 'Archive',
                 'foreground': false, 'destructive': false
             }
         }
       }
    },
		'windows': {}
	});

	push.on('registration', function(data) {
		console.log('registration event: ' + data.registrationId);
		var oldRegId = localStorage.getItem('registrationId');
		if (oldRegId !== data.registrationId) {
			// Save new registration ID
			localStorage.setItem('registrationId', data.registrationId);
			// Post registrationId to your app server as the value has changed
		}
	});

	push.on('error', function(e) {
			console.log('push error = ' + e.message);
	});

	push.on('notification', function(data) {
		console.log('notification event');
		navigator.notification.alert(
			data.message,         // message
			null,                 // callback
			data.title,           // title
			'Ok'                  // buttonName
		);

		// Strictly speaking the call to finish is only required on iOS.
		// It is a no-op on other platforms. The reason we need to do this on iOS is
		// the OS only provides you with 30 seconds of background processing and we need
		// to tell the OS we are done. Failure to do this may cause the OS to kill your
		// app for mis-behaving.

		push.finish(function() {
			console.log('success');
		}, function() {
			console.log('error');
		});
	});

	window.playMusic = function() {
    alert('Play Music!');
  }

  window.archive = function() {
    alert('Archived!');
  }
}
