import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import Cal from '@calcom/embed-react';
import StatsBar from '../components/StatsBar';
const LakeTravisDefaultTemplate = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://player.vimeo.com/api/player.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);
    return (_jsx("div", { className: "font-poppins min-h-screen bg-gray-50", children: _jsxs("div", { className: "w-full flex flex-col", children: [_jsx("div", { className: "text-center px-6 bg-white py-6 md:py-8 lg:py-10", children: _jsx("h1", { className: "md:text-6xl font-integral tracking-tight text-[#004aad] leading-tight", children: "TEXAS SPORTS ACADEMY" }) }), _jsx("div", { className: "bg-white shadow-2xl w-full max-[360px]:mx-0 sm:mx-0", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-0", children: [_jsxs("div", { className: "bg-white flex flex-col items-center p-6 lg:p-8", children: [_jsx("div", { className: "w-full mb-4", children: _jsx("h2", { className: "text-2xl md:text-3xl font-bold text-gray-900 text-left", children: "Book Your Tour" }) }), _jsx("div", { className: "w-full", children: _jsx("div", { className: "relative w-full", style: { paddingBottom: '56.25%' }, children: _jsx("iframe", { src: "https://player.vimeo.com/video/1131435977?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&playsinline=1", className: "absolute top-0 left-0 w-full h-full rounded-lg", style: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }, frameBorder: "0", allow: "autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share", loading: "lazy", referrerPolicy: "strict-origin-when-cross-origin", title: "Welcome to Texas Sports Academy" }) }) })] }), _jsxs("div", { className: "bg-white p-6 h-full mt-6 overflow-visible lg:overflow-auto flex flex-col min-h-0", children: [_jsx("div", { className: "lg:hidden", children: _jsx(Cal, { namespace: "texas-sports-academy-lake-travis-tour-mobile", calLink: "tsa-team-snk9ur/texas-sports-academy-lake-travis-tour", style: { width: '100%' }, config: { layout: 'week_view' } }) }), _jsx("div", { className: "hidden lg:block flex-1 min-h-0 overflow-auto", children: _jsx(Cal, { namespace: "texas-sports-academy-lake-travis-tour-desktop", calLink: "tsa-team-snk9ur/texas-sports-academy-lake-travis-tour", style: { width: '100%', height: '100%' }, config: { layout: 'month_view' } }) })] })] }) }), _jsx("div", { className: "bg-gradient-to-r from-white via-[#f5f5f5] to-white py-8 md:py-12 px-6", children: _jsxs("div", { className: "max-w-6xl mx-auto text-center", children: [_jsx("h2", { className: "text-3xl md:text-5xl lg:text-5xl font-integral tracking-tight mb-8 md:mb-12 text-[#004aad] leading-[0.9]", children: "GIVE YOUR KID THE EDGE" }), _jsx("p", { className: "text-lg md:text-xl lg:text-2xl text-[#1a1a1a] leading-relaxed max-w-5xl mx-auto mb-12 md:mb-16", children: "We are the elite K-8 sports academy of Alpha School, combining leading academics with athletic excellence. Students get top 1% academic results in just 2 hours a day and spend the afternoons on elite athletics and building life skills." }), _jsx(StatsBar, { className: "gap-4 md:gap-12 lg:gap-16" })] }) })] }) }));
};
export default LakeTravisDefaultTemplate;
