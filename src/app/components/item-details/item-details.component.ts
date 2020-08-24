import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemDetailsComponent implements OnInit {
  constructor() {}
  @Input('by') by: string;
  @Input('time') time: number;
  @Input('score') score: string;
  @Input('replies') replies: number;

  ngOnInit(): void {}
}
