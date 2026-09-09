import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsTsDocComponent } from './js-ts-doc.component';

describe('JsTsDocComponent', () => {
  let component: JsTsDocComponent;
  let fixture: ComponentFixture<JsTsDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsTsDocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsTsDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
