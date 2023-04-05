const timeline = document.querySelector(".timeline-loaded");
const videoPlayer = document.querySelector("video");
videoPlayer.style.width = "100%";

const socket = io("http://localhost:3000",{ transports: ['websocket'] });

socket.on("connect", () => {
  console.log("connected to server");  
});



let videoData = new Uint8Array(); // create an empty array
let maxLength=1;

socket.on("video-chunk", (res) => {  
  chunk = res.data;
  let startByte = res.bytesFrom;
  let endByte = res.bytesTo;
  const newData = new Uint8Array(chunk); // create a new array with data to append

  if(videoData.length<endByte){
    // append new data to the array
    videoUpdated = new Uint8Array(endByte); // resize the array to fit the new data
    videoUpdated.set(videoData, 0); // copy the new data into the array at the specified offset
    videoUpdated.set(newData, startByte); // copy the new data into the array at the specified offset
    videoData = videoUpdated;
  }else{
    videoData.set(newData, startByte);
  }

  maxLength = res.videoTotalLength;
  timeline.style.setProperty("--loaded", videoData.length/maxLength);

    handleLoadMore();
});


function handleLoadMore(){
  const percent = videoPlayer.currentTime/videoPlayer.duration || 0;

  console.log(videoData.length/maxLength,percent,0.1);
  if(videoData.length/maxLength-percent<0.2){
    let asklength = Math.floor(maxLength/10);
    if(maxLength-videoData.length<asklength){
      asklength = maxLength-videoData.length;
    }
    socket.emit("send-video-chunk",{bytesFrom:videoData.length,bytesTo:videoData.length+asklength});
    console.log(`asking to: ${(videoData.length+asklength)/maxLength*100}%`);
  }else{
    const duration = videoPlayer.currentTime;
    const file = new Blob([videoData], { type: "video/mp4" });
    const url = URL.createObjectURL(file);
    videoPlayer.src = url;
    videoPlayer.currentTime = duration;
    //videoPlayer.play();
    console.log("play");
  }
}



  
const button = document.querySelector(".loader");
button.addEventListener("click",(event)=>{
  handleLoadMore();
});

