/**
 * Created by gongy on 5/11/16.
 */
import React, { Component, PropTypes } from 'react';
import { Typeahead } from 'react-typeahead';

class SearchBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      options: []
    }
  }

  componentDidMount () {
    setTimeout(() => {
      document.getElementsByClassName('typeahead')[0].childNodes[0].focus()
    }, 250)
  }

  handleChange = (event) => {
    this.props.search(event.target.value);
    // TODO throttle
  };

  render () {
    console.log(this.props.keywordList)
    return (
      <div>
        <Typeahead
          placeholder={this.props.placeholder}
          onKeyUp={this.handleChange}
          onOptionSelected={(value) => console.log(value)}
          options={this.props.keywordList}
          maxVisible={5}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  keywordList: PropTypes.arrayOf(PropTypes.string).isRequired,
  search: PropTypes.func.isRequired,
};

export default SearchBar;
