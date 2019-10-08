import { Component, ViewChild, ElementRef, OnInit, HostListener } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'asheerrizvi-angular';

  showScroll: boolean;
  showScrollHeight = 300;
  hideScrollHeight = 10;

  @ViewChild('navBurger', {static: false}) navBurger: ElementRef;
  @ViewChild('navMenu', {static: false}) navMenu: ElementRef;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) {
      this.showScroll = true;
    } else if (this.showScroll &&
        (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop)
        < this.hideScrollHeight) {
      this.showScroll = false;
    }
  }

  ngOnInit() {
    AOS.init();
  }

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }
}
