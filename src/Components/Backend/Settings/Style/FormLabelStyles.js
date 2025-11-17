import { Flex, PanelBody, __experimentalBorderBoxControl as BorderBoxControl } from "@wordpress/components";
import { withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";

import { BoxControl, ColorControl, Device, Typography } from "../../../../../../bpl-tools/Components";
import { BorderControl } from "../../../../../../bpl-tools/Components/Deprecated";

const FormLabelStyles = ({ attributes, updateObj, device }) => {
    const { formLabel } = attributes;
    return <PanelBody className="bPlPanelBody" title={__("Form Labels", 'b-blocks')} initialOpen={false} >

        <BoxControl className='mt10' label={<Flex>{__("Margin", 'b-blocks')} <Device /></Flex>} values={formLabel.margin[device]} onChange={(value) => updateObj('formLabel', value, "margin", device)} />

        <BoxControl className='mt10' label={<Flex>{__("Padding", 'b-blocks')} <Device /></Flex>} values={formLabel.padding[device]} onChange={(value) => updateObj('formLabel', value, "padding", device)} />

        <Typography label={__("Typography", 'b-blocks')} value={formLabel.typography} onChange={(value) => updateObj('formLabel', value, "typography")} />

        <ColorControl label={__("Color", 'b-blocks')} value={formLabel.color.text} onChange={(value) => updateObj('formLabel', value, "color", "text")} />

        <ColorControl label={__("Background", 'b-blocks')} value={formLabel.color.bg} onChange={(value) => updateObj('formLabel', value, "color", "bg")} />

        <BorderBoxControl label={__("Border", 'b-blocks')} value={formLabel.border} onChange={(value) => updateObj('formLabel', value, "border")} />

        <BoxControl label={__("Border Radius", 'b-blocks')} values={formLabel.radius} onChange={value => updateObj('formLabel', value, 'radius')} />


        <BorderControl label={__("Border", 'b-blocks')} value={formLabel.border} onChange={(value) => updateObj('formLabel', value, "border")} />

    </PanelBody>
};
export default withSelect((select) => {
    const { getDeviceType } = select("core/editor");

    return {
        device: getDeviceType()?.toLowerCase(),
    };
})(FormLabelStyles);
