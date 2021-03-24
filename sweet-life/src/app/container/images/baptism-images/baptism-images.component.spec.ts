import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaptismImagesComponent } from './baptism-images.component';

describe('BaptismImagesComponent', () => {
  let component: BaptismImagesComponent;
  let fixture: ComponentFixture<BaptismImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaptismImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaptismImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
