import { Flex, PanelBody, TextControl, TextareaControl } from "@wordpress/components";
import { withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";

import { BtnGroup, Device, Label, MediaArea } from "../../../../../../bpl-tools/Components";

import { imagePositionOptions, logoPositionOptions } from '../../../../utils/options';

const FormHeader = ({ attributes, device, updateObj }) => {
    const { formHeader } = attributes;

    return <PanelBody className="bPlPanelBody" title={__("Form Header", "b-blocks")} initialOpen={true} >

        <Label>Form Header Image</Label>
        <MediaArea label={__("Choose Image", "b-blocks")} value={formHeader.image.img} width="100%" height="100%" onChange={(value) => updateObj('formHeader', { id: value.id, url: value.url, alt: value.alt, title: value.title }, 'image', 'img')} default="" />

        <Flex className="mt15 mb10" align="center" gap={5} justify="start">
            <Label className="mt0 mb0">{__("Image Position", "b-blocks")}</Label>
            <Device />
        </Flex>
        <BtnGroup options={imagePositionOptions(device)} value={formHeader.image.position[device]} onChange={(value) => updateObj('formHeader', value, 'image', 'position', device)} isIcon={true} />

        <hr />

        <Label>{__('Form Header Logo', 'b-blocks')}</Label>
        <MediaArea label={__("Choose Logo", "b-blocks")} value={formHeader.header.logo.url} width="100%" height="100%" onChange={(value) => updateObj('formHeader', { id: value.id, url: value.url, alt: value.alt, title: value.title }, 'header', 'logo', 'url')} />

        <Flex className="mt15 mb10" align="center" gap={5} justify="start">
            <Label className="mt0 mb0">{__("Logo Position", "b-blocks")}</Label>
            <Device />
        </Flex>
        <BtnGroup labelPosition="top" options={logoPositionOptions} value={formHeader.header.logo.position[device]} onChange={(value) => updateObj('formHeader', value, 'header', 'logo', 'position', device)} isIcon={true} size='default' />
        <hr />

        <TextControl label={__("Form Title", "b-blocks")} value={formHeader.header.title.text} onChange={(value) => updateObj('formHeader', value, 'header', 'title', 'text')} placeholder="Create a New Account" />

        <TextareaControl label={__("Form Sub Title", "b-blocks")} value={formHeader.header.subTitle.text} onChange={(value) => updateObj('formHeader', value, 'header', 'subTitle', 'text')} placeholder="Register form sub title." />

    </PanelBody>
};
export default withSelect((select) => {
    const { getDeviceType } = select("core/editor");
    return {
        device: getDeviceType()?.toLowerCase(),
    };
})(FormHeader);
