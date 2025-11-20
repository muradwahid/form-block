import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';
import { BorderBoxControl, Flex, PanelBody,  SelectControl,  __experimentalToggleGroupControl as ToggleGroupControl, __experimentalToggleGroupControlOption as ToggleGroupControlOption, __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon, __experimentalUnitControl as UnitControl  } from '@wordpress/components';
import { Background, BButtonGroup, BoxControl, ColorControl, Device, Label, ShadowControl, Typography } from '../../../../../../bpl-tools/Components';
import { justifyContent } from '../../../../utils/options';
import { CenterAlignIcon, LeftAlignIcon, RightAlignIcon } from '../../../../utils/icons';

const ButtonStyles = ({ attributes, updateObj, device }) => {
	const [buttonTab,setButtonTab] = useState('container');
	const [btnHTab,setBtnHTab] = useState('normal');
	const { styles } = attributes;
	const { buttonStyle } = styles;
	const { container, navigation } = buttonStyle;
	const { first, second } = navigation;

	return <PanelBody className='bPlPanelBody' title={__('Button', 'b-blocks')} initialOpen={false} >
		<ToggleGroupControl __next40pxDefaultSize __nextHasNoMarginBottom isBlock value={buttonTab} onChange={(val) => { setButtonTab(val) }} className="mt10" >
			<ToggleGroupControlOption label="Container" value="container" />
			<ToggleGroupControlOption label="Button" value="button" />
			<ToggleGroupControlOption label="Navigation" value="navigation" />
		</ToggleGroupControl>

		{
			buttonTab === 'container' && <>
				{/* <BoxControl label={<Flex>{__('Margin', 'b-blocks')} <Device/></Flex>} values={container[device].margin} onChange={val => updateObj('styles', val, 'buttonStyle', 'container', device, 'margin')} /> */}

				<BoxControl className='mt10' label={<Flex>{__('Margin', 'b-blocks')} <Device/></Flex>} values={container[device].margin} onChange={val=>updateObj('styles',val,'buttonStyle','container',device,'margin')} />

				<BButtonGroup className='mt10' label={<Flex>{__('Display As', 'b-blocks')} <Device /></Flex>} options={[{ label: 'Inline', value: 'row' }, { label: 'Block', value: 'column' }]} value={container[device].display} onChange={val => updateObj('styles', val, 'buttonStyle', 'container', device, 'display')} />

				{
					container[device].display === 'row' && <>
						<SelectControl label={<Flex>{__('Justify Content', 'b-blocks')} <Device/></Flex>} labelPosition='edge' options={justifyContent} value={container[device].justify} onChange={val => updateObj('styles', val, 'buttonStyle', 'container', device, 'justify')} />
					</>
				}
				{
					container[device].display === 'column' && <>
						<Flex align='center'>
							<Label className='flex1'><Flex>{__('Alignment', 'b-blocks')} <Device/></Flex></Label>
							<ToggleGroupControl className='flex1' __next40pxDefaultSize __nextHasNoMarginBottom isDeselectable value={container[device].align} onChange={(val) => updateObj('styles', val, 'buttonStyle','container',device, 'align')} >
								<ToggleGroupControlOptionIcon label="Left" value="flex-start" icon={<LeftAlignIcon />} />
								<ToggleGroupControlOptionIcon label="Center" value="center" icon={<CenterAlignIcon />} />
								<ToggleGroupControlOptionIcon label="Right" value="flex-end" icon={<RightAlignIcon />} />
							</ToggleGroupControl>
						</Flex>

						<UnitControl className='mt10' label={<Flex>{__('Gap','b-blocks')}<Device/></Flex>} labelPosition='edge' value={container[device].gap} onChange={val=>updateObj('styles',val,'buttonStyle','container',device,'gap')} />
					</>
				}
			</>
		}

		{
			buttonTab === 'button' && <>
				
			<BoxControl className='mt10' label={<Flex>{__('Margin', 'b-blocks')}<Device /></Flex>} values={buttonStyle.button[device].margin} onChange={val => updateObj('styles', val, 'buttonStyle' ,'button', device, 'margin')} />
			
			<BoxControl label={<Flex>{__('Margin', 'b-blocks')}<Device /></Flex>} values={buttonStyle.button[device].padding} onChange={val => updateObj('styles', val, 'buttonStyle', 'button', device, 'padding')} />
			
			<Typography label={__('Typography', 'b-blocks')} value={buttonStyle.button.typography} onChange={val => updateObj('styles', val, 'buttonStyle', 'button', 'typography')} />
			
				<ToggleGroupControl __next40pxDefaultSize __nextHasNoMarginBottom isBlock value={btnHTab} onChange={(val) => { setBtnHTab(val) }} className="mt10" >
					<ToggleGroupControlOption label="Normal" value="normal" />
					<ToggleGroupControlOption label="Hover" value="hover" />
				</ToggleGroupControl>
				
				<ColorControl label={__('Color', 'b-blocks')} value={buttonStyle.button[btnHTab].color} onChange={val => updateObj('styles', val, 'buttonStyle', 'button', btnHTab, 'color')} />
				
				<Background label={__('Background', 'b-blocks')} value={buttonStyle.button[btnHTab].bg} onChange={val => updateObj('styles', val, 'buttonStyle', 'button', btnHTab, 'bg')} />
				
				<BorderBoxControl label={<Flex>{__('Border', 'b-blocks')} <Device /></Flex>} values={buttonStyle.button[btnHTab][device].border} onChange={val => updateObj('styles', val, 'buttonStyle', 'button', btnHTab, device, 'border')} />
				
				<BoxControl className='mt10' label={<Flex>{__('Border Radius', 'b-blocks')} <Device /></Flex>} values={buttonStyle.button[btnHTab][device].radius} onChange={val => updateObj('styles', val, 'buttonStyle', 'button', btnHTab, device, 'radius')} />
				
				<ShadowControl label={<Flex>{__('Shadow', 'b-blocks')} <Device /></Flex>} value={buttonStyle.button[btnHTab][device].shadow} onChange={val=>updateObj('styles',val,'buttonStyle','button',btnHTab,device,'shadow')} />

			</>
		}

		{
			buttonTab === 'navigation' && <>
				<p className='mt10'><strong>First Text</strong></p>
				<ColorControl label={__('Color', 'b-blocks')} value={first.color} onChange={val => updateObj('styles', val, 'buttonStyle', 'navigation', 'first', 'color')} />

				<BoxControl className='mt10' label={<Flex>{__('Margin', 'b-blocks')} <Device /></Flex>} values={first[device].margin} onChange={val => updateObj('styles', val, 'buttonStyle', 'navigation', 'first', device, 'margin')} />
				
				<Typography label={__('Typography', 'b-blocks')} value={first.typography} onChange={val => updateObj('styles', val, 'buttonStyle', 'navigation', 'first', 'typography')} />
				
				<hr />
				
				<strong>Second Linkable Text</strong>
				<ColorControl label={__('Color', 'b-blocks')} value={second.color} onChange={val => updateObj('styles', val, 'buttonStyle', 'navigation', 'second', 'color')} />

				<BoxControl className='mt10' label={<Flex>{__('Margin', 'b-blocks')} <Device /></Flex>} values={second[device].margin} onChange={val => updateObj('styles', val, 'buttonStyle', 'navigation', 'second', device, 'margin')} />

				<Typography label={__('Typography', 'b-blocks')} value={second.typography} onChange={val => updateObj('styles', val, 'buttonStyle', 'navigation', 'second', 'typography')} />
			</>
		}


	</PanelBody>
};
export default ButtonStyles
