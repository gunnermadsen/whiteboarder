import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appWhiteboardCanvas]'
})
export class WhiteboardCanvasDirective {
  private isMousePressed = false
  private lastX: number
  private lastY: number
  public context: CanvasRenderingContext2D = null

  private canvas: HTMLCanvasElement

  constructor(private element: ElementRef<HTMLCanvasElement>, private renderer: Renderer2) {
    this.canvas = this.element.nativeElement

    this.context = this.canvas.getContext('2d')

    // this.context.fillRect(0, 0, window.outerWidth, window.outerHeight)
    this.canvas.width = document.body.clientWidth
    this.canvas.height = document.body.clientHeight

  }

  @HostListener('mousedown', ['$event'])
  public reactToMousedownEvent(event: MouseEvent): void {
    this.isMousePressed = true

    const mousePosition = this.getMousePosition(event)

    this.handleEvent(mousePosition.x, mousePosition.y, false)
  }

  @HostListener('mousemove', ['$event'])
  public reactToMouseMoveEvent(event: MouseEvent): void {
    const rectangle = this.canvas.getBoundingClientRect()

    if (this.isMousePressed) {
      const mousePosition = this.getMousePosition(event)
      console.log(mousePosition)
  
      this.handleEvent(mousePosition.x, mousePosition.y, true)
    }
  }

  @HostListener('mouseup', ['$event'])
  public reactToMouseupEvent(event: MouseEvent): void {
    this.isMousePressed = false
  }

  private handleEvent(x: number, y: number, isDown: boolean): void {

    if (isDown) {
      this.context.beginPath()
      this.context.strokeStyle = 'green'
      this.context.lineWidth = 1
      this.context.lineJoin = 'round'
      this.context.moveTo(this.lastX, this.lastY)
      this.context.lineTo(x, y)
      this.context.closePath()
      this.context.stroke()
    }

    this.lastX = x
    this.lastY = y
  }

  private getMousePosition(event: MouseEvent): { x: number, y: number } {

    const rectangle = this.canvas.getBoundingClientRect();

    return {
      x: event.clientX - rectangle.left,
      y: event.clientY - rectangle.top
    }

  }

}
