import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSDocComponent } from './css-doc.component';

describe('CSSDocComponent', () => {
  let component: CSSDocComponent;
  let fixture: ComponentFixture<CSSDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSSDocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSSDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
