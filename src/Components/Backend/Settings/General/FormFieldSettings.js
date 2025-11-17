import { Button, Flex, __experimentalInputControl as InputControl, PanelBody, SelectControl, ToggleControl, __experimentalUnitControl as UnitControl } from "@wordpress/components";
import { withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { produce } from "immer";

import { BButtonGroup, Device, IconLibrary, MediaArea } from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../../../bpl-tools/utils/functions";
import emailIcon from "../../../../assets/icon/envelope-solid.svg";
import passIcon from "../../../../assets/icon/lock-solid.svg";
import userIcon from "../../../../assets/icon/user-solid.svg";
import { addInputFieldOptions, inputFieldOptions } from "../../../../utils/options";
import { PanelRepeater } from "../../Panel/PanelRepeater/PanelRepeater";
import WeakPassword from "./WeakPassword";

const FormFieldSettings = ({ attributes, setAttributes, updateObj, device }) => {
    const { formFields, password } = attributes;
    const handleIcon = (type) => {
        if (type === "username") {
            return userIcon;
        } else if (type === "password") {
            return passIcon;
        } else if (type === "email") {
            return emailIcon;
        } else if (type === "confirmpassword") {
            return passIcon;
        } else {
            return userIcon;
        }
    };

    const updateRepeaterData = (index, property, value, secondProperty, thirdProperty) => {
        const updatedData = produce(formFields.fields, (draft) => {
            if (property && secondProperty && thirdProperty) {
                draft[index][property][secondProperty][thirdProperty] = value;
            } else if (property && secondProperty) {
                draft[index][property][secondProperty] = value;
            } else {
                draft[index][property] = value;
            }
        });
        setAttributes({ formFields: { ...formFields, fields: updatedData } });
    };
    const handleDelete = (index) => {
        setAttributes({
            formFields: {
                ...formFields,
                fields: [
                    ...formFields.fields.slice(0, index),
                    ...formFields.fields.slice(index + 1),
                ],
            },
        });
    };
    const handleAddItem = () => {
        const fieldsData = [...formFields.fields];
        fieldsData.push(addInputFieldOptions);
        setAttributes({ formFields: { ...formFields, fields: fieldsData } });
    };

    return <>
        <PanelBody className="bPlPanelBody" title={__("Form Fields", "b-blocks")} initialOpen={false} >
            <p>Fields</p>
            {formFields.fields.map((val, i) => (
                <PanelRepeater key={i} index={i} length={formFields.fields.length} copy={true} delete={true} handleDelete={handleDelete} title={val.label.text} >

                    <SelectControl label={__('Type', 'b-blocks')} labelPosition='edge' className="controller-width" options={inputFieldOptions} value={val.type} onChange={(value) => updateRepeaterData(i, "type", value)} />

                    <InputControl label={__('Label', 'b-blocks')} labelPosition='edge' value={val.label.text} onChange={(value) => updateRepeaterData(i, "label", value, "text")} />

                    <InputControl className='mt10' label={__('Placeholder', 'b-blocks')} labelPosition='edge' value={val.placeholder.text} onChange={(value) => updateRepeaterData(i, "placeholder", value, "text")} />

                    <ToggleControl className="mt10" label={__("Required", "b-blocks")} value={val.required} checked={val.required} onChange={(value) => updateRepeaterData(i, "required", value)} />

                    <UnitControl label={<Flex>{__("Field Width", "b-blocks")} <Device /></Flex>} labelPosition='edge' units={[{ label: "%", value: "%", default: "100" }]} max={100} value={val.width[device]} onChange={(value) => updateRepeaterData(i, "width", value, device)} />

                    <BButtonGroup className="mt10" options={[{ label: "Upload", value: "upload" }, { label: "Library", value: "library" },]} label={__("Icon Type: ", "b-blocks")} value={val.icon.type} onChange={(iconType) => updateRepeaterData(i, "icon", iconType, "type")} />

                    {val.icon.type === "upload" && (
                        <MediaArea types="image/svg+xml" default={handleIcon(val.type)} label={__("Select SVG", "b-blocks")} value={val.icon.url} onChange={(value) => updateRepeaterData(i, "icon", value, "url")} />
                    )}
                    {val.icon.type === "library" && (
                        <IconLibrary value={val.icon.svg} onChange={(value) => updateRepeaterData(i, "icon", value, "svg")} />
                    )}
                </PanelRepeater>
            ))}

            <div className="panelInputFieldAddButton">
                <Button onClick={handleAddItem} variant="primary">
                    <span className="dashicons dashicons-plus"></span> Add Item
                </Button>
            </div>

            <hr />
            <ToggleControl className='mt10' label={__("Show Label", "b-blocks")} value={formFields.showLabel} checked={formFields.showLabel} onChange={(value) => setAttributes({ formFields: updateData(formFields, value, "showLabel"), })} />
            {formFields.showLabel && (
                <ToggleControl className='mt10' label={__("Show Required Mark", "b-blocks")} value={formFields.showRequiredMark} checked={formFields.showRequiredMark} onChange={(value) => setAttributes({ formFields: updateData(formFields, value, "showRequiredMark"), })} />
            )}

            <ToggleControl className='mt10' label={__("Password Visibility Icon", "b-blocks")} value={formFields.passVisibilityIcon} checked={formFields.passVisibilityIcon} onChange={(value) => setAttributes({ formFields: updateData(formFields, value, "passVisibilityIcon"), })} />

            <ToggleControl className='mt10' label={__("Show Field Icons", "b-blocks")} value={formFields.fieldIcons} checked={formFields.fieldIcons} onChange={(value) => setAttributes({ formFields: updateData(formFields, value, "fieldIcons") })} />

            <ToggleControl className='mt10' label={__("Show Password Strength Meter", "b-blocks")} value={formFields.showPassStrengthMeter} checked={formFields.showPassStrengthMeter} onChange={(value) => setAttributes({ formFields: updateData(formFields, value, "showPassStrengthMeter"), })} />

            <ToggleControl className='mt10' label={__("Show Password Strength Text", "b-blocks")} value={formFields.showPassStrengthText} checked={formFields.showPassStrengthText} onChange={(value) => setAttributes({ formFields: updateData(formFields, value, "showPassStrengthText"), })} />

            {formFields.showPassStrengthText && <>

                <SelectControl label={__("Password Strength Text", "b-blocks")} labelPosition='edge' options={[{ label: "Default", value: "default" }, { label: "Custom", value: "custom" },]} value={formFields.passStrengthText} onChange={(value) => setAttributes({ formFields: updateData(formFields, value, "passStrengthText"), })} />

                {formFields.passStrengthText === "custom" && <>
                    <InputControl label={__("Very Weak Password", "b-blocks")} value={password.passStrengthTxt.veryWeak} onChange={(value) => setAttributes({ password: updateData(password, value, "passStrengthTxt", "veryWeak"), })} />

                    <InputControl className='mt10' label={__("Weak Password", "b-blocks")} value={password.passStrengthTxt.weak} onChange={(value) => setAttributes({ password: updateData(password, value, "passStrengthTxt", "weak"), })} />

                    <InputControl className='mt10' label={__("Medium Password", "b-blocks")} value={password.passStrengthTxt.medium} onChange={(value) => setAttributes({ password: updateData(password, value, "passStrengthTxt", "medium"), })} />

                    <InputControl className='mt10' label={__("Strong Password", "b-blocks")} value={password.passStrengthTxt.strong} onChange={(value) => setAttributes({ password: updateData(password, value, "passStrengthTxt", "strong"), })} />
                </>}
            </>}
            <WeakPassword {...{ attributes, updateObj }} />
        </PanelBody>
    </>
};
export default withSelect((select) => {
    const { getDeviceType } = select("core/editor");
    return {
        device: getDeviceType()?.toLowerCase(),
    };
})(FormFieldSettings);
