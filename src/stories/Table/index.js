import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import './Table.css';

const TableComponent = (props) => (
	<div>
	<Table allRowsSelected={false}>
	 	<TableHeader>
	      <TableRow>
	        <TableHeaderColumn>ID</TableHeaderColumn>
	        <TableHeaderColumn>Name</TableHeaderColumn>
	        <TableHeaderColumn>Status</TableHeaderColumn>
	      </TableRow>
    	</TableHeader>
    	 <TableBody>
	      	<TableRow>
				<TableRowColumn>{props.records[0].id}</TableRowColumn>
				<TableRowColumn>{props.records[0].userid}</TableRowColumn>
				<TableRowColumn>{props.records[0].display_id}</TableRowColumn>
	      	</TableRow>
	      	<TableRow>
				<TableRowColumn>{props.records[1].id}</TableRowColumn>
				<TableRowColumn>{props.records[1].userid}</TableRowColumn>
				<TableRowColumn>{props.records[1].display_id}</TableRowColumn>
	      	</TableRow>
	      	<TableRow>
				<TableRowColumn>{props.records[2].id}</TableRowColumn>
				<TableRowColumn>{props.records[2].userid}</TableRowColumn>
				<TableRowColumn>{props.records[2].display_id}</TableRowColumn>
	      	</TableRow>
    	 </TableBody>
	</Table>
</div>
);

TableComponent.propTypes = {
  records: React.PropTypes.array,
}

export default TableComponent;
	    // <TableHeader>
	    //   <TableRow>
	    //     <TableHeaderColumn>ID</TableHeaderColumn>
	    //     <TableHeaderColumn>Name</TableHeaderColumn>
	    //     <TableHeaderColumn>Status</TableHeaderColumn>
	    //   </TableRow>
	    // </TableHeader>
	    // <TableBody>
	    //   <TableRow>
	    //     <TableRowColumn>1</TableRowColumn>
	    //     <TableRowColumn>John Smith</TableRowColumn>
	    //     <TableRowColumn>Employed</TableRowColumn>
	    //   </TableRow>
	    //   <TableRow>
	    //     <TableRowColumn>2</TableRowColumn>
	    //     <TableRowColumn>Randal White</TableRowColumn>
	    //     <TableRowColumn>Unemployed</TableRowColumn>
	    //   </TableRow>
	    //   <TableRow>
	    //     <TableRowColumn>3</TableRowColumn>
	    //     <TableRowColumn>Stephanie Sanders</TableRowColumn>
	    //     <TableRowColumn>Employed</TableRowColumn>
	    //   </TableRow>
	    //   <TableRow>
	    //     <TableRowColumn>4</TableRowColumn>
	    //     <TableRowColumn>Steve Brown</TableRowColumn>
	    //     <TableRowColumn>Employed</TableRowColumn>
	    //   </TableRow>
	    //   <TableRow>
	    //     <TableRowColumn>5</TableRowColumn>
	    //     <TableRowColumn>Christopher Nolan</TableRowColumn>
	    //     <TableRowColumn>Unemployed</TableRowColumn>
	    //   </TableRow>
	    // </TableBody>
