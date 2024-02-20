import Style from './pageError.module.css';
import Template from '../../components/user/template';
import Logo from '../../components/logo/logo';

export default function PageError () {
  return (
    <main className={Style.verify}>
      <nav className={Style.verify_nav}>
        <Logo/>
      </nav>
      <Template>
        <div className={Style.text}>
          <h2>Error 404: Page not found</h2>
          <button onClick={() => window.location.href = '/linksmusic/home'}>Back to home</button>
        </div>
      </Template>
    </main>
  );
}