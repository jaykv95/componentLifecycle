import { Input,Component,Output,EventEmitter, OnInit, OnChanges, ChangeDetectionStrategy, ElementRef } from '@angular/core';

@Component({
  selector: 'app-all-users',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnChanges {
@Input()  options:any
ngOnChanges(...args:any[]){
console.log('onchangeFired')
console.log('changing' ,args)
}


}
