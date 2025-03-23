import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import JSConfetti from 'js-confetti';

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
  isVideoPlaying: boolean = false;

  constructor() { }

  pickRandomName(video: HTMLVideoElement) {
    if (this.isVideoPlaying) {
      return;
    }

    video.play();
    this.isVideoPlaying = true;

    setTimeout(() => {
      const names = [this.firstName, this.secondName].filter(name => name.trim() !== '');
      if (names.length) {
        this.selectedName = names[Math.floor(Math.random() * names.length)];
        this.namePicked = true;
        this.addConfeti();
        video.pause();
        this.isVideoPlaying = false;
      }
    }, 3000);
  }

  private addConfeti() {
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti({
      emojiSize: 45,
      confettiNumber: 45,
      emojis: ['🧽', '🧼', '🫧']
    })
  }
}
