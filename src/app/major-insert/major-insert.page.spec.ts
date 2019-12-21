import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MajorInsertPage } from './major-insert.page';

describe('MajorInsertPage', () => {
  let component: MajorInsertPage;
  let fixture: ComponentFixture<MajorInsertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorInsertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MajorInsertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
