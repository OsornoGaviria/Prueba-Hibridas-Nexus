import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevoProductoTerceroPage } from './nuevo-producto-tercero.page';

describe('NuevoProductoTerceroPage', () => {
  let component: NuevoProductoTerceroPage;
  let fixture: ComponentFixture<NuevoProductoTerceroPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoProductoTerceroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoProductoTerceroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
