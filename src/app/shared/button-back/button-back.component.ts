import { Component, OnInit } from '@angular/core';
import { BtnBackService } from 'src/app/modules/services/btn-back.service';

@Component({
  selector: 'app-button-back',
  templateUrl: './button-back.component.html',
  styleUrls: ['./button-back.component.css']
})
export class ButtonBackComponent implements OnInit {

  constructor(private _back: BtnBackService) { }

  ngOnInit(): void {
  }

  backClicked() {
    this._back.backClicked()
  }

}
