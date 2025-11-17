import { __experimentalBorderBoxControl as BorderBoxControl, Flex, PanelBody, TabPanel, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { withSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

import { Background, BoxControl, ColorControl, Device, Typography } from '../../../../../../bpl-tools/Components';
import { tabController } from '../../../../../../bpl-tools/utils/functions';

const PasswordStrengthStyles = ({ attributes, updateObj, device }) => {
	const { password, formFields } = attributes;

	return <PanelBody className='bPlPanelBody' title={__('Password Strength', 'b-blocks')} initialOpen={false} >
		<TabPanel className='bPlTabPanel small' activeClass='activeTab' tabs={[{ title: 'Container', name: 'container' }, { title: 'Meter', name: 'meter' }, { title: 'Text', name: 'passStrengthTxt' }]} onSelect={tabController}>
			{tab => <>
				<div className='mb10'>
					<strong>{tab.title}</strong>
				</div>
				{tab.name !== 'passStrengthTxt' && <>
					<UnitControl className='mt10' label={<Flex>{__('Width', 'b-blocks')} <Device /></Flex>} labelPosition='edge' value={password[tab.name][device].width} onChange={(value) => updateObj('password', value, [tab.name], device, 'width')} isUnitSelectTabbable />

					<UnitControl className='mt10' label={<Flex>{__('Height', 'b-blocks')} <Device /></Flex>} labelPosition='edge' onChange={(value) => updateObj('password', value, [tab.name], device, 'height')} isUnitSelectTabbable value={password[tab.name][device].height} />
				</>}

				<BoxControl className='mt10' label={<Flex>{__('Margin', 'b-blocks')} <Device /></Flex>} values={password[tab.name][device].margin} onChange={(value) => updateObj('password', value, [tab.name], device, 'margin')} />

				<BoxControl className='mt10' label={<Flex>{__('Padding', 'b-blocks')} <Device /></Flex>} values={password[tab.name][device].padding} onChange={(value) => updateObj('password', value, [tab.name], device, 'padding')} />

				{tab.name === 'container' && tab.name !== 'passStrengthTxt' && <Background className='mt10' label={__('Background', 'b-blocks')} value={password.container.bg} onChange={(value) => updateObj('password', value, 'container', 'bg')} />}

				{tab.name !== 'passStrengthTxt' && <>
					<BorderBoxControl className='mt10' label={__('Border', 'b-blocks')} value={password[tab.name].border} onChange={(value) => updateObj('password', value, [tab.name], 'border')} />

					<BoxControl label={__('Border Radius', 'b-blocks')} values={password[tab.name].radius} onChange={(value) => updateObj('password', value, [tab.name], 'radius')} />
				</>}
				{tab.name === 'passStrengthTxt' && <Typography className='mt10' label={__('Typography', 'b-blocks')} value={password.passStrengthTxt.typography} onChange={(value) => updateObj('password', value, 'passStrengthTxt', 'typography')} />}
			</>}
		</TabPanel>


		{formFields.showPassStrengthText || formFields.showPassStrengthMeter ? <>
			<hr />
			<div className='mt10 mb10'>
				<strong>Colors</strong>
			</div>
			<ColorControl className='mt10' label={__('Very Weak Password', 'b-blocks')} value={password.colors.veryWeak} onChange={(value) => updateObj('password', value, 'colors', 'veryWeak')} />

			<ColorControl className='mt10' label={__('Weak Password', 'b-blocks')} value={password.colors.weak} onChange={(value) => updateObj('password', value, 'colors', 'weak')} />

			<ColorControl className='mt10' label={__('Medium Password', 'b-blocks')} value={password.colors.medium} onChange={(value) => updateObj('password', value, 'colors', 'medium')} />

			<ColorControl className='mt10' label={__('Strong Password', 'b-blocks')} value={password.colors.strong} onChange={(value) => updateObj('password', value, 'colors', 'strong')} />
		</> : null}
	</PanelBody>
};
export default withSelect((select) => {
	const { getDeviceType } = select('core/editor');

	return {
		device: getDeviceType()?.toLowerCase(),
	};
})(PasswordStrengthStyles);
