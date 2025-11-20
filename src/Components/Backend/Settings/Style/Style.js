import ButtonStyles from "./ButtonStyles";
import FormStyle from "./FormStyle";
import MessageStyles from "./MessageStyles";
import TermsConditionStyles from "./TermsConditionStyles";

const Style = (props) => {
    const { attributes } = props;
    const { termsConditions, form } = attributes;
    return <>
        <FormStyle {...props} />
        <ButtonStyles {...props} />
        {(termsConditions.show && form.formType === 'register') && <TermsConditionStyles {...props} />}
        <MessageStyles {...props} />
        {/* <GeneralStyles {...props} />
        <HeaderStyles {...props} />
        <FieldStyles {...props} />
        <FormLabelStyles {...props} />
        <FieldIconStyles {...props} />
        <TermsConditionStyles {...props} />
        <ButtonStyles {...props} />
        <LoginLink {...props} />
        <MessageStyles {...props} />
        <PasswordStrengthStyles {...props} /> */}
    </>
};
export default Style;
