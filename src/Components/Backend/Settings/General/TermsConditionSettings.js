import { __ } from "@wordpress/i18n";
import { PanelBody, TextControl, ToggleControl } from "@wordpress/components";

import { webUrl } from "../../../../utils/functions";

const TermsConditionSettings = ({ attributes, updateObj }) => {
    const { termsConditions } = attributes;
    return <PanelBody className="bPlPanelBody" title={__("Terms & Conditions", "b-blocks")} initialOpen={false} >
        <ToggleControl label={__("Enforce Terms & Conditions", "b-blocks")} checked={termsConditions.show} value={termsConditions.show} onChange={(value) => updateObj('termsConditions', value, 'show')} />

        {termsConditions.show && <>
            <TextControl className='mt10' label={__("First label", "b-blocks")} value={termsConditions.label.first} onChange={(val) => updateObj('termsConditions', val, 'label', 'first')} />

            <TextControl className='mt10' label={__("Second label (Second Label is linkable)", "b-blocks")} value={termsConditions.label.second} onChange={(val) => updateObj('termsConditions', val, 'label', 'second')} />

            <TextControl className='mt10' label={__("Terms & Conditions URL", "b-blocks")} value={termsConditions.url} placeholder={webUrl} onChange={(val) => updateObj('termsConditions', val, 'url')} />
        </>}
    </PanelBody>
};

export default TermsConditionSettings;
