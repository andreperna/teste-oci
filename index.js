import http from "node:http"

const home = (req, res)=>{
    res.end(req.url)
}

const server = http.createServer(home)

server.listen(3000, "localhost", ()=>console.log("server running on port 3000"))
