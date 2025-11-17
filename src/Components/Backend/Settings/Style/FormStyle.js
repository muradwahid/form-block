import { Flex, PanelBody, RangeControl, SelectControl, __experimentalUnitControl as UnitControl, __experimentalToggleGroupControl as ToggleGroupControl, __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Device , Background, Label} from '../../../../../../bpl-tools/Components';
import { CenterAlignIcon, LeftAlignIcon, RightAlignIcon } from '../../../../utils/icons';

const FormStyle = ({ attributes, updateObj }) => {
  const { styles } = attributes;
  const { form } = styles;
  return <PanelBody title={__('Form', 'b-blocks')} initialOpen={true} className='bPlPanelBody'>

    <SelectControl label={__('Form Width', 'b-blocks')} labelPosition='edge' options={[{ label: 'Full Width (100%)', value: 'full' }, {label:'Custom', value:'custom'}]} value={form.width.type} onChange={val => updateObj('styles', val, 'form', 'width', 'type')} />
    {
      form.width.type === 'custom' && <>
        <UnitControl label={<Flex>{__('Width', 'b-blocks')}<Device /></Flex>} labelPosition='edge' value={form.width} onChange={val => updateObj('styles', val, 'form', 'width')} isUnitSelectTabbable />
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
    <RangeControl label={__('Field Gap','b-blocks')} value={form.fieldGap} onChange={val=>updateObj('styles', val, 'form', 'fieldGap')} />
    </PanelBody>
};

export default FormStyle;