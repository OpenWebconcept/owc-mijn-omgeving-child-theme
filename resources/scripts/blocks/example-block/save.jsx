/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const Save = ( { attributes } ) => {
	const { isEnabled } = attributes;

	if ( ! isEnabled ) {
		return null;
	}

	return (
		<div { ...useBlockProps.save() }>
			<p>{ __( 'Example block is enabled.', 'owc-mijn-omgeving' ) }</p>
		</div>
	);
};

export default Save;
