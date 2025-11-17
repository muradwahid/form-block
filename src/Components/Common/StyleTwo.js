import { getBackgroundCSS, getBorderBoxCSS, getBorderCSS, getBoxCSS, getTypoCSS, isValidCSS } from "../../../../bpl-tools/utils/getCSS";

const StyleTwo = ({ attributes, id }) => {
    const { formFields, formLabel, fieldIcons, password, validation } = attributes;
    const mainSl = `#${id}`;
    const blockSl = `${mainSl} .wp-block-b-blocks-register-form-wrapper`;
    const mainWrapper = `${blockSl} .rgfr-register-form-main-wrapper`;
    const formWrapper = `${mainWrapper} .rgfr-register-form`;
    const formContainer = `${formWrapper} .rgfr-registerForm-container`;
    const formEl = `${formContainer} .rgfr-register-form-wrapper`;
    const inputWrapper = `${formEl} .rgfr-inputField-wrapper`;
    const inputField = `${inputWrapper} .rgfr-register-input-field`;
    const labelEl = `${inputWrapper} .rgfr-register-input-label`;
    const fieldsIcon = `${inputField} .rgfr-inputField .rgfr-inputField-icon`;
    return <style
        dangerouslySetInnerHTML={{
            __html: `
    ${formFields.fields.map((val, i) => inputField + `.rgfr-width-${i + 1}{ width:${val.width.desktop} }`).join(" ")}
        ${getTypoCSS(labelEl, formLabel.typography).styles}
    ${labelEl}{
        ${isValidCSS('margin', getBoxCSS(formLabel.margin.desktop))}
        ${isValidCSS('padding', getBoxCSS(formLabel.padding.desktop))}
        ${isValidCSS('color', getBoxCSS(formLabel.color.text))}
        ${isValidCSS('background', getBoxCSS(formLabel.color.bg))}
        ${getBorderBoxCSS(formLabel.border)}
        ${isValidCSS('border-radius', getBoxCSS(formLabel.radius))}
    }
    ${getTypoCSS(`${inputField} .rgfr-inputField input`, formFields.input.typography).styles}

    ${inputField} .rgfr-inputField input{
        ${isValidCSS('color', formFields.input.normal.text)}
        ${isValidCSS('background', formFields.input.normal.bg)}
        ${isValidCSS('padding', getBoxCSS(formFields.input.padding.desktop))}
        ${isValidCSS('text-align', formFields.input.txtAlign)}
        ${getBorderCSS(formFields.input.normal.border)}
        ${isValidCSS("border-radius", getBoxCSS(formFields.input.normal.radius))}
    }

    ${getTypoCSS(`${inputField} .rgfr-input-errorMessage`, validation.error.styles.typo).styles}

    ${inputField} .rgfr-input-errorMessage{
        ${isValidCSS("margin", getBoxCSS(validation.error.styles.margin))}
        ${isValidCSS("color", validation.error.styles.color)}
    }

    ${inputField} .rgfr-inputField input::placeholder{
        ${isValidCSS("color", formFields.input.normal.placeholder)}
    }

    ${inputField} .rgfr-inputField input:focus{
        ${isValidCSS("background", formFields.input.focus.bg)}
        ${getBorderCSS(formFields.input.focus.border)};
        ${isValidCSS("border-radius", getBoxCSS(formFields.input.focus.radius))}
    }
    ${inputField} .rgfr-inputField input:focus::placeholder{
        ${isValidCSS("color", formFields.input.focus.placeholder)}
    }
    ${fieldsIcon}{
        width:${fieldIcons.icon.iconSize.desktop}px;
        ${isValidCSS('fill', fieldIcons.icon.color)}
        top:${fieldIcons.icon.vertical.desktop}px;
        left:${fieldIcons.icon.horizontal.desktop}px;
    }

    ${inputField} .rgfr-inputField .register-eyeIcon.open{
        width:${fieldIcons.passVisibility.iconSize.desktop}px;
        color:${fieldIcons.passVisibility.openColor};
        top:${fieldIcons.passVisibility.vertical.desktop};
        right:${fieldIcons.passVisibility.horizontal.desktop};
    }
    ${inputField} .rgfr-inputField .register-eyeIcon.close{
        width:${fieldIcons.passVisibility.iconSize.desktop}px;
        color:${fieldIcons.passVisibility.closeColor};
        top:${fieldIcons.passVisibility.vertical.desktop}px;
        right:${fieldIcons.passVisibility.horizontal.desktop}px;
    }

    ${inputField} .passLength, .rgfr-passStrengthTextWrapper{
        ${isValidCSS('width', password.container.desktop.width)}
        ${isValidCSS('height', password.container.desktop.height)}
        ${isValidCSS('margin', getBoxCSS(password.container.desktop.margin))}
        ${isValidCSS('padding', getBoxCSS(password.container.desktop.padding))}
        ${isValidCSS('border-radius', getBoxCSS(password.container.radius))}
        ${getBorderBoxCSS(password.container.border)}
        ${getBackgroundCSS(password.container.bg)}
    }

    ${inputField} .passLength .rgfr-strengthMeter{
        ${isValidCSS('width', password.meter.desktop.width)}
        ${isValidCSS('height', password.meter.desktop.height)}
        ${isValidCSS('margin', getBoxCSS(password.meter.desktop.margin))}
        ${isValidCSS('padding', getBoxCSS(password.meter.desktop.padding))}
        ${getBorderBoxCSS(password.meter.border)}
        ${isValidCSS('border-radius', getBoxCSS(password.meter.radius))}
    }
    ${Object.keys(password.colors)
                    .map((value) => {
                        return `  ${inputField} .passLength .${value}{
        background:${password.colors[value]};
    }`;
                    })
                    .join("")}
    ${Object.keys(password.colors)
                    .map((value) => {
                        return `  ${inputField} .${value}-text{
        color:${password.colors[value]};
    }`;
                    })
                    .join("")}
		`.replace(/\s+/g, " ").trim(),
        }}
    ></style>
};

export default StyleTwo;
