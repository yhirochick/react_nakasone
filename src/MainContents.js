import Zip from './contents/Zip';
import Heading from './Components/Heading';
import Button from './Components/Button';
function MainContents() {
  return (
    <div id="main">
      <section id="CorporateIdentity" class="content ci">
        <Heading level="2" text="丸仲商事について" />
        <div class="content_outer">
          <div class="ci_content">
            <p class="ci_concept">丸仲商事では<br class="sp" />テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            <p class="ci_main">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            <p class="ci_main">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
        </div>
      </section>
      <section id="ZipCode" class="content flow">
        <Heading level="2" text="サービス" />
        <div class="content_outer">
          <Heading util="pc-mt-40 sp-mt-40" level="3" text="郵便番号検索" />
          <Zip />
        </div>
      </section>
      <section id="Contact" class="content contact">
        <Heading level="2" text="お問い合わせ" />
        <div class="content_outer">
          <div class="contact_content">
            <div class="grid">
              <div class="grid_item pc-tac sp-tac">
                <Heading util="pc-mb-80" level="3" text="メール" />
                <a class="mail" href="mailto:yhirochick@gmail.com?subject=お問い合わせ">yhirochick@gmail.com</a>
              </div>
              <div class="grid_item pc-tac sp-tac">
                <Heading level="3" text="電話" />
                <Heading util="pc-tac sp-tac" level="3" text="実家" />
                <a class="tel" href="tel:0989365912">098-936-5912</a>
                <Heading util="pc-tac sp-tac pc-mt-40" level="3" text="携帯" />
                <a class="tel" href="tel:08064916598">080-6491-6598</a>
              </div>
            </div>
            <Heading util="pc-mt-80 sp-mt-40" level="3" text="サイトから直接問い合わせる" />
            <Button util="" type="blank" text="お問い合わせ内容を入力する" />

          </div>
        </div>
      </section>
      <section id="News" class="content news">
        <Heading level="2" text="最新情報" />
        <div class="content_outer">
          <div class="news_content">
            <p class="news_text">最新情報をブログ等で更新しています。</p>
            <div class="grid">
              <div class="grid_item">
                <Heading level="3" text="公式ブログ" />
                <div class="btnList">
                  <Button util="" type="blank" text="ブログはこちら" />
                </div>
              </div>
              <div class="grid_item">
                <Heading level="3" text="line友達追加" />
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