import React from 'react';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Routing from './compnents/Routing';
function App() {
  return (
    <div>
      <Routing />
      <NotificationContainer />
    </div >
  );
}

export default App;
