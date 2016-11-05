/**
 * Created by zhouxz on 4/11/16.
 */
import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';

class SwitchInput extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: props['value'] || false
    };
  }

  onFocus (e) {
    if (this.props.onFocus)
      this.props.onFocus();
  }

  toggleValue () {
    let value = !this.getValue();
    this.setState({ value });
  }

  getValue () {
    return this.state.value;
  }

  render () {

    return (
      <div>
        <div onClick={this.toggleValue.bind(this)}>
          {(() => {
            if (this.getValue()) {
              return <Glyphicon glyph="user" style={{ cursor: 'pointer' }}/>
            } else {
              return <Glyphicon glyph="globe" style={{ cursor: 'pointer' }}/>
            }
          })()}
        </div>
      </div>
    );
  }
}

SwitchInput.propTypes = {
  value: React.PropTypes.bool,
  title: React.PropTypes.string,
  onFocus: React.PropTypes.func,
};

SwitchInput.defaultProps = {
  type: 'text',
  placeholder: ''
};

export default SwitchInput;
