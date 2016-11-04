import React from 'react';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props['value'] || ""
    };
  }

  onFocus(e) {
    if (this.props.onFocus)
      this.props.onFocus();
  }

  onChange(e) {
    const value = e.target.value;
    this.setState({value});
  }

  getValue() {
    return this.state.value;
  }

  render() {
    const {
      type,
      placeholder
    } = this.props;

    return (
      <div>
        <input
          type={type}
          placeholder={placeholder}
          value={this.state.value}
          onFocus={this.onFocus.bind(this)}
          onChange={this.onChange.bind(this)}
        />
      </div>
    );
  }
}

TextInput.propTypes = {
  type: React.PropTypes.string,
  placeholder:  React.PropTypes.string,
  value:  React.PropTypes.string,
  onFocus:  React.PropTypes.func,
};

TextInput.defaultProps = {
  type: 'text',
  placeholder: ''
};

export default TextInput;