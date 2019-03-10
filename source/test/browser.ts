import { setup, run } from 'mocha';
import loadScript from './load-script';

setup('bdd');

loadScript();

run();