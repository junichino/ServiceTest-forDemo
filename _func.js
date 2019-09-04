const md5 = require('md5');

module.exports.login = (req, res) => {
    let data = req.body;
    console.log(`- Some one login in.`);
    console.log(data);
    let response = {
        firstname: 'Sitthikorn',
        lastname: 'Maneesut',
        title: 'Mr.',
        uid: md5(1212)
    };
    res.send({ code: 200, message: `Login succcess`, data: response })
}