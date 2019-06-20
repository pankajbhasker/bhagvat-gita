import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SlokMeaningService } from '../services/SlokMeaningService';
import { AllChapter, } from '../constants/en/slok-listing';
import { Settings } from '../services/Settings';
import { SharedService } from '../services/SharedService';
import { lessions } from '../constants/en/lession-list';
import { MinuteSecondsPipe } from '../pipe/minuteSeconds';
import { MatSliderChange } from '@angular/material';

@Component({
  selector: 'app-verse',
  templateUrl: './verse.component.html',
  styleUrls: ['./verse.component.css']
})
export class VerseComponent implements OnInit {

  lessionId: string;
  slokId: string;
  private number: string;
  isShowProgressBar = false;

  private lessionHeadingText = 'lesson_?_verse_#_heading';
  private verseText = 'lesson_?_verse_#';
  private translationText = 'lesson_?_verse_#_translation';

 // private lessionHeading: meaningKeyValue[];
 // private lessionVerse: meaningKeyValue[];
 // private slokTranslation: meaningKeyValue[];

  private meaningDataHindi: meaningKeyValue[];
  private meaningDataEng: meaningKeyValue[];
  private meaningForAll: meaningData[];

  private language: string;
  private isPlayingAudio: boolean;

  private engMusicUrl = 'assets/music/music-en/';
  private hinMusicUrl = 'assets/music/music-hi/';

  audio = new Audio();

  // @ViewChild('audioOption') audioPlayerRef: ElementRef;
  // @ViewChild('bar') progressBar: ElementRef;
 // progressBar: string;
  progressInMinutes = 0.0;
  totalTimeInMinutes = 0.00;
  isMinute = false;

  maxSlider: number;
  valueSlider: number;

  constructor(private route: ActivatedRoute, private slokMeaningSer: SlokMeaningService, _settings: Settings,
              _sharedService: SharedService, private router: Router) {

    _sharedService.emitChange('VerseListingComponent');

    this.lessionId = this.route.snapshot.paramMap.get('lession');
    this.slokId = this.route.snapshot.paramMap.get('slok');
    this.number = this.route.snapshot.paramMap.get('sloknumber');

    _settings.settingChangesEmitted$.subscribe(
      text => {
        this.language = _settings.getLanguage();
        this.getSlokData(this.language);

        // For Audio Sound
        this.stopAudio();
        this.isPlayingAudio = false;
        this.audio = new Audio();
        this.setAudioPlayListner();
      });
    this.language = _settings.getLanguage();

    this.getSlokData(this.language);
  }

  ngOnInit() {
    this.setAudioPlayListner();
  }

  // data=0// lessionHeading, data=1//lessionVerse, data=2//slokTranslation
  getSlokDataWByGivenData(data: number, lang: string, lessId: string, sloknumber: string) {
   // console.log('getSlokDataWByGivenData -start');

    console.log(' <<< this.lessionHeadingText >>> ' , this.lessionHeadingText );

    const lessionHeadingText = this.lessionHeadingText.toString().replace('?', lessId).replace('#', sloknumber);
    const verseText = this.verseText.replace('?', lessId).toString().replace('#', sloknumber);
    const translationText = this.translationText.toString().replace('?', lessId).replace('#', sloknumber);

    try {
      if (lang === '0') {
        // console.log('data try' , data);
        if ( data === 0) {
            // console.log( lessionHeadingText , ' < meaningDataHindi > ' , this.meaningDataHindi);
            const lessionHeading: meaningKeyValue[] =  this.meaningDataHindi.filter(kv => kv.name === lessionHeadingText);
            //  [{ 'name':'श्लोक 1', 'text':'ram ram'}, { 'name':'श्लोक 2', 'text':'ram shyam'}]; lessionHeadingText
            // console.log('lessionHeading > ' , lessionHeading);
            lessionHeading[0].text = lessionHeading[0].text.toString().replace('<br/>', '');
            return lessionHeading[0].text;
          } else if (data === 1) {
            const lessionVerse: meaningKeyValue[] = this.meaningDataHindi.filter(kv => kv.name === verseText);
            return lessionVerse[0].text;
          } else if (data === 2) {
            const slokTranslation: meaningKeyValue[] = this.meaningDataHindi.filter(kv => kv.name === translationText);
            return slokTranslation[0].text;
          }
      } else {
        if (data === 0) {
          const lessionHeading: meaningKeyValue[] = this.meaningDataEng.filter(kv => kv.name === lessionHeadingText);
          // console.log('lessionHeading > ' , lessionHeading);
          lessionHeading[0].text = lessionHeading[0].text.replace('<br/>', '');
          return lessionHeading[0].text;
        } else if (data === 1) {
          const lessionVerse: meaningKeyValue[] = this.meaningDataEng.filter(kv => kv.name === verseText);
          return lessionVerse[0].text;
        } else if (data === 2) {
          const slokTranslation: meaningKeyValue[] = this.meaningDataEng.filter(kv => kv.name === translationText);
          return slokTranslation[0].text;
        }
      }
    } catch (Error) {
      console.log(Error.message);
      // this.router.navigate(['verse-listing',lessId]);
      // [routerLink]="['verse-listing',lession.id]"
    }
  }

  getSlokData(lang: string) {
    this.isShowProgressBar = true;
    // console.log(lang);
    if ( lang === '0') {
      if ( this.meaningDataHindi == null) {
          this.slokMeaningSer.getStringHIndi().subscribe(res => {
              this.meaningDataHindi = res as meaningKeyValue[];
          });
        } else {
          // console.log(this.meaningDataHindi);
        }
    } else {
      if ( this.meaningDataEng == null) {
       // console.log("not null");
          this.slokMeaningSer.getStringEng().subscribe(res => {
            this.meaningDataEng = res as meaningKeyValue[];
           // console.log(this.meaningDataEng);
            });
        }
    }

    if (this.meaningForAll == null) {
      this.slokMeaningSer.getStringForAll(this.lessionId).subscribe(res => {
        this.meaningForAll = res as meaningData[];
        });
    }

    this.isShowProgressBar = false;
   // console.log('getSlokData -end');
  }

  getSlokList(id: string) {
    const less = +id - 1 ;
    // console.log('sloklist > ' , JSON.stringify(AllChapter[less]));
    return AllChapter[less];
  }

  selectedTab($event) {
   // console.log($event.index);
    const num = $event.index;
    this.slokId = '' + num;
  }

  getLessionName() {
if (this.language === '0') {
        return lessions[+this.lessionId - 1].name;
    } else {
      return lessions[+this.lessionId - 1].nameEN;
    }
  }

  palyPause(value: boolean) {
    this.isPlayingAudio = value;

    if (value) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  setAudioPlayListner() {
    // this.audioPlayerRef.nativeElement.play();
    if (this.language === '0') {
      const extraUrl = 'hindi_chapter_' + this.lessionId + '.mp3';
      this.audio.src = this.hinMusicUrl + extraUrl;
    } else {
      const extraUrl = 'bg-' + this.lessionId + '.mp3';
      this.audio.src = this.engMusicUrl + extraUrl;
    }

    // if(minuteValue.toString.)

    // this.audio.play();
    this.audio.addEventListener('timeupdate', (currentTime) => {
        // console.log(currentTime);
        // console.log(this.audio);
        // var time = 0;
        this.totalTimeInMinutes = this.audio.duration ;
        this.maxSlider = this.totalTimeInMinutes;
        this.updateProgress();
       });
  }

  updateProgress() {
    if (this.audio.currentTime > 0) {
      // var value = 0;
     // value = (100 / this.audio.duration) * this.audio.currentTime;
       this.progressInMinutes = this.audio.currentTime;
     // this.progressBar = value + '%';
       this.valueSlider = this.progressInMinutes;

       if (this.valueSlider == this.maxSlider) {
          this.isPlayingAudio = false;
          this.valueSlider = 0;
        }
     } else {
       // console.log("00000000000000000000")
     }
  }

  onInputChange(event: MatSliderChange) {
    // console.log("This is emitted as the thumb slides");
    // console.log(event.value);
    this.audio.currentTime = event.value;
  }

  ngOnDestroy() {
    // destroy audio here
    this.stopAudio();
  }

  stopAudio() {
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }

  getSlokDataForAll(slokId: string) {
    const meaningData: any = this.meaningForAll[slokId];
    return meaningData.t;
  }

}

interface meaningKeyValue {
  name: string;
  text: string;
}

interface meaningData {
  t: string;
  s_n: string;
}

interface ChapterSlok {
  id: number;
  name: string;
  nameEN: string;
}
