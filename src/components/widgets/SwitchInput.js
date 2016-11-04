/**
 * Created by zhouxz on 4/11/16.
 */


import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

class SwitchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props['value'] || false
    };
  }

  onFocus(e) {
    if (this.props.onFocus)
      this.props.onFocus();
  }

  toggleValue() {
    let value = !this.getValue();
    this.setState({value});
  }

  getValue() {
    return this.state.value;
  }

  render() {
    const {
      title
    } = this.props;

    return (
      <div>
        <div onClick={this.toggleValue.bind(this)}>
          {(() => {
            if (this.getValue()) {
              return <Glyphicon glyph="user" />
            } else {
              return <Glyphicon glyph="globe" />
            }
          })()}
        </div>
      </div>
    );
  }
}

SwitchInput.propTypes = {
  value: React.PropTypes.bool,
  title:  React.PropTypes.string,
  onFocus:  React.PropTypes.func,
};

SwitchInput.defaultProps = {
  type: 'text',
  placeholder: ''
};

export default SwitchInput;