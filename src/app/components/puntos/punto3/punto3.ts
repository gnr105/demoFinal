import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Card {
  value: string;
  active: boolean;
}

@Component({
  selector: 'app-punto3',
  imports: [CommonModule],
  templateUrl: './punto3.html',
  styleUrl: './punto3.css',
})
export class Punto3 {
  readonly totalCards = 12;
  
  // Lista de emojis para las cartas
  readonly imageNames = [
    '🐒', 
    '🐔', 
    '🦋', 
    '🐘', 
    '🐻', 
    '🦁'
  ];
  
  cards: Card[] = [];
  selectedCards: { index: number, card: Card }[] = [];
  currentMove = 0;
  attemptsLeft = 0;
  readonly maxAttempts = 10;
  gameStarted = false;
  canFlip = false;
  gameOver = false;
  gameWon = false;

  ngOnInit(): void {
    this.setupGame();
  }

  setupGame(): void {
    const values: string[] = [];
    
    // Creamos los pares usando los emojis directamente
    for (let i = 0; i < this.totalCards / 2; i++) {
      const emoji = this.imageNames[i]; 
      values.push(emoji, emoji);
    }

    this.cards = values
      .sort(() => Math.random() - 0.5)
      .map(v => ({ value: v, active: false }));

    this.attemptsLeft = this.maxAttempts;
    this.gameStarted = false;
    this.canFlip = false;
    this.gameOver = false;
    this.gameWon = false;
    this.selectedCards = [];
    this.currentMove = 0;
  }

  iniciar(): void {
    this.gameStarted = true;
  }

  reiniciar(): void {
    this.setupGame();
  }

  intentar(): void {
    if (this.gameStarted && !this.gameOver && !this.canFlip) {
      this.canFlip = true;
      this.currentMove = 0;
    }
  }

  activate(index: number): void {
    if (!this.gameStarted || !this.canFlip || this.gameOver) {
      return;
    }

    const card = this.cards[index];

    if (this.currentMove < 2 && !card.active) {
      card.active = true;
      this.selectedCards.push({ index, card });
      this.currentMove++;

      if (this.currentMove === 2) {
        this.canFlip = false;
        this.checkMatch();
      }
    }
  }

  private checkMatch(): void {
    const [first, second] = this.selectedCards;

    if (first.card.value === second.card.value) {
      this.resetTurn();
      this.checkVictory();
    } else {
      this.attemptsLeft--;
      setTimeout(() => {
        first.card.active = false;
        second.card.active = false;
        this.resetTurn();
        if (this.attemptsLeft === 0) {
          this.gameOver = true;
        }
      }, 1000);
    }
  }

  private resetTurn(): void {
    this.selectedCards = [];
    this.currentMove = 0;
  }

  private checkVictory(): void {
    if (this.cards.every(card => card.active)) {
      this.gameWon = true;
      this.gameOver = true;
    }
  }

}
