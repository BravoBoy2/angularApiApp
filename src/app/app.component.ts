import { Component } from '@angular/core';
import { ApiService } from './Shared/Services/ApiServices';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent, RouterOutlet],
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
