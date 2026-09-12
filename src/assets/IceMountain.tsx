/**
 * CSS-only icy mountain scene — crisp at any size (unlike the real photo,
 * which is a fixed-resolution portrait shot and gets soft/blurry if
 * stretched full-bleed across a wide viewport). Sits behind the real
 * bottle photo in the hero so the edges around it stay sharp.
 */
export function IceMountain() {
  return (
    <div className="absolute inset-0 h-full w-full">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 0%, #C9EAF5 0%, #8FCBE0 32%, #3E7C97 62%, #0A1013 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(38% 30% at 68% 12%, rgba(255,255,255,0.85), transparent 70%)',
        }}
      />
      {/* far ridge */}
      <div
        className="absolute inset-x-0 bottom-0 h-[55%] opacity-70 blur-[2px]"
        style={{
          background: 'linear-gradient(180deg, #E9F6FB, #B9DEEB)',
          clipPath:
            'polygon(0% 40%, 8% 30%, 18% 45%, 27% 22%, 38% 38%, 50% 15%, 61% 34%, 73% 20%, 84% 42%, 93% 26%, 100% 38%, 100% 100%, 0% 100%)',
        }}
      />
      {/* mid ridge */}
      <div
        className="absolute inset-x-0 bottom-0 h-[42%] opacity-85"
        style={{
          background: 'linear-gradient(180deg, #DDF0F8, #9CCFE3)',
          clipPath:
            'polygon(0% 55%, 10% 35%, 22% 58%, 33% 28%, 46% 50%, 58% 18%, 70% 45%, 82% 30%, 92% 52%, 100% 33%, 100% 100%, 0% 100%)',
        }}
      />
      {/* near ridge */}
      <div
        className="absolute inset-x-0 bottom-0 h-[26%]"
        style={{
          background: 'linear-gradient(180deg, #F4FBFD, #C3E6F1)',
          clipPath:
            'polygon(0% 60%, 14% 25%, 30% 62%, 44% 20%, 60% 55%, 76% 15%, 90% 48%, 100% 22%, 100% 100%, 0% 100%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
    </div>
  )
}
