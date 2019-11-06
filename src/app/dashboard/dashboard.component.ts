import { Component, OnInit } from '@angular/core';
import { AllUsersComponent} from  '../all-users/all-users.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  // directives: [AllUsersComponent]
})
export class DashboardComponent  {
  opts:any;
  constructor() { 
this.opts={
  width:500,
  height:600
}
  }

  updates() {
    console.log('after changes');
    this.opts = {
        name: 'micronyks'
    };
 }

}
