import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DevelopsInsertPage } from './develops-insert.page';

describe('DevelopsInsertPage', () => {
  let component: DevelopsInsertPage;
  let fixture: ComponentFixture<DevelopsInsertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopsInsertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DevelopsInsertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
