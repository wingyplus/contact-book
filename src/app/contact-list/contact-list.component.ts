import { Component, OnInit, Input } from '@angular/core';

import { Contact } from '../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  @Input()
  contacts: Array<Contact>;

  constructor() { }

  ngOnInit() {
  }

}
