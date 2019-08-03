import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public newMessage: Contact;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor() { }

  ngOnInit() {
    this.initMessage();
  }

  public initMessage() {
    this.newMessage = {
      name: '',
      email: '',
      message: ''
    }
  }

  public onSubmit(contactForm) {
    console.log(contactForm.value);
    contactForm.resetForm();
  }

}
