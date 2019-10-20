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
    window.open('https://drive.google.com/file/d/1939z2OaqiFFkQPo7v6Dsk6JXn5YMROHp/view?usp=sharing', '_self');
  }
}
