
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AdminLogin() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        setError(error.message);
        return;
      }

      router.replace("/admin/dashboard");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-yellow px-4 py-10 font-body">

      <div className="w-full max-w-md">

        {/* Brand */}
        <div className="mb-8 flex justify-center">
          <div className="rounded-full border-2 border-brand-black bg-brand-cream px-5 py-2 shadow-[3px_3px_0_#17130F]">
            <span className="font-heading text-sm font-extrabold tracking-tight text-brand-black">
              FOUNDER KE SAMAAN
            </span>
          </div>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl border-2 border-brand-black bg-brand-cream p-6 shadow-[5px_5px_0_#17130F] sm:p-9">

          {/* Heading */}
          <div className="mb-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
              ADMIN PORTAL / 01
            </p>

            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-brand-black sm:text-5xl">
              Welcome back.
            </h1>

            <p className="mt-3 text-sm text-brand-black/70">
              Sign in to manage your waitlist and founder community.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-bold text-brand-black"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                autoComplete="username"
                required
                disabled={loading}
                className="w-full rounded-xl border-2 border-brand-black bg-white px-4 py-3 text-sm text-brand-black outline-none transition focus:ring-2 focus:ring-brand-yellow disabled:opacity-60"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-bold text-brand-black"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                disabled={loading}
                className="w-full rounded-xl border-2 border-brand-black bg-white px-4 py-3 text-sm text-brand-black outline-none transition focus:ring-2 focus:ring-brand-yellow disabled:opacity-60"
              />
            </div>

            {/* Error */}
            {error && (
              <div
                role="alert"
                className="rounded-lg border-2 border-brand-red bg-brand-red/10 px-4 py-3 text-sm font-medium text-brand-red"
              >
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full border-2 border-brand-black bg-brand-red px-5 py-3.5 font-heading text-sm font-bold text-white shadow-[3px_3px_0_#17130F] transition-all hover:translate-y-0.5 hover:shadow-none disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign in →"}
            </button>

          </form>

          {/* Security Note */}
          <div className="mt-7 border-t border-brand-black/20 pt-5">
            <p className="text-center text-xs text-brand-black/60">
              Restricted access · Authorized administrators only
            </p>
          </div>

        </div>

        {/* Footer */}
        <p className="mt-6 text-center font-heading text-xs font-bold tracking-widest text-brand-black">
          FOUNDER KE SAMAAN · ADMIN PORTAL
        </p>

      </div>
    </main>
  );
}
