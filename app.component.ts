import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



title="it's a new project"
model:string=''
models:string[]=[]
i:string=''
add(){
  return  this.models.push(this.model)
}
remove(){
  return  this.models.splice( this.models.indexOf(this.i),1)
}
}