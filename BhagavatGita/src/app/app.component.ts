import { Component, Inject } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  opened: boolean = false;
  loading = false;
  //title = 'Google';
  //@ViewChild('sidenav') private slideNav: SidenavComponent;

  // constructor(@Inject(LOCALE_ID) protected localeId: string) { 
    
  // }

  
  public onSideNavToggle(event: Event){
    console.log(event);
    this.opened = !this.opened;
  }
}
