import React from 'react';
import { observer } from 'mobx-react';

/**
 * This component detects if user is logged in.
 *
 * If logged in, render HomeMain
 * If not, render HomeWelcome
 */
@observer
export default class Home extends React.Component {

  render() {
    const { userStore } = this.context;

    return userStore.isLoggedIn ? <HomeMain /> : <HomeWelcome />;
  }
}
