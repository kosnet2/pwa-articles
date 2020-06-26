import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-jobs-hackernews',
  templateUrl: './jobs-hackernews.component.html',
  styleUrls: ['./jobs-hackernews.component.css'],
})
export class JobsHackernewsComponent implements OnInit {
  jobs$: Observable<any>;
  fetchingJobs = false;

  constructor(private newsapi: NewsapiService) {}

  ngOnInit(): void {
    this.fetchingJobs = true;

    this.newsapi.getJobStories().subscribe(
      (jobs) => {
        this.jobs$ = jobs;
        this.fetchingJobs = false;
      },
      (err) => {
        console.log(err);
        this.fetchingJobs = false;
      }
    );
  }
}
