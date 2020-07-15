import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TableInteractionComponent } from './table-interaction/table-interaction.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path : 'todo' , component: TodoComponent},
  { path: 'products', component: MainComponent },
  { path: 'table', component:TableInteractionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
