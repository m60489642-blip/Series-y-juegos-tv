document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('miVideo');
    const botonPlayPause = document.getElementById('botonPlayPause');
    const barraProgreso = document.getElementById('barraProgreso');
    const tiempoActual = document.getElementById('tiempoActual');
    const tiempoTotal = document.getElementById('tiempoTotal');
    const botonMute = document.getElementById('botonMute');
    const barraVolumen = document.getElementById('barraVolumen');
    const botonPantallaCompleta = document.getElementById('botonPantallaCompleta');

    // Play/Pause
    botonPlayPause.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            botonPlayPause.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            video.pause();
            botonPlayPause.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    // Barra de Progreso
    video.addEventListener('loadedmetadata', function() {
        barraProgreso.max = video.duration;
        const duracion = video.duration;
        tiempoTotal.textContent = formatTime(duracion);
    });

    video.addEventListener('timeupdate', function() {
        barraProgreso.value = video.currentTime;
        const tiempoTranscurrido = video.currentTime;
        tiempoActual.textContent = formatTime(tiempoTranscurrido);
    });

    barraProgreso.addEventListener('input', function() {
        video.currentTime = barraProgreso.value;
    });

    // Mute/Unmute
    botonMute.addEventListener('click', function() {
        if (video.muted) {
            video.muted = false;
            botonMute.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            video.muted = true;
            botonMute.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    });

    // Barra de Volumen
    barraVolumen.addEventListener('input', function() {
        video.volume = barraVolumen.value;
    });

    // Pantalla Completa
    botonPantallaCompleta.addEventListener('click', function() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { /* Firefox */
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { /* IE/Edge */
            video.msRequestFullscreen();
        }
    });

    // Función para formatear el tiempo
    function formatTime(time) {
        const minutos = Math.floor(time / 60);
        const segundos = Math.floor(time % 60);
        return minutos + ':' + (segundos < 10 ? '0' : '') + segundos;
    }
});
            
