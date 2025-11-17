import { __ } from "@wordpress/i18n";
import { withSelect } from "@wordpress/data";
import { Flex, PanelBody, TabPanel, __experimentalUnitControl as UnitControl, __experimentalBorderBoxControl as BorderBoxControl } from "@wordpress/components";

import { Background, BoxControl, ColorControl, Device, ShadowControl, Typography } from "../../../../../../bpl-tools/Components";
import { tabController } from "../../../../../../bpl-tools/utils/functions";
import { headerStyleOptions, headerTitleSubOptions } from '../../../../utils/options';

const HeaderStyles = ({ attributes, updateObj, device }) => {
    const { formHeader } = attributes;

    return <>
        <PanelBody className="bPlPanelBody" title={__("Form Header", 'b-blocks')} initialOpen={false}>
            <TabPanel className="bPlTabPanel mini" activeClass="activeTab" tabs={headerStyleOptions} onSelect={tabController} >
                {tab => <>
                    {tab.name === "header" && <>
                        <UnitControl className='mt10' label={<Flex>{__("Width", 'b-blocks')} <Device /></Flex>} labelPosition='edge' units={[{ label: "%", value: "%", default: "100" }, { label: "px", value: "px" }, { label: "rem", value: "rem" },]} value={formHeader.header.width[device]} min={0} max={formHeader.header.width[device] && formHeader.header.width[device]?.includes("%") ? 100 : 1200} onChange={(value) => updateObj('formHeader', value, "header", "width", device)} />

                        <UnitControl className='mt10' label={<Flex>{__("Height", 'b-blocks')} <Device /></Flex>} units={[{ label: "px", value: "px" }, { label: "%", value: "%" }, { label: "rem", value: "rem" },]} labelPosition='edge' value={formHeader.header.height[device]} onChange={(value) => updateObj('formHeader', value, "header", "height", device)} />

                        <BoxControl className='mt10' label={<Flex>{__("Margin", 'b-blocks')} <Device /></Flex>} values={formHeader.header.margin[device]} onChange={(value) => updateObj('formHeader', value, "header", "margin", device)} />

                        <BoxControl className='mt10' label={<Flex>{__("Padding", 'b-blocks')} <Device /></Flex>} values={formHeader.header.padding[device]} onChange={(value) => updateObj('formHeader', value, "header", "padding", device)} />

                        <Background className='mt10' label={__("Background", 'b-blocks')} value={formHeader.header.bg} onChange={(value) => updateObj('formHeader', value, "header", "bg")} />

                        <BorderBoxControl label={__("Border", 'b-blocks')} value={formHeader.header.border} onChange={value => updateObj('formHeader', value, 'header', 'border')} />
                        <BoxControl label={__('Border Radius', 'b-blocks')} values={formHeader.header.radius} onChange={value => updateObj('formHeader', value, 'header', 'radius')} />

                    </>}

                    {tab.name === "logo" && <>
                        <UnitControl className='mt10' label={<Flex>{__("Width", 'b-blocks')}<Device /></Flex>} labelPosition='edge' units={[{ label: "%", value: "%", default: "100" }, { label: "px", value: "px" }, { label: "rem", value: "rem" },]} value={formHeader.header.logo.width[device]} min={0} max={formHeader.header.logo.width[device].includes("%") ? 100 : 1200} onChange={(value) => updateObj('formHeader', value, "header",
                            "logo", "width", device)} />

                        <UnitControl className='mt10' label={<Flex>{__("Height", 'b-blocks')} <Device /></Flex>} labelPosition='edge' units={[{ label: "px", value: "px" }, { label: "%", value: "%" }, { label: "rem", value: "rem" },]} value={formHeader.header.logo.height[device]} onChange={(value) => updateObj('formHeader', value, "header", "logo", "height", device)} />

                        <BoxControl className='mt10' label={<Flex>{__("Margin", 'b-blocks')} <Device /></Flex>} values={formHeader.header.logo.margin[device]} onChange={(value) => updateObj('formHeader', value, "header", "logo", "margin", device)} />

                        <BoxControl className='mt10' label={<Flex>{__("Padding", 'b-blocks')} <Device /></Flex>} values={formHeader.header.logo.padding[device]} onChange={(value) => updateObj('formHeader', value, 'header', 'logo', 'padding', device)} />

                        <BorderBoxControl label={__("Border", 'b-blocks')} value={formHeader.header.logo.border} onChange={(value) => updateObj('formHeader', value, "header", "logo", "border")} />

                        <BoxControl label={__('Border Radius', 'b-blocks')} values={formHeader.header.logo.radius} onChange={value => updateObj('formHeader', value, 'header', 'logo', 'radius')} />

                        <ShadowControl className='mt10' label={__("Shadow", 'b-blocks')} value={formHeader.header.logo.shadow} onChange={(value) => updateObj("formHeader", value, "header", "logo", "shadow")} />

                    </>}

                    {tab.name === "image" && <>
                        <UnitControl className='mt10' label={<Flex>{__("Width", 'b-blocks')} <Device /></Flex>} labelPosition='edge' units={[{ label: "em", value: "em", default: "100" }, { label: "px", value: "px" }, { label: "rem", value: "rem" },]} value={formHeader.image.width[device]} min={0} max={formHeader.image.width[device].includes("%") ? 100 : 1200} onChange={(value) => updateObj('formHeader', value, "image", "width", device)} />

                        <UnitControl className='mt10' label={<Flex>{__("Height", 'b-blocks')}<Device /></Flex>} labelPosition='edge' units={[{ label: "px", value: "px" }, { label: "%", value: "%" }, { label: "rem", value: "rem" },]} value={formHeader.image.height[device]} onChange={(value) => updateObj('formHeader', value, "image", "height", device)} />

                        <BoxControl className='mt10' label={<Flex>{__("Margin", 'b-blocks')} <Device /></Flex>} values={formHeader.image.margin[device]} onChange={(value) => updateObj('formHeader', value, "image", "margin", device)} />

                        <BoxControl className='mt10' label={<Flex>{__("Padding", 'b-blocks')} <Device /></Flex>} values={formHeader.image.padding[device]} onChange={(value) => updateObj('formHeader', value, "image", "padding", device)} />

                        <BorderBoxControl label={__("Border", 'b-blocks')} value={formHeader.image.border} onChange={(value) => updateObj('formHeader', value, "image", "border")} />

                        <BoxControl label={__('Border Radius', 'b-blocks')} values={formHeader.image.radius} onChange={value => updateObj('formHeader', value, 'image', 'radius')} />

                    </>}
                </>}
            </TabPanel>

            <hr />

            <TabPanel className="bPlTabPanel mini" activeClass="activeTab" tabs={headerTitleSubOptions} onSelect={tabController} >
                {tab => <>
                    <BoxControl className='mt10' label={<Flex>{__("Margin", 'b-blocks')} <Device /></Flex>} values={formHeader.header[tab.name].margin[device]} onChange={(value) => updateObj('formHeader', value, "header", [tab.name], "margin", device)} />

                    <BoxControl className='mt10' label={<Flex>{__("Padding", 'b-blocks')}<Device /></Flex>} values={formHeader.header[tab.name].padding[device]} onChange={(value) => updateObj('formHeader', value, "header", [tab.name], "padding", device)} />

                    <ColorControl className='mt10' label={__("Color", 'b-blocks')} value={formHeader.header[tab.name].color} onChange={(value) => updateObj('formHeader', value, "header", [tab.name], "color")} />

                    <Background className='mt10' label={__("Background", 'b-blocks')} isImage={false} value={formHeader.header[tab.name].bg} onChange={(value) => updateObj('formHeader', value, 'header', [tab.name], 'bg')} />

                    <BorderBoxControl className='mt10' label={__("Border", 'b-blocks')} value={formHeader.header[tab.name].border} onChange={(value) => updateObj('formHeader', value, "header", [tab.name], "border")} />

                    <BoxControl key={tab.name} className="mt10" label={__("Border Radius", "b-blocks")} values={formHeader.header[tab.name].radius} onChange={value => updateObj('formHeader', value, 'header', [tab.name], 'radius')} />

                    <Typography className='mt10' label={__("Typography", 'b-blocks')} value={formHeader.header[tab.name].typography} onChange={(value) => updateObj('formHeader', value, 'header', [tab.name], 'typography')} />
                </>}
            </TabPanel>
        </PanelBody>
    </>
};
export default withSelect((select) => {
    const { getDeviceType } = select("core/editor");

    return {
        device: getDeviceType()?.toLowerCase(),
    };
})(HeaderStyles);
