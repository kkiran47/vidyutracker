export function HelpPage() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-white text-2xl">Help & FAQs</h1>
      <div className="space-y-4 text-gray-300">
        <div>
          <h2 className="text-white text-lg">⚡ How to register my company?</h2>
          <p>Fill in your details on the Register page. After registering, you’ll be redirected to your dashboard.</p>
        </div>
        <div>
          <h2 className="text-white text-lg">📊 How is energy tracked?</h2>
          <p>Our IoT sensors connect to your machines and send live data to the dashboard.</p>
        </div>
        <div>
          <h2 className="text-white text-lg">🔔 How do alerts work?</h2>
          <p>You’ll get instant notifications for unusual energy spikes or system failures.</p>
        </div>
      </div>
    </div>
  );
}
