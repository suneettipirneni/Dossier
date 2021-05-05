import React from 'react'
import '../scss/nav.scss'

type NavButtonProps = {
    title: string,
    onClick?: () => void | null,
}

function NavButton({ title, onClick: onPress }: NavButtonProps): JSX.Element {
    return (
        <button className="nav-button" onClick={onPress}>
            <h1 className="nav-title">{title}</h1>
        </button>
    );
}

export default NavButton;