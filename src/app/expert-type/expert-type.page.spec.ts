import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpertTypePage } from './expert-type.page';

describe('ExpertTypePage', () => {
  let component: ExpertTypePage;
  let fixture: ComponentFixture<ExpertTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpertTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
