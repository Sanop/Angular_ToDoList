import { Component } from '@angular/core';
import {TaskService} from './service/task.service';
import {animate, style, transition, trigger} from '@angular/animations';

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

  constructor(public taskService : TaskService) {
  }

  changeVisibility() {
    this.addTaskLabelIsShown = ! this.addTaskLabelIsShown;
    this.addTaskFormIsShown = ! this.addTaskLabelIsShown;
  }
}
