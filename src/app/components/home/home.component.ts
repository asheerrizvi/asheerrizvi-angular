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
    window.open('https://drive.google.com/file/d/1IUMvn_Vv_hqb06v-dTUz40Xyv0moDmK2/view?usp=sharing', '_self');
  }
}
