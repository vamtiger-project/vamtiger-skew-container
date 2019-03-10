import getElement from '../node_modules/vamtiger-browser-method/source/get-element';
import {
    ILoadTemplate,
    DataAttribute,
    Selector
} from './types';
import { name } from './element';

export default async function ({ element }: ILoadTemplate) {
    const { dataset } = element;
    const {
        [DataAttribute.template]: url,
        [DataAttribute.templateSelector]: selector
    } = dataset;
    const template = url && selector && await getElement({
        name: url,
        url,
        selector
    });

    if (template) {
        template.slot = name;

        element.appendChild(template);
    }
}