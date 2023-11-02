import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmegaMenuComponent } from './omega-menu.component';

describe('OmegaMenuComponent', () => {
  let component: OmegaMenuComponent;
  let fixture: ComponentFixture<OmegaMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OmegaMenuComponent]
    });
    fixture = TestBed.createComponent(OmegaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
