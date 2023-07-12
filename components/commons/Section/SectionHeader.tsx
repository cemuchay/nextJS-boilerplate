const SectionHeader = ({ title, borderRadius, className }: { title: string, borderRadius?: boolean, className?: string }) => {
    return (
        <div className={`section-header-div ${className}`} style={{ borderRadius: borderRadius ? "10px" : "0px" }}>
            <h3 className="section-header">
                {title}
            </h3>
        </div>
    );
}

export default SectionHeader;