import { Component } from '@angular/core';
import { LifecycleComponent } from "./lifecycle/lifecycle.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, LifecycleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  color: 'red' | 'yellow' | 'green' = 'red';
  isLifeCycleComponentTrafficLight = false;


  changeLifeCycleComponentTrafficLight(color: string) {
    this.color = color as 'red' | 'yellow' | 'green';
  }

  toggleLifeCycleComponentTrafficLight() {
    this.isLifeCycleComponentTrafficLight = !this.isLifeCycleComponentTrafficLight;
  }
}
