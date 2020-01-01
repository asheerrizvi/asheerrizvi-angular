import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  downloadResume() {
    window.open('https://drive.google.com/file/d/1z9ilbEe4aYnWd_k5YaYphFn1GsvGwL0v/view?usp=sharing', '_self');
  }
}
