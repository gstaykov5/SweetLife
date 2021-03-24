import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingImagesComponent } from './wedding-images.component';

describe('WeddingImagesComponent', () => {
  let component: WeddingImagesComponent;
  let fixture: ComponentFixture<WeddingImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
