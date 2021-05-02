import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Outbox', icon: 'home' },
    { title: 'Precautions', url: '/precaution', icon: 'medkit' },
    { title: 'Exit Plans', url: '/exit-plans', icon: 'exit' },
    { title: 'Inventory', url: '/inventory', icon: 'file-tray-stacked' },
    { title: 'Complain', url: '/complain', icon: 'mail-open' },
    { title: 'About Us', url: '/about-us', icon: 'People' },
  ];
  constructor() {}
}
