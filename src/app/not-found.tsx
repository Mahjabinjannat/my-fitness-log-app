import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-oswald text-[100px] font-bold leading-none text-[#C2F800]">
          404
        </h1>

        <h2 className="mt-5 font-oswald text-[32px] font-bold uppercase">
          Page Not Found
        </h2>

        <p className="mt-3 text-[14px] text-[#9CA3AF]">
          Looks like this workout went missing.
          <br />
          The page you&apos;re looking for doesn&apos;t exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-[7px] bg-[#C2F800] px-7 py-3 text-[12px] font-bold text-black transition duration-300 hover:bg-[#aee000]"
        >
          BACK TO WORKOUTS
        </Link>
      </div>
    </main>
  );
}
