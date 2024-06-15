import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() url!: string;
  title = 'Pisko-player';
  urlSafe: SafeResourceUrl | undefined;
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  ngOnChanges(): void {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
