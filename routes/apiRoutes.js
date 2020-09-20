const database = require("../db/db.json");
const path = require("path");
const uniqid = require('uniqid')
const fs = require("fs");


module.exports = function(app){
 

    app.get("/api/notes", function(req,res){
        res.json(database)
    })

    const savedNotes = JSON.parse(fs.readFileSync("db/db.json", "utf-8"))
    app.post("/api/notes", function (req, res){
        let title = req.body.title;
        let text = req.body.text;
        let newNote = {title,text, id:uniqid()};
        savedNotes.push(newNote)

        fs.writeFileSync("db/db.json", JSON.stringify(savedNotes));

        res.json(newNote)
 
        console.log(newNote)
    })

    app.delete("/api/notes/:id", function(req,res){
        var savedNotes = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
        var updateNotes = savedNotes.filter(function(note){
          return note.id !== req.params.id
        })
        fs.writeFileSync("db/db.json", JSON.stringify(updateNotes));
        res.json({ok: true})
    })

}