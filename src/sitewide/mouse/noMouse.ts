import type { Config } from '$types';

export const noMouse = (config: Config) => {
  const { mouseWrapper } = config.elements;
  mouseWrapper.remove();
};
