import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-item-manager',
  templateUrl: './item-manager.component.html',
  styleUrls: ['./item-manager.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemManagerComponent implements OnInit {
  itemType: string;

  constructor() {}

  ngOnInit(): void {
    console.log(window.location.pathname.slice(1));
    this.itemType = window.location.pathname.slice(1);
  }
}
