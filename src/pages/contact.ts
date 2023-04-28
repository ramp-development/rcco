import { dataLayer } from 'src/dataLayer/dataLayer';

import type { Config } from '$types';

export const contact = (config: Config) => {
  // declare global variables
  // inputs
  const pillTextSelector = '.pill__text';
  const allInputs = document.querySelectorAll('input, textarea'),
    textInputs = document.querySelectorAll('.form__input'),
    pills = document.querySelectorAll('.pill'),
    pillInputs = document.querySelectorAll('.pill input');

  // form buttons
  const contactForm = document.querySelector('#contact-form'),
    formSubmit = contactForm?.querySelector('input[type="submit"]'),
    formSuccess = contactForm?.nextElementSibling;

  // validation
  let nameValid = false,
    companyValid = false,
    emailValid = false;

  init();
  listeners();

  function init() {
    pills.forEach((pill) => {
      const pillTextFields = pill.querySelectorAll(pillTextSelector),
        pillText = pillTextFields[0].textContent;
      pillTextFields[1].textContent = pillText;
      pill.setAttribute('data-mouse-text', pillText);
    });
  }

  function listeners() {
    // inputs in focus
    allInputs.forEach((input) => {
      input.addEventListener('focus', () => {
        inputScroll(input);
      });
    });

    // inputs out of focus
    textInputs.forEach((textInput) => {
      textInput.addEventListener('focusout', () => {
        formInputOut(textInput);
      });
    });

    // radios when changed
    pillInputs.forEach((pillInput) => {
      pillInput.addEventListener('change', () => {
        pillInput.closest('.pill').classList.toggle('is--selected');
      });
    });

    // disabledButton.addEventListener('click', () => {
    //   let errorIndex;
    //   textInputs.forEach((textInput, index) => {
    //     const ISVALID = validateInput(textInput);
    //     if (!ISVALID && errorIndex === undefined) {
    //       errorIndex = index;
    //     }
    //   });

    //   inputScroll(textInputs[errorIndex]);
    //   textInputs[errorIndex].focus();
    // });

    // submitButton.addEventListener('click', () => {
    //   formSubmit.click();
    // });

    // const contactName = document.querySelector('input[name="contact-name"]');
    // contactForm.addEventListener('submit', (event) => {
    //   // event.preventDefault();
    //   sentButton.parentNode.classList.remove('hide');
    //   submitButton.parentNode.classList.add('hide');

    //   if (contactName.value) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     return false;
    //   }
    // });

    const mutationConfig = { attributes: true };
    const callback = (mutationList, observer) => {
      for (const mutation of mutationList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          if (mutation.target.style.display === 'none') return;
          dataLayer({ event: 'form_submit' });
        }
      }
    };

    const observer = new MutationObserver(callback);
    observer.observe(formSuccess, mutationConfig);

    function validateInput(input) {
      const inputError = input.parentNode.querySelector('.form__input-error');
      const ISVALID = input.checkValidity();
      if (ISVALID) {
        inputError.classList.add('hide');
        return true;
      }
      inputError.classList.remove('hide');
      return false;
    }

    function inputScroll(input) {
      if (input.type === 'submit') return;
      if (input.classList.contains('form__input')) {
        const border = input.parentNode.querySelector('.input__border');
        border.style.transitionDuration = '1000ms';
        border.style.right = '0%';
      }

      if (config.site.hasMouse) {
        const scrollTo = input
            .closest('.form__input-wrapper')
            .querySelector('.form__input-scroll-to'),
          scrollHeight = $(scrollTo).offset();
        $('html, body').animate({ scrollTop: scrollHeight.top }, 500);
      }
    }

    function formInputOut(textInput) {
      const border = textInput.parentNode.querySelector('.input__border');
      border.style.transitionDuration = '500ms';
      border.style.right = '100%';

      const fieldName = textInput.getAttribute('name');
      const ISVALID = validateInput(textInput);

      switch (fieldName) {
        case 'name':
          nameValid = ISVALID;
          break;
        case 'company-name':
          companyValid = ISVALID;
          break;
        case 'email':
          emailValid = ISVALID;
          break;
        default:
          break;
      }

      // if (nameValid && companyValid && emailValid) {
      //   submitWrapper.classList.remove('hide');
      //   disabledWrapper.classList.add('hide');
      // } else {
      //   submitWrapper.classList.add('hide');
      //   disabledWrapper.classList.remove('hide');
      // }
    }
  }
};
