import { Component } from '@angular/core';

declare var module: {
  id: string;
}
@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: 'about.component.html'
  
})
export class AboutComponent {

}
