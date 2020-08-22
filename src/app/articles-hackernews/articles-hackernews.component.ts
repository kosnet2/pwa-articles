import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-articles-hackernews',
  templateUrl: './articles-hackernews.component.html',
  styleUrls: ['./articles-hackernews.component.css'],
})
export class ArticlesHackernewsComponent implements OnInit {
  articles$: Observable<any>;
  comments: Observable<any>;
  fetchingComments = false;
  fetchingStories = false;

  constructor(private newsapi: NewsapiService) {}

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }

  onArticleScroll(e: Event) {
    this.debug(e);
  }

  ngOnInit(): void {
    this.comments = new Observable<any>();
    this.fetchingStories = true;
    this.newsapi.getBestStories().subscribe(
      (stories) => {
        this.articles$ = stories;
        this.fetchingStories = false;
        // this.articles$.forEach((article) => {
        //   try {
        //     const regex = /[A-Z][A-Za-z]+/g;
        //     const processedTitle = article['title'].match(regex).join(' ');
        //     this.newsapi.getImageByTitle(processedTitle).subscribe(
        //       (res) => {
        //         article['image'] = res['value'][0]['thumbnailUrl'];
        //       },
        //       (err) => {
        //         article['image'] = this.newsapi.getDefaultImage();
        //       }
        //     );
        //   } catch (err) {
        //     article['image'] = this.newsapi.getDefaultImage();
        //   }
        // });
      },
      (err) => {
        console.error(err);
        this.fetchingStories = false;
      }
    );
  }

  fetchComments(articleId, ids) {
    if (!this.comments.hasOwnProperty(articleId)) {
      this.fetchingComments = true;
      this.newsapi.getCommentsByIds(ids).subscribe(
        (comments: Array<{}>) => {
          comments.sort((a: {}, b: {}) => {
            let repliesA = a['kids'] !== undefined ? a['kids'].length : 0;
            let repliesB = b['kids'] !== undefined ? b['kids'].length : 0;
            return repliesB - repliesA;
          });
          this.comments[articleId] = comments;
          this.fetchingComments = false;
        },
        (err) => {
          console.log(err);
          this.fetchingComments = false;
        }
      );
    }
  }
  debug(e) {
    console.log(e);
  }
}
