import { useEffect, useState } from 'react';
import icons from '../../img/icons.svg';
import  { ThemeProvider } from 'styled-components';
import {
  AvatarAppointment,
  CloseButtonStyledAppoint,
  InputTime,
  MakeAppointmentDivAvatar,
  MakeAppointmentDivAvatarYourPsy,
  MakeAppointmentDivAvatarYourPsyP1,
  MakeAppointmentDivAvatarYourPsyP2,
  MakeAppointmentDivNumberTime,
  MakeAppointmentH,
  MakeAppointmentP,
  ModalBackDrop,
  ModalWindow,
  RegisterButton,
  RegisterForm,
  RegisterInput,
  SvgCloseAp,
} from './ModalAppointment.styled';
import './ModalOpen.css';

const theme = {
  colors: {
    borderColor: 'rgba(25, 26, 21, 0.1)',
  },
};

const ModalAppointment = ({
  psychologist,
  closeModal,
  setMakeAnAppointment,
  makeAnAppointment,
}) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('modal-open');
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('modal-open');
    };
  }, [closeModal]);
  
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    comment: '',
    time: '00:00',
  });

  const handleSubmit = event => {
    event.preventDefault();
    setFormData({
      name: '',
      number: '',
      email: '',
      comment: '',
      time: '',
    });
    const updatedAppointment = [...makeAnAppointment, formData];
    setMakeAnAppointment(updatedAppointment);
    localStorage.setItem('appointment', JSON.stringify(updatedAppointment));
    console.log(makeAnAppointment);
    closeModal();
  };

  const closeModalBack = event => {
    event.stopPropagation();
    closeModal();
  };

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTimeChange = time => {
    handleChange('time', time);
  };

  const handleModalClick = event => {
    event.stopPropagation();
  };

  return (
    <ThemeProvider theme={theme}>
      <ModalBackDrop onMouseDown={event => closeModalBack(event)}>
        <ModalWindow onMouseDown={handleModalClick}>
          <CloseButtonStyledAppoint
            type="button"
            onClick={() => closeModal(null)}
          >
            <SvgCloseAp>
              <use href={`${icons}#icon-exit`}></use>
            </SvgCloseAp>
          </CloseButtonStyledAppoint>
          <MakeAppointmentH>
            Make an appointment with a psychologist
          </MakeAppointmentH>
          <MakeAppointmentP>
            You are on the verge of changing your life for the better. Fill out
            the short form below to book your personal appointment with a
            professional psychologist. We guarantee confidentiality and respect
            for your privacy.
          </MakeAppointmentP>
          <MakeAppointmentDivAvatar>
            <AvatarAppointment
              src={psychologist.avatar_url}
              alt="avatar psychologist"
            />
            <MakeAppointmentDivAvatarYourPsy>
              <MakeAppointmentDivAvatarYourPsyP1>
                Your psychologist
              </MakeAppointmentDivAvatarYourPsyP1>
              <MakeAppointmentDivAvatarYourPsyP2>
                {psychologist.name}
              </MakeAppointmentDivAvatarYourPsyP2>
            </MakeAppointmentDivAvatarYourPsy>
          </MakeAppointmentDivAvatar>
          <RegisterForm onSubmit={handleSubmit}>
            <RegisterInput
              placeholder="Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
            <MakeAppointmentDivNumberTime>
              <RegisterInput
                placeholder="+380"
                type="number"
                name="number"
                value={formData.number}
                onChange={e => handleChange(e.target.name, e.target.value)}
              />
              <InputTime
                name="time"
                type="time"
                onChange={e => handleTimeChange(e.target.value)}
                value={formData.time}
              />
            </MakeAppointmentDivNumberTime>
            <RegisterInput
              placeholder="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
            <RegisterInput
              placeholder="Comment"
              type="text"
              name="comment"
              value={formData.comment}
              onChange={e => handleChange(e.target.name, e.target.value)}
              style={{ height: `116px` }}
            />
            <RegisterButton type="submit">Send</RegisterButton>
          </RegisterForm>
        </ModalWindow>
      </ModalBackDrop>
    </ThemeProvider>
  );
};

export default ModalAppointment;
