import {Component} from '@angular/core';
import {TaskService} from './service/task.service';
import {animate, style, transition, trigger} from '@angular/animations';
import {Task} from './model/task';
import {Priority} from './util/priority.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    trigger('fadeIn',[
      transition('void => *',[
        style({opacity:0}),
        animate(1000)
      ])
    ])
  ]
})
export class AppComponent {

  addTaskLabelIsShown = true;
  addTaskFormIsShown = false;
  color = 'black';
  priority = 'Select Priority';
  text = '';

  priority1 = Priority.PRIORITY1;
  priority2 = Priority.PRIORITY2;

  constructor(public taskService : TaskService) {
  }

  addToList(){
    this.taskService.taskList.push(new Task(this.text,false,this.selectPriority()));
    this.changeVisibility();
  }

  selectPriority() : Priority{
    if(this.priority == 'Priority 1'){
      return Priority.PRIORITY1;
    }else if(this.priority == 'Priority 2'){
      return Priority.PRIORITY2;
    }
    return Priority.PRIORITY3;

  }

  changeVisibility() {
    this.addTaskLabelIsShown = ! this.addTaskLabelIsShown;
    this.addTaskFormIsShown = ! this.addTaskLabelIsShown;
  }

  changeColorAndPriority( newColor : string , priority : string) {
    this.color = newColor;
    this.priority = priority;
  }
}
