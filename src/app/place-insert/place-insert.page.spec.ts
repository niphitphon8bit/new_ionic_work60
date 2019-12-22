import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlaceInsertPage } from './place-insert.page';

describe('PlaceInsertPage', () => {
  let component: PlaceInsertPage;
  let fixture: ComponentFixture<PlaceInsertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceInsertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceInsertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
