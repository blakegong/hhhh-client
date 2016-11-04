/**
 * Created by gongy on 4/11/16.
 */

import React, { PropTypes }from 'react';
import { Button } from 'react-bootstrap';
import TextInput from './widgets/TextInput'
import SwitchInput from './widgets/SwitchInput'

class Url extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      ...props.url,
      isEditing: false
    };
  }

  toggleEdit () {
    if (this.state.isEditing) {
      this.props.updateUrl({
        is_private: this.isPrivateInput.getValue(),
        old_slug: this.state.slug,
        slug: this.slugInput.getValue(),
        target: this.targetInput.getValue(),
        title: this.titleInput.getValue()
      })
    }

    let isEditing = !this.state.isEditing;
    this.setState({ isEditing })
  }

  render () {
    if (this.state.isEditing) {
      return (
        <tr>
          <td>
            g/
            <TextInput ref={(input) => this.slugInput = input} value={this.state.slug}/>
          </td>
          <td>
            <TextInput ref={(input) => this.targetInput = input} value={this.state.target}/>
          </td>
          <td>
            <TextInput ref={(input) => this.titleInput = input} value={this.state.title}/>
          </td>
          <td>
            <SwitchInput title="Is Private" ref={(input) => this.isPrivateInput = input} value={this.state.is_private}/>
          </td>
          <td>
            <Button onClick={this.toggleEdit.bind(this)}>Edit</Button>
            <Button onClick={() => this.props.removeUrl(this.state)}>Delete</Button>
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td><a href={'http://g/' + this.state.slug} target="_blank">g/{this.state.slug}</a></td>
          <td>{this.state.target}</td>
          <td>{this.state.title}</td>
          <td>{this.state.is_private ? "Private" : "Global"}</td>
          <td>
            <Button onClick={this.toggleEdit.bind(this)}>Edit</Button>
            <Button onClick={() => this.props.removeUrl(this.state)}>Delete</Button>
          </td>
        </tr>
      );
    }
  }
}

Url.propTypes = {
  url: PropTypes.shape({
    slug: PropTypes.string,
    target: PropTypes.string,
    title: PropTypes.string,
    is_private: PropTypes.bool
  }).isRequired,
  updateUrl: PropTypes.func,
  removeUrl: PropTypes.func
};

export default Url;
