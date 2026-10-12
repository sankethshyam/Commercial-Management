// Edit this file to update the website's repeatable content blocks.
const capabilities = [
  {
    number: "01",
    title: "Sourcing",
    description: "Identifying suitable suppliers, products, services and commercial options based on the requirement."
  },
  {
    number: "02",
    title: "Procurement",
    description: "Supporting the purchasing process from requirement understanding through commercial execution."
  },
  {
    number: "03",
    title: "Vendor Management",
    description: "Identifying, coordinating and managing supplier relationships, communication, follow-ups and execution."
  },
  {
    number: "04",
    title: "Negotiation",
    description: "Working on pricing, payment terms, MOQ, lead time, commercial conditions and other relevant terms."
  },
  {
    number: "05",
    title: "End-to-End Commercial Management",
    description: "Managing the commercial process across the buyer, supplier and relevant parties from requirement through completion."
  },
  {
    number: "06",
    title: "Deal Execution",
    description: "Coordinating the agreed commercial process and following the transaction through to completion."
  }
];

const process = [
  {
    number: "01",
    title: "Understand",
    description: "Understand the requirement, specifications, quantity, timeline and commercial expectations."
  },
  {
    number: "02",
    title: "Research",
    description: "Study the market and identify relevant supplier and vendor options."
  },
  {
    number: "03",
    title: "Source",
    description: "Approach and obtain suitable options and quotations."
  },
  {
    number: "04",
    title: "Evaluate",
    description: "Compare price, quality, MOQ, lead time, payment terms and other relevant factors."
  },
  {
    number: "05",
    title: "Negotiate",
    description: "Work toward suitable commercial terms."
  },
  {
    number: "06",
    title: "Coordinate",
    description: "Manage communication and coordination between relevant parties."
  },
  {
    number: "07",
    title: "Execute",
    description: "Follow the transaction through execution and completion."
  },
  {
    number: "08",
    title: "Build Relationships",
    description: "Develop reliable supplier and business relationships for future requirements."
  }
];

// Replace the placeholder text below with approved details of real work only.
const caseStudies = [
  {
    label: "Case study / 01",
    title: "Sourcing & vendor coordination",
    status: "Placeholder for a real engagement",
    fields: [
      ["Requirement", "Add a concise description of the commercial requirement."],
      ["Approach", "Add how the requirement was understood and approached."],
      ["Sourcing / Procurement Work", "Add the supplier research, quotation or evaluation work completed."],
      ["Commercial Coordination", "Add the relevant coordination, follow-up or negotiation detail."],
      ["Outcome", "Add a factual, approved outcome—without confidential details."],
    ]
  },
  {
    label: "Case study / 02",
    title: "Future commercial engagement",
    status: "Reserved for a documented requirement",
    fields: [
      ["Requirement", "Add the confirmed requirement."],
      ["Approach", "Add the commercial approach taken."],
      ["Sourcing / Procurement Work", "Add the relevant sourcing and procurement work."],
      ["Commercial Coordination", "Add the commercial coordination involved."],
      ["Outcome", "Add the factual outcome after approval to share."],
    ]
  }
];

const principles = [
  "Understand the requirement first",
  "Research before recommending",
  "Compare commercial options",
  "Negotiate clearly",
  "Maintain supplier relationships",
  "Coordinate carefully",
  "Execute what was agreed",
  "Build for repeat business"
];

window.siteData = { capabilities, process, caseStudies, principles };
