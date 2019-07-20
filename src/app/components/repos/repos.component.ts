import { Component, OnInit } from '@angular/core';

import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
  providers: [RepositoryService]
})
export class ReposComponent implements OnInit {
  public mobile: boolean;
  public repositories = [];

  constructor(private repositoryService: RepositoryService) { }

  ngOnInit() {
    if (window.screen.width === 360) {
      this.mobile = true;
    }
    this.repositories = this.repositoryService.getRepositories();
  }

}
