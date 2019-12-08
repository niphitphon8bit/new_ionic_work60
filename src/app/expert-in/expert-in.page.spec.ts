import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpertInPage } from './expert-in.page';

describe('ExpertInPage', () => {
  let component: ExpertInPage;
  let fixture: ComponentFixture<ExpertInPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertInPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpertInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
