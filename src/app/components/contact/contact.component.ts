import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { MailService } from '../../services/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public newMessage: Contact;
  public messageSuccess;
  public returnMessage;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

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
    this.messageSuccess = 'pending';
    this.returnMessage = 'Your message is being sent...';
    this.mailservice.sendMessage(this.newMessage).subscribe(
      MailResponse => {
        if (MailResponse.success === true) {
          this.messageSuccess = 'success';
          this.returnMessage = 'Success: Message Sent!';
          contactForm.resetForm();
        } else {
          this.messageSuccess = 'failure';
          this.returnMessage = 'Failure: Message Not Sent!';
          console.log(MailResponse.message);
        }
      }
    );
  }
}
