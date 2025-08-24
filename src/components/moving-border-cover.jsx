import { useMemo } from "preact/hooks";

const borderShineCSS =
  "[background:linear-gradient(0deg,#000000,#000000)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.slate.500)_86%,_theme(colors.slate.300)_90%,_theme(colors.slate.500)_94%,_theme(colors.slate.600/.48))_border-box] border border-transparent animate-border";
export default function MovingBorderCover({ className = "", children }) {
  const classCss = useMemo(() => {
    return borderShineCSS + " " + className;
  }, [className]);
  return <div className={classCss}>{children}</div>;
}
