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

const newOpportunitiesBtn = document.querySelectorAll(
    '.new-opportunities-flex__btn'
);

newOpportunitiesBtn.forEach((item) => {
    item.addEventListener('click', function () {
        const elem = this.previousElementSibling;
        if (elem.style.display === 'block') {
            elem.style.display = '-webkit-box';
            this.innerText = 'Развернуть';
            this.classList.toggle('active');
        } else {
            elem.style.display = 'block';
            this.innerText = 'Свернуть';
            this.classList.toggle('active');
        }
    });
});
