import { HelpPanel } from "../../../../../../bpl-tools/Components";
import ButtonContent from './ButtonContent';
import EmailOptionSettings from './EmailOptionSettings';
import FormFieldSettings from './FormFieldSettings';
import FormHeader from './FormHeader';
import FormOptions from "./FormOptions";
import FormOptionSettings from './FormOptionSettings';
import MessageOptions from "./MessageOptions";
import SocialSignUp from './SocialSignUp';
import TermsConditionSettings from './TermsConditionSettings';
import ValidationSettings from './ValidationSettings';
const General = (props) => {
    const { attributes } = props;
    const { form } = attributes;
    const { formType } = form;
    return <>
        <HelpPanel slug="b-blocks" docsLink="https://bplugins.com/docs/content-slider-block/guides/general" />
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