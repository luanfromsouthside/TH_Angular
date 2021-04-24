import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective implements OnInit {

  constructor(private rel: ElementRef, private render2: Renderer2) { }
  ngOnInit(){
  }
  @HostListener('mouseenter') zoomImg(){
    this.render2.setStyle(this.rel.nativeElement,'transform','scale(1.1)');
  }

  @HostListener('mouseleave') defaultImg(){
    this.render2.setStyle(this.rel.nativeElement,'transform','scale(1)')
  }
}
