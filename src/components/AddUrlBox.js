import React from 'react';
import { Button } from 'react-bootstrap';
import TextInput from './widgets/TextInput';
import SwitchInput from './widgets/SwitchInput';
import { Glyphicon } from 'react-bootstrap';

const styles = {
  input: {
    width: "100%",
    background: "none",
    border: "none",
    borderBottom: "1px solid rgba(100,100,100,0.5)",
  },
  row: {
    display: "flex",
    justifyContent: "space-around",
    padding: "0 20px 20px 20px"
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
    this.isPrivateInput.setValue(false);
    this.titleInput.setValue('');
    this.slugInput.setValue('');
    this.targetInput.setValue('');
  };

  render () {
    return (
      <div style={styles.row}>
        <SwitchInput title="Is Private" ref={(input) => this.isPrivateInput = input}/>
        <TextInput ref={(input) => this.titleInput = input} style={styles.input} placeholder="Name" />
        <TextInput ref={(input) => this.slugInput = input} style={styles.input} placeholder="When I Say" />
        <TextInput ref={(input) => this.targetInput = input} style={styles.input} placeholder="Actually I Mean" />

        <Glyphicon glyph="plus" onClick={this.onSubmitClick} style={{cursor: "pointer"}}/>
      </div>
    );
  }
}

export default AddUrlBox;
