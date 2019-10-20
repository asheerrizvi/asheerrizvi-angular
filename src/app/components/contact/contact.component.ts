import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { Contact } from '../../models/contact';
import { MailService } from '../../services/mail.service';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('messageState', [
      state('default', style({
        transform: 'translateX(-100px)',
        opacity: 0,
        display: 'none'
      })),
      state('sent', style({
        transform: 'translateX(0)',
        opacity: 1,
      })),
      transition('default => sent', [
        style({
          display: 'block',
        }),
        animate('500ms 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275)')
      ]),
      transition('sent => default', [
        animate('500ms 100ms cubic-bezier(0.6, -0.28, 0.735, 0.045)'),
      ]),
    ]),
    trigger('scrollAnimation', [
      state('hide',   style({
        opacity: 0,
        transform: 'translateY(35%)'
      })),
      state('show', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('hide => show', animate('1200ms 300ms cubic-bezier(0.165, 0.84, 0.44, 1)'))
    ])
  ]
})
export class ContactComponent implements OnInit {
  public newMessage: Contact;
  private mailResponse;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  state = 'default';
  faEnvelope = faEnvelope;
  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
  faTwitter = faTwitter;

  constructor(private mailservice: MailService) { }

  ngOnInit() {
    this.initMessage();
  }

  public initMessage() {
    this.newMessage = {
      name: '',
      email: '',
      message: ''
    };
  }

  public onSubmit(contactForm) {
    this.mailservice.sendMessage(this.newMessage).subscribe();
    this.state = 'sent';
    contactForm.resetForm();
  }

  public closeNotification() {
    this.state = 'default';
  }
}
