import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrawerService } from '../drawer.service';

@Component({
  selector: 'app-giving-path-guide',
  templateUrl: './giving-path-guide.component.html',
  styleUrls: ['./giving-path-guide.component.scss']
})
export class GivingPathGuideComponent implements OnInit {
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
