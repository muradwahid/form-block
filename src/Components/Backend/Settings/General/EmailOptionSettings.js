import { PanelBody, SelectControl, TabPanel, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { Label, TinyEditor } from "../../../../../../bpl-tools/Components";
import { tabController } from "../../../../../../bpl-tools/utils/functions";

const EmailOptionSettings = ({ attributes, updateObj }) => {
    const { emailOptions } = attributes;
    return <PanelBody className="bPlPanelBody" title={__("Register Email Options", "b-blocks")} initialOpen={false} >
        <TabPanel className="bPlTabPanel small" activeClass="activeTab" tabs={[{ title: "User", name: "user" }, { title: "Admin", name: "admin" }]} onSelect={tabController}>
            {tab => <>
                <Label>{__("Email Template Type", "b-blocks")}</Label>
                <SelectControl options={[{ label: "WordPress Default", value: "default" }, { label: "Custom", value: "custom" }]} value={emailOptions[tab.name].type} onChange={(value) => updateObj('emailOptions', value, tab.name, 'type')} />

                {emailOptions[tab.name].type === "custom" && <>
                    <TextControl label={__("Email Subject", "b-blocks")} value={emailOptions[tab.name].mail.subject} onChange={(value) => updateObj('emailOptions', value, tab.name, 'mail', 'subject')} />

                    <Label>{__("Email Message", "b-blocks")}</Label>
                    <TinyEditor value={emailOptions[tab.name].mail.message} onChange={(value) => updateObj('emailOptions', value, tab.name, 'mail', 'message')} />
                    <SelectControl className='mt10' label={__("Email Content Type", "b-blocks")} labelPosition='edge' options={[{ label: "HTML", value: "html" }, { label: "Plain", value: "plain" },]} value={emailOptions[tab.name].messageType} onChange={(value) => updateObj('emailOptions', value, tab.name, 'messageType')} />
                </>}
            </>}
        </TabPanel>

    </PanelBody>
};

export default EmailOptionSettings;
