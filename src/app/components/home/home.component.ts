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
    window.open('https://tinyurl.com/y4w5xlmh', '_self');
  }
}
