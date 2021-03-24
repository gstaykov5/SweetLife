import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyImagesComponent } from './party-images.component';

describe('PartyImagesComponent', () => {
  let component: PartyImagesComponent;
  let fixture: ComponentFixture<PartyImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
