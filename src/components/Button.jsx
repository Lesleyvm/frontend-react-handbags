function Button({buttonType = "button", buttonText, disabled, clickHandler}) {
    return (
        <>
            <button type={buttonType}
                    disabled={disabled}
                    onClick={clickHandler}
            >
                {buttonText}
            </button>
        </>
    )
}
export default Button;