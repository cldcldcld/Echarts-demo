import React, { Component } from 'react';
import './LeftList.css';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class LeftList extends Component {

  render() {
    return (
      <div className="list">
        <MuiThemeProvider>
            <List>
              <ListItem primaryText="Pie Chart A" leftIcon={<ActionGrade />} />
              <ListItem primaryText="Pie Chart B" leftIcon={<ActionGrade />} />
              <ListItem primaryText="Pie Chart C" leftIcon={<ActionGrade />} />
              <ListItem primaryText="Pie Chart D" leftIcon={<ActionGrade />} />
              <ListItem primaryText="Pie Chart E" leftIcon={<ActionGrade />} />
            </List>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default LeftList;
