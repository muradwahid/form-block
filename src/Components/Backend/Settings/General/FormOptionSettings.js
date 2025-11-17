import { PanelBody, SelectControl, TextControl, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "react";
import { updateData } from "../../../../../../bpl-tools/utils/functions";

const FormOptionSettings = ({ attributes, setAttributes, updateObj }) => {
    const { formOptions, form } = attributes;
    const { formType } =form
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        wp.ajax
            .post("get_admin_roles", { nonce: window.wpApiSettings?.nonce })
            .done((res) => {
                setRoles(res.map((item) => ({ label: item.charAt(0).toUpperCase() + item.slice(1), value: item })));
            })
            .fail((error) => {
                // eslint-disable-next-line no-console
                console.error(error);

            });
    }, []);

    return <PanelBody className="bPlPanelBody" title={__("Form Options", "b-blocks")} initialOpen={false}>
        <ToggleControl label={__("Redirect", "b-blocks")} checked={formOptions.isRedirect} value={formOptions.isRedirect} onChange={(val) => setAttributes({ formOptions: updateData(formOptions, val, "isRedirect") })} />

        {formOptions.isRedirect && <>
            {!formOptions.redirectPrevious && <TextControl className='mt10' label={__("Custom Redirect URL", "b-blocks")} value={formOptions.customUrl} placeholder={location} onChange={(value) => updateObj('formOptions', value, 'customUrl')} />}

            <ToggleControl className='mt10' label={__("Redirect to Previous Page", "b-blocks")} checked={formOptions.redirectPrevious} value={formOptions.redirectPrevious} onChange={(value) => updateObj('formOptions', value, 'redirectPrevious')} />
        </>}
        { 
            formType === 'register' && <>
            <hr />
            <SelectControl className='mt10' label={__("New User Role", "b-blocks")} value={formOptions.userRole} onChange={(value) => updateObj('formOptions', value, 'userRole')} options={roles} />
            </>
        }
    </PanelBody>
};

export default FormOptionSettings;
