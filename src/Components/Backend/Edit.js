import { useEffect, useRef } from "react";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

import useAnimation from "../../../../bpl-tools/hooks/useAnimation";
import { updateAttributes } from '../../../../bpl-tools/utils/functions';
import Style from "../Common/Style";
import Settings from "./Settings/Settings";
import BForm from "../Frontend/BForm";
import { Button } from "../../../../bpl-tools/Components";

const Edit = (props) => {
    const { attributes, setAttributes, clientId} = props;
    const { advanced } = attributes;
    const wrapperRef = useRef();

    const id = `register-form-${clientId}`;
    // useAnimation(wrapperRef.current, advanced.animation);
    const updateObj = updateAttributes(attributes, setAttributes);

    const isPremium = false;
    useEffect(() => {
        setAttributes({clientId})
    }, [clientId])

    const allowedBlocks = ['b-blocks/input-field', 'b-blocks/row'];

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        let errors = [];
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        const fields = Object.keys(data);
        const getErrorEl = (name) => { 
            const el = form.querySelector(`.b-blocks-input-field-validation-${name}`);
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
    return <>
        <Settings {...{ attributes, setAttributes, updateObj, isPremium }} />

        <div {...useBlockProps()}>
            <Style attributes={attributes} id={`block-${clientId}`} isBackend={true} />
                {/* <RegisterForm attributes={attributes} isLoaderShow={true} isBackend={true} nonce={window.wpApiSettings.nonce} /> */}
                {/* <InnerBlocks allowedBlocks={allowedBlocks} renderAppender={() => <InnerBlocks.ButtonBlockAppender />} /> */}
                {/* <form onSubmit={handleSubmit}> */}
                    <BForm attributes={attributes}>
                        <InnerBlocks allowedBlocks={allowedBlocks} renderAppender={() => <InnerBlocks.ButtonBlockAppender />}  />
                    </BForm>
                    
                {/* </form> */}
        </div>
    </>
};
export default Edit;
