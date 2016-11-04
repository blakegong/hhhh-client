import React from 'react';
import { Button } from 'react-bootstrap';
import TextInput from './widgets/TextInput';
import SwitchInput from './widgets/SwitchInput';

class AddUrlBox extends React.Component {

  onSubmitClick = () => {
    this.props.addUrl({
      is_private: this.isPrivateInput.getValue(),
      slug: this.slugInput.getValue(),
      target: this.targetInput.getValue(),
    });
  };

  render () {
    return (
      <div>
        <TextInput ref={(input) => this.slugInput = input}/>
        <TextInput ref={(input) => this.targetInput = input}/>
        <SwitchInput title="Is Private" ref={(input) => this.isPrivateInput = input}/>

        <Button onClick={this.onSubmitClick}>
          Add Url
        </Button>
      </div>
    );
  }
}

export default AddUrlBox;
