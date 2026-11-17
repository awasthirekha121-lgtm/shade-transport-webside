// Shade Transport Private Limited - Master React 18 Application
// Featuring 24/7 Service & Assistance, Compact India Map, Indian Trucks Fleet, and Directors
const { useState, useMemo } = React;

const FLEET_DATA = window.FLEET_DATA || [];
const NETWORK_NODES = window.NETWORK_NODES || [];
const DIRECTORS_DATA = window.DIRECTORS_DATA || [];
const FLEET_STANDARDS = window.FLEET_STANDARDS || [];

function ShadeTransportApp() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFleetFilter, setActiveFleetFilter] = useState("all");
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [activeFaq, setActiveFaq] = useState(0);
  const [callToggleMode, setCallToggleMode] = useState("call"); // 'call' | 'whatsapp'

  // India Map State
  const [activeMapFilter, setActiveMapFilter] = useState("all");
  const [selectedNode, setSelectedNode] = useState(
    NETWORK_NODES.find(n => n.id === "delhi") || NETWORK_NODES[1]
  );

  // Filtered Fleet
  const filteredFleet = useMemo(() => {
    if (activeFleetFilter === "all") return FLEET_DATA;
    return FLEET_DATA.filter(item => item.category === activeFleetFilter);
  }, [activeFleetFilter]);

  // Filtered Map Nodes
  const filteredMapNodes = useMemo(() => {
    if (activeMapFilter === "all") return NETWORK_NODES;
    if (activeMapFilter === "ports") return NETWORK_NODES.filter(n => n.type === "port" || n.type === "hub");
    if (activeMapFilter === "metros") return NETWORK_NODES.filter(n => ["mumbai", "delhi", "kolkata", "bengaluru", "chennai", "hyderabad", "ahmedabad", "lucknow"].includes(n.id));
    if (activeMapFilter === "regional") return NETWORK_NODES.filter(n => ["kanpur", "agra", "varanasi", "gorakhpur", "patna", "jaipur", "chandigarh", "lucknow"].includes(n.id));
    return NETWORK_NODES;
  }, [activeMapFilter]);

  const lucknowHub = NETWORK_NODES.find(n => n.id === "lucknow") || { x: 435, y: 250 };

  return (
    <div className="site-wrapper">
      {/* Topline Utility Bar with 24/7 Service Badge */}
      <div className="topline">
        <div className="topline-left">
          <span className="topline-location">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Lucknow, Uttar Pradesh
          </span>
          <span className="topline-badge">CIN: U63030UP2016PTC084403</span>
        </div>
        <div className="topline-center">
          <span className="pulse-dot"></span>
          <strong>24/7 DISPATCH DESK &amp; HIGHWAY BREAKDOWN ASSISTANCE ACTIVE</strong>
        </div>
        <div className="topline-right">
          <a href="tel:+918115137699" className="topline-phone">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            24/7 Hotline: +91 8115137699
          </a>
          <div className="topline-switcher">
            <span>Framework:</span>
            <a href="index.html" className="active" title="Viewing React 18 SPA">React</a>
            <a href="vue.html" title="Switch to Vue.js 3 SPA">Vue.js</a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Shade Transport Home">
          <img src="assets/images/shade-logo-mark.png" alt="Shade Transport Logo" className="brand-logo-mark" width="40" height="36" />
          <div className="brand-text">
            <span className="brand-name">shade<span>transport</span></span>
            <span className="brand-tagline">Private Limited · Lucknow</span>
          </div>
        </a>

        <nav className="main-nav" aria-label="Main Navigation">
          <a href="#services" className="nav-link">Services</a>
          <a href="#fleet" className="nav-link">Our Fleet</a>
          <a href="#journey" className="nav-link">India Map &amp; Ports</a>
          <a href="#directors" className="nav-link">Our Directors</a>
          <a href="#assistance" className="nav-link">24/7 Assistance</a>
          <a href="#reviews" className="nav-link">Client Reviews</a>
          <a href="#contact" className="nav-link">Contact &amp; Hubs</a>
        </nav>

        <div className="header-actions">
          <a href="tel:+918115137699" className="nav-cta" style={{ background: '#24353b' }}>
            <span className="pulse-dot" style={{ width: '6px', height: '6px' }}></span>
            24/7 Support: 8115137699
          </a>
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
      <aside className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <span className="brand-name">shade<span>transport</span></span>
          <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu" style={{ fontSize: '1.5rem', color: 'var(--ink)' }}>×</button>
        </div>
        <nav className="drawer-nav">
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>What We Move</a>
          <a href="#fleet" onClick={() => setMobileMenuOpen(false)}>Our Fleet (12 Categories)</a>
          <a href="#journey" onClick={() => setMobileMenuOpen(false)}>India Map &amp; Ports</a>
          <a href="#directors" onClick={() => setMobileMenuOpen(false)}>Our Directors (Leadership)</a>
          <a href="#assistance" onClick={() => setMobileMenuOpen(false)}>24/7 Service &amp; Assistance</a>
          <a href="#reviews" onClick={() => setMobileMenuOpen(false)}>Google Reviews</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>Frequently Asked Questions</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Headquarters &amp; Hubs</a>
        </nav>
        <div className="drawer-footer">
          <a href="tel:+918115137699" className="button button-dark" style={{ width: '100%', marginBottom: '10px' }}>
            Call 24/7: +91 8115137699
          </a>
          <a href="https://wa.me/918115137699" target="_blank" rel="noopener noreferrer" className="button button-whatsapp" style={{ width: '100%' }}>
            WhatsApp 24/7 Desk
          </a>
        </div>
      </aside>

      {/* Hero Section */}
      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            24/7 TRANSPORT &amp; LOGISTICS PARTNER · LUCKNOW TO PAN-INDIA
          </div>
          <h1 className="hero-title">
            Transportation<br />
            services in<br />
            <em>Lucknow.</em>
          </h1>
          <p className="hero-intro">
            Looking for goods transportation or movers and packers in Lucknow? Shade Transport Private Limited provides round-the-clock 24/7 full truckloads (FTL), part loads (PTL), container shipping, and household relocation across India's highways, cities, and ports.
          </p>
          <div className="hero-actions">
            <a href="#journey" className="button button-dark">
              Explore India Map &amp; Ports
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a 
              href="https://wa.me/918115137699?text=Hi%20Shade%20Transport%2C%20I%20need%2024%2F7%20transport%20assistance%20or%20packers%20and%20movers%20service.%20Please%20share%20details." 
              className="button button-whatsapp" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              Chat on WhatsApp (24/7)
            </a>
            <a href="tel:+918115137699" className="button button-light">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Direct Call: 8115137699
            </a>
          </div>

          {/* Interactive Call Toggle Widget */}
          <div className="call-toggle-widget">
            <div className="call-toggle-header">
              <div>
                <span className="eyebrow eyebrow-light" style={{ margin: 0 }}><span className="eyebrow-line"></span> QUICK DISPATCH CONNECT</span>
                <strong style={{ display: 'block', fontSize: '1.02rem', color: '#fff', marginTop: '3px' }}>24/7 Assistance Channel Toggle</strong>
              </div>
              <div className="call-toggle-switch">
                <button 
                  className={`toggle-mode-btn ${callToggleMode === 'call' ? 'active' : ''}`}
                  onClick={() => setCallToggleMode('call')}
                  type="button"
                  aria-label="Toggle Phone Hotline Mode"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Phone Hotline
                </button>
                <button 
                  className={`toggle-mode-btn whatsapp-mode ${callToggleMode === 'whatsapp' ? 'active' : ''}`}
                  onClick={() => setCallToggleMode('whatsapp')}
                  type="button"
                  aria-label="Toggle WhatsApp Desk Mode"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  WhatsApp Desk
                </button>
              </div>
            </div>

            <div className="call-toggle-body">
              <div className="call-toggle-info">
                <span className="call-toggle-number">
                  {callToggleMode === 'call' ? '+91 8115137699' : '+91 8115137699'}
                </span>
                <span className="call-toggle-status">
                  <span className="pulse-dot"></span>
                  {callToggleMode === 'call' ? 'Live Dispatch Officer On Duty · Zero Wait Time' : 'WhatsApp Dispatch Desk Online Now'}
                </span>
              </div>
              <div>
                {callToggleMode === 'call' ? (
                  <a href="tel:+918115137699" className="button button-clay" style={{ padding: '9px 20px', fontSize: '0.84rem' }}>
                    📞 Call 24/7 Hotline
                  </a>
                ) : (
                  <a href="https://wa.me/918115137699?text=Hi%20Shade%20Transport%2C%20I%20need%20immediate%20transport%20assistance%20or%20truck%20quote." target="_blank" rel="noopener noreferrer" className="button button-whatsapp" style={{ padding: '9px 20px', fontSize: '0.84rem' }}>
                    💬 Chat on WhatsApp
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="hero-footnote">
            <span className="pin-dot"></span>
            Rooted in Lucknow · 24/7 Operations Desk coordinating fleet across all 28 states &amp; major seaports.
          </div>
        </div>

        <div className="hero-visual">
          <img src="assets/images/shade-container-truck.jpg" alt="Commercial container truck on Indian highway" width="1024" height="680" />
          <div className="image-wash"></div>
          <div className="visual-index"><span>24/7</span> / ACTIVE HIGHWAY FLEET</div>
          <div className="visual-caption">
            <span className="caption-rule"></span>
            <p>Non-stop logistics connectivity between Lucknow and major commercial cities, dry ports, and sea terminals.</p>
          </div>
          <div className="route-stamp" aria-label="Central Hub in Lucknow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg>
            <span>CENTRAL HUB</span>
            <strong>Lucknow, UP</strong>
            <small style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--clay)' }}>26°50′N / 80°56′E</small>
          </div>
        </div>
      </section>

      {/* Stats Banner Strip */}
      <section className="stats-strip">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Service &amp; Highway Assistance</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">28+</span>
            <span className="stat-label">States &amp; UTs Connected</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">12</span>
            <span className="stat-label">Vehicle Categories</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4.5★</span>
            <span className="stat-label">60+ Google Reviews</span>
          </div>
        </div>
      </section>

      {/* Services Grid: What We Move */}
      <section className="section-pad" id="services">
        <div className="container-boxed">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line"></span> SERVICES WE OFFER</div>
              <h2>All Types of Transport.<br /><em>Pan-India Network.</em></h2>
            </div>
            <p className="heading-aside">
              From full truckloads to certified packers and movers, Shade Transport Private Limited provides round-the-clock end-to-end transportation services across India.
            </p>
          </div>

          <div className="services-grid-main">
            {/* Service 1 */}
            <article className="service-card">
              <div className="service-header-row">
                <span className="service-index">01 / FTL FREIGHT</span>
                <div className="service-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                </div>
              </div>
              <h3 className="service-title">Full Truckload (FTL)</h3>
              <p className="service-desc">
                Dedicated non-stop trucks assigned exclusively to your consignment from Lucknow to any destination or port across India. Direct point-to-point transit with zero intermediate handling.
              </p>
              <div className="service-tags">
                <span className="service-tag">Direct Highway Transit</span>
                <span className="service-tag">Sealed Containers</span>
                <span className="service-tag">24/7 Monitored</span>
              </div>
              <a href="https://wa.me/918115137699?text=Hi%20Shade%20Transport%2C%20I%20want%20to%20inquire%20about%20Full%20Truckload%20(FTL)%20service." target="_blank" rel="noopener noreferrer" className="service-link">
                Book FTL via WhatsApp →
              </a>
            </article>

            {/* Service 2 */}
            <article className="service-card">
              <div className="service-header-row">
                <span className="service-index">02 / MOVERS &amp; PACKERS</span>
                <div className="service-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                </div>
              </div>
              <h3 className="service-title">Packers &amp; Movers</h3>
              <p className="service-desc">
                Professional residential and corporate relocation in Lucknow and interstate. Complete 5-layer protective packing, cautious handling of delicate glassware, furniture assembly, and doorstep unpacking.
              </p>
              <div className="service-tags">
                <span className="service-tag">5-Layer Bubble Packing</span>
                <span className="service-tag">Trained Crew</span>
                <span className="service-tag">Transit Insurance</span>
              </div>
              <a href="https://wa.me/918115137699?text=Hi%20Shade%20Transport%2C%20I%20want%20to%20plan%20a%20home%20or%20office%20move%20with%20your%20movers%20and%20packers%20team." target="_blank" rel="noopener noreferrer" className="service-link">
                Plan Home Move →
              </a>
            </article>

            {/* Service 3 */}
            <article className="service-card">
              <div className="service-header-row">
                <span className="service-index">03 / PART TRUCKLOAD</span>
                <div className="service-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
                </div>
              </div>
              <h3 className="service-title">Part Truckload (PTL / Parcel)</h3>
              <p className="service-desc">
                Economical shared cargo transportation for smaller commercial shipments that do not require an entire vehicle. Scheduled regional departures connecting Lucknow to major economic hubs.
              </p>
              <div className="service-tags">
                <span className="service-tag">Cost Efficient</span>
                <span className="service-tag">Scheduled Departures</span>
                <span className="service-tag">Hub Consolidation</span>
              </div>
              <a href="https://wa.me/918115137699?text=Hi%20Shade%20Transport%2C%20I%20have%20a%20part-load%20parcel%20consignment." target="_blank" rel="noopener noreferrer" className="service-link">
                Inquire Part Load →
              </a>
            </article>

            {/* Service 4 */}
            <article className="service-card">
              <div className="service-header-row">
                <span className="service-index">04 / INDUSTRIAL &amp; SEAPORTS</span>
                <div className="service-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                </div>
              </div>
              <h3 className="service-title">Industrial &amp; Port Logistics</h3>
              <p className="service-desc">
                Direct highway and container hauling connecting manufacturing facilities in UP to India’s primary seaports (JNPT, Mundra, Kandla, Chennai, Vizag, Haldia) and inland dry ports (ICDs).
              </p>
              <div className="service-tags">
                <span className="service-tag">Port Container Haulage</span>
                <span className="service-tag">Heavy Plant Machinery</span>
                <span className="service-tag">ODC Cargo</span>
              </div>
              <a href="#journey" className="service-link">
                View Port Network →
              </a>
            </article>

            {/* Service 5 */}
            <article className="service-card">
              <div className="service-header-row">
                <span className="service-index">05 / REEFER COLD CHAIN</span>
                <div className="service-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><path d="m4.93 4.93 14.14 14.14"/><path d="m19.07 4.93-14.14 14.14"/></svg>
                </div>
              </div>
              <h3 className="service-title">Temperature-Controlled Reefer</h3>
              <p className="service-desc">
                Precision refrigerated trucks maintaining temperatures from -25°C to +15°C for pharmaceuticals, vaccines, dairy products, and perishable agricultural commodities.
              </p>
              <div className="service-tags">
                <span className="service-tag">Continuous Temp Log</span>
                <span className="service-tag">Pharma Grade</span>
                <span className="service-tag">Express Transit</span>
              </div>
              <a href="https://wa.me/918115137699?text=Hi%20Shade%20Transport%2C%20I%20need%20refrigerated%20reefer%20vehicle%20service." target="_blank" rel="noopener noreferrer" className="service-link">
                Request Cold Chain →
              </a>
            </article>

            {/* Service 6 */}
            <article className="service-card">
              <div className="service-header-row">
                <span className="service-index">06 / WAREHOUSING</span>
                <div className="service-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><line x1="9" y1="9" x2="9" y2="9.01"/><line x1="9" y1="12" x2="9" y2="12.01"/><line x1="9" y1="15" x2="9" y2="15.01"/><line x1="9" y1="18" x2="9" y2="18.01"/></svg>
                </div>
              </div>
              <h3 className="service-title">Warehousing &amp; Distribution</h3>
              <p className="service-desc">
                Strategically located storage, transshipment, and distribution facilities in Transport Nagar, Lucknow with 24/7 security, material handling equipment, and inventory control.
              </p>
              <div className="service-tags">
                <span className="service-tag">Transport Nagar Lucknow</span>
                <span className="service-tag">Safe Staging</span>
                <span className="service-tag">24/7 Security</span>
              </div>
              <a href="https://wa.me/918115137699?text=Hi%20Shade%20Transport%2C%20I%20am%20interested%20in%20warehousing%20and%20staging%20at%20Transport%20Nagar%20Lucknow." target="_blank" rel="noopener noreferrer" className="service-link">
                Inquire Warehousing →
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Fleet Explorer (All 12 Vehicle Categories with Indian Truck Photos & Standards) */}
      <section className="fleet-section section-pad" id="fleet">
        <div className="container-boxed">
          <div className="fleet-heading-wrapper">
            <div>
              <div className="eyebrow eyebrow-light"><span className="eyebrow-line"></span> OUR FLEET · 12 COMMERCIAL VEHICLE CLASSES</div>
              <h2>Engineered for every load.<br /><em>Explore Our Fleet.</em></h2>
            </div>
            <p style={{ maxWidth: '420px', color: '#c9d2d0', fontSize: '0.95rem' }}>
              From compact pickups for inner-city distribution to heavy 40ft trailers, 32ft containers, and temperature-controlled reefers.
            </p>
          </div>

          {/* Indian Fleet Standards & Highlights Column */}
          <div className="fleet-overview-strip">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.74rem', color: 'var(--ochre)', letterSpacing: '0.08em' }}>PAN-INDIA FLEET CAPABILITY</span>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.35rem', color: '#fff', margin: '4px 0 0' }}>Our Fleet Standards &amp; Certifications</h3>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span className="service-tag" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff' }}>150+ Fleet Strength</span>
                <span className="service-tag" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff' }}>All 28 States Covered</span>
                <span className="service-tag" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff' }}>9 Major Ports</span>
              </div>
            </div>

            <div className="fleet-standards-grid">
              {FLEET_STANDARDS.map((std, idx) => (
                <div key={idx} className="fleet-standard-card">
                  <span className="fleet-standard-icon">{std.icon}</span>
                  <h4 className="fleet-standard-title">{std.title}</h4>
                  <p className="fleet-standard-desc">{std.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Filter Pills */}
          <div className="fleet-filters">
            <button 
              className={`filter-btn ${activeFleetFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFleetFilter('all')}
            >
              All Vehicles ({FLEET_DATA.length})
            </button>
            <button 
              className={`filter-btn ${activeFleetFilter === 'mini' ? 'active' : ''}`}
              onClick={() => setActiveFleetFilter('mini')}
            >
              Mini Trucks &amp; Pickups
            </button>
            <button 
              className={`filter-btn ${activeFleetFilter === 'light' ? 'active' : ''}`}
              onClick={() => setActiveFleetFilter('light')}
            >
              LCV Light Trucks
            </button>
            <button 
              className={`filter-btn ${activeFleetFilter === 'medium' ? 'active' : ''}`}
              onClick={() => setActiveFleetFilter('medium')}
            >
              Medium Freight
            </button>
            <button 
              className={`filter-btn ${activeFleetFilter === 'container' ? 'active' : ''}`}
              onClick={() => setActiveFleetFilter('container')}
            >
              Closed Containers &amp; Movers
            </button>
            <button 
              className={`filter-btn ${activeFleetFilter === 'specialized' ? 'active' : ''}`}
              onClick={() => setActiveFleetFilter('specialized')}
            >
              Specialized (Reefer / Trailer / Tanker)
            </button>
          </div>

          {/* Cards Grid with Authentic Indian Commercial Truck Photos */}
          <div className="fleet-grid">
            {filteredFleet.map(veh => (
              <article 
                key={veh.id} 
                className="fleet-card"
                onClick={() => setSelectedVehicle(veh)}
              >
                {/* Truck Photo Thumbnail */}
                <div className="fleet-card-thumb">
                  <img src={veh.image} alt={veh.model} loading="lazy" />
                  <span className="fleet-card-model-badge">{veh.model}</span>
                </div>

                <div className="fleet-card-meta">
                  <span>{veh.index}</span>
                  <span className="fleet-card-fit">{veh.badge}</span>
                </div>
                <h3 className="fleet-card-title">{veh.title}</h3>
                <p className="fleet-card-desc">{veh.desc}</p>
                <div className="fleet-card-cta">
                  <span>Capacity: {veh.capacity}</span>
                  <span>View Details →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Specification Modal with Indian Truck Photo */}
      {selectedVehicle && (
        <div className="modal-overlay open" onClick={() => setSelectedVehicle(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--ochre)' }}>INDIAN COMMERCIAL VEHICLE · {selectedVehicle.badge}</span>
                <h3 style={{ fontSize: '1.4rem', color: '#fff', margin: 0 }}>{selectedVehicle.title}</h3>
              </div>
              <button className="modal-close" onClick={() => setSelectedVehicle(null)}>✕</button>
            </div>
            <div className="modal-body">
              <div style={{ height: '180px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '16px', border: '1px solid var(--line)', background: '#1c282c' }}>
                <img src={selectedVehicle.image} alt={selectedVehicle.model} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap', gap: '8px' }}>
                <strong style={{ fontFamily: 'var(--mono)', color: 'var(--clay)', fontSize: '0.88rem' }}>Standard Model: {selectedVehicle.model}</strong>
                <span className="service-tag">{selectedVehicle.index}</span>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--ink)', marginBottom: '16px' }}>{selectedVehicle.desc}</p>
              
              <div className="modal-specs-grid">
                <div className="spec-cell">
                  <strong>Payload Capacity</strong>
                  <span>{selectedVehicle.capacity}</span>
                </div>
                <div className="spec-cell">
                  <strong>Dimensions / Bed</strong>
                  <span>{selectedVehicle.dimensions}</span>
                </div>
                <div className="spec-cell">
                  <strong>Recommended Cargo</strong>
                  <span>{selectedVehicle.bestFor}</span>
                </div>
                <div className="spec-cell">
                  <strong>Typical Corridors</strong>
                  <span>{selectedVehicle.routes}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
                <a 
                  href={`https://wa.me/918115137699?text=Hi%20Shade%20Transport%2C%20I%20want%20to%20book%20the%20${encodeURIComponent(selectedVehicle.title)}%20(${encodeURIComponent(selectedVehicle.capacity)}).%20Please%20share%20availability%20and%20rates.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-whatsapp"
                  style={{ flex: 1, minWidth: '200px' }}
                >
                  Book via WhatsApp (24/7)
                </a>
                <a 
                  href="tel:+918115137699"
                  className="button button-dark"
                >
                  Call Hotline
                </a>
                <button 
                  className="button button-light"
                  onClick={() => setSelectedVehicle(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* OUR JOURNEY SECTION — Milestones */}
      <section className="journey-section" id="journey">
        <div className="container-boxed">
          <div className="section-heading" style={{ borderBottomColor: 'rgba(255, 255, 255, 0.1)' }}>
            <div>
              <div className="eyebrow eyebrow-light"><span className="eyebrow-line"></span> OUR JOURNEY &amp; PAN-INDIA NETWORK</div>
              <h2 style={{ color: '#fff' }}>
                From Lucknow Central Hub.<br />
                <em style={{ color: 'var(--ochre)' }}>Connecting Cities &amp; Major Seaports.</em>
              </h2>
            </div>
            <p style={{ maxWidth: '440px', color: '#c9d2d0', fontSize: '0.95rem' }}>
              Since 2016, we have established direct highway corridors linking our Lucknow central operations yard to all 28 states, premier container seaports, and industrial centers.
            </p>
          </div>

          {/* Company Journey Milestones Strip */}
          <div style={{ marginTop: '50px' }}>
            <div className="journey-timeline-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
              <div className="journey-step" style={{ flexDirection: 'column', borderBottom: 'none', borderTop: '2px solid var(--ochre)', paddingTop: '16px' }}>
                <span className="journey-year">2016</span>
                <div className="journey-content">
                  <strong>The Lucknow Beginning</strong>
                  <p>Incorporated under ROC Kanpur (CIN: U63030UP2016PTC084403) with a dedicated regional transport fleet.</p>
                </div>
              </div>
              <div className="journey-step" style={{ flexDirection: 'column', borderBottom: 'none', borderTop: '2px solid var(--ochre)', paddingTop: '16px' }}>
                <span className="journey-year">2018</span>
                <div className="journey-content">
                  <strong>Pan-India Network Expansion</strong>
                  <p>Extended routes to Delhi NCR, Mumbai, Kolkata, and obtained National Permit for multi-state operations.</p>
                </div>
              </div>
              <div className="journey-step" style={{ flexDirection: 'column', borderBottom: 'none', borderTop: '2px solid var(--ochre)', paddingTop: '16px' }}>
                <span className="journey-year">2021</span>
                <div className="journey-content">
                  <strong>Fleet Modernization &amp; BS-VI</strong>
                  <p>Full transition to BS-VI compliant fleet with AIS-140 GPS tracking, FASTag, and ISO-standard cargo containers.</p>
                </div>
              </div>
              <div className="journey-step" style={{ flexDirection: 'column', borderBottom: 'none', borderTop: '2px solid var(--ochre)', paddingTop: '16px' }}>
                <span className="journey-year">2024</span>
                <div className="journey-content">
                  <strong>24/7 Digital Dispatch &amp; Support</strong>
                  <p>Full 24/7 highway assistance, GPS tracking, and pan-India connectivity across 28+ states and 12 vehicle classes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


        <div className="container-boxed">
          <div className="section-heading" style={{ borderBottomColor: 'rgba(255, 255, 255, 0.1)' }}>
            <div>
              <div className="eyebrow eyebrow-light"><span className="eyebrow-line"></span> OUR JOURNEY &amp; PAN-INDIA NETWORK</div>
              <h2 style={{ color: '#fff' }}>
                From Lucknow Central Hub.<br />
                <em style={{ color: 'var(--ochre)' }}>Connecting Cities &amp; Major Seaports.</em>
              </h2>
            </div>
            <p style={{ maxWidth: '440px', color: '#c9d2d0', fontSize: '0.95rem' }}>
              Since 2016, we have established direct highway corridors linking our Lucknow central operations yard to all 28 states, premier container seaports, and industrial centers.
            </p>
          </div>

          {/* India Map Interactive Visualization */}
          <div className="india-map-wrapper">
            <div className="map-control-bar">
              <div className="map-tabs">
                <button 
                  className={`map-tab-btn ${activeMapFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveMapFilter('all')}
                >
                  All Connected Corridors ({NETWORK_NODES.length})
                </button>
                <button 
                  className={`map-tab-btn ${activeMapFilter === 'ports' ? 'active' : ''}`}
                  onClick={() => setActiveMapFilter('ports')}
                >
                  ⚓ Major Seaports &amp; Dry Ports (9)
                </button>
                <button 
                  className={`map-tab-btn ${activeMapFilter === 'metros' ? 'active' : ''}`}
                  onClick={() => setActiveMapFilter('metros')}
                >
                  🏢 Commercial Metros (8)
                </button>
                <button 
                  className={`map-tab-btn ${activeMapFilter === 'regional' ? 'active' : ''}`}
                  onClick={() => setActiveMapFilter('regional')}
                >
                  🛣️ Regional Expressways (7)
                </button>
              </div>

              <div className="map-legend">
                <span className="legend-tag"><span className="legend-dot-lucknow"></span> Lucknow HQ</span>
                <span className="legend-tag"><span className="legend-dot-city"></span> Major City</span>
                <span className="legend-tag"><span className="legend-dot-port"></span> Seaport / ICD Port</span>
              </div>
            </div>

            {/* SVG Interactive Map (Compact & Appealing Frame) */}
            <div className="map-svg-container">
              <svg viewBox="150 70 600 580" className="svg-map-frame" role="img" aria-label="Interactive India Transport and Port Network Map">
                <defs>
                  <linearGradient id="corridorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#bb563a" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#d2a45e" stopOpacity="0.95" />
                  </linearGradient>
                  <radialGradient id="lucknowGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#bb563a" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#bb563a" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Subtle Geometric Background Grid */}
                <g opacity="0.06">
                  {[...Array(14)].map((_, i) => (
                    <line key={`h-${i}`} x1="150" y1={70 + i * 42} x2="750" y2={70 + i * 42} stroke="#fff" strokeWidth="1" />
                  ))}
                  {[...Array(15)].map((_, i) => (
                    <line key={`v-${i}`} x1={150 + i * 42} y1="70" x2={150 + i * 42} y2="650" stroke="#fff" strokeWidth="1" />
                  ))}
                </g>

                {/* Accurate India Landmass Outline — Simplified 50-pt boundary */}
                <path
                  d="
                    M 350 95 L 370 88 L 395 92 L 415 100 L 430 112 L 450 108 L 470 115
                    L 490 110 L 510 118 L 530 112 L 555 110 L 580 108 L 610 112 L 635 108
                    L 660 115 L 685 118 L 710 125 L 730 138 L 748 155 L 755 175 L 752 198
                    L 740 215 L 745 235 L 735 255 L 720 265 L 700 262 L 680 272 L 665 285
                    L 650 310 L 635 340 L 618 375 L 600 408 L 580 445 L 558 480 L 535 515
                    L 510 548 L 485 578 L 460 605 L 438 625 L 420 638 L 408 645 L 400 638
                    L 390 622 L 375 600 L 358 572 L 342 542 L 325 508 L 308 472 L 292 438
                    L 275 402 L 258 365 L 242 332 L 228 298 L 218 268 L 215 242 L 222 220
                    L 235 205 L 252 192 L 268 185 L 280 170 L 288 152 L 300 135 L 320 115
                    L 338 100 Z
                    M 408 645 Q 415 655 420 650 Q 425 648 420 638 Z
                  "
                  fill="rgba(28, 42, 47, 0.55)"
                  stroke="rgba(210, 164, 94, 0.45)"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />

                {/* Highway Arterial Lines from Lucknow to each Node */}
                {filteredMapNodes.filter(n => n.id !== "lucknow").map(node => (
                  <g key={`route-${node.id}`}>
                    <path 
                      d={`M ${lucknowHub.x} ${lucknowHub.y} Q ${(lucknowHub.x + node.x) / 2 + (node.x > lucknowHub.x ? -15 : 15)} ${(lucknowHub.y + node.y) / 2} ${node.x} ${node.y}`}
                      fill="none"
                      stroke={selectedNode && selectedNode.id === node.id ? "#38ef7d" : node.type === "port" ? "#38ef7d" : "url(#corridorGradient)"}
                      strokeWidth={selectedNode && selectedNode.id === node.id ? "2.8" : "1.6"}
                      strokeOpacity={selectedNode && selectedNode.id === node.id ? "1" : "0.75"}
                      className="map-route"
                    />
                  </g>
                ))}

                {/* Node Markers */}
                {filteredMapNodes.map(node => {
                  const isSelected = selectedNode && selectedNode.id === node.id;
                  const isHub = node.type === "hub";
                  const isPort = node.type === "port";

                  if (isHub) {
                    return (
                      <g key={node.id} style={{ cursor: 'pointer' }} onClick={() => setSelectedNode(node)}>
                        {/* Pulsing Central Lucknow Glow */}
                        <circle cx={node.x} cy={node.y} r="28" fill="url(#lucknowGlow)" />
                        <circle cx={node.x} cy={node.y} r="18" fill="none" stroke="#bb563a" strokeWidth="1.5" opacity="0.6">
                          <animate attributeName="r" values="12;26;12" dur="2.4s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.8;0;0.8" dur="2.4s" repeatCount="indefinite" />
                        </circle>
                        <circle cx={node.x} cy={node.y} r="8" fill="#bb563a" stroke="#ffffff" strokeWidth="2.5" />
                        
                        {/* Lucknow Label Badge */}
                        <rect x={node.x - 52} y={node.y - 32} width="104" height="20" rx="3" fill="#24353b" stroke="#bb563a" strokeWidth="1.2" />
                        <text x={node.x} y={node.y - 18} textAnchor="middle" fill="#ffffff" fontFamily="var(--sans)" fontSize="10.5" fontWeight="700">
                          ★ LUCKNOW HQ
                        </text>
                      </g>
                    );
                  }

                  return (
                    <g 
                      key={node.id} 
                      style={{ cursor: 'pointer' }} 
                      onClick={() => setSelectedNode(node)}
                    >
                      {/* Node Dot / Port Square */}
                      {isPort ? (
                        <rect 
                          x={node.x - 5} 
                          y={node.y - 5} 
                          width="10" 
                          height="10" 
                          rx="2"
                          fill={isSelected ? "#ffffff" : "#38ef7d"} 
                          stroke={isSelected ? "#38ef7d" : "#24353b"} 
                          strokeWidth="2" 
                        />
                      ) : (
                        <circle 
                          cx={node.x} 
                          cy={node.y} 
                          r={isSelected ? "7" : "5"} 
                          fill={isSelected ? "#ffffff" : "#d2a45e"} 
                          stroke={isSelected ? "#d2a45e" : "#24353b"} 
                          strokeWidth="2" 
                        />
                      )}

                      {/* Node Text Label */}
                      <text 
                        x={node.x + 8} 
                        y={node.y + 4} 
                        fill={isSelected ? "#38ef7d" : isPort ? "#9cf3be" : "#e5eae8"} 
                        fontFamily="var(--mono)" 
                        fontSize={isPort ? "9.5" : "9"} 
                        fontWeight={isSelected ? "700" : "500"}
                      >
                        {isPort ? `⚓ ${node.name}` : node.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Selected Corridor Info Banner */}
            {selectedNode && (
              <div className="corridor-info-banner">
                <div className="corridor-info-left">
                  <span>CONNECTED CORRIDOR · {selectedNode.tag}</span>
                  <strong>{selectedNode.name}</strong>
                  <div style={{ color: '#d1d8d6', fontSize: '0.85rem', marginTop: '2px' }}>
                    {selectedNode.corridor}
                  </div>
                </div>

                <div className="corridor-specs">
                  <div className="corridor-spec-item">
                    <small>Route Distance</small>
                    <strong>{selectedNode.distance} km</strong>
                  </div>
                  <div className="corridor-spec-item">
                    <small>Transit Time</small>
                    <strong>{selectedNode.time}</strong>
                  </div>
                  <div className="corridor-spec-item">
                    <small>Dispatch Frequency</small>
                    <strong>24/7 Daily</strong>
                  </div>
                </div>

                <a 
                  href={`https://wa.me/918115137699?text=Hi%20Shade%20Transport%2C%20I%20am%20inquiring%20about%20transport%20service%20between%20Lucknow%20and%20${encodeURIComponent(selectedNode.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-clay"
                  style={{ padding: '9px 18px', fontSize: '0.84rem' }}
                >
                  Inquire this Corridor via WhatsApp
                </a>
              </div>
            )}
          </div>

          {/* Company Journey Milestones Strip */}
          <div style={{ marginTop: '50px' }}>
            <div className="journey-timeline-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
              <div className="journey-step" style={{ flexDirection: 'column', borderBottom: 'none', borderTop: '2px solid var(--ochre)', paddingTop: '16px' }}>
                <span className="journey-year">2016</span>
                <div className="journey-content">
                  <strong>The Lucknow Beginning</strong>
                  <p>Incorporated under ROC Kanpur (CIN: U63030UP2016PTC084403) with a dedicated regional transport fleet.</p>
                </div>
              </div>

              <div className="journey-step" style={{ flexDirection: 'column', borderBottom: 'none', borderTop: '2px solid var(--ochre)', paddingTop: '16px' }}>
                <span className="journey-year">2018–20</span>
                <div className="journey-content">
                  <strong>Interstate Expansion</strong>
                  <p>Connected Delhi NCR, Western industrial hubs, and launched household packers and movers operations.</p>
                </div>
              </div>

              <div className="journey-step" style={{ flexDirection: 'column', borderBottom: 'none', borderTop: '2px solid var(--ochre)', paddingTop: '16px' }}>
                <span className="journey-year">2021–23</span>
                <div className="journey-content">
                  <strong>Seaport &amp; Container Links</strong>
                  <p>Established direct freight corridors to JNPT, Mundra, Kandla, and Chennai maritime terminals with 32ft containers.</p>
                </div>
              </div>

              <div className="journey-step" style={{ flexDirection: 'column', borderBottom: 'none', borderTop: '2px solid var(--ochre)', paddingTop: '16px' }}>
                <span className="journey-year">2024–26+</span>
                <div className="journey-content">
                  <strong>24/7 Digital Dispatch &amp; Support</strong>
                  <p>Full 24/7 highway assistance, GPS tracking, and pan-India connectivity across 28+ states and 12 vehicle classes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR DIRECTORS SECTION (MCA ROC KANPUR AUTHENTIC INDIAN CONTEXT) */}
      <section className="directors-section" id="directors">
        <div className="container-boxed">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line"></span> BOARD OF DIRECTORS &amp; LEADERSHIP</div>
              <h2>Directorial Leadership.<br /><em>Ground-Level Logistics Mastery.</em></h2>
            </div>
            <p className="heading-aside">
              Incorporated in Lucknow under MCA Registrar of Companies (Kanpur), Shade Transport Private Limited is steered by active directors with comprehensive ground experience across India’s national highways, freight corridors, and statutory GST compliance.
            </p>
          </div>

          <div className="directors-grid">
            {DIRECTORS_DATA.map(director => (
              <article key={director.id} className="director-card">
                <div className="director-header">
                  <div className="director-avatar">
                    {director.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </div>
                  <div className="director-info">
                    <h3>{director.name}</h3>
                    <span className="director-role">{director.role}</span>
                    <span className="director-mca-tag">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      {director.badge}
                    </span>
                  </div>
                </div>

                <p className="director-bio">{director.bio}</p>

                <div className="director-responsibilities-box">
                  <strong>Key Directorial Portfolios &amp; Oversight:</strong>
                  <ul className="director-responsibilities-list">
                    {director.keyResponsibilities.map((duty, idx) => (
                      <li key={idx}>{duty}</li>
                    ))}
                  </ul>
                </div>

                <div className="director-contact-strip">
                  <a href={`tel:${director.phone}`} className="director-contact-btn">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    Contact: {director.phone}
                  </a>
                  <a href={`mailto:${director.email}`} className="director-contact-btn">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    {director.email}
                  </a>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--ink-muted)', alignSelf: 'center', marginLeft: 'auto' }}>
                    📍 {director.location}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DEDICATED 24/7 SERVICE & ASSISTANCE SECTION */}
      <section className="assistance-section" id="assistance">
        <div className="container-boxed">
          <div className="assistance-badge-strip">
            <span className="assistance-beacon"></span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '0.78rem', color: 'var(--clay)', fontWeight: 'bold' }}>
              ROUND-THE-CLOCK OPERATIONAL READINESS · 365 DAYS A YEAR
            </span>
          </div>

          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line"></span> 24/7 SERVICE &amp; ASSISTANCE</div>
              <h2>Always on the road.<br /><em>Never stranded.</em></h2>
            </div>
            <p className="heading-aside">
              Logistics does not stop when the sun sets. Our round-the-clock dispatch room, certified recovery mechanics, and dedicated driver networks ensure non-stop operations day and night.
            </p>
          </div>

          <div className="assistance-grid">
            {/* Card 1 */}
            <div className="assistance-card">
              <div className="assistance-icon-wrap">🛠️</div>
              <h3>24/7 Highway Breakdown Assistance</h3>
              <p>
                Immediate on-highway roadside assistance, mobile tire vulcanizing, emergency mechanics, and vehicle towing across Agra-Lucknow, Purvanchal, and national highway corridors.
              </p>
              <span className="assistance-pill">Average Response &lt; 45 Mins</span>
            </div>

            {/* Card 2 */}
            <div className="assistance-card">
              <div className="assistance-icon-wrap">🚨</div>
              <h3>24/7 Central Dispatch Control Desk</h3>
              <p>
                Round-the-clock logistics officers managing real-time vehicle dispatch, driver shift handovers, FASTag toll clearances, and inter-state border compliance.
              </p>
              <span className="assistance-pill">Live Dispatch Coordination</span>
            </div>

            {/* Card 3 */}
            <div className="assistance-card">
              <div className="assistance-icon-wrap">📞</div>
              <h3>24/7 Direct Booking &amp; Helpline</h3>
              <p>
                Call our direct desk at <strong>+91 8115137699</strong> at any hour of the day or night. Instant vehicle placement for urgent consignments, machinery, or home shifting.
              </p>
              <span className="assistance-pill">Toll-Free &amp; Direct Support</span>
            </div>

            {/* Card 4 */}
            <div className="assistance-card">
              <div className="assistance-icon-wrap">🛡️</div>
              <h3>24/7 Relief Drivers &amp; Cargo Safety</h3>
              <p>
                Pre-vetted relay drivers on long-haul routes (e.g. Lucknow to Mumbai / South India) to prevent driver fatigue, maintain transit speed, and ensure zero cargo tampering.
              </p>
              <span className="assistance-pill">100% Safe Transit Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Our Team & Fleet Gallery ---- */}
      {/* ---- OUR FLEET SLIDER ---- */}
      {(() => {
        const FLEET_SLIDES = [
          { src: 'assets/images/shade-container-truck.jpg', tag: '40 FT CONTAINER TRUCK', icon: '🚛', title: 'Heavy Container Fleet', sub: 'Tata Prima · BharatBenz 1617 · Pan-India Permit · 20 / 40 FT ISO Containers' },
          { src: 'assets/images/tata-ace.jpg',              tag: 'MINI TRUCK / TATA ACE',  icon: '🚐', title: 'Mini Truck — Last-Mile Delivery', sub: 'Tata Ace Gold / EV · 750 kg–1 T · City & Intra-District Network' },
          { src: 'assets/images/eicher-lcv.jpg',            tag: 'LCV / EICHER PRO',       icon: '🚚', title: 'Light Commercial Vehicles', sub: 'Eicher Pro 2095 XP · 5–7 Tonne · UP / NCR / Bihar Corridor' },
          { src: 'assets/images/tata-signa.jpg',            tag: 'MULTI-AXLE HEAVY',       icon: '🚜', title: 'Multi-Axle Trucks', sub: 'Tata Signa 4423.S · Ashok Leyland 4940 · 44 Tonne GVW · National Permit' },
          { src: 'assets/images/shade-road.jpg',            tag: 'PAN-INDIA HIGHWAYS',     icon: '🛣️', title: 'Fleet on National Highways', sub: 'Lucknow ↔ Delhi NCR · Mumbai · Kolkata · Bengaluru · Chennai · Ahmedabad' },
        ];
        const [slide, setSlide] = React.useState(0);
        const totalSlides = FLEET_SLIDES.length;

        React.useEffect(() => {
          const timer = setInterval(() => setSlide(s => (s + 1) % totalSlides), 3500);
          return () => clearInterval(timer);
        }, []);

        const prev = () => setSlide(s => (s - 1 + totalSlides) % totalSlides);
        const next = () => setSlide(s => (s + 1) % totalSlides);
        const current = FLEET_SLIDES[slide];

        return (
          <section className="gallery-section" id="gallery">
            <div className="container-boxed">
              <div className="section-heading">
                <div>
                  <div className="eyebrow"><span className="eyebrow-line"></span> OUR FLEET &amp; VEHICLES</div>
                  <h2>Our Fleet.<br /><em>Built for India.</em></h2>
                </div>
                <p className="heading-aside">
                  BS-VI certified Indian trucks — from Tata Ace mini-loaders to 44-tonne multi-axle heavies — covering 28 states with National Permit and AIS-140 GPS tracking.
                </p>
              </div>

              {/* Slider */}
              <div className="fleet-slider">
                <div className="fleet-slider-track">
                  <img
                    key={slide}
                    src={current.src}
                    alt={current.title}
                    className="fleet-slider-img"
                  />
                  {/* Overlay */}
                  <div className="fleet-slider-overlay">
                    <span className="fleet-slider-tag">{current.tag}</span>
                    <div className="fleet-slider-info">
                      <span className="fleet-slider-icon">{current.icon}</span>
                      <div>
                        <strong>{current.title}</strong>
                        <span>{current.sub}</span>
                      </div>
                    </div>
                  </div>
                  {/* Prev / Next */}
                  <button className="fleet-slider-btn fleet-slider-btn--prev" onClick={prev} aria-label="Previous">&#8592;</button>
                  <button className="fleet-slider-btn fleet-slider-btn--next" onClick={next} aria-label="Next">&#8594;</button>
                </div>

                {/* Dot indicators */}
                <div className="fleet-slider-dots">
                  {FLEET_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      className={`fleet-slider-dot${i === slide ? ' active' : ''}`}
                      onClick={() => setSlide(i)}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Thumbnail strip */}
                <div className="fleet-slider-thumbs">
                  {FLEET_SLIDES.map((s, i) => (
                    <button
                      key={i}
                      className={`fleet-thumb-btn${i === slide ? ' active' : ''}`}
                      onClick={() => setSlide(i)}
                    >
                      <img src={s.src} alt={s.title} />
                      <span>{s.icon}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA Strip */}
              <div className="gallery-cta-strip">
                <div className="gallery-cta-left">
                  <span className="gallery-cta-badge">🚛 25+ Vehicles</span>
                  <span className="gallery-cta-badge">🛡️ BS-VI Certified</span>
                  <span className="gallery-cta-badge">📡 AIS-140 GPS</span>
                  <span className="gallery-cta-badge">⏰ 24/7 Operations</span>
                </div>
                <a href="tel:+918115137699" className="button button-primary">
                  Book a Vehicle Now →
                </a>
              </div>
            </div>
          </section>
        );
      })()}

      {/* Google Reviews &amp; Client Feedback */}
      <section className="reviews-section" id="reviews">
        <div className="container-boxed">
          <div className="reviews-top">
            <div>
              <div className="eyebrow"><span className="eyebrow-line"></span> VERIFIED CUSTOMER SATISFACTION</div>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem', color: 'var(--ink)' }}>
                Trusted by Businesses &amp; Families.
              </h2>
            </div>
            <div className="rating-badge">
              <span className="rating-score">4.5</span>
              <div>
                <div className="rating-stars">★★★★★</div>
                <span className="rating-count">Based on 60+ Google Reviews</span>
              </div>
            </div>
          </div>

          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <blockquote className="review-quote">
                “Good service at cheap price. They handled our commercial goods transport from Lucknow to Kanpur with great efficiency and on-time delivery.”
              </blockquote>
              <div className="review-author">
                <span className="author-name">Prashant Srivastava</span>
                <span className="author-source">Google Review · Commercial Shipper</span>
              </div>
            </div>

            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <blockquote className="review-quote">
                “Delivered on time with reasonable prices. Their 24/7 helpline answered immediately when our vehicle required night dispatch. Highly recommended!”
              </blockquote>
              <div className="review-author">
                <span className="author-name">Ankit Mishra</span>
                <span className="author-source">Google Review · Verified Shipper</span>
              </div>
            </div>

            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <blockquote className="review-quote">
                “Nice and good experience with their household packers and movers service. Shifted our complete 3 BHK from Nilmatha to Delhi NCR safely.”
              </blockquote>
              <div className="review-author">
                <span className="author-name">Sunita Sharma</span>
                <span className="author-source">Google Review · Household Shifting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="faq-section" id="faq">
        <div className="container-boxed">
          <div className="section-heading" style={{ justifyContent: 'center', textAlign: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <div className="eyebrow"><span className="eyebrow-line"></span> FREQUENTLY ASKED QUESTIONS</div>
            <h2>Clear Answers. Transparent Terms.</h2>
            <p className="heading-aside" style={{ textAlign: 'center', marginTop: '10px' }}>
              Everything you need to know about our 24/7 service, port connectivity, vehicle options, and billing.
            </p>
          </div>

          <div className="faq-list">
            {[
              {
                q: "Do you operate 24 hours a day, 7 days a week?",
                a: "Yes. Shade Transport Private Limited maintains a 24/7 live dispatch desk and highway breakdown assistance network. You can reach our operations coordinators at +91 8115137699 day or night for vehicle bookings, transit updates, or urgent assistance."
              },
              {
                q: "Which seaports and dry ports do you connect from Lucknow?",
                a: "We provide dedicated highway container and trailer logistics connecting Uttar Pradesh to major seaports including JNPT / Nhava Sheva (Mumbai), Mundra Port, Kandla Port, Chennai Port, Visakhapatnam Port, and Kolkata/Haldia Port, as well as Inland Container Depots like ICD Dadri and ICD Kanpur."
              },
              {
                q: "Where is Shade Transport Private Limited based in Lucknow?",
                a: "Our registered corporate office is located at G-1/121, Transport Nagar, Phase 2, Kanpur Road, Lucknow – 226012. Our operational fleet hub and parking yard is located at Nilmatha Cantt, Vijay Nagar, Nilmatha, Lucknow – 226002."
              },
              {
                q: "Do you provide movers and packers services outside of Lucknow?",
                a: "Yes! While our primary packing crew is stationed in Lucknow, we handle interstate household and corporate shifting across 28 states in India with 5-layer bubble packing and dedicated padded vans."
              },
              {
                q: "Is transit insurance and GST invoicing provided?",
                a: "Yes. As a registered corporate logistics provider (CIN: U63030UP2016PTC084403, GSTIN: 09AAXCS2378F1ZO), we provide 100% compliant GST invoices, consignment notes (bilty), and transit insurance coverage upon request."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
              >
                <button 
                  className="faq-question" 
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                  aria-expanded={activeFaq === index}
                >
                  <span>{faq.q}</span>
                  <span className="faq-chevron">▼</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & 24/7 Dispatch Headquarters Section */}
      <section className="contact-section" id="contact">
        <div className="container-boxed contact-grid">
          <div className="contact-info-panel">
            <div className="eyebrow"><span className="eyebrow-line"></span> 24/7 CONTACT &amp; DISPATCH HEADQUARTERS</div>
            <h2>Get in touch.<br /><em>We are ready 24/7.</em></h2>
            <p style={{ color: 'var(--ink-light)', fontSize: '1.02rem', lineHeight: 1.6 }}>
              Connect directly with our Lucknow dispatch controllers for immediate truck assignments, packing crews, or port transport coordination.
            </p>

            <div className="contact-methods">
              <div className="contact-card-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <strong>24/7 Phone &amp; Emergency Highway Helpline</strong>
                  <a href="tel:+918115137699" style={{ display: 'block', fontWeight: 'bold', color: 'var(--ink)' }}>+91 8115137699</a>
                  <small style={{ color: 'var(--ink-muted)' }}>Operated 24/7 by on-duty dispatch officers</small>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                </div>
                <div>
                  <strong>24/7 WhatsApp Immediate Support</strong>
                  <a href="https://wa.me/918115137699" target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontWeight: 'bold', color: 'var(--clay)' }}>+91 8115137699</a>
                  <small style={{ color: 'var(--ink-muted)' }}>Send route details for immediate confirmation</small>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <strong>Official Email Support</strong>
                  <a href="mailto:shadetransportlko@gmail.com" style={{ display: 'block', color: 'var(--ink)' }}>shadetransportlko@gmail.com</a>
                  <small style={{ color: 'var(--ink-muted)' }}>Corporate tenders &amp; billing inquiries</small>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <strong>Offices in Lucknow</strong>
                  <p style={{ margin: 0, fontWeight: '600' }}>Registered Office: G-1/121, Transport Nagar, Phase 2, Kanpur Road, Lucknow – 226012</p>
                  <p style={{ margin: '4px 0 0', fontSize: '0.85rem' }}>Operations Yard: Nilmatha Cantt, Vijay Nagar, Nilmatha, Lucknow – 226002</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 24/7 Operations Card & Large Interactive Google Map */}
          <div className="contact-support-card">
            <h3>24/7 Dispatch Desk &amp; Location</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--ink-light)', lineHeight: 1.5 }}>
              Our fleet coordinates departures day and night directly from Transport Nagar Phase 2 and Nilmatha Cantt onto the Kanpur Road Highway and Lucknow Ring Road.
            </p>

            <div className="support-banner-247">
              <strong><span className="pulse-dot"></span> 24/7 LIVE ASSISTANCE GUARANTEE</strong>
              <p>
                Whether you need urgent emergency transport at 2 AM or weekend commercial dispatch, our dedicated coordinators are on duty right now.
              </p>
            </div>

            <div className="support-action-buttons">
              <a href="tel:+918115137699" className="button button-dark" style={{ width: '100%', padding: '14px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call 24/7 Helpline (+91 8115137699)
              </a>
              <a href="https://wa.me/918115137699?text=Hi%20Shade%20Transport%2C%20I%20need%2024%2F7%20transport%20assistance%20or%20booking." target="_blank" rel="noopener noreferrer" className="button button-whatsapp" style={{ width: '100%', padding: '14px' }}>
                Chat on WhatsApp (+91 8115137699)
              </a>
            </div>

            {/* Large Interactive Google Map */}
            <div className="map-embed-large">
              <iframe 
                src="https://maps.google.com/maps?output=embed&q=Shade+Transport+Nilmatha+Cantt+Vijay+Nagar+Lucknow+UP+226002" 
                title="Shade Transport Lucknow Fleet Hub Location on Google Maps"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <a 
                href="https://maps.app.goo.gl/VDGzFLWJpBUHx15dA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="map-open-link"
              >
                📍 Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container-boxed footer-top">
          <div className="footer-brand">
            <a href="#top" className="brand" style={{ marginBottom: '14px' }}>
              <img src="assets/images/shade-logo-mark.png" alt="Shade Transport" width="36" height="32" style={{ filter: 'brightness(1.2)' }} />
              <span className="brand-name" style={{ color: '#fff' }}>shade<span style={{ color: 'var(--ochre)' }}>transport</span></span>
            </a>
            <p>
              Shade Transport Private Limited is a Lucknow-headquartered transport and logistics solutions company providing dependable road freight, container haulage, and household shifting across India with 24/7 highway assistance.
            </p>
            <div className="footer-legal-badge">
              <span><strong>CIN:</strong> U63030UP2016PTC084403</span>
              <span><strong>GSTIN:</strong> 09AAXCS2378F1ZO</span>
              <span><strong>ROC:</strong> Registrar of Companies, Kanpur (UP)</span>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Full Truckload (FTL)</a></li>
              <li><a href="#services">Part Load (PTL Parcel)</a></li>
              <li><a href="#services">Packers &amp; Movers</a></li>
              <li><a href="#journey">Seaport &amp; Dry Port Corridors</a></li>
              <li><a href="#services">Refrigerated Transport</a></li>
              <li><a href="#services">Warehousing Hubs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#top">Home</a></li>
              <li><a href="#fleet">Our Fleet (12 Classes)</a></li>
              <li><a href="#journey">India Map &amp; Ports</a></li>
              <li><a href="#assistance">24/7 Service &amp; Assistance</a></li>
              <li><a href="#reviews">Google Reviews (4.5★)</a></li>
              <li><a href="#directors">Our Directors (Leadership)</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
              <li><a href="#contact">Contact &amp; Map</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">24/7 Operations Desk</h4>
            <div style={{ fontSize: '0.85rem', color: '#c0cac7', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div>
                <strong style={{ color: '#fff', display: 'block' }}>24/7 Helpline:</strong>
                <a href="tel:+918115137699" style={{ color: 'var(--ochre)', fontWeight: 'bold' }}>+91 8115137699</a>
              </div>
              <div>
                <strong style={{ color: '#fff', display: 'block' }}>WhatsApp:</strong>
                <a href="https://wa.me/918115137699" target="_blank" rel="noopener noreferrer" style={{ color: '#25d366' }}>+91 8115137699</a>
              </div>
              <div>
                <strong style={{ color: '#fff', display: 'block' }}>Email:</strong>
                <a href="mailto:shadetransportlko@gmail.com" style={{ color: 'var(--ochre)' }}>shadetransportlko@gmail.com</a>
              </div>
              <div>
                <strong style={{ color: '#fff', display: 'block' }}>Lucknow Locations:</strong>
                G-1/121, Transport Nagar Phase 2 &amp; Nilmatha Cantt
              </div>
            </div>
          </div>
        </div>

        <div className="container-boxed footer-bottom">
          <span>© 2016 - 2026 Shade Transport Private Limited. All Rights Reserved.</span>
          <span>24/7 Pan-India Transport &amp; Port Network · Lucknow, Uttar Pradesh</span>
          <a href="#top" className="back-to-top-btn">
            BACK TO TOP ↑
          </a>
        </div>
      </footer>

      {/* Floating Dual Call / WhatsApp Dock */}
      <div className="floating-dual-dock" role="complementary" aria-label="Instant Contact Options">
        <a href="tel:+918115137699" className="dock-call-btn" title="Call 24/7 Transport Hotline">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <span>Call 8115137699</span>
        </a>
        <a 
          href="https://wa.me/918115137699?text=Hi%20Shade%20Transport%2C%20I%20need%2024%2F7%20transport%20assistance%20or%20booking." 
          className="dock-whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
          title="24/7 WhatsApp Dispatch Desk"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          <span>WhatsApp 24/7</span>
        </a>
      </div>
    </div>
  );
}

// Mount React 18 Application
const domNode = document.getElementById('root');
if (domNode) {
  const root = ReactDOM.createRoot(domNode);
  root.render(<ShadeTransportApp />);
}
