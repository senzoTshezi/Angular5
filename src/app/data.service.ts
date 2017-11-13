import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['1.Installing Angular 5', '2.Components','3.Templating & Styling','4.Interpolation, Property & Event Binding',
'5.Animation','6.Routing','7.Services','8.App Deployment']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal){
    this.goals.next(goal);
  }
}
