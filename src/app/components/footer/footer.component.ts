import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year = new Date().getFullYear();
  showText1 = true;
  text1 = 'Terms & Conditions';
  text2 = 'Privacy Policy';
  text3 = 'Contact Us';

  constructor() { }

  ngOnInit(): void {
  }

}
