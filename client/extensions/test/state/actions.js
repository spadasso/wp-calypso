/**
 * Internal dependencies
 */
import wp from 'lib/wp';
import {
	TEST_EXTENSION_FETCH,
	TEST_EXTENSION_FETCH_FAILURE,
	TEST_EXTENSION_FETCH_SUCCESS
} from './action-types';
import config from 'config';

const weAreNotInCalypsoAnymore = config( 'env' ) === 'jetpack';

export const requestData = ( siteId ) => {
	return ( dispatch ) => {
		dispatch( {
			type: TEST_EXTENSION_FETCH,
			siteId,
		} );
		if ( weAreNotInCalypsoAnymore ) {
			const options = {
				url: '/wp-json/jetpack/v4/settings/',
				headers: {
					'X-WP-Nonce': window.WP_API_nonce
				},
				method: 'GET'
			};
			return window.jQuery.ajax( options )
				.done( ( data ) => {
					dispatch( { type: TEST_EXTENSION_FETCH_SUCCESS, siteId, data } );
				} )
				.fail( () => dispatch( { type: TEST_EXTENSION_FETCH_FAILURE } ) );
		}
		return wp.req.get( { path: '/jetpack-blogs/' + siteId + '/rest-api/' }, { path: '/jetpack/v4/settings/' } )
			.then( ( { data } ) => dispatch( { type: TEST_EXTENSION_FETCH_SUCCESS, siteId, data } ) )
			.catch( () => dispatch( { type: TEST_EXTENSION_FETCH_FAILURE } ) );
	};
};
