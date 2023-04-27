import type { Config } from '$types';

export const home = (config: Config) => {
  // call init function when the page is ready
  if (document.readyState !== 'loading') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }

  // declare global variables
  const workItems = document.querySelectorAll('.work-list__item');

  // initial function
  function init() {
    console.log('home');

    // run page prep
    prep();

    // add mouse listeners if necessary
    listeners();
    if (SITEWIDE.HASMOUSE) hasMouseListeners();
    if (!SITEWIDE.HASMOUSE) noMouseListeners();
  }

  function prep() {
    workTags();
    function workTags() {
      // get a reference to the tag wrappers and loop through them
      const workTagWrappers = document.querySelectorAll('.work-overview__tags h4');
      workTagWrappers.forEach((workTagWrapper) => {
        // get the name of each tag
        const workTags = workTagWrapper.textContent.split(' / ').sort();
        // create an element and add the needed class
        const tagsWrapper = document.createElement('div');
        tagsWrapper.classList.add('work-overview__tags');
        // loop through each tag
        workTags.forEach((workTagText, index) => {
          // create an element and format it as required
          const workTagWrap = document.createElement('div');
          workTagWrap.classList.add('work-overview__tag');
          const workTag = document.createElement('h4');
          workTag.classList.add('text-size-18', 'text-weight-normal');
          workTag.setAttribute('fs-cmsfilter-field', 'tag');
          workTag.textContent = workTagText;
          workTagWrap.appendChild(workTag);
          // if it is not the final tag, add a slash
          if (index !== workTags.length - 1) {
            console.log('adding');
            const tagSeparator = document.createElement('div');
            tagSeparator.classList.add('text-size-18');
            tagSeparator.textContent = ' / ';
            workTagWrap.appendChild(tagSeparator);
          }
          // append the tag to the tag wrapper
          tagsWrapper.appendChild(workTagWrap);
        });
        // replace the old tags with the new
        workTagWrapper.closest('.work-overview__tags').replaceWith(tagsWrapper);
      });
    }
  }

  function listeners() {
    loadWorkPage();
    function loadWorkPage() {
      const workItems = document.querySelectorAll('.work-overview__item');
      workItems.forEach((workItem) => {
        const itemSlug = workItem.querySelector('[data-slug]').getAttribute('data-slug');
        workItem.querySelector('.work-overview__link').href = itemSlug;
        /*workItem.addEventListener("click", () => {
					window.location.href = itemSlug;
				});*/
      });
    }
  }

  function hasMouseListeners() {
    workItems.forEach((workItem) => {
      workItem.addEventListener('mouseenter', (event) => {
        workItemHover(workItem);
      });
      workItem.addEventListener('mouseleave', (event) => {
        workItemHover(workItem);
      });
    });

    function workItemHover(workItem) {
      const workItemVideos = workItem.querySelectorAll('.background-video__wrapper');
      workItemVideos.forEach((workItemVideo) => {
        workItemVideo.classList.toggle('is--hovered');
        workItem.classList.toggle('z-2');
      });
    }
  }

  function noMouseListeners() {
    document.querySelectorAll('.work-overview__item').forEach((trigger) => {
      new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
            } else {
              entry.target.classList.remove('in-view');
            }
          });
        },
        {
          threshold: 0.5,
        }
      ).observe(trigger);
    });
  }
};
