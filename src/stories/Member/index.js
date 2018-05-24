import React from 'react';
import ThemeProvider from 'react-theme-provider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Paper from 'material-ui/Paper';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

import './Member.css';
const style = {
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};
const Member = (props) => (
	 <Paper style={style} zDepth={4} >
	 	<List>
	 		 <ListItem>
	 		 <Avatar>A</Avatar>                
              </ListItem> 
	 		<ListItem>{props.name}</ListItem>
	 		<ListItem>{props.designation}</ListItem>
	 	</List>
	 </Paper>
)

Member.propTypes = {
  name: React.PropTypes.string,
  designation: React.PropTypes.string,
  image: React.PropTypes.string,
}

export default Member;
// <div>
// 	<h4> Profile</h4>
// 	<div><img src={props.name}/></div>
// 	<span>{props.name}</span>
// 	<span>{props.designation}</span>
// </div>