import svg from '../../assets/images/svg.svg';
import css from './Registration.module.css'

const Registration = () => {
  return (
    <div>
      <svg>
        <use href={`${svg}#icon-x`} />
      </svg>
      <div>
        <h1>Registration</h1>
        <p>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>
      </div>
      <form>
        <div>
          <input type="name" id="name" name="name" placeholder="Name" required />
        </div>
        <div>
          <input type="email" id="email" name="email" placeholder="Email" required />
        </div>
        <div>
          <input type="password" id="password" name="password" placeholder="Password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Registration;
