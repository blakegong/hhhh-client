/**
 * Created by gongy on 5/11/16.
 */
import React, { Component } from 'react';
import { Typeahead }from 'react-typeahead';

export default class SearchBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue: '',
      options: []
    }
  }

  handleChange = (event) => {
    // this.setState({
    //   inputValue: event.target.value
    // });
    fetch(`/api/v1/search/urls/?q=${event.target.value}`).then(res => res.json())
      .then(resJson => {
        console.log(resJson.map(url => url.title))
        this.setState({ options: resJson.map(url => url.title).filter(option => option !== null && option !== '') })
      });
    // this.getOptions();
    // TODO throttle
  };

  render () {
    return (
      <Typeahead
        placeholder="Search Garena"
        onKeyPress={this.handleChange}
        onOptionSelected={(value) => console.log(value)}
        options={this.state.options}
        maxVisible={2}
      />
    );
  }
}
