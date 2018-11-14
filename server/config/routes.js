var tasks = require('./../contollers/tasks_controllers.js');
module.exports = function(app){
    app.get('/api/tasks', tasks.index);
    app.post('/api/tasks', tasks.create);
    app.get('/api/tasks/:id', tasks.show);
    app.put('/api/tasks/:id', tasks.update);
    app.delete('/api/tasks/:id', tasks.destroy);
}