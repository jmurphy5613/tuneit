

interface CheckIconProps {
    stroke?: string
}

const CheckIcon: React.FC<CheckIconProps> = ({ stroke }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.29167 20.4167L13.125 24.7917L26.25 8.75" stroke={stroke} stroke-width="2" />
        </svg>
    )
}

export default CheckIcon