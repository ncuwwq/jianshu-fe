import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1541924986463'); /* IE9*/
    src: url('./iconfont.eot?t=1541924986463#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1541924986463') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1541924986463#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;


