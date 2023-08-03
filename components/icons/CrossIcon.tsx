
interface CrossIconProps {
    stroke: string
}

const CrossIcon: React.FC<CrossIconProps> = ({ stroke }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5 7.5L7.5 22.5" stroke={stroke} stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
            <path d="M7.5 7.5L22.5 22.5" stroke={stroke} stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
        </svg>

    )
}

export default CrossIcon