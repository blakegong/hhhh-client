/**
 * Created by gongy on 4/11/16.
 */

import React, { Component } from 'react'
import UrlList from '../components/UrlList'

class UrlListContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [
        { 'key': 'dinner', 'url': 'http://dinner.garenanow.com' },
        { 'key': 'people', 'url': 'http://people.garenanow.com' }
      ]
    }
  }

  addUrl = (url) => {
    this.setState({ list: [...this.list, url] })
  };

  removeUrl = (url) => {
    this.setState({ list: this.list.filter(u => u.key !== url.key) });
  };

  updateUrl = (url) => {
    const list = this.list.map(u => {
      if (u.key === url.key)
        return url;
      else
        return u;
    });
    this.setState({ list });
  };

  render () {
    return (
      <UrlList urlList={this.state.list} addUrl={this.addUrl} removeUrl={this.removeUrl} updateUrl={this.updateUrl}/>
    );
  }
}

export default UrlListContainer;
