import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../lorellana-navbar.js';

describe('LorellanaNavbar', () => {
  it('has a default link1 "Namasté" and link2 "Yoga poses', async () => {
    const el = await fixture(html`<lorellana-navbar></lorellana-navbar>`);

    expect(el.link1).to.equal('Namasté');
    expect(el.link2).to.equal("Yoga poses");
  });

  

  it('can override the link1 via attribute', async () => {
    const el = await fixture(html`<lorellana-navbar link1="attribute link1"></lorellana-navbar>`);

    expect(el.link1).to.equal('attribute link1');
  });

  it('can override the link2 via attribute', async () => {
    const el = await fixture(html`<lorellana-navbar link2="attribute link2"></lorellana-navbar>`);

    expect(el.link2).to.equal('attribute link2');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`<lorellana-navbar></lorellana-navbar>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
