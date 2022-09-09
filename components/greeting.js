class Greeting extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const cointainer = document.createElement('p');
    cointainer.textContent = "Hello World";
    this.shadowRoot.appendChild(cointainer);
  }
}

window.customElements.define('greeting-test', Greeting);
