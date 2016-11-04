import React from 'react';
import { Button, Table } from 'react-bootstrap';
import TextInput from './widgets/TextInput';

class AddUrlBox extends React.Component {
  constructor(props) {
    super(props)
  }

  onSubmitClick() {
    this.props.addUrl({
      is_private: true,
      slug: this.slugInput.getValue(),
      target: this.targetInput.getValue(),
    });
  }

  render() {
    return (
      <div>
        <TextInput ref={(input) => this.slugInput = input} />
        <TextInput ref={(input) => this.targetInput = input} />

        <Button onClick={this.onSubmitClick.bind(this)}>
          Add Random Url
        </Button>
      </div>
    );
  }
}

export default AddUrlBox;
