import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { lessions } from '../constants/en/lession-list';
import { lessionList } from '../constants/interfaces';
import { SharedService } from '../services/SharedService';
import { Settings } from '../services/Settings';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  public lessionLists: lessionList[];
  private language: string;
  
  constructor(_sharedService: SharedService, _settings: Settings) {
    _sharedService.emitChange("LessonsComponent");
    _settings.settingChangesEmitted$.subscribe(
      text => {
        this.language = _settings.getLanguage();
      });
    this.language = _settings.getLanguage();
    this.lessionLists = lessions;
   }

  ngOnInit() {
  }

  onListItemClick(lession: lessionList){
    console.log(lession.name);
  }
}

