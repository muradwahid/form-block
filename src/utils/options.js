import { __ } from '@wordpress/i18n';
import { alignCenter, alignLeft, alignRight, bottomIcon, leftIcon, rightIcon, topIcon } from './icons';

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'b-blocks') },
	{ name: 'style', title: __('Style', 'b-blocks') }
];

export const imagePositionOptions = (device) => device === "desktop" ? [
	{ label: "Left", value: "row", icon: leftIcon },
	{ label: "Right", value: "row-reverse", icon: rightIcon },
] : device === "tablet" ? [
	{ label: "Left", value: "row", icon: leftIcon },
	{ label: "Top", value: "column", icon: topIcon },
	{ label: "Bottom", value: "column-reverse", icon: bottomIcon },
	{ label: "Right", value: "row-reverse", icon: rightIcon },
] : [
	{ label: "Top", value: "column", icon: topIcon },
	{ label: "Bottom", value: "column-reverse", icon: bottomIcon },
];

export const logoPositionOptions = [
	{ label: "left", icon: leftIcon, value: "row" },
	{ label: "top", icon: topIcon, value: "column" },
	{ label: "bottom", icon: bottomIcon, value: "column-reverse" },
	{ label: "right", icon: rightIcon, value: "row-reverse" },
]

export const imageSizeOptions = [
	{ label: "Full", value: "full" },
	{ label: "Custom", value: "custom" },
];
export const inputFieldOptions = [
	{ label: "Username", value: "username" },
	{ label: "Email", value: "email" },
	{ label: "Password", value: "password" },
	{ label: "Confirm Password", value: "confirmpassword" },
	{ label: "First Name", value: "firstname" },
	{ label: "Last Name", value: "lastname" },
	{ label: "Website", value: "website" },
];
export const containerAlignOptions = [
	{ label: "Left", value: "left", icon: alignLeft },
	{ label: "Center", value: "center", icon: alignCenter },
	{ label: "Right", value: "right", icon: alignRight },
]
export const addInputFieldOptions = {
	type: "username",
	label: { text: "" },
	placeholder: { text: "" },
	required: false,
	width: { desktop: "100%", tablet: "100%", mobile: "100%" },
	device: "desktop",
	icon: { url: "", type: "upload", svg: "" },
};
export const userRoleOptions = [
	{ label: "Default", value: "default" },
	{ label: "Editor", value: "editor" },
	{ label: "Author", value: "author" },
	{ label: "Contributor", value: "contributor" },
	{ label: "Subscriber", value: "subscriber" },
];


export const containerStyleOptions = [
	{ title: __("Container", "b-blocks"), name: "containerbox" },
	{ title: __("Form Wrapper", "b-blocks"), name: "formwrapper" },
	{ title: __("Form", "b-blocks"), name: "form" },
]

export const headerStyleOptions = [
	{ title: __("Header Content", 'b-blocks'), name: "header" },
	{ title: __("Logo", 'b-blocks'), name: "logo" },
	{ title: __("Image", 'b-blocks'), name: "image" },
]

export const headerTitleSubOptions = [
	{ title: __("Title", 'b-blocks'), name: "title" },
	{ title: __("Subtitle", 'b-blocks'), name: "subTitle" },
]

export const justifyContent = [
	{ label: "Start", value: "start" },
	{ label: "End", value: "end" },
	{ label: "Center", value: "center" },
	{ label: "Space Between", value: "space-between" },
	{ label: "Space Around", value: "space-around" },
	{ label: "Space Evenly", value: "space-evenly" }
];

export const alignItems = [
	{ label: "Start", value: "start" },
	{ label: "End", value: "end" },
	{ label: "Center", value: "center" },
	{ label: "Stretch", value: "stretch" },
	{ label: "Baseline", value: "baseline" },
	{ label: "Space Evenly", value: "space-evenly" },
];

export const defaultUserMail = `<p>Thank you for registering on "gutenberg plugin development"!</p>
<p>Username: [username]</p>
<p>Password: [password]</p>
<p>Please click the following address to login to your account:</p>
<p>http://localhost/my-site/wp-admin/post.php/ </p>`;

export const defaultAdminMail = `<p>New user registration on your site gutenberg plugin development</p>
<p>Username: [username]</p>
<p>Email: [email]</p>`;

export const animationOptions = [
	{ label: "None", value: "none" },
	{ label: "Grow", value: "grow" },
	{ label: "Shrink", value: "shrink" },
	{ label: "Pulse", value: "pulse" },
	{ label: "Pulse Grow", value: "pulsegrow" },
	{ label: "Pulse Shrink", value: "pulseshrink" },
	{ label: "Push", value: "push" },
	{ label: "Pop", value: "pop" },
	{ label: "Bounce In", value: "bouncein" },
	{ label: "Bounce Out", value: "bounceout" },
	{ label: "Rotate", value: "rotate" },
	{ label: "Grow Rotate", value: "growrotate" },
	{ label: "Float", value: "float" },
	{ label: "Sink", value: "sink" },
	{ label: "Bob", value: "bob" },
	{ label: "Hang", value: "hang" },
	{ label: "Skew", value: "skew" },
	{ label: "Skew Forward", value: "skewforward" },
	{ label: "Skew Backward", value: "skewbackward" },
	{ label: "Wobble Vertical", value: "wobblevertical" },
	{ label: "Wobble Horizontal", value: "wobblehorizontal" },
	{ label: "Wobble To Bottom Right", value: "wobbletobottomright" },
	{ label: "Wobble To Top Right", value: "wobbletotopright" },
	{ label: "Wobble Top", value: "wobbletop" },
	{ label: "Wobble Bottom", value: "wobblebottom" },
	{ label: "Wobble Skew", value: "wobbleskew" },
	{ label: "Buzz", value: "buzz" },
	{ label: "Buzz Out", value: "buzzout" },
];