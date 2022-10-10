const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

const { getFortune } = require('./controller')

const { addList } = require('./controller')

const { allList } = require('./controller')

const { deleteList } = require('./controller')

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.post("/api/list", addList);

app.get("/api/showAll", allList);

app.delete("/api/deleteAll", deleteList);

app.listen(4000, () => console.log("Server running on 4000"));
