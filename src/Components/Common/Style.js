import generateCSS from '../../../../bpl-tools/Advanced/generateCSS';
import { getBackgroundCSS, getBorderBoxCSS, getBoxCSS, getMultiShadowCSS, getTypoCSS, isValidCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id, isBackend = false }) => {
	const { styles, termsConditions } = attributes;
	const { form, buttonStyle, message } = styles;
	const { container, button, navigation } = buttonStyle;
	const { first, second } = navigation;
	const { success, error } = message;

	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .b-blocks-b-form-wrapper`;
	const formSl = `${blockSl} .b-blocks-b-form-container`;
	const buttonContainerSl = `${formSl} .b-blocks-form-button-wrapper`;
	const buttonSl = `${buttonContainerSl} .b-blocks-form-submitBtn`;
	const navigationSl = `${buttonContainerSl} .b-blocks-form-button-navigation-wrapper`;
	const navigationFirstSl = `${navigationSl} .b-blocks-form-button-navigation-text`;
	const navigationSecondSl = `${navigationSl} .b-blocks-form-button-navigation-link`;
	const checkBoxSl = `${formSl} .b-blocks-b-form-termsConditionWrapper`;
	const successSl = `${blockSl} .b-blocks-b-form-success-message`;
	const errorSl = `${blockSl} .b-blocks-b-form-error-message`;

	const childFileSl = isBackend ? '.block-editor-inner-blocks .block-editor-block-list__layout' : `${mainSl} .b-blocks-b-form-child-field-wrapper`;

	const mainAlign = ` ${form.align === 'left' ? 'justify-content: flex-start' : form.align === 'center' ? 'justify-content: center' : form.align === 'right' ?'justify-content: flex-end':''}
	`

	return <>
		<style dangerouslySetInnerHTML={{ __html: ` ${generateCSS(id, attributes.advanced, isBackend)}`, }} ></style>

		<style dangerouslySetInnerHTML={{
			__html: `
			${getTypoCSS('', button.typography).googleFontLink}
			${getTypoCSS('', first.typography).googleFontLink}
			${getTypoCSS('', second.typography).googleFontLink}
			${getTypoCSS('', termsConditions.typography).googleFontLink}
			${getTypoCSS('', success.typo).googleFontLink}
			${getTypoCSS('', error.typo).googleFontLink}

			${getTypoCSS(navigationFirstSl, first.typography).styles}
			${getTypoCSS(navigationSecondSl, second.typography).styles}
			${getTypoCSS(buttonSl, button.typography).styles}
			${getTypoCSS(checkBoxSl, termsConditions.typography).styles}
			${getTypoCSS(successSl, success.typo).styles}
			${getTypoCSS(errorSl, error.typo).styles}

			${mainSl}{
				${form.width.type === 'custom' ? mainAlign:''}
			}

			${blockSl}{
				${getBackgroundCSS(form.bg)}
				${form.width.type === 'custom' ? isValidCSS('width', form.width.desktop) : ''}
				${isValidCSS('margin', getBoxCSS(form.desktop.margin))}
				${isValidCSS('padding', getBoxCSS(form.desktop.padding))}
				${getBorderBoxCSS(form.border)}
				${isValidCSS('border-radius', getBoxCSS(form.desktop.radius))}
				${isValidCSS('box-shadow', getMultiShadowCSS(form.shadow))}
			}

			${childFileSl}{
				display:grid;
				${isValidCSS('gap', form.desktop.fieldGap ? form.desktop.fieldGap+'px':'')}
			}
			
			${buttonContainerSl}{
				${isValidCSS('margin', getBoxCSS(container.desktop.margin))}
				flex-direction:${container.desktop.display};
				${container.desktop.display === 'row' ? 'align-items: center;' : `align-items:${container.desktop.align};`}
				${isValidCSS('justify-content',container.desktop.justify)}
				${container.desktop.display === 'row'? '' : isValidCSS('gap',container.desktop.gap)}
			}

			${buttonSl}{
					${isValidCSS('margin',getBoxCSS(button.desktop.margin))}
					${isValidCSS('padding', getBoxCSS(button.desktop.padding))}
					${isValidCSS('color', button.normal.color)}
					${getBackgroundCSS(button.normal.bg)}
					${getBorderBoxCSS(button.normal.desktop.border)}
					${isValidCSS('border-radius', getBoxCSS(button.normal.desktop.radius))}
					${isValidCSS('box-shadow', getMultiShadowCSS(button.normal.desktop.shadow))}
			}

			${buttonSl}:hover{
					${isValidCSS('color', button.hover.color)}
					${getBackgroundCSS(button.hover.bg)}
					${getBorderBoxCSS(button.hover.desktop.border)}
					${isValidCSS('border-radius', getBoxCSS(button.hover.desktop.radius))}
					${isValidCSS('box-shadow', getMultiShadowCSS(button.hover.desktop.shadow))}
			}

			${navigationFirstSl}{
				${isValidCSS('color', first.color)}
				${isValidCSS('margin', getBoxCSS(first.desktop.margin))}
			}

			${navigationSecondSl}{
				${isValidCSS('color', second.color)}
				${isValidCSS('margin', getBoxCSS(second.desktop.margin))}
			}

			${checkBoxSl}{
				${isValidCSS('margin', getBoxCSS(termsConditions.margin.desktop))}
        ${isValidCSS('padding', getBoxCSS(termsConditions.padding.desktop))}
        ${isValidCSS('color', getBoxCSS(termsConditions.color.text))}
        ${isValidCSS('background', getBoxCSS(termsConditions.color.bg))}
			}

			${checkBoxSl} .b-blocks-b-form-checkbox-container{
					${isValidCSS('margin', getBoxCSS(termsConditions.checkboxMargin.desktop))}
			}

			${checkBoxSl} .b-blocks-b-blocks-termsConditionWrapper-link{
				${isValidCSS('color', termsConditions.color.link)}
			}

			${checkBoxSl} .b-blocks-b-form-checkbox-container>input:checked ~ .b-blocks-b-form-checkmark {
				${isValidCSS('background', termsConditions.color.checkbox)}
			}

			${successSl}{
				${isValidCSS('margin',getBoxCSS(success.margin))}
				${isValidCSS('padding', getBoxCSS(success.padding))}
				${isValidCSS('color', success.color.text)}
				${getBackgroundCSS(success.color.bg)}
				${getBorderBoxCSS(success.border)}
				${isValidCSS('border-radius', getBoxCSS(success.radius))}
			}
			${errorSl}{
				${isValidCSS('margin',getBoxCSS(error.margin))}
				${isValidCSS('padding', getBoxCSS(error.padding))}
				${isValidCSS('color', error.color.text)}
				${getBackgroundCSS(error.color.bg)}
				${getBorderBoxCSS(error.border)}
				${isValidCSS('border-radius', getBoxCSS(error.radius))}
			}

	`.replace(/\s+/g, ' ').trim(),
		}}/>
	</>;
};

export default Style;
