import { CloseButtonStyled, SvgClose } from "components/ModalPortal/ModalPortal.styled";
import icons from '../../img/icons.svg';

const ModalAppointment = ({ psychologist }) => {
  return (
    <div>
      <CloseButtonStyled type="button">
        <SvgClose>
          <use href={`${icons}#icon-exit`}></use>
        </SvgClose>
      </CloseButtonStyled>
      <h1>Make an appointment with a psychologist</h1>
      <p>You are on the verge of changing your life for the better. Fill out the short form below to book your personal appointment with a professional psychologist. We guarantee confidentiality and respect for your privacy.</p>
      <div>
        <img src={psychologist.avatar_url} alt="avatar psychologist" />
        <p>Your psychologist</p>
        <p>{psychologist.name}</p>
      </div>
      <input placeholder="Name" />
      <input placeholder="+380" />
      <input placeholder="Email" />
      <input placeholder="Comment" />
      <button>Send</button>
    </div>
  );
};

export default ModalAppointment;
