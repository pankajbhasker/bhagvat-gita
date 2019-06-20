import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lessions } from '../constants/en/lession-list';
import { lessionList } from '../constants/interfaces';
import { AllChapter } from '../constants/en/slok-listing';
import { SharedService } from '../services/SharedService';
import { Settings } from '../services/Settings';

@Component({
  selector: 'app-verselisting',
  templateUrl: './verselisting.component.html',
  styleUrls: ['./verselisting.component.css']
})
export class VerseListingComponent implements OnInit {

  public lessionLists: lessionList[];
  public lessionId: string;
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;

  breakpoint: number;

  private language: string;

  constructor(route: ActivatedRoute,_sharedService: SharedService,private router: Router, _settings: Settings) {
    _sharedService.emitChange("VerseListingComponent");
    //this.lessionId = route.snapshot.paramMap.get('id');
    route.params.subscribe(val => {
      // put the code from `ngOnInit` here
      //console.log(val);
      this.lessionId = val.id;
    });
    this.lessionLists = lessions;

    _settings.settingChangesEmitted$.subscribe(
      text => {
        this.language = _settings.getLanguage();
        //console.log(this.language);
      });
    this.language = _settings.getLanguage();
    //console.log('constructor');
   }

  ngOnInit() {
    console.log('1ngOnInit'+ window.innerWidth);
    //this.breakpoint = (window.innerWidth < 650) ? 1 : 5;
    this.setBreakpoint(window.innerWidth);
  }

  getSlokList(id : number){
    return AllChapter[id];
  }

  onMatClick(lession: string,slok: string, number: string){
    console.log(' verseliosting '+lession +'  '+ slok + ' ' + number );
    var lessId = +lession;
    var slokId = +slok;
    lessId = lessId+1;
    slokId = slokId+1;
    this.router.navigate(['verse',{ lession: lessId,slok: slokId,sloknumber: number}]);

  }

  // getTabsName(lession: lessionList){
  //   if(this.language = '0'){
  //       return lession.chapter;
  //   }else{
  //     return lession.chapterEN;
  //   }
  // }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log('window.innerWidth'+window.innerWidth);
    //this.breakpoint = (window.innerWidth <= 650) ? 1 : 5;
    this.setBreakpoint(window.innerWidth);
  }

  setBreakpoint(breakp: number){
    if(breakp <= 500){
      this.breakpoint = 1;
    }else  if(breakp > 500 && breakp <= 1000){
      this.breakpoint = 2;
    }else  if(breakp > 1000 && breakp <= 1500){
      this.breakpoint = 3;
    }else  {
      this.breakpoint = 5;
    }
    //this.breakpoint = (window.innerWidth < 650) ? 1 : 5;
  }

}

