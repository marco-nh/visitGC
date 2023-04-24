import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadScreenComponent } from './load-screen.component';
import {Injectable} from "@angular/core";
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { SpinnerOverlayComponent } from '@app/core/spinner-overlay/spinner-overlay.component';

describe('LoadScreenComponent', () => {
  let component: LoadScreenComponent;
  let fixture: ComponentFixture<LoadScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


//loading screen
@Injectable({
  providedIn: 'root'
})
export class SpinnerOverlayService {
  private overlayRef: OverlayRef = null;

  constructor(private overlay: Overlay) {}

  public show(message = '') {
    // Returns an OverlayRef (which is a PortalHost)

    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create();
    }

    // Create ComponentPortal that can be attached to a PortalHost
    const spinnerOverlayPortal = new ComponentPortal(SpinnerOverlayComponent);
    const component = this.overlayRef.attach(spinnerOverlayPortal); // Attach ComponentPortal to PortalHost
  }

  public hide() {
    if (!!this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}
