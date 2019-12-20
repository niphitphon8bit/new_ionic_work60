import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpertInInsertPage } from './expert-in-insert.page';

describe('ExpertInInsertPage', () => {
  let component: ExpertInInsertPage;
  let fixture: ComponentFixture<ExpertInInsertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertInInsertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpertInInsertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
