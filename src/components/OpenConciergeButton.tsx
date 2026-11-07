import type { ButtonHTMLAttributes } from 'react';
import { openConciergeChat } from '../utils/openConciergeChat.ts';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

/** Opens the global AI concierge panel without leaving the current page. */
export default function OpenConciergeButton({ onClick, type = 'button', ...rest }: Props) {
  return (
    <button
      type={type}
      {...rest}
      onClick={(e) => {
        onClick?.(e);
        if (!e.defaultPrevented) openConciergeChat();
      }}
    />
  );
}
