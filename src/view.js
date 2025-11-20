import { createRoot } from 'react-dom/client';

import './style.scss';
import Style from './Components/Common/Style';
import BForm from './Components/Frontend/BForm';
import Frontend from './Components/Frontend/Frontend';

document.addEventListener('DOMContentLoaded', () => {
	const bFormEls = document.querySelectorAll('.wp-block-b-blocks-b-form');
	bFormEls.forEach(bFormEl => {
    const attributes = JSON.parse(bFormEl.dataset.attributes);
    const content =
      bFormEl.querySelector('template#bFormPhpGetContent');

    // const content = JSON.parse(bFormEl.dataset.content);
		createRoot(bFormEl).render(<>
			<Style attributes={attributes} id={bFormEl.id} />
      <Frontend attributes={attributes} content={content} />
		</>);

		bFormEl?.removeAttribute('data-attributes');
	});
});