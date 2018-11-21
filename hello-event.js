
// const http = require('http')

// //event-Driven style
// const server = http.createServer()
// server.on('request',(req, res)=>{
//     res.end('Hello CodeSchool')
// })
// server.on('listening', ()=>{
//     console.log('Server is listening at port 3002')
// })
// server.listen(3002)


//OPTION2 Call Chaining
http 
    .createServer()
    .on('request',(req, res)=>{
        res.end('Hello CodeSchool')
})
    .on('listening', ()=>{
        console.log('Server is listening at port 3002')
})
    .listen(3002)

