const express = require('express');
const app = express();
const port = 3000;


const heroes = [
    { id: "h1", name: "Arthur", class: "Warrior", lane: "Solo", faction: "Avalon" },
    { id: "h2", name: "Diao Chan", class: "Mage", lane: "Mid", faction: "Frost Order" },
    { id: "h3", name: "Sun Ce", class: "Tank", lane: "Jungle", faction: "Eastern Seas" },
    { id: "h4", name: "Marco Polo", class: "Marksman", lane: "Bot", faction: "Western Lands" },
    { id: "h5", name: "Miyamoto Musashi", class: "Assassin", lane: "Jungle", faction: "Ronin Clan" },
    { id: "h6", name: "Angela", class: "Mage", lane: "Mid", faction: "Magic Council" },
    { id: "h7", name: "Lü Bu", class: "Fighter", lane: "Solo", faction: "Conquerors" },
    { id: "h8", name: "Gongsun Li", class: "Marksman", lane: "Bot", faction: "Shadow Sect" },
    { id: "h9", name: "Han Xin", class: "Assassin", lane: "Jungle", faction: "Rebel Forces" },
    { id: "h10", name: "Zhuge Liang", class: "Mage", lane: "Mid", faction: "Strategists" }
];

app.get('/heroes', (req, res) => {
    res.json(heroes);
});

app.get('/heroes/:id', (req, res) => {
    const hero = heroes.find(h => h.id === req.params.id);
    hero ? res.json(hero) : res.status(404).json({ error: "Hero not found" });
});

app.get('/heroes/lane/:lane', (req, res) => {
    res.json(heroes.filter(h => h.lane.toLowerCase() === req.params.lane.toLowerCase()));
});

app.get('/heroes/faction/:faction', (req, res) => {
    res.json(heroes.filter(h => h.faction.toLowerCase() === req.params.faction.toLowerCase()));
});

app.get('/heroes/class/:class', (req, res) => {
    res.json(heroes.filter(h => h.class.toLowerCase() === req.params.class.toLowerCase()));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
