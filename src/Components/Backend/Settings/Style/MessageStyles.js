import { __experimentalBorderBoxControl as BorderBoxControl, PanelBody, TabPanel, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { Background, BoxControl, ColorControl, Typography } from "../../../../../../bpl-tools/Components";
import { tabController } from "../../../../../../bpl-tools/utils/functions";

const MessageStyles = ({ attributes, updateObj }) => {
    const { validation } = attributes;

    return <PanelBody className="bPlPanelBody" title={__("Messages", 'b-blocks')} initialOpen={false} >
        <TabPanel className="bPlTabPanel small" activeClass="activeTab" tabs={[{ title: "Success", name: "success" }, { title: "Error", name: "error" }]} onSelect={tabController}>
            {tab => <>
                {tab.name === "success" && <>
                    <ToggleControl className='mt10' label={__("Show success message", 'b-blocks')} checked={validation.success.styles.isShow} value={validation.success.styles.isShow} onChange={(val) => updateObj('validation', val, 'success', 'styles', 'isShow')} />

                    {validation.success.styles.isShow && <>
                        <BoxControl label={__("Padding", 'b-blocks')} values={validation.success.styles.padding} onChange={(val) => updateObj('validation', val, "success", "styles", "padding")} />

                        <BoxControl label={__("Margin", 'b-blocks')} values={validation.success.styles.margin} onChange={(val) => updateObj('validation', val, "success", "styles", "margin")} />

                        <ColorControl label={__("Color", 'b-blocks')} value={validation.success.styles.color.text} onChange={(val) => updateObj('validation', val, "success", "styles", "color", "text")} />

                        <Background label={__("Background", 'b-blocks')} isImage={false} value={validation.success.styles.color.bg} onChange={(val) => updateObj('validation', val, "success", "styles", "color", "bg")} />

                        <Typography label={__("Typography", 'b-blocks')} value={validation.success.styles.typo} onChange={(val) => updateObj('validation', val, "success", "styles", "typo")} />

                        <BorderBoxControl label={__("Border", 'b-blocks')} value={validation.success.styles.border} onChange={(val) => updateObj('validation', val, 'success', 'styles', 'border')} />

                        <BoxControl label={__('Border Radius')} values={validation.success.styles.radius} onChange={value => updateObj('validation', value, 'success', 'styles', 'radius')} />
                    </>}
                </>}

                {tab.name === "error" && <>
                    <BoxControl label={__("Margin", 'b-blocks')} values={validation.error.styles.margin} onChange={(val) => updateObj('validation', val, 'error', 'styles', 'margin')} />

                    <ColorControl label={__("Color", 'b-blocks')} value={validation.error.styles.color} onChange={(val) => updateObj('validation', val, 'error', 'styles', 'color')} />

                    <Typography label={__("Typography", 'b-blocks')} value={validation.error.styles.typo} onChange={(val) => updateObj('validation', val, 'error', 'styles', 'typo')} />
                </>}
            </>}
        </TabPanel>
    </PanelBody>
};
export default MessageStyles;
