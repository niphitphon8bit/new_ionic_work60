import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpertOutInsertPage } from './expert-out-insert.page';

describe('ExpertOutInsertPage', () => {
  let component: ExpertOutInsertPage;
  let fixture: ComponentFixture<ExpertOutInsertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertOutInsertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpertOutInsertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
