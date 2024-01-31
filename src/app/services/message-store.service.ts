import { Injectable } from '@angular/core';
import { Message } from '../data.model';

@Injectable({
  providedIn: 'root',
})
export class MessageStoreService {
  messages: Message[] = [];
  constructor() {}

  insert(message: Message) {
    this.messages.push(message);
  }

  delete(index: number) {
    this.messages.splice(index, 1);
  }

  getAllMessage() {
    return this.messages;
  }
}
