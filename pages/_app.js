
import AppContext from '../AppContext';
import infoObject from '../infoObject';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {

  const [infoSelected, setInfoSelected] = useState('info');
  const infoObj = infoObject;
  return (

    <AppContext.Provider
      value={{
        state: {
          info: infoObj[infoSelected],
          infoselected: infoSelected,
        },
        setInfoSelected: setInfoSelected,
      }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );



}

export default MyApp;
