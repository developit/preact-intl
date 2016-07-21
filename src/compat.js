import { Component, h as createElement } from 'preact';

export { Component, createElement };
export default { createElement };

let VNode = createElement('a').constructor;

export function isValidElement(el) {
	return el.constructor===VNode;
}

export const Children = {
	only(children) {
		return children && children[0] || null;
	}
};

function proptype() {}
proptype.isRequired = proptype;

export const PropTypes = {
	oneOf: proptype,
	element: proptype,
	func: proptype,
	shape: () => proptype
};
