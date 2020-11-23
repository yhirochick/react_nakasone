import logo from './assets/common/images/logo.svg';
function Header() {
  return (
    <header>
      <div class="header_logo">
        <h1><img src={logo} alt="丸仲商事" /></h1>
      </div>
      <div class="header_nav">
        <div class="header_nav__inner">
          <div class="header_nav__toggle hide">MENU</div>
          <a class="header_nav__item wide" href="#CorporateIdentity">
            <span class="header_nav__text">丸仲商事について</span>
          </a>
          <a class="header_nav__item" href="#Service">
            <span class="header_nav__text">事業紹介</span>
          </a>
          <a class="header_nav__item" href="#Company">
            <span class="header_nav__text">会社概要</span>
          </a>
          <a class="header_nav__item" href="#Recruit">
            <span class="header_nav__text">採用情報</span>
          </a>
          <a class="header_nav__item" href="#Access">
            <span class="header_nav__text">アクセス</span>
          </a>
          <a class="header_nav__item" href="#Contact">
            <span class="header_nav__text">お問い合わせ</span>
          </a>
        </div>
      </div>
      <div class="header_contact">
        <a class="header_contact__phone" href="tel:08064916598">
          <span class="header_contact__phone--text">TEL:080-6491-6598</span>
          <span class="header_contact__phone--sub">平日15:00〜15:07</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
