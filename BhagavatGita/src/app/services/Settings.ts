import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Subject } from 'rxjs';

@Injectable()
export class Settings {

    languageKey = 'LANGUAGE';

    // Observable string sources
    private settingChanges = new Subject<any>();

    settingChangesEmitted$ = this.settingChanges.asObservable();

    constructor(private storage: LocalStorageService) {}

    getLanguage() {
       var language =  this.storage.retrieve(this.languageKey);
       console.log('19>> ', language);
       if (language == null) {
           return '0';
       } else {
           return language;
       }
    }

    setLanguage(value: string){
        this.storage.store(this.languageKey, value);
        this.settingChanges.next('');
    }

}