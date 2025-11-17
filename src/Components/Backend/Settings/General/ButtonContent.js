import { Flex, PanelBody, TextControl, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { Label } from '../../../../../../bpl-tools/Components';

const ButtonContent = ({ attributes, updateObj }) => {
    const { button } = attributes;
    const { navigation } = button;
    return <PanelBody className="bPlPanelBody" initialOpen={true} title={__("Button", "b-blocks")}>
        <Label className="mt0 mb10">
            <strong>Submit Button</strong>
        </Label>
        <TextControl label={__("Button Text", "b-blocks")} value={button.button.text} onChange={(value) => updateObj('button', value, 'button', 'text')} />
        <hr />
        <ToggleControl label={__('Enable Navigation', 'b-blocks')} checked={navigation.isNavigation} value={navigation.isNavigation} onChange={(value) => updateObj('button', value, 'navigation', 'isNavigation')} />
        { 
            navigation.isNavigation && <>
                <Label className="mt10 mb10">
                    <strong>{__('Navigate Button', 'b-blocks')}</strong>
                </Label>
                <Flex align="normal" gap={3}>
                    <TextControl value={button.navigation.first.text} onChange={(value) => updateObj('button', value, 'navigation', 'first', 'text')} />

                    <div>
                        <TextControl className="mb0" value={button.navigation.second.text} onChange={(value) => updateObj('button', value, 'navigation', 'second', 'text')} />
                        <small>{__("Second option is linkable", "b-blocks")}</small>
                    </div>
                </Flex>
                <TextControl label={__("Sign In URL", "b-blocks")} value={button.navigation.second.url} placeholder={`${window.location.origin}/login`} onChange={(value) => updateObj('button', value, 'navigation', 'second', 'url')} />
            </>
        }
        
    </PanelBody>
};

export default ButtonContent;
