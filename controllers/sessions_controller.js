const User = require('../models').User;

module.exports = {
    create: (req,res)=>{
        User.login(req.body.email, req.body.password).then(user=>{
            res.json(user);
        }).catch(err=>{
            console.log(err);
            res.json(err);
        })
    }
}