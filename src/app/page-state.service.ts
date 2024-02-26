import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageStateService {

  constructor() {}

  temporaryMenu: boolean = false;

  setTemporaryMenu(status: boolean) {

    this.temporaryMenu = status;

  }
}
