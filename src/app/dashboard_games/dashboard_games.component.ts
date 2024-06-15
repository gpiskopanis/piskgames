import { Component, OnInit, inject } from '@angular/core';
import { Game } from '../Model/Game';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard_games',
  templateUrl: './dashboard_games.component.html',
  styleUrls: ['./dashboard_games.component.scss']
})
export class Dashboard_gamesComponent implements OnInit {
  showCreateGameForm: boolean = false;
  showEditGameForm: boolean = false;
  http: HttpClient = inject(HttpClient);
  allGames: Game[] = [];
  selectedGame: Game | null = null;
  isLoading: boolean = false;


  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  ngOnInit() {
    this.fetchAllGames();
  }

  openCreateGameForm() {
    this.showCreateGameForm = true;
    console.log('Form popped up');
  }

  closeCreateGameForm() {
    this.showCreateGameForm = false;
    this.selectedGame = null;
  }

  createGame(data: Game) {
    console.log(data);
    this.http.post(
      'https://pisktestbase-default-rtdb.firebaseio.com/Games.json', data)
      .pipe(
        catchError(error => {
          console.error('Error creating game', error);
          return of(null);
        })
      )
      .subscribe(response => {
        if (response) {
          console.log('Game created successfully', response);
          this.fetchAllGames(); // Refresh games list after creation
        }
      });
  }

  fetchAllGames() {
    this.isLoading = true;
    this.http.get<{ [key: string]: Game }>(
      'https://pisktestbase-default-rtdb.firebaseio.com/Games.json'
    ).pipe(
      map(response => {
        console.log(response);
        let games: Game[] = [];
        for (let key in response) {
          if (response.hasOwnProperty(key)) {
            games.push({ ...response[key], id: key });
          }
        }
        return games;
      }),
      catchError(error => {
        console.error('Error fetching games', error);
        return of([]); // Return an empty array on error
      })
    ).subscribe(games => {
      this.allGames = games;
      this.isLoading = false;
      console.log(games);
    });
  }

  clearGames() {
    this.allGames = [];
    console.log('Games cleared');
  }

  viewGameDetail(game: Game) {
    // Logic to view game details
    console.log('Viewing details for game:', game);
  }

  editGame(game: Game) {
    this.selectedGame = { ...game }; // Create a copy of the game to be edited
    this.showEditGameForm = true;
  }

  closeEditGameForm() {
    this.showEditGameForm = false;
    this.selectedGame = null;
  }

  updateGame(updatedGame: Game) {
    const index = this.allGames.findIndex(game => game.id === updatedGame.id);
    if (index !== -1) {
      this.allGames[index] = updatedGame;
    }
  }

 


  deleteGame(gameId: string) {
    this.http.delete(`https://piskmabase-default-rtdb.firebaseio.com/Games/${gameId}.json`)
      .pipe(
        catchError(error => {
          console.error('Error deleting game', error);
          return of(null);
        })
      )
      .subscribe(response => {
        if (response === null) {
          console.error('Game deletion failed, but it is handled gracefully');

        } else {
          console.log('Game deleted successfully', response);
          this.fetchAllGames(); // Refresh games list after deletion
        }
        this.fetchAllGames();
      });
  }





}
