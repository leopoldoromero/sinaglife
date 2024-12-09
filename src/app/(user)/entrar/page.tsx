import LogIn from "./components/LogIn";

export default function SignIn({
    searchParams,
  }: {
    searchParams: { from: string };
  }) {
    const decodeFromPath =  decodeURIComponent(searchParams.from)
    return (
      <div >
          <LogIn from={decodeFromPath} />
      </div>
    );
  }
  