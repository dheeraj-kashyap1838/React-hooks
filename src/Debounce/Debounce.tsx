import { useState, useEffect } from "react";

const DebounceExample = () => {
  const [input, setInput] = useState("");
  const [debouncedValue, setDebounceValue] = useState("");

  useEffect(()=>{
    let timer = setTimeout(()=>{
      setDebounceValue(input)
    },(500))

    return () => clearTimeout(timer)
  },[input])

  return (
    <section className="grid min-h-screen place-items-center bg-linear-to-br from-slate-50 via-cyan-50 to-orange-50 px-5 py-10 text-slate-900">
      <div className="w-full max-w-xl rounded-lg border border-slate-200 bg-white/90 p-6 shadow-2xl shadow-slate-200/80 sm:p-8">
        <div className="mb-7">
          <span className="inline-flex min-h-7 items-center rounded-full bg-teal-100 px-3 text-sm font-bold text-teal-700">
            React Hook
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
            Debounce Example
          </h2>
          <p className="mt-2 leading-7 text-slate-500">
            Type a search term and watch the value update after a short pause.
          </p>
        </div>

        <label className="mb-6 grid gap-2 font-bold text-slate-700">
          <span>Search</span>
          <input
            type="text"
            placeholder="Search..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-500/20"
          />
        </label>

        <div className="grid gap-3">
          <p className="flex flex-col gap-1 rounded-lg border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <span className="text-slate-500">Typing</span>
            <strong className="wrap-break-word text-slate-950 sm:max-w-[60%] sm:text-right">
              {input || "Waiting for input"}
            </strong>
          </p>
          <p className="flex flex-col gap-1 rounded-lg border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <span className="text-slate-500">Debounced</span>
            <strong className="wrap-break-word text-slate-950 sm:max-w-[60%] sm:text-right">
              {debouncedValue || "No API call yet"}
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DebounceExample;
