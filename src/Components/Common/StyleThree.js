import { getBackgroundCSS, getBorderBoxCSS, getBoxCSS, getTypoCSS, isValidCSS } from "../../../../bpl-tools/utils/getCSS";
import { btnAlign } from "../../utils/functions";

const StyleThree = ({ attributes, id }) => {
    const { termsConditions, button, password, validation } = attributes;
    const mainSl = `#${id}`;
    const blockSl = `${mainSl} .wp-block-b-blocks-register-form-wrapper`;
    const mainWrapper = `${blockSl} .rgfr-register-form-main-wrapper`;
    const formWrapper = `${mainWrapper} .rgfr-register-form`;
    const formContainer = `${formWrapper} .rgfr-registerForm-container`;
    const formEl = `${formContainer} .rgfr-register-form-wrapper`;
    const checkBoxEl = `${formEl} .rgfr-checkbox-wrapper`;
    const inputWrapper = `${formEl} .rgfr-inputField-wrapper`;
    const inputField = `${inputWrapper} .rgfr-register-input-field`;
    const buttonWrapper = `${formEl} .rgfr-registerFormBtn-wrapper`;
    const signUpButton = `${buttonWrapper} .rgfr-register-loader-wrapper`;
    const signinButton = `${buttonWrapper} .rgfr-signInBtn-wrapper`;
    const successMessageEl = `${formContainer} .rgfr-successMessage`;
    return <style
        dangerouslySetInnerHTML={{
            __html: `
				${getTypoCSS(`${inputField} .rgfr-passStrengthTextWrapper span`, password.passStrengthTxt.typography).styles}
        ${inputField} .rgfr-passStrengthTextWrapper span{
        ${isValidCSS('margin', getBoxCSS(password.passStrengthTxt.desktop.margin))}
        ${isValidCSS('padding', getBoxCSS(password.passStrengthTxt.desktop.padding))}
    }

    ${getTypoCSS(checkBoxEl, termsConditions.typography).styles}

    ${checkBoxEl}{
        ${isValidCSS('margin', getBoxCSS(termsConditions.margin.desktop))}
        ${isValidCSS('padding', getBoxCSS(termsConditions.padding.desktop))}
        ${isValidCSS('color', getBoxCSS(termsConditions.color.text))}
        ${isValidCSS('background', getBoxCSS(termsConditions.color.bg))}
    }
    ${checkBoxEl} :where(a){
        ${isValidCSS('color', termsConditions.color.link)}
    }
    ${checkBoxEl} .container{
        ${isValidCSS('margin', getBoxCSS(termsConditions.checkboxMargin.desktop))}
    }
    ${checkBoxEl} .container input:checked ~ .checkmark {
        ${isValidCSS('background', termsConditions.color.checkbox)}
    }
    ${buttonWrapper}{
        ${isValidCSS('flex-direction', button.signup.desktop.displayAs)}
        align-items: ${button.signup.desktop.displayAs === "column"
                    ? btnAlign(button.signup.desktop.alignment)
                    : "center"
                };
        ${isValidCSS('justify-content', button.signup.desktop.justify)}
    }
    ${signUpButton}{
        ${isValidCSS('margin', getBoxCSS(button.signup.desktop.margin))}
    }
    
    ${getTypoCSS(`${signUpButton} .rgfr-signupBtn`, button.signup.typography).styles}
    ${signUpButton} .rgfr-signupBtn{
        ${isValidCSS('height', button.signup.desktop.height)}
        ${isValidCSS('width', button.signup.desktop.width)}
        ${isValidCSS('padding', getBoxCSS(button.signup.desktop.padding))}
        ${isValidCSS('color', button.signup.normal.color)}
        ${getBackgroundCSS(button.signup.normal.bg)}
        ${getBorderBoxCSS(button.signup.normal.border)}
        ${isValidCSS('border-radius', getBoxCSS(button.signup.normal.radius))}
    }

    ${signUpButton} .rgfr-signupBtn:hover{
        ${isValidCSS('color', button.signup.hover.color)}
        ${getBackgroundCSS(button.signup.hover.bg)};
        ${getBorderBoxCSS(button.signup.hover.border)};
        ${isValidCSS('border-radius', getBoxCSS(button.signup.hover.radius))};
    }
    ${signUpButton} .rgfr-loader{
        right:${button.signup.spinner.position}%;
        ${isValidCSS('color', button.signup.spinner.color)}
    }

    ${getTypoCSS(`${signinButton} a`, button.signin.typography).styles}
    ${signinButton}{
        ${isValidCSS('flex-direction', button.signin.desktop.displayAs)}
        ${button.signin.desktop.displayAs === "row"
                    ? `justify-content:${button.signin.desktop.justify}`
                    : `align-items:${button.signin.desktop.alignment}`
                };
        ${isValidCSS('width', button.signin.desktop.containerWidth)}
    }
    ${signinButton} :where(a){
        ${isValidCSS('width', button.signin.desktop.width)}
        ${isValidCSS('height', button.signin.desktop.height)}
        ${isValidCSS('color', button.signin.normal.color)}
        ${isValidCSS('margin', getBoxCSS(button.signin.desktop.margin))}
        ${isValidCSS('padding', getBoxCSS(button.signin.desktop.padding))}
        ${getBackgroundCSS(button.signin.normal.bg)}
        ${getBorderBoxCSS(button.signin.normal.border)}
        ${isValidCSS('border-radius', getBoxCSS(button.signin.normal.radius))}
    }
    ${signinButton} :where(a):hover{
        ${isValidCSS('color', button.signin.hover.color)}
        ${getBackgroundCSS(button.signin.hover.bg)}
        ${getBorderBoxCSS(button.signin.hover.border)}
        ${isValidCSS('border-radius', getBoxCSS(button.signin.hover.radius))}
    }
    ${successMessageEl} {
        ${isValidCSS('margin', getBoxCSS(validation.success.styles.margin))}
        ${isValidCSS('padding', getBoxCSS(validation.success.styles.padding))}
        ${getBorderBoxCSS(validation.success.styles.border)}
        ${isValidCSS('border-radius', getBoxCSS(validation.success.styles.radius))}
        ${getBackgroundCSS(validation.success.styles.color.bg)}
    }
    ${getTypoCSS(`${successMessageEl} span`, validation.success.styles.typo).styles}
    ${successMessageEl} span{
        ${isValidCSS('color', validation.success.styles.color.text)}
    }
			`.replace(/\s+/g, " ").trim()
        }}
    ></style>
};

export default StyleThree;
