import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold underline mt-50 py-10 px-5">
        Hello world!
      </h1>
      <p className="text-lg text-gray-600">
        Welcome to the GenZ Web App built with Next.js and Tailwind CSS.
      </p>
    </div>
  );
}
