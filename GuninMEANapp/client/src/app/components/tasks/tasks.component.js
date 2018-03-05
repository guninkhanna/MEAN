// import { Component } from '@angular/core';
// import { TaskService } from '../../services/task.service';
// import { Task } from '../../../Task';
// // import { isDate } from 'util';
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// @Component({
//   moduleId: module.id,
//   selector: 'tasks',
//   templateUrl: `tasks.component.html`,
// })
// export class TasksComponent {
//   tasks: Task[];
//   title: string;
//   constructor(private taskService: TaskService) {
//     this.taskService.getTasks()
//       .subscribe(tasks => {
//         // console.log(tasks);
//         this.tasks = tasks;
//       });
//   }
//   addTask(event) {
//     event.preventDefault();
//     var newTasks = {
//       title: this.title,
//       isDone: false
//     }
//     // this.tasks.push(newTasks); -> shows up but disappers on reload
//     this.taskService.addTask(newTask)
//       .subscribe(task => {
//         this.tasks.push(task);
//         this.title = '';
//       });
//   }
// }
var core_1 = require('@angular/core');
var task_service_1 = require('../../services/task.service');
var TasksComponent = (function () {
    function TasksComponent(taskService) {
        var _this = this;
        this.taskService = taskService;
        this.taskService.getTasks()
            .subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    }
    // for each of the following function we need to reflect the changes 
    // in servie.ts ( to interact with the db) 
    // and tasks.component.html to output it to the screen
    TasksComponent.prototype.addTask = function (event) {
        var _this = this;
        event.preventDefault();
        var newTask = {
            title: this.title,
            isDone: false
        };
        this.taskService.addTask(newTask)
            .subscribe(function (task) {
            _this.tasks.push(task);
            _this.title = '';
        });
    };
    TasksComponent.prototype.deleteTask = function (id) {
        var tasks = this.tasks;
        this.taskService.deleteTask(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < tasks.length; i++) {
                    if (tasks[i]._id == id) {
                        tasks.splice(i, 1);
                    }
                }
            }
        });
    };
    TasksComponent.prototype.updateStatus = function (task) {
        var _task = {
            _id: task._id,
            title: task.title,
            isDone: !task.isDone
        };
        this.taskService.updateStatus(_task).subscribe(function (data) {
            task.isDone = !task.isDone;
        });
    };
    TasksComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tasks',
            templateUrl: 'tasks.component.html'
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], TasksComponent);
    return TasksComponent;
}());
exports.TasksComponent = TasksComponent;
//# sourceMappingURL=tasks.component.js.map