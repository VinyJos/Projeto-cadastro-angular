import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
  //cria uma instância da classe e cria um objeto
  tasks: Task[] = []
  constructor(private taskService: TaskService){

  }

  ngOnInit(): void {
    this.tasks = this.taskService.getAll();
    
  }
// Injeção de dependência

}
