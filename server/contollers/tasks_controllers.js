var mongoose = require('mongoose');
var Task = mongoose.model('Task');
module.exports = {
    index:  function(req,res){
        Task.find({}, function(err,tasks){
            res.json(tasks);
        })
    },
    create: function(req,res){
        Task.create(req.body), function(err,task){
            if(err){
                res.json(err);
            }
            else{
                res.json(task);
            }
        }
    },
    show: function(req,res){
        Task.findOne({_id: req.params.id}, function(err,task){
            if(err){
                res.json(err);
            }
            else{
                res.json(task);
            }
        })
    },
    update: function(req,res){
        Task.findOne({_id: req.params.id}, function(err,task){
            if(err){
                res.json(err);
            }
            else{
                task.title = req.body.title;
                task.description = req.body.description;
                task.completed = req.body.completed;
                task.save(function(err){
                    if(err){
                        console.log('errors updating');
                        res.json(err);
                    }
                    else{
                        res.json(task);
                    }
                })
            }
        })
    },
    destroy: function(req,res){
        Task.deleteOne({_id: req.params.id}, function(err){
            if(err){
                res.json(err);
            }
            else{
                res.json({message: 'Task Deleted'})
            }
        })
    }
}