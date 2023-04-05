const timeline = document.querySelector(".timeline-loaded");
const videoPlayer = document.querySelector("video");
videoPlayer.style.width = "100%";

const socket = io("http://localhost:3000",{ transports: ['websocket'] });

socket.on("connect", () => {
  console.log("connected to server");  
});



let videoData = new Uint8Array(); // create an empty array

socket.on("video-chunk", (res) => {  
  chunk = res.data;
  let startByte = res.bytesFrom;
  let endByte = res.bytesTo;

  if(videoData.length<endByte){
    // append new data to the array
    const newData = new Uint8Array(chunk); // create a new array with data to append
    let offset = videoData.length; // calculate the offset to append the new data
    videoUpdated = new Uint8Array(endByte); // resize the array to fit the new data
    videoUpdated.set(videoData, 0); // copy the new data into the array at the specified offset
    videoUpdated.set(newData, startByte); // copy the new data into the array at the specified offset
    videoData = videoUpdated;
  }else{
    videoData.set(newData, startByte);
  }


  maxLength = res.videoTotalLength;
  timeline.style.setProperty("--loaded", videoData.length/maxLength);

  if(videoData.length>=maxLength){
    const file = new Blob([videoData], { type: "video/mp4" });
    const url = URL.createObjectURL(file);
    videoPlayer.src = url;
    videoPlayer.play();

    console.log(videoPlayer.src);
    return
  }

  let asklength = Math.floor(maxLength/10);
  if(maxLength-videoData.length<asklength){
    asklength = maxLength-videoData.length;
  }
  socket.emit("send-video-chunk",{bytesFrom:videoData.length,bytesTo:videoData.length+asklength});
});

const button = document.querySelector(".loader");
button.addEventListener("click",(event)=>{
  console.log("asking for video chunk");
  socket.emit("send-video-chunk",{bytesFrom:0,bytesTo:5000});
});

