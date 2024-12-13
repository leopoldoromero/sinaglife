import LogInUI from "./components/LogInUI";

export default function LogIn({
    searchParams,
  }: {
    searchParams: { from: string };
  }) {
    const decodeFromPath =  decodeURIComponent(searchParams.from)
    return (
      <div >
          <LogInUI from={decodeFromPath} />
      </div>
    );
  }
  