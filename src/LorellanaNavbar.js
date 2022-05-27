import { html, css, LitElement } from 'lit';

export class LorellanaNavbar extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
        width: 100%;
        //min-height: 60vh;
        padding-top:50px;
        color: var(--lorellana-navbar-text-color, #37B1BF);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }
      header {
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
      }
      header nav {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        width: 90%;
        height: 3rem;
        margin: 20px auto;
      }
      header nav ul {
        font-size: var(--size-links-pages);
        color: var(--color-primary);
        box-shadow: 10px 5px 5px var(--color-primary);
        display: flex;
        flex-flow: row-reverse;
        gap: 1rem;
        align-items: center;
        width: 320px;
        cursor: pointer;
        position: relative;
        list-style-type: none;
      }
      a {
        text-decoration: none;
      }
      a:hover {
        color: var(--color-secondary-links);
      }
      .burguer {
        cursor: pointer;
        display: none;
      }
      .burguer div {
        margin: 10px;
        padding: 5px 5px 1px 1px;
      }
      .burguer .bar {
        background-color: var(--color-primary);
        width: 40px;
        height: 3px;
        border-radius: 5px;
      }

      @media (max-width: 400px) {
        .burguer {
          display: block;
        }
        header nav ul {
          flex-flow: column wrap;
          position: absolute;
          padding: 0.2em 0.2em;
          background: var(--color-primary-light);
          transition: transform 0.3s ease-in-out;
          border-radius: 5em;
          border: 2px solid var(--color-secondary-links);
          box-shadow: none;
          transform: translateX(150%);
        }
        header nav ul li {
          font-size: 1.5rem;
          color: var(--color-primary);
        }
      }
      .open {
        transform: translateX(0%);
      }
    `;
  }

  static get properties() {
    return {
      link1: { type: String },
      link2: { type: String }
    };
  }
  constructor() {
    super();
    this.link1 = "Namasté";
    this.link2 = "Yoga session";
  }

  
  __toggle() {
    const menu = this.querySelector("header nav ul");
    menu.classList.toggle("open");
    }

  // createRenderRoot() {
  //   return this;
  // }

  render() {
    return html`
      <header>
        <nav>
          <div class="burguer" @click=${this.__toggle}>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
          <ul class="links">
            <li><a href="/poses">${this.link2}</a></li>
            <li><a href="/">${this.link1}</a></li>
          </ul>
        </nav>
      </header>
    `;
  }

}
