// ==========================================================
// script.js - Graphics and Compression Learning Site
// Only used by graphics.html: the raster vs. vector zoom slider.
// ==========================================================

// Find the page parts we need (they only exist on graphics.html)
const zoomSlider = document.querySelector("#zoom-slider");
const zoomValue = document.querySelector("#zoom-value");
const zoomRaster = document.querySelector("#zoom-raster");
const zoomVector = document.querySelector("#zoom-vector");

// Read the slider and resize both images to match
function updateZoom() {
    // The slider gives text like "4", so turn it into a number first
    const zoom = Number(zoomSlider.value);

    // Both images start as tall as their window. 2x = twice as tall, and so on
    zoomRaster.style.height = zoom * 100 + "%";
    zoomVector.style.height = zoom * 100 + "%";

    // Show the current zoom next to the slider label
    zoomValue.textContent = zoom + "x";
}

// Only run on the page that has the slider
if (zoomSlider) {
    // "input" fires on every movement, so the images change live while dragging
    zoomSlider.addEventListener("input", updateZoom);

    // Set the starting look once when the page loads
    updateZoom();
}
