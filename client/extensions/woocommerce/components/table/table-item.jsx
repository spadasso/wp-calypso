/**
 * External dependencies
 */
import React from 'react';
import classNames from 'classnames';

const TableItem = ( { className, children, ...props } ) => {
	const classes = classNames( 'table-item', className );

	return (
		<td className={ classes } { ...props }>
			{ children }
		</td>
	);
};

export default TableItem;
