import Link from "next/link";
import styles from "./style.module.css";
import { Company } from "../lib/company";
import ContactForm from "./contactForm";

export default function VrindavanPark() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles["hero-ring"]}></div>
        <div className={styles["hero-ring2"]}></div>

        <div className={styles.tag}>Limited Plots · Hingna, Nagpur</div>

        <h1>
          Nagpur&apos;s Next BKC Is Being Built.
          <br />
          <em>Your Plot Is Available Today.</em>
        </h1>

        <p>
          NMRDA-approved NA plots from 1,100 sq ft — at the intersection of
          Samruddhi Mahamarg, MIHAN SEZ, and the 1,710-acre CCD Hingna.
        </p>

        <div className={styles["hero-pills"]}>
          <span className={styles.pill}>🛣️ 1.5 km – Samruddhi</span>
          <span className={styles.pill}>✈️ 3 km – MIHAN SEZ</span>
          <span className={styles.pill}>🏙️ CCD Hingna – 1,710 Acres</span>
          <span className={styles.pill}>🚗 Mahindra EV Hub</span>
          <span className={styles.pill}>📋 NMRDA Approved</span>
        </div>

        <Link className={styles["btn-hero"]} href="#contact">
          📞 Book FREE Site Visit
        </Link>

        <p className={styles["hero-note"]}>
          No obligation · Executive calls within 2 hours
        </p>

        <div className={styles["hero-stats"]}>
          <div className={styles.stat}>
            <b>1,100 sqft</b>
            <span>STARTING PLOT SIZE</span>
          </div>
          <div className={styles.stat}>
            <b>1,710 Acres</b>
            <span>CCD HINGNA (NAGPUR&apos;S BKC)</span>
          </div>
          <div className={styles.stat}>
            <b>30–40%</b>
            <span>BELOW PREMIUM DEVELOPERS</span>
          </div>
          <div className={styles.stat}>
            <b>80%</b>
            <span>LOAN — SBI & ICICI</span>
          </div>
          <div className={styles.stat}>
            <b>10,000+</b>
            <span>HAPPY FAMILIES SERVED</span>
          </div>
        </div>
      </section>

      <div className={styles.ticker}>
        <div className={styles["ticker-inner"]}>
          <span>95+ Layouts Sold</span>
          <span>15+ Years of Trust</span>
          <span>10,000+ Families</span>
          <span>NMRDA Approved</span>
          <span>1000+ Business Partners</span>
          <span>3 Clubhouse Projects</span>
          <span>100+ Acres Farmhouse</span>
          <span>CREDAI Member</span>
          <span>80% SBI Loan Available</span>
          <span>CCD Hingna Adjacent</span>

          <span>95+ Layouts Sold</span>
          <span>15+ Years of Trust</span>
          <span>10,000+ Families</span>
          <span>NMRDA Approved</span>
          <span>1000+ Business Partners</span>
          <span>3 Clubhouse Projects</span>
          <span>100+ Acres Farmhouse</span>
          <span>CREDAI Member</span>
          <span>80% SBI Loan Available</span>
          <span>CCD Hingna Adjacent</span>
        </div>
      </div>

      <section className={styles.ach} id="about">
        <div className={styles["ach-inner"]}>
          <div className={styles["ach-label"]}>Our Track Record</div>

          <h2 className={styles["ach-title"]}>
            15+ Years. 10,000+ Families.
            <br />
            Nagpur&apos;s Most Trusted Developer.
          </h2>

          <p className={styles["ach-sub"]}>
            Neel INFRATECH has been transforming Nagpur&apos;s growth corridors into
            dream homes and wealth-building investments since 2010.
          </p>

          <div className={styles["ach-grid"]}>
            <div className={styles["ach-card"]}>
              <div className={styles["ach-num"]}>
                15<span className={styles["ach-unit"]}>+</span>
              </div>
              <div className={styles["ach-lbl"]}>Years of Trusted Service</div>
            </div>

            <div className={styles["ach-card"]}>
              <div className={styles["ach-num"]}>
                95<span className={styles["ach-unit"]}>+</span>
              </div>
              <div className={styles["ach-lbl"]}>
                Layouts Sold Out Across Nagpur
              </div>
            </div>

            <div className={styles["ach-card"]}>
              <div className={styles["ach-num"]}>
                10,000<span className={styles["ach-unit"]}>+</span>
              </div>
              <div className={styles["ach-lbl"]}>
                Satisfied Families & Investors
              </div>
            </div>

            <div className={styles["ach-card"]}>
              <div className={styles["ach-num"]}>
                1,000<span className={styles["ach-unit"]}>+</span>
              </div>
              <div className={styles["ach-lbl"]}>
                Active Business Partners Pan-India
              </div>
            </div>

            <div className={styles["ach-card"]}>
              <div className={styles["ach-num"]}>
                100<span className={styles["ach-unit"]}>+</span>
              </div>
              <div className={styles["ach-lbl"]}>
                Acres Farmhouse Projects Delivered
              </div>
            </div>

            <div className={styles["ach-card"]}>
              <div className={styles["ach-num"]}>3</div>
              <div className={styles["ach-lbl"]}>
                Premium Layouts with Clubhouse
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
              marginTop: "50px",
            }}
          >
            {/* LEFT */}
            <div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "var(--gold)",
                  letterSpacing: "1px",
                  marginBottom: "20px",
                }}
              >
                COMPANY JOURNEY
              </div>

              <div className={styles.timeline}>
                <div className={styles["tl-item"]}>
                  <div className={styles["tl-dot"]}></div>
                  <div className={styles["tl-year"]}>2010</div>
                  <div className={styles["tl-text"]}>
                    Neel INFRATECH founded in Nagpur — with a vision to develop
                    Nagpur&apos;s growth corridors
                  </div>
                </div>

                <div className={styles["tl-item"]}>
                  <div className={styles["tl-dot"]}></div>
                  <div className={styles["tl-year"]}>2014</div>
                  <div className={styles["tl-text"]}>
                    First 5 layouts sold — trust network begins to grow across
                    Nagpur
                  </div>
                </div>

                <div className={styles["tl-item"]}>
                  <div className={styles["tl-dot"]}></div>
                  <div className={styles["tl-year"]}>2019</div>
                  <div className={styles["tl-text"]}>
                    50+ layouts milestone — All-India business partner network
                    established
                  </div>
                </div>

                <div className={styles["tl-item"]}>
                  <div className={styles["tl-dot"]}></div>
                  <div className={styles["tl-year"]}>2024–25</div>
                  <div className={styles["tl-text"]}>
                    95+ layouts sold out · 100 Acre Neel Farm sold out · 10,000+
                    families milestone
                  </div>
                </div>

                <div className={styles["tl-item"]}>
                  <div className={styles["tl-dot"]}></div>
                  <div className={styles["tl-year"]}>2026+</div>
                  <div className={styles["tl-text"]}>
                    New 4x larger Corporate Office at Somalwada · Neel Farm
                    Dwitiya launching · Vrindavan Park VP-12 & VP-14
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "var(--gold)",
                  letterSpacing: "1px",
                  marginBottom: "20px",
                }}
              >
                WHY FAMILIES TRUST US
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  className={styles.tp}
                  style={{ color: "rgba(255,255,255,.8)" }}
                >
                  Premium quality plots in Nagpur&apos;s prime growth corridors
                </div>

                <div
                  className={styles.tp}
                  style={{ color: "rgba(255,255,255,.8)" }}
                >
                  Transparent legal process — full documentation on every plot
                </div>

                <div
                  className={styles.tp}
                  style={{ color: "rgba(255,255,255,.8)" }}
                >
                  Clubhouse and full infrastructure on 3 premium layouts
                </div>

                <div
                  className={styles.tp}
                  style={{ color: "rgba(255,255,255,.8)" }}
                >
                  100+ acre farmhouse projects already built & delivered
                </div>

                <div
                  className={styles.tp}
                  style={{ color: "rgba(255,255,255,.8)" }}
                >
                  NMRDA & CREDAI compliance on every project
                </div>

                <div
                  className={styles.tp}
                  style={{ color: "rgba(255,255,255,.8)" }}
                >
                  1,000+ business partners providing local guidance pan-India
                </div>

                <div
                  className={styles.tp}
                  style={{ color: "rgba(255,255,255,.8)" }}
                >
                  Clear title, RERA registered — zero legal complications
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.growth} id="growth">
        <div className={styles["growth-inner"]}>
          <div className={styles["sec-tag"]}>Why Invest Now</div>

          <h2 className={styles["sec-title"]}>
            The Infrastructure Is Already Here.
            <br />
            The Price Hasn&apos;t Caught Up Yet.
          </h2>

          <p className={styles["sec-sub"]}>
            BKC. Hinjewadi. HITEC City. Each was a farmland before the
            infrastructure arrived. Nagpur&apos;s signals are all firing right now.
          </p>

          <div className={styles.compare}>
            <div
              style={{
                fontSize: "13px",
                color: "var(--muted)",
                fontWeight: 600,
                flex: 1,
                minWidth: "150px",
              }}
            >
              Decade appreciation after infra development began:
            </div>

            <div className={styles.cmp}>
              <b>25×</b>
              <small>BKC Mumbai 1998</small>
            </div>

            <div className={styles.arr}>→</div>

            <div className={styles.cmp}>
              <b>15×</b>
              <small>Hinjewadi Pune 2003</small>
            </div>

            <div className={styles.arr}>→</div>

            <div className={styles.cmp}>
              <b>12×</b>
              <small>HITEC City HYD 2004</small>
            </div>

            <div className={styles.arr}>→</div>

            <div className={`${styles.cmp} ${styles.now}`}>
              <b>?×</b>
              <small>Nagpur — Starting Now</small>
            </div>
          </div>

          <div className={styles.gcards}>
            <div className={styles.gc}>
              <h3>🏙️ CCD Hingna — Nagpur&apos;s Own BKC</h3>
              <p>
                Maharashtra Government&apos;s 1,710-acre Central Commercial District.
                40-50 storey towers, IT parks, corporate offices. Vrindavan Park
                sits at its doorstep.
              </p>
              <span className={styles["gc-tag"]}>1,710 Acres</span>
            </div>

            <div className={styles.gc}>
              <h3>🛣️ Samruddhi Mahamarg — Live & Operational</h3>
              <p>
                India&apos;s widest expressway (701 km) cuts Mumbai-Nagpur to under 8
                hours. Vrindavan Park is just 1.5 km from the Nagpur
                interchange.
              </p>
              <span className={styles["gc-tag"]}>1.5 km Away</span>
            </div>

            <div className={styles.gc}>
              <h3>✈️ MIHAN SEZ — Asia&apos;s Largest Aviation Hub</h3>
              <p>
                Boeing, Infosys, HCL already operating. 4 lakh+ jobs projected.
                The job engine that will create massive housing demand. 3 km
                from your plot.
              </p>
              <span className={styles["gc-tag"]}>3 km Away</span>
            </div>

            <div className={styles.gc}>
              <h3>🛤️ Shakti Peeth Expressway</h3>
              <p>
                New Nagpur-to-Goa expressway — announced. Opens yet another
                trade corridor, further cementing Nagpur as Central India&apos;s
                undisputed logistics capital.
              </p>
              <span className={styles["gc-tag"]}>Announced</span>
            </div>

            <div className={styles.gc}>
              <h3>🚗 Mahindra EV Manufacturing Hub</h3>
              <p>
                Mahindra & Mahindra commits to electric vehicle plant in Nagpur
                — signalling the birth of a major auto belt and thousands of
                high-paying jobs.
              </p>
              <span className={styles["gc-tag"]}>Mahindra Committed</span>
            </div>

            <div className={styles.gc}>
              <h3>🗺️ Center of India — 6 Highways</h3>
              <p>
                Nagpur sits at India&apos;s geographic center with 6 National
                Highways radiating out. NH-353-1 is at Vrindavan Park&apos;s
                doorstep. Logistics advantage no other Tier-2 city has.
              </p>
              <span className={styles["gc-tag"]}>6 National Highways</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.usp}>
        <div className={styles["usp-inner"]}>
          <div style={{ textAlign: "center" }}>
            <div className={styles["sec-tag"]} style={{ textAlign: "center" }}>
              Project Features
            </div>

            <h2 className={styles["sec-title"]}>
              Fully Developed. Ready to Build.
            </h2>

            <p
              className={styles["sec-sub"]}
              style={{ margin: "0 auto", textAlign: "center" }}
            >
              Not bare land — a complete, infrastructure-ready community.
            </p>
          </div>

          <div className={styles["usp-grid"]}>
            <div className={styles["usp-card"]}>
              <div className={styles["usp-icon"]}>🏛️</div>
              <h4>Exclusive Clubhouse</h4>
              <p>World-class community facility</p>
            </div>

            <div className={styles["usp-card"]}>
              <div className={styles["usp-icon"]}>🛣️</div>
              <h4>9m & 12m Roads</h4>
              <p>Cement roads, ready to use</p>
            </div>

            <div className={styles["usp-card"]}>
              <div className={styles["usp-icon"]}>🌿</div>
              <h4>Landscaped Gardens</h4>
              <p>Greenery & open lawns</p>
            </div>

            <div className={styles["usp-card"]}>
              <div className={styles["usp-icon"]}>🚶</div>
              <h4>Walking Track</h4>
              <p>Dedicated fitness path</p>
            </div>

            <div className={styles["usp-card"]}>
              <div className={styles["usp-icon"]}>⚡</div>
              <h4>Underground Power</h4>
              <p>NMRDA-spec electrification</p>
            </div>

            <div className={styles["usp-card"]}>
              <div className={styles["usp-icon"]}>💧</div>
              <h4>HDPE Water Pipeline</h4>
              <p>Full water infrastructure</p>
            </div>

            <div className={styles["usp-card"]}>
              <div className={styles["usp-icon"]}>🏦</div>
              <h4>80% Loan Available</h4>
              <p>SBI & ICICI Bank approved</p>
            </div>

            <div className={styles["usp-card"]}>
              <div className={styles["usp-icon"]}>📋</div>
              <h4>NMRDA Approved</h4>
              <p>Clear NA title, full docs</p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className={styles["form-sec"]} id="contact">
        <div className={styles["form-wrap"]}>
          <div className={styles.fl}>
            <div className={styles["sec-tag"]}>Get Full Details Free</div>

            <h2 className={styles["sec-title"]} style={{ color: "#fff" }}>
              Talk to Our Expert.
              <br />
              Visit the Site. Decide.
            </h2>

            <p className={styles["sec-sub"]}>
              Our executive calls you within 2 hours with pricing, layout maps,
              and booking details — or we arrange your personal site visit at
              zero cost.
            </p>

            <div className={styles["trust-pts"]}>
              <div className={styles.tp}>
                NMRDA Approved NA Plots — legally clear title
              </div>
              <div className={styles.tp}>
                Site visit is 100% free, no pressure to buy
              </div>
              <div className={styles.tp}>
                30–40% below Abhinandan Lodha, Kalpataru in the same corridor
              </div>
              <div className={styles.tp}>
                80% home loan via SBI & ICICI Bank
              </div>
              <div className={styles.tp}>
                15+ years, 10,000+ families — Neel INFRATECH&apos;s proven track
                record
              </div>
              <div className={styles.tp}>
                Early-stage pricing — before CCD triggers price jump
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <div className={styles.badges}>
        <div className={styles["badges-in"]}>
          <div className={styles.badge}>
            📋 NMRDA Approved
            <small>Certified Project</small>
          </div>

          <div className={styles.badge}>
            🏦 80% Home Loan
            <small>SBI & ICICI Bank</small>
          </div>

          <div className={styles.badge}>
            🤝 CREDAI Member
            <small>Neel INFRATECH</small>
          </div>

          <div className={styles.badge}>
            🏆 15+ Years
            <small>Trusted Developer</small>
          </div>

          <div className={styles.badge}>
            👨‍👩‍👧 10,000+ Families
            <small>Served Across Nagpur</small>
          </div>

          <div className={styles.badge}>
            🏗️ 95+ Layouts
            <small>Sold Out</small>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>
          <strong>Vrindavan Park VP-12 & VP-14</strong> · Mouza Sukali, Hingna,
          Nagpur · <strong>Neel INFRATECH</strong> · NMRDA Approved · CREDAI
          Member
        </p>
      </footer>

      <div className={styles.sticky}>
        <Link href={`tel:${Company.phone}`} className={styles.sc}>
          📞 Call Now
        </Link>

        <Link href="#contact" className={styles.sv}>
          🏡 Book Site Visit
        </Link>
      </div>
    </>
  );
}
