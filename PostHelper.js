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

function fileName (title) {
    var replaceChars = ['/','\\','?','%','*',':','"','<','>', '.', ' '];
    for(let i = 0; i < replaceChars.length; i++) {
        title = title.replace(replaceChars[i],'-')
    }

    title = title.replace('---', '-');
    title = title.replace('--', '-');
    if (title.substring(title.length-1) == "-")
    {
        title = title.substring(0, title.length-1);
    }


    return(title);
}

exports.AddPost = function(title, text) {

    title = fileName(title);
    console.log(title)
    fileSystem.writeFile(__dirname + `/posts/${title}.txt`, text, (err) => {
            if (err) throw err;
    })

}

