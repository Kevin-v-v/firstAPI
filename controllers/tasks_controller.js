const Task = require('../models').Task;

module.exports = {
    index: (req, res)=>{
        Task.findAll().then(tasks=>{
            res.json(tasks);
        });
    },
    show: (req,res)=>{
        Task.findByPk(req.params.id).then(task=>{
            res.json(task);
        }).catch(err=>{
            res.json(err);
        });
    },
    create: (req, res)=>{
        Task.create({
            description: req.body.description
        }).then(result=>{
            res.json(result);
        }).catch(err=>{
            res.json(err);
        })
    },
    update: (req, res)=>{
        Task.update({description: req.body.description},{
            where: {
                id: req.params.id
            }
        }).then((response)=>{
            res.json(response);
        });
    }

};