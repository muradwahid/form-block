import { Flex, PanelBody, RangeControl, SelectControl, __experimentalUnitControl as UnitControl, __experimentalToggleGroupControl as ToggleGroupControl, __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon, BorderBoxControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Device , Background, Label, BoxControl, ShadowControl} from '../../../../../../bpl-tools/Components';
import { CenterAlignIcon, LeftAlignIcon, RightAlignIcon } from '../../../../utils/icons';

const FormStyle = ({ attributes, updateObj,device }) => {
  const { styles } = attributes;
  const { form } = styles;
  return <PanelBody title={__('Form', 'b-blocks')} initialOpen={true} className='bPlPanelBody'>

    <SelectControl label={__('Form Width', 'b-blocks')} labelPosition='edge' options={[{ label: 'Full Width (100%)', value: 'full' }, {label:'Custom', value:'custom'}]} value={form.width.type} onChange={val => updateObj('styles', val, 'form', 'width', 'type')} />
    {
      form.width.type === 'custom' && <>
        <UnitControl label={<Flex>{__('Width', 'b-blocks')}<Device /></Flex>} labelPosition='edge' value={form.width[device]} onChange={val => updateObj('styles', val, 'form', 'width',device)} isUnitSelectTabbable />
        <Flex align='center'>
          <Label className='flex1'>{__('Alignment', 'b-blocks')}</Label>
          <ToggleGroupControl className='flex1' __next40pxDefaultSize
            __nextHasNoMarginBottom
            isDeselectable value={form.align} onChange={(val) => updateObj('styles', val, 'form', 'align')} >

            <ToggleGroupControlOptionIcon label="Left" value="left" icon={<LeftAlignIcon />} />
            <ToggleGroupControlOptionIcon label="Center" value="center" icon={<CenterAlignIcon />} />
            <ToggleGroupControlOptionIcon label="Right" value="right" icon={<RightAlignIcon />} />

          </ToggleGroupControl>
        </Flex>
      </>
    }

    <Background label={__('Background', 'b-blocks')} value={form.bg} onChange={val => updateObj('styles', val, 'form', 'bg')} />
    
    <BoxControl label={__('Margin', 'b-blocks')} values={form[device].margin} onChange={val => updateObj('styles', val, 'form', device, 'margin')} />
    
    <BoxControl label={__('Padding', 'b-blocks')} values={form[device].padding} onChange={val=>updateObj('styles',val,'form',device,'padding')}/>

    <RangeControl label={<Flex>{__('Field Gap', 'b-blocks')} <Device/></Flex>} value={form[device].fieldGap} onChange={val => updateObj('styles', val, 'form', device, 'fieldGap')} />
    
    <BorderBoxControl label={__('Border', 'b-blocks')} value={form.border} onChange={val => updateObj('styles', val, 'form', 'border')} />
    
    <BoxControl className='mt10' label={<Flex>{__('Border Radius', 'b-blocks')} <Device/></Flex>} values={form[device].radius} onChange={val => updateObj('styles', val, 'form', device, 'radius')} />
    
    <ShadowControl label={__('Shadow', 'b-blocks')} value={form.shadow} onChange={val=>updateObj('styles',val,'form','shadow')} />

    </PanelBody>
};

export default FormStyle;