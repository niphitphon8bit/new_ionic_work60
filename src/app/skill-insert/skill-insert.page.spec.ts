import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SkillInsertPage } from './skill-insert.page';

describe('SkillInsertPage', () => {
  let component: SkillInsertPage;
  let fixture: ComponentFixture<SkillInsertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillInsertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SkillInsertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
