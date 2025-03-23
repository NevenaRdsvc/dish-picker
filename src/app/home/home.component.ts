import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../shared/input/input.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  firstName: string = '';
  secondName: string = '';
  selectedName: string = '';
  namePicked: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

  pickRandomName() {
    console.log(this.firstName,this.secondName);
    const names = [this.firstName, this.secondName].filter(name => name.trim() !== '');
    if (names.length) {
      this.selectedName = names[Math.floor(Math.random() * names.length)];
      this.namePicked = true;
      this.cdr.detectChanges(); 
    }
  }
}
