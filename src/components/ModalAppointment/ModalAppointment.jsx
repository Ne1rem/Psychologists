import { useEffect, useState } from 'react';
import icons from '../../img/icons.svg';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import TimePicker from 'react-time-picker';
import { AvatarAppointment, CloseButtonStyledAppoint, MakeAppointmentDivAvatar, MakeAppointmentDivAvatarYourPsy, MakeAppointmentDivAvatarYourPsyP1, MakeAppointmentDivAvatarYourPsyP2, MakeAppointmentDivNumberTime, MakeAppointmentH, MakeAppointmentP, ModalBackDrop, ModalWindow, RegisterButton, RegisterForm, RegisterInput, SvgCloseAp } from "./ModalAppointment.styled";
import './ModalOpen.css'

const ModalAppointment = ({ psychologist, closeModal }) => {

    const [value, onChange] = useState('00:00');

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
      comment: ''
    });
  
    const handleSubmit = (event) => {
      event.preventDefault();
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

    const handleModalClick = (event) => {
      event.stopPropagation(); 
    };
  
    return (
      <ModalBackDrop onClick={() => closeModal()}>
        <ModalWindow onClick={handleModalClick}>
          <CloseButtonStyledAppoint type="button" onClick={() => closeModal(null)}>
            <SvgCloseAp>
              <use href={`${icons}#icon-exit`}></use>
            </SvgCloseAp>
          </CloseButtonStyledAppoint>
          <MakeAppointmentH>Make an appointment with a psychologist</MakeAppointmentH>
          <MakeAppointmentP>You are on the verge of changing your life for the better. Fill out the short form below to book your personal appointment with a professional psychologist. We guarantee confidentiality and respect for your privacy.</MakeAppointmentP>
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
              onChange={handleChange}
            />
            <MakeAppointmentDivNumberTime>
              <RegisterInput
                placeholder="+380"
                type="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
              />
              <TimePicker onChange={onChange} value={value} />
            </MakeAppointmentDivNumberTime>
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
              style={{height: `116px`}}
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
