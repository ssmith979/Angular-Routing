import { Component } from '@angular/core';
declare var module: {
  id: string;
}
@Component({
  moduleId: module.id,
  selector: 'sidebar',
  templateUrl: 'sidebar.html'
  
})
export class SidebarComponent {
  
}
