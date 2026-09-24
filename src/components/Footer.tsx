import { Link } from "react-router-dom";
import { aids, SITE_IS_SAMPLE } from "@/data/aids";

const Footer = () => (
  <footer className="border-t border-border bg-card mt-20">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-14">
      <div className="grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display font-bold text-foreground text-lg">RCMP Financial Aids</p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
            A student-facing guide to the money on offer at Royal College of Medicine Perak, and
            who qualifies for each one.
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-label text-muted-foreground">On this site</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/aids" className="text-foreground hover:text-navy-mid transition-colors duration-200">
                All financial aids ({aids.length})
              </Link>
            </li>
            <li>
              <Link to="/how-to-apply" className="text-foreground hover:text-navy-mid transition-colors duration-200">
                How to apply
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-foreground hover:text-navy-mid transition-colors duration-200">
                Common questions
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-foreground hover:text-navy-mid transition-colors duration-200">
                About the aid office
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-label text-muted-foreground">Student finance desk</p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Placeholder room number and extension.
            <br />
            Placeholder email address.
            <br />
            Weekdays, 9am to 1pm.
          </p>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row gap-3 justify-between">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Royal College of Medicine Perak. Financial aid information
          is guidance, not a contract of award.
        </p>
        {SITE_IS_SAMPLE && (
          <p className="text-xs text-muted-foreground">
            Sample listings — real figures not yet entered.
          </p>
        )}
      </div>
    </div>
  </footer>
);

export default Footer;
