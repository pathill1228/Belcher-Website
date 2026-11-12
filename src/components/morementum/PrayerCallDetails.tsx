import { Cta } from "@/components/ui/Cta";
import type { PrayerCallConfig } from "@/data/morementum";

type PrayerCallDetailsProps = {
  call: PrayerCallConfig;
  pendingStatus: string;
  pendingNote: string;
};

/**
 * Prayer call panel. Join controls render only for details that have been
 * filled in (src/data/morementum.ts); until then it shows a plain status.
 */
export function PrayerCallDetails({ call, pendingStatus, pendingNote }: PrayerCallDetailsProps) {
  const details = [
    { term: "When", value: [call.schedule, call.timezone].filter(Boolean).join(" · ") },
    { term: "Dial in", value: call.phoneNumber },
    { term: "Access code", value: call.accessCode },
  ].filter((detail): detail is { term: string; value: string } => Boolean(detail.value));
  const hasJoinOption = Boolean(call.phoneNumber || call.meetingUrl);

  return (
    <div className="border border-gold/50 bg-navy p-7 text-ivory sm:p-10">
      <p className="type-eyebrow text-gold-light">{call.title}</p>
      <p className="mt-3 text-ivory/85">{call.description}</p>

      {hasJoinOption ? (
        <>
          {details.length > 0 && (
            <dl className="mt-6 divide-y divide-ivory/15 border-y border-ivory/15">
              {details.map((detail) => (
                <div key={detail.term} className="flex flex-wrap justify-between gap-x-6 gap-y-1 py-3">
                  <dt className="type-label text-ivory/70">{detail.term}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>
          )}
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            {call.phoneNumber && (
              <Cta href={`tel:${call.phoneNumber.replace(/[^\d+]/g, "")}`}>Call in</Cta>
            )}
            {call.meetingUrl && (
              <Cta href={call.meetingUrl} variant={call.phoneNumber ? "text" : "outline"}>
                Join online
              </Cta>
            )}
          </div>
        </>
      ) : (
        <div className="mt-7 border-t border-ivory/15 pt-7">
          <p className="font-serif text-2xl leading-snug">{pendingStatus}</p>
          <p className="mt-2 text-sm text-ivory/75">{pendingNote}</p>
        </div>
      )}
    </div>
  );
}
