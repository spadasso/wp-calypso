/**
 * External dependencies
 */
import React from 'react';
import classNames from 'classnames';

const TableRow = ( { className, children, ...props } ) => {
	const classes = classNames( 'table-row', className );

	return (
		<tr className={ classes } { ...props }>
			{ children }
		</tr>
	);
};

export default TableRow;
