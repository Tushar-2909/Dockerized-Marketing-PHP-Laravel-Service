import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/20 bg-background">
      <div className="px-8 lg:px-16 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left - Brand */}
          <div className="space-y-4">
            <span className="text-lg font-medium tracking-[0.25em] uppercase text-foreground">
              Studio
            </span>
            <p className="text-xs text-muted-foreground/60 max-w-xs leading-relaxed">
              Crafting digital experiences that elevate brands and captivate audiences.
            </p>
          </div>

          {/* Middle - Navigation */}
          <div className="flex gap-16">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/40 mb-4">
                Navigation
              </h4>
              <ul className="space-y-2">
                {[
                  { name: "Home", path: "/" },
                  { name: "Campaigns", path: "/campaigns" },
                  { name: "Contact", path: "/contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-xs text-muted-foreground/60 hover:text-primary transition-colors duration-500"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/40 mb-4">
                Social
              </h4>
              <ul className="space-y-2">
                {["Instagram", "LinkedIn", "Behance"].map((social) => (
                  <li key={social}>
                    <a
                      href="#"
                      className="text-xs text-muted-foreground/60 hover:text-primary transition-colors duration-500"
                    >
                      {social}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-muted-foreground/40 tracking-widest">
            © {new Date().getFullYear()} Studio. All rights reserved.
          </p>
          <p className="text-[10px] text-muted-foreground/40 tracking-widest">
            Design & Development
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
