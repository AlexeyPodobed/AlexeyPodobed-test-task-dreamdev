import header from './components/header';

import { portfolioSlider } from './components/animations';

function commonScripts() {
	header.init();

	portfolioSlider();
}

export default () => {
	commonScripts();
};
