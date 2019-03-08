import { DataSource} from "@angular/cdk/collections";
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface SampleTableItem {
  position: number;
  sdate: string;
  kbn: string;
  denno: string;
  mcode: string;
  mname: string;
  insuu: number;
  outsu: number;
  zaiko: number;
  bikou: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: SampleTableItem[] = [
  {position: 1, sdate: '2018/02/01', kbn: '受注出庫', denno: 'xxxxxx1',mcode: 'xxxx2',mname: '〇〇〇〇〇',
　　　insuu:1,outsu:0,zaiko:135,bikou:'2018/02/01'},
  {position: 2, sdate: '2018/02/01', kbn: '受注出庫', denno: 'xxxxxx1',mcode: 'xxxx2',mname: '〇〇〇〇〇',
　　　insuu:1,outsu:0,zaiko:135,bikou:'2018/02/01'},
];

/**
 * Data source for the SampleTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class SampleTableDataSource extends DataSource<SampleTableItem> {
  data: SampleTableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<SampleTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: SampleTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: SampleTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'mname': return compare(a.mname, b.mname, isAsc);
        case 'position': return compare(+a.position, +b.position, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
