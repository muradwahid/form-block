import {  BorderBoxControl, PanelBody, TabPanel } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { Background, BoxControl, ColorControl, Typography } from "../../../../../../bpl-tools/Components";
import { tabController } from "../../../../../../bpl-tools/utils/functions";

const MessageStyles = ({ attributes, updateObj }) => {
    const { styles } = attributes;
    const { message } = styles;

    return <PanelBody className="bPlPanelBody" title={__("Messages", 'b-blocks')} initialOpen={false} >
        <TabPanel className="bPlTabPanel small" activeClass="activeTab" tabs={[{ title: "Success", name: "success" }, { title: "Error", name: "error" }]} onSelect={tabController}>
            {tab => <>
                
                <BoxControl className="mt10" label={__("Padding", 'b-blocks')} values={message[tab.name].padding} onChange={(val) => updateObj('styles', val, "message", tab.name, "padding")} />

                <BoxControl label={__("Margin", 'b-blocks')} values={message[tab.name].margin} onChange={(val) => updateObj('styles', val, "message", tab.name, "margin")} />

                <ColorControl label={__("Color", 'b-blocks')} value={message[tab.name].color.text} onChange={(val) => updateObj('styles', val, "message", tab.name, "color", "text")} />

                <Background label={__("Background", 'b-blocks')} isImage={false} value={message[tab.name].color.bg} onChange={(val) => updateObj('styles', val, "message", tab.name, "color", "bg")} />

                <Typography label={__("Typography", 'b-blocks')} value={message[tab.name].typo} onChange={(val) => updateObj('styles', val, "message", tab.name, "typo")} />

                <BorderBoxControl label={__("Border", 'b-blocks')} value={message[tab.name].border} onChange={(val) => updateObj('styles', val, "message", tab.name, 'border')} />

                <BoxControl className="mt10" label={__('Border Radius')} values={message[tab.name].radius} onChange={val => updateObj('styles', val, "message", tab.name, 'radius')} />
            </>}
        </TabPanel>
    </PanelBody>
};
export default MessageStyles;
