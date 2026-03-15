const express = require("express")
const { exec } = require("child_process")

const app = express()

app.get("/clip",(req,res)=>{

let url=req.query.url
let start=req.query.start
let end=req.query.end

let command=`yt-dlp "${url}" --download-sections "*${start}-${end}" --force-keyframes-at-cuts -o clip.mp4`

exec(command,(error)=>{

if(error){
res.send("Error downloading clip")
return
}

res.download("clip.mp4")

})

})

app.listen(3000,()=>{
console.log("Server running")
})
