import { Component, OnInit, Output, EventEmitter, HostListener  } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { Settings } from '../services/Settings';
import { from } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() eventEmmiterFoeNav = new EventEmitter<any>();

  items: ItemsType[];
  showHomeButton: boolean = false;
  language: string;

  engilshText: string;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private settings: Settings) {
    //Set Icons
      iconRegistry.addSvgIcon(
        'more',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images-svg/more.svg'));

        iconRegistry.addSvgIcon(
          'menu',
          sanitizer.bypassSecurityTrustResourceUrl('assets/images-svg/menu.svg'));

          this.items = [
            {id: 1, text: 'Setting', img:'menu'},
            {id: 2, text: 'GO TO', img:'menu'},
            {id: 3, text: 'Browser', img:'menu'}
          ];

          this.language = this.settings.getLanguage();

   }

  ngOnInit() {
    this.setBreakpoint(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log('window.innerWidth'+window.innerWidth);
    //this.breakpoint = (window.innerWidth <= 650) ? 1 : 5;
    this.setBreakpoint(window.innerWidth);
  }

  setBreakpoint(breakp: number){
    if(breakp <= 600){
      this.engilshText = 'Eng';
    }else  {
      this.engilshText = 'English';
    }
    //this.breakpoint = (window.innerWidth < 650) ? 1 : 5;
  }

  toggleNav(){
    console.log("Toolbar menu clicked");
    this.eventEmmiterFoeNav.emit('{name: Amit}');
  }

  onMenuItemClick(item: ItemsType){
    console.log(item.id+"~"+item.text+"~"+item.img);
  }

  onLanguageChange(value: string){
    //this.language = value;
    //console.log(this.language);
    this.settings.setLanguage(value);
    this.language = this.settings.getLanguage();
    //console.log(this.language);
  }
}

interface ItemsType{
  id: number;
  text: string;
  img: string;
}
