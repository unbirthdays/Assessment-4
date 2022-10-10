const { application } = require("express");

let toDoList = [] // this acts as my faux-database

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", 
        "A golden egg of opportunity falls into your lap this month.", "A lifetime friend shall soon be made.",
        "A pleasant surprise is waiting for you.", "An acquaintance of the past will affect you in the near future."];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    addList: (req, res) => {

        toDo = {
            "date": req.body.date,
            "text": req.body.text
        }

        toDoList.push(toDo);
        res.status(200).send("Ok!");
    },

    allList: (req, res) => {
        res.status(200).send(toDoList);
    },

    deleteList: (req, res) => {
        toDoList = [];
        res.status(200).send("To-do entries deleted.");
    }

}