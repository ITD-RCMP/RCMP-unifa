const Footer = () => {
  return (
    <footer className="bg-background border-t py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">
          © {new Date().getFullYear()} The Culinary Chronicle. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
