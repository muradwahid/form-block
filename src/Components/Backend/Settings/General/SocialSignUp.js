import { PanelBody, SelectControl, TextControl, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const SocialSignUp = ({ attributes, updateObj }) => {
    const { socialSignUp } = attributes;
    return <PanelBody className="bPlPanelBody" title={__("Social Signup", "b-blocks")} initialOpen={false} >

        <ToggleControl label={__("Enable Signup with Google", "b-blocks")} checked={socialSignUp.google.show} value={socialSignUp.google.show} onChange={(value) => updateObj('socialSignUp', value, 'google', 'show')} />

        {socialSignUp.google.show && <TextControl className='mt10' label={__("Text for Google Button", "b-blocks")} value={socialSignUp.google.text} onChange={(value) => updateObj('socialSignUp', value, 'google', 'text')} />}

        <ToggleControl className='mt10' label={__("Enable Signup with Facebook", "b-blocks")} checked={socialSignUp.facebook.show} value={socialSignUp.facebook.show} onChange={(value) => updateObj('socialSignUp', value, 'facebook', 'show')} />

        {socialSignUp.facebook.show && <TextControl className='mt10' label={__("Text for Facebook Button", "b-blocks")} value={socialSignUp.facebook.text} onChange={(value) => updateObj('socialSignUp', value, 'facebook', 'text')} />}

        <ToggleControl className='mt10' label={__("Show Separator", "b-blocks")} checked={socialSignUp.separator.show} value={socialSignUp.separator.show} onChange={(value) => updateObj('socialSignUp', value, 'separator', 'show')} />

        {socialSignUp.separator.show && <>
            <SelectControl className='mt10' label={__("Separator Type", "b-blocks")} labelPosition='edge' value={socialSignUp.separator.type} options={[{ label: "Text", value: "text" }, { label: "Line", value: "line" },]} onChange={(value) => updateObj('socialSignUp', value, 'separator', 'type')} />

            {socialSignUp.separator.type === "text" && <TextControl label={__("Separator Text", "b-blocks")} value={socialSignUp.separator.text} onChange={(value) => updateObj('socialSignUp', value, 'separator', 'text')} />}
        </>}
    </PanelBody>
};

export default SocialSignUp;
