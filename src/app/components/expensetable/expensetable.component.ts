import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Expense } from 'src/app/app.module';

@Component({
  selector: 'app-expensetable',
  templateUrl: './expensetable.component.html',
  styleUrls: ['./expensetable.component.css']
})
export class ExpensetableComponent {
  displayedColumns: string[] = ['name', 'amount', 'date'];
  dataSource = new MatTableDataSource<Expense>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input() set expenses(value: Expense[]) {
    this.dataSource.data = value;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
