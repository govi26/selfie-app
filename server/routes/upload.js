var express = require('express');
Canvas = require('canvas');
var router = express.Router();

router.post('/upload', (async (req, res, next) => {
    const dimension = await getDimensions(req.body.imgData);
    res.send(dimension);
}));

function getDimensions(file) {
    return new Promise((resolved, rejected) => {
        let image = new Canvas.Image();
        image.onload = () => {
            resolved({ width: image.width, height: image.height });
        };
        image.src = file;
    }).catch(err => err);
}

module.exports = router;