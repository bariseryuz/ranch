import { useEffect, useRef } from 'react';
import './LittleHotelierWidget.css';

const CHANNEL_CODE = import.meta.env.VITE_LH_CHANNEL_CODE as string | undefined;
const REGION = (import.meta.env.VITE_LH_REGION as string | undefined) || 'emea';
const SCRIPT_SRC = 'https://widget.siteminder.com/ibe.min.js';

function patchIframeAllow(node: Node) {
  if (node instanceof HTMLIFrameElement) {
    const existing = node.getAttribute('allow') ?? '';
    if (!existing.includes('focus-without-user-activation')) {
      node.setAttribute(
        'allow',
        [existing, 'focus-without-user-activation'].filter(Boolean).join('; '),
      );
    }
  }
}

export default function LittleHotelierWidget() {
  const initialized = useRef(false);

  useEffect(() => {
    // Watch for iframes SiteMinder injects and grant focus permission
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          patchIframeAllow(node);
          if (node instanceof Element) {
            node.querySelectorAll('iframe').forEach(patchIframeAllow);
          }
        });
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    if (initialized.current) return () => observer.disconnect();
    initialized.current = true;

    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (w.ibe?.init) w.ibe.init();
      return () => observer.disconnect();
    }

    const script = document.createElement('script');
    script.src = SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => observer.disconnect();
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
      <div
        className="ibe"
        data-region={REGION}
        data-channelcode={CHANNEL_CODE}
        data-widget="embed"
      />
    </div>
  );
}
