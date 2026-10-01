import { Link } from 'react-router-dom';

export function ErrorPage({
  eyebrow = '404 / PAGE',
  title = 'Page not found.',
  description = 'The page you’re looking for doesn’t exist.',
  linkTo = '/',
  linkLabel = 'Back to home',
}) {
  return (
    <section
      className="error-page"
      data-navbar-theme="light"
      aria-labelledby="error-page-title"
    >
      <div className="container error-page__container">
        <p className="error-page__eyebrow">{eyebrow}</p>

        <h1 id="error-page-title">{title}</h1>

        <p className="error-page__description">{description}</p>

        <Link className="error-page__link" to={linkTo}>
          ← {linkLabel}
        </Link>
      </div>
    </section>
  );
}
