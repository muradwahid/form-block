const BForm = ({ children,attributes }) => {
	const { form, button } = attributes;
	const { navigation } = button;
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		let errors = [];
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData);
		const fields = Object.keys(data);
		const getErrorEl = (name) => {
			const el = form.querySelector(`.b-blocks-input-field-validation-${name}`);
			if (!el) return;
			const isValid = JSON.parse(el.dataset.iserror);
			if (isValid) {
				el.classList.add('b-blocks-input-field-error-container');
				return name;
			}
		}

		fields.forEach(field => {
			const error = getErrorEl(field);
			error && errors.push(error);
		})

	}
	// console.log("form", attributes, " : ", form);
	
	return <div className="wp-block-b-blocks-form-wrapper">
		<form onSubmit={handleSubmit}>
			{children}
			<div className="b-blocks-form-button-wrapper">
				<button className='b-blocks-form-submitBtn' type="submit">{button.button.text}</button>
				{(navigation.isNavigation &&(navigation.first.text || navigation.second.text)) && <div className="b-blocks-form-button-navigation-wrapper"><p className="b-blocks-form-button-navigation-text">{navigation.first.text}</p> <a className="b-blocks-form-button-navigation-link" href={navigation.second.url}>{navigation.second.text}</a> </div>}
			</div>
		</form>
	</div>
}
export default BForm;