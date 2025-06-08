import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Expense } from 'src/app/app.module';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.css']
})
export class AddExpensesComponent {
  constructor(
    public dialogRef: MatDialogRef<AddExpensesComponent>,
    private services: AppService,
    @Inject(MAT_DIALOG_DATA) public data: { refreshExpenses: () => void }
  ) {}


  addExpenseForm = new FormGroup({
    name: new FormControl('', Validators.required),
    amount: new FormControl(0, [Validators.required, Validators.min(0)]),
    date: new FormControl(new Date, Validators.required),
  });

  onSubmit() {
    const newExpense: Expense = this.addExpenseForm.value as Expense;

    this.services.postExpenses(newExpense).subscribe({
      next: (response) => {
        if (response.success) {
          this.data.refreshExpenses();
          this.dialogRef.close();
        } else {
          alert(response.message || 'Failed to add expense.');
        }
      },
      error: (error) => {
        console.error('Error adding expense:', error);
        alert('An error occurred while adding the expense.');
      }
    });
  }
}