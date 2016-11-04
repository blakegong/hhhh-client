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

  handleChange = (event) => {
    this.props.search(event.target.value);
    // console.log(event.target.value)
    // fetch(`${this.props.optionsUrl}${event.target.value}`)
    //   .then(res => res.json())
    //   .then((resJson) => {
    //     console.log(resJson)
    //     return this.props.processOptions(resJson)
    //   });
    // TODO throttle
  };

  render () {
    return (
      <Typeahead
        placeholder={this.props.placeholder}
        onKeyUp={this.handleChange}
        onOptionSelected={(value) => console.log(value)}
        options={this.props.keywordList}
        maxVisible={5}
      />
    );
  }
}

SearchBar.propTypes = {
  // optionsUrl: PropTypes.string,
  // placeholder: PropTypes.string,
  // processOptions: PropTypes.func,
  keywordList: PropTypes.arrayOf(PropTypes.string).isRequired,
  search: PropTypes.func.isRequired,
};

export default SearchBar;

// Sample Usage:
// <SearchBar
//   optionsUrl="/api/v1/search/urls/?q="
//   placeholder="Search Garena"
//   processOptions={(resJson) => resJson.map(url => url.title).filter(option => option !== null && option !== '')}
// />
