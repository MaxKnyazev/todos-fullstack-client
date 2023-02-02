import ProgressBar from '../ProgressBar'
import './Header.scss';

const isLogin = true;
const isAdmin = true;

function Header() {
  return (
    <div className="header__wrapper">
      <header className="header">
        <h1 className="header__title">Todos</h1>

        {
          isLogin === true ? (
            isAdmin === true ? 
              <div className="header__profile profile">
                <span className="profile__name profile__name--admin">Nickname</span>
                <button className="profile__button">Logout</button>
                <button className="profile__button profile__button--admin">Settings</button>
              </div>
            : 
              <div className="header__profile profile">
                <span className="profile__name">Nickname</span>
                <button className="profile__button">Logout</button>
              </div>
          ) : (
            <div className="header__profile profile">
              <button className="profile__button">SignIn</button>
              <button className="profile__button">SignUp</button>
            </div>
          )
        }
      </header>

      <ProgressBar />
    </div>
  );
}

export default Header;
