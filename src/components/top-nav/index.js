import React from 'react';

import './styles.css';
import Logo from '../icons/logo';

class TopNav extends React.Component {
  tweet = 'GitPopular – Most starred projects on Github by @exceptiontimeout https://github.com/exceptiontimeout/gitpopular';

  render() {
    // We need that to show the extension button only if not running in extension
    // const isRunningExtension = window.chrome &&
    //   window.chrome.runtime &&
    //   window.chrome.runtime.id;

    return (
      <div className='top-nav'>
        <div className="container clearfix">
          <a href='https://github.com/exceptiontimeout/gitpopular'
             rel="noopener noreferrer"
             target='_blank'
             className="logo clearfix float-left">
            <Logo/>
            <div className="logo-text">
              <h4>GitPopular</h4>
              <p className="text-muted d-none d-sm-inline-block d-md-inline-block d-xl-inline-block d-lg-inline-block">Most starred projects on GitHub</p>
              <p className="text-muted d-inline-block d-sm-none d-md-none d-xl-none d-lg-none">Top Github Projects</p>
            </div>
          </a>
          <div className="float-right external-btns">
            <a href='http://github.com/exceptiontimeout/gitpopular'
               target='_blank'
               rel="noopener noreferrer"
               className="btn btn-dark"><i className="fa fa-github mr-1"></i> View Source</a>
          </div>
        </div>
      </div>
    );
  }
}

export default TopNav;
