"use client";

export default function GearLoader() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-md bg-white/20">

            <div className="flex items-center gap-6">

                {/* Small Gear */}
                <svg
                    className="w-10 h-10 text-gold animate-[spin_3s_linear_reverse_infinite]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M19.14 12.94a7.49 7.49 0 000-1.88l2.03-1.58a.5.5 0 00.12-.63l-1.92-3.32a.5.5 0 00-.6-.22l-2.39.96a7.28 7.28 0 00-1.63-.95l-.36-2.54a.5.5 0 00-.5-.42h-3.84a.5.5 0 00-.5.42l-.36 2.54c-.58.23-1.13.54-1.63.95l-2.39-.96a.5.5 0 00-.6.22L2.71 8.85a.5.5 0 00.12.63l2.03 1.58a7.49 7.49 0 000 1.88L2.83 14.52a.5.5 0 00-.12.63l1.92 3.32a.5.5 0 00.6.22l2.39-.96c.5.41 1.05.72 1.63.95l.36 2.54a.5.5 0 00.5.42h3.84a.5.5 0 00.5-.42l.36-2.54c.58-.23 1.13-.54 1.63-.95l2.39.96a.5.5 0 00.6-.22l1.92-3.32a.5.5 0 00-.12-.63l-2.03-1.58zM12 15.5A3.5 3.5 0 1112 8a3.5 3.5 0 010 7.5z" />
                </svg>
            </div>
        </div>
    );
}