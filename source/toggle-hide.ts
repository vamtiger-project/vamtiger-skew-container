import {
    IToggleHide,
    ToggleDirection,
    DataAttribute,
    StringConstant,
    Selector
} from './types';

const { focus, hide } = DataAttribute;
const { nothing } = StringConstant

export default function ({ element, hideDirection }: IToggleHide) {
    const { dataset } = element;
    const { shadowRoot } = element;
    const container = (shadowRoot as ShadowRoot).querySelector(Selector.container) as HTMLDivElement;

    delete dataset[focus];
    delete container.dataset[focus];

    if (dataset.hasOwnProperty(hide)) {
        delete dataset[hide];
        delete container.dataset[hide];
    } else {
        dataset[hide] = dataset.hasOwnProperty(DataAttribute.left) &&  ToggleDirection.left
            || dataset.hasOwnProperty(DataAttribute.right) &&  ToggleDirection.right
            ||hideDirection
            || nothing;
        container.dataset[hide] = dataset[hide];
    }
}