/**
 * External dependencies
 */
import { get, isObject } from 'lodash';

/**
 * Internal dependencies
 */
import { getSelectedSiteId } from 'state/ui/selectors';
import { LOADING } from 'woocommerce/state/constants';

const getSetupChoices = ( state, siteId ) => {
	return get( state, [ 'extensions', 'woocommerce', 'sites', siteId, 'setupChoices' ] );
};

/**
 * @param {Object} state Whole Redux state tree
 * @param {Number} [siteId] Site ID to check. If not provided, the Site ID selected in the UI will be used
 * @return {boolean} Whether the setup choices list has been successfully loaded from the server
 */
export const areSetupChoicesLoaded = ( state, siteId = getSelectedSiteId( state ) ) => {
	return isObject( getSetupChoices( state, siteId ) );
};

/**
 * @param {Object} state Whole Redux state tree
 * @param {Number} [siteId] Site ID to check. If not provided, the Site ID selected in the UI will be used
 * @return {boolean} Whether the setup choices list is currently being retrieved from the server
 */
export const areSetupChoicesLoading = ( state, siteId = getSelectedSiteId( state ) ) => {
	return LOADING === getSetupChoices( state, siteId );
};

/**
 * @param {Object} state Whole Redux state tree
 * @param {Number} [siteId] Site ID to check. If not provided, the Site ID selected in the UI will be used
 * @return {boolean} Whether the merchant has opted out of shipping setup
 */
export const hasOptedOutOfShippingSetup = ( state, siteId = getSelectedSiteId( state ) ) => {
	if ( ! siteId ) {
		return false;
	}
	const setupChoices = getSetupChoices( state, siteId );
	if ( ! setupChoices ) {
		return false;
	}
	return setupChoices.opted_out_of_shipping_setup || false;
};
/**
 * @param {Object} state Whole Redux state tree
 * @param {Number} [siteId] Site ID to check. If not provided, the Site ID selected in the UI will be used
 * @return {boolean} Whether the merchant has opted out of taxes setup
 */
export const hasOptedOutOfTaxSetup = ( state, siteId = getSelectedSiteId( state ) ) => {
	if ( ! siteId ) {
		return false;
	}
	const setupChoices = getSetupChoices( state, siteId );
	if ( ! setupChoices ) {
		return false;
	}
	return setupChoices.opted_out_of_taxes_setup || false;
};
/**
 * @param {Object} state Whole Redux state tree
 * @param {Number} [siteId] Site ID to check. If not provided, the Site ID selected in the UI will be used
 * @return {boolean} Whether the merchant has tried the customizer
 */
export const hasTriedCustomizer = ( state, siteId = getSelectedSiteId( state ) ) => {
	if ( ! siteId ) {
		return false;
	}
	const setupChoices = getSetupChoices( state, siteId );
	if ( ! setupChoices ) {
		return false;
	}
	return setupChoices.finished_initial_setup || false;
};

/**
 * Gets whether the merchant has marked initial setup finished from API data.
 *
 * @param {Object} state Global state tree
 * @param {Number} siteId wpcom site id. If not provided, the Site ID selected in the UI will be used
 * @return {boolean} Whether or not initial setup was completed
 */
export function getFinishedInitialSetup( state, siteId = getSelectedSiteId( state ) ) {
	if ( ! siteId ) {
		return false;
	}
	const setupChoices = getSetupChoices( state, siteId );
	if ( ! setupChoices ) {
		return false;
	}
	return setupChoices.finished_initial_setup || false;
}
