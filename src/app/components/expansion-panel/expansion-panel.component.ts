import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  NgZone,
} from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionPanelComponent implements OnInit {
  @Input('article') article: any;
  comments$: Observable<any>;
  fetchingComments = false;

  constructor(private newsapi: NewsapiService, private _ngZone: NgZone) {}

  ngOnInit(): void {
    this.comments$ = new Observable<any>();
  }

  fetchComments(id, kids) {
    this._ngZone.runOutsideAngular(() => {
      if (!this.comments$.hasOwnProperty(id)) {
        this.comments$[id] = this.newsapi.getCommentsByIds(kids);
      }
    });
  }
}
