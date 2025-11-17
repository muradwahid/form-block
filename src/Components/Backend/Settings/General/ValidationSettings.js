import { PanelBody, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const ValidationSettings = ({ attributes, updateObj }) => {
    const { validation } = attributes;
    return <PanelBody className="bPlPanelBody" title={__("Validation Messages", "b-blocks")} initialOpen={false} >
        <div className="mb10">
            <strong>Error Messages</strong>
        </div>
        <TextControl label={__("Invalid Email", "b-blocks")} value={validation.error.email.invalid} onChange={(value) => updateObj('validation', value, 'error', 'email', 'invalid')} />

        <TextControl label={__("Email is missing", "b-blocks")} value={validation.error.email.missing} onChange={(value) => updateObj('validation', value, 'error', 'email', 'missing')} />

        <TextControl label={__("Already Used Email", "b-blocks")} value={validation.error.email.alreadyUsed} onChange={(value) => updateObj('validation', value, 'error', 'email', 'alreadyUsed')} />

        <TextControl label={__("Invalid Username", "b-blocks")} value={validation.error.username.invalid} onChange={(value) => updateObj('validation', value, 'error', 'username', 'invalid')} />

        <TextControl label={__("Username is missing", "b-blocks")} value={validation.error.username.missing} onChange={(value) => updateObj('validation', value, 'error', 'username', 'missing')} />

        <TextControl label={__("Username already in use", "b-blocks")} value={validation.error.username.alreadyUsed} onChange={(value) => updateObj('validation', value, 'error', 'username', 'alreadyUsed')} />

        <TextControl label={__("Invalid Password", "b-blocks")} value={validation.error.password.invalid} onChange={(value) => updateObj('validation', value, 'error', 'password', 'invalid')} />

        <TextControl label={__("Password is missing", "b-blocks")} value={validation.error.password.missing} onChange={(value) => updateObj('validation', value, 'error', 'password', 'missing')} />

        <TextControl label={__("Invalid Password Confirmed", "b-blocks")} value={validation.error.password.confirmedPass} onChange={(value) => updateObj('validation', value, 'error', 'password', 'confirmedPass')} />

        <hr />
        <div className="mb5">
            <strong>Success Messages</strong>
        </div>
        <TextControl label={__("Successful Registration", "b-blocks")} value={validation.success.text} onChange={(value) => updateObj('validation', value, 'success', 'text')} />
    </PanelBody>
};

export default ValidationSettings;
