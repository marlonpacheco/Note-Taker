const database = require("../db/db.json");
const express = require("express");
const path = require("path");
const uniqid = require('uniqid')
const fs = require("fs");


module.exports = function(app){
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    app.get("/api/notes", function(req,res){
        res.json(database)
    })
    app.get("/api/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.post("/api/notes", function (req, res){
        let title = req.body.title;
        let text = req.body.text;
        let newNote = {title,text, id:uniqid()};
        let savedNotes = JSON.parse(fs.readFileSync("db/db.json", "utf-8"));
        savedNotes.push(newNote)

        fs.writeFileSync("db/db.json", JSON.stringify(savedNotes));

        res.json(newNote)
 
        console.log(newNote)
    })

}




// app.post("/api/notes", function (req, res) {

// })
