import { parse } from "@wordpress/blocks";
import { withDispatch } from "@wordpress/data";
import {blockData} from './data'
const PreSelectFormSkeleton = ({ updateObj, replaceBlock, clientId, handleReplaceForm }) => {

  const handleButtonClick = (content) => {
    const parsedBlock = parse(content);
    replaceBlock(clientId, parsedBlock);
  };


  return <div className='b-blocks-b-form-preselectFormSkeleton-wrapper'>

    <div className="b-blocks-b-form-skeleton-wrapper">
      <div onClick={() => {
        // handleButtonClick(blockData.register)
        handleReplaceForm('register')
        // updateObj('form', 'register', 'formType')
      }}>
      <div className="b-blocks-b-form-skeleton">
        <div className="b-blocks-b-form-skeleton-field"></div>
        <div className="b-blocks-b-form-skeleton-field"></div>
        <div className="b-blocks-b-form-skeleton-field"></div>
        <div className="b-blocks-b-form-skeleton-button-wrapper">
          <div></div>
          <div></div>
        </div>
        </div>
        <p className="b-blocks-b-form-skeleton-form-title">Register Form</p>
      </div>
      <div onClick={() => handleReplaceForm('login')}>
      <div className="b-blocks-b-form-skeleton">
        <div className="b-blocks-b-form-skeleton-field"></div>
        <div className="b-blocks-b-form-skeleton-field"></div>
        <div className="b-blocks-b-form-skeleton-button-wrapper">
          <div></div>
        </div>
      </div>
        <p className="b-blocks-b-form-skeleton-form-title">Login Form</p>
      </div>
    </div>
    <div>

    </div>

      
    </div>
};

export default withDispatch((dispatch) => {
  return {
    replaceBlock: dispatch('core/block-editor').replaceBlock,
  };
})(PreSelectFormSkeleton);
