// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    // Placeholder function needed by the YouTube IFrame Player API
    // The actual video player will be created in the loadVideo function
}

function loadVideo() {
    var urlInput = document.getElementById('youtubeURL').value;
    var videoId = extractYouTubeId(urlInput);

    if (videoId) {
        if (player) {
            // If the player already exists, load the new video ID
            player.loadVideoById(videoId);
        } else {
            // Create a new player if one does not already exist
            player = new YT.Player('ytplayer', {
                height: '390',
                width: '640',
                videoId: videoId
            });
        }
    } else {
        alert('Please enter a valid YouTube URL.');
    }
}
function extractYouTubeId(url) {
    // This function attempts to match and extract a YouTube video ID from a given URL.
    // It returns null if the URL does not contain a valid YouTube video ID, mitigating potential XSS vectors.

    // Regular expression covering various YouTube URL formats:
    // - Standard YouTube watch URLs
    // - Shortened youtu.be URLs
    // - Embed URLs
    var regExp = /^.*((youtu\.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);

    // Check if the extracted part (video ID) matches the expected length (11 characters) and content (alphanumeric).
    if (match && match[7].length == 11 && /^[a-zA-Z0-9_-]+$/.test(match[7])) {
        return match[7];
    }

    return null;
}

// function extractYouTubeId(url) {
//     var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
//     var match = url.match(regExp);
//     if (match && match[2].length == 11) {
//         return match[2];
//     }
//     return null;
// }
