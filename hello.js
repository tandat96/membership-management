//1 Load 'http' moudle của nodeJS
const http = require('http')
//
//calback
const requestListener = (req, res)=>{
    res.end('Hello CodeSchool')
}

//2.create server
//Khi có request đến cái web naft thì gọi callback requestListener
const server = http.createServer(requestListener)
const server2 = http.createServer((req, res)=>{
    res.end('Hello CodeSchool')
})
const onListening = ()=>{
    console.log('Server is listening at port 3000')
    
}
//3.Start server
//khi nào we server được start thành công
//thì gọi callback 'onlistening'
//callback =>async =>non-blocking
server.listen(3000, onListening)
server2.listen(3001, ()=>{
    console.log('Server is listening at port 3000')})

console.log('Het file')


//sever2 là rút gọn