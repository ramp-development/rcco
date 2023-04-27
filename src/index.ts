import { getCurrentBreakpoint } from '@finsweet/ts-utils';

import type { Config } from './index.d';
import { pages } from './pages';
import { sitewide } from './sitewide';

window.Webflow ||= [];
window.Webflow.push(() => {
  const config: Config = {
    site: {
      currentBreakpoint: getCurrentBreakpoint(),
      hasMouse: window.matchMedia('(pointer: fine)').matches,
    },
  };

  // sitewide(config);
  pages(config);
});
