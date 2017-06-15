/**
 * External dependencies
 */
import { expect } from 'chai';

/**
 * Internal dependencies
 */
import isCommentListLoading from '../is-comment-list-loading';

describe( 'isCommentListLoading()', () => {
	it( 'should return false if no information is available', () => {
		expect( isCommentListLoading( null ) ).to.equal( false );
	} );
	it( 'should return true if we are requesting comments', () => {
		expect( isCommentListLoading( { comments: { isCommentListLoading: true } } ) ).to.equal( true );
	} );
	it( 'should return false if we are not requesting comments', () => {
		expect( isCommentListLoading( { comments: { isCommentListLoading: false } } ) ).to.equal( false );
	} );
} );
