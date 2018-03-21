import { TestBed, async } from '@angular/core/testing';
import { ScclMainComponent } from "./scclMain.component";
describe('ScclMainComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          ScclMainComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(ScclMainComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'sccl'`, async(() => {
    const fixture = TestBed.createComponent(ScclMainComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('sccl');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(ScclMainComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to sccl!');
  }));
});
