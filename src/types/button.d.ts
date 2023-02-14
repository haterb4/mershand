import { RefObject } from "react"

interface ButtonProps {
    children: JSX.Element,
    height: number,
    width: number,
    fill?: boolean,
    round: number,
    circle?: boolean,
    fg?: string,
    bg?: string,
    className?: string,
    onClick?: () => void,
    outSide?: () => void,
}

export default ButtonProps