function preload(){
    bg = loadImage('https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/green-blackboard-background_Mkrq2Kcu_thumb.jpg');
}

function setup(){
    video = createCapture(VIDEO);
    video.size(445, 335);
    video.position(80, 307.5);

    canvas = createCanvas(625, 450);
    canvas.position(580, 250);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet initialized successfully!');
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
    }
}

function draw(){
    background(bg);
}