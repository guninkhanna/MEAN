var express = require('express');
var router = express.Router();
var mongojs = require('mongojs'); //this bring in mongoDB sandbox -mlab

//connecting DB through driver found in mongo -mlab
var db = mongojs('mongodb://gunin:gunin@ds253918.mlab.com:53918/mytasklist_gunin', ['tasks']);


//the following will GET all tasks
router.get('/tasks', function (req, res, next) {
  // res.send('TASKS API PAGE'); -- quick way to check connection
  db.tasks.find(function (err, tasks) {
    if (err) {
      res.send(err);
    }
    res.json(tasks);
  });
});

//GET single task -- go to api/task/copy_paste_id_from_mongo_for_any_task
//*NOTE - changed tasks (function param) to task 
//the following code will allow us to go to api/task/copy_paste_id_from_mongo_for_any_task
router.get('/task/:id', function (req, res, next) {
  // findOne to get a single task and use `req.params.id` to id that is being returned by mongo
  db.tasks.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, task) {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
});

//to save task -- handle a POST request
router.post('/task', function (req, res, next) {
  var task = req.body;
  if (!task.title || !(task.isDone + '')) {
    req.status(400);
    req.json({
      "error": "Invalid Data"
    });
  }
  else {
    db.tasks.save(task, function (err, task) {
      if (err) {
        res.send(err);
      }
      res.json(task);
    });
  }
});

// Delete Task --delete
router.delete('/task/:id', function (req, res, next) {
  //remove
  db.tasks.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, task) {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
});


// Update -- PUT
router.put('/task/:id', function (req, res, next) {

  var task = req.body;
  var updTask = {};

  if (task.isDone) {
    updTask.isDone = task.isDone;
  }
  if (task.title) {
    updTask.title = task.title;
  }

  if (!updTask) {
    res.status(400);
    res.json({
      "error": "Invalid Data"
    });
  }
  else {
    db.tasks.update({ _id: mongojs.ObjectId(req.params.id) }, updTask, {}, function (err, task) {
      if (err) {
        res.send(err);
      }
      res.json(task);
    });
  }

});


module.exports = router;