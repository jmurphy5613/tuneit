
interface DownArrowProps {
    stroke?: string;
}

const DownArrow: React.FC<DownArrowProps> = ({ stroke = '#fff' }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
            <path d="M18 9L12 15L6 9" stroke={stroke} />
        </svg>
    )
}

export default DownArrow