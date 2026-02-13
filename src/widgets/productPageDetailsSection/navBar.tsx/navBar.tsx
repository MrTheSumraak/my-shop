const NavBar = () => {
    return (
        <nav className="flex flex-wrap gap-2 py-4 mb-4">
            <a
                className="text-[#8dbace] hover:text-primary text-sm font-medium transition-colors"
                href="#"
            >
                Electronics
            </a>
            <span className="text-[#8dbace] text-sm">/</span>
            <a
                className="text-[#8dbace] hover:text-primary text-sm font-medium transition-colors"
                href="#"
            >
                Audio
            </a>
            <span className="text-[#8dbace] text-sm">/</span>
            <span className="text-white text-sm font-semibold">
                Quantum X-1 Gaming Headset
            </span>
        </nav>
    );
};

export default NavBar;
