import { html } from 'lit';
import '../lorellana-navbar.js';

export default {
  title: 'LorellanaNavbar',
  component: 'lorellana-navbar',
  argTypes: {
    link1: { control: 'text' },
    link2: { control: 'text' },
    textColor: { control: 'color' },
  },
};

function Template({ link1 = 'Namasté', link2 = "Yoga poses", textColor, slot }) {
  return html`
    <lorellana-navbar
      style="--lorellana-navbar-text-color: ${textColor || 'black'}"
      .link1=${link1}
      .link2=${link2}
    >
      ${slot}
    </lorellana-navbar>
  `;
}

export const Regular = Template.bind({});

export const CustomLink1 = Template.bind({});
CustomLink1.args = {
  link1: 'Namasté',
};

export const CustomLink2 = Template.bind({});
CustomLink2.args = {
  link2: "Yoga poses",
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<p>Slotted content</p>`,
};
SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
