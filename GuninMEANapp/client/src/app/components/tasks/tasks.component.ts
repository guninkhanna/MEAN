import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../../Task';
// import { isDate } from 'util';

@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: `tasks.component.html`,
})


export class TasksComponent {
  tasks: Task[];
  title: string;


  constructor(private taskService: TaskService) {
    this.taskService.getTasks()
      .subscribe(tasks => {
        // console.log(tasks);
        this.tasks = tasks;
      });
  }

  addTask(event) {
    event.preventDefault();
    var newTaks = {
      title: this.title,
      isDone: false
    }
    // this.tasks.push(newTaks); -> shows up but disappers on reload
  }


}
