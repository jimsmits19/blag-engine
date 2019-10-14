const postHelper = require("./PostHelper")
exports.ReadPost = function (req, res) {

    postHelper.ReadPost(__dirname +`/${req.path}.txt`, function(out){
        res.send(out)
    })
}

exports.AddPost = function (req, res) {
        
    var post = req.body.blagpost;
    var title = req.body.blagpost.toString().split('\r\n').shift();
    postHelper.AddPost(title, post);
    res.send("post posted.");
} 