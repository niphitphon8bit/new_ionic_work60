import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodTypePage } from './food-type.page';

describe('FoodTypePage', () => {
  let component: FoodTypePage;
  let fixture: ComponentFixture<FoodTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
