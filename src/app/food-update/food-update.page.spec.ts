import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodUpdatePage } from './food-update.page';

describe('FoodUpdatePage', () => {
  let component: FoodUpdatePage;
  let fixture: ComponentFixture<FoodUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
