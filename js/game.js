
let canvas;
let world;
let keyboard = new Keyboard();

/**
 * initializes the game
 */
function init() {
    initLevel();
    // Get the canvas element from the DOM
    canvas = document.getElementById('canvas');
    // Create a new World object and assign it to the 'world' variable
    world = new World(canvas, keyboard);
    console.log('my charchter is ', world.character);
    setTimeout(() => {
        document.getElementById('playGame').classList.remove('d-none');
        document.getElementById('introScreen').classList.add('d-none');
    }, 300);
    // Check if the device has been rotated
    checkRotation();
}


/**
 * Reload the current page, when the game is over
 */
function gameIsOver() {
    window.location = window.location;
}


/**
 * Make the canvas go fullscreen.
 */
function fullscreen() {
    canvas.requestFullscreen();
}


function openInfo() {
    showInfo('descriptionContainer');
}

/**
 * Shows an element with the specified ID.
 * @param {string} id  - the element with the id = 'descriptionContainer'
 */
function showInfo(id) {
    setTimeout(() => {
        document.getElementById(`${id}`).classList.remove('d-none');
    }, 400)
}

function closeInfo() {
    hideInfo('descriptionContainer');

}


/**
 * hides an element with the specified ID.
 * @param {string} id -the element with the id = 'descriptionContainer'
 */
function hideInfo(id) {
    document.getElementById(`${id}`).classList.add('d-none');
}


/**
 * Prevents the default event from closing the info window.
 *
 * @param {Event} event - The event object.
 */
function doNotCloseInfo(event) {
    event.stopPropagation();
}


/**
 * Check the device's current orientation and update the page accordingly.
 */
function checkRotation(){
    if (window.matchMedia("(orientation: portrait)").matches) {
        // Device is in portrait orientation
        document.getElementById("showRotateTxt").style.display === "flex";
      } else {
        // Device is in landscape orientation
        document.getElementById("showRotateTxt").style.display = "none";
      }
}

  

