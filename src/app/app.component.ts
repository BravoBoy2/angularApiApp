import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterOutlet } from '@angular/router';


@Component({
    selector: 'app-root',
    imports: [NavigationComponent, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularApiApp';
  // data = inject(MAT_DIALOG_DATA)



  constructor(){}


}
