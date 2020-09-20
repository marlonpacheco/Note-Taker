const database = require("../db/db.json");
const express = require("express");
const path = require("path");
const fs = require("fs");


module.exports = function(app){
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    app.get("/api/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
}




// app.post("/api/notes", function (req, res) {

// })
