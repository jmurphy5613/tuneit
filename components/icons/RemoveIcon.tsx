
interface RemoveIconProps {
    stroke: string,
    fill: string,
    linefill?: string
}

const RemoveIcon: React.FC<RemoveIconProps> = ({ stroke, fill, linefill }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="15" stroke="#A12828" stroke-width="2" fill={fill} />
            <path d="M12.5 20H27.5" stroke={linefill ? linefill : "#A12828"} stroke-width="2" />
        </svg>

    )
}

export default RemoveIcon