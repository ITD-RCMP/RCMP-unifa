import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

interface SocialIconsProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const SocialIcons = ({ size = "md", className = "" }: SocialIconsProps) => {
  const sizeClasses = {
    sm: "w-3.5 h-3.5", // 14px
    md: "w-5 h-5", // 20px
    lg: "w-6 h-6", // 24px
  };

  const iconSize = sizeClasses[size];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground hover:text-muted-foreground transition-colors duration-200"
        aria-label="Facebook"
      >
        <Facebook className={iconSize} />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground hover:text-muted-foreground transition-colors duration-200"
        aria-label="Twitter"
      >
        <Twitter className={iconSize} />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground hover:text-muted-foreground transition-colors duration-200"
        aria-label="Instagram"
      >
        <Instagram className={iconSize} />
      </a>
      <a
        href="mailto:hello@culinarychronicle.com"
        className="text-foreground hover:text-muted-foreground transition-colors duration-200"
        aria-label="Email"
      >
        <Mail className={iconSize} />
      </a>
    </div>
  );
};

export default SocialIcons;
