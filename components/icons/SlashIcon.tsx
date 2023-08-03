

interface SlashIconProps {
    stroke: string
}

const SlashIcon: React.FC<SlashIconProps> = ({ stroke }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 25 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.574171" y1="39.738" x2="24.5742" y2="0.737952" stroke="white" />
        </svg>
    )
}

export default SlashIcon