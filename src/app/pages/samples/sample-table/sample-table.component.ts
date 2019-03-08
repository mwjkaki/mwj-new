import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SampleTableDataSource } from './sample-table-datasource';
import { DateAdapter, NativeDateAdapter } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';

export class MyDateAdapter extends NativeDateAdapter {
  getDateNames(): string[] {
    const dateNames: string[] = [];
    for (let i = 0; i < 31; i++) {
      dateNames[i] = String(i + 1);
    }
    return dateNames;
  }
}

export class DialogContentExample {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'app-sample-table',
  templateUrl: './sample-table.component.html',
  styleUrls: ['./sample-table.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MyDateAdapter}
  ]
})
export class SampleTableComponent implements OnInit {
  soukoCtrl = new FormControl('', [Validators.required]);
  souko = [
    {value: '001', viewValue: '朝来倉庫'},
    {value: '002', viewValue: '本社'},
    {value: '003', viewValue: '水道橋'},
    {value: '004', viewValue: '灰塚'}
  ];
  constructor(dateAdapter: DateAdapter<NativeDateAdapter>) {
    dateAdapter.setLocale('jp-JA');
  }

  displayedColumns =  ['position', 'sdate', 'kbn', 'denno', 'mcode','mname',
                      'insuu','outsu','zaiko', 'bikou'];
  dataSource: SampleTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource = new SampleTableDataSource(this.paginator, this.sort);
  }
  openDialog(){}
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}
