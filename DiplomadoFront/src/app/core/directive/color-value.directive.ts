import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[valorColor]'
})
export class ValorColorDirective implements OnInit {
  @Input('valorColor') valor!: number;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.actualizarColor();
  }

  private actualizarColor() {
    if (this.valor > 0) {
      this.el.nativeElement.style.color = 'green';
    } else if (this.valor < 0) {
      this.el.nativeElement.style.color = 'red';
    }
  }
}
