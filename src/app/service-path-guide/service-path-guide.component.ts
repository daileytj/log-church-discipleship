import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrawerService } from '../drawer.service';

@Component({
  selector: 'app-service-path-guide',
  templateUrl: './service-path-guide.component.html',
  styleUrls: ['./service-path-guide.component.scss']
})
export class ServicePathGuideComponent implements OnInit {
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
