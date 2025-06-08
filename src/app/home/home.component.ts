import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddExpensesComponent } from '../components/add-expenses/add-expenses.component';
import { Expense } from '../app.module';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private dialog: MatDialog, private services:AppService){}

  expenses:Array<Expense> = [];

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddExpensesComponent, {
      width: '30%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { refreshExpenses: this.getExpenses.bind(this) }
    });
  }

  getExpenses():void{
    this.services.getExpenses().subscribe({
      next:(response)=>{
        if(response.success && response.data){
          this.expenses = response.data;
        }else{
          alert(response.message);
        }
      },
      error:(error)=>{
        alert(error.message);
      }
    })
  }

  ngOnInit(): void {
    this.getExpenses();
  }

}
