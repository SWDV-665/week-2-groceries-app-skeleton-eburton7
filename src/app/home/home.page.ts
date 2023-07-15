import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  groceryItems: string[] = [
    'Apples',
    'Cheesecake',
    'Celery',
    'Green Tea',
    'Burgers',
    'Tuna',
    'Pasta',
  ];
}
