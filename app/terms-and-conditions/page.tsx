"use client";

import { useState } from "react";
import CustomerTerms from "@/components/terms/CustomerTerms";
import DistributorTerms from "@/components/terms/DistributorTerms";

export default function TermsAndConditionsPage() {
  const [role, setRole] = useState<"customer" | "distributor">("distributor");

  return (
    <main className="bg-background text-foreground">
      <section className="max-w-5xl mx-auto px-4 py-16 mt-10">

        <h1 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8">
          Terms & Conditions
        </h1>

        {/* Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-full bg-muted p-1">
            <button
              onClick={() => setRole("distributor")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition
                ${
                  role === "distributor"
                    ? "bg-primary text-white shadow"
                    : "text-muted-foreground"
                }`}
            >
              Distributor
            </button>
            <button
              onClick={() => setRole("customer")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition
                ${
                  role === "customer"
                    ? "bg-primary text-white shadow"
                    : "text-muted-foreground"
                }`}
            >
              Customer
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-6">
          {role === "customer" ? <CustomerTerms /> : <DistributorTerms />}
        </div>

      </section>
    </main>
  );
}
