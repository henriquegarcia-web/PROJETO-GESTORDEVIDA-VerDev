import './Header.css';

function Header() {

  return (
    <div className="Header">

      <div className="header">

        <div className="header__logo">
          <a href="">
            <h1>SUA VIDA</h1>
          </a> 
        </div>

        <div className="header__menu">
          <ul>
            <li><a href="">SOBRE</a></li>
            <li><a href="">SIMULADOR</a></li>
            <li><a href="">ALGUMA IDEIA?</a></li>
            <li><a href="">CONTRIBUIR</a></li>
            <li><a href="">DESENVOLVEDORES</a></li>
          </ul>
        </div>

        <div className="header__options">
          <div className="header__options--language">
            <a href="">
              <i class="icon fas fa-globe-americas"></i>
            </a>
          </div> 
        </div>

      </div> 

    </div>
  );
}

export default Header;