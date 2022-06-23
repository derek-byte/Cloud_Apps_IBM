const express = require('express')
const app = new express()

app.use("/user/:id", function (req, res, next) {
    if (req.params.id == 1) {
        throw new Error("Trying to access admin login")
    }else{
        next()
    }
})

app.use(function (err, req, res, next){
    if (err != null) {
        res.status(500).send(err.toString())
    }else {
        next()
    }
})

app.get("/user/:id", (req, res) => {
    return res.send("Hello! User ID", req.params.id)
})

app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})