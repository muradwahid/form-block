import { getBoxCSS, isValidCSS } from "../../../../bpl-tools/utils/getCSS";
import { btnAlign, headingPosition } from "../../utils/functions";
import { mobileBreakpoint } from '../../../../bpl-tools/utils/data';

const ResponsiveMobile = ({ attributes, id }) => {
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
    return  <style
            dangerouslySetInnerHTML={{
                __html: `
		${mobileBreakpoint}{
        ${mainWrapper}{
        justify-content:${general.containerBox.alignment.mobile};
        }
        ${formWrapper}{
        ${isValidCSS("width", general.containerBox.width.mobile)}
        ${isValidCSS("flex-direction", formHeader.image.img.url ? formHeader.image.position.mobile : "")}
        ${isValidCSS("justify-content", formHeader.image.img.url ? "normal" : "center")}
    }
        ${formContainer}{
            width:${general.formWrapper.width.mobile};
            margin:${getBoxCSS(general.formWrapper.margin.mobile)};
            padding:${getBoxCSS(general.formWrapper.padding.mobile)};
        }
        ${formEl}{
            width:${general.form.width.mobile};
            margin:${getBoxCSS(general.form.margin.mobile)};
            padding:${getBoxCSS(general.form.padding.mobile)};
        }
        ${formImage}{
            margin:${getBoxCSS(formHeader.image.margin.mobile)};
            padding:${getBoxCSS(formHeader.image.padding.mobile)};
        }
        ${formImage} img {
            height:${formHeader.image.height.mobile};
            width:${formHeader.image.width.mobile};
        }
        ${logoWrapper}{
            ${isValidCSS("flex-direction", formHeader.header.logo.position.mobile)}
            width:${formHeader.header.width.mobile};
            height:${formHeader.header.height.mobile};
            margin:${getBoxCSS(formHeader.header.margin.mobile)};
            padding:${getBoxCSS(formHeader.header.padding.mobile)};
        }
        ${logoEl} img{
            height:${formHeader.header.logo.height.mobile};
            width:${formHeader.header.logo.width.mobile};
            margin:${getBoxCSS(formHeader.header.logo.margin.mobile)};
            padding:${getBoxCSS(formHeader.header.logo.padding.mobile)};
        }
        ${headingWrapper}{
            ${isValidCSS("width", headingPosition(formHeader.header.logo.position.mobile) ? '100%' : `calc(100% - ${formHeader.header.logo.width.mobile} + ${formHeader.header.logo.url.url ? "0px" : formHeader.header.logo.width.mobile})`)}
        }
        ${headingWrapper} img{
            object-fit:contain;
            height:${formHeader.header.logo.height.mobile};
            width:${formHeader.header.logo.width.mobile};
            margin:${getBoxCSS(formHeader.header.logo.margin.mobile)};
            padding:${getBoxCSS(formHeader.header.logo.padding.mobile)};
        }
        ${headingWrapper} h4{
            margin:${getBoxCSS(formHeader.header.title.margin.mobile)};
            padding:${getBoxCSS(formHeader.header.title.padding.mobile)};
        }
        ${headingWrapper} .rgfr-register-subHeading{
            margin:${getBoxCSS(formHeader.header.subTitle.margin.mobile)};
            padding:${getBoxCSS(formHeader.header.subTitle.padding.mobile)};
        }
        ${inputField}{
            margin:${getBoxCSS(formFields.input.margin.mobile)};
        }
        ${formFields.fields.map( (val, i) => inputField + `.rgfr-width-${i + 1}{
            width:${val.width.mobile};
        }` ).join(" ")}
        ${labelEl}{
            margin:${getBoxCSS(formLabel.margin.mobile)};
            padding:${getBoxCSS(formLabel.padding.mobile)};
        }
        ${inputField} .rgfr-inputField input{
            padding-top:${formFields.input.padding.mobile.top};
            padding-left:${formFields.fieldIcons ? `calc(24px + ${formFields.input.padding.mobile.left})` : formFields.input.padding.mobile.left};
        }
        ${fieldsIcon}{
            width:${fieldIcons.icon.iconSize.mobile}px;
            top:${fieldIcons.icon.vertical.mobile}px;
            left:${fieldIcons.icon.horizontal.mobile}px;
        }
        ${inputField} .rgfr-inputField .register-eyeIcon.open{
            width:${fieldIcons.passVisibility.iconSize.mobile}px;
            top:${fieldIcons.passVisibility.vertical.mobile};
            right:${fieldIcons.passVisibility.horizontal.mobile};
        }
        ${inputField} .rgfr-inputField .register-eyeIcon.close{
            width:${fieldIcons.passVisibility.iconSize.mobile}px;
            top:${fieldIcons.passVisibility.vertical.mobile};
            right:${fieldIcons.passVisibility.horizontal.mobile};
        }
        ${inputField} .passLength, .rgfr-passStrengthTextWrapper{
            ${isValidCSS('width', password.container.mobile.width)}
            ${isValidCSS('height', password.container.mobile.height)}
            ${isValidCSS('margin', getBoxCSS(password.container.mobile.margin))}
            ${isValidCSS('padding', getBoxCSS(password.container.mobile.padding))}
        }
        ${inputField} .passLength .rgfr-strengthMeter{
            ${isValidCSS('width', password.meter.mobile.width)}
            ${isValidCSS('height', password.meter.mobile.height)}
            ${isValidCSS('margin', getBoxCSS(password.meter.mobile.margin))}
            ${isValidCSS('padding', getBoxCSS(password.meter.mobile.padding))}
        }
        ${inputField} .rgfr-passStrengthTextWrapper span{
            ${isValidCSS('margin', getBoxCSS(password.passStrengthTxt.mobile.margin))}
            ${isValidCSS('padding', getBoxCSS(password.passStrengthTxt.mobile.padding))}
        }
        ${checkBoxEl}{
            margin:${getBoxCSS(termsConditions.margin.mobile)};
            padding:${getBoxCSS(termsConditions.padding.mobile)};
        }
        ${checkBoxEl} .container{
            margin:${getBoxCSS(termsConditions.checkboxMargin.mobile)};
        }
        ${buttonWrapper}{
            flex-direction:${button.signup.mobile.displayAs};
            align-items: ${button.signup.mobile.displayAs === "column" ? btnAlign(button.signup.mobile.alignment) : "center"};
            justify-content:${button.signup.mobile.justify};
        }
        ${signUpButton}{
            margin:${getBoxCSS(button.signup.mobile.margin)};
        }
        ${signUpButton} .rgfr-signupBtn{
            height:${button.signup.mobile.height};
            width:${button.signup.mobile.width};
            padding:${getBoxCSS(button.signup.mobile.padding)};
        }
        ${signinButton}{
            flex-direction:${button.signin.mobile.displayAs};
            ${button.signin.mobile.displayAs === "row" ? `justify-content:${button.signin.mobile.justify}` : `align-items:${button.signin.mobile.alignment}`};
            ${isValidCSS('width', button.signin.mobile.containerWidth)}
        }
        ${signinButton} :where(a){
            ${isValidCSS('width', button.signin.mobile.width)}
            ${isValidCSS('height', button.signin.mobile.height)}
            ${isValidCSS('margin', getBoxCSS(button.signin.mobile.margin))}
            ${isValidCSS('padding', getBoxCSS(button.signin.mobile.padding))}
        }
        }
			`,
            }}
        ></style> 
};

export default ResponsiveMobile;
