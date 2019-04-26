import { SVG_NS } from '../settings';

export default class Paddle {
    constructor(boardHeight, width, height, x, y, up, down, color) {
        this.boardHeight = boardHeight;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speed = 10;
        this.score = 0;
        this.color = color;
        document.addEventListener('keydown', event => {
            switch (event.key) {
                case up:
                    this.up();
                    break;
                case down:
                    this.down();
                    break;
            }
        });

    } // End of Constructor
    up() {
        this.y = this.y - this.speed;
        this.y = Math.max (0, this.y - this.speed);
    }
    down() {
        this.y = this.y + this.speed;
        this.y = Math.min (this.boardHeight - this.height, this.y + this.speed);
    }

    render(svg) {
        let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttributeNS(null, 'fill', this.color);
        rect.setAttributeNS(null, 'width', this.width);
        rect.setAttributeNS(null, 'height', this.height);
        rect.setAttributeNS(null, 'x', this.x);
        rect.setAttributeNS(null, 'y', this.y);
        rect.setAttributeNS(null, 'rx', 6);

        svg.appendChild(rect);

    }


}