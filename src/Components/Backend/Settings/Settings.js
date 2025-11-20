import { InspectorControls } from "@wordpress/block-editor";
import { TabPanel } from "@wordpress/components";

import { tabController } from "../../../../../bpl-tools/utils/functions";

import Advanced from "../../../../../bpl-tools/Advanced";
import { generalStyleTabs } from "../../../utils/options";
import General from "./General/General";
import Style from "./Style/Style";

const Settings = (props) => {
    const { attributes, setAttributes, isPremium } = props;
    const { advanced } = attributes;
    return  <InspectorControls>
                <div className="bPlInspectorInfo">
                    Need more block like this? Checkout the bundle ➡
                    <a href="https://wordpress.org/plugins/b-blocks" target="_blank" rel="noopener noreferrer">  B Blocks  </a>
                </div>

                <TabPanel className="bPlTabPanel" activeClass="activeTab" tabs={generalStyleTabs} onSelect={tabController}>
                    {(tab) => <>
                        {"general" === tab.name && <General {...props} />}

                        {"style" === tab.name && <Style {...props} />}

                        {"advanced" === tab.name && <Advanced advanced={advanced} onChange={(value) => setAttributes({ advanced: value })} isPremium={isPremium} />}
                    </>}
                </TabPanel>
            </InspectorControls> 
};
export default Settings;
