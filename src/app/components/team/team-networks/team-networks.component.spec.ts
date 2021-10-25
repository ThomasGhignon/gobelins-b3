import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamNetworksComponent } from './team-networks.component';

describe('TeamNetworksComponent', () => {
  let component: TeamNetworksComponent;
  let fixture: ComponentFixture<TeamNetworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamNetworksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamNetworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
