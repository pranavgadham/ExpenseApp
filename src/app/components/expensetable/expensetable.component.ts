import { Component, Input } from '@angular/core';
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

  @Input() set expenses(value: Expense[]) {
    this.dataSource.data = value;
  }
}
