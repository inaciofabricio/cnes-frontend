import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportarComponent } from './importar.component';

describe('ImportarComponent', () => {
  let component: ImportarComponent;
  let fixture: ComponentFixture<ImportarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
