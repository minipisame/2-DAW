navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.msGetUserMedia;
navigator.getUserMedia({video: false, audio: true}, onSuccess, onError);
function onSuccess(streamVideo) {
    var videoProvider;
 
    if (window.URL) {
        videoProvider = window.URL.createObjectURL(streamVideo);
    } else {
        videoProvider = streamVideo;
    }
 
    myVideo.src = videoProvider;
    myVideo.play();
 
    myButton.value = "stop";
}
 
function onError(error) {
    console.log("getUserMedia() no longer works on insecure origins. To use this feature, you should consider switching your application to a secure origin, such as HTTPS. See https://goo.gl/rStTGz for more details.", error);
}