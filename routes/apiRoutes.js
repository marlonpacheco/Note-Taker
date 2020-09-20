const database = require("../db/db.json");
const express = require("express");
const fs = require("fs");

module.exports = function (app) {
    // API GET Requests

    app.get("/api/notes", function (req, res) {
        res.json(database);
    });

    app.post("/api/notes", function (req, res){

    })
    
}