import React from 'react';
import LeftNavigation from './LeftNav';

import PasswordChange from './PasswordChange';
import Billing from './Billing';

import './account.css';

export default class AccountPage extends React.Component {
  render() {
    return (
      <div className="acc">
        <div>
          <LeftNavigation />
        </div>
        <PasswordChange />
        <Billing />
      </div>
    );
  }
}
