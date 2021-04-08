import {Priority} from '../util/priority.enum';

export class Task {

  constructor(private test:string , private completed : boolean , private priority : Priority) {
  }
}
