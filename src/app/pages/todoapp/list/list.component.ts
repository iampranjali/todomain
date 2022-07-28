import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  constructor(public _state: StateService, private _rest: RestService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  add(){
    const new_task = prompt("New TasK");
    if (new_task) {
      this._rest.add_todo(new_task).subscribe(resp => {
        console.log(resp);
        this.getTodos();
      }, err => {
        console.log(err);
        this.getTodos();
      });
    }
  }

  getTodos() {
    this._rest.getTodos().subscribe(data => {
      console.log(data);
      this._state.todos = (data as any)['data'];
    }, err => console.log(err));
  }

  change_status(id: number, status: number) {
    this._rest.change_status(id, status).subscribe(resp => {
      console.log(resp);
      this.getTodos();
    }, err => {
      console.log(err);
      this.getTodos();
    });
  }

  delete(id: number) {
    if (confirm("Are You Sure ?")) {
      this._rest.delete_todo(id).subscribe(resp => {
        console.log(resp);
        this.getTodos();
      }, err => {
        console.log(err);
        this.getTodos();
      });
    }
  }
  
  edit(id: number, old_task: string) {
    const new_task = prompt("Update TasK", old_task);
    if (new_task) {
      this._rest.update_todo(id, new_task).subscribe(resp => {
        console.log(resp);
        
      }, err => {
        console.log(err);
        
      });
    }
  }

}
