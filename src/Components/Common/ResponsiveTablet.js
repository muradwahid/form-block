import { getBoxCSS, isValidCSS } from "../../../../bpl-tools/utils/getCSS";
import { btnAlign, getBoxCss, headingPosition } from "../../utils/functions";
import { tabBreakpoint } from '../../../../bpl-tools/utils/data';

const ResponsiveTablet = ({ attributes, id }) => {
    const { formHeader, formFields, general, termsConditions, formLabel, fieldIcons, button, password } = attributes;
    const mainSl = `#${id}`;
    const blockSl = `${mainSl} .wp-block-b-blocks-register-form-wrapper`;
    const mainWrapper = `${blockSl} .rgfr-register-form-main-wrapper`;
    const formWrapper = `${mainWrapper} .rgfr-register-form`;
    const formContainer = `${formWrapper} .rgfr-registerForm-container`;
    const formEl = `${formContainer} .rgfr-register-form-wrapper`;
    const checkBoxEl = `${formEl} .rgfr-checkbox-wrapper`;
    const logoWrapper = `${formEl} .rgfr-register-logo-wrapper`;
    const logoEl = `${logoWrapper} .rgrf-register-logo`;
    const headingWrapper = `${logoWrapper} .rgfr-register-heading`;
    const formImage = `${formWrapper} .rgfr-register-image-wrapper`;
    const inputWrapper = `${formEl} .rgfr-inputField-wrapper`;
    const inputField = `${inputWrapper} .rgfr-register-input-field`;
    const labelEl = `${inputWrapper} .rgfr-register-input-label`;
    const fieldsIcon = `${inputField} .rgfr-inputField .rgfr-inputField-icon`;
    const buttonWrapper = `${formEl} .rgfr-registerFormBtn-wrapper`;
    const signUpButton = `${buttonWrapper} .rgfr-register-loader-wrapper`;
    const signinButton = `${buttonWrapper} .rgfr-signInBtn-wrapper`;
    return <style>
        {`
        ${tabBreakpoint}{
        ${mainWrapper}{
            justify-content:${general.containerBox.alignment.tablet};
        }
            ${formWrapper}{
            width:${general.containerBox.width.tablet};
            ${isValidCSS("flex-direction", formHeader.image.img.url ? formHeader.image.position.tablet : "")}
            ${isValidCSS("justify-content", formHeader.image.img.url ? "normal" : "center")}
        }
        ${formContainer}{
            width:${general.formWrapper.width.tablet};
            margin:${getBoxCss(general.formWrapper.margin.tablet)};
            padding:${getBoxCss(general.formWrapper.padding.tablet)};;
        }
        ${formEl}{
            width:${general.form.width.tablet};
            margin:${getBoxCss(general.form.margin.tablet)};
            padding:${getBoxCss(general.form.padding.tablet)};
        }
        ${formImage}{
            margin:${getBoxCss(formHeader.image.margin.tablet)};
            padding:${getBoxCss(formHeader.image.padding.tablet)};
        }
        ${formImage} img {
            height:${formHeader.image.height.tablet};
            width:${formHeader.image.width.tablet};
        }
        ${logoWrapper}{
            ${isValidCSS("flex-direction", formHeader.header.logo.position.tablet)}
            width:${formHeader.header.width.tablet};
            height:${formHeader.header.height.tablet};
            margin:${getBoxCss(formHeader.header.margin.tablet)};
            padding:${getBoxCss(formHeader.header.padding.tablet)};
        }
        ${logoEl} img{
            height:${formHeader.header.logo.height.tablet};
            width:${formHeader.header.logo.width.tablet};
            margin:${getBoxCss(formHeader.header.logo.margin.tablet)};
            padding:${getBoxCss(formHeader.header.logo.padding.tablet)};
        }
        ${headingWrapper}{
            ${isValidCSS("width", headingPosition(formHeader.header.logo.position.tablet) ? '100%' : `calc(100% - ${formHeader.header.logo.width.tablet} + ${formHeader.header.logo.url.url ? "0px" : formHeader.header.logo.width.tablet})`)}
        }
        ${headingWrapper} img{
            object-fit:contain;
            height:${formHeader.header.logo.height.tablet};
            width:${formHeader.header.logo.width.tablet};
            margin:${getBoxCss(formHeader.header.logo.margin.tablet)};
            padding:${getBoxCss(formHeader.header.logo.padding.tablet)};
        }
        ${headingWrapper} h4{
            margin:${getBoxCss(formHeader.header.title.margin.tablet)};
            padding:${getBoxCss(formHeader.header.title.padding.tablet)};
        }
        ${headingWrapper} .rgfr-register-subHeading{
            margin:${getBoxCss(formHeader.header.subTitle.margin.tablet)};
            padding:${getBoxCss(formHeader.header.subTitle.padding.tablet)};
        }
        ${inputField}{
            margin:${getBoxCss(formFields.input.margin.tablet)};
        }
        ${formFields.fields
                .map(
                    (val, i) =>
                        inputField +
                        `.rgfr-width-${i + 1}{
        width:${val.width.tablet};
        }`
                )
                .join(" ")}
        ${labelEl}{
            margin:${getBoxCss(formLabel.margin.tablet)};
            padding:${getBoxCss(formLabel.padding.tablet)};
        }
        ${inputField} .rgfr-inputField input{
            padding-top:${formFields.input.padding.tablet.top};
            padding-left:${formFields.fieldIcons ? `calc(24px + ${formFields.input.padding.tablet.left})` : formFields.input.padding.tablet.left};
        }
        ${fieldsIcon}{
            width:${fieldIcons.icon.iconSize.tablet}px;
            top:${fieldIcons.icon.vertical.tablet}px;
            left:${fieldIcons.icon.horizontal.tablet}px;
        }
        ${inputField} .rgfr-inputField .register-eyeIcon.open{
            width:${fieldIcons.passVisibility.iconSize.tablet}px;
            top:${fieldIcons.passVisibility.vertical.tablet};
            right:${fieldIcons.passVisibility.horizontal.tablet};
        }
        ${inputField} .rgfr-inputField .register-eyeIcon.close{
            width:${fieldIcons.passVisibility.iconSize.tablet}px;
            top:${fieldIcons.passVisibility.vertical.tablet};
            right:${fieldIcons.passVisibility.horizontal.tablet};
        }
        ${inputField} .passLength, .rgfr-passStrengthTextWrapper{
            ${isValidCSS('width', password.container.tablet.width)}
            ${isValidCSS('height', password.container.tablet.height)}
            ${isValidCSS('margin', getBoxCss(password.container.tablet.margin))}
            ${isValidCSS('padding', getBoxCss(password.container.tablet.padding))}
        }
        ${inputField} .passLength .rgfr-strengthMeter{
            ${isValidCSS('width', password.meter.tablet.width)}
            ${isValidCSS('height', password.meter.tablet.height)}
            ${isValidCSS('margin', getBoxCSS(password.meter.tablet.margin))}
            ${isValidCSS('padding', getBoxCSS(password.meter.tablet.padding))}
        }
        ${inputField} .rgfr-passStrengthTextWrapper span{
            ${isValidCSS('margin', getBoxCSS(password.passStrengthTxt.tablet.margin))}
            ${isValidCSS('padding', getBoxCSS(password.passStrengthTxt.tablet.padding))}
        }
        ${checkBoxEl}{
            margin:${getBoxCss(termsConditions.margin.tablet)};
            padding:${getBoxCss(termsConditions.padding.tablet)};
        }
        ${checkBoxEl} .container{
            margin:${getBoxCss(termsConditions.checkboxMargin.tablet)};
        }
        ${buttonWrapper}{
            flex-direction:${button.signup.tablet.displayAs};
            align-items: ${button.signup.tablet.displayAs === "column" ? btnAlign(button.signup.tablet.alignment) : "center"};
            justify-content:${button.signup.tablet.justify};
        }
        ${signUpButton}{
            margin:${getBoxCss(button.signup.tablet.margin)};
        }
        ${signUpButton} .rgfr-signupBtn{
            height:${button.signup.tablet.height};
            width:${button.signup.tablet.width};
            padding:${getBoxCss(button.signup.tablet.padding)};
        }
        ${signinButton}{
            ${isValidCSS('flex-direction', button.signin.tablet.displayAs)}
            ${button.signin.tablet.displayAs === "row" ? `justify-content:${button.signin.tablet.justify}` : `align-items:${button.signin.tablet.alignment}`};
            ${isValidCSS('width', button.signin.tablet.containerWidth)}
        }
        ${signinButton} :where(a){
            ${isValidCSS('width', button.signin.tablet.width)}
            ${isValidCSS('height', button.signin.tablet.height)}
            ${isValidCSS('margin', getBoxCSS(button.signin.tablet.margin))}
            ${isValidCSS('padding', getBoxCSS(button.signin.tablet.padding))}
        }
        }
        ` .replace(/\s+/g, " ")
            .trim()}
    </style>
};

export default ResponsiveTablet;
