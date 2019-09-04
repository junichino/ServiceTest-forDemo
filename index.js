const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const func = require('./_func');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    console.log(`- Some one coming in.`);
    res.send('<center><h1>Service for demo<br>By<br>Juni</h1><center>');
});
app.post('/login', func.login);
const PORT = 1234;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

