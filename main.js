Status = "";
object = "";

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center()
    video = createCapture(VIDEO);
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modalLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input = document.getElementById("input").value;
}

function modalLoaded() {
    console.log("Modal is Loaded");
    Status = "true";
}

function draw() {
    Image(video, 0, 0, 600, 500);
}