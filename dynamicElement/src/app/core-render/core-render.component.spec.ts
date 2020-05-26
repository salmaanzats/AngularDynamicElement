import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreRenderComponent } from './core-render.component';

describe('CoreRenderComponent', () => {
  let component: CoreRenderComponent;
  let fixture: ComponentFixture<CoreRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
