import ButtonStyles from "./ButtonStyles";
import FieldIconStyles from "./FieldIconStyles";
import FieldStyles from "./FieldStyles";
import FormLabelStyles from "./FormLabelStyles";
import FormStyle from "./FormStyle";
import GeneralStyles from "./GeneralStyles";
import HeaderStyles from "./HeaderStyles";
import LoginLink from "./LoginLink";
import MessageStyles from "./MessageStyles";
import PasswordStrengthStyles from "./PasswordStrengthStyles";
import TermsConditionStyles from "./TermsConditionStyles";

const Style = (props) => {
    return <>
        <FormStyle {...props} />
        <ButtonStyles {...props} />
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
