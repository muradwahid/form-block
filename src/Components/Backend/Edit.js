import { useEffect, useRef } from "react";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import { useSelect, useDispatch, withSelect } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';

// import useAnimation from "../../../../bpl-tools/hooks/useAnimation";
import { updateAttributes } from '../../../../bpl-tools/utils/functions';
import Style from "../Common/Style";
import Settings from "./Settings/Settings";
import BForm from "../Frontend/BForm";
// import { Button } from "../../../../bpl-tools/Components";
import PreSelectFormSkeleton from "../Common/PreSelectFormSkeleton";
import { MY_TEMPLATE } from "../../utils/templates";
// import PreSelectFormSkeleton from "../Common/PreSelectFormSkeleton";

const Edit = (props) => {
    const { attributes, setAttributes, clientId, device} = props;
    const { form,button } = attributes;

    const { replaceInnerBlocks } = useDispatch('core/block-editor');

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



    const childBlocks = useSelect(
        (select) => select('core/block-editor').getBlocks(props.clientId),
        [props.clientId]
    );
    const handleFormTypeAttr = (type) => {
        const login = {
            form: { ...form, formType: 'login' },
            button: { ...button, navigation: { ...button.navigation, first: { ...button.navigation.first, text: 'Not registered yet?' }, second: { ...button.navigation.second, text: "Create an Account" } } }
        }
        const register = {
            form: { ...form, formType: 'register' },
            button: { ...button, navigation: { ...button.navigation, first: { ...button.navigation.first, text: 'Already have an account?' }, second: { ...button.navigation.second, text: "Sign In" } } }
        }
        if (type === 'register') {
            setAttributes(register);
        } else if (type === 'login') {
            setAttributes(login);
        }
    }


    const handleReplaceForm = (type) => {
        handleFormTypeAttr(type)
        const template = MY_TEMPLATE[type];
        const newBlocks = template.map(block => {
            return createBlock(block.name, block.attributes || {});
        });

        replaceInnerBlocks(clientId, newBlocks, false);
    }


    return <>
        <Settings {...{ attributes, setAttributes, updateObj, isPremium, device, clientId, handleReplaceForm }} />

        <div {...useBlockProps()}>
            {
                // form.formType !== '' &&
                <Style attributes={attributes} id={`block-${clientId}`} isBackend={true} />}
            {form.formType === '' && <PreSelectFormSkeleton updateObj={updateObj} clientId={clientId} handleReplaceForm={handleReplaceForm} />}
                {/* <RegisterForm attributes={attributes} isLoaderShow={true} isBackend={true} nonce={window.wpApiSettings.nonce} /> */}
                {/* <InnerBlocks allowedBlocks={allowedBlocks} renderAppender={() => <InnerBlocks.ButtonBlockAppender />} /> */}
                {/* <form onSubmit={handleSubmit}> */}
            {form.formType !== '' && <BForm attributes={attributes}>
                <div className="b-blocks-b-form-child-field-wrapper">
                    <InnerBlocks
                        allowedBlocks={allowedBlocks}
                        templateLock={false}
                        renderAppender={() => <InnerBlocks.ButtonBlockAppender />} />
                </div>
                    </BForm>}
                    
                {/* </form> */}
        </div>
    </>
};
export default withSelect((select) => {
    const { getDeviceType } = select('core/editor');
    return {
        device: getDeviceType()?.toLowerCase(),
    };
})(Edit);