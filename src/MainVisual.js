import mv_image from './assets/top/images/mv.jpg';
function MainVisual() {
  return (
    <div class="mv">
      <div class="swiper-container mv">
        <div class="swiper-wrapper">
          <div class="swiper-slide" style={{backgroundImage:`url(${mv_image})`}}>
            <div class="mv_contents pc-posi-9 sp-posi-bottom">
              <p class="mv_text">子どもたちに誇れる仕事を</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainVisual;
