import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const MessageOptions = ({ attributes, updateObj }) => {
  const { message } = attributes;
  return <PanelBody>
        <TextControl label={__('Success Message', 'b-blocks')} value={message.success.successFulRegistration} onChange={value => updateObj('message', value, 'success','successFulRegistration')} />
    </PanelBody>
};

export default MessageOptions;