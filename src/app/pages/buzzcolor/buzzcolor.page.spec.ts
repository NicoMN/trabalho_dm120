import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuzzcolorPage } from './buzzcolor.page';

describe('BuzzcolorPage', () => {
  let component: BuzzcolorPage;
  let fixture: ComponentFixture<BuzzcolorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuzzcolorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuzzcolorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
