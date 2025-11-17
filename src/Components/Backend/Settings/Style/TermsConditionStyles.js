import { Flex, PanelBody } from "@wordpress/components";
import { withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { BoxControl, ColorControl, Device, Typography } from "../../../../../../bpl-tools/Components";
const TermsConditionStyles = ({ attributes, updateObj, device }) => {
    const { termsConditions } = attributes;
    return <PanelBody className="bPlPanelBody" title={__("Terms & Conditions", 'b-blocks')} initialOpen={false} >

            <BoxControl className='mt10' label={<Flex>{__("Margin", 'b-blocks')} <Device /></Flex>} values={termsConditions.margin[device]} onChange={(value) => updateObj('termsConditions', value, "margin", device)} />

            <BoxControl className='mt10' label={<Flex>{__("Padding", 'b-blocks')} <Device /></Flex>} values={termsConditions.padding[device]} onChange={(value) => updateObj('termsConditions', value, "padding", device)} />

            <BoxControl className='mt10' label={<Flex>{__("Checkbox Margin", 'b-blocks')} <Device /></Flex>} values={termsConditions.checkboxMargin[device]} onChange={(value) => updateObj('termsConditions', value, "checkboxMargin", device)} />

            <ColorControl className='mt10' label={__("Color", 'b-blocks')} value={termsConditions.color.text} onChange={(value) => updateObj('termsConditions', value, "color", "text")} />

            <ColorControl className='mt10' label={__("Link Color", 'b-blocks')} value={termsConditions.color.link} onChange={(value) => updateObj('termsConditions', value, "color", "link")} />

            <ColorControl className='mt10' label={__("Background Color", 'b-blocks')} value={termsConditions.color.bg} onChange={(value) => updateObj('termsConditions', value, "color", "bg")} />

            <ColorControl className='mt10' label={__("Checkbox", 'b-blocks')} value={termsConditions.color.checkbox} onChange={(value) => updateObj('termsConditions', value, "color", "checkbox")} />

            <Typography className='mt10' label={__("Typography", 'b-blocks')} value={termsConditions.typography} onChange={(value) => updateObj('termsConditions', value, "typography")} />

        </PanelBody>
};

export default withSelect((select) => {
    const { getDeviceType } = select("core/editor");

    return {
        device: getDeviceType()?.toLowerCase(),
    };
})(TermsConditionStyles);
