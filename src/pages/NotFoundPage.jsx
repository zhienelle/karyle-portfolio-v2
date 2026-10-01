import { ErrorPage } from '../components/ErrorPage.jsx';

export function NotFoundPage() {
  return (
    <ErrorPage
      eyebrow="404 / PAGE"
      title="This page doesn’t exist."
      description="The route may have changed, or the address may be incomplete."
      linkTo="/"
      linkLabel="Back to home"
    />
  );
}
