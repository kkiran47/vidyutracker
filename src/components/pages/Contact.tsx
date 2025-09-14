import { Button } from "@/components/ui/button";

export function ContactPage() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-white text-2xl">Contact Us</h1>
      <p className="text-gray-400">
        Need help? Reach out to our support team and we’ll get back to you quickly.
      </p>

      <form className="space-y-4">
        <div>
          <label className="block text-gray-300 mb-1">Name</label>
          <input type="text" className="w-full p-2 rounded bg-gray-800 text-white" />
        </div>
        <div>
          <label className="block text-gray-300 mb-1">Email</label>
          <input type="email" className="w-full p-2 rounded bg-gray-800 text-white" />
        </div>
        <div>
          <label className="block text-gray-300 mb-1">Message</label>
          <textarea className="w-full p-2 rounded bg-gray-800 text-white" rows={4}></textarea>
        </div>
        <Button type="submit">Send Message</Button>
      </form>
    </div>
  );
}
