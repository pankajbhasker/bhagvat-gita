import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { SharedService } from '../services/SharedService';
import { lessions } from '../constants/en/lession-list'
import { Settings } from '../services/Settings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  items: itemsType[];

  playUrl: string ="https://play.google.com/store";

  componentName: string;

  @Output() listItemClicked = new EventEmitter<any>();
  @Output() showHomeButtonEventEmitter = new EventEmitter<any>();

  private language: string;

  constructor(_sharedService: SharedService, _settings: Settings,private router: Router) { 
    _sharedService.changeEmitted$.subscribe(
      text => {
        this.changeNavigation(text);
      });

      _settings.settingChangesEmitted$.subscribe(
        text => {
          this.language = _settings.getLanguage();
        });
    this.language = _settings.getLanguage();
  }

  ngOnInit() {
  }

  clickedListItem(url: string,id:string){
    if(url.includes(this.playUrl)){
      window.open(url);
    }else{
    
    //[routerLink]="[nav.url,nav.id]"
    this.router.navigate([url,id]); 
    }
    this.listItemClicked.emit(null);
  }

  public changeNavigation(name: string){
    this.componentName = name;
    if(name == 'LessonsComponent'){
      this.items = [
        {id: 1, text: 'BhagvadGita Android APP',textEN: 'भगवद्‍गीता Android APP', url:'https://play.google.com/store/apps/details?id=com.amiroid.bhagavadgita'},
        {id: 2, text: 'Our Other Andrroid Apps',textEN: 'हमारी अन्य Android ऐप्स', url:'https://play.google.com/store/search?q=pub%3Aamiroid&c=apps'}
      ];
      this.showHomeButtonEventEmitter.emit(false);
    }else  if(name == 'VerseListingComponent'){
        this.items = lessions.map(less => {
          //{id: less.id, text: less.chapter+' - '+less.name, url: less}
          return {id: less.id, text: less.name, textEN: less.nameEN, url:'verselisting'};
        });
        this.showHomeButtonEventEmitter.emit(true);
    }else{
      this.showHomeButtonEventEmitter.emit(true);
    }
  }

}

interface itemsType{
    id: number;
    text: string;
    textEN: string;
    url: string;
}
