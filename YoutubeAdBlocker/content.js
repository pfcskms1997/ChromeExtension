window.onload = () => {
    const targetNode = document.getElementById("movie_player") || document.body;
    selfObserve(targetNode);
};

function selfObserve(documentNode) {
    const observer = new MutationObserver(function () {
        removeAds();
    });

    const config = {
        subtree: true,
        childList: true,
    };
    
    observer.observe(documentNode, config);
}

function removeAds() {
    const mainDocument = document.getElementsByClassName("video-ads ytp-ad-module");
    const adPlayer     = document.getElementsByClassName("ytp-ad-player-overlay");
    const adSkipBtn    = document.getElementsByClassName("ytp-ad-skip-button-modern ytp-button");
    const videoStream  = document.getElementsByClassName("video-stream html5-main-video");
    const playerAds    = document.getElementById("player-ads");

    if (mainDocument.length > 0) {
        if (adPlayer.length > 0) {
            adPlayer[0].style.visibility = "hidden";

            for (let i = 0; i < videoStream.length; i++) {
                if (videoStream[i] && videoStream[i].duration) {
                    videoStream[i].currentTime = videoStream[i].duration;
                }
            }
        }

        if (adSkipBtn.length > 0) {
            adSkipBtn[0].click();
        }
    }

    if (playerAds) {
        playerAds.style.display = "none";
    }
}
