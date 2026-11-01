/**
 * ════════════════════════════════════════════════════════════════
 *  LOOKER STUDIO DASHBOARDS — the ONLY file you edit to plug in data
 * ════════════════════════════════════════════════════════════════
 *
 *  For every Looker Studio report you want to track:
 *   1. In Looker Studio open the report → File → Report settings →
 *      paste the GA4 Measurement ID (looks like G-XXXXXXXXXX).
 *   2. Copy the same Measurement ID into `measurementId` below.
 *   3. Copy the report ID from the report URL into `lookerReportId`:
 *      https://lookerstudio.google.com/reporting/<THIS-PART>/page/...
 *   4. (Optional) If this dashboard sends data to a different GA4
 *      property than the default one in .env.local, set `ga4PropertyId`.
 *
 *  Dashboards with an empty `measurementId` keep showing demo data.
 */

export type DashboardConfig = {
  id: string;
  name: string;
  category: string;
  /** GA4 Measurement ID used inside Looker Studio, e.g. "G-ABC123XYZ" */
  measurementId: string;
  /** Report ID taken from the Looker Studio URL */
  lookerReportId: string;
  /** Numeric GA4 property ID. Leave empty to use GA4_PROPERTY_ID from .env.local */
  ga4PropertyId?: string;
  /** Full link to the Looker Studio report (used for the "Open" button) */
  lookerUrl?: string;
};

export const DASHBOARDS: DashboardConfig[] = [
  { id: "std-transfer", name: "TME Std Transfer In & Out Dashboard", category: "Students", measurementId: "G-VHZNXTMVES", lookerReportId: "f04f7be1-5918-4cd6-879b-97ac5649f7d5" },
  { id: "employee-attendance", name: "Employee Attendance Dashboard", category: "HR", measurementId: "", lookerReportId: "" },
  { id: "daily-registration", name: "TME Daily Registration Analysis", category: "Admissions", measurementId: "", lookerReportId: "" },
  { id: "recovery", name: "TME Recovery Dashboard", category: "Finance", measurementId: "", lookerReportId: "" },
  { id: "one-pager", name: "TME Dashboards One-Pager", category: "Leadership", measurementId: "", lookerReportId: "" },
  { id: "children-benefit", name: "TME Employee Children Benefit Dashboard", category: "HR", measurementId: "", lookerReportId: "" },
  { id: "employee-qualification", name: "TME Employee Qualification Dashboard", category: "HR", measurementId: "", lookerReportId: "" },
  { id: "student-presence", name: "Student Presence & Inactivity Monitor", category: "Students", measurementId: "", lookerReportId: "" },
  { id: "turnover", name: "TME Turnover Dashboard", category: "HR", measurementId: "", lookerReportId: "" },
  { id: "service-hub-tickets", name: "TME Service Hub Tickets Dashboard", category: "Operations", measurementId: "", lookerReportId: "" },
  { id: "open-invoices", name: "TME Open Invoices Dashboard", category: "Finance", measurementId: "", lookerReportId: "" },
  { id: "footfall", name: "TME Footfall Dashboard", category: "Operations", measurementId: "", lookerReportId: "" },
  { id: "admissions", name: "TME Admissions Dashboards", category: "Admissions", measurementId: "", lookerReportId: "" },
  { id: "employee-salary", name: "TME Employee Salary Dashboard", category: "HR", measurementId: "", lookerReportId: "" },
  { id: "parent-concern", name: "Parent Concern Dashboard", category: "Students", measurementId: "", lookerReportId: "" },
  { id: "passed-students", name: "Passed Students Dashboard", category: "Students", measurementId: "G-VHZNXTMVES", lookerReportId: "c586cea4-1334-4299-b79b-b3e0dd374c20" },
  { id: "business-intelligence", name: "TME Business Intelligence - Data Driven Decisions", category: "Leadership", measurementId: "G-VHZNXTMVES", lookerReportId: "60fe1ed8-9a66-40e8-b268-c4f6e664ad6a" },
];

export function getDashboard(id: string) {
  return DASHBOARDS.find((d) => d.id === id);
}

export function isConnected(d: DashboardConfig) {
  return d.measurementId.trim() !== "" && d.lookerReportId.trim() !== "";
}
