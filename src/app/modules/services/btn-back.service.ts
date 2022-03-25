import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BtnBackService {

  constructor(private _location: Location) { }

  backClicked() {
    this._location.back();
  }
}

