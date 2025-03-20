import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: Array<any> = [];

  constructor() {
    // Initialize the messages when the service is injected
    this.init();
  }

  init(): void {
    this.insert({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    });
    this.insert({
      name: 'Kate Smith',
      email: 'kate@example.com',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    });
  }

  insert(message: { name: string; email: string; message: string }): void {
    this.messages.push(message);
  }

  getAllMessages(): any[] {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
