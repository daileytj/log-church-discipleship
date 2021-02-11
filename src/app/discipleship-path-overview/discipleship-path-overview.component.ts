import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrawerService } from '../drawer.service';

@Component({
  selector: 'app-discipleship-path-overview',
  templateUrl: './discipleship-path-overview.component.html',
  styleUrls: ['./discipleship-path-overview.component.scss']
})
export class DiscipleshipPathOverviewComponent implements OnInit {
  drawerOpen: boolean;
  
  constructor(public router: Router, public drawerService: DrawerService, public changeDetectorService: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.drawerOpen = this.drawerService.getDrawerOpen();
    this.drawerService.drawerOpenChanges().subscribe((res: boolean) => {
      this.drawerOpen = res;
      this.changeDetectorService.detectChanges();
    });
  }

  openDrawer() {
    this.drawerService.setDrawerOpen(true);
  }
}
