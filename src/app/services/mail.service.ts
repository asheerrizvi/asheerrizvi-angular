import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/Contact';

export interface MailResponse {
  message: string;
}

@Injectable()
export class MailService {
  constructor(private http: HttpClient) { }

  destOne = 'First Email Destination';
  destTwo = 'Second Email Destination';
  serverAPI = `https://YOUR FIREBASE FUNCTION URL?destOne=${this.destOne}&destTwo=${this.destTwo}`;


  public sendMessage(contact: Contact): Observable<MailResponse> {
    const URI = `${this.serverAPI}&name=${contact.name}&email=${contact.email}&message=${contact.message}`;
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<MailResponse>(URI, {headers});
  }
}
