const express = require('express')
const router = express();
port = 8080

router.listen(port, () => {
    console.log("Server running on port 8080");
});

router.get('/invite', (req, res) => {
    res.redirect("https://discord.com/api/oauth2/authorize?client_id=770007992262590504&permissions=268954751&scope=bot")
})

router.get('/support', (req, res) => {
    res.redirect("https://discord.gg/6suURVSn78")
})

router.get('/', (req,res) => {
    res.send("Here is nothing!")
})

router.get('/v1', (req,res) => {
    res.json({ 404: "Not found" })
})

router.get('/v1/gifs/', (req, res, next) => {
    var type = req.query.type;

    let link = getGif(type)
    if (!link) return res.send({ message: 'Something went wrong qwq' })
    res.json({ link: getGif(type) })
})

const allGifs = require('./gifs.json')

function getGif(type) {
    let gifArray = []
    var targetFiles = allGifs[type]
    if (!targetFiles) return undefined

    targetFiles.forEach(f => {
        gifArray.push(f)
    });

    return gifArray[Math.floor(Math.random() * gifArray.length)];
}
