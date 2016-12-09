import { Component } from '@angular/core';

import { Contact } from './contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello angular2!';
  contacts: Contact[] = [
    {
      fullName: 'wingyplus',
      tel: '00011122222',
      email: 'hello@geekybase.com'
    }
  ];

  fullName: string;
  tel: string;
  email: string;

  createContact() {
    this.contacts = this.contacts.concat({
      fullName: this.fullName,
      tel: this.tel,
      email: this.email
    });

    this.fullName = '';
    this.tel = '';
    this.email = '';
  }
}
