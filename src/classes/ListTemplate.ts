import { HasFormatter } from '../interfaces/HasFormatter.js';

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(heading: string, entry: HasFormatter, position: 'start' | 'end') {
    const li = document.createElement('li');

    const h4 = document.createElement('h4');
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement('p');
    p.innerText = entry.format();
    li.append(p);

    position === 'start'
      ? this.container.prepend(li)
      : this.container.append(li);
  }
}
