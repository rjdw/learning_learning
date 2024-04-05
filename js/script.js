// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    // This function is required by the YouTube IFrame Player API to initialize the player.
}

function loadVideo() {
    var urlInput = document.getElementById('youtubeURL').value;
    var videoId = extractYouTubeId(urlInput);

    if (videoId) {
        if (player && typeof player.loadVideoById === "function") {
            player.loadVideoById(videoId);
        } else {
            player = new YT.Player('ytplayer', {
                height: '390',
                width: '640',
                videoId: videoId
            });
        }
    } else {
        M.toast({html: 'Please enter a valid YouTube URL.'});
    }
}

function extractYouTubeId(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[7].length == 11) {
        return match[7];
    }
    return null;
}
