export const template = /*html*/ `
  <h1>{{ foo }}</h1>

  <ul>
    <li *ngFor="let link of links">
      <a [href]="link.url" target="_blank">
        {{ link.title }}
      </a>
    </li>
  </ul>
`