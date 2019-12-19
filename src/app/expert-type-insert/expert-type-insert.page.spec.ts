import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpertTypeInsertPage } from './expert-type-insert.page';

describe('ExpertTypeInsertPage', () => {
  let component: ExpertTypeInsertPage;
  let fixture: ComponentFixture<ExpertTypeInsertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertTypeInsertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpertTypeInsertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
