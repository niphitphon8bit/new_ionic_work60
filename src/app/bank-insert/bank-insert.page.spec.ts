import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BankInsertPage } from './bank-insert.page';

describe('BankInsertPage', () => {
  let component: BankInsertPage;
  let fixture: ComponentFixture<BankInsertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankInsertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BankInsertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
