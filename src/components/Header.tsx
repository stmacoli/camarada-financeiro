import { FC } from "react"

type HeaderProps = {
    title: string
}

const Header: FC<HeaderProps> = ({ title }) => {
    return (
        <div>
            <h1>
                {title}
            </h1>
        </div>
    )
}

export default Header