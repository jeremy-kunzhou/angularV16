import { Component, inject } from '@angular/core';
import { Message } from '../data.model';
import { MessageStoreService } from '../services/message-store.service';

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.scss'],
})
export class MyFirstComponent {
  name: string = '';
  email: string = '';
  content: string = '';
  messages: Message[] = [];

  messageStore: MessageStoreService = inject(MessageStoreService);

  constructor() {
    this.messages = this.messageStore.getAllMessage();
  }

  onSubmit() {
    console.log(this.name, this.email, this.content);
    this.messageStore.insert({
      name: this.name,
      email: this.email,
      content: this.content,
    });
  }

  onDelete(index: number) {
    this.messageStore.delete(index);
  }
}
