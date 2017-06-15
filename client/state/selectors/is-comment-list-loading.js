/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * Returns true if we are currently loading site comments.
 *
 * @param  {Object}  state       Global state tree
 * @param  {Number}  siteId      The ID of the site we're querying
 * @return {?Boolean}            Whether Jumpstart is currently being deactivated
 */
export default function isCommentListLoading( state ) {
	return get( state, 'comments.isCommentListLoading', false );
}
