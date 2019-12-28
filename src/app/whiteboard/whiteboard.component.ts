import { Component, OnInit, ViewChild } from '@angular/core';
import { WhiteboardCanvasDirective } from '../whiteboard-canvas.directive';

@Component({
  selector: 'app-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.scss']
})
export class WhiteboardComponent implements OnInit {
  @ViewChild(WhiteboardCanvasDirective, { static: true })
  private whiteboardCanvas: WhiteboardCanvasDirective
  
  constructor() { }

  ngOnInit() {
  }

  public clearCanvas(): void {
    this.whiteboardCanvas.context.setTransform(1, 0, 0, 1, 0, 0)
    this.whiteboardCanvas.context.clearRect(0, 0, this.whiteboardCanvas.context.canvas.width, this.whiteboardCanvas.context.canvas.height)
  }

}
