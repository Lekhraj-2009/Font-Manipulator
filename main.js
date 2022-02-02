rightWristX = 0;
rightWristY = 0;

difference = 0;

function preload(){
    backgroundImg = loadImage('https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/green-blackboard-background_Mkrq2Kcu_thumb.jpg');
}

function setup(){
    video = createCapture(VIDEO);
    video.size(445, 335);
    video.position(80, 347.5);

    canvas = createCanvas(625, 460);
    canvas.position(580, 290);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet initialized successfully!');
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("LeftWristX = "+leftWristX+" , RightWristX = "+rightWristX);

        difference = floor(leftWristX - rightWristX);
        console.log("Difference = "+difference);
    }
}

function draw(){
    background(backgroundImg);
    
    fill('#FFFFFF');
    textSize(difference);
    
    document.getElementById("size").innerHTML = difference+"px";
    document.getElementById("position").innerHTML = mouseX.toFixed(2) +", "+mouseY.toFixed(2);

    text("Hello!", mouseX, mouseY);
}