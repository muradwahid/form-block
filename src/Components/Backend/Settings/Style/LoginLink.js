import { Flex, PanelBody, SelectControl, TabPanel, __experimentalUnitControl as UnitControl, __experimentalBorderBoxControl as BorderBoxControl } from "@wordpress/components";
import { withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { Background, BoxControl, ColorControl, Device, Typography } from "../../../../../../bpl-tools/Components";
import { tabController } from "../../../../../../bpl-tools/utils/functions";
import { normalHoverTabs } from '../../../../../../bpl-tools/utils/options';
import { alignItems, justifyContent } from "../../../../utils/options";

const LoginLink = ({ attributes, updateObj, device }) => {
    const { button } = attributes;

    return <PanelBody className="bPlPanelBody" title={__("Login Link", 'b-blocks')} initialOpen={false}  >

            <BoxControl className='mt10' label={<Flex>{__("Margin", 'b-blocks')} <Device /></Flex>} values={button.signin[device].margin} onChange={(value) => updateObj('button', value, "signin", device, "margin")} />

            <BoxControl className='mt10' label={<Flex>{__("Padding", 'b-blocks')}<Device /></Flex>} values={button.signin[device].padding} onChange={(value) => updateObj('button', value, "signin", device, "padding")} />

            <Typography className='mt10' label={__("Typography", 'b-blocks')} value={button.signin.typography} onChange={(value) => updateObj('button', value, "signin", "typography")} />

            <SelectControl className='mt10' label={<Flex>{__("Display as", 'b-blocks')}<Device /></Flex>} labelPosition="left" options={[{ label: "Inline", value: "row" }, { label: "Block", value: "column" },]} value={button.signin[device].displayAs} onChange={(value) => updateObj('button', value, "signin", device, "displayAs")} />

            {button.signin[device].displayAs === "row" &&
                <SelectControl className='mt10' label={<Flex>{__("Justify Content", 'b-blocks')} <Device /></Flex>} labelPosition="left" options={justifyContent} value={button.signin[device].justify} onChange={(value) => updateObj('button', value, "signin", device, "justify")} />}

            {button.signin[device].displayAs === "column" && <SelectControl className='mt10' label={<Flex> {__("Align Items", 'b-blocks')}<Device /></Flex>} labelPosition='edge' options={alignItems} value={button.signin[device].alignment} onChange={(value) => updateObj('button', value, "signin", device, "alignment")} />}

        <UnitControl className='mt10' label={<Flex>{__("Container Width", 'b-blocks')}<Device /></Flex>} labelPosition='edge' value={button.signin[device].containerWidth} min={0} onChange={(value) => updateObj('button', value, "signin", device, "containerWidth")} />

            <UnitControl className='mt10' label={<Flex>{__("Width", 'b-blocks')} <Device/></Flex>} labelPosition='edge' value={button.signin[device].width} min={0} onChange={(value) => updateObj('button', value, "signin", device, "width")} />

            <UnitControl className='mt10' label={<Flex>{__("Height", 'b-blocks')} <Device/></Flex>} labelPosition='edge' min={0} value={button.signin[device].height} onChange={(value) => updateObj('button', value, "signin", device, "height")} />

            <TabPanel className="bPlTabPanel small mt10" activeClass="activeTab" tabs={normalHoverTabs} onSelect={tabController}>
                {
                    tab => <>
                        <ColorControl className='mt10' label={__("Color", 'b-blocks')} value={button.signin[tab.name].color} onChange={(value) => updateObj('button', value, "signin", tab.name, "color")} />

                        <Background className='mt10' label={__("Background", 'b-blocks')} value={button.signin[tab.name].bg} onChange={(value) => updateObj('button', value, "signin", tab.name, "bg")} />

                        <BorderBoxControl className='mt10' label={__("Border", 'b-blocks')} value={button.signin[tab.name].border} onChange={(value) => updateObj('button', value, "signin", tab.name, "border")} />

                        <BoxControl label={__("Border Radius", "b-blocks")} values={button.signin[tab.name].radius} onChange={value=>updateObj('button',value,'signin',tab.name,'radius')} />

                    </>
                }
            </TabPanel>
        </PanelBody>
};
export default withSelect((select) => {
    const { getDeviceType } = select("core/editor");

    return {
        device: getDeviceType()?.toLowerCase(),
    };
})(LoginLink);
