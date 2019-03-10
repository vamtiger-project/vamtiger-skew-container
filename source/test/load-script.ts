import loadScript from '../../node_modules/vamtiger-browser-method/source/load-script';
import { expect } from 'chai';

export default () => describe('vamtiger-skew-container', function () {
    before(async function () {
        await loadScript({
            src: 'vamtiger-skew-container.js'
        });
    });

    it('load script', async function() {
        const script = document.head.querySelector('[src="vamtiger-skew-container.js"]');

        expect(script instanceof HTMLScriptElement).to.be.true;
    });
});