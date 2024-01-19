import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.platform.backButton.subscribeWithPriority(5, () => {
      console.log('Another handler was called!');
    });

    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      console.log('Handler was called!');

      processNextHandler();
    });
  }

}
