import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MajorUpdatePage } from './major-update.page';

describe('MajorUpdatePage', () => {
  let component: MajorUpdatePage;
  let fixture: ComponentFixture<MajorUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MajorUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
