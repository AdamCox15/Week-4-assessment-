const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {getCompliment, getFortune, getTeams, showTeam, getDog, getWeapons, addWeapon} = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/randomTeam", showTeam);
app.get("/api/dog", getDog);
app.get("./apt/teams", getTeams);
app.get("/api/getWeapons", getWeapons);
app.post('/api/addWeapon', addWeapon);

app.listen(4000, () => console.log("Server running on 4000"));
