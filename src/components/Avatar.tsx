import React from 'react'
import '../scss/avatar.scss'

type AvatarProps = {
    src?: string
    size?: number
}

function Avatar({ src, size = 100 }: AvatarProps): JSX.Element {
    return (
        <img src={src} className="avatar" style={{ width: size, height: size, borderRadius: (size / 2), margin: 20 }} />
    );
}

export default Avatar;