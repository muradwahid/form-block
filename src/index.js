import { registerBlockType } from '@wordpress/blocks';

import './editor.scss';
import metadata from './block.json';
import Edit from './Components/Backend/Edit';
import { blockIcon } from './utils/icons';
import Frontend from './Components/Frontend/Frontend';
// import { InnerBlocks } from '@wordpress/block-editor';
// import BForm from './Components/Frontend/BForm';
import './style.scss'

registerBlockType(metadata, {
	icon: blockIcon,
	edit: Edit,
	// save:Frontend,
});