import PageLayout from "../components/PageLayout";
import SignupForm from './Home/SignupForm';

export default function Events() {
  return (
    <PageLayout>
      <section className="mb-8 min-w-2xl">
        <SignupForm />
      </section>
    </PageLayout>
  );
}
