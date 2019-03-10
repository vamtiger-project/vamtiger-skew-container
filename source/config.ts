import {
    ObservedAttributes,
    ObservedAttribute
} from './types'

export const shadowRoot = {
    mode: 'open'
} as ShadowRootInit;

export const observedAttributes = Object.keys(ObservedAttributes) as ObservedAttribute[];