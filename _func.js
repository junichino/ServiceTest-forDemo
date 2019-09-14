const md5 = require('md5');

module.exports.login = (req, res) => {
    let data = req.body;
    console.log(`- Some one login in.`);
    console.log(`-- It's name :: ${data.username}.`);
    let response = {
        firstname: 'Sitthikorn',
        lastname: 'Maneesut',
        title: 'Mr.',
        uid: md5(1212)
    };
    if (data.username == "admin" && data.password == md5('1234')) {
        res.status(200).send({ code: 200, message: `Login succcess`, data: response })
    }
    else{
        res.status(401).send({ code: 401, message: `Login unsucccess` });
        // res.send({ code: 401, message: `Login unsucccess` })
    }
}