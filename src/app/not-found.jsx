import Link from 'next/link';
import GlobalArrowButton from './components/general/global-arrow_button';

export const metadata = {
    title: '404 - Page Not Found | Kalinga University',
    description: 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
};

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-20 text-center bg-gray-50/50">
            <div className="max-w-3xl mx-auto flex flex-col items-center">
                {/* Decorative 404 Text */}
                <h1
                    className="text-[120px] sm:text-[150px] md:text-[200px] leading-none font-stix font-bold text-[var(--dark-blue)] opacity-10"
                    style={{
                        textShadow: '2px 2px 0px rgba(0,0,0,0.1)',
                        WebkitTextStroke: '2px var(--dark-blue)',
                        color: 'transparent'
                    }}
                >
                    404
                </h1>

                <div className="relative -mt-16 sm:-mt-24 bg-white px-8 md:px-16 py-8 rounded-2xl shadow-xl border border-gray-100 z-10">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-stix text-[var(--foreground)] mb-4 text-[#972B28]">
                        Page Not Found
                    </h2>

                    <p className="text-base sm:text-lg font-plus-jakarta-sans text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
                        The page you are looking for might have been removed, had its name changed,
                        or is currently out of bounds. Let's get you back on track.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/" className="inline-block">
                            <GlobalArrowButton>
                                <span>Return to Homepage</span>
                            </GlobalArrowButton>
                        </Link>

                        <Link
                            href="/contact-us"
                            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-plus-jakarta-sans font-medium rounded-full hover:bg-gray-50 transition-colors duration-300"
                        >
                            Contact Support
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
