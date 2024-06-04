import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcollabComponent } from './icollab.component';

describe('IcollabComponent', () => {
  let component: IcollabComponent;
  let fixture: ComponentFixture<IcollabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IcollabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IcollabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
