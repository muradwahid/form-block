import BForm from './BForm';

const Frontend = (props) => {
  const { attributes, content } = props;
// console.log(content);
  // console.log(JSON.parse(decodeWpEscapedHtml(content)));
  return <BForm attributes={attributes} isFrontend={true} content={content}>
          <div className="b-blocks-b-form-child-field-wrapper" dangerouslySetInnerHTML={{ __html: content }}/>
      </BForm>
};

export default Frontend;