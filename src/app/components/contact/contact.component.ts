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
  submitEvent = false;
  validatedEvent = false;
  successMessage:string;

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
    this.submitEvent = true;

    if (this.contactForm.valid){
      this.validatedEvent = true;
      this.showConfirmationMessage('Formulaire bien envoyé');
    }
  }
  showConfirmationMessage(message: string){
      this.successMessage = message;
  }

  resetForm() {
    this.contactForm.reset();
    this.validatedEvent = false;
    this.submitEvent = false;
  }
}
