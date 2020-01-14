import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BankUpdatePage } from './bank-update.page';

describe('BankUpdatePage', () => {
  let component: BankUpdatePage;
  let fixture: ComponentFixture<BankUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BankUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
