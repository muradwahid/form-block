import { Flex, PanelBody, TabPanel, __experimentalBorderBoxControl as BorderBoxControl } from "@wordpress/components";
import { withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { BoxControl, BtnGroup, ColorControl, Device, Typography } from "../../../../../../bpl-tools/Components";
import { tabController, updateData } from "../../../../../../bpl-tools/utils/functions";
import { alignCenter, alignLeft, alignRight } from "../../../../utils/icons";
const FieldStyles = ({ attributes, setAttributes, updateObj, device }) => {
    const { formFields } = attributes;
    return <PanelBody className="bPlPanelBody" title={__("Form Fields", 'b-blocks')} initialOpen={false} >

        <BoxControl className='mt10' label={<Flex>{__("Margin", 'b-blocks')} <Device /> </Flex>} values={formFields.input.margin[device]} onChange={(value) => updateObj('formFields', value, 'input', 'margin', device)} />

        <BoxControl className='mt10' label={<Flex>{__("Padding", 'b-blocks')} <Device /></Flex>} values={formFields.input.padding[device]} onChange={(value) => setAttributes({ formFields: updateData(formFields, value, "input", "padding", device), })} />

        <Typography className='mt10' label={__("Typography", 'b-blocks')} value={formFields.input.typography} onChange={(value) => updateObj('formFields', value, "input", "typography")} />

        <BtnGroup className='mt10 mb10' label={__("Text Align", 'b-blocks')} value={formFields.input.txtAlign} options={[{ label: "Left", value: "left", icon: alignLeft }, { label: "Center", value: "center", icon: alignCenter }, { label: "Right", value: "right", icon: alignRight },]} onChange={(value) => updateObj('formFields', value, "input", "txtAlign")} isIcon={true} />

        <TabPanel className="bPlTabPanel mini" activeClass="activeTab" tabs={[{ title: "Normal", name: "normal" }, { title: "Focus", name: "focus" },]} onSelect={tabController}>
            {tab => <>
                {tab.name === "normal" && <ColorControl className='mt10' label={__("Color", 'b-blocks')} value={formFields.input.normal.text} onChange={(value) => updateObj('formFields', value, "input","normal", "text")} />}

                <ColorControl className='mt10' label={__("Placeholder Color", 'b-blocks')} value={formFields.input[tab.name].placeholder} onChange={(value) => updateObj('formFields', value, "input", tab.name, "placeholder")} />

                <ColorControl className='mt10' label={__("Background", 'b-blocks')} value={formFields.input[tab.name].bg} onChange={(value) => updateObj('formFields', value, "input", tab.name, "bg")} />

                <BorderBoxControl className='mt10' label={__("Border", 'b-blocks')} value={formFields.input[tab.name].border} onChange={(value) => updateObj('formFields', value, "input", tab.name, "border")} />
                
                <BoxControl className='mt10' label={__("Border Radius", 'b-blocks')} values={formFields.input[tab.name].radius} onChange={(value) => updateObj('formFields', value, "input", tab.name, "radius")} />
            </>}

        </TabPanel>

    </PanelBody>
};
export default withSelect((select) => {
    const { getDeviceType } = select("core/editor");

    return {
        device: getDeviceType()?.toLowerCase(),
    };
})(FieldStyles);
