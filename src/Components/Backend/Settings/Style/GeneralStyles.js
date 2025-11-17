import { __ } from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';
import { Flex, PanelBody, TabPanel, __experimentalUnitControl as UnitControl } from '@wordpress/components';

import { Background, BoxControl, BtnGroup, Device, Label, ShadowControl } from '../../../../../../bpl-tools/Components';
import { BorderControl } from '../../../../../../bpl-tools/Components/Deprecated';
import { tabController, updateData } from '../../../../../../bpl-tools/utils/functions';
import { containerAlignOptions, containerStyleOptions } from '../../../../utils/options';

const GeneralStyles = ({ attributes, setAttributes, updateObj, device }) => {
	const { general } = attributes;

	return <PanelBody className='bPlPanelBody' title={__('Wrapper/Container', 'b-blocks')} initialOpen={true} >
		<TabPanel className='bPlTabPanel mini' activeClass='activeTab' tabs={containerStyleOptions} onSelect={tabController}>
			{tab => <>
				{tab.name === 'containerbox' && <>
					<UnitControl className='mt10' label={<Flex>{__('Width', 'b-blocks')} <Device /></Flex>} labelPosition='edge' onChange={(value) => updateObj('general', value, 'containerBox', 'width', device)} isUnitSelectTabbable value={general.containerBox.width[device]} />

					<Label className='mt10'>{<Flex>{__('Alignment', 'b-blocks')} <Device /></Flex>}</Label>
					<BtnGroup options={containerAlignOptions} value={general.containerBox.alignment[device]} onChange={(value) => updateObj('general', value, 'containerBox', 'alignment', device)} isIcon={true} />
				</>}

				{tab.name === 'formwrapper' && <>
					<UnitControl className='mt10' label={<Flex>{__('Width', 'b-blocks')} <Device /></Flex>} labelPosition='edge' onChange={(value) => updateObj('general', value, 'formWrapper', 'width', device)} isUnitSelectTabbable value={general.formWrapper.width[device]} />

					<BoxControl className='mt10' label={<Flex>{__('Margin', 'b-blocks')} <Device /></Flex>} values={general.formWrapper.margin[device]} onChange={(value) => updateObj('general', value, 'formWrapper', 'margin', device)} />

					<BoxControl className='mt10' label={<Flex>{__('Padding', 'b-blocks')} <Device /></Flex>} values={general.formWrapper.padding[device]} onChange={(value) => updateObj('general', value, 'formWrapper', 'padding', device)} />

					<BorderControl className='mt10' label={__('Border', 'b-blocks')} value={general.formWrapper.border} onChange={(value) => updateObj('general', value, 'formWrapper', 'border')} />

					<Background className='mt10' label={__('Background', 'b-blocks')} value={general.formWrapper.bg} onChange={(value) => updateObj('general', value, 'formWrapper', 'bg')} />

					<ShadowControl className='mt10' label={__('Shadow', 'b-blocks')} value={general.formWrapper.shadow} onChange={(value) => updateObj('general', value, 'formWrapper', 'shadow')} />
				</>}

				{tab.name === 'form' && <>
					<UnitControl className='mt10' label={<Flex>{__('Width', 'b-blocks')} <Device /></Flex>} labelPosition='edge' onChange={(value) => updateObj('general', value, 'form', 'width', device)} isUnitSelectTabbable value={general.form.width[device]} />

					<BoxControl className='mt10' label={<Flex>{__('Margin', 'b-blocks')} <Device /></Flex>} values={general.form.margin[device]} onChange={(value) => setAttributes({ general: updateData(general, value, 'form', 'margin', device), })} />

					<BoxControl className='mt10' label={<Flex>{__('Padding', 'b-blocks')} <Device /></Flex>} values={general.form.padding[device]} onChange={(value) => updateObj('general', value, 'form', 'padding', device)} />

					<BorderControl className='mt10' label={__('Border', 'b-blocks')} value={general.form.border} onChange={(value) => updateObj('general', value, 'form', 'border')} />

					<Background className='mt10' label={__('Background', 'b-blocks')} value={general.form.bg} onChange={(value) => updateObj('general', value, 'form', 'bg')} />

					<ShadowControl className='mt10' label={__('Shadow', 'b-blocks')} value={general.form.shadow} onChange={(value) => updateObj('general', value, 'form', 'shadow')} />
				</>}

			</>}
		</TabPanel>
	</PanelBody>
};
export default withSelect((select) => {
	const { getDeviceType } = select('core/editor');

	return {
		device: getDeviceType()?.toLowerCase(),
	};
})(GeneralStyles);
