'use client';

import React, { createContext, useContext, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useGuide } from './GuideProvider';

// ── Guide data ───────────────────────────────────────────────────────────────

const GUIDE_CHIPS = [
    { label: 'What does Oprava do?', key: 'overview' },
    { label: 'What is execution friction?', key: 'friction' },
    { label: 'How does it help PE firms?', key: 'pe' },
    { label: 'What is the Ontology?', key: 'ontology' },
    { label: 'How does the diagnostic work?', key: 'diagnostic' },
    { label: 'Is it an engagement tool?', key: 'engagement' },
    { label: 'Show me the dashboard', key: 'product' },
    { label: 'Why is Oprava defensible?', key: 'defensible' },
    { label: 'Give me a quick tour', key: 'tour' },
] as const;

type ChipKey = typeof GUIDE_CHIPS[number]['key'];

type GuideAnswer = {
    text: string;
    actionLabel: string;
    section: string | null;
    isTour?: boolean;
};

const GUIDE_ANSWERS: Record<ChipKey, GuideAnswer> = {
    overview: {
        text: 'Oprava helps CEOs, PE operating partners, and leadership teams detect hidden execution friction — the organizational drag that slows decisions, delays execution, and quietly erodes value. It translates operational signals into measurable risk, then surfaces the interventions most likely to restore execution speed.',
        actionLabel: 'View the Solution',
        section: 'solution',
    },
    friction: {
        text: 'Execution friction is the hidden drag that slows how organizations turn decisions into outcomes. It shows up as decision latency, unclear ownership, misaligned incentives, and compounding operational delays — all of which reduce EBITDA without appearing directly on any report.',
        actionLabel: 'View the Problem',
        section: 'problem',
    },
    pe: {
        text: 'For PE operating partners, Oprava creates a repeatable way to see execution risk across portfolio companies. Instead of relying on management self-reporting, you get an objective view of where friction is highest, which risks are compounding, and where to focus operating resources first.',
        actionLabel: 'View PE Use Case',
        section: 'pe',
    },
    ontology: {
        text: "The Organizational Health Ontology is Oprava's proprietary intelligence layer. It maps relationships between behavior, systems, operations, execution, and financial outcomes — so the platform can detect friction patterns, not just surface data points. This is what makes Oprava's risk signal defensible over time.",
        actionLabel: 'View Architecture',
        section: 'ontology',
    },
    diagnostic: {
        text: 'The 30-day diagnostic gives leadership an immediate, structured view of where execution friction is highest. Oprava ingests operational signals, runs them through the ontology, and produces a prioritized risk map — with EBITDA-at-risk estimates and recommended interventions ready for the first operating review.',
        actionLabel: 'Run a 30-Day Diagnostic',
        section: 'pilot',
    },
    engagement: {
        text: 'No. Oprava is not an employee engagement or survey platform. It does not measure sentiment or culture in the traditional sense. It measures execution — specifically, the structural and operational friction that slows how organizations turn strategy into outcomes. The distinction matters: engagement tools tell you how people feel; Oprava tells you where execution is leaking.',
        actionLabel: 'See How Oprava Is Different',
        section: 'comparison',
    },
    product: {
        text: "The Oprava dashboard gives leadership a single executive-ready view of organizational health: friction signals, EBITDA-at-risk indicators, bottleneck maps, execution timelines, and prioritized interventions. It's designed for operating reviews, not just reporting.",
        actionLabel: 'View Product',
        section: 'product',
    },
    defensible: {
        text: "Oprava is designed to become defensible over time. The Organizational Health Ontology accumulates signal as it runs — learning what friction patterns matter in your specific operating context. Over a portfolio or multi-entity deployment, Oprava's risk model becomes increasingly calibrated, and increasingly hard to replicate.",
        actionLabel: 'View Intelligence Layer',
        section: 'ontology',
    },
    tour: {
        text: 'The Executive Walkthrough will guide you through the full Oprava platform story — from how execution friction forms, to how Oprava detects and quantifies it, to what leadership can do with that insight. Starting now.',
        actionLabel: 'Start Executive Walkthrough',
        section: null,
        isTour: true,
    },
};

const GUIDE_KEYWORDS: Record<ChipKey, string[]> = {
    overview: ['what does oprava do', 'what is oprava', 'overview', 'solution', 'oprava do', 'oprava help'],
    friction: ['execution friction', 'friction', 'hidden drag', 'decision latency'],
    pe: ['private equity', 'pe firm', 'operating partner', 'portfolio', 'pe operating', 'pe use'],
    ontology: ['ontology', 'architecture', 'intelligence layer', 'health ontology'],
    diagnostic: ['diagnostic', 'pilot', '30 day', '30-day', 'how does it work', 'how does the'],
    engagement: ['engagement', 'sentiment', 'survey', 'employee engagement', 'engagement tool'],
    product: ['dashboard', 'product', 'show me', 'product dashboard'],
    defensible: ['defensible', 'moat', 'hard to replicate', 'defensibility'],
    tour: ['tour', 'walkthrough', 'executive walkthrough', 'quick tour'],
};

const GUIDE_FALLBACK = "That's a great question. Oprava is currently focused on helping leadership teams identify execution friction, quantify organizational risk, and prioritize action. For a deeper discussion, the best next step is to run a focused 30-day diagnostic.";

const WELCOME_TEXT = "Hi, I'm the Oprava Guide. I can help you understand how Oprava detects hidden execution friction, translates organizational signals into risk, and supports better execution decisions.";

// ── Types ────────────────────────────────────────────────────────────────────

type MsgRole = 'guide' | 'user';

type GuideMsg = {
    id: string;
    role: MsgRole;
    text: string;
    actionLabel?: string;
    section?: string | null;
    isTour?: boolean;
};

type ChatContextValue = {
    openChat: () => void;
};

// ── Context ──────────────────────────────────────────────────────────────────

const ChatContext = createContext<ChatContextValue | undefined>(undefined);

export function useChat() {
    const ctx = useContext(ChatContext);
    if (!ctx) throw new Error('useChat must be used within a ChatProvider');
    return ctx;
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function matchKey(q: string): ChipKey | null {
    const lower = q.toLowerCase();
    for (const chip of GUIDE_CHIPS) {
        if (GUIDE_KEYWORDS[chip.key].some((kw) => lower.includes(kw))) return chip.key;
    }
    return null;
}

let msgCounter = 0;
function nextId() { return `gm-${++msgCounter}`; }

// ── Component ────────────────────────────────────────────────────────────────

export default function ChatProvider({ children }: { children: React.ReactNode }) {
    const { startTour } = useGuide();

    const [open, setOpen] = useState(false);
    const [minimized, setMinimized] = useState(false);
    const [messages, setMessages] = useState<GuideMsg[]>([]);
    const [inputVal, setInputVal] = useState('');
    const [initialized, setInitialized] = useState(false);
    const msgsRef = useRef<HTMLDivElement>(null);

    const addMsg = useCallback(
        (role: MsgRole, text: string, opts?: Partial<Omit<GuideMsg, 'id' | 'role' | 'text'>>) => {
            setMessages((prev) => [...prev, { id: nextId(), role, text, ...opts }]);
        },
        [],
    );

    const showWelcome = useCallback(() => {
        setMessages([{ id: nextId(), role: 'guide', text: WELCOME_TEXT }]);
    }, []);

    const openGuide = useCallback(() => {
        setOpen(true);
        setMinimized(false);
        if (!initialized) {
            setInitialized(true);
            showWelcome();
        }
    }, [initialized, showWelcome]);

    const closeGuide = useCallback(() => {
        setOpen(false);
        setMinimized(false);
    }, []);

    const scrollToSection = useCallback(
        (sectionId: string) => {
            closeGuide();
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 350);
        },
        [closeGuide],
    );

    const handleTour = useCallback(() => {
        closeGuide();
        setTimeout(startTour, 400);
    }, [closeGuide, startTour]);

    const handleChip = useCallback(
        (key: ChipKey, label: string) => {
            addMsg('user', label);
            const answer = GUIDE_ANSWERS[key];
            setTimeout(() => {
                addMsg('guide', answer.text, {
                    actionLabel: answer.actionLabel,
                    section: answer.section,
                    isTour: answer.isTour,
                });
            }, 300);
        },
        [addMsg],
    );

    const sendMessage = useCallback(() => {
        const q = inputVal.trim();
        if (!q) return;
        setInputVal('');
        addMsg('user', q);
        setTimeout(() => {
            const key = matchKey(q);
            if (key) {
                const a = GUIDE_ANSWERS[key];
                addMsg('guide', a.text, { actionLabel: a.actionLabel, section: a.section, isTour: a.isTour });
            } else {
                addMsg('guide', GUIDE_FALLBACK, { actionLabel: 'Run a 30-Day Diagnostic', section: 'pilot' });
            }
        }, 300);
    }, [inputVal, addMsg]);

    const clearConversation = useCallback(() => {
        showWelcome();
    }, [showWelcome]);

    useEffect(() => {
        if (msgsRef.current) {
            msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
        }
    }, [messages]);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeGuide(); };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [open, closeGuide]);

    const contextValue = useMemo(() => ({ openChat: openGuide }), [openGuide]);

    const panelClass = [open && 'open', minimized && 'minimized'].filter(Boolean).join(' ');

    return (
        <ChatContext.Provider value={contextValue}>
            {children}

            {/* Launcher button */}
            <div
                id="guide-launcher"
                role="button"
                tabIndex={0}
                aria-expanded={open}
                aria-controls="guide-panel"
                aria-label="Open Oprava Guide"
                onClick={openGuide}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openGuide(); }
                }}
            >
                <div style={{ position: 'relative', width: 30, height: 30, flexShrink: 0 }}>
                    <div className="gl-ring" />
                    <div className="gl-icon">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <circle cx="8" cy="8" r="6.5" stroke="#fff" strokeWidth="1.4" />
                            <path
                                d="M5.5 6.5C5.5 5.12 6.62 4 8 4s2.5 1.12 2.5 2.5c0 1.1-.7 2.04-1.7 2.4V10h-1.6V8.4C6.2 8.04 5.5 7.1 5.5 6.5z"
                                fill="#fff"
                                opacity="0.9"
                            />
                            <circle cx="8" cy="12" r="1" fill="#fff" />
                        </svg>
                    </div>
                </div>
                <span>Ask Oprava</span>
            </div>

            {/* Guide panel */}
            <div
                id="guide-panel"
                className={panelClass}
                role="dialog"
                aria-modal="true"
                aria-label="Oprava Guide"
            >
                <div className="gp-header">
                    <div className="gp-hicon">
                        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" />
                            <path
                                d="M5.5 6.5C5.5 5.12 6.62 4 8 4s2.5 1.12 2.5 2.5c0 1.1-.7 2.04-1.7 2.4V10h-1.6V8.4C6.2 8.04 5.5 7.1 5.5 6.5z"
                                fill="currentColor"
                                opacity="0.9"
                            />
                            <circle cx="8" cy="12" r="1" fill="currentColor" />
                        </svg>
                    </div>
                    <div className="gp-htitle">
                        <strong>Oprava Guide</strong>
                        <span className='font-mono'>NAVIGATE THE PLATFORM STORY.</span>
                    </div>
                    <div className="gp-hbtns"> 
                        <button
                            className="gp-hbtn"
                            type="button"
                            onClick={() => setMinimized(true)}
                            aria-label="Minimize"
                        >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </button>
                        <button className="gp-hbtn" type="button" onClick={closeGuide} aria-label="Close">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path
                                    d="M2 2l10 10M12 2L2 12"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="gp-msgs" ref={msgsRef} role="log" aria-live="polite">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`gm ${msg.role}`}>
                            <div className="gm-bubble">{msg.text}</div>
                            {msg.actionLabel && !msg.isTour && msg.section && (
                                <button
                                    className="gm-action"
                                    type="button"
                                    onClick={() => scrollToSection(msg.section!)}
                                >
                                    {msg.actionLabel} →
                                </button>
                            )}
                            {msg.isTour && (
                                <button className="gm-action" type="button" onClick={handleTour}>
                                    {msg.actionLabel} →
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                <div className="gp-chips-label">Quick questions</div>
                <div className="gp-chips">
                    {GUIDE_CHIPS.map((chip) => (
                        <button
                            key={chip.key}
                            className="gp-chip"
                            type="button"
                            onClick={() => handleChip(chip.key, chip.label)}
                        >
                            {chip.label}
                        </button>
                    ))}
                </div>

                <div className="gp-ctas">
                    <a
                        href="#pilot"
                        className="gp-cta-p"
                        onClick={(e) => { e.preventDefault(); scrollToSection('pilot'); }}
                    >
                        Run a 30-Day Diagnostic
                    </a>
                    <button className="gp-cta-s" type="button" onClick={handleTour}>
                        Start Executive Walkthrough
                    </button>
                    <button className="gp-clear" type="button" onClick={clearConversation}>
                        Clear conversation
                    </button>
                </div>

                <div className="gp-input-row">
                    <input
                        className="gp-input"
                        id="guide-input"
                        type="text"
                        value={inputVal}
                        placeholder="Ask about Oprava, execution friction, PE use cases…"
                        onChange={(e) => setInputVal(e.target.value)}
                        onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }}
                    />
                    <button
                        className="gp-send"
                        id="guide-send"
                        type="button"
                        onClick={sendMessage}
                        disabled={!inputVal.trim()}
                        aria-label="Send"
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path
                                d="M8 13V3M3 8l5-5 5 5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </ChatContext.Provider>
    );
}
