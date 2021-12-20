song1="";
song2="";
rightWristX=0;
rightWristY=0;
leftWristX=0;
leftWristY=0;

function preload(){
    song1 = loadSound("Music 1.mp3");
    song2 = loadSound("Music.mp3");
}

function setup(){
    canvas = createCanvas(600,580);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function modelLoaded(){
    console.log("poseNet Is Initialized")
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristX=results[0].pose.leftWrist.y;
        console.log("leftWristX = "+leftWristX+"leftWristY = "+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristX=results[0].pose.rightWrist.y;
        console.log("rightWristX = "+rightWristX+"rightWristY = "+rightWristY);
}
}

function draw(){
    image(video,0,0,600,530);
}

function play(){
    song1.play();
}