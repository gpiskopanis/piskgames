import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScripthackComponent } from './scripthack.component';

describe('ScripthackComponent', () => {
  let component: ScripthackComponent;
  let fixture: ComponentFixture<ScripthackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScripthackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScripthackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
