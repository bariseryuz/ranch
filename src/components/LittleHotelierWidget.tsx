import { useEffect, useRef } from 'react';
import './LittleHotelierWidget.css';

const CHANNEL_CODE = import.meta.env.VITE_LH_CHANNEL_CODE as string | undefined;
const REGION = (import.meta.env.VITE_LH_REGION as string | undefined) || 'emea';
const SCRIPT_SRC = 'https://widget.siteminder.com/ibe.min.js';

export default function LittleHotelierWidget() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      // Script already on page — try to re-init if the IBE API is available
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (w.ibe?.init) w.ibe.init();
      return;
    }

    const script = document.createElement('script');
    script.src = SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  if (!CHANNEL_CODE) {
    return (
      <div className="lh-widget lh-widget--unconfigured">
        <p>
          Add <code>VITE_LH_CHANNEL_CODE=your-channel-code</code> and{' '}
          <code>VITE_LH_REGION=emea</code> to your <code>.env</code> file, then
          restart the dev server.
        </p>
      </div>
    );
  }

  return (
    <div className="lh-widget lh-widget--embed">
      {/* SiteMinder IBE — initialised by widget.siteminder.com/ibe.min.js */}
      <div
        className="ibe"
        data-region={REGION}
        data-channelcode={CHANNEL_CODE}
        data-widget="embed"
      />
    </div>
  );
}
