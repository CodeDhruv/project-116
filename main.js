noseX = 0;
noseY = 0;


function preload() {
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}


function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, noseX, noseY, 80, 80);
}

function modelLoaded() {
    console.log("modelLoaded");
}

function gotPoses(result) {
    if (result.length > 0) {
        console.log(result);
        noseX = result[0].pose.nose.x - 40;
        noseY = result[0].pose.nose.y - 10;
        console.log("nose x (Used for mustache) = " + noseX);
        console.log("nose y (Used for mustache) = " + noseY);
    }
}

function take_snapshot() {
    save('yourImage.png');
}