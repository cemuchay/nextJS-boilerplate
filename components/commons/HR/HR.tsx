/**
 * HorizontalRule Component Props
 */
interface HorizontalRuleProps {
    color?: string;
    thickness?: number;
    margin?: string;
}

/**
 * HorizontalRule Component
 * Renders a horizontal line (HR) with customizable color, thickness, and margin.
 *
 * @param color - The color of the horizontal rule. (Optional)
 * @param thickness - The thickness (height) of the horizontal rule in pixels. (Optional)
 * @param margin - The margin around the horizontal rule. (Optional)
 * @returns A React functional component representing the horizontal rule.
 */
const HorizontalRule: React.FC<HorizontalRuleProps> = ({
    color = '#000000',
    thickness = 1,
    margin = '0',
}) => {
    const hrStyle: React.CSSProperties = {
        borderTop: `${thickness}px solid ${color}`,
        margin,
    };

    return <hr style={hrStyle} />;
};

export default HorizontalRule;
