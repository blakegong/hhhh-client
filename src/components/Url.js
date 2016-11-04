/**
 * Created by gongy on 4/11/16.
 */

import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

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
        <td>g/{this.state.slug}</td>
        <td>{this.state.target}</td>
        <td><Button onClick={() => this.props.removeUrl(this.state)}>Delete</Button></td>
      </tr>
    );
  }
}

Url.propTypes = {
  url: PropTypes.shape({
    key: PropTypes.string,
    url: PropTypes.string
  }),
  updateUrl: PropTypes.func,
  removeUrl: PropTypes.func
};

export default Url;
