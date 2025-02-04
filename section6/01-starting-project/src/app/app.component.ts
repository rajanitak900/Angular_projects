import { Component } from '@angular/core';
import { ServerStatusComponent } from "./dashboard/server-status/server-status.component";
import { TrafficComponent } from "./dashboard/traffic/traffic.component";
import { TicketsComponent } from "./dashboard/tickets/tickets.component";
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [ServerStatusComponent, TrafficComponent, TicketsComponent, DashboardItemComponent, HeaderComponent],
})
export class AppComponent {


}
