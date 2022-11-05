import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditemComponent } from './components/additem/additem.component';
import { EditComponent } from './components/edit/edit.component';
import { ItemsComponent } from './components/items/items.component';

const routes: Routes = [
  {path: '', component: ItemsComponent},
  {path: 'add', component: AdditemComponent},
  {path: 'edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
