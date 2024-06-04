import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcrepoComponent } from './icrepo.component';

describe('IcrepoComponent', () => {
  let component: IcrepoComponent;
  let fixture: ComponentFixture<IcrepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IcrepoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IcrepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
