import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  newTask;
  public olistItems=[]; ///object
  constructor() { }

  ngOnInit(): void {
  }

  addNew(){
    if (this.newTask == '' || this.newTask == undefined) { 
    } 
    else { 
        this.olistItems.push({taskName:this.newTask}); 
        this.newTask = ''; 
    } 
  }

  public deleteTask(index) { 
    this.olistItems.splice(index, 1);  
  } 

}
