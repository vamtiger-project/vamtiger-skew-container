import loadScript from '../node_modules/vamtiger-browser-method/source/load-script';
import {
    Selector,
    ObservedAttribute,
    DataAttribute,
    StringConstant
} from './types';
import {
    shadowRoot as shadowRootConfig,
    observedAttributes
} from './config';
import css from './css/document-index';
import getTemplate from './get-template';
import toggleFocus from './toggle-focus';
import loadTemplate from './load-template';

const { nothing } = StringConstant;

let count = 0;

export const name = 'vamtiger-skew-container';

loadScript({ name, css })
    .catch(console.error);

export default class VamtigerSkewContainer extends HTMLElement {
    constructor() {
        super();

        const { dataset } = this;
        const shadowRoot = this.attachShadow(shadowRootConfig);
        const stylesheet = getTemplate({
            selector: Selector.style
        });
        const container = getTemplate({
            selector: Selector.container
        });
        const slot = getTemplate({
            selector: Selector.slot,
            properties: {
                name
            }
        });
        const elements = [
            stylesheet,
            container
        ];

        if (dataset.hasOwnProperty(DataAttribute.right) && container) {
            container.dataset.right = nothing;
        } else if (dataset.hasOwnProperty(DataAttribute.left) && container) {
            container.dataset.left = nothing;
        } else if (dataset.hasOwnProperty(DataAttribute.center) && container) {
            container.dataset.center = nothing;
        }

        if (container) {
            slot && container.appendChild(slot);

            container.addEventListener('click', () => toggleFocus({ element: this, container }));
        }

        elements.forEach(element => element && shadowRoot.appendChild(element));
    }

    static get observedAttributes() {
        return observedAttributes;
    }

    async connectedCallback() {
        await loadTemplate({
            element: this
        });
    }

    attributeChangedCallback(name: ObservedAttribute, oldValue: string, newValue: string) {

    }
}