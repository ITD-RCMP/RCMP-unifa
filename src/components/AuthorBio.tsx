import { Twitter, Linkedin, Mail } from "lucide-react";

interface AuthorBioProps {
  name: string;
  bio: string;
  image?: string;
}

const AuthorBio = ({ name, bio, image }: AuthorBioProps) => {
  return (
    <div className="border-t pt-12 mt-16">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-shrink-0">
          <div className="w-20 h-20 rounded-full bg-muted overflow-hidden">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground text-2xl font-display">
                {name.charAt(0)}
              </div>
            )}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-display uppercase text-foreground tracking-tight mb-2">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{bio}</p>
          <div className="flex items-center gap-4">
            <a
              href={`https://twitter.com/${name.toLowerCase().replace(/\s+/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors duration-200"
              aria-label={`${name} on Twitter`}
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a
              href={`https://linkedin.com/in/${name.toLowerCase().replace(/\s+/g, '-')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors duration-200"
              aria-label={`${name} on LinkedIn`}
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${name.toLowerCase().replace(/\s+/g, '.')}@culinarychronicle.com`}
              className="text-foreground hover:text-muted-foreground transition-colors duration-200"
              aria-label={`Email ${name}`}
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;
