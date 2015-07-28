$.fbLike.objectId = "http://www.facebook.com/codexlabs";
if (OS_ANDROID) {
    $.index.fbProxy = Alloy.Globals.Facebook.createActivityWorker({lifecycleContainer: $.index});
}
$.index.open();