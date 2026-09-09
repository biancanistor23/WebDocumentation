import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsDocComponent } from './rx-js-doc.component';

describe('RxJsDocComponent', () => {
  let component: RxJsDocComponent;
  let fixture: ComponentFixture<RxJsDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxJsDocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxJsDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
