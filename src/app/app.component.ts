import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './Shared/Services/ApiServices';
import { MatListModule } from '@angular/material/list'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularApiApp';


    posts: any[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void { this.apiService.getPosts().
    subscribe( 
      data => { this.posts = data;
});
  }
}
