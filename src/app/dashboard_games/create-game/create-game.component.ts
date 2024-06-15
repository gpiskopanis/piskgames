import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Game } from '../../Model/Game';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent {
  @Output()
  CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  EmitGameData: EventEmitter<Game> = new EventEmitter<Game>();

  OnCloseForm(){
    this.CloseForm.emit(false);
  }

  OnFormSubmitted(form: NgForm){
    this.EmitGameData.emit(form.value);
    console.log(form.value);
    this.CloseForm.emit(false);
  }

}
