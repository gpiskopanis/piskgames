import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  googleSheetUrl = 'https://script.google.com/macros/s/AKfycbyQIbtZQ4qRdcLn3LLWs4nTGpM7flYtE7X6lnorHao8XADIjHukARDt22qTOuNQ9MTa/exec';
  getGoogleSheetValue(): Observable<any> {
    return this.http.get(this.googleSheetUrl);
  }
}


