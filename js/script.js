const headerBtn = document.querySelector('.header__btn');
const loginModal = document.querySelector('.login-modal');
const loginModalClose = document.querySelector('.login-modal-close');

headerBtn.addEventListener('click', () => {
    loginModal.classList.toggle('open');
    document.body.classList.toggle('lock');
});

loginModalClose.addEventListener('click', () => {
    loginModal.classList.toggle('open');
    document.body.classList.toggle('lock');
});

const passwordRecoveryModal = document.querySelector(
    '.password-recovery-modal'
);
const passwordRecoveryModalOpen = document.querySelector(
    '.password-recovery-modal-open'
);
const passwordRecoveryModalClose = document.querySelector(
    '.password-recovery-modal-close'
);

passwordRecoveryModalOpen.addEventListener('click', () => {
    loginModal.classList.toggle('open');
    passwordRecoveryModal.classList.toggle('open');
});

passwordRecoveryModalClose.addEventListener('click', () => {
    passwordRecoveryModal.classList.toggle('open');
    document.body.classList.toggle('lock');
});
