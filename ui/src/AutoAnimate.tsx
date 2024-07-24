import { useAutoAnimate } from '@formkit/auto-animate/react';
import { ReactNode } from 'react';

export default function AutoAnimate({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  const [animationParent] = useAutoAnimate();
  return (
    <div className={className} ref={animationParent}>
      {children}
    </div>
  );
}
