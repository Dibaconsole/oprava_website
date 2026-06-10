import React from 'react';
import Reveal from '../ui/Reveal';

export default function Product() {
  return (
    <section id="product">
      <div className="wrap">
        <Reveal><div className="eyebrow on-dark"><span className="num">03</span><span className="ln" style={{color:'var(--d-dim)'}} /><span className="lbl">The Product</span></div></Reveal>
        <Reveal><h2 className="head">A new operating language for organizational performance.</h2></Reveal>
        <Reveal><p className="lead on-dark">Three proprietary metrics: Organizational Health Score, Execution Friction Index, and EBITDA at Risk, alongside diagnostic views no other platform provides. Oprava gives leadership teams a common language for health, friction, risk, and intervention priority.</p></Reveal>

        <Reveal>
          <div className="dash">
            {/* Browser bar */}
            <div className="dash-bar">
              <div className="dash-bar-l">
                <div className="tdots">
                  <span className="tdot" style={{background:'#FF5F57'}}/>
                  <span className="tdot" style={{background:'#FEBC2E'}}/>
                  <span className="tdot" style={{background:'#28C840'}}/>
                </div>
                <div className="dash-sep"/>
                <span className="dash-path">oprava / portfolio / company-c / execution-intelligence</span>
              </div>
              <div className="dash-bar-r">
                <span className="dpill co">Company C</span>
                <span className="dpill live">Live</span>
              </div>
            </div>

            <div className="dash-body">
              {/* Sidebar nav */}
              <aside className="dnav">
                <div className="dnav-g">
                  <div className="dnav-lbl">Core Scores</div>
                  <div className="dnav-i on"><span className="dnav-dot" style={{background:'#7DA0F5'}}/><span className="dnav-t">Execution Overview</span></div>
                  <div className="dnav-i"><span className="dnav-dot" style={{background:'rgba(255,255,255,0.2)'}}/><span className="dnav-t">Health Score Detail</span></div>
                </div>
                <div className="dnav-div"/>
                <div className="dnav-g">
                  <div className="dnav-lbl">Friction Diagnostics</div>
                  <div className="dnav-i"><span className="dnav-dot" style={{background:'#E08A12'}}/><span className="dnav-t">Friction Source Map</span></div>
                  <div className="dnav-i"><span className="dnav-dot" style={{background:'#E36B5A'}}/><span className="dnav-t">Decision Bottleneck</span></div>
                  <div className="dnav-i"><span className="dnav-dot" style={{background:'#E08A12'}}/><span className="dnav-t">Ownership Ambiguity</span></div>
                </div>
                <div className="dnav-div"/>
                <div className="dnav-g">
                  <div className="dnav-lbl">Financial Risk</div>
                  <div className="dnav-i"><span className="dnav-dot" style={{background:'#E36B5A'}}/><span className="dnav-t">EBITDA Exposure</span></div>
                  <div className="dnav-i"><span className="dnav-dot" style={{background:'#E08A12'}}/><span className="dnav-t">Risk Timeline</span></div>
                </div>
                <div className="dnav-div"/>
                <div className="dnav-g">
                  <div className="dnav-lbl">Intelligence</div>
                  <div className="dnav-i"><span className="dnav-dot" style={{background:'#43C893'}}/><span className="dnav-t">Interventions</span></div>
                  <div className="dnav-i"><span className="dnav-dot" style={{background:'rgba(255,255,255,0.2)'}}/><span className="dnav-t">Benchmarks</span></div>
                </div>
              </aside>

              {/* Main content */}
              <div className="dmain">
                {/* KPIs */}
                <div className="dkpis">
                  <div className="kpi b">
                    <div className="kpi-eb">Organizational Health Score</div>
                    <div className="kpi-v b">74</div>
                    <div className="kpi-n">Composite execution capacity</div>
                    <div className="kpi-t dn">↓ 6 pts vs. prior quarter</div>
                    <div className="kpi-c">Sector median: 82</div>
                  </div>
                  <div className="kpi a">
                    <div className="kpi-eb">Execution Friction Index</div>
                    <div className="kpi-v a">MOD&nbsp;·&nbsp;0.61</div>
                    <div className="kpi-n">Hidden drag on execution</div>
                    <div className="kpi-t dn">↑ Elevated from LOW</div>
                    <div className="kpi-c">Driver: decision latency</div>
                  </div>
                  <div className="kpi r">
                    <div className="kpi-eb">EBITDA at Risk · Estimated</div>
                    <div className="kpi-v r">$3.2M</div>
                    <div className="kpi-n">Exposure from unresolved friction</div>
                    <div className="kpi-t dn">↑ Up from $1.8M</div>
                    <div className="kpi-c">Confidence range: $2.8M – $3.6M</div>
                  </div>
                </div>

                {/* Row 1 */}
                <div className="dgrid2">
                  <div className="panel">
                    <div className="panel-h"><span className="panel-t">Friction Source Map</span><span className="panel-badge">5 active</span></div>
                    <div className="fmap">
                      {[
                        {l:'Decision Latency',w:86,c:'#E36B5A',p:'High'},
                        {l:'Ownership Clarity',w:61,c:'#E08A12',p:'61%'},
                        {l:'Change Readiness',w:68,c:'#E08A12',p:'68%'},
                        {l:'Alignment Index',w:72,c:'#7DA0F5',p:'72%'},
                        {l:'Coordination Load',w:58,c:'#E08A12',p:'58%'},
                      ].map((r) => (
                        <div key={r.l} className="fmap-r">
                          <span className="fmap-l">{r.l}</span>
                          <div className="fbar-bg"><div className="fbar" style={{width:`${r.w}%`,background:r.c}}/></div>
                          <span className="fmap-p" style={{color:r.c}}>{r.p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel-h"><span className="panel-t">Decision Bottleneck Path</span></div>
                    <div className="bn-list">
                      {[
                        {t:'Product Org → CEO approval required',s:'CRIT',c:'#E36B5A'},
                        {t:'Finance workflow: 4-layer approval',s:'HIGH',c:'#E08A12'},
                        {t:'Initiative #7: no DRI assigned',s:'MED',c:'#E08A12'},
                        {t:'Ops: cross-team routing loops',s:'MOD',c:'rgba(255,255,255,0.35)'},
                      ].map((b) => (
                        <div key={b.t} className="bn" style={{borderLeftColor:b.c}}>
                          <span className="bn-t">{b.t}</span>
                          <span className="bn-s" style={{color:b.c}}>{b.s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="dgrid2">
                  <div className="panel">
                    <div className="panel-h"><span className="panel-t">Execution Risk Timeline</span></div>
                    <div className="tl">
                      {[
                        {w:'Wk 1',pct:35,c:'#7DA0F5',l:'Low'},
                        {w:'Wk 4',pct:50,c:'#7DA0F5',l:'Stable'},
                        {w:'Wk 8',pct:67,c:'#E08A12',l:'Moderate'},
                        {w:'Wk 12',pct:81,c:'#E36B5A',l:'Elevated'},
                        {w:'Now',pct:88,c:'#E36B5A',l:'High Risk',hi:true},
                      ].map((r) => (
                        <div key={r.w} className="tl-r" style={r.hi ? {borderColor:'rgba(178,58,42,0.25)',background:'rgba(178,58,42,0.05)'} : undefined}>
                          <span className="tl-w" style={r.hi ? {color:'#E36B5A'} : undefined}>{r.w}</span>
                          <div className="tl-b"><div className="tl-f" style={{width:`${r.pct}%`,background:r.c}}/></div>
                          <span className="tl-l" style={{color:r.c}}>{r.l}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel-h"><span className="panel-t">Intervention Priority Score</span></div>
                    <div className="iv-list">
                      {[
                        {p:'P1',cls:'p1',x:'Assign DRI: Initiative #7 (Product)'},
                        {p:'P1',cls:'p1',x:'Reduce Finance approval layers to 2'},
                        {p:'P2',cls:'p2',x:'Leadership sync: Product / Ops misalignment'},
                        {p:'P2',cls:'p2',x:'Reassess transformation sequence: Q3'},
                      ].map((iv,i) => (
                        <div key={i} className="iv">
                          <span className={`iv-s ${iv.cls}`}>{iv.p}</span>
                          <span className="iv-x">{iv.x}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
