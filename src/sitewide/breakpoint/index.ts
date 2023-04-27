import type { Config } from '$types';

import { main } from './main';

export const breakpoints = (config: Config) => {
  switch (config.site.currentBreakpoint) {
    case 'main':
      main(config);
      break;
    default:
      break;
  }

  // listeners
  const { body, navButton, navTrigger, navClose, scrollElements } = config.elements;

  navButton.onclick = () => {
    navTrigger.click();
  };

  navTrigger.onclick = () => {
    body.classList.toggle('overflow-hidden');
    const text = navButton.getAttribute('data-mouse-text') === 'Open' ? 'Close' : 'Open';
    navButton.setAttribute('data-mouse-text', text);
  };

  navClose.addEventListener('click', () => {
    navTrigger.click();
  });

  scrollElements.forEach((scrollElement) => {
    scrollElement.addEventListener('click', () => {
      const scrollTo = scrollElement.getAttribute('data-scroll-to'),
        scrollHeight = $(`#${scrollTo}`).offset();
      $('html, body').animate({ scrollTop: scrollHeight.top }, 1000);
    });
  });
};
