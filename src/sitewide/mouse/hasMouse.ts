import type { Config } from '$types';

export const hasMouse = (config: Config) => {
  const { body, mouse, mouseText, mouseCursor, fadingElements, sliderDots, mouseInteractions } =
    config.elements;
  // prep
  fadingElements.forEach((element: HTMLElement) => {
    element.classList.add('has-mouse');
  });

  sliderDots.forEach((sliderDot: HTMLElement) => {
    sliderDot.setAttribute('data-mouse-class', 'link');
  });

  // listeners

  body.addEventListener('mouseenter', () => {
    mouse.style.opacity = '1';
  });

  body.addEventListener('mouseleave', () => {
    mouse.style.opacity = '0';
  });

  mouseInteractions.forEach((mouseInteraction: HTMLElement) => {
    mouseInteraction.addEventListener('mouseenter', () => {
      interactiveElements(mouseInteraction, 'enter');
    });
    mouseInteraction.addEventListener('mouseleave', () => {
      interactiveElements(mouseInteraction, 'leave');
    });
  });

  function interactiveElements(element: HTMLElement, event: 'enter' | 'leave') {
    const mouseClass = element.getAttribute('data-mouse-class'),
      cursorClass = element.getAttribute('data-mouse-cursor');

    let text;

    switch (event) {
      case 'enter':
        text = element.getAttribute('data-mouse-text');
        break;
      default:
        text = '';
        break;
    }

    if (event === 'enter') {
      mouse.classList.add(`is--${mouseClass}`);
    } else if (event === 'leave') {
      mouse.classList.remove(`is--${mouseClass}`);
    }

    mouseText.textContent = text;

    if (cursorClass) {
      mouseCursor.classList.toggle(`is--${cursorClass}`);
    }
  }
};
