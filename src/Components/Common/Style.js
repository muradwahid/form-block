import generateCSS from '../../../../bpl-tools/Advanced/generateCSS';
import { getBackgroundCSS, getBorderBoxCSS, getBorderCSS, getBoxCSS, getMultiShadowCSS, getTypoCSS, isValidCSS } from '../../../../bpl-tools/utils/getCSS';

import ResponsiveMobile from './ResponsiveMobile';
import ResponsiveTablet from './ResponsiveTablet';
import StyleThree from './StyleThree';
import StyleTwo from './StyleTwo';
import { headingPosition } from '../../utils/functions';

const Style = ({ attributes, id, isBackend = false }) => {
	const { formHeader, formFields, general, termsConditions, formLabel, button, validation } = attributes;
	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .wp-block-b-blocks-register-form-wrapper`;
	const mainWrapper = `${blockSl} .rgfr-register-form-main-wrapper`;
	const formWrapper = `${mainWrapper} .rgfr-register-form`;
	const formContainer = `${formWrapper} .rgfr-registerForm-container`;
	const formEl = `${formContainer} .rgfr-register-form-wrapper`;
	const inputWrapper = `${formEl} .rgfr-inputField-wrapper`;
	const inputField = `${inputWrapper} .rgfr-register-input-field`;
	const logoWrapper = `${formEl} .rgfr-register-logo-wrapper`;
	const logoEl = `${logoWrapper} .rgrf-register-logo`;
	const headingWrapper = `${logoWrapper} .rgfr-register-heading`;
	const formImage = `${formWrapper} .rgfr-register-image-wrapper`;

	return <>
		<style dangerouslySetInnerHTML={{ __html: ` ${generateCSS(id, attributes.advanced, isBackend)} `, }} ></style>

		<style dangerouslySetInnerHTML={{
			__html: `
		${getTypoCSS('', formHeader.header.title.typography)?.googleFontLink}
		${getTypoCSS('', formHeader.header.subTitle.typography)?.googleFontLink}
		${getTypoCSS('', formFields.input.typography)?.googleFontLink}
		${getTypoCSS('', formLabel.typography)?.googleFontLink}
		${getTypoCSS('', termsConditions.typography)?.googleFontLink}
		${getTypoCSS('', button.signup.typography)?.googleFontLink}
		${getTypoCSS('', button.signin.typography)?.googleFontLink}
		${getTypoCSS('', validation.success.styles.typo)?.googleFontLink}
		${getTypoCSS('', validation.error.styles.typo)?.googleFontLink}
	${mainWrapper}{
		${isValidCSS('justify-content', getBoxCSS(general.containerBox.alignment.desktop))}
	} 
	${formWrapper}{
		${isValidCSS('width', general.containerBox.width.desktop)}
		${formHeader.image.img.url ? isValidCSS('flex-direction', formHeader.image.position.desktop) : ''}
		${isValidCSS('justify-content', formHeader.image.img.url ? 'normal' : 'center')}
	}
	${formContainer}{
		${isValidCSS('width', general.formWrapper.width.desktop)}
		${isValidCSS('margin', getBoxCSS(general.formWrapper.margin.desktop))}
		${isValidCSS('padding', getBoxCSS(general.formWrapper.padding.desktop))}
		${getBorderCSS(general.formWrapper.border)}
		${getBackgroundCSS(general.formWrapper.bg)};
		${isValidCSS('box-shadow', getMultiShadowCSS(general.formWrapper.shadow))}
	}
	${formEl}{
		${isValidCSS('width', general.form.width.desktop)}
		${isValidCSS('margin', getBoxCSS(general.form.margin.desktop))}
		${isValidCSS('padding', getBoxCSS(general.form.padding.desktop))}
		${getBorderCSS(general.form.border)}
		${getBackgroundCSS(general.form.bg)}
		${isValidCSS('box-shadow', getMultiShadowCSS(general.form.shadow))}
	}
	
	${formImage}{
		${isValidCSS('margin', getBoxCSS(formHeader.image.margin.desktop))}
		${isValidCSS('padding', getBoxCSS(formHeader.image.padding.desktop))}
		${getBorderBoxCSS(formHeader.image.border)}
		${isValidCSS('border-radius', getBoxCSS(formHeader.image.radius))}
	}
	${formImage} img {
		${isValidCSS('height', formHeader.image.height.desktop)}
		${isValidCSS('width', formHeader.image.width.desktop)}
	}
	${logoWrapper}{
		${isValidCSS('flex-direction', formHeader.header.logo.position.desktop)}
		${isValidCSS('width', formHeader.header.width.desktop)}
		${isValidCSS('height', formHeader.header.height.desktop)}
		${isValidCSS('margin', getBoxCSS(formHeader.header.margin.desktop))}
		${isValidCSS('padding', getBoxCSS(formHeader.header.padding.desktop))}
		${getBorderBoxCSS(formHeader.header.border)}
		${isValidCSS('border-radius', getBoxCSS(formHeader.header.radius))}
		${getBackgroundCSS(formHeader.header.bg)}
	}
	${logoEl} img{
		${isValidCSS('height', formHeader.header.logo.height.desktop)}
		${isValidCSS('width', formHeader.header.logo.width.desktop)}
		${isValidCSS('margin', getBoxCSS(formHeader.header.logo.margin.desktop))}
		${isValidCSS('padding', getBoxCSS(formHeader.header.logo.padding.desktop))}
		${getBorderBoxCSS(formHeader.header.logo.border)}
		${isValidCSS('border-radius', getBoxCSS(formHeader.header.logo.radius))}
		${isValidCSS('box-shadow', getMultiShadowCSS(formHeader.header.logo.shadow))}
	}
	${headingWrapper}{
		${isValidCSS('width', headingPosition(formHeader.header.logo.position.desktop) ? '100%' : `calc(100% - ${formHeader.header.logo.width.desktop} + ${formHeader.header.logo.url.url ? '0px' : formHeader.header.logo.width.desktop})`)}
	}

		${getTypoCSS(`${headingWrapper} h4`, formHeader.header.title.typography).styles}
		${headingWrapper} h4{
		${isValidCSS('margin', getBoxCSS(formHeader.header.title.margin.desktop))}
		${isValidCSS('padding', getBoxCSS(formHeader.header.title.padding.desktop))}
		${isValidCSS('color', formHeader.header.title.color)}
		${getBackgroundCSS(formHeader.header.title.bg)}
		${getBorderBoxCSS(formHeader.header.title.border)}
		${isValidCSS('border-radius', getBoxCSS(formHeader.header.title.radius))}
	}

		${getTypoCSS(`${headingWrapper} .rgfr-register-subHeading`, formHeader.header.subTitle.typography).styles}
		${headingWrapper} .rgfr-register-subHeading{
		${isValidCSS('margin', getBoxCSS(formHeader.header.subTitle.margin.desktop))}
		${isValidCSS('padding', getBoxCSS(formHeader.header.subTitle.padding.desktop))}
		${isValidCSS('color', formHeader.header.subTitle.color)}
		${getBackgroundCSS(formHeader.header.subTitle.bg)}
		${getBorderBoxCSS(formHeader.header.subTitle.border)}
		${isValidCSS('border-radius', getBoxCSS(formHeader.header.subTitle.radius))}
	}

	${inputField}{
		${isValidCSS('margin', getBoxCSS(formFields.input.margin.desktop))}
	}

	`.replace(/\s+/g, ' ').trim(),
		}}></style>
		<StyleTwo {...{ attributes, id }} />
		<StyleThree {...{ attributes, id }} />
		<ResponsiveTablet {...{ attributes, id }} />
		<ResponsiveMobile {...{ attributes, id }} />
	</>;
};

export default Style;
