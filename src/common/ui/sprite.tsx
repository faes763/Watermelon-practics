type IconProps = {
    name: string;
    className: string;
    onClick?: () => void;
    isImage?: boolean;
    style?: React.CSSProperties;
    isPng?: boolean;
};

export function Sprite({
    name,
    className,
    onClick,
    isImage,
    style, 
    isPng,
}: IconProps): JSX.Element {
    if (isImage) {
        return (
            <img
                fetchPriority="high"
                src={`/icons/${name}.${isPng ? "png" : "svg"}`}
                alt=""
                width={256}
                height={256}
                className={className}
                onClick={onClick}
                style={style}
            />
        );
    }

    return (
        <svg onClick={onClick} className={className} style={style}>
            <use xlinkHref={`/sprite.svg#${name}`} />
        </svg>
    );
}
