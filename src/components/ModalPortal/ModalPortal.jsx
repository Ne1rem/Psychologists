import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import icons from '../../img/icons.svg';
import {
  CloseButtonStyled,
  ModalTitleWrapStyled,
  ModalWindowStyled,
  ModalWrapStyled,
  SvgClose,
} from './ModalPortal.styled';

const modalRoot = document.querySelector('#modal-root');

export const ModalPortal = ({ title, children, onClose }) => {
  useEffect(() => {
    const handleCloseESC = e => {
      if (e.code === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleCloseESC);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleCloseESC);
    };
  }, [onClose]);

  const handleClose = e => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <ModalWrapStyled onClick={handleClose}>
      <div name="scroll-container">
        <ModalWindowStyled>
          <CloseButtonStyled
            type="button"
            onClick={() => {
              onClose();
            }}
          >
            <SvgClose>
              <use href={`${icons}#icon-exit`}></use>
            </SvgClose>
          </CloseButtonStyled>
          <ModalTitleWrapStyled>{title}</ModalTitleWrapStyled>
          {children}
        </ModalWindowStyled>
      </div>
    </ModalWrapStyled>,
    modalRoot
  );
};
