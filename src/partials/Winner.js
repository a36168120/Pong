import { SVG_NS } from '../settings';

export default class Winner {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    render(svg, Winner) {
        let winner = document.createElementNS(SVG_NS, 'text');
        winner.setAttributeNS(null, 'x', this.x);
        winner.setAttributeNS(null, 'y', this.y);
        winner.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype')
        winner.setAttributeNS(null, 'font-size', this.size);
        winner.setAttributeNS(null, 'fill', 'skyblue');
        winner.innerHTML = Winner
        svg.appendChild(winner);
    }
}