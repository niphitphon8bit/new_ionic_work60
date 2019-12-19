import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodInsertPage } from './food-insert.page';

describe('FoodInsertPage', () => {
  let component: FoodInsertPage;
  let fixture: ComponentFixture<FoodInsertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodInsertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodInsertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
