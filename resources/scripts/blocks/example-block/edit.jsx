/**
 * WordPress dependencies
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './editor-style.css';

const Edit = ( { attributes, setAttributes } ) => {
	const { isEnabled } = attributes;

	return (
		<>
			<div { ...useBlockProps() }>
				<p>
					{ isEnabled
						? __( 'Example block is enabled.', 'owc-mijn-omgeving' )
						: __( 'Example block is disabled.', 'owc-mijn-omgeving' ) }
				</p>
			</div>

			<InspectorControls>
				<PanelBody
					title={ __( 'Instellingen', 'owc-mijn-omgeving' ) }
					initialOpen={ true }
				>
					<ToggleControl
						label={ __( 'Ingeschakeld', 'owc-mijn-omgeving' ) }
						checked={ isEnabled }
						onChange={ ( value ) =>
							setAttributes( { isEnabled: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default Edit;
