import fs from 'fs';

let data = fs.readFileSync('./db/champions.json');
let champions = JSON.parse(data);

export default champions;