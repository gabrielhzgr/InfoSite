const http = require('node:http')
const fs = require('node:fs')

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    let path = './'
    console.log(req.url);
    
    switch (req.url){
        case('/'):
            res.statusCode = 200
            path += 'index.html'
            break
        case('/about'):
            res.statusCode = 200
            path += 'about.html'
            break
        case('/contact-me'):
            res.statusCode = 200
            path += 'contact-me.html'
            break
        default:
            res.statusCode = 404
            path += '404.html'
            break        
    }

    fs.readFile(path,(err,data)=>{
        if(err){
            res.end()
        }else{
            res.end(data)
        }
    })
})

server.listen(8080)




