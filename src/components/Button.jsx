function Button({buttonType = "button", text, disabled}) {
    return (
        <>
            <button type={buttonType}
                    disabled={disabled}
                    onClick={() => console.log(text)}
            >
                {text}
            </button>
        </>
    )
}
export default Button;