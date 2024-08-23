import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pics',
  templateUrl: './pics.component.html',
  styleUrl: './pics.component.css'
})
export class PicsComponent {
  constructor(private readonly router: Router) { }

  goto(id: number) {
    this.router.navigate(['/pics', id], { queryParams: { barbie: 'ken' } });
  }
}


