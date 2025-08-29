export const CloudBackground = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            {/* Gradient sky shifting slowly */}
            <div
                className="absolute inset-0 bg-gradient-to-r from-yellow-100/70 via-blue-100/70 to-yellow-100/70
                bg-[length:200%_200%] animate-gradient-shift"
            ></div>

            {/* Sun rays (semi-transparent and spinning) */}
            <div className="absolute top-1/10 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full
                bg-yellow-100/50 animate-pulse-sun"></div>

            {/* Floating clouds */}
            <div className="absolute top-15 left-[13%] w-32 h-32 z-1 bg-white rounded-full opacity-100 blur-sm animate-cloud-move shadow-lg" style={{animationDuration: '70s'}}></div>
            <div className="absolute top-9 left-[13%] w-32 h-32 bg-white border-5 border-gray-400/60 rounded-full opacity-100 blur-sm animate-cloud-move shadow-lg" style={{animationDuration: '70s'}}></div>
            <div className="absolute top-20 left-[10%] w-64 h-32 bg-white border-5 border-gray-400/60 rounded-full opacity-100 blur-sm animate-cloud-move shadow-lg" style={{animationDuration: '70s'}}></div>
            <div className="absolute top-43 left-[-7%] w-24 h-24 z-2 bg-white rounded-full opacity-100 blur-sm animate-cloud-move animation-delay-5000 shadow-md" style={{animationDuration: '50s'}}></div>
            <div className="absolute top-37 left-[-7%] w-24 h-24 z-1 bg-white border-5 border-gray-400/60 rounded-full opacity-100 blur-sm animate-cloud-move animation-delay-5000 shadow-md" style={{animationDuration: '50s'}}></div>
            <div className="absolute top-48 left-[-10%] w-48 h-24 z-1 bg-white border-5 border-gray-400/60 rounded-full opacity-100 blur-sm animate-cloud-move animation-delay-5000 shadow-md" style={{animationDuration: '50s'}}></div>
            <div className="absolute top-73 left-[28%] w-28 h-28 z-1 bg-white  rounded-full opacity-100 blur-sm animate-cloud-move animation-delay-10000 shadow-md" style={{animationDuration: '60s'}}></div>
            <div className="absolute top-67 left-[28%] w-28 h-28 bg-white border-5 border-gray-400/60 rounded-full opacity-100 blur-sm animate-cloud-move animation-delay-10000 shadow-md" style={{animationDuration: '60s'}}></div>
            <div className="absolute top-78 left-[25%] w-56 h-28 bg-white border-5 border-gray-400/60 rounded-full opacity-100 blur-sm animate-cloud-move animation-delay-10000 shadow-md" style={{animationDuration: '60s'}}></div>
        </div>
    );
};
