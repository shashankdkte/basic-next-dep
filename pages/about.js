import Link from 'next/link';

const AboutPage = () => {
  return (
    <div>
      <h1>About Us</h1>
      <Link href="/">
        Go back to Home
      </Link>
    </div>
  );
};

export default AboutPage;