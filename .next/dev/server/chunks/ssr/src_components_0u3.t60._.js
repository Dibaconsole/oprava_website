module.exports = [
"[project]/src/components/layout/GuideProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GuideProvider,
    "useGuide",
    ()=>useGuide
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const GuideContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const TOUR_STEPS = [
    {
        id: 'hero',
        title: 'Execution friction, made visible.',
        desc: 'Oprava helps CEOs, PE operating partners, and leadership teams detect hidden organizational drag and quantify execution risk before value leaks away.'
    },
    {
        id: 'problem',
        title: 'The problem is not just performance. It is invisible friction.',
        desc: 'Most companies can see revenue, costs, and EBITDA. Oprava focuses on the hidden execution issues behind those numbers.'
    },
    {
        id: 'whynow',
        title: 'Why execution risk is harder to see than ever.',
        desc: 'More tools, more dependencies, more data, yet leadership still lacks a reliable way to see where execution is slowing before it shows up in the numbers.'
    },
    {
        id: 'solution',
        title: 'A system for translating signals into risk.',
        desc: 'Oprava connects operational signals, identifies friction patterns, and turns them into measurable execution risk that leaders can act on.'
    },
    {
        id: 'product',
        title: 'The dashboard is the command center.',
        desc: 'Users see health scores, friction signals, EBITDA-at-risk indicators, bottlenecks, and recommended interventions in one executive-ready view.'
    },
    {
        id: 'ontology',
        title: 'The ontology is the intelligence layer.',
        desc: 'Beyond charts, Oprava is built on a proprietary organizational health ontology that links behavior, systems, operations, execution, and financial outcomes.'
    },
    {
        id: 'usecases',
        title: 'Use cases turn diagnosis into action.',
        desc: 'Oprava supports transformation tracking, operating reviews, leadership alignment, integration risk, and portfolio-wide execution visibility.'
    },
    {
        id: 'pe',
        title: 'Built for PE operating partners.',
        desc: 'For private equity teams, Oprava creates a repeatable way to see execution risk across portfolio companies before it affects value creation.'
    },
    {
        id: 'pilot',
        title: 'The next step is a focused diagnostic.',
        desc: 'The 30-day diagnostic helps leadership experience how Oprava surfaces friction, prioritizes risk, and creates a clearer operating view.'
    }
];
function useGuideContext() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(GuideContext);
    if (!context) {
        throw new Error('useGuide must be used within a GuideProvider');
    }
    return context;
}
function useGuide() {
    return useGuideContext();
}
function GuideProvider({ children }) {
    const [stepIndex, setStepIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const currentStep = TOUR_STEPS[stepIndex];
    const startTour = ()=>{
        setStepIndex(0);
        setActive(true);
    };
    const closeTour = ()=>{
        setActive(false);
    };
    const goNext = ()=>{
        setStepIndex((current)=>Math.min(current + 1, TOUR_STEPS.length - 1));
    };
    const goPrev = ()=>{
        setStepIndex((current)=>Math.max(current - 1, 0));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!active) {
            document.querySelectorAll('.tour-highlight').forEach((el)=>el.classList.remove('tour-highlight'));
            return;
        }
        const target = document.getElementById(currentStep.id);
        if (!target) {
            return;
        }
        const previous = document.querySelector('.tour-highlight');
        if (previous) {
            previous.classList.remove('tour-highlight');
        }
        target.classList.add('tour-highlight');
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
        const handleKeyDown = (event)=>{
            if (!active) return;
            if (event.key === 'Escape') {
                closeTour();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return ()=>{
            document.removeEventListener('keydown', handleKeyDown);
            target.classList.remove('tour-highlight');
        };
    }, [
        active,
        currentStep
    ]);
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            startTour
        }), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GuideContext.Provider, {
        value: contextValue,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "tour-overlay",
                className: active ? 'active' : '',
                onClick: closeTour
            }, void 0, false, {
                fileName: "[project]/src/components/layout/GuideProvider.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "tour-card",
                className: active ? 'active' : '',
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "tour-title",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tour-eyebrow",
                        "aria-live": "polite",
                        children: [
                            "Step ",
                            stepIndex + 1,
                            " of ",
                            TOUR_STEPS.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/GuideProvider.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        id: "tour-title",
                        children: currentStep.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/GuideProvider.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: currentStep.desc
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/GuideProvider.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tour-progress",
                        role: "tablist",
                        "aria-label": "Tour progress",
                        children: TOUR_STEPS.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `tp-dot${index === stepIndex ? ' on' : ''}`,
                                "aria-label": `Step ${index + 1}`
                            }, index, false, {
                                fileName: "[project]/src/components/layout/GuideProvider.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/GuideProvider.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tour-btns",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "tbtn-skip",
                                onClick: closeTour,
                                type: "button",
                                children: "Skip"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/GuideProvider.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            stepIndex > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "tbtn-back",
                                onClick: goPrev,
                                type: "button",
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/GuideProvider.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: stepIndex === TOUR_STEPS.length - 1 ? 'tbtn-finish' : 'tbtn-next',
                                onClick: stepIndex === TOUR_STEPS.length - 1 ? closeTour : goNext,
                                type: "button",
                                children: stepIndex === TOUR_STEPS.length - 1 ? 'Finish' : 'Next →'
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/GuideProvider.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/GuideProvider.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/GuideProvider.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/GuideProvider.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/Nav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$GuideProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/GuideProvider.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Nav() {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { startTour } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$GuideProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGuide"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, {
            passive: true
        });
        return ()=>window.removeEventListener('scroll', onScroll);
    }, []);
    const close = ()=>setMenuOpen(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: scrolled ? 'scrolled' : '',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "nav-inner",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#hero",
                    className: "logo",
                    onClick: close,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "logo-txt",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/assets/images/oprava_logo.png",
                            alt: "Oprava Logo",
                            width: 120,
                            height: 40,
                            className: "logo-icon"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Nav.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Nav.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Nav.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `nav-menu${menuOpen ? ' open' : ''}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#solution",
                            onClick: close,
                            children: "Platform"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Nav.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#product",
                            onClick: close,
                            children: "Product"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Nav.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#usecases",
                            onClick: close,
                            children: "Use Cases"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Nav.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#pe",
                            onClick: close,
                            children: "For PE"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Nav.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#ontology",
                            onClick: close,
                            children: "Architecture"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Nav.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "nav-tour-btn",
                            onClick: ()=>{
                                close();
                                startTour();
                            },
                            children: "Tour"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Nav.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#pilot",
                            className: "nav-btn",
                            onClick: close,
                            children: "Run a Diagnostic"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Nav.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Nav.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "nav-toggle",
                    "aria-label": menuOpen ? 'Close navigation menu' : 'Open navigation menu',
                    "aria-expanded": menuOpen,
                    onClick: ()=>setMenuOpen((v)=>!v),
                    children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M6 6l12 12M6 18L18 6",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Nav.tsx",
                            lineNumber: 58,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Nav.tsx",
                        lineNumber: 57,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M4 7h16M4 12h16M4 17h16",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Nav.tsx",
                            lineNumber: 62,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Nav.tsx",
                        lineNumber: 61,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Nav.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Nav.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Nav.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/ChatProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatProvider,
    "useChat",
    ()=>useChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$GuideProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/GuideProvider.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
// ── Guide data ───────────────────────────────────────────────────────────────
const GUIDE_CHIPS = [
    {
        label: 'What does Oprava do?',
        key: 'overview'
    },
    {
        label: 'What is execution friction?',
        key: 'friction'
    },
    {
        label: 'How does it help PE firms?',
        key: 'pe'
    },
    {
        label: 'What is the Ontology?',
        key: 'ontology'
    },
    {
        label: 'How does the diagnostic work?',
        key: 'diagnostic'
    },
    {
        label: 'Is it an engagement tool?',
        key: 'engagement'
    },
    {
        label: 'Show me the dashboard',
        key: 'product'
    },
    {
        label: 'Why is Oprava defensible?',
        key: 'defensible'
    },
    {
        label: 'Give me a quick tour',
        key: 'tour'
    }
];
const GUIDE_ANSWERS = {
    overview: {
        text: 'Oprava helps CEOs, PE operating partners, and leadership teams detect hidden execution friction — the organizational drag that slows decisions, delays execution, and quietly erodes value. It translates operational signals into measurable risk, then surfaces the interventions most likely to restore execution speed.',
        actionLabel: 'View the Solution',
        section: 'solution'
    },
    friction: {
        text: 'Execution friction is the hidden drag that slows how organizations turn decisions into outcomes. It shows up as decision latency, unclear ownership, misaligned incentives, and compounding operational delays — all of which reduce EBITDA without appearing directly on any report.',
        actionLabel: 'View the Problem',
        section: 'problem'
    },
    pe: {
        text: 'For PE operating partners, Oprava creates a repeatable way to see execution risk across portfolio companies. Instead of relying on management self-reporting, you get an objective view of where friction is highest, which risks are compounding, and where to focus operating resources first.',
        actionLabel: 'View PE Use Case',
        section: 'pe'
    },
    ontology: {
        text: "The Organizational Health Ontology is Oprava's proprietary intelligence layer. It maps relationships between behavior, systems, operations, execution, and financial outcomes — so the platform can detect friction patterns, not just surface data points. This is what makes Oprava's risk signal defensible over time.",
        actionLabel: 'View Architecture',
        section: 'ontology'
    },
    diagnostic: {
        text: 'The 30-day diagnostic gives leadership an immediate, structured view of where execution friction is highest. Oprava ingests operational signals, runs them through the ontology, and produces a prioritized risk map — with EBITDA-at-risk estimates and recommended interventions ready for the first operating review.',
        actionLabel: 'Run a 30-Day Diagnostic',
        section: 'pilot'
    },
    engagement: {
        text: 'No. Oprava is not an employee engagement or survey platform. It does not measure sentiment or culture in the traditional sense. It measures execution — specifically, the structural and operational friction that slows how organizations turn strategy into outcomes. The distinction matters: engagement tools tell you how people feel; Oprava tells you where execution is leaking.',
        actionLabel: 'See How Oprava Is Different',
        section: 'comparison'
    },
    product: {
        text: "The Oprava dashboard gives leadership a single executive-ready view of organizational health: friction signals, EBITDA-at-risk indicators, bottleneck maps, execution timelines, and prioritized interventions. It's designed for operating reviews, not just reporting.",
        actionLabel: 'View Product',
        section: 'product'
    },
    defensible: {
        text: "Oprava is designed to become defensible over time. The Organizational Health Ontology accumulates signal as it runs — learning what friction patterns matter in your specific operating context. Over a portfolio or multi-entity deployment, Oprava's risk model becomes increasingly calibrated, and increasingly hard to replicate.",
        actionLabel: 'View Intelligence Layer',
        section: 'ontology'
    },
    tour: {
        text: 'The Executive Walkthrough will guide you through the full Oprava platform story — from how execution friction forms, to how Oprava detects and quantifies it, to what leadership can do with that insight. Starting now.',
        actionLabel: 'Start Executive Walkthrough',
        section: null,
        isTour: true
    }
};
const GUIDE_KEYWORDS = {
    overview: [
        'what does oprava do',
        'what is oprava',
        'overview',
        'solution',
        'oprava do',
        'oprava help'
    ],
    friction: [
        'execution friction',
        'friction',
        'hidden drag',
        'decision latency'
    ],
    pe: [
        'private equity',
        'pe firm',
        'operating partner',
        'portfolio',
        'pe operating',
        'pe use'
    ],
    ontology: [
        'ontology',
        'architecture',
        'intelligence layer',
        'health ontology'
    ],
    diagnostic: [
        'diagnostic',
        'pilot',
        '30 day',
        '30-day',
        'how does it work',
        'how does the'
    ],
    engagement: [
        'engagement',
        'sentiment',
        'survey',
        'employee engagement',
        'engagement tool'
    ],
    product: [
        'dashboard',
        'product',
        'show me',
        'product dashboard'
    ],
    defensible: [
        'defensible',
        'moat',
        'hard to replicate',
        'defensibility'
    ],
    tour: [
        'tour',
        'walkthrough',
        'executive walkthrough',
        'quick tour'
    ]
};
const GUIDE_FALLBACK = "That's a great question. Oprava is currently focused on helping leadership teams identify execution friction, quantify organizational risk, and prioritize action. For a deeper discussion, the best next step is to run a focused 30-day diagnostic.";
const WELCOME_TEXT = "Hi, I'm the Oprava Guide. I can help you understand how Oprava detects hidden execution friction, translates organizational signals into risk, and supports better execution decisions.";
// ── Context ──────────────────────────────────────────────────────────────────
const ChatContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function useChat() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ChatContext);
    if (!ctx) throw new Error('useChat must be used within a ChatProvider');
    return ctx;
}
// ── Helpers ──────────────────────────────────────────────────────────────────
function matchKey(q) {
    const lower = q.toLowerCase();
    for (const chip of GUIDE_CHIPS){
        if (GUIDE_KEYWORDS[chip.key].some((kw)=>lower.includes(kw))) return chip.key;
    }
    return null;
}
let msgCounter = 0;
function nextId() {
    return `gm-${++msgCounter}`;
}
function ChatProvider({ children }) {
    const { startTour } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$GuideProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGuide"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [minimized, setMinimized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [inputVal, setInputVal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [initialized, setInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const msgsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const addMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((role, text, opts)=>{
        setMessages((prev)=>[
                ...prev,
                {
                    id: nextId(),
                    role,
                    text,
                    ...opts
                }
            ]);
    }, []);
    const showWelcome = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setMessages([
            {
                id: nextId(),
                role: 'guide',
                text: WELCOME_TEXT
            }
        ]);
    }, []);
    const openGuide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setOpen(true);
        setMinimized(false);
        if (!initialized) {
            setInitialized(true);
            showWelcome();
        }
    }, [
        initialized,
        showWelcome
    ]);
    const closeGuide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setOpen(false);
        setMinimized(false);
    }, []);
    const scrollToSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((sectionId)=>{
        closeGuide();
        setTimeout(()=>{
            document.getElementById(sectionId)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 350);
    }, [
        closeGuide
    ]);
    const handleTour = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        closeGuide();
        setTimeout(startTour, 400);
    }, [
        closeGuide,
        startTour
    ]);
    const handleChip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((key, label)=>{
        addMsg('user', label);
        const answer = GUIDE_ANSWERS[key];
        setTimeout(()=>{
            addMsg('guide', answer.text, {
                actionLabel: answer.actionLabel,
                section: answer.section,
                isTour: answer.isTour
            });
        }, 300);
    }, [
        addMsg
    ]);
    const sendMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const q = inputVal.trim();
        if (!q) return;
        setInputVal('');
        addMsg('user', q);
        setTimeout(()=>{
            const key = matchKey(q);
            if (key) {
                const a = GUIDE_ANSWERS[key];
                addMsg('guide', a.text, {
                    actionLabel: a.actionLabel,
                    section: a.section,
                    isTour: a.isTour
                });
            } else {
                addMsg('guide', GUIDE_FALLBACK, {
                    actionLabel: 'Run a 30-Day Diagnostic',
                    section: 'pilot'
                });
            }
        }, 300);
    }, [
        inputVal,
        addMsg
    ]);
    const clearConversation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        showWelcome();
    }, [
        showWelcome
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (msgsRef.current) {
            msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
        }
    }, [
        messages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) return;
        const onKey = (e)=>{
            if (e.key === 'Escape') closeGuide();
        };
        document.addEventListener('keydown', onKey);
        return ()=>document.removeEventListener('keydown', onKey);
    }, [
        open,
        closeGuide
    ]);
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            openChat: openGuide
        }), [
        openGuide
    ]);
    const panelClass = [
        open && 'open',
        minimized && 'minimized'
    ].filter(Boolean).join(' ');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatContext.Provider, {
        value: contextValue,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "guide-launcher",
                role: "button",
                tabIndex: 0,
                "aria-expanded": open,
                "aria-controls": "guide-panel",
                "aria-label": "Open Oprava Guide",
                onClick: openGuide,
                onKeyDown: (e)=>{
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openGuide();
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative',
                            width: 30,
                            height: 30,
                            flexShrink: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "gl-ring"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                lineNumber: 256,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "gl-icon",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 16 16",
                                    fill: "none",
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "8",
                                            cy: "8",
                                            r: "6.5",
                                            stroke: "#fff",
                                            strokeWidth: "1.4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                            lineNumber: 259,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M5.5 6.5C5.5 5.12 6.62 4 8 4s2.5 1.12 2.5 2.5c0 1.1-.7 2.04-1.7 2.4V10h-1.6V8.4C6.2 8.04 5.5 7.1 5.5 6.5z",
                                            fill: "#fff",
                                            opacity: "0.9"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                            lineNumber: 260,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "8",
                                            cy: "12",
                                            r: "1",
                                            fill: "#fff"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                            lineNumber: 265,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                    lineNumber: 258,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                lineNumber: 257,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/ChatProvider.tsx",
                        lineNumber: 255,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Ask Oprava"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/ChatProvider.tsx",
                        lineNumber: 269,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/ChatProvider.tsx",
                lineNumber: 243,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "guide-panel",
                className: panelClass,
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "Oprava Guide",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gp-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "gp-hicon",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "18",
                                    height: "18",
                                    viewBox: "0 0 16 16",
                                    fill: "none",
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "8",
                                            cy: "8",
                                            r: "6.5",
                                            stroke: "currentColor",
                                            strokeWidth: "1.4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                            lineNumber: 283,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M5.5 6.5C5.5 5.12 6.62 4 8 4s2.5 1.12 2.5 2.5c0 1.1-.7 2.04-1.7 2.4V10h-1.6V8.4C6.2 8.04 5.5 7.1 5.5 6.5z",
                                            fill: "currentColor",
                                            opacity: "0.9"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                            lineNumber: 284,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "8",
                                            cy: "12",
                                            r: "1",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                            lineNumber: 289,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                    lineNumber: 282,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                lineNumber: 281,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "gp-htitle",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Oprava Guide"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                        lineNumber: 293,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono",
                                        children: "NAVIGATE THE PLATFORM STORY."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                        lineNumber: 294,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                lineNumber: 292,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "gp-hbtns",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "gp-hbtn",
                                        type: "button",
                                        onClick: ()=>setMinimized(true),
                                        "aria-label": "Minimize",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 14 14",
                                            fill: "none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 7h10",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                                lineNumber: 304,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                            lineNumber: 303,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                        lineNumber: 297,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "gp-hbtn",
                                        type: "button",
                                        onClick: closeGuide,
                                        "aria-label": "Close",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 14 14",
                                            fill: "none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 2l10 10M12 2L2 12",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                                lineNumber: 309,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                            lineNumber: 308,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                        lineNumber: 307,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                lineNumber: 296,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/ChatProvider.tsx",
                        lineNumber: 280,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gp-msgs",
                        ref: msgsRef,
                        role: "log",
                        "aria-live": "polite",
                        children: messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `gm ${msg.role}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "gm-bubble",
                                        children: msg.text
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                        lineNumber: 323,
                                        columnNumber: 29
                                    }, this),
                                    msg.actionLabel && !msg.isTour && msg.section && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "gm-action",
                                        type: "button",
                                        onClick: ()=>scrollToSection(msg.section),
                                        children: [
                                            msg.actionLabel,
                                            " →"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                        lineNumber: 325,
                                        columnNumber: 33
                                    }, this),
                                    msg.isTour && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "gm-action",
                                        type: "button",
                                        onClick: handleTour,
                                        children: [
                                            msg.actionLabel,
                                            " →"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                        lineNumber: 334,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, msg.id, true, {
                                fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                lineNumber: 322,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/ChatProvider.tsx",
                        lineNumber: 320,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gp-chips-label",
                        children: "Quick questions"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/ChatProvider.tsx",
                        lineNumber: 342,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gp-chips",
                        children: GUIDE_CHIPS.map((chip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "gp-chip",
                                type: "button",
                                onClick: ()=>handleChip(chip.key, chip.label),
                                children: chip.label
                            }, chip.key, false, {
                                fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                lineNumber: 345,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/ChatProvider.tsx",
                        lineNumber: 343,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gp-ctas",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#pilot",
                                className: "gp-cta-p",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    scrollToSection('pilot');
                                },
                                children: "Run a 30-Day Diagnostic"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                lineNumber: 357,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "gp-cta-s",
                                type: "button",
                                onClick: handleTour,
                                children: "Start Executive Walkthrough"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                lineNumber: 364,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "gp-clear",
                                type: "button",
                                onClick: clearConversation,
                                children: "Clear conversation"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                lineNumber: 367,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/ChatProvider.tsx",
                        lineNumber: 356,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gp-input-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "gp-input",
                                id: "guide-input",
                                type: "text",
                                value: inputVal,
                                placeholder: "Ask about Oprava, execution friction, PE use cases…",
                                onChange: (e)=>setInputVal(e.target.value),
                                onKeyDown: (e)=>{
                                    if (e.key === 'Enter') sendMessage();
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                lineNumber: 373,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "gp-send",
                                id: "guide-send",
                                type: "button",
                                onClick: sendMessage,
                                disabled: !inputVal.trim(),
                                "aria-label": "Send",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 16 16",
                                    fill: "none",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M8 13V3M3 8l5-5 5 5",
                                        stroke: "currentColor",
                                        strokeWidth: "1.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                        lineNumber: 391,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                    lineNumber: 390,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/ChatProvider.tsx",
                                lineNumber: 382,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/ChatProvider.tsx",
                        lineNumber: 372,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/ChatProvider.tsx",
                lineNumber: 273,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/ChatProvider.tsx",
        lineNumber: 239,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/ui/Reveal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function Reveal({ children, className = '', style, delay = 0 }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                setTimeout(()=>el.classList.add('in'), delay);
                observer.unobserve(el);
            }
        }, {
            threshold: 0.12
        });
        observer.observe(el);
        return ()=>observer.disconnect();
    }, [
        delay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `reveal ${className}`,
        style: style,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Reveal.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/sections/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Reveal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$GuideProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/GuideProvider.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Hero() {
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { startTour } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$GuideProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGuide"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const svg = svgRef.current;
        const scan = svg ? svg.querySelector('#scan') : null;
        let sy = 60;
        let dir = 1;
        let rafId;
        function animScan() {
            if (scan) {
                sy += dir * 1.4;
                if (sy > 360) {
                    dir = -1;
                }
                if (sy < 60) {
                    dir = 1;
                }
                scan.setAttribute('y1', String(sy));
                scan.setAttribute('y2', String(sy));
                scan.setAttribute('opacity', String(0.15 + Math.abs(Math.sin(sy / 100)) * 0.25));
            }
            rafId = requestAnimationFrame(animScan);
        }
        rafId = requestAnimationFrame(animScan);
        return ()=>cancelAnimationFrame(rafId);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-bg"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wrap",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hero",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hero-tag",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "dot"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this),
                                        "Organizational Performance Intelligence"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: [
                                        "Execution friction,",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 46,
                                            columnNumber: 34
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "accent",
                                            children: "made visible."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "hero-sub",
                                    children: "Oprava helps CEOs, PE operating partners, and leadership teams detect hidden organizational drag, quantify execution risk, and protect EBITDA before value leaks away."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hero-cta",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#pilot",
                                            className: "btn btn-primary",
                                            children: [
                                                "Run a 30-Day Diagnostic",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "arr",
                                                    width: "14",
                                                    height: "14",
                                                    viewBox: "0 0 14 14",
                                                    fill: "none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M2.5 7h9M8 3.5L11.5 7 8 10.5",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.6",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#solution",
                                            className: "btn btn-ghost",
                                            children: "See How It Works"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hero-cta-tour",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-walkthrough",
                                        type: "button",
                                        onClick: startTour,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "15",
                                                height: "15",
                                                viewBox: "0 0 16 16",
                                                fill: "none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "8",
                                                        cy: "8",
                                                        r: "6.5",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M6.5 5.5l4 2.5-4 2.5V5.5z",
                                                        fill: "currentColor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this),
                                            "Take the Executive Walkthrough"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hero-metrics",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hm-val",
                                                    children: "74"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 35
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hm-lbl",
                                                    children: "Health Score"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 67
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hm-val amber",
                                                    children: "MOD"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 35
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hm-lbl",
                                                    children: "Friction Index"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 74
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hm-val crit",
                                                    children: "$3.2M"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 35
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hm-lbl",
                                                    children: "EBITDA at Risk"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 75
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hm-val",
                                                    children: "−18%"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 35
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hm-lbl",
                                                    children: "Decision Velocity"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 69
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lens-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lens-head",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "lens-head-l",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "14",
                                                        height: "14",
                                                        viewBox: "0 0 14 14",
                                                        fill: "none",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "7",
                                                                cy: "7",
                                                                r: "5.5",
                                                                stroke: "#7A8794",
                                                                strokeWidth: "1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                                lineNumber: 84,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "7",
                                                                cy: "7",
                                                                r: "2",
                                                                stroke: "#7A8794",
                                                                strokeWidth: "1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                                lineNumber: 85,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 19
                                                    }, this),
                                                    "OPRAVA LENS · DIAGNOSTIC"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "live",
                                                children: "Scanning"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        ref: svgRef,
                                        className: "lens-svg",
                                        viewBox: "0 0 520 440",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                                        id: "core",
                                                        cx: "50%",
                                                        cy: "50%",
                                                        r: "50%",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                offset: "0%",
                                                                stopColor: "#1F4DDB",
                                                                stopOpacity: "0.18"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                                lineNumber: 94,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                offset: "70%",
                                                                stopColor: "#1F4DDB",
                                                                stopOpacity: "0.04"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                                lineNumber: 95,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                offset: "100%",
                                                                stopColor: "#1F4DDB",
                                                                stopOpacity: "0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                                lineNumber: 96,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                        id: "lhalf",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            x: "0",
                                                            y: "0",
                                                            width: "260",
                                                            height: "440"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 40
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 92,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                id: "scan",
                                                x1: "0",
                                                y1: "60",
                                                x2: "520",
                                                y2: "60",
                                                stroke: "#1F4DDB",
                                                strokeOpacity: "0.3",
                                                strokeWidth: "1.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                opacity: "0.85",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "30",
                                                        y1: "80",
                                                        x2: "190",
                                                        y2: "195",
                                                        stroke: "#1F4DDB",
                                                        strokeOpacity: "0.3",
                                                        strokeWidth: "0.75",
                                                        strokeDasharray: "4 3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "30",
                                                        y1: "135",
                                                        x2: "190",
                                                        y2: "208",
                                                        stroke: "#1F4DDB",
                                                        strokeOpacity: "0.22",
                                                        strokeWidth: "0.75",
                                                        strokeDasharray: "3 4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "30",
                                                        y1: "195",
                                                        x2: "190",
                                                        y2: "220",
                                                        stroke: "#C26A0A",
                                                        strokeOpacity: "0.5",
                                                        strokeWidth: "1",
                                                        strokeDasharray: "5 3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "30",
                                                        y1: "255",
                                                        x2: "190",
                                                        y2: "232",
                                                        stroke: "#1F4DDB",
                                                        strokeOpacity: "0.22",
                                                        strokeWidth: "0.75",
                                                        strokeDasharray: "3 4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "30",
                                                        y1: "315",
                                                        x2: "190",
                                                        y2: "244",
                                                        stroke: "#C26A0A",
                                                        strokeOpacity: "0.4",
                                                        strokeWidth: "0.75",
                                                        strokeDasharray: "4 3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "30",
                                                        y1: "365",
                                                        x2: "190",
                                                        y2: "255",
                                                        stroke: "#1F4DDB",
                                                        strokeOpacity: "0.18",
                                                        strokeWidth: "0.75",
                                                        strokeDasharray: "3 4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 111,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "30",
                                                        cy: "80",
                                                        r: "3",
                                                        fill: "#1F4DDB",
                                                        fillOpacity: "0.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "30",
                                                        cy: "135",
                                                        r: "2.5",
                                                        fill: "#1F4DDB",
                                                        fillOpacity: "0.4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "30",
                                                        cy: "195",
                                                        r: "4",
                                                        fill: "#C26A0A"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "30",
                                                        cy: "255",
                                                        r: "2.5",
                                                        fill: "#1F4DDB",
                                                        fillOpacity: "0.4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "30",
                                                        cy: "315",
                                                        r: "3.5",
                                                        fill: "#C26A0A",
                                                        fillOpacity: "0.7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "30",
                                                        cy: "365",
                                                        r: "2.5",
                                                        fill: "#1F4DDB",
                                                        fillOpacity: "0.3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: "42",
                                                y: "77",
                                                fill: "#56636F",
                                                fontSize: "9.5",
                                                fontFamily: "'IBM Plex Mono',monospace",
                                                children: "decision_latency"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: "42",
                                                y: "132",
                                                fill: "#7A8794",
                                                fontSize: "9.5",
                                                fontFamily: "'IBM Plex Mono',monospace",
                                                children: "ownership_gap"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: "42",
                                                y: "192",
                                                fill: "#C26A0A",
                                                fontSize: "9.5",
                                                fontFamily: "'IBM Plex Mono',monospace",
                                                children: "leadership_block"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: "42",
                                                y: "252",
                                                fill: "#7A8794",
                                                fontSize: "9.5",
                                                fontFamily: "'IBM Plex Mono',monospace",
                                                children: "coord_overload"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 130,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: "42",
                                                y: "312",
                                                fill: "#C26A0A",
                                                fontSize: "9.5",
                                                fontFamily: "'IBM Plex Mono',monospace",
                                                opacity: "0.85",
                                                children: "change_fatigue"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 131,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: "42",
                                                y: "362",
                                                fill: "#9AA3AC",
                                                fontSize: "9.5",
                                                fontFamily: "'IBM Plex Mono',monospace",
                                                children: "strategy_drift"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "260",
                                                cy: "220",
                                                r: "130",
                                                fill: "url(#core)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "260",
                                                cy: "220",
                                                r: "128",
                                                stroke: "#1F4DDB",
                                                strokeOpacity: "0.12",
                                                strokeWidth: "0.75"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "260",
                                                cy: "220",
                                                r: "98",
                                                stroke: "#1F4DDB",
                                                strokeOpacity: "0.2",
                                                strokeWidth: "0.75"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "260",
                                                cy: "220",
                                                r: "68",
                                                stroke: "#1F4DDB",
                                                strokeOpacity: "0.4",
                                                strokeWidth: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "260",
                                                cy: "220",
                                                r: "40",
                                                fill: "#FBFAF6",
                                                stroke: "#1F4DDB",
                                                strokeOpacity: "0.65",
                                                strokeWidth: "1.25"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 137,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "260",
                                                y1: "186",
                                                x2: "260",
                                                y2: "254",
                                                stroke: "#1F4DDB",
                                                strokeOpacity: "0.25",
                                                strokeWidth: "0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 138,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "226",
                                                y1: "220",
                                                x2: "294",
                                                y2: "220",
                                                stroke: "#1F4DDB",
                                                strokeOpacity: "0.25",
                                                strokeWidth: "0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 139,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "260",
                                                cy: "220",
                                                r: "5",
                                                fill: "#1F4DDB"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                opacity: "0.9",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "328",
                                                        y1: "195",
                                                        x2: "358",
                                                        y2: "120",
                                                        stroke: "#0C141E",
                                                        strokeOpacity: "0.18",
                                                        strokeWidth: "0.75"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "330",
                                                        y1: "210",
                                                        x2: "358",
                                                        y2: "165",
                                                        stroke: "#0C141E",
                                                        strokeOpacity: "0.22",
                                                        strokeWidth: "0.75"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "332",
                                                        y1: "222",
                                                        x2: "358",
                                                        y2: "212",
                                                        stroke: "#1F4DDB",
                                                        strokeOpacity: "0.4",
                                                        strokeWidth: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "330",
                                                        y1: "232",
                                                        x2: "358",
                                                        y2: "258",
                                                        stroke: "#0C141E",
                                                        strokeOpacity: "0.18",
                                                        strokeWidth: "0.75"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "328",
                                                        y1: "244",
                                                        x2: "358",
                                                        y2: "305",
                                                        stroke: "#0C141E",
                                                        strokeOpacity: "0.14",
                                                        strokeWidth: "0.75"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 141,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                fontFamily: "'IBM Plex Mono',monospace",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "358",
                                                        y: "104",
                                                        width: "132",
                                                        height: "34",
                                                        rx: "5",
                                                        fill: "#FFFFFF",
                                                        stroke: "#1F4DDB",
                                                        strokeOpacity: "0.2",
                                                        strokeWidth: "0.75"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: "370",
                                                        y: "120",
                                                        fill: "#7A8794",
                                                        fontSize: "8.5",
                                                        children: "Health Score"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: "370",
                                                        y: "132",
                                                        fill: "#1F4DDB",
                                                        fontSize: "11",
                                                        fontWeight: "500",
                                                        children: "74 / 100"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "358",
                                                        y: "149",
                                                        width: "132",
                                                        height: "34",
                                                        rx: "5",
                                                        fill: "#FBEFD9",
                                                        fillOpacity: "0.5",
                                                        stroke: "#C26A0A",
                                                        strokeOpacity: "0.25",
                                                        strokeWidth: "0.75"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: "370",
                                                        y: "165",
                                                        fill: "#C26A0A",
                                                        fontSize: "8.5",
                                                        opacity: "0.8",
                                                        children: "Friction Index"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: "370",
                                                        y: "177",
                                                        fill: "#C26A0A",
                                                        fontSize: "11",
                                                        fontWeight: "500",
                                                        children: "MOD · 0.61"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "358",
                                                        y: "194",
                                                        width: "132",
                                                        height: "34",
                                                        rx: "5",
                                                        fill: "#F8E6E1",
                                                        fillOpacity: "0.5",
                                                        stroke: "#B23A2A",
                                                        strokeOpacity: "0.25",
                                                        strokeWidth: "0.75"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: "370",
                                                        y: "210",
                                                        fill: "#B23A2A",
                                                        fontSize: "8.5",
                                                        opacity: "0.85",
                                                        children: "EBITDA at Risk"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: "370",
                                                        y: "222",
                                                        fill: "#B23A2A",
                                                        fontSize: "11",
                                                        fontWeight: "500",
                                                        children: "$3.2M ±0.4M"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "358",
                                                        y: "239",
                                                        width: "132",
                                                        height: "34",
                                                        rx: "5",
                                                        fill: "#FFFFFF",
                                                        stroke: "#0C141E",
                                                        strokeOpacity: "0.1",
                                                        strokeWidth: "0.75"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: "370",
                                                        y: "255",
                                                        fill: "#7A8794",
                                                        fontSize: "8.5",
                                                        children: "Decision Velocity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: "370",
                                                        y: "267",
                                                        fill: "#56636F",
                                                        fontSize: "11",
                                                        fontWeight: "500",
                                                        children: "−18% ↓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "358",
                                                        y: "284",
                                                        width: "132",
                                                        height: "34",
                                                        rx: "5",
                                                        fill: "#DEF1E8",
                                                        fillOpacity: "0.5",
                                                        stroke: "#1B7A57",
                                                        strokeOpacity: "0.25",
                                                        strokeWidth: "0.75"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: "370",
                                                        y: "300",
                                                        fill: "#1B7A57",
                                                        fontSize: "8.5",
                                                        children: "Interventions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: "370",
                                                        y: "312",
                                                        fill: "#1B7A57",
                                                        fontSize: "11",
                                                        fontWeight: "500",
                                                        children: "4 prioritized"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: "260",
                                                y: "400",
                                                textAnchor: "middle",
                                                fill: "#9AA3AC",
                                                fontSize: "8.5",
                                                fontFamily: "'IBM Plex Mono',monospace",
                                                letterSpacing: "3",
                                                children: "SIGNALS  →  LENS  →  INTELLIGENCE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 165,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lens-cap",
                                        children: "Live execution risk scan · signals translated into friction risk"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Hero.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Hero.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_components_0u3.t60._.js.map