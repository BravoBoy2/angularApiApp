import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
// import {ApiService} from '../Shared/Services/ApiServices';
import {MatCardTitle} from '@angular/material/card';

@Component({
    selector: 'app-home',
    imports: [MatListModule, MatCardTitle],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

  posts: any[] = [];

  // constructor(private apiService: ApiService) {}
  // ngOnInit(): void { this.apiService.getPosts().
  // subscribe(
  //   data => { this.posts = data;
  //   });
  // }
}
