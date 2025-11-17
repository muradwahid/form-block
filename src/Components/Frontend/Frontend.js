import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import BForm from './BForm';

const Frontend = (props) => {
  const { attributes } = props;
  const { clientId } = attributes;

  return (
    <div {...useBlockProps.save()} id={`b-form-${clientId}`}>
      <BForm attributes={attributes} id={`b-form-${clientId}`}>
        <InnerBlocks.Content />
      </BForm>
    </div>
  );
};

export default Frontend;