import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DevelopsPage } from './develops.page';

describe('DevelopsPage', () => {
  let component: DevelopsPage;
  let fixture: ComponentFixture<DevelopsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DevelopsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
