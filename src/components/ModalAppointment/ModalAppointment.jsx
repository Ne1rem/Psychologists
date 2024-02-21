import { useState } from 'react';
import icons from '../../img/icons.svg';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import TimePicker from 'react-time-picker';
import { AvatarAppointment, CloseButtonStyledAppoint, ModalBackDrop, ModalWindow, RegisterButton, RegisterForm, RegisterInput, SvgCloseAp } from "./ModalAppointment.styled";

const ModalAppointment = ({ psychologist, closeModal }) => {

    const [value, onChange] = useState('00:00');

    const [formData, setFormData] = useState({
      name: '',
      number: '',
      email: '',
      comment: ''
    });
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Form submitted:', formData);
      setFormData({
        name: '',
        number: '',
        email: '',
        comment: ''
      });
      closeModal();
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    return (
      <ModalBackDrop>
        <ModalWindow>
          <CloseButtonStyledAppoint type="button" onClick={() => closeModal(null)}>
            <SvgCloseAp>
              <use href={`${icons}#icon-exit`}></use>
            </SvgCloseAp>
          </CloseButtonStyledAppoint>
          <h1>Make an appointment with a psychologist</h1>
          <p>You are on the verge of changing your life for the better. Fill out the short form below to book your personal appointment with a professional psychologist. We guarantee confidentiality and respect for your privacy.</p>
          <div>
            <AvatarAppointment src={psychologist.avatar_url} alt="avatar psychologist" />
            <p>Your psychologist</p>
            <p>{psychologist.name}</p>
          </div>
          <RegisterForm onSubmit={handleSubmit}>
            <RegisterInput
              placeholder="Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <div style={{ display: 'flex' }}>
              <RegisterInput
                placeholder="+380"
                type="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
              />
              <TimePicker onChange={onChange} value={value} />
            </div>
            <RegisterInput
              placeholder="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <RegisterInput
              placeholder="Comment"
              type="text"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
            />
            <RegisterButton type="submit">
              Send
            </RegisterButton>
          </RegisterForm>
        </ModalWindow>
      </ModalBackDrop>
    );
  };
  
  export default ModalAppointment;
