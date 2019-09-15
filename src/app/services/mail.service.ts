import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contact } from '../models/Contact';

export interface MailResponse {
  success: boolean;
  message: string;
}

@Injectable()
export class MailService {  
  constructor(private http: HttpClient) { }

  serverAPI = 'http://localhost:3000';

  public sendMessage(contact: Contact): Observable<MailResponse> {
    let URI = `${this.serverAPI}/api/sendmail`;
    let headers = new HttpHeaders;
    let body = {name: contact.name, email: contact.email, message: contact.message};
    headers.append('Content-Type', 'application/json');
    return this.http.post<MailResponse>(URI, body, {headers: headers});
  }
}