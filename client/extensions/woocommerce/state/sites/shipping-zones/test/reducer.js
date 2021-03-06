/**
 * External dependencies
 */
import { expect } from 'chai';

/**
 * Internal dependencies
 */
import reducer from 'woocommerce/state/sites/reducer';
import { LOADING } from 'woocommerce/state/constants';
import {
	WOOCOMMERCE_SHIPPING_ZONES_REQUEST,
	WOOCOMMERCE_SHIPPING_ZONES_REQUEST_SUCCESS,
} from 'woocommerce/state/action-types';

describe( 'reducer', () => {
	it( 'should mark the shipping zones tree as being "loading"', () => {
		const siteId = 123;
		const action = {
			type: WOOCOMMERCE_SHIPPING_ZONES_REQUEST,
			siteId
		};

		const newSiteData = reducer( {}, action );
		expect( newSiteData[ siteId ].shippingZones ).to.eql( LOADING );
	} );

	it( 'should store data from the action', () => {
		const siteId = 123;
		const zones = [
			{ id: 0, name: 'Rest of the World' },
			{ id: 1, name: 'USA' },
		];
		const action = {
			type: WOOCOMMERCE_SHIPPING_ZONES_REQUEST_SUCCESS,
			siteId,
			data: zones,
		};
		const newState = reducer( {}, action );
		expect( newState[ siteId ] ).to.exist;
		expect( newState[ siteId ].shippingZones ).to.eql( zones );
	} );
} );
