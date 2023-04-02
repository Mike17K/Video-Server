const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const fs = require('fs');

io.on('connection',client => {
    console.log("Conected: " + client);
    client.on('event', data => { /* … */ });
    client.on('disconnect', () => { /* … */ });
    client.on('send-video-chunk', sendVideoChunk);
}
);

//let movieFilePath = "./movies/Walking.With.Dinosaurs.Series.1.1of6.New.Blood.1080p.HDTV.x264.AAC.MVGroup.org.mp4";
let movieFilePath = "./movies/trip1_original.mp4";

const length = fs.readFileSync(movieFilePath).length;

let videoData = new Uint8Array(); // create an empty array

function sendVideoChunk(data){
    console.log(`asking for video chunk ${data['bytesFrom']}-${data['bytesTo']}/${length}`);
    const bytes = fs.readFileSync(movieFilePath).slice(data['bytesFrom'],data['bytesTo']);
    //console.log(`Received ${chunk.length} bytes of data. Out of ${headers['Content-Length']}`);
    io.emit('video-chunk',bytes);
    io.emit('ask-more-video',length);

    const newData = new Uint8Array(chunk); // create a new array with data to append
    let offset = videoData.length; // calculate the offset to append the new data
    videoData = new Uint8Array(offset + newData.length); // resize the array to fit the new data
    videoData.set(newData, offset); // copy the new data into the array at the specified offset
  
    
}
 
server.listen(3000,()=> console.log("Running on port 3000..."));



