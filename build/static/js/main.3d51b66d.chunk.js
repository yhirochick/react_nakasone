(this.webpackJsonpreact_nakasone_=this.webpackJsonpreact_nakasone_||[]).push([[0],{24:function(e,s,c){},25:function(e,s,c){},43:function(e,s,c){"use strict";c.r(s);var t=c(0),n=c(2),a=c.n(n),i=c(12),r=c.n(i),d=(c(24),c.p+"static/media/logo.103b5fa1.svg");var l=function(){return Object(t.jsxs)("header",{children:[Object(t.jsx)("div",{class:"header_logo",children:Object(t.jsx)("h1",{children:Object(t.jsx)("img",{src:d,alt:"\u4e38\u4ef2\u5546\u4e8b"})})}),Object(t.jsx)("div",{class:"header_nav",children:Object(t.jsxs)("div",{class:"header_nav__inner",children:[Object(t.jsx)("div",{class:"header_nav__toggle hide",children:"MENU"}),Object(t.jsx)("a",{class:"header_nav__item wide",href:"#CorporateIdentity",children:Object(t.jsx)("span",{class:"header_nav__text",children:"\u4e38\u4ef2\u5546\u4e8b\u306b\u3064\u3044\u3066"})}),Object(t.jsx)("a",{class:"header_nav__item",href:"#Service",children:Object(t.jsx)("span",{class:"header_nav__text",children:"\u4e8b\u696d\u7d39\u4ecb"})}),Object(t.jsx)("a",{class:"header_nav__item",href:"#Company",children:Object(t.jsx)("span",{class:"header_nav__text",children:"\u4f1a\u793e\u6982\u8981"})}),Object(t.jsx)("a",{class:"header_nav__item",href:"#Recruit",children:Object(t.jsx)("span",{class:"header_nav__text",children:"\u63a1\u7528\u60c5\u5831"})}),Object(t.jsx)("a",{class:"header_nav__item",href:"#Access",children:Object(t.jsx)("span",{class:"header_nav__text",children:"\u30a2\u30af\u30bb\u30b9"})}),Object(t.jsx)("a",{class:"header_nav__item",href:"#Contact",children:Object(t.jsx)("span",{class:"header_nav__text",children:"\u304a\u554f\u3044\u5408\u308f\u305b"})})]})}),Object(t.jsx)("div",{class:"header_contact",children:Object(t.jsxs)("a",{class:"header_contact__phone",href:"tel:08064916598",children:[Object(t.jsx)("span",{class:"header_contact__phone--text",children:"TEL:080-6491-6598"}),Object(t.jsx)("span",{class:"header_contact__phone--sub",children:"\u5e73\u65e515:00\u301c15:07"})]})})]})},j=(c(25),c.p+"static/media/mv.7603e88a.jpg");var h=function(){return Object(t.jsx)("div",{class:"mv",children:Object(t.jsx)("div",{class:"swiper-container mv",children:Object(t.jsx)("div",{class:"swiper-wrapper",children:Object(t.jsx)("div",{class:"swiper-slide",style:{backgroundImage:"url(".concat(j,")")},children:Object(t.jsx)("div",{class:"mv_contents pc-posi-9 sp-posi-bottom",children:Object(t.jsx)("p",{class:"mv_text",children:"\u5b50\u3069\u3082\u305f\u3061\u306b\u8a87\u308c\u308b\u4ed5\u4e8b\u3092"})})})})})})},b=c(13),x=c(14),o=c(18),O=c(17),p=c(15),_=c.n(p),v=c(16),g=c.n(v),m=function(e){Object(o.a)(c,e);var s=Object(O.a)(c);function c(e){var t;return Object(b.a)(this,c),(t=s.call(this,e)).state={address1:"",address2:"",address3:"",message:""},t}return Object(x.a)(c,[{key:"handleOnChangeZipCode",value:function(e){var s=this;_.a.get("https://zipcloud.ibsnet.co.jp/api/search",{adapter:g.a,params:{zipcode:e.target.value}}).then((function(e){if(200!==e.data.status)throw e;console.log(e);var c=e.data.results[0],t=c.address1,n=c.address2,a=c.address3;s.setState({address1:t,address2:n,address3:a,message:""})})).catch((function(e){var c=JSON.stringify(e,null,2);s.setState({address1:"",address2:"",address3:"",message:c})}))}},{key:"render",value:function(){var e=this;return Object(t.jsxs)("div",{className:"app",children:[Object(t.jsx)("div",{class:"form_text",children:Object(t.jsx)("input",{value:this.state.zipcode,onChange:function(s){return e.handleOnChangeZipCode(s)},type:"text",placeholder:"\u90f5\u4fbf\u756a\u53f7\u3092\u5165\u529b"})}),Object(t.jsxs)("p",{class:"zipcode_result",children:[this.state.address1,this.state.address2,this.state.address3]}),Object(t.jsx)("p",{class:"zipcode_message",children:this.state.message})]})}}]),c}(n.Component);var u=function(){return Object(t.jsxs)("div",{id:"main",children:[Object(t.jsxs)("section",{id:"CorporateIdentity",class:"content ci",children:[Object(t.jsx)("h2",{class:"heading2",children:Object(t.jsx)("span",{children:"\u4e38\u4ef2\u5546\u4e8b\u306b\u3064\u3044\u3066"})}),Object(t.jsx)("div",{class:"content_outer",children:Object(t.jsxs)("div",{class:"ci_content",children:[Object(t.jsxs)("p",{class:"ci_concept",children:["\u4e38\u4ef2\u5546\u4e8b\u3067\u306f",Object(t.jsx)("br",{class:"sp"}),"\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8"]}),Object(t.jsx)("p",{class:"ci_main",children:"\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8"}),Object(t.jsx)("p",{class:"ci_main",children:"\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8"})]})})]}),Object(t.jsxs)("section",{id:"ZipCode",class:"content flow",children:[Object(t.jsx)("h2",{class:"heading2",children:Object(t.jsx)("span",{children:"\u30b5\u30fc\u30d3\u30b9"})}),Object(t.jsxs)("div",{class:"content_outer",children:[Object(t.jsx)("h3",{class:"heading3 pc-mt-40 sp-mt-40",children:Object(t.jsx)("span",{children:"\u90f5\u4fbf\u756a\u53f7\u691c\u7d22"})}),Object(t.jsx)(m,{})]})]}),Object(t.jsxs)("section",{id:"Contact",class:"content contact",children:[Object(t.jsx)("h2",{class:"heading2",children:Object(t.jsx)("span",{children:"\u304a\u554f\u3044\u5408\u308f\u305b"})}),Object(t.jsx)("div",{class:"content_outer",children:Object(t.jsxs)("div",{class:"contact_content",children:[Object(t.jsxs)("div",{class:"grid",children:[Object(t.jsxs)("div",{class:"grid_item pc-tac sp-tac",children:[Object(t.jsx)("h3",{class:"heading3 pc-mb-80",children:Object(t.jsx)("span",{children:"\u30e1\u30fc\u30eb"})}),Object(t.jsx)("a",{class:"mail",href:"mailto:yhirochick@gmail.com?subject=\u304a\u554f\u3044\u5408\u308f\u305b",children:"yhirochick@gmail.com"})]}),Object(t.jsxs)("div",{class:"grid_item pc-tac sp-tac",children:[Object(t.jsx)("h3",{class:"heading3",children:Object(t.jsx)("span",{children:"\u96fb\u8a71"})}),Object(t.jsx)("h4",{class:"heading4 pc-tac sp-tac",children:Object(t.jsx)("span",{children:"\u5b9f\u5bb6"})}),Object(t.jsx)("a",{class:"tel",href:"tel:0989365912",children:"098-936-5912"}),Object(t.jsx)("h4",{class:"heading4 pc-tac sp-tac pc-mt-40",children:Object(t.jsx)("span",{children:"\u643a\u5e2f"})}),Object(t.jsx)("a",{class:"tel",href:"tel:08064916598",children:"080-6491-6598"})]})]}),Object(t.jsx)("h3",{class:"heading3 pc-mt-40 sp-mt-40",children:Object(t.jsx)("span",{children:"\u30b5\u30a4\u30c8\u304b\u3089\u76f4\u63a5\u554f\u3044\u5408\u308f\u305b\u308b"})}),Object(t.jsx)("a",{class:"btn icon-blank",target:"_blank",href:"",children:Object(t.jsx)("span",{class:"main",children:"\u304a\u554f\u3044\u5408\u308f\u305b\u5185\u5bb9\u3092\u5165\u529b\u3059\u308b"})})]})})]}),Object(t.jsxs)("section",{id:"News",class:"content news",children:[Object(t.jsx)("h2",{class:"heading2",children:Object(t.jsx)("span",{children:"\u6700\u65b0\u60c5\u5831"})}),Object(t.jsx)("div",{class:"content_outer",children:Object(t.jsxs)("div",{class:"news_content",children:[Object(t.jsx)("p",{class:"news_text",children:"\u6700\u65b0\u60c5\u5831\u3092\u30d6\u30ed\u30b0\u7b49\u3067\u66f4\u65b0\u3057\u3066\u3044\u307e\u3059\u3002"}),Object(t.jsxs)("div",{class:"grid",children:[Object(t.jsxs)("div",{class:"grid_item",children:[Object(t.jsx)("h3",{class:"heading3",children:Object(t.jsx)("span",{children:"\u516c\u5f0f\u30d6\u30ed\u30b0"})}),Object(t.jsx)("div",{class:"btnList",children:Object(t.jsx)("a",{class:"btn icon-blank",target:"_blank",href:"",children:Object(t.jsx)("span",{class:"main",children:"\u30d6\u30ed\u30b0\u306f\u3053\u3061\u3089"})})})]}),Object(t.jsxs)("div",{class:"grid_item",children:[Object(t.jsx)("h3",{class:"heading3",children:Object(t.jsx)("span",{children:"line\u53cb\u9054\u8ffd\u52a0"})}),Object(t.jsx)("img",{class:"line pc",src:"https://qr-official.line.me/sid/M/676qwmxq.png"}),Object(t.jsx)("a",{class:"line sp",href:"https://lin.ee/6bzvHjj",children:Object(t.jsx)("img",{src:"https://scdn.line-apps.com/n/line_add_friends/btn/ja.png",alt:"\u53cb\u3060\u3061\u8ffd\u52a0",height:"80",border:"0"})})]})]})]})})]})]})};var f=function(){return Object(t.jsx)("footer",{children:Object(t.jsx)("p",{class:"copyright",children:"Copyright \xa9 2020 marunaka-sho-ji All Rights Reserved."})})};var C=function(){return Object(t.jsxs)("div",{id:"mainSec",children:[Object(t.jsx)(l,{}),Object(t.jsx)(h,{}),Object(t.jsx)(u,{}),Object(t.jsx)(f,{})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(s){var c=s.getCLS,t=s.getFID,n=s.getFCP,a=s.getLCP,i=s.getTTFB;c(e),t(e),n(e),a(e),i(e)}))};r.a.render(Object(t.jsx)(a.a.StrictMode,{children:Object(t.jsx)(C,{})}),document.getElementById("root")),k()}},[[43,1,2]]]);
//# sourceMappingURL=main.3d51b66d.chunk.js.map