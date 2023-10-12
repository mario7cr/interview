import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputLogComponent } from './output-log.component';

describe('OutputLogComponent', () => {
  let component: OutputLogComponent;
  let fixture: ComponentFixture<OutputLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
