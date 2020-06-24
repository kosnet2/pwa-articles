import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.comments = new Observable<any>();
    this.fetchingStories = true;

    this.newsapi.getBestStories().subscribe(
      (stories) => {
        this.articles$ = stories;
        this.fetchingStories = false;
      },
      (err) => {
        console.log(err);
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

  debug() {
    console.log('debug');
  }
}
