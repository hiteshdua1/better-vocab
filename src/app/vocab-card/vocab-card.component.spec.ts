import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabCardComponent } from './vocab-card.component';

describe('VocabCardComponent', () => {
  let component: VocabCardComponent;
  let fixture: ComponentFixture<VocabCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
