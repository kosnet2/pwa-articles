import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  NgZone,
} from '@angular/core';
import { Observable } from 'rxjs';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent implements OnInit {
  @Input('itemType') itemType: string;

  articles$: Observable<any>;

  constructor(private newsapi: NewsapiService, private _ngZone: NgZone) {}

  ngOnInit(): void {
    this._ngZone.runOutsideAngular(() => {
      this.articles$ = this.newsapi.getArticles(this.itemType);
    });
  }
}
