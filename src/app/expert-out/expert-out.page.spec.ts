import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpertOutPage } from './expert-out.page';

describe('ExpertOutPage', () => {
  let component: ExpertOutPage;
  let fixture: ComponentFixture<ExpertOutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertOutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpertOutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
