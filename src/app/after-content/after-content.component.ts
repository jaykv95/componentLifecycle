import { Component,AfterContentChecked,AfterContentInit,ContentChild } from '@angular/core';
import{LoggerService} from '../logger.service';


@Component({
  selector: 'app-child',
  template: '<input [(ngModel)]="hero">',
  styleUrls: ['./after-content.component.css']
})
export class ChildComponent{

 hero='Magneta';

}

@Component({
  selector: 'after-content',
  templateUrl: `<div>----projected content begins-----</div>
  <ng-content></ng-content>
  <div>----projected content ends-----</div>
  `+`<p *ngIf='comment'>{{comment}}</p>`,
  
})
export class AfterContentComponent implements AfterContentChecked,AfterContentInit  {
  private prevHero='';
  comment='';
  @ContentChild(ChildComponent,{static:false}) contentChild:ChildComponent;
  constructor(private logger:LoggerService){
    this.logIt('after content constructor')
  }
  ngAfterContentInit(){
    this.logIt('after content Init');
    this.doSomething();
  }
 ngAfterContentChecked(){
  // contentChild is updated after the content has been checked
  if (this.prevHero === this.contentChild.hero) {
    this.logIt('AfterContentChecked (no change)');
  } else {
    this.prevHero = this.contentChild.hero;
    this.logIt('AfterContentChecked');
    this.doSomething();
  }
 }
private logIt(method: string) {
    let child = this.contentChild;
    let message = `${method}: ${child ? child.hero : 'no'} child content`;
    this.logger.log(message);
  }
  private doSomething() {
    this.comment = this.contentChild.hero.length > 10 ? `That's a long name` : '';
  }
}

@Component({
  selector:'after-content-parent',
  template:`
  <div><h2>after content</h2>
  <div *ngIf='show'>`+`
  <after-content><app-child></app-child></after-content>`+`
  </div>
  <h4>--after contents logs----</h4>
<p>
<button (click)='reset()'>Reset</button></p>
<div *ngFor='let msg of logger.logs'>{{msg}}</div>
  </div>
  `,
  providers:[LoggerService]
})
export class AfterContentParentComponent{
  show=true;
  constructor(public logger:LoggerService){}
  reset(){
    this.logger.clear();
    this.show=false;
    this.logger.tick_then(()=>this.show=true);
  }
}