import './LittleHotelierWidget.css';

const CHANNEL_CODE = import.meta.env.VITE_LH_CHANNEL_CODE as string | undefined;

export default function LittleHotelierWidget() {
  if (!CHANNEL_CODE) {
    return (
      <div className="lh-widget lh-widget--unconfigured">
        <p>
          Add <code>VITE_LH_CHANNEL_CODE=your-channel-code</code> to your{' '}
          <code>.env</code> file and restart the dev server.
        </p>
      </div>
    );
  }

  return (
    <div className="lh-widget lh-widget--embed">
      <iframe
        src={`https://direct-book.com/properties/${CHANNEL_CODE}`}
        allow="focus-without-user-activation"
        title="Book your stay at Briggs Brothers Ranch"
      />
    </div>
  );
}
