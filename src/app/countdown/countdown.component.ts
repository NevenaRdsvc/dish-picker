import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit {
  startDays: number = 75;
  startDate: Date = new Date('2025-03-18'); 
  daysLeft: number = 75;

  ngOnInit(): void {
    this.calculateDaysLeft();
  }

  calculateDaysLeft(): void {
    const today = new Date();
    const differenceInTime = today.getTime() - this.startDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

    this.daysLeft = Math.max(this.startDays - differenceInDays, 0);
  }
}
