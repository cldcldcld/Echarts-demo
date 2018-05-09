import React, { Component } from 'react';
import './LeftList.css';
import axios from 'axios';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class LeftList extends Component {
  render() {
    return (
      <div className="list">
        <MuiThemeProvider>
            <List>
              <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
              <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
              <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
              <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
              <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
            </List>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default LeftList;
