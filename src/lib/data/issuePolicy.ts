import { CheckItem, ExpectedColumn, SelectOption } from "@/lib/types";

export const PARTNER_OPTIONS: SelectOption[] = [
  { label: "Mobilink", value: "mobilink" },
  { label: "Jazz", value: "jazz" },
  { label: "Zong", value: "zong" },
];

export const CHILD_PRODUCT_OPTIONS: SelectOption[] = [
  { label: "Family Health Protection", value: "family-health-protection" },
  { label: "Life Shield Plus", value: "life-shield-plus" },
  { label: "Personal Accident Cover", value: "personal-accident-cover" },
];

export const CHECKS: CheckItem[] = [
  {
    title: "Parse and normalise",
    description:
      "Dates, mobile numbers and amounts are read into one internal form, whatever the partner typed.",
  },
  {
    title: "Validate format",
    description:
      "Blank or malformed name, CNIC, date of birth or mobile number is rejected — those rows cannot become a policy.",
  },
  {
    title: "Deduplicate",
    description:
      "A CNIC repeated inside the file, or already in force, is rejected. The first occurrence is kept.",
  },
  {
    title: "Apply eligibility rules",
    description:
      "Age band 18–65 and the Rs. 1,000,000 cover cap, read live from the rule set.",
  },
  {
    title: "Derive premium",
    description:
      "Rs. 5,000 per member, from the pricing rule set — not typed in here.",
  },
];

export const EXPECTED_COLUMNS: ExpectedColumn[] = [
  {
    index: "01",
    column: "Member Name",
    format: "Text",
    required: true,
    alsoAcceptedAs: ["name", "full name", "member"],
  },
  {
    index: "02",
    column: "CNIC",
    format: "13 digits",
    required: true,
    alsoAcceptedAs: ["cnic no", "cnic number", "nic"],
  },
  {
    index: "03",
    column: "Date of Birth",
    format: "DD-MM-YYYY",
    required: true,
    alsoAcceptedAs: ["dob", "birth date", "birthdate"],
  },
  {
    index: "04",
    column: "Gender",
    format: "M / F",
    required: false,
    alsoAcceptedAs: ["sex"],
  },
  {
    index: "05",
    column: "Mobile",
    format: "03XXXXXXXXX",
    required: true,
    alsoAcceptedAs: ["mobile number", "mobile no", "phone"],
  },
  {
    index: "06",
    column: "Email",
    format: "name@domain",
    required: false,
    alsoAcceptedAs: ["email address", "e-mail", "mail"],
  },
  {
    index: "07",
    column: "Relationship",
    format: "Self / Spouse / Child",
    required: false,
    alsoAcceptedAs: ["relation", "dependant type"],
  },
  {
    index: "08",
    column: "Sum Assured",
    format: "Number",
    required: false,
    alsoAcceptedAs: ["sum insured", "cover", "coverage"],
  },
  {
    index: "09",
    column: "Loan Account No",
    format: "Text",
    required: false,
    alsoAcceptedAs: ["loan account", "loan a/c", "account no"],
  },
  {
    index: "10",
    column: "Enrollment Date",
    format: "DD-MM-YYYY",
    required: false,
    alsoAcceptedAs: ["enrolment date", "join date", "start date"],
  },
];
