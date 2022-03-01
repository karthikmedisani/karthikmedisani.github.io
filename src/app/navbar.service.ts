import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class NavBarService{

    currTab: String = 'home';
    constructor() { 
    }

    markTab(newTab: String): void {
        this.currTab = newTab;
    }

    getTab(): String {
        return this.currTab;
    }
}