import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyFirstAngularApp';
  public msg = 'Hello World';

  onchange(val : any) {
    this.msg = val;
  }

  public fruits = [
    {name : 'Apple', price : 50},
    {name : 'Apple', price : 80},
    {name : 'Apple', price : 120},
    {name : 'Apple', price : 150},
    {name : 'Apple', price : 20},
  ]
}

