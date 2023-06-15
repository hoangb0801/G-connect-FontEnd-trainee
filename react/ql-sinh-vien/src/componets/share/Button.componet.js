function Button({ click, text, ...props }) {
    const ob = {};
    if (typeof click === 'function') {
        ob.onClick = function (e) {
            return click(e)
        }
    }
    return (
        <button {...ob} {...props}>{text}</button>
    )
}
export default Button