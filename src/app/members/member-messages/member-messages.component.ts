import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'src/app/_models/message';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css'],
})
export class MemberMessagesComponent implements OnInit {
  @ViewChild('messageForm') messageForm: NgForm;
  @Input() messages: Message[];
  @Input() username: string;
   messageContent: string;
  loading = false;
  
   // messagesJust:  Message[]=[{
  //   content: "hallo you",
  //   dataRead: null,
  //   id: 26,
  //   messageSent: new Date(),
  //   recipientId: 10,
  //   recipientPhotoUrl: "https://randomuser.me/api/portraits/men/22.jpg",
  //   recipientUsername: "crawford",
  //   senderId: 7,
  //   senderPhotoUrl: "https://randomuser.me/api/portraits/men/96.jpg",
  //   senderUsername: "dixon",
  // }];
  
  constructor(public messageService: MessageService) { }

  ngOnInit(): void { }

  sendMessage() {
    this.loading = true;
    this.messageService.sendMessage(this.username, this.messageContent).then(() => {
      this.messageForm.reset();
    }).finally(() => this.loading = false);
  }

}
