import { Component, OnInit } from '@angular/core';
import { BtnBackService } from 'src/app/modules/services/btn-back.service';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.css']
})
export class RoleCreateComponent implements OnInit {

  constructor(private btnBack: BtnBackService) { }

  ngOnInit(): void {
  }

  backClicked() {
    this.btnBack.backClicked();
  }

}
