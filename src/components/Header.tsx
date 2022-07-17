import { FC } from "react"

type HeaderProps = {
    children: string
}

const Header: FC<HeaderProps> = ({ children }) => {
    return (
        <div>
            <h1>
                {children}
            </h1>
        </div>
    )
}

export default Header