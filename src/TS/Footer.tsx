import { Link } from 'react-router-dom';
import '../CSS/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2 className="footer-heading">Woman Space</h2>
          <p className="footer-description">
            Woman Space é uma plataforma digital que visa dar destaque à arte feminina, proporcionando um espaço para mulheres artistas exibirem, promoverem e discutirem suas obras. Nossa comunidade é um lugar de apoio mútuo, onde artistas podem compartilhar suas experiências, colaborar em projetos e inspirar umas às outras!
          </p>
        </div>
        <div className="footer-section links">
          <h3 className="footer-heading">Links Rápidos</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/loja">Loja</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/comunidade">Comunidade</Link></li>
            <li><Link to="/suporte">Suporte</Link></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3 className="footer-heading">Contato</h3>
          <p>Email: contato@womanspace.com</p>
          <p>Telefone: (11) 1234-5678</p>
        </div>
        <div className="footer-section social">
          <h3 className="footer-heading">Siga-nos</h3>
          <ul className="social-links">
            <li><a href="https://facebook.com"></a></li>
            <li><a href="https://twitter.com"></a></li>
            <li><a href="https://instagram.com"></a></li>
            <li><a href="https://linkedin.com"></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Woman Space. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
