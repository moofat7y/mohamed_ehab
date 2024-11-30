export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="relative inline-block text-sm sm:text-base md:text-lg group w-full"
    >
      <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-black transition-colors duration-300 ease-out border-2 border-[#2b2b2bf2] rounded-lg group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-white"></span>
        <span className="absolute left-0 w-[calc(100%+20px)] h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#2b2b2bf2] group-hover:-rotate-180 ease"></span>
        <span className="relative">{children}</span>
      </span>
      <span
        className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#2b2b2bf2] rounded-lg group-hover:mb-0 group-hover:mr-0"
        data-rounded="rounded-lg"
      ></span>
    </button>
  );
}
