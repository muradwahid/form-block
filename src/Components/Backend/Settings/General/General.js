import { HelpPanel } from "../../../../../../bpl-tools/Components";
import ButtonContent from './ButtonContent';
import EmailOptionSettings from './EmailOptionSettings';
import FormOptions from "./FormOptions";
import FormOptionSettings from './FormOptionSettings';
import MessageOptions from "./MessageOptions";
import TermsConditionSettings from './TermsConditionSettings';
const General = (props) => {
    const { attributes } = props;
    const { form } = attributes;
    const { formType } = form;
    return <>
        {/* <HelpPanel slug="b-blocks" docsLink="https://bplugins.com/docs/content-slider-block/guides/general" /> */}
        <FormOptions {...props} />
        {/* <FormHeader {...props} />

        <FormFieldSettings {...props} /> */}

        <ButtonContent {...props} />

        {formType !== 'contact' && <FormOptionSettings {...props} />}

        <EmailOptionSettings {...props} />

        {formType === 'register' && <TermsConditionSettings {...props} />}
        
        <MessageOptions {...props} />

        {/* <SocialSignUp {...props} /> */}
{/* 

        <EmailOptionSettings {...props} />

        <TermsConditionSettings {...props} />

        <ValidationSettings {...props} /> */}
    </>
}
export default General;

// className = 'bPlPanelBody' 