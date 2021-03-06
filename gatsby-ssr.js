import { wrapRootElement as wrap } from "./root-wrapper"
import React from "react"
export const wrapRootElement = wrap

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="Google Ads: 966379702"
      type="text/javascript"
      async
      src="https://www.googletagmanager.com/gtag/js?id=AW-966379702"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-966379702');
          gtag('event', 'conversion', {'send_to': 'AW-966379702/8L7vCLnFoOkBELaR58wD'});
`,
      }}
    />,
    <script
      type="text/javascript"
      key="adRoll_js"
      dangerouslySetInnerHTML={{
        __html: `   adroll_adv_id = "7IVVWLQQBVAQJCV5DZEI2H";
      adroll_pix_id = "QPZUF4IEVZHOFEZD4IDR27";
      adroll_version = "2.0";
  
      (function(w, d, e, o, a) {
          w.__adroll_loaded = true;
          w.adroll = w.adroll || [];
          w.adroll.f = [ 'setProperties', 'identify', 'track' ];
          var roundtripUrl = "https://s.adroll.com/j/" + adroll_adv_id
                  + "/roundtrip.js";
          for (a = 0; a < w.adroll.f.length; a++) {
              w.adroll[w.adroll.f[a]] = w.adroll[w.adroll.f[a]] || (function(n) {
                  return function() {
                      w.adroll.push([ n, arguments ])
                  }
              })(w.adroll.f[a])
          }
  
          e = d.createElement('script');
          o = d.getElementsByTagName('script')[0];
          e.async = 1;
          e.src = roundtripUrl;
          o.parentNode.insertBefore(e, o);
      })(window, document);
      adroll.track("pageView");`,
      }}
    />,
  ])
}
