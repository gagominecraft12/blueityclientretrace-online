const load = require('./load')
const loadPost = require('load-post')
const loadOffset = {
    loadOffset()
};

res.setHeader("Content-Type", "text/txt")

loadOffset(load.TXT="offset.txt")

loadPost(req, res).then("offset.txt")

loadPost(req, res).then("retire.ret")

load("nooffset.txt")
