/**
 * External dependencies
 */
import React from 'react';
import classNames from 'classnames';

const TableHeading = ( { className, children, ...props } ) => {
	const classes = classNames( 'table-heading', className );
	props.scope = props.scope || 'col';

	return (
		<th className={ classes } { ...props }>
			{ children }
		</th>
	);
};

export default TableHeading;
