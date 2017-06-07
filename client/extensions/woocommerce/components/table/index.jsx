/**
 * External dependencies
 */
import React from 'react';
import classNames from 'classnames';

const Table = ( { className, header, children, ...props } ) => {
	const classes = classNames( 'table', className );

	return (
		<table className={ classes } { ...props }>
			{ header
				? <thead>{ header }</thead>
				: null
			}
			<tbody>
				{ children }
			</tbody>
		</table>
	);
};

export default Table;
