// eslint-disable-next-line react/prop-types
export default function Button({text, onClick}) {
    return (
        <button className="btn-reset" onClick={onClick}>{text}</button>
    )
}