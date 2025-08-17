import PageLayout from "../components/PageLayout";
import SignupForm from './Home/SignupForm';

export default function Events() {
  return (
    <PageLayout>
      <section className="mb-8">
        <div className="w-full flex justify-center px-4">
          <div className="w-full sm:w-auto max-w-3xl">
            <SignupForm />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
