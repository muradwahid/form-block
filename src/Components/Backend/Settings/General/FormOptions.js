import { SelectControl } from '@wordpress/components';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const FormOptions = ({ attributes, setAttributes, handleReplaceForm }) => {
  const { form } = attributes;

 

  return <PanelBody title={__('Form', 'b-blocks')} initialOpen={true} className='bPlPanelBody'>

    <SelectControl label={__('Form Type', 'b-blocks')} labelPosition='edge' options={[{ label: 'Register', value: 'register' }, { label: 'Login', value: 'login' }, { label: 'Contact', value: 'contact' }]} value={form.formType} onChange={value => handleReplaceForm(value)} />

    
    </PanelBody>
};

export default FormOptions;