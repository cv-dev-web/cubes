import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourcesAddComponent } from './ressources-add.component';

describe('RessourcesAddComponent', () => {
  let component: RessourcesAddComponent;
  let fixture: ComponentFixture<RessourcesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RessourcesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RessourcesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
