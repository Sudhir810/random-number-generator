import express from 'express';
let router = express.Router();
import { RandomGenerator } from '../controller/random-generator.js';
router.get('/', function(req, res) {
    res.render('index.ejs', {data: []});
});

router.post('/rolldice', function (req, res) {
    let result = RandomGenerator.randomNumbers(req.body.rolls, req.body.sides);
    res.render('index.ejs', {data: result});
    return;
});

export { router };