import { Directive, ElementRef, Renderer2, inject, OnInit, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appHideOnScroll]',
  standalone: true,
})
export class HideOnScrollDirective implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);
  private readonly element = inject(ElementRef);
  private readonly renderer = inject(Renderer2);
  private lastScrollTop = 0;

  ngOnInit() {
    if (this.document.defaultView) {
      fromEvent(this.document.defaultView, 'scroll')
        .pipe(throttleTime(100), takeUntilDestroyed(this.destroyRef))
        .subscribe(() => this.handleScroll());
    }
  }

  private handleScroll() {
    const scrollY = this.document.defaultView?.scrollY;
    if (!scrollY) return;
    if (scrollY > this.lastScrollTop && scrollY > 80) {
      this.renderer.addClass(this.element.nativeElement, 'hidden');
    } else {
      this.renderer.removeClass(this.element.nativeElement, 'hidden');
    }
    this.lastScrollTop = Math.max(scrollY, 0);
  }
}
