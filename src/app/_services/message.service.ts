import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Message } from '../_models/message';
import { getPaginatedResult, getPaginationHeader } from './pagination-helper';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  basUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMessage(pageNumber, pageSize, conatiner) {
    let params = getPaginationHeader(pageNumber, pageSize);
    params = params.append('Container', conatiner);
    return getPaginatedResult<Message[]>(
      this.basUrl + 'messages',
      params,
      this.http
    );
  }

  getMessageThread(username: string) {
    return this.http.get<Message[]>(
      this.basUrl + 'messages/thread/' + username
    );
  }

  sendMessage(username: string, content: string) {
    return this.http.post<Message>(this.basUrl + 'messages', {
      recipientUsername: username,
      content,
    });
  }

  deleteMessage(id: number) {
    return this.http.delete(this.basUrl + 'messsages/' + id);
  }
}
