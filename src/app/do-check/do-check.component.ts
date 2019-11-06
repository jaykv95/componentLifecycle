import { Component, DoCheck, Input, ViewChild} from '@angular/core';

class Hero{
  constructor(public name:string){}
}
@Component({
  selector: 'app-do-check',
  template: `<div>
  <p>
  {{hero.name}} can {{power}}
  </p>
  <h4>Change Log</h4>
  <div *ngFor='let ch of changeLog'>{{ch}}</div>
  </div>`,
  styleUrls: ['./do-check.component.css']
})
export class DoCheckComponent implements DoCheck  {
@Input() hero:Hero;
@Input() power:string;
changeLog :string[]=[];
changeDetected=false;
oldHeroName='';
oldPower='';
oldLogLength=0;
noChangeCount=0;

ngDoCheck(){
  if (this.hero.name !== this.oldHeroName) {
    this.changeDetected = true;
    this.changeLog.push(`DoCheck: Hero name changed to "${this.hero.name}" from "${this.oldHeroName}"`);
    this.oldHeroName = this.hero.name;
  }

  if (this.power !== this.oldPower) {
    this.changeDetected = true;
    this.changeLog.push(`DoCheck: Power changed to "${this.power}" from "${this.oldPower}"`);
    this.oldPower = this.power;
  }

  if (this.changeDetected) {
      this.noChangeCount = 0;
  } else {
      // log that hook was called when there was no relevant change.
      let count = this.noChangeCount += 1;
      let noChangeMsg = `DoCheck called ${count}x when no change to hero or power`;
      if (count === 1) {
        // add new "no change" message
        this.changeLog.push(noChangeMsg);
      } else {
        // update last "no change" message
        this.changeLog[this.changeLog.length - 1] = noChangeMsg;
      }
  }

  this.changeDetected = false;
}

reset() {
  this.changeDetected = true;
  this.changeLog = [];
}


}

@Component({
  selector:'ngDoCheckParent',
  templateUrl:'do-check.component.html',
  styleUrls: ['./do-check.component.css']
})

export class DoCheckParentComponent {
  hero:Hero;
  power:string;
  title:'Do check'
  @ViewChild(DoCheckComponent,{static:false}) childView:DoCheckComponent
  constructor(){
    this.reset();
  }
  reset(){
    this.hero=new Hero('windStorm');
    this.power='sing';
    if(this.childView){this.childView.reset();}
  }
}