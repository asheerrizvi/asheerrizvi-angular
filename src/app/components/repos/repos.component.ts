import { Component, OnInit } from '@angular/core';

import { REPOSITORIES } from '../../data/repository-data';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  public repositories = REPOSITORIES;

  constructor() { }

  ngOnInit() {
  }

}
