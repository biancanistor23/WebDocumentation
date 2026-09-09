import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatestAllDocComponent } from './combine-latest-all-doc.component';

describe('CombineLatestAllDocComponent', () => {
  let component: CombineLatestAllDocComponent;
  let fixture: ComponentFixture<CombineLatestAllDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombineLatestAllDocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineLatestAllDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
