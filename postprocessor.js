const fileSystem = require("fs")
exports.process = function (file, out) {
    
    
    fileSystem.readFile(__dirname + '/boilerplate.html', function(err, data){
           
        var bp = data.toString();
           
        fileSystem.readFile(file, function (err, data){
        
            var title = file.split('/').slice(-1)
            out(bp = bp.replace("[[title]]",title).replace("[[body]]", data));
            
            //console.log(bp.toString())
        })

    })
    
}