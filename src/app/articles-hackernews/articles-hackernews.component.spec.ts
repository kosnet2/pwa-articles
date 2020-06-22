import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesHackernewsComponent } from './articles-hackernews.component';

describe('ArticlesHackernewsComponent', () => {
  let component: ArticlesHackernewsComponent;
  let fixture: ComponentFixture<ArticlesHackernewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesHackernewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesHackernewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
