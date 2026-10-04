"use client";
import { useState } from "react";
const intentLabels: Record<string, string> = {
  General: "A general question",
  Accounting: "Accounting or financial leadership",
  Buy: "Buying a home",
  Sell: "Selling a home",
  Rent: "A furnished rental",
  Prepare: "Preparing or improving a property",
};
const intents = Object.keys(intentLabels);
export default function ContactInquiry({
  initialIntent = "General",
}: {
  initialIntent?: string;
}) {
  const [draft, setDraft] = useState("");
  const [notice, setNotice] = useState("");
  const [intent, setIntent] = useState(
    intents.includes(initialIntent) ? initialIntent : "General",
  );
  function prepare(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setDraft(
      [
        `Hello Jack,`,
        `I would like to discuss: ${intent}.`,
        `Name: ${data.get("name")}`,
        `Reply email: ${data.get("email") || "Use my sending address"}`,
        `Phone: ${data.get("phone") || "Not provided"}`,
        `Location/property: ${data.get("location") || "To discuss"}`,
        `Timing/dates: ${data.get("timing") || "To discuss"}`,
        "",
        String(data.get("message")),
      ].join("\n"),
    );
    setNotice("");
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(draft);
      setNotice(
        "Copied. Paste the inquiry into an email to jack@gooddeeds.com and send it.",
      );
    } catch {
      setNotice(
        "Select and copy the text below, then email it to jack@gooddeeds.com.",
      );
    }
  }
  return (
    <div className="rounded-2xl border border-[#132B3E]/15 bg-white p-6 sm:p-8">
      <h2 className="font-serif text-3xl">Start with a few details.</h2>
      <p className="mt-3 leading-relaxed text-gray-600">
        Prepare an email to Jack, then send it from your email app. For a
        quicker conversation, call 202-297-2432.
      </p>
      <form onSubmit={prepare} className="mt-6 space-y-5">
        <div>
          <label
            htmlFor="inquiry-intent"
            className="mb-2 block text-sm font-semibold"
          >
            What would you like to discuss?
          </label>
          <select
            id="inquiry-intent"
            value={intent}
            onChange={(event) => {
              setIntent(event.target.value);
              setDraft("");
            }}
            className="w-full rounded-lg border border-gray-300 p-3"
          >
            {intents.map((value) => (
              <option key={value} value={value}>
                {intentLabels[value]}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="inquiry-name"
              className="mb-2 block text-sm font-semibold"
            >
              Name <span className="text-gray-500">(required)</span>
            </label>
            <input
              id="inquiry-name"
              name="name"
              autoComplete="name"
              maxLength={120}
              required
              className="w-full rounded-lg border border-gray-300 p-3"
              onChange={() => setDraft("")}
            />
          </div>
          <div>
            <label
              htmlFor="inquiry-email"
              className="mb-2 block text-sm font-semibold"
            >
              Reply email <span className="text-gray-500">(optional)</span>
            </label>
            <input
              id="inquiry-email"
              name="email"
              type="email"
              autoComplete="email"
              maxLength={254}
              className="w-full rounded-lg border border-gray-300 p-3"
              onChange={() => setDraft("")}
            />
          </div>
          <div>
            <label
              htmlFor="inquiry-phone"
              className="mb-2 block text-sm font-semibold"
            >
              Phone <span className="text-gray-500">(optional)</span>
            </label>
            <input
              id="inquiry-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={40}
              className="w-full rounded-lg border border-gray-300 p-3"
              onChange={() => setDraft("")}
            />
          </div>
          <div>
            <label
              htmlFor="inquiry-location"
              className="mb-2 block text-sm font-semibold"
            >
              Company, location, or property
            </label>
            <input
              id="inquiry-location"
              name="location"
              maxLength={200}
              className="w-full rounded-lg border border-gray-300 p-3"
              onChange={() => setDraft("")}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="inquiry-timing"
            className="mb-2 block text-sm font-semibold"
          >
            Timing or rental dates
          </label>
          <input
            id="inquiry-timing"
            name="timing"
            maxLength={120}
            className="w-full rounded-lg border border-gray-300 p-3"
            onChange={() => setDraft("")}
          />
        </div>
        <div>
          <label
            htmlFor="inquiry-message"
            className="mb-2 block text-sm font-semibold"
          >
            What matters most? <span className="text-gray-500">(required)</span>
          </label>
          <textarea
            id="inquiry-message"
            name="message"
            rows={4}
            maxLength={2000}
            required
            className="w-full rounded-lg border border-gray-300 p-3"
            onChange={() => setDraft("")}
          />
          <p className="mt-2 text-xs text-gray-500">
            Please leave out financial account numbers, identification
            documents, and other sensitive information.
          </p>
        </div>
        <button type="submit" className="button-primary">
          Prepare my inquiry
        </button>
      </form>
      {draft && (
        <div className="mt-7 border-t border-gray-200 pt-6">
          <p role="status" className="font-semibold">
            Your email draft is ready. It has not been sent.
          </p>
          <div className="my-4 flex flex-wrap gap-3">
            <a
              href={`mailto:jack@gooddeeds.com?subject=${encodeURIComponent(`Good Deeds inquiry: ${intent}`)}&body=${encodeURIComponent(draft)}`}
              className="button-primary"
            >
              Open email draft
            </a>
            <button
              type="button"
              onClick={copy}
              className="button-light border border-[#132B3E]/25"
            >
              Copy inquiry
            </button>
          </div>
          <p className="mb-3 text-sm text-gray-600">
            Send the draft from your email app. If no app opens, copy the
            inquiry or call Jack.
          </p>
          <label
            htmlFor="prepared-inquiry"
            className="mb-2 block text-sm font-semibold"
          >
            Prepared inquiry
          </label>
          <textarea
            id="prepared-inquiry"
            readOnly
            value={draft}
            rows={8}
            className="w-full rounded-lg border border-gray-300 p-3 text-sm"
          />
          {notice && (
            <p role="status" className="mt-3 text-sm text-[#096DBC]">
              {notice}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
