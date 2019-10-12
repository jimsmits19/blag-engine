const processor = require("./postprocessor")
exports.posts = function (req, res) {

    processor.process(__dirname +`/${req.path}.txt`, function(out){
        res.send(out)
    })
}
 