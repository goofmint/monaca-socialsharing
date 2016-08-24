document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	window.plugins.socialsharing.iPadPopupCoordinates = function() {
	  var rect = document.getElementById('share_button').getBoundingClientRect();
	  return rect.left + "," + rect.top + "," + rect.width + "," + rect.height;
	};
}
