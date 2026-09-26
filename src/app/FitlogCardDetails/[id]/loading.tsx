export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex items-center gap-3">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#C2F800] border-t-transparent" />
      <p className="animate-pulse text-[18px] font-medium text-[#C2F800]">
        Loading workout details card...
      </p>
    </div>
    </div>
  );
}
