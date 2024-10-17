import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from '../../../estevez-ds/button';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

const routes: Routes = [
  {
    path: 'button',
    component: ButtonComponent
  },
  {
    path: 'checkbox',
    component: CheckboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
