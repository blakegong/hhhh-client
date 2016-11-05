import React from 'react';

class SearchInput extends React.Component {
  constructor (props) {
    super(props);
  }

  onChange(e) {
    this.props.onChange(e.target.value);
  }

  componentDidMount () {
    setTimeout(() => {
      document.getElementsByClassName('dummy')[0].focus()
    }, 250)
  }


  render () {
    return (
      <div>
        <input
          className="dummy"
          placeholder={this.props.value}
          value={this.props.value}
          onChange={this.onChange.bind(this)}
          style={this.props.style}
        />
      </div>
    );
  }
}

SearchInput.propTypes = {
  style: React.PropTypes.object,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
};

SearchInput.defaultProps = {
  type: 'text',
  placeholder: ''
};

export default SearchInput;