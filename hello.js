var http=require('http');

var fs=require('fs');


http.createServer(function(request,response){
	response.writeHead(200,{
		'Content-Type':'text/html'
	});
	if(request.url ==='/home'||request.url==='/') {
        var myReadSttream = fs.createReadStream(__dirname + '/index.html', 'UTF-8');
        myReadSttream.pipe(response);
    }
    else if(request.url==='/contact'){
        var myReadSttream = fs.createReadStream(__dirname + '/contact.html', 'UTF-8');
        myReadSttream.pipe(response);
	}
	else{
        var myReadSttream = fs.createReadStream(__dirname + '/404.html', 'UTF-8');
        myReadSttream.pipe(response);
	}
}).listen(3000);
console.log('server listennig to port:3000')