import { FC } from "react"
import "./Header.css"

type HeaderProps = {
    children: string
}

const Header: FC<HeaderProps> = ({ children }) => {
    return (
        <div className="header-container">
            <h1>
                {children}
            </h1>
        </div>
    )
}

export default Header