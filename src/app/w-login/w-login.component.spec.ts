import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WLoginComponent } from './w-login.component';

describe('WLoginComponent', () => {
  let component: WLoginComponent;
  let fixture: ComponentFixture<WLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
