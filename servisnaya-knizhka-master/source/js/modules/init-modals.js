import {setupModal} from '../utils/modal';

const modals = document.querySelectorAll('.modal');
const modalPivot = document.querySelector('.modal--pivot-settings');
const modalPivotBtns = document.querySelectorAll('[data-modal="pivot-settings"]');

// аргументы setupModal(modal, closeCallback, modalBtns, openCallback, noPrevDefault, preventScrollLock)
// возможна инициализация только с первыми аргументом,
// если вам нужно открывать модалку в другом месте под какими-нибудь условиями
const initModals = () => {
  // фикс для редких случаев, когда модалка появляется при загрузке страницы
  window.addEventListener('load', () => {
    if (modals.length) {
      modals.forEach((el) => {
        setTimeout(() => {
          el.classList.remove('modal--preload');
        }, 100);
      });
    }
  });

  if (modalPivot && modalPivotBtns.length) {
    setupModal(modalPivot, false, modalPivotBtns, false, false);
  }
};

export {initModals};
