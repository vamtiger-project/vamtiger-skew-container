import VamtigerSkewContainer from './element';

export enum StringConstant {
    nothing = ''
}

export enum Selector {
    style = 'style',
    container = '[data-vamtiger-skew-container]',
    input = 'input',
    element = 'vamtiger-skew-container',
    slot= 'slot'
}

export enum ObservedAttributes {

}

export enum DataAttribute {
    focus = 'focus',
    hide = 'hide',
    right = 'right',
    left = 'left',
    verticalRightUp = 'verticalRightUp',
    center = 'center',
    template = 'template',
    templateSelector = 'templateSelector'
}

export enum HideDataAttribute {
    hideRight = 'hideRight',
    hideLeft = 'hideLeft',
}

export enum ToggleDirection {
    right = 'right',
    left = 'left'
}

export interface IGetTemplate {
    selector: Selector;
    attributes?: IAttributes;
    properties?: IProperties;
}

export interface IAttributes {
    id?: string;
    for?: string;
}

export interface IProperties {
    innerHTML?: string;
    name?: string;
}

export interface IToggleHide {
    element: VamtigerSkewContainer;
    hideDirection?: ToggleDirection;
}

export interface IToggleFocus {
    element: VamtigerSkewContainer;
    container: HTMLDivElement;
}

export interface ILoadTemplate {
    element: VamtigerSkewContainer;
}

export type AttributesKey = keyof IAttributes;

export type ObservedAttribute = keyof typeof ObservedAttributes;

export type GetTemplate<P extends IGetTemplate> =
    P['selector'] extends Selector.style ? HTMLStyleElement :
    P['selector'] extends Selector.container ? HTMLDivElement :
    P['selector'] extends Selector.slot ? HTMLSlotElement :
    null;
