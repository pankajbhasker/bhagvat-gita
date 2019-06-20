import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SlokMeaningService {

    configUrl = 'assets/meaning/stringHi.json';
    configUrlEng = 'assets/meaning/stringEn.json';

    constructor(private http: HttpClient){}

    public getStringHIndi() {
        console.log(this.configUrl);
        return this.http.get(this.configUrl);
    }

    public getStringEng() {
        return this.http.get(this.configUrlEng);
    }

    public getStringForAll(lang: string) {
        return this.http.get('assets/meaning/meaning/chapter_'+lang+'.json');
    }
}