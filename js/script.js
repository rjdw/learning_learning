// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Declare a variable for the player.
var player;

// This function creates an <iframe> (and YouTube player) after the API code downloads.
function onYouTubeIframeAPIReady() {
    // This function is required by the YouTube IFrame Player API to initialize the player.
    // We don't initialize the player here anymore because we want to do it after a user action.
}

// Load or update the video based on the user input.
function loadVideo() {
    var urlInput = document.getElementById('youtubeURL').value;
    var videoId = extractYouTubeId(urlInput);

    if (videoId) {
        if (player && typeof player.loadVideoById === "function") {
            // If the player already exists, just load the new video.
            player.loadVideoById(videoId);
        } else {
            // If the player does not exist, create it with the specified video ID.
            player = new YT.Player('ytplayer', {
                height: '390',
                width: '640',
                videoId: videoId,
                events: {
                    'onReady': onPlayerReady,
                    // Add any other event handlers you need.
                }
            });
        }
    } else {
        alert('Please enter a valid YouTube URL.');
    }
}

// Extract the YouTube video ID from the URL.
function extractYouTubeId(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[7].length == 11 && /^[a-zA-Z0-9_-]+$/.test(match[7])) {
        return match[7];
    }
    return null;
}

// Placeholder for the 'onReady' event handler.
function onPlayerReady(event) {
    // This function can be used to perform actions once the player is ready.
    // For example, you might want to auto-play the video or adjust player settings.
}
