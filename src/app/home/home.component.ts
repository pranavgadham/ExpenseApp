import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddExpensesComponent } from '../components/add-expenses/add-expenses.component';
import { Expense } from '../app.module';
import { AppService } from '../app.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private dialog: MatDialog, private services: AppService) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  expenses: Array<Expense> = [];

  page: number = 1;
  limit: number = 5;
  sortBy: string= "";
  search: string = "";
  totalItems!: number

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(AddExpensesComponent, {
      width: '40%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        refreshExpenses: this.getExpenses.bind(this),
        url: this.dynamicUrl()
      }
    });
  }

  dynamicUrl():string{
    let url: string = `http://localhost:3000/api/expenses/all?page=${this.page}&limit=${this.limit}`;
    if(this.sortBy.length){
      url = url + `&sortBy=${this.sortBy}`;
    }
    if(this.search.length){
      url = url + `&name=${this.search}`;
    }
    return url
  }

  getExpenses(url: string): void {
    this.services.getExpenses(url).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.expenses = response.data;
          if(response.pagination){
            this.totalItems = response.pagination.totalItems
          }
        } else {
          alert(response.message);
        }
      },
      error: (error) => {
        alert(error.message);
      },
    });
  }

  ngOnInit(): void {
    this.getExpenses(
      this.dynamicUrl()
    );
  }

  onOptionChange(): void {
    this.page = 1;
    this.limit = 5;
    this.getExpenses(
      this.dynamicUrl()
    );
  }

  onSearchChange(event: KeyboardEvent): void {
    if(event.key == "Enter"){
      console.log(this.search);
      this.getExpenses(this.dynamicUrl());
    }
  }

  onPaginatorChange(): void {
    this.page = this.paginator.pageIndex + 1;
    this.limit = this.paginator.pageSize;
    this.getExpenses(this.dynamicUrl());
  }
}
