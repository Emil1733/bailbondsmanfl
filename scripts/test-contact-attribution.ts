import assert from "node:assert/strict";
import { NextRequest } from "next/server";
import { POST } from "../src/app/api/contact/route";

process.env.AIRTABLE_ACCESS_TOKEN = "test-token";
process.env.AIRTABLE_BASE_ID = "appTestBase";
process.env.AIRTABLE_TABLE_ID = "tblTestTable";
delete process.env.VERCEL;

async function run() {
  let capturedBody: unknown;
  const originalFetch = globalThis.fetch;

  globalThis.fetch = async (_input, init) => {
    capturedBody = JSON.parse(String(init?.body || "{}"));
    return new Response(JSON.stringify({ records: [{ id: "recTest" }] }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  };

  try {
  const request = new NextRequest("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Test Person",
      phone: "305-555-0100",
      defendantName: "Test Defendant",
      message: "",
      consent: true,
      website: "",
      startedAt: Date.now() - 2_000,
      landingPage: "/county/pinellas/clearwater",
      originatingPage: "/county/pinellas/clearwater",
    }),
  });

  const response = await POST(request);
  assert.equal(response.status, 201);

  const fields = (
    capturedBody as {
      records: Array<{ fields: Record<string, unknown> }>;
    }
  ).records[0].fields;
  assert.equal(fields["Landing Page"], "/county/pinellas/clearwater");
  assert.equal(fields["Originating Page"], "/county/pinellas/clearwater");
  assert.equal(fields.Source, "bondflorida.com/contact");

    console.log("Contact attribution payload test passed.");
  } finally {
    globalThis.fetch = originalFetch;
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
