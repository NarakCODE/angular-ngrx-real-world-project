import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: Array<any> = [];

  constructor(private messageService: MessageService) {
    this.messages = this.messageService.getAllMessages();
    this.isSubmitted = this.messages.length > 0;
  }

  onSubmit(): void {
    this.isSubmitted = true;
    this.messageService.insert({
      name: this.name,
      email: this.email,
      message: this.message,
    });

    console.log(this.messages);
  }

  deleteMessage(index: number): void {
    this.messageService.deleteMessage(index);
  }
}
