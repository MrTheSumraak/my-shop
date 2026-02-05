const WetchIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M15 2V7M15 17V22M9 2V7M9 17V22M20 13V11M8 17H16C16.5523 17 17 16.5523 17 16V8C17 7.44772 16.5523 7 16 7H8C7.44772 7 7 7.44772 7 8V16C7 16.5523 7.44772 17 8 17Z"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></path>
        </svg>
    );
};

export default WetchIcon;
