import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleDashComponent } from './sample-dash/sample-dash.component';
import { SampleAdfrmComponent } from './sample-adfrm/sample-adfrm.component';
import { SampleTableComponent } from './sample-table/sample-table.component';

const routes: Routes = [
  { path: '', component: SampleDashComponent },
  { path: 'form', component: SampleAdfrmComponent },
  { path: 'table', component: SampleTableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplesRoutingModule { }
