export default function Home() {
  return (
    <div>
      <h1>My Homepage</h1>
      <form className="border border-black h-10 flex w-[80vw] rounded-md">
        <input
          className="flex-1 rounded-l-md p-2"
          type="text"
          placeholder="Search for shows"
        />
        <button className="p-2" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
