/**
 * Created by gongy on 4/11/16.
 */

import React, { Component, PropTypes } from 'react';

class Url extends Component {
  constructor (props) {
    super(props);
    this.state = {
      ...props.url,
      isEditing: false
    };
  }

  render () {
    return (
      <tr>
        <td>g/{this.state.key}</td>
        <td>{this.state.url}</td>
      </tr>
    );
  }
}

Url.propTypes = {
  url: PropTypes.shape({
    key: PropTypes.string,
    url: PropTypes.string
  })
};

export default Url;
