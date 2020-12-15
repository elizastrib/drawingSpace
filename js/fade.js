window.onload = function() {
    fadein()
    window.setTimeout(fadeout, 5000)
}

function fadein() {
    document.getElementById('fade').style.opacity = '0.5'
}

function fadeout() {
    document.getElementById('fade').style.opacity = '0'
}