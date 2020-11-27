import Zip from './contents/Zip';
function MainContents() {
  return (
    <div id="main">
      <section id="CorporateIdentity" class="content ci">
        <h2 class="heading2"><span>丸仲商事について</span></h2>
        <div class="content_outer">
          <div class="ci_content">
            <p class="ci_concept">丸仲商事では<br class="sp" />テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            <p class="ci_main">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            <p class="ci_main">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
        </div>
      </section>
      <section id="ZipCode" class="content flow">
        <h2 class="heading2"><span>サービス</span></h2>
        <div class="content_outer">
          <h3 class="heading3 pc-mt-40 sp-mt-40"><span>郵便番号検索</span></h3>
          <Zip />
        </div>
      </section>
      <section id="Contact" class="content contact">
        <h2 class="heading2"><span>お問い合わせ</span></h2>
        <div class="content_outer">
          <div class="contact_content">
            <div class="grid">
              <div class="grid_item pc-tac sp-tac">
                <h3 class="heading3 pc-mb-80"><span>メール</span></h3>
                <a class="mail" href="mailto:yhirochick@gmail.com?subject=お問い合わせ">yhirochick@gmail.com</a>
              </div>
              <div class="grid_item pc-tac sp-tac">
                <h3 class="heading3"><span>電話</span></h3>
                <h4 class="heading4 pc-tac sp-tac"><span>実家</span></h4>
                <a class="tel" href="tel:0989365912">098-936-5912</a>
                <h4 class="heading4 pc-tac sp-tac pc-mt-40"><span>携帯</span></h4>
                <a class="tel" href="tel:08064916598">080-6491-6598</a>
              </div>
            </div>
            <h3 class="heading3 pc-mt-40 sp-mt-40"><span>サイトから直接問い合わせる</span></h3>
            <a class="btn icon-blank" target="_blank" href="">
              <span class="main">お問い合わせ内容を入力する</span>
            </a>

          </div>
        </div>
      </section>
      <section id="News" class="content news">
        <h2 class="heading2"><span>最新情報</span></h2>
        <div class="content_outer">
          <div class="news_content">
            <p class="news_text">最新情報をブログ等で更新しています。</p>
            <div class="grid">
              <div class="grid_item">
                <h3 class="heading3"><span>公式ブログ</span></h3>
                <div class="btnList">
                  <a class="btn icon-blank" target="_blank" href="">
                    <span class="main">ブログはこちら</span>
                  </a>
                </div>
              </div>
              <div class="grid_item">
                <h3 class="heading3"><span>line友達追加</span></h3>
                <img class="line pc" src="https://qr-official.line.me/sid/M/676qwmxq.png" />
                <a class="line sp" href="https://lin.ee/6bzvHjj"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height="80" border="0" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

}
export default MainContents;