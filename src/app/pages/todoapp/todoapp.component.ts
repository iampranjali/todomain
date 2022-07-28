import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError, using, VirtualTimeScheduler } from 'rxjs';
import { StateService } from 'src/app/services/state.service';


@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css']
})
export class TodoappComponent implements OnInit {

  constructor(public _state: StateService) { }

  ngOnInit(): void {
    this._state.checkToken();
  }

  logout() {
    if (confirm('Are you sure you want to logout?')) {
      this._state.logout();
    }
  }

}




