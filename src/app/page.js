export default function Home() {
  return (
    <div className="h-screen">
      <div className="px-4 py-6 bg-black min-h">
        <a className="bg-slate-400 ms-20 px-6 py-2 border-slate rounded mx-2 text-white">
          Home
        </a>
        <a className="bg-slate-400 px-6 py-2 border-slate rounded mx-2 text-white">
          Todos
        </a>
      </div>

      <div>
        <div className="text-4xl font-bold px-20 py-6">Todos</div>
        <div className="text-xl font-bold px-20 py-6">Previous todo</div>

        <hr />
        <br />

        <div className="  px-20">hey man</div>
        <div className="px-20">hey woman</div>
      </div>

      <div className="px-4 py-2 bg-gray-400 text-gray-200 text-center inset-x-0 absolute bottom-0">
        NEXTJS 13.4 Release
      </div>
    </div>
  );
}
