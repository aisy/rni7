import React from 'react';

// Untuk memilih router silahkan di uncomment salah satunya dibawah ini

import RouterStack from './src/routes/routes-stack';
// import RouterDrawer from './src/routes/routes-drawer';
// import RouterTabBottom from './src/routes/router-bottom-tab';
// import RouterTabTop from './src/routes/router-top-tab';

const App = () => {
  return (
    <RouterStack />
    // <RouterDrawer />
    // <RouterTabBottom />
    // <RouterTabTop />
  );
}

export default App