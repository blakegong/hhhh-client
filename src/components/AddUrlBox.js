import React from 'react';
import { Button } from 'react-bootstrap';
import TextInput from './widgets/TextInput';
import SwitchInput from './widgets/SwitchInput';

const styles = {
  input: {
    width: "100%",
    background: "rgba(255, 255, 255, 0.3)",
    border: "none",
  },
  row: {
    display: "flex"
  }
};


class AddUrlBox extends React.Component {

  onSubmitClick = () => {
    this.props.addUrl({
      is_private: this.isPrivateInput.getValue(),
      title: this.titleInput.getValue(),
      slug: this.slugInput.getValue(),
      target: this.targetInput.getValue(),
    });
  };

  render () {
    return (
      <div style={styles.row}>
        <TextInput ref={(input) => this.titleInput = input} style={styles.input} placeholder="Name" />
        <TextInput ref={(input) => this.slugInput = input} style={styles.input} placeholder="When I Say" />
        <TextInput ref={(input) => this.targetInput = input} style={styles.input} placeholder="Actually I Mean" />
        <SwitchInput title="Is Private" ref={(input) => this.isPrivateInput = input}/>

        <Button onClick={this.onSubmitClick}>
          Add Url
        </Button>
      </div>
    );
  }
}

export default AddUrlBox;
