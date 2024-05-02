// вп и уп
function setupVideoPlayer() {
    var movieContainer = document.getElementById('movie').closest('.video-container');
    var trailerContainer = document.getElementById('trailer').closest('.video-container');
    var toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', function() {
        if (movieContainer.style.display !== 'none') {
            movieContainer.style.display = 'none';
            trailerContainer.style.display = 'block';
            toggleButton.textContent = 'Показать фильм';
        } else {
            movieContainer.style.display = 'block';
            trailerContainer.style.display = 'none';
            toggleButton.textContent = 'Показать трейлер';
        }
    });

    // абракадабра
    var movieVolume = document.querySelector('#movie + .video-controls .volume');
    var trailerVolume = document.querySelector('#trailer + .video-controls .volume');

    movieVolume.addEventListener('input', function() {
        document.getElementById('movie').volume = movieVolume.value;
    });

    trailerVolume.addEventListener('input', function() {
        document.getElementById('trailer').volume = trailerVolume.value;
    });
}

// подписка премиум на спотифай XD...
window.onload = setupVideoPlayer;
