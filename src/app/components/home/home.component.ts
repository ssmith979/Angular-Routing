import { Component } from '@angular/core';

declare var module: {
  id: string;
}
@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html'
  
})
export class HomeComponent {
 
}
