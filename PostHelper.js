const fileSystem = require("fs")
exports.ReadPost = function (file, out) {
    
    fileSystem.readFile(__dirname + '/boilerplate.html', function(err, data){
           
        var boilerPlate = data.toString();
           
        fileSystem.readFile(file, function (err, data){
        
            var title = file.split('/').slice(-1)
            out(boilerPlate = boilerPlate.replace("[[title]]",title).replace("[[body]]", data));
        })

    })
    
}

exports.AddPost = function(title, text) {

    fileSystem.writeFile(__dirname + `/posts/${title}.txt`, text, (err) => {
            if (err) throw err;
    })

}

