export function PagePlaceholder({ eyebrow, title, description, children, navbarTheme = 'light' }) {
  return (
    <section
      className="page-placeholder section"
      data-navbar-theme={navbarTheme}
      aria-labelledby="page-title"
    >
      <div className="container">
        <div className="page-placeholder__content">
          <p className="eyebrow">{eyebrow}</p>
          <h1 id="page-title" className="display-heading">
            {title}
          </h1>
          <p className="lede">{description}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
