import {
    DataAttribute,
    HideDataAttribute,
    ToggleDirection,
    StringConstant,
    IToggleFocus
} from './types';
import toggleHide from './toggle-hide';
import VamtigerSkewContainer from './element'

const { nothing } = StringConstant;

export default function({ element: currentElement, container }: IToggleFocus) {
    const siblings = Array
        .from(currentElement.parentElement && currentElement.parentElement.children || [])
        .filter(child => child !== currentElement) as VamtigerSkewContainer[];
    const { dataset } = currentElement;
    const focus = !dataset.hasOwnProperty(DataAttribute.focus);
    const focusDirection = focus && (dataset.hasOwnProperty(DataAttribute.right) && ToggleDirection.left || ToggleDirection.right);
    const hideDirection = focusDirection && (focusDirection === ToggleDirection.right && ToggleDirection.right || focusDirection === ToggleDirection.left && ToggleDirection.left) || undefined;

    siblings.forEach(element => toggleHide({ element, hideDirection }));

    if (focus) {
        dataset[DataAttribute.focus] = focusDirection || nothing;
        container.dataset[DataAttribute.focus] = dataset[DataAttribute.focus]
    } else {
        delete dataset[DataAttribute.focus];
        delete container.dataset[DataAttribute.focus];
    }
}