import {Injectable} from '@angular/core';
import {Task} from '../model/task';
import {Priority} from '../util/priority.enum';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class TaskService {

  taskList : Array<Task> = [];


  constructor(private http : HttpClient) {
    this.taskList.push(new Task("Requirement Gather",true,Priority.PRIORITY1));
    this.taskList.push(new Task("Design UI",true,Priority.PRIORITY1));
    this.taskList.push(new Task("Develop Code",false,Priority.PRIORITY2));
    this.taskList.push(new Task("Test The App",false,Priority.PRIORITY3));
    this.taskList.push(new Task("Build For Production",false,Priority.PRIORITY3));
    this.taskList.push(new Task("Deploy The App",false,Priority.PRIORITY3));
  }

  public addToDo(task : Task){
    this.http.post("http://localhost:8080/api/v1/todo",JSON.stringify(task),{responseType:'text' as 'json'});
  }

  public saveToDo(task : Task) : Observable<string>{
    return this.http.post<string>('http://localhost:8080/api/v1/todo/',task);
  }
}
