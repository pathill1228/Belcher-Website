type JsonLdProps = {
  data: Record<string, unknown>;
};

/** Renders a schema.org JSON-LD block. Build the data with helpers in src/lib/seo.ts. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
