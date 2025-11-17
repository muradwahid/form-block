import { __ } from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';
import { BorderBoxControl, Flex, PanelBody,  SelectControl,  __experimentalToggleGroupControl as ToggleGroupControl, __experimentalToggleGroupControlOption as ToggleGroupControlOption, __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon, __experimentalUnitControl as UnitControl  } from '@wordpress/components';
import { Background, BButtonGroup, BoxControl, ColorControl, Device, Label, ShadowControl, Typography } from '../../../../../../bpl-tools/Components';
import { useState } from 'react';
import { justifyContent } from '../../../../utils/options';
import { CenterAlignIcon, LeftAlignIcon, RightAlignIcon } from '../../../../utils/icons';

const ButtonStyles = ({ attributes, updateObj, device }) => {
	const [buttonTab,setButtonTab] = useState('container');
	const [btnHTab,setBtnHTab] = useState('normal');
	const { styles } = attributes;
	const { buttonStyle } = styles;
	const { container, navigation } = buttonStyle;
	return <PanelBody className='bPlPanelBody' title={__('Button', 'b-blocks')} initialOpen={false} >
		<ToggleGroupControl __next40pxDefaultSize __nextHasNoMarginBottom isBlock value={buttonTab} onChange={(val) => { setButtonTab(val) }} className="mt10" >
			<ToggleGroupControlOption label="Container" value="container" />
			<ToggleGroupControlOption label="Button" value="button" />
			<ToggleGroupControlOption label="Navigation" value="navigation" />
		</ToggleGroupControl>

		{
			buttonTab === 'container' && <>
				<BoxControl label={<Flex>{__('Margin', 'b-blocks')} <Device/></Flex>} values={container[device].margin} onChange={val => updateObj('styles', val, 'buttonStyle', 'container', device, 'margin')} />

				<BoxControl label={<Flex>{__('Padding', 'b-blocks')} <Device/></Flex>} values={container[device].padding} onChange={val=>updateObj('styles',val,'buttonStyle','container',device,'padding')} />

				<BButtonGroup label={<Flex>{__('Display As', 'b-blocks')} <Device /></Flex>} options={[{ label: 'Inline', value: 'column' }, { label: 'Block', value: 'row' }]} value={container[device].display} onChange={val => updateObj('styles', val, 'buttonStyle', 'container', device, 'display')} />

				{
					container[device].display === 'column' && <>
						<SelectControl label={__('Justify Content', 'b-blocks')} labelPosition='edge' options={justifyContent} value={container[device].justify} onChange={val => updateObj('styles', val, 'buttonStyle', 'container', device, 'justify')} />
					</>
				}
				{
					container[device].display === 'row' && <>
						<Flex align='center'>
							<Label className='flex1'>{__('Alignment', 'b-blocks')}</Label>
							<ToggleGroupControl className='flex1' __next40pxDefaultSize __nextHasNoMarginBottom isDeselectable value={container[device].justify} onChange={(val) => updateObj('styles', val, 'buttonStyle','container',device, 'justify')} >
								<ToggleGroupControlOptionIcon label="Left" value="left" icon={<LeftAlignIcon />} />
								<ToggleGroupControlOptionIcon label="Center" value="center" icon={<CenterAlignIcon />} />
								<ToggleGroupControlOptionIcon label="Right" value="right" icon={<RightAlignIcon />} />
							</ToggleGroupControl>
						</Flex>

						<UnitControl label={<Flex>{__('Gap','b-blocks')}</Flex>} value={container[device].gap} onChange={val=>updateObj('styles',val,'ButtonStyle','container',device,'gap')} />
					</>
				}



			</>
		}

		{
			buttonTab === 'button' && <>
				
			<BoxControl label={<Flex>{__('Margin', 'b-blocks')}<Device /></Flex>} values={buttonStyle.button[device].margin} onChange={val => updateObj('styles', val, 'buttonStyle' ,'button', device, 'margin')} />
			
			<BoxControl label={<Flex>{__('Margin', 'b-blocks')}<Device /></Flex>} values={buttonStyle.button[device].padding} onChange={val => updateObj('styles', val, 'buttonStyle', 'button', device, 'padding')} />
			
			<Typography label={__('Typography', 'b-blocks')} value={buttonStyle.button.typography} onChange={val => updateObj('styles', val, 'buttonStyle', 'button', 'typography')} />
			
				<ToggleGroupControl __next40pxDefaultSize __nextHasNoMarginBottom isBlock value={btnHTab} onChange={(val) => { setBtnHTab(val) }} className="mt10" >
					<ToggleGroupControlOption label="Normal" value="normal" />
					<ToggleGroupControlOption label="Hover" value="hover" />
				</ToggleGroupControl>
				
				<ColorControl label={__('Color', 'b-blocks')} value={buttonStyle.button[btnHTab].color} onChange={val => updateObj('styles', val, 'buttonStyle', 'button', btnHTab, 'color')} />
				
				<Background label={__('Background', 'b-blocks')} value={buttonStyle.button[btnHTab].bg} onChange={val => updateObj('styles', val, 'buttonStyle', 'button', btnHTab, 'bg')} />
				
				<BorderBoxControl label={<Flex>{__('Border', 'b-blocks')} <Device /></Flex>} values={buttonStyle.button[btnHTab][device].border} onChange={val => updateObj('styles', val, 'buttonStyle', 'button', btnHTab, device, 'border')} />
				
				<BoxControl label={<Flex>{__('Border Radius', 'b-blocks')} <Device /></Flex>} values={buttonStyle.button[btnHTab][device].radius} onChange={val => updateObj('styles', val, 'buttonStyle', 'button', btnHTab, device, 'radius')} />
				
				<ShadowControl label={<Flex>{__('Shadow', 'b-blocks')} <Device /></Flex>} value={buttonStyle.button[btnHTab][device].shadow} onChange={val=>updateObj('styles',val,'buttonStyle','button',btnHTab,device,'shadow')} />

			</>
		}

		{
			buttonTab === 'navigation' && <>

			</>
		}


	</PanelBody>
};
export default withSelect((select) => {
	const { getDeviceType } = select('core/editor');
	return {
		device: getDeviceType()?.toLowerCase(),
	};
})(ButtonStyles);
