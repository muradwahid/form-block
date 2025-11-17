import { __ } from '@wordpress/i18n';
import { __experimentalInputControl as InputControl, __experimentalNumberControl as NumberControl, SelectControl, ToggleControl } from '@wordpress/components';

const WeakPassword = ({ attributes, updateObj }) => {
	const { formFields, weakPassword, validation } = attributes;
	return <>
		<ToggleControl className='mt10' label={__('Enable use of weak Password', 'b-blocks')} checked={formFields.weakPass} value={formFields.weakPass} onChange={(value) => updateObj('formFields', value, 'weakPass')} />

		{!formFields.weakPass && <>
			<SelectControl className='mt10' label={__('Validation Text', 'b-blocks')} labelPosition='edge' value={weakPassword.option} options={[{ label: 'Default', value: 'default' }, { label: 'Custom', value: 'custom' }]} onChange={value => updateObj('weakPassword', value, 'option')} />
			{
				weakPassword.option === 'custom' && <> <InputControl className='mt10' label={__('Custom Validation Text', 'b-blocks')} labelPosition='edge' type='text' value={validation.error.password.custom} onChange={value => updateObj('validation', value, 'error', 'password', 'custom')} />
				</>
			}

			<NumberControl className='mt10' label={__('Minimum Password Length', 'b-blocks')} labelPosition='edge' value={weakPassword.validation.length} onChange={value => updateObj('weakPassword', value, 'validation', 'length')} isDragEnabled isShiftStepEnabled shiftStep={1} step={1} max={50} min={4} />

			<ToggleControl className='mt10' label={__('One Uppercase Letter', 'b-blocks')} checked={weakPassword.validation.uppercase} value={weakPassword.validation.uppercase} onChange={(value) => updateObj('weakPassword', value, 'validation', 'uppercase')} />

			<ToggleControl className='mt10' label={__('One Lowercase Letter', 'b-blocks')} checked={weakPassword.validation.lowercase} value={weakPassword.validation.lowercase} onChange={(value) => updateObj(weakPassword, value, 'validation', 'lowercase')} />

			<ToggleControl className='mt10' label={__('One Number', 'b-blocks')} checked={weakPassword.validation.number} value={weakPassword.validation.number} onChange={(value) => updateObj('weakPassword', value, 'validation', 'number')} />

			<ToggleControl className='mt10' label={__('One Special Character', 'b-blocks')} checked={weakPassword.validation.specialChar} value={weakPassword.validation.specialChar} onChange={(value) => updateObj('weakPassword', value, 'validation', 'specialChar')} />

		</>}
	</>
};
export default WeakPassword;