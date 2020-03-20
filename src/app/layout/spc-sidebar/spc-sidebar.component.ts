import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spc-sidebar',
  templateUrl: './spc-sidebar.component.html',
  styleUrls: ['./spc-sidebar.component.less']
})
export class SpcSidebarComponent implements OnInit {
  @Input() isCollapsed: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
