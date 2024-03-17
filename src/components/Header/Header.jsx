import React, { useState } from 'react';

import { Container } from '../Container.styled';
import Navigation from '../Navigation/Navigation';
import {
  ButtonLog,
  ButtonReg,
  HeaderContainer,
  HeaderWrap,
  Logo,
  LogoDotSpan,
  LogoSpan,
  UserMenu,
} from './Header.styled';
import { ModalPortal } from '../ModalPortal/ModalPortal';
import PopUpRegistration from '../PopUpRegistration/PopUpRegistration';
import PopUpLogIn from '../PopUpLogIn/PopUpLogin';
import { useAuth } from '../../helpers/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../redux/auth/userSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setIsTitle] = useState('Registration');
  const { isAuth } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  const onClickBtn = title => {
    setIsTitle(title);
    toggleModal();
  };
  
  const logOutRemoveUser = () => {
    dispatch(removeUser())
    navigate('/')
  }

  return (
    <HeaderWrap>
      <Container>
        <HeaderContainer>
          <Logo to={'/'}>
            <LogoSpan>psychologists</LogoSpan>
            <LogoDotSpan>.</LogoDotSpan>services
          </Logo>
          <Navigation />
          {isAuth ? (
            <UserMenu>
              <ButtonLog type="button" onClick={() => onClickBtn('Log In')}>
                Log In
              </ButtonLog>
              <ButtonReg
                type="button"
                onClick={() => onClickBtn('Registration')}
              >
                Registration
              </ButtonReg>
            </UserMenu>
          ) : (
            <ButtonLog type="button" onClick={() => logOutRemoveUser()}>
              Log Out
            </ButtonLog>
          )}

          {isOpen && (
            <ModalPortal title={title} onClose={toggleModal}>
              {title === 'Log In' ? (
                <PopUpLogIn onClose={toggleModal} />
              ) : (
                <PopUpRegistration onClose={toggleModal} />
              )}
            </ModalPortal>
          )}
        </HeaderContainer>
      </Container>
    </HeaderWrap>
  );
};

export default Header;
