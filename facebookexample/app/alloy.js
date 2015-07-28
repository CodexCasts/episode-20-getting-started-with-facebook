// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//

//This is actually good documentation
// http://docs.appcelerator.com/platform/latest/#!/api/Modules.Facebook
Alloy.Globals.Facebook = require('facebook');

/*
//optional 
fb.permissions = [FACEBOOK_APP_PERMISSIONS];

//-------------------------------------------------
//initialize( timeout )
//Loads a cached Facebook session if available, then fires the login event.
//Be sure to set your login and logout event listeners before calling initialize.

// This is an alternative to a login button.

//Parameters
// timeout : Number
//Sets initialize timeout in milliseconds.
//
//Returns void
----------------------------------------------------------
fb.initialize(1000);


fb.authorize();
*/


/*
//To request additional write permissions
fb.requestNewPublishPermissions(['read_stream','user_hometown', etc...], fb.AUDIENCE_FRIENDS, function(e){
    if(e.success){
		// see 
		// http://docs.appcelerator.com/platform/latest/#!/api/Modules.Facebook-method-requestWithGraphPath
        // also 
		// https://developers.facebook.com/docs/graph-api
		fb.requestWithGraphPath(...);
    } else if (e.cancelled){
    //do stuff with cancelled event.
    } else {
        Ti.API.debug('Failed authorization due to: ' + e.error);
    }
});
*/