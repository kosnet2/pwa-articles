import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsHackernewsComponent } from './jobs-hackernews.component';

describe('JobsHackernewsComponent', () => {
  let component: JobsHackernewsComponent;
  let fixture: ComponentFixture<JobsHackernewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsHackernewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsHackernewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
