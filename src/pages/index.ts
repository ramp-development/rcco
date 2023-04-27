import type { Config } from '$types';

import { about } from './about';
import { brandResources } from './brandResources';
import { careers } from './careers';
import { clientAssets } from './clientAssets';
import { contact } from './contact';
import { home } from './home';
import { landingPageTemplate } from './landingPageTemplate';
import { legalTemplate } from './legalTemplate';
import { news } from './news';
import { newsTemplate } from './newsTemplate';
import { serviceTemplate } from './serviceTemplate';
import { work } from './work';
import { workTemplate } from './workTemplate';

export const pages = (config: Config) => {
  const { pathname } = window.location;

  switch (pathname) {
    case '/':
      home(config);
      break;
    case '/work':
      work(config);
      break;
    case '/about-us':
      about(config);
      break;
    case '/careers':
      careers(config);
      break;
    case '/news':
      news(config);
      break;
    case '/contact':
      contact(config);
      break;
    case '/brand-resources':
      brandResources(config);
      break;
    default:
      if (pathname.includes('/work/')) {
        workTemplate(config);
      } else if (pathname === '/privacy-policy' || pathname === '/terms-conditions') {
        legalTemplate(config);
      } else if (pathname.includes('/client-assets/')) {
        clientAssets(config);
      } else if (pathname.includes('/lp/')) {
        landingPageTemplate(config);
      } else if (pathname.includes('/services/')) {
        serviceTemplate(config);
      } else if (pathname.includes('/news/')) {
        newsTemplate(config);
      }
  }
};
