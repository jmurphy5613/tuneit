

interface ClockIconProps {
    stroke: string
}

const ClockIcon: React.FC<ClockIconProps> = ({ stroke }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9.99967" cy="10.0002" r="7.16667" stroke={stroke} />
            <path d="M13.75 10.0002H10.25C10.1119 10.0002 10 9.88823 10 9.75016V7.0835" stroke={stroke} stroke-linecap="round" />
        </svg>

    )
}

export default ClockIcon