import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplesRoutingModule } from './samples-routing.module';
import { SampleDashComponent } from './sample-dash/sample-dash.component';
import { MatGridListModule,
  MatDatepickerModule,
　MatNativeDateModule,
　MatOptionModule,
  MatExpansionModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatInputModule, MatSelectModule, MatRadioModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { SampleAdfrmComponent } from './sample-adfrm/sample-adfrm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SampleTableComponent } from './sample-table/sample-table.component';

@NgModule({
  declarations: [SampleDashComponent, SampleAdfrmComponent, SampleTableComponent],
  imports: [
    CommonModule,
    SamplesRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
  　MatNativeDateModule,
  　MatOptionModule,
  　MatPaginatorModule,
    MatExpansionModule
  ]
})
export class SamplesModule { }
