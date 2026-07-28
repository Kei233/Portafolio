export function Footer() {
  return (
    <footer
      className="
    h-full
    w-full
    py-8
    max-w-screen
    overflow-hidden
    border-t border-silver-800/50
    bg-baltic-blue-950/15
    flex
    relative
    justify-center
    items-center
"
    >
    <div className="h-16 w-2/5 bg-cyan-600/30 blur-3xl absolute -top-3/5 left-1/2 -translate-x-1/2" />
    <div className="h-16 w-64 bg-cyan-600/30 blur-3xl absolute -top-10/12 -right-1/10" />
    <div className="h-16 w-64 bg-cyan-600/30 blur-3xl absolute -bottom-10/12 -left-1/10" />
      © {new Date().getFullYear()} Johan Yesid Tavera · Colombia
    </footer>
  );
}
