/**
 * Created by gongy on 4/11/16.
 */
import React, { PropTypes } from 'react';
import Radium from 'radium';
import { Glyphicon } from 'react-bootstrap';
import TextInput from './widgets/TextInput';
import SwitchInput from './widgets/SwitchInput';

const styles = {
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  rowElement: {
    padding: "10px 20px",
    flexBasis: "20%"
  },
  rowElementLarge: {
    padding: "10px 20px",
    flexBasis: "40%"
  },
  url: {
    marginLeft: "10px"
  },
  input: {
    width: "100%",
    background: "none",
    border: "none",
    borderBottom: "1px solid rgba(100,100,100,0.5)"
  },
  glyph: {
    cursor: 'pointer'
  }
};

class UrlInner extends React.Component {
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
        <div style={styles.row}>
          <div style={styles.rowElement}>
            <div style={{ display: "flex" }}>
              <SwitchInput title="Is Private" ref={(input) => this.isPrivateInput = input}
                           value={this.state.is_private}/>
              <TextInput ref={(input) => this.titleInput = input} value={this.state.title} style={styles.input}/>
            </div>
          </div>
          <div style={styles.rowElement}>
            <div style={{ display: "flex" }}>
              <div>g/</div>
              <TextInput ref={(input) => this.slugInput = input} value={this.state.slug}
                         style={styles.input}
              />
            </div>
          </div>
          <div style={styles.rowElementLarge}>
            <TextInput ref={(input) => this.targetInput = input} value={this.state.target} style={styles.input}/>
          </div>
          <div style={styles.rowElement}>
            <Glyphicon glyph="ok" onClick={this.toggleEdit.bind(this)} style={styles.glyph}/>
          </div>
        </div>
      );
    } else {
      return (
        <div style={styles.row}>
          <div style={styles.rowElement}>
            {this.state.is_private ?
              <Glyphicon glyph="user"/>
              :
              <Glyphicon glyph="globe"/>
            }
            <span style={{marginLeft: "10px"}}>
              {this.state.title}
            </span>
            </div>
          <div style={styles.rowElement}>
            <a style={styles.url} href={'http://g/' + this.state.slug} target="_blank">g/{this.state.slug}</a>
          </div>
          <div style={styles.rowElementLarge}>{this.state.target}</div>
          <div style={styles.rowElement}>
            <Glyphicon glyph="pencil" onClick={this.toggleEdit.bind(this)} style={styles.glyph}/>
            <Glyphicon style={{ ...styles.glyph, marginLeft: "10px" }} glyph="remove"
                       onClick={() => this.props.removeUrl(this.state)}/>
          </div>
        </div>
      );
    }
  }
}

UrlInner.propTypes = {
  url: PropTypes.shape({
    slug: PropTypes.string,
    target: PropTypes.string,
    title: PropTypes.string,
    is_private: PropTypes.bool
  }).isRequired,
  updateUrl: PropTypes.func,
  removeUrl: PropTypes.func
};

export default Radium(UrlInner);
