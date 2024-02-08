import svg from '../../assets/images/svg.svg';
import css from './Login.module.css';

const LogIn = (setIsLogInOpen) => {
  return (
    <div className={css.logInModuleBackSite}>
      <div className={css.logInModuleBlock}> 
        <button onClick={() => setIsLogInOpen(false)}>
        <svg>
          <use href={`${svg}#icon-x`} />
        </svg>
        </button>
        <div>
          <h1>Log In</h1>
          <p>
            Welcome back! Please enter your credentials to access your account
            and continue your search for a psychologist.
          </p>
        </div>
        <form>
          <div>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
