import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  static readonly EMAIL = /^.+\@\S+\.\S+$/;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.pattern(ContactComponent.EMAIL)]),
      subject: new FormControl(null, [Validators.required]),
      comments: new FormControl(null, [Validators.required]),
    })
  }

  ngOnInit(): void {

  }

  submitForm() {
    console.log(this.contactForm.value);
  }
}
