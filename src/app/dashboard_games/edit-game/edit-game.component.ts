import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../../Model/Game';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent {
  @Input() game!: Game;
  @Output() closeForm = new EventEmitter<void>();
  @Output() updateGame = new EventEmitter<Game>();

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.put(
      `https://pisktestbase-default-rtdb.firebaseio.com/Games/${this.game.id}.json`,
      this.game
    ).subscribe(response => {
      console.log('Task updated successfully', response);
      this.updateGame.emit(this.game); // Emit the updated game
      this.closeEditForm();
    });
  }

  closeEditForm() {
    this.closeForm.emit();
  }
}
