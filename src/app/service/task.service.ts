import {Injectable} from '@angular/core';
import {Task} from '../model/task';
import {Priority} from '../util/priority.enum';

@Injectable()
export class TaskService {

  taskList : Array<Task> = [];

  constructor() {
    this.taskList.push(new Task("Requirement Gather",true,Priority.PRIORITY1));
    this.taskList.push(new Task("Design UI",true,Priority.PRIORITY1));
    this.taskList.push(new Task("Develop Code",false,Priority.PRIORITY2));
    this.taskList.push(new Task("Test The App",false,Priority.PRIORITY3));
    this.taskList.push(new Task("Build For Production",false,Priority.PRIORITY3));
    this.taskList.push(new Task("Deploy The App",false,Priority.PRIORITY4));
  }
}
