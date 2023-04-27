import type { Config } from '$types';

import { hasMouse } from './hasMouse';
import { noMouse } from './noMouse';

export const mouse = (config: Config) => {
  switch (config.site.hasMouse) {
    case true:
      hasMouse(config);
      break;
    case false:
      noMouse(config);
      break;
  }
};
