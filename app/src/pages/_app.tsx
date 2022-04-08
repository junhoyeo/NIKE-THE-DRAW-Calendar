import { Fragment } from 'react';

import { GlobalStyle } from '@/components/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <GlobalStyle />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
