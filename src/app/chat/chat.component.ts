import { Component, OnInit } from '@angular/core';
import { chatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  constructor(private chatService: chatService) {}

  ngOnInit() {}
}
