"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { colors, serviceNeededOptions } from "@/lib/design";

const fieldClass =
  "w-full rounded-2xl border bg-white/80 px-5 py-4 text-base outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-[rgba(11,58,102,0.38)] focus:border-[rgba(212,175,55,0.55)] focus:shadow-[0_0_0_4px_rgba(212,175,55,0.12)]";

const labelClass = "mb-2.5 block text-sm font-semibold tracking-wide";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="premium-card p-7 sm:p-10"
      noValidate
      aria-label="Request a quote contact form"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className={labelClass}>
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className={fieldClass}
            style={{ borderColor: "rgba(11,58,102,0.12)", color: colors.navy }}
            required
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="813-377-5735"
            className={fieldClass}
            style={{ borderColor: "rgba(11,58,102,0.12)", color: colors.navy }}
            required
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@email.com"
            className={fieldClass}
            style={{ borderColor: "rgba(11,58,102,0.12)", color: colors.navy }}
            required
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="service" className={labelClass}>
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className={fieldClass}
            style={{ borderColor: "rgba(11,58,102,0.12)", color: colors.navy }}
            required
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceNeededOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Tell us about your project, timeline, or questions..."
            className={`${fieldClass} resize-y min-h-[160px]`}
            style={{ borderColor: "rgba(11,58,102,0.12)", color: colors.navy }}
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex w-full items-center justify-center gap-2.5 rounded-2xl px-10 py-5 text-lg font-semibold tracking-wide transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
        style={{
          background: `linear-gradient(165deg, #E4C65A 0%, ${colors.champagne} 48%, #C9A227 100%)`,
          color: colors.navy,
          boxShadow:
            "0 18px 44px -12px rgba(212,175,55,0.55), inset 0 1px 0 rgba(255,255,255,0.35)",
        }}
      >
        Request Quote
        <ArrowRight size={20} strokeWidth={2.25} />
      </button>

      {submitted ? (
        <p
          className="mt-5 text-sm leading-relaxed"
          style={{ color: "rgba(11,58,102,0.7)" }}
          role="status"
        >
          Form UI only — this quote request is not connected yet. Please call
          or email us directly for now.
        </p>
      ) : (
        <p
          className="mt-5 text-sm leading-relaxed"
          style={{ color: "rgba(11,58,102,0.55)" }}
        >
          This form is for design preview only and is not connected to a backend
          yet.
        </p>
      )}
    </form>
  );
}
