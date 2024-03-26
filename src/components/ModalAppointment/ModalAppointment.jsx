import { useState } from 'react';
import  { ThemeProvider } from 'styled-components';
import {
  AvatarAppointment,
  InputTime,
  MakeAppointmentDivAvatar,
  MakeAppointmentDivAvatarYourPsy,
  MakeAppointmentDivAvatarYourPsyP1,
  MakeAppointmentDivAvatarYourPsyP2,
  MakeAppointmentDivNumberTime,
  MakeAppointmentH,
  MakeAppointmentP,
  RegisterButton,
  RegisterForm,
  RegisterInput,
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
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    comment: '',
    time: '00:00',
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.number.trim()) {
      errors.number = 'Phone number is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (validateForm()) {
      const updatedAppointment = [...makeAnAppointment, formData];
      setMakeAnAppointment(updatedAppointment);
      localStorage.setItem('appointment', JSON.stringify(updatedAppointment));
      closeModal();
    }
  };

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });

    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: '',
      });
    }
  };

  const handleTimeChange = time => {
    handleChange('time', time);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <MakeAppointmentH>Make an appointment with a psychologist</MakeAppointmentH>
        <MakeAppointmentP>
          You are on the verge of changing your life for the better. Fill out the short form below to book your personal appointment with a professional psychologist. We guarantee confidentiality and respect for your privacy.
        </MakeAppointmentP>
        <MakeAppointmentDivAvatar>
          <AvatarAppointment src={psychologist.avatar_url} alt="avatar psychologist" />
          <MakeAppointmentDivAvatarYourPsy>
            <MakeAppointmentDivAvatarYourPsyP1>Your psychologist</MakeAppointmentDivAvatarYourPsyP1>
            <MakeAppointmentDivAvatarYourPsyP2>{psychologist.name}</MakeAppointmentDivAvatarYourPsyP2>
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
          {formErrors.name && <span style={{ color: 'red' }}>{formErrors.name}</span>}
          <MakeAppointmentDivNumberTime>
            <RegisterInput
              placeholder="+380"
              type="number"
              name="number"
              value={formData.number}
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
            {formErrors.number && <span style={{ color: 'red' }}>{formErrors.number}</span>}
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
          {formErrors.email && <span style={{ color: 'red' }}>{formErrors.email}</span>}
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
      </ThemeProvider>
    </div>
  );
};


export default ModalAppointment;
