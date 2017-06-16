/**
 * External dependencies
 */
import React from 'react';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import Button from 'components/button';
import Card from 'components/card';
import ExternalLink from 'components/external-link';
import FormFieldset from 'components/forms/form-fieldset';
import FormLabel from 'components/forms/form-label';
import FormRadio from 'components/forms/form-radio';
import FormSettingExplanation from 'components/forms/form-setting-explanation';
import FormTextInput from 'components/forms/form-text-input';
import FormToggle from 'components/forms/form-toggle/compact';
import SectionHeader from 'components/section-header';

const JobListings = ( {
	translate,
} ) => {
	return (
		<div>
			<SectionHeader label={ translate( 'Listings' ) }>
				<Button
					compact
					primary>
					{ translate( 'Save Settings' ) }
					</Button>
			</SectionHeader>
			<Card>
				<form>
					<FormFieldset>
						<FormLabel>
							{ translate( 'Listings Per Page' ) }
						</FormLabel>
						<FormTextInput
							min="0"
							step="1"
							type="number" />
						<FormSettingExplanation>
							{ translate( 'How many listings should be shown per page by default.' ) }
						</FormSettingExplanation>
					</FormFieldset>

					<FormFieldset>
						<FormToggle>
							{ translate( 'Hide filled positions' ) }
						</FormToggle>
						<FormSettingExplanation isIndented>
							{ translate( 'If enabled, filled positions will be hidden from archives.' ) }
						</FormSettingExplanation>

						<FormToggle>
							{ translate( 'Hide expired listings in job archive/search' ) }
						</FormToggle>
						<FormSettingExplanation isIndented>
							{ translate( 'If enabled, expired job listing is not searchable.' ) }
						</FormSettingExplanation>

						<FormToggle>
							{ translate( 'Hide expired listing content in single job listing (singular)' ) }
						</FormToggle>
						<FormSettingExplanation isIndented>
							{ translate( 'If enabled, the content within expired listings will be hidden. ' +
								'Otherwise, expired listings will be displayed as normal (without the application area).' ) }
						</FormSettingExplanation>
					</FormFieldset>
				</form>
			</Card>

			<SectionHeader label={ translate( 'Categories' ) }>
				<Button
					compact
					primary>
					{ translate( 'Save Settings' ) }
					</Button>
			</SectionHeader>
			<Card>
				<form>
					<FormFieldset>
						<FormToggle>
							{ translate( 'Enable categories for listings' ) }
						</FormToggle>
						<FormSettingExplanation isIndented>
							{ translate( 'Choose whether to enable categories. Categories must be setup by an ' +
								'admin to allow users to choose them during submission.' ) }
						</FormSettingExplanation>

						<FormToggle>
							{ translate( 'Enable category multiselect by default' ) }
						</FormToggle>
						<FormSettingExplanation isIndented>
							{ translate( 'If enabled, the category select box will default to a multiselect ' +
								'on the [jobs] shortcode.' ) }
						</FormSettingExplanation>
					</FormFieldset>

					<FormFieldset>
						<FormLabel>
							{ translate( 'Category Filter Type' ) }
						</FormLabel>
						<FormLabel>
							<FormRadio
								name="job_manager_category_filter_type"
								value="any" />
							<span>
								{ translate( 'Jobs will be shown if within ANY selected category' ) }
							</span>
						</FormLabel>

						<FormLabel>
							<FormRadio
								name="job_manager_category_filter_type"
								value="all" />
							<span>
								{ translate( 'Jobs will be shown if within ALL selected categories' ) }
							</span>
						</FormLabel>
						<FormSettingExplanation>
							{ translate( 'Determines the logic used to display jobs when selecting multiple categories.' ) }
						</FormSettingExplanation>
					</FormFieldset>
				</form>
			</Card>

			<SectionHeader label={ translate( 'Types' ) }></SectionHeader>
			<Card>
				<form>
					<FormFieldset>
						<FormToggle>
							{ translate( 'Enable types for listings' ) }
						</FormToggle>
						<FormSettingExplanation isIndented>
							{ translate( 'Choose whether to enable types. Types must be setup by an admin to ' +
								'allow users to choose them during submission.' ) }
						</FormSettingExplanation>

						<FormToggle>
							{ translate( 'Enable multiple types for listings' ) }
						</FormToggle>
						<FormSettingExplanation isIndented>
							{ translate( 'If enabled each job can have more than one type. The metabox on the ' +
								'post editor and the select box on the frontend job submission form are changed by this.' ) }
						</FormSettingExplanation>
					</FormFieldset>
				</form>
			</Card>

			<SectionHeader label={ translate( 'Date Format' ) }>
				<Button
					compact
					primary>
					{ translate( 'Save Settings' ) }
					</Button>
			</SectionHeader>
			<Card>
				<form>
					<FormFieldset>
						<FormLabel>
							<FormRadio
								name="job_manager_date_format"
								value="relative" />
							<span>
								{ translate( 'Relative to the current date (e.g., 1 day, 1 week, 1 month ago)' ) }
							</span>
						</FormLabel>

						<FormLabel>
							<FormRadio
								name="job_manager_date_format"
								value="default" />
							<span>
								{ translate( 'Default date format as defined in Setttings' ) }
							</span>
						</FormLabel>
						<FormSettingExplanation>
							{ translate( 'Choose how you want the published date for jobs to be displayed on the front-end.' ) }
						</FormSettingExplanation>
					</FormFieldset>
				</form>
			</Card>

			<SectionHeader label={ translate( 'Google Maps API Key' ) }>
				<Button
					compact
					primary>
					{ translate( 'Save Settings' ) }
					</Button>
			</SectionHeader>
			<Card>
				<form>
					<FormFieldset>
						<FormTextInput />
						<FormSettingExplanation>
							{ translate(
								'Google requires an API key to retrieve location information for job listings. ' +
								'Acquire an API key from the {{a}}Google Maps API developer site{{/a}}.',
								{
									components: {
										a: (
											<ExternalLink
												icon={ true }
												target="_blank"
												href="https://developers.google.com/maps/documentation/geocoding/get-api-key"
											/>
										),
									}
								}
							) }
						</FormSettingExplanation>
					</FormFieldset>
				</form>
			</Card>
		</div>
	);
};

export default localize( JobListings );
