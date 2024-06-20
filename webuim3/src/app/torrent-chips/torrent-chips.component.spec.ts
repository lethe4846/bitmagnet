import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorrentChipsComponent } from './torrent-chips.component';

describe('TorrentChipsComponent', () => {
  let component: TorrentChipsComponent;
  let fixture: ComponentFixture<TorrentChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TorrentChipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TorrentChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});