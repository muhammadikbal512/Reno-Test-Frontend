import { Component, OnInit } from '@angular/core';
import { BtnBackService } from 'src/app/modules/services/btn-back.service';

@Component({
  selector: 'app-sandbox-create',
  templateUrl: './sandbox-create.component.html',
  styleUrls: ['./sandbox-create.component.css']
})
export class SandboxCreateComponent implements OnInit {

  constructor(private btnBack: BtnBackService) { }

  ngOnInit(): void {
  }

  backClicked() {
    this.btnBack.backClicked();
  }
}
