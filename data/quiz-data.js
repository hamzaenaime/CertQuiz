/**
 * Salesforce Data Architect Quiz Questions
 * 
 * Format for each question:
 * {
 *   question: "The question text",
 *   answers: {
 *     a: "Option A",
 *     b: "Option B",
 *     ...
 *   },
 *   correctAnswer: "a" or ["a", "b"] for multiple correct answers,
 *   explanation: "Explanation of the correct answer(s)",
 *   multiSelect: true/false - Whether question allows multiple selections
 * }
 */

const quizData = [];
// const quizData = [
//     {
//         question: "UC is planning a massive SF implementation with large volumes of data. As part of the org's implementation, several roles, territories, groups, and sharing rules have been configured. The data architect has been tasked with loading all of the required data, including user data, in a timely manner. What should a data architect do to minimize data load times due to system calculations?",
//         answers: {
//             a: "Enable defer sharing calculations, and suspend sharing rule calculations",
//             b: "Load the data through data loader, and turn on parallel processing.",
//             c: "Leverage the Bulk API and concurrent processing with multiple batches",
//             d: "Enable granular locking to avoid 'UNABLE_TO_LOCK_ROW' error."
//         },
//         correctAnswer: "a",
//         explanation: "By deferring sharing rule recalculations during large data loads, unnecessary system calculations are avoided, thus significantly improving load times.",
//         multiSelect: false
//     },
//     {
//         question: "UC has millions of case records with case history and SLA data. UC's compliance team would like historical cases to be accessible for 10 years for audit purposes. What solution should a data architect recommend?",
//         answers: {
//             a: "Archive Case data using Salesforce Archiving process",
//             b: "Purchase more data storage to support the case object",
//             c: "Use a custom object to store archived case data",
//             d: "Use a custom Big object to store archived case data"
//         },
//         correctAnswer: "d",
//         explanation: "Custom Big objects are designed to store massive amounts of data without impacting performance or storage limits, making them ideal for long‐term archival for audit purposes.",
//         multiSelect: false
//     },
//     {
//         question: "A large telecommunication provider provides internet services to residences and businesses. A customer purchasing services for their home is created as an Account, individuals at the same address as Contacts, and businesses as Accounts. Some customers have both services. What should a data architect recommend for achieving a single view of these customers without creating duplicate records?",
//         answers: {
//             a: "Customers are created as Contacts and related to Business and Residential Accounts using the Account Contact Relationships.",
//             b: "Customers are created as Person Accounts and related to Business and Residential Accounts using the Account Contact relationship.",
//             c: "Customers are created as individual objects and related to Accounts for Business and Residence.",
//             d: "Customers are created as Accounts for Residence and use Parent Account to relate Business Account."
//         },
//         correctAnswer: "a",
//         explanation: "Utilizing Account Contact Relationships lets you link a Contact to multiple Accounts, providing a single view without duplicating customer records.",
//         multiSelect: false
//     },
//     {
//         question: "UC has over 10 million accounts with an average of 20 opportunities per account. A Sales Executive needs a daily report for all opportunities in a specific stage. Which two key considerations should be made to ensure reporting performance is not degraded due to large data volumes?",
//         answers: {
//             a: "Number of queries running at a time.",
//             b: "Number of joins used in report query.",
//             c: "Number of records returned by report query.",
//             d: "Number of characters in report query."
//         },
//         correctAnswer: ["b", "c"],
//         explanation: "Fewer joins reduce query complexity and fewer records returned result in lower processing overhead, both crucial for performance with large data volumes.",
//         multiSelect: true
//     },
//     {
//         question: "A customer is facing locking issues when importing large volumes of order records that are children in a master-detail relationship with the Account object. What is the recommended way to avoid locking issues during import?",
//         answers: {
//             a: "Import Account records first followed by order records after sorting by OrderID.",
//             b: "Import Account records first followed by order records after sorting orders by AccountID.",
//             c: "Change the relationship to Lookup and update it to master-detail after import.",
//             d: "Import Order and Account records separately and populate AccountID in orders using batch Apex."
//         },
//         correctAnswer: "b",
//         explanation: "Sorting child records by AccountID groups them by their parent, reducing lock contention during the update process.",
//         multiSelect: false
//     },
//     {
//         question: "To address different compliance requirements (e.g., GDPR, PII, HIPAA), a SF customer decided to categorize each data element with data owner, security level, and compliance types. What should a data architect recommend to address this requirement?",
//         answers: {
//             a: "Use the Metadata API to extract field attribute information and build reports from the extract.",
//             b: "Use field metadata attributes for compliance categorization, data owner, and data sensitivity level.",
//             c: "Create a custom object and fields to capture necessary compliance information and build custom reports.",
//             d: "Build reports for field information, then export the information to classify and report for audits."
//         },
//         correctAnswer: "b",
//         explanation: "Field metadata attributes are built-in features that allow consistent classification of data elements without extra development effort.",
//         multiSelect: false
//     },
//     {
//         question: "UC has one Salesforce org (Org A) and recently acquired a secondary company with its own Salesforce org (Org B). UC wants to bidirectionally share Opportunities between the orgs in near-real time. Which three options should a data architect recommend?",
//         answers: {
//             a: "Leverage Heroku Connect and Heroku Postgres to bidirectionally sync Opportunities.",
//             b: "Install a 3rd party AppExchange tool to handle data sharing.",
//             c: "Develop an Apex class that pushes Opportunity data between orgs daily via a scheduled Apex class.",
//             d: "Leverage middleware tools to bidirectionally send Opportunity data across orgs.",
//             e: "Use Salesforce Connect with the cross-org adapter to visualize Opportunities as external objects."
//         },
//         correctAnswer: ["a", "d", "e"],
//         explanation: "Heroku Connect, middleware integrations, and Salesforce Connect (with its cross-org adapter) can facilitate near-real time bidirectional synchronization, while other solutions either do not meet timeliness or add excessive overhead.",
//         multiSelect: true
//     },
//     {
//         question: "A health care provider wishes to use Salesforce to track patient care. Mapping the actors: Payment Providers (organizations that pay for care), Doctors (who provide care and need access to patient information), and Patients (who need care) – what is the optimal mapping to Salesforce objects?",
//         answers: {
//             a: "Patients as Contacts, Payment Providers as Accounts, and Doctors as Accounts.",
//             b: "Patients as Person Accounts, Payment Providers as Accounts, and Doctors as Contacts.",
//             c: "Patients as Person Accounts, Payment Providers as Accounts, and Doctors as Person Accounts.",
//             d: "Patients as Accounts, Payment Providers as Accounts, and Doctors as Person Accounts."
//         },
//         correctAnswer: "c",
//         explanation: "Using Person Accounts for both Patients and Doctors captures individual details combined with account functionality, while Payment Providers remain as organizational Accounts.",
//         multiSelect: false
//     },
//     {
//         question: "As part of addressing GDPR requirements, UC plans to implement a data classification policy for all its internal systems storing customer information, including Salesforce. How can UC easily classify consumer information maintained in Salesforce under both standard and custom objects?",
//         answers: {
//             a: "Use AppExchange products to classify fields based on policy.",
//             b: "Use data classification metadata fields available in field definitions.",
//             c: "Create a custom picklist field to capture classification of customer information.",
//             d: "Build reports for customer information and validate the classifications manually."
//         },
//         correctAnswer: "b",
//         explanation: "Data classification metadata fields are standard in Salesforce, allowing administrators to consistently classify data (such as sensitive or confidential) across all objects.",
//         multiSelect: false
//     },
//     {
//         question: "Which integration approach should be recommended to address scenarios involving legacy CRM, Salesforce, and SAP?",
//         answers: {
//             a: "Integrate legacy CRM to Salesforce and keep data in sync until new functionality is in place.",
//             b: "Do not integrate legacy CRM to Salesforce, but integrate Salesforce to SAP.",
//             c: "Integrate SAP with Salesforce, and integrate SAP to legacy CRM but not legacy CRM to Salesforce.",
//             d: "Suggest an MDM solution and link MDM to Salesforce and SAP."
//         },
//         correctAnswer: ["c", "d"],
//         explanation: "Both approaches use SAP as the central source to ensure data consistency and avoid direct integration between legacy CRM and Salesforce, with MDM providing additional data quality guarantees.",
//         multiSelect: true
//     },
//     {
//         question: "Universal Containers has two systems. Salesforce and an on-premise ERP system. An architect has been tasked with copying Opportunity records to the ERP once they reach a Closed/Won Stage. The Opportunity record in the ERP system will be read-only for all fields copied in from Salesforce. What is the optimal real-time approach that achieves this solution?",
//         answers: {
//             a: "Implement a Master Data Management system to determine system of record.",
//             b: "Implement a workflow rule that sends Opportunity data through Outbound Messaging.",
//             c: "Have the ERP poll Salesforce nightly and bring in the desired Opportunities.",
//             d: "Implement an hourly integration to send Salesforce Opportunities to the ERP system."
//         },
//         correctAnswer: "b",
//         explanation: "A workflow rule that sends an outbound message provides real-time data transmission without requiring code. This method triggers when an Opportunity reaches Closed/Won, sending the data via SOAP API to the ERP so that records can be created as read-only. The other options do not provide real-time results or require extra systems.",
//         multiSelect: false
//     },

//     {
//         question: "Universal Containers (UC) is facing data quality issues where Sales Reps are creating duplicate customer accounts, contacts, and leads. UC wants to fix this issue immediately by prompting users about a record that possibly exists in Salesforce and also generate a report regarding duplicates. What is the recommended approach?",
//         answers: {
//             a: "Create an after-insert and update trigger on account, contact, and lead, and send an error if a duplicate is found using custom matching criteria.",
//             b: "Create a duplicate rule for account, lead, and contact, use standard matching rules, and set the action to report and alert for both creates and edits.",
//             c: "Create a duplicate rule for account, lead, and contact, use standard matching rules, and set the action to block for both creates and edits.",
//             d: "Create a before-insert and update trigger on account, contact, and lead and send an error if a duplicate is found using custom matching criteria."
//         },
//         correctAnswer: "b",
//         explanation: "Using Salesforce’s duplicate rules with standard matching criteria and configuring them to report and alert enables immediate identification of potential duplicates while still allowing data entry. This approach also generates a report for further analysis.",
//         multiSelect: false
//     },

//     {
//         question: "Which two best practices should be followed when using SOSL for searching?",
//         answers: {
//             a: "Use searches against single objects for greater speed and accuracy.",
//             b: "Keep searches specific and avoid wildcards where possible.",
//             c: "Use SOSL option to ignore custom indexes as search fields are pre-indexed.",
//             d: "Use Find in 'ALL FIELDS' for faster searches."
//         },
//         correctAnswer: ["b", "d"],
//         explanation: "Keeping searches specific and avoiding wildcards minimizes unnecessary data retrieval, and using 'ALL FIELDS' leverages pre-defined indexes to speed up searches. Together, these practices optimize performance and relevance.",
//         multiSelect: true
//     },

//     {
//         question: "Universal Container (US) is replacing a home-grown CRM solution with Salesforce. UC has decided to migrate only operational (open and active) records into Salesforce while keeping historical records in the legacy system, but available on-demand. Which solution should a data architect recommend to meet this requirement?",
//         answers: {
//             a: "Leverage real-time integration to pull records into Salesforce.",
//             b: "Bring all data into Salesforce and delete it after a year.",
//             c: "Leverage a mashup to display historical records in Salesforce.",
//             d: "Build a custom solution to query the legacy system and display records."
//         },
//         correctAnswer: "c",
//         explanation: "Using a mashup allows Salesforce to display historical (read-only) records from the legacy system without importing all the data, thus meeting the on-demand requirement without impacting storage.",
//         multiSelect: false
//     },
//     {
//         question: "A manager at Cloud Kicks is importing Leads into Salesforce and needs to avoid creating duplicate records. Which two approaches should be taken to achieve this?",
//         answers: {
//             a: "Acquire an AppExchange lead de-duplication application.",
//             b: "Implement Salesforce Matching and Duplicate Rules.",
//             c: "Run the Salesforce Lead Mass de-duplication tool.",
//             d: "Create a Workflow Rule to check for duplicate records."
//         },
//         correctAnswer: ["a", "b"],
//         explanation: "Using an AppExchange de-duplication tool in combination with Salesforce’s built-in matching and duplicate rules provides a robust solution to prevent duplicates during lead import.",
//         multiSelect: true
//     },
//     {
//         question: "Universal Containers (UC) loads bulk leads and campaigns from third-party aggregators weekly and monthly. Leads are shared via sharing rules and added as Campaign members through Apex triggers. Agents work on leads for 6 months but records must be kept for at least 1 year (and compliance requires 3 years). What statement is true regarding a data archiving strategy for UC?",
//         answers: {
//             a: "UC can store long-term lead records in custom storage objects to avoid counting against storage limits.",
//             b: "UC can leverage the Salesforce Data Backup and Recovery feature for data archival needs.",
//             c: "UC can leverage recycle bin capability, which guarantees record storage for 15 days after deletion.",
//             d: "UC can leverage a 'tier'-based approach to classify the record storage need."
//         },
//         correctAnswer: "d",
//         explanation: "A tier-based strategy segments data by usage and retention policies, allowing UC to manage storage efficiently while meeting compliance and operational requirements.",
//         multiSelect: false
//     },
//     {
//         question: "Universal Containers (UC) needs to move millions of records from an external ERP system into Salesforce. What should a data architect recommend be done when using the Bulk API in serial mode instead of parallel mode?",
//         answers: {
//             a: "Place 20 batches on the queue for upsert jobs.",
//             b: "Insert 1 million orders distributed across a variety of accounts with potential lock exceptions.",
//             c: "Leverage a controlled feed load with 10 batches per job.",
//             d: "Insert 1 million orders distributed across a variety of accounts with lock exceptions eliminated and managed."
//         },
//         correctAnswer: "b",
//         explanation: "Using serial mode helps mitigate lock contention issues when inserting large volumes of data across diverse accounts, as it reduces the likelihood of simultaneous record updates causing lock exceptions.",
//         multiSelect: false
//     },
//     {
//         question: "Northern Trail Outfitters (NTO) wants to start a loyalty program that will generate 100 million rows of data monthly. They plan to use Salesforce's Einstein Analytics for decision making. What should the Data Architect do to store, collect, and use the reward program data?",
//         answers: {
//             a: "Create a custom big object in Salesforce to capture the Reward Program data for consumption by Einstein.",
//             b: "Have Einstein connect to the point of sales system to capture the Reward Program data.",
//             c: "Create a big object in Einstein Analytics to capture the Loyalty Program data.",
//             d: "Create a custom object in Salesforce to capture the Reward Program data."
//         },
//         correctAnswer: "a",
//         explanation: "Big objects are designed for massive data volumes and are optimal for storing reward program data that is primarily used for analytical purposes in Einstein Analytics.",
//         multiSelect: false
//     },
//     {
//         question: "Cloud Kicks is launching a Partner Community allowing users to register shipment requests that include a header and a list of up to 5 items. Initially, 6,000 customers will use the portal, scaling to 24,000 worldwide, with an average of 12 shipment requests per week per customer, and data available for up to three years via Salesforce reports. What is the recommended solution?",
//         answers: {
//             a: "Create an external custom object for shipment requests and a child external object for shipment items stored off-platform in Heroku’s Postgres.",
//             b: "Create an external custom object for shipment requests with five lookup fields for shipment items stored off-platform in Heroku’s Postgres.",
//             c: "Create a custom object for shipment requests and a child custom object for shipment items; implement an archiving process to move data off-platform after three years.",
//             d: "Create a custom object for shipment requests with five lookup fields for shipment items; implement an archiving process to move data off-platform after three years."
//         },
//         correctAnswer: "c",
//         explanation: "Storing shipment requests and items in custom objects provides full reporting capabilities, and the archiving process ensures long-term data management without exceeding storage limits.",
//         multiSelect: false
//     },
//     {
//         question: "Which relationship type should be used to ensure that a Shipment record is always associated with each of its three parent records and prevents the deletion of those parents?",
//         answers: {
//             a: "Associate the Shipment with each parent record using a VLOOKUP formula field.",
//             b: "Create a required Lookup relationship to each of the three parent records.",
//             c: "Create a Master-Detail relationship to each of the three parent records.",
//             d: "Create two Master-Detail and one Lookup relationship to the parent records."
//         },
//         correctAnswer: "b",
//         explanation: "A required Lookup relationship forces the Shipment record to reference each parent, ensuring referential integrity without the sharing constraints imposed by Master-Detail relationships.",
//         multiSelect: false
//     },
//     {
//         question: "NTO has multiple systems with disparate customer records, and in Salesforce, customers are represented by the Contact object. Using an MDM solution that maintains a master key mapped to external system record IDs and provides deduplication, how should the master key be stored within Salesforce?",
//         answers: {
//             a: "Store the master key in Heroku Postgres and use Heroku Connect for synchronization.",
//             b: "Create a custom object to store the master key with a lookup field to Contact.",
//             c: "Create an external object to store the master key with a lookup field to Contact.",
//             d: "Store the master key on the Contact object as an external ID for referential imports."
//         },
//         correctAnswer: "d",
//         explanation: "Storing the master key as an external ID on the Contact object allows for easy matching during data integrations and supports deduplication, making it the optimal solution.",
//         multiSelect: false
//     },
//     {
//         question: "Universal Containers (UC) has an open sharing model for its Salesforce users to allow all its internal users to edit all contacts, regardless of who owns the contact. However, UC management wants to allow only the owner of a contact record to delete that contact. If a user does not own the contact, then the user should not be allowed to delete the record. How should the architect approach the project so that the requirements are met?",
//         answers: {
//             a: "Create a \"before delete\" trigger to check if the current user is not the owner.",
//             b: "Set the Sharing settings as Public Read Only for the Contact object.",
//             c: "Set the profile of the users to remove delete permission from the Contact object.",
//             d: "Create a validation rule on the Contact object to check if the current user is not the owner."
//         },
//         correctAnswer: "a",
//         explanation: "A before delete trigger can check if the current user (via UserInfo.getUserId()) is the owner of the contact. If not, the trigger can add an error to prevent deletion. The other options do not meet the requirement without broadly restricting delete capabilities.",
//         multiSelect: false
//     },
//     {
//         question: "Universal Containers (UC) has a complex system landscape and is implementing a data governance program for the first time. Which two first steps would be appropriate for UC to initiate an assessment of data architecture?",
//         answers: {
//             a: "Engage with IT program managers to assess current velocity of projects in the pipeline.",
//             b: "Engage with database administrators to assess current database performance metrics.",
//             c: "Engage with executive sponsorship to assess enterprise data strategy and goals.",
//             d: "Engage with business units and IT to assess current operational systems and data models."
//         },
//         correctAnswer: ["c", "d"],
//         explanation: "Initiating an assessment requires understanding both high-level enterprise goals through executive sponsorship and the current state of operational systems by engaging with business units and IT. The other options focus on project velocity and technical performance which are less relevant for a data architecture assessment.",
//         multiSelect: true
//     },
//     {
//         question: "Universal Container (UC) stores 10 million rows of inventory data in a cloud database. As part of creating a connected experience in Salesforce, UC would like to display this inventory data in Sales Cloud without importing it. Which three considerations should the data architect make when evaluating the need for Salesforce Connect?",
//         answers: {
//             a: "You want real-time access to the latest data from other systems.",
//             b: "You have a large amount of data and would like to copy subsets of it into Salesforce.",
//             c: "You need to expose data via a virtual private connection.",
//             d: "You have a large amount of data that you don't want to copy into your Salesforce org.",
//             e: "You need to access small amounts of external data at any one time."
//         },
//         correctAnswer: ["a", "d", "e"],
//         explanation: "Salesforce Connect is ideal when real‑time access is required, when you have large volumes of external data that you prefer not to store in Salesforce, and when only small subsets of that data are needed at any one time. Option b and c describe different use cases that do not align with these requirements.",
//         multiSelect: true
//     },
//     {
//         question: "Universal Containers (UC) is expecting to have nearly 5 million shipment records in its Salesforce org. Each shipment record has up to 10 child shipment item records, and there are 25 sharing rules based on public groups. Given the frequent reassignments of Sales Reps between business areas, what feature would ensure that performance remains adequate when moving Sales Reps between regions?",
//         answers: {
//             a: "Implement data archiving for old Shipment records.",
//             b: "Contact Salesforce to create Skinny tables on Shipment.",
//             c: "Configure Shipment OWD to Public Read/Write.",
//             d: "Contact Salesforce to enable Defer Sharing Rules."
//         },
//         correctAnswer: "d",
//         explanation: "Enabling Defer Sharing Rules helps by deferring the recalculation of sharing when users are moved between groups or roles, thus maintaining performance while preserving the private sharing model.",
//         multiSelect: false
//     },
//     {
//         question: "Universal Containers is planning out their archiving and purging plans for custom objects Topic__c and Comment__c. Which three questions should be considered when designing an appropriate archiving strategy?",
//         answers: {
//             a: "How many fields are defined on the custom objects that need to be archived?",
//             b: "Which profiles and users currently have access to these custom object records?",
//             c: "If reporting is necessary, can the information be aggregated into fewer, summary records?",
//             d: "Will the data being archived need to be reported on or accessed in any way in the future?",
//             e: "Are there any regulatory restrictions that will influence the archiving and purging plans?"
//         },
//         correctAnswer: ["c", "d", "e"],
//         explanation: "Key considerations include whether the archived data will be used for reporting or needs to be accessed, and whether any legal or regulatory requirements dictate data retention. The number of fields or current user access profiles are less critical in determining the archiving strategy.",
//         multiSelect: true
//     },
//     {
//         question: "A casino is implementing Salesforce and planning to build a customer 360 view by integrating activities from multiple systems (point of sales, customer service, mobile app, and marketing). Customer service agents need to view all activities in real time. What strategy should the data architect implement?",
//         answers: {
//             a: "Explore external data sources in Salesforce to build a 360 view of the customer.",
//             b: "Use a customer data mart to view the 360 view of the customer.",
//             c: "Migrate customer activities from all 4 systems into Salesforce.",
//             d: "Periodically upload summary information into Salesforce to build a 360 view."
//         },
//         correctAnswer: "a",
//         explanation: "Using external data sources (via Salesforce Connect or similar integration) allows real‑time access to customer information across systems without the need to import massive amounts of data into Salesforce.",
//         multiSelect: false
//     },
//     {
//         question: "Universal Containers needs to store more than 100 million records and create a custom big object to support this requirement. Which two tools should a data architect use to build the custom object?",
//         answers: {
//             a: "Use DX to create a big object.",
//             b: "Use Metadata API to create a big object.",
//             c: "Go to Big Object in Setup and select New to create the big object.",
//             d: "Go to Object Manager in Setup and select New to create a big object."
//         },
//         correctAnswer: ["b", "c"],
//         explanation: "Big objects are created either programmatically using the Metadata API or declaratively via the Big Object setup page. Developer Experience (DX) and Object Manager do not support creating big objects directly.",
//         multiSelect: true
//     },
//     {
//         question: "Universal Containers has 30 million case records and each Case record has 80 fields. Agents report difficulties with performance when running reports. Which solution should a data architect recommend to improve reporting performance?",
//         answers: {
//             a: "Create a custom object to store aggregate data and run reports.",
//             b: "Contact Salesforce support to enable Skinny Tables for Cases.",
//             c: "Move data off the platform and run reporting externally, then give access to the reports.",
//             d: "Build reports using custom Lightning components."
//         },
//         correctAnswer: "c",
//         explanation: "Moving data off the Salesforce platform and running reports on an external system (such as a data warehouse) can bypass platform storage and processing limitations, thus improving performance.",
//         multiSelect: false
//     },
//     {
//         question: "To determine which fields to send to an external Order Management System (OMS) in an HTTP callout, which option should be used?",
//         answers: {
//             a: "A set<sobjectFieldset> to determine which fields to send in an HTTP callout.",
//             b: "An Outbound Message to determine which fields to send to the OMS.",
//             c: "A Field Set that determines which fields to send in an HTTP callout.",
//             d: "Enable the field-level security permissions for the fields to send."
//         },
//         correctAnswer: "b",
//         explanation: "An Outbound Message is a native Salesforce feature that can be configured to send specific fields to an external system without writing code, making it the preferred solution.",
//         multiSelect: false
//     },
//     {
//         question: "Universal Containers has a large volume of Contact data. There are 100,000 existing Contact records and 200,000 new contacts will be loaded. The Contact object has an external ID field that is unique and must be populated for all records. What should the architect recommend to reduce data load processing time?",
//         answers: {
//             a: "Load Contact records together using the Streaming API via the Upsert operation.",
//             b: "Delete all existing records, and then load all records together via the Insert operation.",
//             c: "Load all records via the Upsert operation to determine new vs. existing records.",
//             d: "Load new records via the Insert operation and existing records via the Update operation."
//         },
//         correctAnswer: "d",
//         explanation: "Using separate operations—Insert for new records and Update for existing records via the external ID—minimizes processing time and avoids upsert conflicts.",
//         multiSelect: false
//     },
//     {
//         question: "Northern Trail Outfitters needs to implement an archive solution for Salesforce data in order to remove outdated information and improve performance. Which solution should be used to meet these requirements?",
//         answers: {
//             a: "Identify a location to store archived data and use scheduled batch jobs to migrate and purge the aged data on a nightly basis.",
//             b: "Identify a location to store archived data, and move data to the location using a time-based workflow.",
//             c: "Use a formula field that shows true when a record reaches a defined age and use that field to run a report and export the data into SharePoint.",
//             d: "Create a full copy sandbox and use it as a source for retaining archived data."
//         },
//         correctAnswer: "a",
//         explanation: "Scheduled batch jobs that migrate and purge aged data nightly provide an automated archiving solution that both removes outdated records from the active org and improves performance.",
//         multiSelect: false
//     },
//     {
//         question: "Universal Container is Implementing Salesforce and needs to migrate data from two legacy systems. UC would like to clean and duplicate data before migrating to Salesforce. Which solution should a data architect recommend for a clean migration?",
//         answers: {
//             a: "Define external IDs for an object, migrate second database to first database, and load into Salesforce.",
//             b: "Define duplicate rules in Salesforce, and load data into Salesforce from both databases.",
//             c: "Set up a staging database, and define external IDs to merge, clean duplicate data, and load into Salesforce.",
//             d: "Define external IDs for an object, insert data from one database, and use upsert for a second database."
//         },
//         correctAnswer: "c",
//         explanation: "Setting up a staging database allows consolidation and deduplication of data from two legacy systems before importing it into Salesforce. External IDs are then used as unique identifiers. Options A, B, and D do not adequately clean and merge duplicate data prior to migration.",
//         multiSelect: false
//     },
//     {
//         question: "All accounts and opportunities are created in Salesforce. Salesforce is integrated with three systems:\n• An ERP system feeds order data into Salesforce and updates both Account and Opportunity records.\n• An accounting system feeds invoice data into Salesforce and updates both Account and Opportunity records.\n• A commission system feeds commission data into Salesforce and updates both Account and Opportunity records.\nHow should the architect determine which of these systems is the system of record?",
//         answers: {
//             a: "Account and opportunity data originates in Salesforce, and therefore Salesforce is the system of record.",
//             b: "Whatever system updates the attribute or object should be the system of record for that field or object.",
//             c: "Whatever integration data flow runs last will, by default, determine which system is the system of record.",
//             d: "Data flows should be reviewed with the business users to determine the system of record per object or field."
//         },
//         correctAnswer: "d",
//         explanation: "The system of record should be determined by reviewing data flows with the business users to identify the authoritative source for each field or object. This ensures the correct system is used as the definitive source of truth.",
//         multiSelect: false
//     },
//     {
//         question: "Universal Containers (UC) maintains a collection of several million Account records representing businesses in the United States. Recently, it has been noticed that many addresses are inaccurate or the businesses don't exist. Which two scalable strategies should UC consider to improve the quality of their Account addresses?",
//         answers: {
//             a: "Contact each business on the list and ask them to review and update their address information.",
//             b: "Build a team of employees to validate Accounts by searching the web and making phone calls.",
//             c: "Integrate with a third-party database or service for address validation and enrichment.",
//             d: "Leverage Data.com Clean to clean up Account address fields with the D&B database."
//         },
//         correctAnswer: ["c", "d"],
//         explanation: "Integrating with a third-party service and using Data.com Clean are scalable strategies that provide automated, reliable address validation and enrichment. Manual contact or validation teams are not scalable for millions of records.",
//         multiSelect: true
//     },
//     {
//         question: "Universal Containers (UC) is implementing a formal, cross-business-unit data governance program. As part of this program, UC will form a team to make decisions on enterprise-wide data governance. Which two roles are appropriate as members of this team?",
//         answers: {
//             a: "Analytics/BI Owners",
//             b: "Data Domain Stewards",
//             c: "Salesforce Administrators",
//             d: "Operational Data Users"
//         },
//         correctAnswer: ["a", "b"],
//         explanation: "Analytics/BI Owners and Data Domain Stewards provide strategic oversight for data usage and quality across the enterprise, making them ideal for a data governance team. Salesforce Administrators and operational users are more tactical in nature.",
//         multiSelect: true
//     },
//     {
//         question: "Universal Containers (UC) has users complaining that reports are timing out or taking too long to run. Which two actions should the data architect recommend to improve the reporting experience?",
//         answers: {
//             a: "Index key fields used in report criteria.",
//             b: "Enable Divisions for large data objects.",
//             c: "Create one skinny table per report.",
//             d: "Share each report with fewer users."
//         },
//         correctAnswer: ["a", "c"],
//         explanation: "Indexing key fields speeds up query execution, and skinny tables consolidate frequently used fields to reduce joins and improve performance. Enabling Divisions or reducing user access does not significantly improve report performance.",
//         multiSelect: true
//     },
//     {
//         question: "Northern Trail Outfitters is planning to build a consent form to record customer authorization for marketing purposes. What should a data architect recommend to fulfill this requirement?",
//         answers: {
//             a: "Utilize the Authorization Form Consent object to capture the consent.",
//             b: "Use an AppExchange solution to address the requirement.",
//             c: "Create a custom object to maintain the authorization.",
//             d: "Use custom fields to capture the authorization details."
//         },
//         correctAnswer: "a",
//         explanation: "The Authorization Form Consent object is a standard Salesforce object designed for capturing and managing customer consent, making it the optimal solution.",
//         multiSelect: false
//     },
//     {
//         question: "Northern Trail Outfitters has the following requirements for a data export process: the file format must be CSV, the process needs to be scheduled to run once per week, and it must be configurable through the Salesforce UI. Which tool should a data architect leverage to accomplish these requirements?",
//         answers: {
//             a: "Bulk API",
//             b: "Data Export Wizard",
//             c: "Third-party ETL tool",
//             d: "Data Loader"
//         },
//         correctAnswer: "b",
//         explanation: "The Data Export Wizard is built into Salesforce, supports CSV format, scheduling, and configuration via the UI, making it the simplest and most effective tool for scheduled data exports.",
//         multiSelect: false
//     },
//     {
//         question: "Which techniques can be used to maintain data synchronization and ensure a single source of truth between Salesforce and external systems?",
//         answers: {
//             a: "Integrate Salesforce with the ERP environment.",
//             b: "Utilize Workbench to update files within systems.",
//             c: "Utilize an MDM strategy to outline a single source of truth.",
//             d: "Build synchronization reports and dashboards."
//         },
//         correctAnswer: ["a", "c"],
//         explanation: "Integrating Salesforce with the ERP system ensures data flows between systems, while an MDM strategy clearly defines the single source of truth for data management. The other options do not directly establish synchronization or authoritative sources.",
//         multiSelect: true
//     },
//     {
//         question: "Universal Containers (UC) has lead assignment rules that assign leads to owners. Leads that are not routed properly are assigned to a dummy user. Sales reps are complaining about high load times and access issues with leads assigned to this dummy user. What should a data architect recommend to resolve these performance issues?",
//         answers: {
//             a: "Assign the dummy user to the last role in the role hierarchy.",
//             b: "Create multiple dummy users and assign leads to them.",
//             c: "Assign the dummy user to the highest role in the role hierarchy.",
//             d: "Periodically delete leads to reduce the number of leads."
//         },
//         correctAnswer: "b",
//         explanation: "Creating multiple dummy users to share the lead load distributes the records more evenly, reducing data skew and performance issues. Simply changing roles or deleting records does not address the underlying distribution problem.",
//         multiSelect: false
//     },
//     {
//         question: "A customer in a highly regulated industry is planning to implement Salesforce. The customer data includes PII, geographic IP restrictions, and sensitive financial records that should only be accessible by assigned Sales associates. Users must not be able to export data, and enterprise security mandates access from specific geographies with detailed activity monitoring. Which three Salesforce Shield capabilities should a data architect recommend?",
//         answers: {
//             a: "Event monitoring to monitor all user activities.",
//             b: "Restrict access to Salesforce from users outside specific geographies.",
//             c: "Prevent Sales users from accessing customer PII information.",
//             d: "Transaction security policies to prevent export of Salesforce data.",
//             e: "Encrypt sensitive customer information maintained in Salesforce."
//         },
//         correctAnswer: ["b", "d", "e"],
//         explanation: "Restricting access by geography, applying transaction security policies to prevent data export, and encrypting sensitive data address the security requirements. Event monitoring is useful for auditing but does not restrict access, and preventing sales access to PII is too broad.",
//         multiSelect: true
//     },
//     {
//         question: "Universal Containers (UC) has accumulated data over the years and is exceeding its storage allocations. To reduce the number of records, which three recommendations should a data architect make?",
//         answers: {
//             a: "Use hard delete in Bulk API to permanently delete records from Salesforce.",
//             b: "Use hard delete in Batch Apex to permanently delete records from Salesforce.",
//             c: "Identify records in objects that have not been modified or used in the last 3 years.",
//             d: "Use REST API to permanently delete records from Salesforce.",
//             e: "Archive the records in an enterprise data warehouse (EDW) before deleting them from Salesforce."
//         },
//         correctAnswer: ["a", "c", "e"],
//         explanation: "Using the Bulk API for hard deletes, identifying stale records, and archiving data to an EDW are effective strategies to reduce record counts without impacting active data. Batch Apex or REST API are less optimal for this large-scale deletion process.",
//         multiSelect: true
//     },
//     {
//         question: "What makes Skinny Tables fast in Salesforce? Choose three answers.",
//         answers: {
//             a: "They do not include soft-deleted records.",
//             b: "They avoid resource-intensive joins.",
//             c: "Their tables are kept in sync with their source tables when the source tables are modified.",
//             d: "They can contain fields from other objects.",
//             e: "They support up to a maximum of 100 columns."
//         },
//         correctAnswer: ["a", "b", "c"],
//         explanation: "Skinny Tables improve performance by excluding soft-deleted records, avoiding complex joins by storing frequently used fields together, and staying synchronized with the source data. Options related to cross-object fields or column limits are not the primary factors.",
//         multiSelect: true
//     },
//     {
//         question: "Universal Containers (UC) has a data model where the Project object (with a private sharing model) includes roll-up summary fields to calculate the number of resources, total hours, and work items for a project. Given that a large amount of time entry records will be loaded regularly from an external system into Salesforce, what should the architect consider?",
//         answers: {
//             a: "Load all data using external IDs to link to parent records.",
//             b: "Use workflow to calculate summary values instead of Roll-Up summary fields.",
//             c: "Use triggers to calculate summary values instead of Roll-Up summary fields.",
//             d: "Load all data after deferring sharing calculations."
//         },
//         correctAnswer: "d",
//         explanation: "Deferring sharing calculations during a large data load avoids locking issues and performance degradation that can occur when roll-up summary fields recalculate synchronously. The other methods do not mitigate these performance concerns as effectively.",
//         multiSelect: false
//     },
//     {
//         question: "A large Automobile company has implemented SF for its Sales Associates. Leads flow from its website to SF using a batch integration. The batch job connects the leads to Accounts in SF, and customers visiting their retail stores are also created as Accounts. The company has noticed a large number of duplicate accounts in SF. On analysis, it was found that certain customers could interact with its website and also visit the store. The Sales associates use Global Search to search for customers in Salesforce before creating them. Which scalable option should a data architect choose to implement to avoid duplicates?",
//         answers: {
//             a: "Create duplicate rules in SF to validate duplicates during the account creation process",
//             b: "Implement a MDM solution to validate the customer information before creating Accounts in SF.",
//             c: "Build custom search based on fields on Accounts which can be matched with customer when they visit the store",
//             d: "Customize Account creation process to search if customer exists before creating an Account."
//         },
//         correctAnswer: "a",
//         explanation: "Implementing duplicate rules in Salesforce validates potential duplicates at creation time, helping to maintain data quality without additional infrastructure cost.",
//         multiSelect: false
//     },
//     {
//         question: "Universal Containers (UC) is migrating data from a legacy system to Salesforce. During data analysis, it was discovered that the data types of fields being migrated do not match Salesforce data types. Which solution should a data architect use to ensure successful data migrations?",
//         answers: {
//             a: "Migrate legacy data to a staging database for mapping then leverage an ETL tool to transform the data and load into Salesforce.",
//             b: "Export legacy data into the staging database and leverage stored procedures to transform data types before loading into Salesforce.",
//             c: "Migrate the legacy data leveraging an ETL tool to transform data types and load data into Salesforce.",
//             d: "Export legacy data into CSV files and leverage Data Loader to load data into Salesforce."
//         },
//         correctAnswer: "c",
//         explanation: "Using an ETL tool to transform data types during migration ensures that the data is cleansed and mapped appropriately before being loaded into Salesforce.",
//         multiSelect: false
//     },
//     {
//         question: "Northern Trail Outfitters (NTO) uses Sales Cloud and Service Cloud to manage sales and support processes. Some team members are complaining about seeing new fields on their pages and being unsure which values need to be input. Which governance measure should a data architect recommend to solve this issue?",
//         answers: {
//             a: "Add description fields to explain why the field is used, and mark the field as required.",
//             b: "Create and manage a data dictionary and set up a governance process for changes made to common objects.",
//             c: "Create reports to identify which users are leaving blanks, and use external data sources to augment the missing data.",
//             d: "Create validation rules with error messages to explain why the field is used."
//         },
//         correctAnswer: "b",
//         explanation: "Creating and managing a data dictionary along with establishing a governance process helps standardize changes and clarifies field purposes for all users.",
//         multiSelect: false
//     },
//     {
//         question: "Universal Containers (UC) has a complex Salesforce org with many Apex classes, triggers, and automated processes. They are encountering race conditions on the same records during concurrent updates. What should a data architect recommend to guarantee that records are not being updated at the same time?",
//         answers: {
//             a: "Embed the keyword FOR UPDATE after SOQL statements.",
//             b: "Disable classes or triggers that have the potential to obtain the same record.",
//             c: "Migrate programmatic logic to processes and flows.",
//             d: "Refactor or optimize classes and triggers for maximum CPU performance."
//         },
//         correctAnswer: "a",
//         explanation: "Using the FOR UPDATE keyword in SOQL locks the selected records, preventing concurrent updates and mitigating race conditions.",
//         multiSelect: false
//     },
//     {
//         question: "When migrating a legacy client/server application to Salesforce, which key actions should be taken? (Choose all that apply)",
//         answers: {
//             a: "Identify data elements to be persisted in Salesforce.",
//             b: "Map legacy data to Salesforce objects.",
//             c: "Map legacy data to Salesforce custom objects.",
//             d: "Work with legacy application owners to analyze the legacy data model.",
//             e: "Implement the legacy data model within Salesforce using custom fields."
//         },
//         correctAnswer: ["a", "b", "d", "e"],
//         explanation: "Key actions include identifying relevant data elements, mapping legacy data to Salesforce objects, collaborating with legacy system owners on the data model, and implementing the data model in Salesforce. Mapping exclusively to custom objects (option c) is too narrow.",
//         multiSelect: true
//     },
//     {
//         question: "UC has millions of Cases and is running out of storage. Some user groups need access to historical cases for up to 7 years. Which two solutions should a data architect recommend to minimize performance and storage issues?",
//         answers: {
//             a: "Export data out of Salesforce and store in flat files on an external system.",
//             b: "Create a custom object to store case history and run reports on it.",
//             c: "Leverage on-premise data archival and build integration to view archived data.",
//             d: "Leverage big objects to archive case data and use Lightning components to display archived data."
//         },
//         correctAnswer: ["c", "d"],
//         explanation: "Leveraging on-premise archival or using Salesforce big objects minimizes storage consumption while still allowing access to historical data via integrations or custom interfaces.",
//         multiSelect: true
//     },
//     {
//         question: "Universal Containers (UC) has three systems: Salesforce, a cloud-based ERP, and an on-premise Order Management System (OMS). UC wants Salesforce to be the system of record for Leads, while the OMS is the system of record for Accounts and Contacts. Accounts and Contacts should be able to maintain different naming conventions across systems, yet be linked in a consolidated store. What approach should an architect suggest?",
//         answers: {
//             a: "Have Salesforce poll the OMS nightly and bring in the desired Accounts and Contacts.",
//             b: "Implement an integration tool to send OMS Accounts and Contacts to Salesforce.",
//             c: "Implement a Master Data Management (MDM) strategy to reconcile Leads, Accounts, and Contacts.",
//             d: "Use the Streaming API to send Account and Contact data from Salesforce to the OMS."
//         },
//         correctAnswer: "c",
//         explanation: "A Master Data Management strategy provides a consolidated, reconciled view across multiple systems while preserving system-of-record differences.",
//         multiSelect: false
//     },
//     {
//         question: "Universal Containers has millions of rows of Salesforce data used in reports for historical trend evaluation. Performance and storage limits are becoming issues. Which two strategies should be recommended to stakeholders?",
//         answers: {
//             a: "Use scheduled Batch Apex to copy aggregate information into a custom object and delete the original records.",
//             b: "Combine Analytics Snapshots with a purging plan by reporting on the snapshot data and then deleting the original records.",
//             c: "Use Data Loader to extract data, aggregate it, and write it back to a custom object before deleting the originals.",
//             d: "Configure the Salesforce Archiving feature to archive older records and remove them from the data storage limits."
//         },
//         correctAnswer: ["a", "d"],
//         explanation: "Using Batch Apex to summarize and archive data alongside Salesforce's archiving capabilities reduces storage usage and improves report performance.",
//         multiSelect: true
//     },
//     {
//         question: "UC is building a Salesforce application to track Contacts and the Conferences they’ve attended. Contacts are stored in the standard Contact object, and Conferences are stored in a custom Conference__c object. Each Contact may attend multiple Conferences and vice versa. How should the relationship be modeled?",
//         answers: {
//             a: "Implement a Contact_Conference junction object with master-detail relationships to both Contact and Conference__c.",
//             b: "Create a master-detail relationship field on the Contact object.",
//             c: "Create a master-detail relationship field on the Conference object.",
//             d: "Create a lookup relationship field on the Contact object."
//         },
//         correctAnswer: "a",
//         explanation: "A junction object is required to model many-to-many relationships between Contacts and Conferences.",
//         multiSelect: false
//     },
//     {
//         question: "Universal Containers (UC) is a B2C business moving from a home-grown CRM to Salesforce with about one million consumer records. What is the recommended approach for optimal use of Salesforce functionality and to avoid data loading issues?",
//         answers: {
//             a: "Create a Custom Object 'Individual Consumer__c' to load all individual consumers.",
//             b: "Load all individual consumers as Account records and avoid using the Contact object.",
//             c: "Load one Account record and one Contact record for each individual consumer.",
//             d: "Create one Account and load individual consumers as Contacts linked to that single Account."
//         },
//         correctAnswer: "d",
//         explanation: "Using a single Account to store individual consumers as Contacts minimizes data duplication and leverages standard Salesforce functionality for B2C scenarios.",
//         multiSelect: false
//     },
//     {
//         question: "Universal Containers (UC) is splitting its main Salesforce org into Org A and Org B. Org B will have a drastically different data model, and three million records must be migrated from Org A to Org B within two months for compliance reasons. Which migration strategy should be used?",
//         answers: {
//             a: "Use an ETL tool to orchestrate the migration.",
//             b: "Use Data Loader for export and Data Import Wizard for import.",
//             c: "Write a script to use the Bulk API.",
//             d: "Use the Salesforce CLI to query, export, and import."
//         },
//         correctAnswer: "a",
//         explanation: "An ETL tool provides the flexibility to transform data to meet new data models and can handle large volumes efficiently under tight timelines.",
//         multiSelect: false
//     },
//     {
//         question: "Get Cloudy Consulting uses an invoicing system that requires attachments associated with the Invoice__c custom object to be classified by type (e.g., 'Purchase Order', 'Receipt') for reporting purposes. What should an architect do to categorize the attachments?",
//         answers: {
//             a: "Add additional options to the standard ContentType picklist field for the Attachment object.",
//             b: "Add a ContentType picklist field to the Attachment layout and create additional options.",
//             c: "Create a custom picklist field for Type on the standard Attachment object.",
//             d: "Create a custom object related to the Invoice__c object with a picklist field for Type."
//         },
//         correctAnswer: "d",
//         explanation: "Creating a custom object to relate to Invoices allows for flexible categorization and robust reporting on attachment types.",
//         multiSelect: false
//     },
//     {
//         question: "UC uses an on-premise web-based billing system that generates over 1 million invoices a year. The sales team in Salesforce needs to view a customer’s account status, invoice history, and opportunities without leaving Salesforce. What solution should be used?",
//         answers: {
//             a: "Create a custom object and migrate the last 12 months of Invoice data into Salesforce for display on the Account layout.",
//             b: "Write an Apex callout and populate a related list on the Account record.",
//             c: "Create a mashup page that presents the billing system records within Salesforce.",
//             d: "Create a Visualforce tab with the billing system encapsulated within an iframe."
//         },
//         correctAnswer: "c",
//         explanation: "A mashup page integrates external billing system data into Salesforce seamlessly, providing real-time access without storing large volumes of data internally.",
//         multiSelect: false
//     },
//     {
//         question: "UC uses Salesforce to track Opportunities while an internal ERP handles deliveries and invoicing. For each Opportunity, UC sends 12 invoices (one per month). Sales reps need to view current invoice status and amounts from the Opportunity page. When modeling invoices, what is the recommended approach considering performance and storage?",
//         answers: {
//             a: "Use the Streaming API to retrieve the current status from the ERP and display it on the Opportunity page.",
//             b: "Create an external object (Invoice__x) with a Lookup relationship to Opportunity.",
//             c: "Create a custom object (Invoice__c) with a master-detail relationship to Opportunity.",
//             d: "Create a custom object (Invoice__c) with a Lookup relationship to Opportunity."
//         },
//         correctAnswer: "b",
//         explanation: "Using an external object lets Salesforce access the invoices stored in the ERP via OData, reducing storage requirements while providing near real-time data.",
//         multiSelect: false
//     },
//     {
//         question: "A requirement exists to store geolocation data in Salesforce. Which solution should be used?",
//         answers: {
//             a: "Create formula fields with geolocation functions for this requirement.",
//             b: "Create custom fields to maintain latitude and longitude information.",
//             c: "Create a geolocation custom field to maintain this requirement.",
//             d: "Recommend an AppExchange package to support this requirement."
//         },
//         correctAnswer: "c",
//         explanation: "A geolocation custom field is a compound field designed to store both latitude and longitude efficiently and supports distance calculations.",
//         multiSelect: false
//     },
//     {
//         question: "Universal Containers is implementing Salesforce Lead management and procures lead data from multiple sources. To ensure that lead data includes both company profile and location information, which solution should a data architect recommend?",
//         answers: {
//             a: "Ask salespeople to manually search and populate company profile and location data.",
//             b: "Run reports to identify records missing company profile and location data.",
//             c: "Leverage external data providers to populate company profile and location data.",
//             d: "Export leads from Salesforce and have another team populate the missing data."
//         },
//         correctAnswer: "c",
//         explanation: "Integrating external data providers automates the enrichment of lead data with accurate company profile and location details.",
//         multiSelect: false
//     },
//     {
//         question: "A legacy system captures Conferences and Venues. Conferences can occur at any Venue; historically, only 20 Venues are used, though hundreds of thousands of Conferences are created each year. When denormalizing this data into a single Conference object with a Venue picklist, which two considerations should be made?",
//         answers: {
//             a: "Limitations on master-detail relationships.",
//             b: "Org data storage limitations.",
//             c: "Bulk API limitations on picklist fields.",
//             d: "Standard list view in-line editing."
//         },
//         correctAnswer: ["c", "d"],
//         explanation: "Denormalizing into a single object with a picklist must consider Bulk API limits on the number of distinct picklist values and potential issues with standard list view in-line editing if many values are introduced over time.",
//         multiSelect: true
//     },
//     {
//         question: "Universal Containers (CU) is in the process of implementing an enterprise data warehouse (EDW). UC needs to extract 100 million records from Salesforce for migration to the EDW. What data extraction strategy should a data architect use for maximum performance?",
//         answers: {
//             a: "Install a third-party AppExchange tool.",
//             b: "Call the REST API in successive queries.",
//             c: "Utilize PK Chunking with the Bulk API.",
//             d: "Use the Bulk API in parallel mode."
//         },
//         correctAnswer: "c",
//         explanation: "Utilizing PK Chunking with the Bulk API splits the large query into smaller batches based on record IDs, which improves performance and avoids timeouts when extracting massive volumes of data.",
//         multiSelect: false
//     },
//     {
//         question: "Due to security requirements, Universal Containers needs to capture specific user actions, such as login, logout, file attachment download, package install, etc. What is the recommended approach for defining a solution for this requirement?",
//         answers: {
//             a: "Use a field audit trail to capture field changes.",
//             b: "Use a custom object and trigger to capture changes.",
//             c: "Use Event Monitoring to capture these changes.",
//             d: "Use a third-party AppExchange app to capture changes."
//         },
//         correctAnswer: "c",
//         explanation: "Event Monitoring is designed to track user actions like logins, logouts, downloads and provides insights into performance, usage, security, and compliance.",
//         multiSelect: false
//     },
//     {
//         question: "Universals Containers' system administrators have been complaining that they are not able to make changes to user records, including moving them to new territories, without getting 'unable to lock row' errors. What should the data architect do to prevent this error?",
//         answers: {
//             a: "Reduce number of users updated concurrently.",
//             b: "Enable granular locking.",
//             c: "Analyze Splunk query to spot offending records.",
//             d: "Increase CPU for the Salesforce org."
//         },
//         correctAnswer: "b",
//         explanation: "Enabling granular locking allows finer control over record locks during updates, reducing lock contention and preventing 'unable to lock row' errors.",
//         multiSelect: false
//     },
//     {
//         question: "Universal Containers (UC) has a requirement to create an Account plan object that is related to the Account object. Each Account plan must be associated with an Account, but its accessibility requirements differ from the Account object. What should an architect recommend?",
//         answers: {
//             a: "Create a custom account plan object as detail with Account as master in a master‐detail relationship.",
//             b: "Create a custom account plan object as detail with Account as master with additional sharing rules to allow access.",
//             c: "Create an account plan object with a lookup relationship to Account without any validation rules to enforce the association.",
//             d: "Create an account plan object with a lookup relationship to Account with validation rules to enforce the association."
//         },
//         correctAnswer: "d",
//         explanation: "Using a lookup relationship with validation rules ensures that each Account plan is linked to an Account, while allowing for separate ownership and sharing settings.",
//         multiSelect: false
//     },
//     {
//         question: "Universal Containers (UC) provides shipping services by tracking customer shipments via Opportunities. With 200,000 Opportunity records and shipping status having 10 possible values, what should an architect do to improve data quality and avoid data skew when creating a new field to track shipping status?",
//         answers: {
//             a: "Create a picklist field, values sorted alphabetically.",
//             b: "Create a master‐detail relationship to a custom object ShippingStatus__c.",
//             c: "Create a lookup relationship to a custom object ShippingStatus__c.",
//             d: "Create a text field and make it an external ID."
//         },
//         correctAnswer: "a",
//         explanation: "A picklist field limits entries to predefined valid values, ensuring consistency and reducing the risk of data skew by preventing typos or inconsistent entries.",
//         multiSelect: false
//     },
//     {
//         question: "UC has a roll-up summary field on Account to count associated contacts. During the account load, Salesforce reports an 'Unable to lock a row' error. Which solution should a data architect recommend to resolve this error?",
//         answers: {
//             a: "Leverage data loader platform API to load data.",
//             b: "Perform batch job in parallel mode and reduce batch size.",
//             c: "Perform batch job in serial mode and reduce batch size.",
//             d: "Defer roll-up summary field calculation during data migration."
//         },
//         correctAnswer: "c",
//         explanation: "Processing records in serial mode with reduced batch sizes minimizes the risk of simultaneous updates on parent records, thereby avoiding row locking issues during roll-up summary calculations.",
//         multiSelect: false
//     },
//     {
//         question: "US is implementing Salesforce to track customer complaints, provide white papers on products, and offer subscription-based support. Which license type will best fulfill these requirements?",
//         answers: {
//             a: "Lightning Platform Starter license.",
//             b: "Service Cloud license.",
//             c: "Salesforce license.",
//             d: "Sales Cloud license."
//         },
//         correctAnswer: "b",
//         explanation: "Service Cloud licenses are tailored for customer support needs, providing features such as case management, solutions, and other tools essential for handling customer complaints and support services.",
//         multiSelect: false
//     },
//     {
//         question: "Universal Containers is experiencing slow data loads due to system processes. Which of the following actions should be taken to improve data load performance? (Choose all that apply)",
//         answers: {
//             a: "Review the time zones of the user loading the data.",
//             b: "Remove custom indexes on the data being loaded.",
//             c: "Determine if the legacy system is still in use.",
//             d: "Defer sharing calculations of the Salesforce Org.",
//             e: "Deactivate approval processes and workflow rules."
//         },
//         correctAnswer: ["b", "d", "e"],
//         explanation: "Removing custom indexes reduces index maintenance overhead, deferring sharing calculations minimizes runtime recalculations, and deactivating approval processes and workflow rules prevents additional automation from slowing the load process.",
//         multiSelect: true
//     },
//     {
//         question: "Universal Containers wants to develop a mobile-friendly dashboard for Sales Managers that supports ad-hoc filtering and drill down into sales-related data. What is the recommended solution for building this data exploration dashboard?",
//         answers: {
//             a: "Create a dashboard in an external reporting tool, export data to the tool, and add a link in Salesforce.",
//             b: "Create a dashboard in an external reporting tool, export data to the tool, and embed it using the Canvas toolkit.",
//             c: "Create a standard Salesforce dashboard connected to reports with appropriate filters.",
//             d: "Create a dashboard using Analytics Cloud that allows users to create ad-hoc lenses and drill down."
//         },
//         correctAnswer: "d",
//         explanation: "Analytics Cloud (Einstein Analytics) offers interactive, mobile-friendly dashboards that support ad-hoc data exploration and drill-down capabilities.",
//         multiSelect: false
//     },
//     {
//         question: "UC uses classic encryption for custom fields and runs weekly data exports for backups. During validation, it was discovered that encrypted field values are exported in their encrypted form. What should a data architect recommend to export decrypted values?",
//         answers: {
//             a: "Set a standard profile for the Data Migration user and assign the 'View Encrypted Data' permission.",
//             b: "Create another field to copy data from the encrypted field and use this field in the export.",
//             c: "Leverage an Apex class to decrypt data before exporting it.",
//             d: "Set up a custom profile for the Data Migration user and assign the 'View Encrypted Data' permission."
//         },
//         correctAnswer: "b",
//         explanation: "Since classic encryption does not export decrypted values even with the 'View Encrypted Data' permission, creating a secondary field to copy the plain text values serves as an effective workaround for export purposes.",
//         multiSelect: false
//     },
//     {
//         question: "Universal Containers (UC) wants to store product data in Salesforce, but the standard Product object does not support the complex hierarchical structure used in the product master system. How can UC modify the standard Product object to support a hierarchical data structure?",
//         answers: {
//             a: "Create a custom lookup field on the standard Product to reference the child record in the hierarchy.",
//             b: "Create a custom lookup field on the standard Product to reference the parent record in the hierarchy.",
//             c: "Create a custom master-detail field on the standard Product to reference the child record in the hierarchy.",
//             d: "Create an Apex trigger to synchronize the Product Family standard picklist field on the Product object."
//         },
//         correctAnswer: "b",
//         explanation: "Adding a custom lookup field that references the parent record in the Product object creates a self-referential hierarchy, allowing the complex product structure to be modeled.",
//         multiSelect: false
//     },
//     {
//         question: "Universal Containers (UC) has implemented systems including a billing system, customer support system, and CRM system. To improve business intelligence across these disparate systems, UC has implemented an MDM solution as the system of truth for customer records. Which MDM data element is needed to allow reporting across these systems?",
//         answers: {
//             a: "Global unique customer number.",
//             b: "Email address.",
//             c: "Phone number.",
//             d: "Full name."
//         },
//         correctAnswer: "a",
//         explanation: "A global unique customer number uniquely identifies each customer across multiple systems, enabling consolidated reporting within an MDM framework.",
//         multiSelect: false
//     },
//     {
//         question: "Which three characteristics of a skinny table help improve report and query performance?",
//         answers: {
//             a: "Skinny tables can contain frequently used fields and thereby help avoid joins.",
//             b: "Skinny tables can be used to create custom indexes on multi-select picklist fields.",
//             c: "Skinny tables provide a view across multiple objects for easy access to combined data.",
//             d: "Skinny tables are kept in sync with changes to data in the source tables.",
//             e: "Skinny tables do not include records that are available in the recycle bin."
//         },
//         correctAnswer: ["a", "d", "e"],
//         explanation: "Skinny tables improve performance by storing frequently used fields to avoid joins, automatically staying in sync with source data changes, and excluding recycle bin records.",
//         multiSelect: true
//     },
//     {
//         question: "Get Cloudy Consulting needs to evaluate the completeness and consistency of contact information in Salesforce. What are two actions they can take to review their data for completeness and consistency?",
//         answers: {
//             a: "Run a report which shows the last time the key fields were updated.",
//             b: "Run one report per key field, grouped by that field, to understand its data variability.",
//             c: "Run a report that shows the percentage of blanks for the important fields.",
//             d: "Run a process that can fill in default values for blank fields."
//         },
//         correctAnswer: ["a", "c"],
//         explanation: "Reports that indicate the last update times help identify stale data, and reports showing the percentage of blanks help measure data completeness.",
//         multiSelect: true
//     },
//     {
//         question: "For a custom pricing engine that factors in customer location (state, city, zip) with minimal code changes, what should a data architect recommend to maintain the pricing criteria in Salesforce?",
//         answers: {
//             a: "Create a custom object to maintain the pricing criteria.",
//             b: "Assign the pricing criteria within customer pricing engine.",
//             c: "Maintain pricing criteria in custom metadata types.",
//             d: "Configure the pricing criteria in price books."
//         },
//         correctAnswer: "c",
//         explanation: "Custom metadata types are ideal to store configuration data such as pricing criteria that change infrequently and require minimal code changes.",
//         multiSelect: false
//     },
//     {
//         question: "Universal Containers wants to automatically archive inactive Account data older than 3 years, which need not remain accessible. Which two methods should be used?",
//         answers: {
//             a: "Use the Force.com Workbench to export the data.",
//             b: "Schedule a weekly export file from the Salesforce UI.",
//             c: "Schedule jobs to export and delete using an ETL tool.",
//             d: "Schedule jobs to export and delete using the Data Loader."
//         },
//         correctAnswer: ["c", "d"],
//         explanation: "Scheduling automated jobs with an ETL tool or Data Loader enables exporting and deleting data, while manual exports via Workbench or the UI lack automation.",
//         multiSelect: true
//     },
//     {
//         question: "Universal Containers manages Vehicle and Service History records which are updated in a weekly batch process. With a limited migration window and locking issues during data migration, how can locking issues be avoided?",
//         answers: {
//             a: "Use Bulk API parallel mode for data migration.",
//             b: "Use Bulk API serial mode for data migration.",
//             c: "Insert the order in another custom object and use Batch Apex to move the records to Service_Order__c object.",
//             d: "Change the lookup configuration to 'Clear the value of this field' when a lookup record is deleted."
//         },
//         correctAnswer: "b",
//         explanation: "Using Bulk API in serial mode processes batches sequentially, reducing concurrent updates and avoiding record locking issues.",
//         multiSelect: false
//     },
//     {
//         question: "To connect to an external system that is not OData enabled, what solution should be used?",
//         answers: {
//             a: "Write an Apex class that makes a REST callout to the external API.",
//             b: "Develop a process that calls an invocable web service method.",
//             c: "Migrate the data to Heroku and register Postgres as a data source.",
//             d: "Write a custom adapter with the Apex Connector Framework."
//         },
//         correctAnswer: "d",
//         explanation: "The Apex Connector Framework enables developers to create custom adapters for Salesforce Connect to access external systems that aren’t OData enabled.",
//         multiSelect: false
//     },
//     {
//         question: "To create a data dictionary that documents how business entities are defined, which two techniques can be used?",
//         answers: {
//             a: "Use Salesforce Object Query Language.",
//             b: "Use a data definition language.",
//             c: "Use an entity relationship diagram.",
//             d: "Use the Salesforce Metadata API."
//         },
//         correctAnswer: ["c", "d"],
//         explanation: "Entity relationship diagrams offer visual representations of data structure, while the Metadata API allows extraction of definitions; both are useful for building a data dictionary.",
//         multiSelect: true
//     },
//     {
//         question: "Universal Containers has multiple systems maintaining customer data and faces consistency issues. What solution should be recommended?",
//         answers: {
//             a: "Improve existing point-to-point integrations.",
//             b: "Data cleanse each system.",
//             c: "Perform a one-time synchronization to level set the built-up inconsistencies.",
//             d: "Implement an MDM solution as the customer master, with centralized integrations."
//         },
//         correctAnswer: "d",
//         explanation: "A Master Data Management (MDM) solution establishes a central source of truth and ensures data consistency across multiple systems.",
//         multiSelect: false
//     },
//     {
//         question: "UC is running out of storage and needs to archive data. They want to keep two years of records in Salesforce and archive older records. Which solution should be recommended?",
//         answers: {
//             a: "Use a third-party backup solution to backup all data off platform.",
//             b: "Build a batch job to move all records off platform, and delete all records from Salesforce.",
//             c: "Build a batch job to move two-year-old records off platform, and delete records from Salesforce.",
//             d: "Build a batch job to move all restored off platform, and delete old records from Salesforce."
//         },
//         correctAnswer: "c",
//         explanation: "A batch job that migrates records older than two years off platform and then deletes them from Salesforce efficiently reduces storage usage.",
//         multiSelect: false
//     },
//     {
//         question: "To preserve created and last modified timestamps and record ownership during data migration from a legacy system, which two solutions should be enabled?",
//         answers: {
//             a: "Log a case with Salesforce to update these fields.",
//             b: "Enable Update Records with Inactive Owners Permission.",
//             c: "Enable Set Audit Fields upon Record Creation Permission.",
//             d: "Enable Modify All and View All permission."
//         },
//         correctAnswer: ["b", "c"],
//         explanation: "Enabling Update Records with Inactive Owners Permission preserves ownership of records with inactive users, while Set Audit Fields upon Record Creation preserves original timestamp data during migration.",
//         multiSelect: true
//     },
//     {
//         question: "Northern Trail Outfitters (NTO) needs to implement a standard communication preference management model for Person Accounts, Contacts, Users, and Leads. Which option should be recommended?",
//         answers: {
//             a: "Create custom fields for contact preferences in Lead, Person Account, and Users objects.",
//             b: "Create a case for contact preferences, and use this to validate the preferences.",
//             c: "Create a custom object to maintain preferences and build relationships to Lead, Person Account, and Users.",
//             d: "Use the Individual object to maintain preferences with relationships to Lead, Person Account, and Users."
//         },
//         correctAnswer: "d",
//         explanation: "The Individual object is a standard Salesforce object designed to manage communication and privacy preferences across various record types.",
//         multiSelect: false
//     },
//     {
//         question: "To avoid storage issues in Sales Cloud when handling large CSV files for marketing, what should Universal Containers do?",
//         answers: {
//             a: "Load the CSV files in Einstein Analytics and sync with Marketing Cloud prior to sending marketing communications.",
//             b: "Load the CSV files in an external database and sync with Marketing Cloud prior to sending marketing communications.",
//             c: "Load the contacts directly to Marketing Cloud and implement a reconciliation process for converted prospects.",
//             d: "Continue using the Lead object to sync with Marketing Cloud and delete Lead records from Sales after sync."
//         },
//         correctAnswer: "c",
//         explanation: "By loading contacts directly into Marketing Cloud and reconciling converted prospects, UC avoids excessive storage usage in Sales Cloud.",
//         multiSelect: false
//     },
//     {
//         question: "Northern trail Outfitters (NTO) runs its entire out of an enterprise data warehouse (EDW), NTD's sales team starting to use Salesforce after a recent implementation, but currently lacks data required to advanced and opportunity to the next stage. NTO's management has research Salesforce Connect and would like to use It to virtualize and report on data from the EDW within Salesforce. NTO will be running thousands of reports per day across 10 to 15 external objects. What should a data architect consider before implementing Salesforce Connect for reporting?",
//         answers: {
//             a: "Maximum number for records returned",
//             b: "OData callout limits per day",
//             c: "Maximum page size for server-driven paging",
//             d: "Maximum external objects per org"
//         },
//         correctAnswer: "b",
//         explanation: "Salesforce Connect has a limit of 100,000 callouts per day. This limit is shared across all external data sources in your org. If you exceed this limit, you will receive an error message and no more callouts will be allowed until the next day.",
//         multiSelect: false
//     },
//     {
//         question: "DreamHouse Realty has a data model as shown in the image. The Project object has a private sharing model, and it has Roll-Up summary fields to calculate the number of resources assigned to the project, total hours for the project, and the number of work items associated to the project. There will be a large amount of time entry records to be loaded regularly from an external system into Salesforce. What should the Architect consider in this situation?",
//         answers: {
//             a: "Load all data after deferring sharing calculations.",
//             b: "Calculate summary values instead of Roll-Up by using workflow.",
//             c: "Calculate summary values instead of Roll-Up by using triggers.",
//             d: "Load all data using external IDs to link to parent records."
//         },
//         correctAnswer: "a",
//         explanation: "Deferring sharing calculations allows the data to be loaded first and then the sharing rules to be applied later. Workflows and triggers are not recommended for calculating summary values, as they can cause performance issues and data skew. External IDs are used to link records from different systems, not to improve data loading performance.",
//         multiSelect: false
//     },
//     {
//         question: "Universal Containers (UC) has a very large and complex Salesforce org with hundreds of validation rules and triggers. The triggers are responsible for system updates and data manipulation as records are created or updates by users. A majority of the automation tool within UC'' org were not designed to run during a data load. UC is importing 100,000 records into Salesforce across several objects over the weekend. What should a data architect do to mitigate any unwanted results during the import?",
//         answers: {
//             a: "Ensure validation rules, triggers and other automation tools are disabled.",
//             b: "Ensure duplication and matching rules and defined.",
//             c: "Import the data in smaller batches over a 24-hour period.",
//             d: "Bulkily the trigger to handle import leads."
//         },
//         correctAnswer: "a",
//         explanation: "Ensuring validation rules, triggers and other automation tools are disabled is the best way to mitigate any unwanted results during the import, as it prevents any errors or conflicts that may occur due to the existing logic.",
//         multiSelect: false
//     },
//     {
//         question: "A large Automobile company has implemented SF for its Sales Associates. Leads flow from its website to SF using a batch integration. The batch job connects the leads to Accounts in SF, and customers visiting their retail stores are also created as Accounts. The company has noticed a large number of duplicate accounts in SF. On analysis, it was found that certain customers could interact with its website and also visit the store. The Sales associates use Global Search to search for customers in Salesforce before creating them. Which scalable option should a data architect choose to implement to avoid duplicates?",
//         answers: {
//             a: "Use the Account object with Person Accounts and a new B2C page layout.",
//             b: "Use the Account object with a newly created Record Type for B2C customers.",
//             c: "Create a new picklist value for B2C customers on the Account Type field.",
//             d: "Use 50 umbrella Accounts for each region, with customers as associated Contacts."
//         },
//         correctAnswer: "a",
//         explanation: "Person Accounts are a special type of accounts that allow you to store information about individual consumers who are not associated with a business account. They allow you to use the same standard objects and features that you use for business accounts and enable you to create different page layouts and record types for B2C and B2B customers.",
//         multiSelect: false
//     },
//     {
//         question: "Northern Trail Outfitters (NTO) has a variety of customers that include householder, businesses, and individuals. The following conditions exist within its system: NTO has a total of five million customers. Duplicate records exist, which is replicated across many systems, including Salesforce. Given these conditions, there is a lack of consistent presentation and clear identification of a customer record. Which three option should a data architect perform to resolve the issues with the customer data?",
//         answers: {
//             a: "Create a unique global customer ID for each customer and store that in all system for referential identity.",
//             b: "Use Salesforce CDC to sync customer data cross all systems to keep customer record in sync.",
//             c: "Invest in data duplicate tool to de-dupe and merge duplicate records across all systems.",
//             d: "Duplicate customer records across the system and provide a two-way sync of data between the systems.",
//             e: "Create a customer master database external to Salesforce as a system of truth and sync the customer data with all systems."
//         },
//         correctAnswer: ["a", "c", "e"],
//         explanation: "Creating a unique global customer ID for each customer and storing that in all systems for referential identity, investing in a data duplicate tool to de-dupe and merge duplicate records across all systems, and creating a customer master database external to Salesforce as a system of truth and syncing the customer data with all systems are the three options that a data architect should perform to resolve the issues with the customer data.",
//         multiSelect: true
//     },
//     {
//         question: "NTO need to extract 50 million records from a custom object everyday from its Salesforce org. NTO is facing query timeout issues while extracting these records. What should a data architect recommend in order to get around the time out issue?",
//         answers: {
//             a: "Use a custom auto number and formula field and use that to chunk records while extracting data.",
//             b: "The REST API to extract data as it automatically chunks records by 200.",
//             c: "Use ETL tool for extraction of records.",
//             d: "Ask SF support to increase the query timeout value."
//         },
//         correctAnswer: "c",
//         explanation: "The best solution to extract 50 million records from a custom object everyday from Salesforce org without facing query timeout issues is to use an ETL tool for extraction of records.",
//         multiSelect: false
//     },
//     {
//         question: "What 2 data management policies does the data classification feature allow customers to classify in salesforce?",
//         answers: {
//             a: "Reference data policy.",
//             b: "Data governance policy.",
//             c: "Data sensitivity level",
//             d: "Compliance categorization policy."
//         },
//         correctAnswer: ["c", "d"],
//         explanation: "The data classification feature allows customers to classify their data in Salesforce based on two policies: Data sensitivity level and Compliance categorization policy.",
//         multiSelect: true
//     },
//     {
//         question: "Universal Container has a Sales Cloud implementation for a sales team and an enterprise resource planning (ERP) as a customer master Sales team are complaining about duplicate account and data quality issues with account data. Which two solutions should a data architect recommend to resolve the complaints?",
//         answers: {
//             a: "Build a nightly batch job to de-dupe data, and merge account records.",
//             b: "Integrate Salesforce with ERP, and make ERP as system of truth.",
//             c: "Build a nightly sync job from ERP to Salesforce.",
//             d: "Implement a de-dupe solution and establish account ownership in Salesforce"
//         },
//         correctAnswer: ["b", "d"],
//         explanation: "Integrating Salesforce with ERP and making ERP the system of truth and implementing a de-dupe solution and establishing account ownership in Salesforce are the two solutions that a data architect should recommend to resolve the complaints.",
//         multiSelect: true
//     },
//     {
//         question: "During the implementation of Salesforce, a customer has the following requirements for Sales Orders: 1. Sales Order information needs to be shown to users in Salesforce. 2. Sales Orders are maintained in the on-premises enterprise resource planning (ERP). 3. Sales Order information has more than 150 million records. 4. Sales Orders will not be updated in Salesforce. What should a data architect recommend for maintaining Sales Orders in salesforce?",
//         answers: {
//             a: "Us custom objects to maintain Sales Orders in Salesforce.",
//             b: "Use custom big objects to maintain Sales Orders in Salesforce.",
//             c: "Use external objects to maintain Sales Order in Salesforce.",
//             d: "Use Standard order object to maintain Sale Orders in Salesforce"
//         },
//         correctAnswer: "c",
//         explanation: "Using external objects to maintain Sales Order in Salesforce is the best recommendation for maintaining Sales Orders in Salesforce, as it allows users to access large volumes of data stored outside Salesforce without copying or synchronizing it.",
//         multiSelect: false
//     },
//     {
//         question: "Get Cloudy Consulting monitors 15,000 servers, and these servers automatically record their status every 10 minutes. Because of company policy, these status reports must be maintained for 5 years. Managers at Get Cloudy Consulting need access to up to one week's worth of these status reports with all of their details. An Architect is recommending what data should be integrated into Salesforce and for how long it should be stored in Salesforce. Which two limits should the Architect be aware of?",
//         answers: {
//             a: "Data storage limits",
//             b: "Workflow rule limits",
//             c: "API Request limits",
//             d: "Webservice callout limits"
//         },
//         correctAnswer: ["a", "c"],
//         explanation: "Data storage limits and API request limits are two important factors that affect the data integration and storage in Salesforce.",
//         multiSelect: true
//     },
//     {
//         question: "Northern Trail Outfitters (NTO) has implemented Salesforce for its sales users. The opportunity management in Saiesforce Is implemented as follows: 1. Sales users enter their opportunities in Salesforce for forecasting and reporting purposes. 2. NTO has a product pricing system (PPS) that is used to update the Opportunity Amount field on opportunities on a daily basis. 3. PPS is the trusted source within NTO for Opportunity Amount. 4. NTO uses Opportunity Forecast for its sales planning and management. Sales users have noticed that their updates to the Opportunity Amount field are overwritten when PPS updates their opportunities. How should a data architect address this overwriting issue?",
//         answers: {
//             a: "Create a custom field for Opportunity amount that PSS updates separating the field sales user updates.",
//             b: "Change PSS integration to update only Opportunity Amount field when the value is null.",
//             c: "Change Opportunity Amount field access to Read Only for sales users field-level security.",
//             d: "Create a custom field for Opportunity amount that sales users update separating the field that PPS updates."
//         },
//         correctAnswer: "c",
//         explanation: "Changing Opportunity Amount field access to Read Only for sales users field-level security is the best way to address the overwriting issue, as it prevents sales users from updating the field that is controlled by PPS, and ensures data consistency and accuracy.",
//         multiSelect: false
//     },
//     {
//         question: "UC needs to load a large volume of leads into salesforce on a weekly basis. During this process the validation rules are disabled. What should a data architect recommend to ensure data quality is maintained in salesforce.",
//         answers: {
//             a: "Activate validation rules once the leads are loaded into salesforce to maintain quality.",
//             b: "Allow validation rules to be activated during the load of leads into salesforce.",
//             c: "Develop custom APEX batch process to improve quality once the load is completed.",
//             d: "Ensure the lead data is preprocessed for quality before loading into salesforce."
//         },
//         correctAnswer: "d",
//         explanation: "Ensuring the lead data is preprocessed for quality before loading into Salesforce is the best way to maintain data quality.",
//         multiSelect: false
//     },
//     {
//         question: "Universal Containers (UC) is using Salesforce Sales & Service Cloud for B2C sales and customer service but they are experiencing a lot of duplicate customers in the system. Which are two recommended approaches for UC to avoid duplicate data and increase the level of data quality?",
//         answers: {
//             a: "Use Duplicate Management.",
//             b: "Use an Enterprise Service Bus.",
//             c: "Use Data.com Clean",
//             d: "Use a data warehouse."
//         },
//         correctAnswer: ["a", "c"],
//         explanation: "Using Duplicate Management and Data.com Clean are two recommended approaches for UC to avoid duplicate data and increase the level of data quality.",
//         multiSelect: true
//     },
//     {
//         question: "Universal Containers (UC) wants to ensure their data on 100,000 Accounts pertaining mostly to US-based companies is enriched and cleansed on an ongoing basis. UC is looking for a solution that allows easy monitoring of key data quality metrics. What should be the recommended solution to meet this requirement?",
//         answers: {
//             a: "Use a declarative approach by installing and configuring Data.com Clean to monitor Account data quality.",
//             b: "Implement Batch Apex that calls out a third-party data quality API in order to monitor Account data quality.",
//             c: "Use declarative approach by installing and configuring Data.com Prospector to monitor Account data quality.",
//             d: "Implement an Apex Trigger on Account that queries a third-party data quality API to monitor Account data quality."
//         },
//         correctAnswer: "a",
//         explanation: "Using a declarative approach by installing and configuring Data.com Clean to monitor Account data quality can help UC meet their requirement.",
//         multiSelect: false
//     },
//     {
//         question: "Universal Containers is setting up an external Business Intelligence (BI) system and wants to extract 1,000,000 Contact records. What should be recommended to avoid timeouts during the export process?",
//         answers: {
//             a: "Use the SOAP API to export data.",
//             b: "Utilize the Bulk API to export the data.",
//             c: "Use GZIP compression to export the data.",
//             d: "Schedule a Batch Apex job to export the data."
//         },
//         correctAnswer: "b",
//         explanation: "The Bulk API is designed to handle large-scale data operations and avoid timeouts.",
//         multiSelect: false
//     },
//     {
//         question: "For a production cutover, a large number of Account records will be loaded into Salesforce from a legacy system. The legacy system does not have enough information to determine the Ownership for these Accounts upon initial load. Which two recommended options assign Account ownership to mitigate potential performance problems?",
//         answers: {
//             a: "Let a \"system user\" own all the Account records without assigning any role to this user in Role Hierarchy.",
//             b: "Let a \"system user\" own the Account records and assign this user to the lowest-level role in the Role Hierarchy.",
//             c: "Let the VP of the Sales department, who will report directly to the senior VP, own all the Account records.",
//             d: "Let a \"system user\" own all the Account records and make this user part of the highest-level role in the Role Hierarchy."
//         },
//         correctAnswer: ["a", "b"],
//         explanation: "The two recommended options to assign Account ownership to mitigate potential performance problems are to let a \"system user\" own all the Account records without assigning any role to this user in Role Hierarchy, or to let a \"system user\" own the Account records and assign this user to the lowest-level role in the Role Hierarchy.",
//         multiSelect: true
//     },
//     {
//         question: "Universal Containers keeps its Account data in Salesforce and its Invoice data in a third -party ERP system. They have connected the Invoice data through a Salesforce external object. They want data from both Accounts and Invoices visible in one report in one place. What two approaches should an architect suggest for achieving this solution?",
//         answers: {
//             a: "Create a report in an external system combining Salesforce Account data and Invoice data from the ERP.",
//             b: "Create a report combining data from the Account standard object and the Invoices external object.",
//             c: "Create a Visualforce page combining Salesforce Account data and Invoice external object data.",
//             d: "Create a separate Salesforce report for Accounts and Invoices and combine them in a dashboard."
//         },
//         correctAnswer: ["a", "c"],
//         explanation: "Creating a report in an external system combining Salesforce Account data and Invoice data from the ERP, and creating a Visualforce page combining Salesforce Account data and Invoice external object data are two approaches that an architect can suggest for achieving this solution.",
//         multiSelect: true
//     },
//     {
//         question: "As part of a phased Salesforce rollout. there will be 3 deployments spread out over the year. The requirements have been carefully documented. Which two methods should an architect use to trace back configuration changes to the detailed requirements?",
//         answers: {
//             a: "Review the setup audit trail for configuration changes.",
//             b: "Put the business purpose in the Description of each field.",
//             c: "Maintain a data dictionary with the justification for each field.",
//             d: "Use the Force.com IDE to save the metadata files in source control."
//         },
//         correctAnswer: ["b", "d"],
//         explanation: "Putting the business purpose in the Description of each field and using the Force.com IDE to save the metadata files in source control are methods that an architect can use to trace back configuration changes to the detailed requirements.",
//         multiSelect: true
//     },
//     {
//         question: "Universal Containers is establishing a call center that will use Salesforce. UC receives 10 million calls and creates 100 million cases every month. Cases are linked to a custom call object using lookup relationship. UC would like to run reports and dashboard to better understand different case types being created on calls to better serve customers. What solution should a data architect recommend to meet the business requirement?",
//         answers: {
//             a: "Archive records to a data warehouse and run analytics on the data warehouse.",
//             b: "Leverage big objects to archive records and Einstein Analytics to run reports.",
//             c: "Leverage custom objects to store aggregate data and run analytics.",
//             d: "Leverage out-of-the-box reports and dashboard on case and interactive voice response (IVR) custom object."
//         },
//         correctAnswer: "b",
//         explanation: "Big objects can store and manage massive amounts of data on the Salesforce platform and Einstein Analytics can be used to create dashboards and lenses to analyze big object data and get insights from advanced AI-driven analytics.",
//         multiSelect: false
//     },
//     {
//         question: "Universal Containers is experiencing frequent and persistent group membership locking issues that severely restricts its ability to manage manual and a automated updates at the same time. What should a data architect do in order to restore the issue?",
//         answers: {
//             a: "Enable granular locking",
//             b: "Enable parallel sharing rule calculation.",
//             c: "Enable defer sharing calculation",
//             d: "Enable implicit sharing"
//         },
//         correctAnswer: "a",
//         explanation: "Enabling granular locking allows concurrent sharing rule calculations and group membership updates to run without locking each other.",
//         multiSelect: false
//     },
//     {
//         question: "NTO has decided to franchise its brand. Upon implementation, 1000 franchisees will be able to access BTO's product information and track large customer sales and opportunities through a portal. The Franchisees will also be able to run monthly and quarterly sales reports and projections as well as view the reports in dashboards. Which licenses does NTO need to provide these features to the Franchisees?",
//         answers: {
//             a: "Salesforce Sales Cloud license",
//             b: "Lightning Platform license",
//             c: "Customer Community license",
//             d: "Partner Community license"
//         },
//         correctAnswer: "d",
//         explanation: "The best license to provide these features to the franchisees is the Partner Community license. Partner Community licenses are designed for external users who collaborate with your sales team on deals, such as resellers, distributors, or brokers.",
//         multiSelect: false
//     },
//     {
//         question: "NTO has decided to franchise its brand. Upon implementation, 1000 franchisees will be able to access BTO's product information and track large customer sales and opportunities through a portal. The Franchisees will also be able to run monthly and quarterly sales reports and projections as well as view the reports in dashboards. Which licenses does NTO need to provide these features to the Franchisees?",
//         answers: {
//             a: "Salesforce Sales Cloud license",
//             b: "Lightning Platform license",
//             c: "Customer Community license",
//             d: "Partner Community license"
//         },
//         correctAnswer: "d",
//         explanation: "The best license to provide these features to the franchisees is the Partner Community license. Partner Community licenses are designed for external users who collaborate with your sales team on deals, such as resellers, distributors, or brokers.",
//         multiSelect: false
//     },
//     {
//         question: "Universal Containers (UC) has deployed Salesforce to manage Marketing, Sales, and Support efforts in a multi-system ERP environment. After reaching the limits of native reports & dashboards, UC leadership is looking to understand what options can be used to provide more analytical insights. What two approaches should an architect recommend?",
//         answers: {
//             a: "AppExchange Apps",
//             b: "Wave Analytics",
//             c: "Weekly Snapshots",
//             d: "Setup Audit Trails"
//         },
//         correctAnswer: ["a", "b"],
//         explanation: "AppExchange Apps and Wave Analytics are both valid approaches to provide more analytical insights.",
//         multiSelect: true
//     },
//     {
//         question: "Universal Containers has a requirement to report on big object data. Which two native tools can be used to report on big object data?",
//         answers: {
//             a: "Standard reports and dashboards",
//             b: "Async SOQL with a custom object",
//             c: "Standard SOQL queries",
//             d: "Einstein Analytics"
//         },
//         correctAnswer: ["b", "d"],
//         explanation: "Async SOQL with a custom object and Einstein Analytics are the two native tools that can be used to report on big object data.",
//         multiSelect: true
//     },
//     {
//         question: "Universal Containers is looking to use Salesforce to manage their sales organization. They will be migrating legacy account data from two aging systems into Salesforce. Which two design considerations should an architect take to minimize data duplication?",
//         answers: {
//             a: "Use a workflow to check and prevent duplicates.",
//             b: "Clean data before importing to Salesforce.",
//             c: "Use Salesforce matching and duplicate rules.",
//             d: "Import the data concurrently."
//         },
//         correctAnswer: ["b", "c"],
//         explanation: "Clean data before importing to Salesforce and using Salesforce matching and duplicate rules are two design considerations that an architect should take to minimize data duplication.",
//         multiSelect: true
//     },
//     {
//         question: "Two million Opportunities need to be loaded in different batches into Salesforce using the Bulk API in parallel mode. What should an Architect consider when loading the Opportunity records?",
//         answers: {
//             a: "Use the Name field values to sort batches.",
//             b: "Order batches by Auto-number field.",
//             c: "Create indexes on Opportunity object text fields.",
//             d: "Group batches by the AccountId field."
//         },
//         correctAnswer: "d",
//         explanation: "Grouping batches by the AccountId field can improve the performance and avoid locking issues when loading Opportunity records using the Bulk API in parallel mode.",
//         multiSelect: false
//     },
//     {
//         question: "Universal Containers (UC) is implementing its new Internet of Things technology, which consists of smart containers that provide information on container temperature and humidity updated every 10 minutes back to UC. There are roughly 10,000 containers equipped with this technology with the number expected to increase to 50,000 across the next five years. It is essential that Salesforce user have access to current and historical temperature and humidity data for each container. What is the recommended solution?",
//         answers: {
//             a: "Create new custom fields for temperature and humidity in the existing Container custom object, as well as an external ID field that is unique for each container. These custom fields are updated when a new measure is received.",
//             b: "Create a new Container Reading custom object, which is created when a new measure is received for a specific container. The Container Reading custom object has a master-detail relationship to the container object.",
//             c: "Create a new Lightning Component that displays last humidity and temperature data for a specific container and can also display historical trends obtaining relevant data from UC's existing data warehouse.",
//             d: "Create a new Container Reading custom object with a master-detail relationship to Container which is created when a new measure is received for a specific container. Implement an archiving process that runs every hour."
//         },
//         correctAnswer: "d",
//         explanation: "The recommended solution is to create a new Container Reading custom object with a master-detail relationship to Container which is created when a new measure is received for a specific container. Implement an archiving process that runs every hour.",
//         multiSelect: false
//     },
//     {
//         question: "To avoid creating duplicate Contacts, a customer frequently uses Data Loader to upsert Contact records into Salesforce. What common error should the data architect be aware of when using upsert?",
//         answers: {
//             a: "Errors with duplicate external Id values within the same CSV file.",
//             b: "Errors with records being updated and inserted in the same CSV file.",
//             c: "Errors when a duplicate Contact name is found cause upsert to fail.",
//             d: "Errors with using the wrong external Id will cause the load to fail."
//         },
//         correctAnswer: "a",
//         explanation: "If the CSV file contains duplicate external Id values within the same file, Data Loader will throw an error saying 'Duplicate Id Specified' and will not process those records.",
//         multiSelect: false
//     },
//     {
//         question: "Which two aspects of data does an Enterprise data governance program aim to improve?",
//         answers: {
//             a: "Data integrity",
//             b: "Data distribution",
//             c: "Data usability",
//             d: "Data modeling"
//         },
//         correctAnswer: ["a", "c"],
//         explanation: "Data integrity and data usability are two aspects of data that an Enterprise data governance program aims to improve.",
//         multiSelect: true
//     },
//     {
//         question: "DreamHouse Realty has a Salesforce org that is used to manage Contacts. What are two things an Architect should consider using to maintain data quality in this situation?",
//         answers: {
//             a: "Use the private sharing model.",
//             b: "Use Salesforce duplicate management.",
//             c: "Use validation rules on new record create and edit.",
//             d: "Use workflow to delete duplicate records."
//         },
//         correctAnswer: ["b", "c"],
//         explanation: "Using Salesforce duplicate management and using validation rules on new record create and edit are two things that an architect should consider using to maintain data quality for managing Contacts.",
//         multiSelect: true
//     },
//     {
//         question: "Universal Containers (UC) loads bulk leads and campaigns from third-party lead aggregators on a weekly and monthly basis. The expected lead record volume is 500K records per week, and the expected campaign records volume is 10K campaigns per week. After the upload, Lead records are shared with various sales agents via sharing rules and added as Campaign members via Apex triggers on Lead creation. UC agents work on leads for 6 months, but want to keep the records in the system for at least 1 year for reference. Compliance requires them to be stored for a minimum of 3 years. After that, data can be deleted. What statement is true with respect to a data archiving strategy for UC?",
//         answers: {
//             a: "UC can leverage the Salesforce Data Backup and Recovery feature for data archival needs.",
//             b: "UC can store long-term lead records in custom storage objects to avoid counting against storage limits.",
//             c: "UC can leverage recycle bin capability, which guarantees record storage for 15 days after deletion.",
//             d: "UC can leverage a 'tier'-based approach to classify the record storage need."
//         },
//         correctAnswer: "d",
//         explanation: "A tier-based strategy segments data by usage and retention policies, allowing UC to manage storage efficiently while meeting compliance and operational requirements.",
//         multiSelect: false
//     },
//     {
//         question: "Universal Containers (UC) is implementing a new customer categorization process where customers should be assigned to a Gold, Silver, or Bronze category if they've purchased UC's new support service. Customers are expected to be evenly distributed across all three categories. Currently, UC has around 500,000 customers, and is expecting 1% of existing non-categorized customers to purchase UC's new support service every month over the next five years. What is the recommended solution to ensure long-term performance, bearing in mind the above requirements?",
//         answers: {
//             a: "Implement a new global picklist custom field with Gold, Silver, and Bronze values and enable it in Account.",
//             b: "Implement a new picklist custom field in the Account object with Gold, Silver, and Bronze values.",
//             c: "Implement a new Categories custom object and a master-detail relationship from Account to Category.",
//             d: "Implement a new Categories custom object and create a lookup field from Account to Category."
//         },
//         correctAnswer: "b",
//         explanation: "The recommended solution to ensure long-term performance for the customer categorization process is to implement a new picklist custom field in the Account object with Gold, Silver, and Bronze values. A picklist field is a simple and efficient way to store a predefined set of values for a record. It allows you to easily filter, sort, and group records by their category values, which can help you analyze and segment your customers. It does not require creating any additional objects or relationships, which can reduce the data model complexity and maintenance overhead. It supports large data volumes and can handle millions of records without affecting performance or scalability.",
//         multiSelect: false
//     },
//     {
//         question: "Get Cloud Consulting needs to integrate two different systems with customer records into the Salesforce Account object. So that no duplicate records are created in Salesforce, Master Data Management will be used. An Architect needs to determine which system is the system of record on a field level. What should the Architect do to achieve this goal?",
//         answers: {
//             a: "Master Data Management systems determine system of record, and the Architect doesn't have to think about what data is controlled by what system.",
//             b: "Key stakeholders should review any fields that share the same purpose between systems to see how they will be used in Salesforce.",
//             c: "The database schema for each external system should be reviewed, and fields with different names should always be separate fields in Salesforce.",
//             d: "Any field that is an input field in either external system will be overwritten by the last record integrated and can never have a system of record."
//         },
//         correctAnswer: "b",
//         explanation: "Key stakeholders from both systems should collaborate with the Architect to determine which system is the system of record on a field level is what the Architect should do to achieve this goal of integrating two different systems with customer records into the Salesforce Account object using Master Data Management. The system of record is the authoritative source of truth for a given entity or field in a given context. Different systems may have different levels of accuracy, completeness, timeliness, or relevance for different fields. Therefore, it is important to involve key stakeholders from both systems who have knowledge and expertise about their data quality and business needs to decide which system should be the system of record for each field. The Architect should facilitate this collaboration and document the decisions and rationale for each field.",
//         multiSelect: false
//     },
//     {
//         question: "A data architect needs to track field history on 100 Opportunity fields. What are two possible actions that an architect can perform to meet this requirement?",
//         answers: {
//             a: "Create a custom object to store a copy of the record when changed.",
//             b: "Create a custom object to store the previous and new field values.",
//             c: "Use Analytic Snapshots to store a copy of the record when changed.",
//             d: "Select the 100 fields in the Opportunity Set History Tracking page."
//         },
//         correctAnswer: ["a", "b"],
//         explanation: "Creating a custom object to store a copy of the record when changed and creating a custom object to store the previous and new field values are two possible actions that an architect can perform to meet the requirement of tracking field history on 100 Opportunity fields. A custom object can store more fields and records than the standard field history tracking feature, which has a limit of 20 fields per object and 18 or 24 months of data retention. A custom object can also be used for reporting and analysis of field history data.",
//         multiSelect: true
//     },
//     {
//         question: "Northern Trail Outfitters Is planning to build a consent form to record customer authorization for marketing purposes. What should a data architect recommend to fulfill this requirement?",
//         answers: {
//             a: "Use custom fields to capture the authorization details.",
//             b: "Create a custom object to maintain the authorization.",
//             c: "Utilize the Authorization Form Consent object to capture the consent.",
//             d: "Use AppExchange solution to address the requirement."
//         },
//         correctAnswer: "c",
//         explanation: "The Authorization Form Consent object is a standard object that allows you to capture customer consent for marketing purposes. It has fields such as Consent Captured Date, Consent Captured Source, Consent Description, and Consent Status. You can use this object to create consent forms and track customer responses. This is the best option to fulfill the requirement, as it does not require any custom development or external solution.",
//         multiSelect: false
//     },
//     {
//         question: "Universal Containers has received complaints that customers are being called by multiple Sales Reps where the second Sales Rep that calls is unaware of the previous call by their coworker. What is a data quality problem that could cause this?",
//         answers: {
//             a: "Missing phone number on the Contact record.",
//             b: "Customer phone number has changed on the Contact record.",
//             c: "Duplicate Contact records exist in the system.",
//             d: "Duplicate Activity records on a Contact."
//         },
//         correctAnswer: "c",
//         explanation: "A data quality problem that could cause customers to be called by multiple Sales Reps is having duplicate Contact records in the system. Duplicate records can result from data entry errors, data imports, or integrations with other systems. Duplicate records can lead to confusion, inefficiency, and customer dissatisfaction",
//         multiSelect: false
//     },
//     {
//         question: "A data architect is working with a large B2C retailer and needs to model the consumer account structure in Salesforce. What standard feature should be selected in this scenario?",
//         answers: {
//             a: "Individual Accounts",
//             b: "Account Contact",
//             c: "Contacts",
//             d: "Person Accounts"
//         },
//         correctAnswer: "d",
//         explanation: "According to this article, person accounts are designed to store information about individual people by combining certain account and contact fields into a single record. This is suitable for a large B2C retailer that needs to model the consumer account structure in Salesforce.",
//         multiSelect: false
//     },
//     {
//         question: "Universal Containers (UC) requires 2 years of customer related cases to be available on SF for operational reporting. Any cases older than 2 years and upto 7 years need to be available on demand to the Service agents. UC creates 5 million cases per yr. Which 2 data archiving strategies should a data architect recommend?",
//         answers: {
//             a: "Use custom objects for cases older than 2 years and use nightly batch to move them.",
//             b: "Sync cases older than 2 years to an external database, and provide access to Service agents to the database",
//             c: "Use Big objects for cases older than 2 years, and use nightly batch to move them.",
//             d: "Use Heroku and external objects to display cases older than 2 years and bulk API to hard delete from Salesforce."
//         },
//         correctAnswer: ["c", "d"],
//         explanation: "The best data archiving strategies for UC are to use Big objects and Heroku with external objects. Big objects allow storing large amounts of data on the Salesforce platform without affecting performance or storage limits. They also support point-and-click tools, triggers, and Apex code. Heroku is a cloud platform that can host external databases and integrate with Salesforce using external objects. External objects enable on-demand access to external data sources via standard Salesforce APIs and user interfaces. Using bulk API to hard delete cases from Salesforce will free up storage space and improve performance.",
//         multiSelect: true
//     },
//     {
//         question: "Which relationship type should be used to model a many-to-many relationship between two standard objects in Salesforce, requiring a custom junction object?",
//         answers: {
//             a: "Lookup Relationship",
//             b: "Master-Detail Relationship",
//             c: "Hierarchical Relationship",
//             d: "Two Master-Detail Relationships on the Junction Object"
//         },
//         correctAnswer: "d",
//         explanation: "A junction object with two Master-Detail relationships is the proper way to implement a many-to-many relationship in Salesforce. Each Master-Detail relationship links the junction to one of the two 'master' objects.",
//         multiSelect: false
//     },
//     {
//         question: "When designing a data model for Large Data Volumes (LDV), which factors are MOST critical to consider for performance? (Select all that apply)",
//         answers: {
//             a: "Number of formula fields on the object",
//             b: "Use of standard vs. custom fields",
//             c: "Selectivity of filters used in queries and reports",
//             d: "Indexing strategy for frequently queried fields"
//         },
//         correctAnswer: ["c", "d"],
//         explanation: "For Large Data Volume performance, selective queries (c) are critical to prevent full table scans, while proper indexing (d) ensures that the database can efficiently locate records.",
//         multiSelect: true
//     },
//     {
//         question: "What is the primary purpose of an External ID field in Salesforce?",
//         answers: {
//             a: "To enforce unique values across the organization",
//             b: "To store sensitive data securely",
//             c: "To act as a unique identifier for records when integrating with external systems",
//             d: "To create a relationship between two objects"
//         },
//         correctAnswer: "c",
//         explanation: "External ID fields are used as unique identifiers for records when integrating with external systems, particularly for upsert operations and matching records from other systems.",
//         multiSelect: false
//     },
//     {
//         question: "In a Master-Detail relationship, what happens to detail records when the master record is deleted?",
//         answers: {
//             a: "Detail records are automatically deleted (cascade delete).",
//             b: "Detail records become orphaned and need manual cleanup.",
//             c: "The lookup field on the detail records is cleared.",
//             d: "An error prevents the deletion of the master record if detail records exist."
//         },
//         correctAnswer: "a",
//         explanation: "In a Master-Detail relationship, when a master record is deleted, all associated detail records are automatically deleted as well. This is known as cascade deletion.",
//         multiSelect: false
//     },
//     {
//         question: "Which Salesforce features allow controlling record access based on criteria? (Select all that apply)",
//         answers: {
//             a: "Organization-Wide Defaults (OWD)",
//             b: "Role Hierarchy",
//             c: "Criteria-Based Sharing Rules",
//             d: "Ownership-Based Sharing Rules"
//         },
//         correctAnswer: ["c", "d"],
//         explanation: "Criteria-Based Sharing Rules extend access beyond OWD based on record attributes, while Ownership-Based Sharing Rules can grant access based on the record owner's role, group, or territory.",
//         multiSelect: true
//     },
//     {
//         question: "When dealing with data skew (e.g., one Account owning millions of Contacts), which performance issues are most likely? (Select all that apply)",
//         answers: {
//             a: "Problems running reports on the parent object (Account).",
//             b: "Record locking contention when updating child records (Contacts) linked to the skewed parent.",
//             c: "Difficulty creating new fields on the child object.",
//             d: "Apex governor limit errors related to SOQL query rows."
//         },
//         correctAnswer: ["b", "d"],
//         explanation: "Data skew causes record locking contention when updating child records (b) and can lead to hitting governor limits in Apex due to retrieving too many related records (d).",
//         multiSelect: true
//     },
//     {
//         question: "What are the key benefits of using Schema Builder in Salesforce? (Select all that apply)",
//         answers: {
//             a: "Visual representation of objects and their relationships",
//             b: "Ability to create and modify objects, fields, and relationships graphically",
//             c: "Automated data cleansing and deduplication",
//             d: "Performance testing of complex queries",
//             e: "View of field dependencies and relationships"
//         },
//         correctAnswer: ["a", "b", "e"],
//         explanation: "Schema Builder provides a visual representation of objects (a), allows creating and modifying fields/relationships graphically (b), and shows field dependencies and relationships (e). It doesn't handle data cleansing or performance testing.",
//         multiSelect: true
//     },
//     {
//         question: "When implementing a GDPR-compliant data model in Salesforce, which approach is most appropriate for handling customer deletion requests?",
//         answers: {
//             a: "Create a flag field to mark records as deleted but keep the data",
//             b: "Implement a hard delete process using the Recycle Bin",
//             c: "Use Data Retention Policies and Field Encryption",
//             d: "Implement custom code to anonymize sensitive fields rather than deleting records"
//         },
//         correctAnswer: "d",
//         explanation: "For GDPR compliance, anonymization of sensitive fields (d) is often preferred as it preserves system integrity while protecting personal data. Hard deletes can impact referential integrity, and simply flagging records doesn't remove the personal data as required.",
//         multiSelect: false
//     },
//     {
//         question: "Which statement about Big Objects in Salesforce is correct?",
//         answers: {
//             a: "Big Objects support all standard relationship types found in standard objects",
//             b: "Big Objects are ideal for storing data that needs to be regularly updated",
//             c: "Big Objects can store massive amounts of data and are optimized for data archival",
//             d: "Big Objects support workflow rules and process builder automation"
//         },
//         correctAnswer: "c",
//         explanation: "Big Objects are designed specifically to store massive amounts of data and are optimized for data archival (c). They don't support standard relationships, aren't ideal for frequently updated data, and don't work with workflow rules or process builder.",
//         multiSelect: false
//     },
//     {
//         question: "Which techniques should be considered when designing a scalable data model for Large Data Volumes (LDV) in Salesforce? (Select all that apply)",
//         answers: {
//             a: "Strategic use of indexed fields for frequently filtered queries",
//             b: "Selective use of roll-up summary fields",
//             c: "Extensive use of formula fields that reference multiple objects",
//             d: "Implementation of skinny tables for reporting purposes",
//             e: "Creating multiple master-detail relationships on objects with millions of records"
//         },
//         correctAnswer: ["a", "b", "d"],
//         explanation: "For LDV performance, strategic indexing (a), selective use of roll-up fields (b), and skinny tables (d) are recommended. Extensive formula fields spanning objects and multiple master-detail relationships can cause performance issues with large volumes.",
//         multiSelect: true
//     },
//     {
//         question: "Which master data management (MDM) implementation style is most appropriate when you need to create a comprehensive, authoritative source of truth that other systems must conform to?",
//         answers: {
//             a: "Registry style",
//             b: "Coexistence style",
//             c: "Centralized style",
//             d: "Hybrid style"
//         },
//         correctAnswer: "c",
//         explanation: "The centralized MDM style creates a definitive master repository that serves as the system of record and source of truth, with all other systems conforming to its data definitions and structures.",
//         multiSelect: false
//     },
//     {
//         question: "What are valid approaches for handling duplicate data when establishing a 'golden record' in Salesforce? (Select all that apply)",
//         answers: {
//             a: "Using Duplicate Management rules and matching rules",
//             b: "Implementing survivorship rules based on data source reliability",
//             c: "Applying weighted scoring to determine which attributes survive",
//             d: "Automatically keeping the most recently modified record",
//             e: "Storing all duplicates in a custom object for future reference"
//         },
//         correctAnswer: ["a", "b", "c"],
//         explanation: "Establishing a golden record typically involves duplicate management rules (a), survivorship rules based on source reliability (b), and weighted scoring systems (c). Simply keeping the latest record or storing all duplicates doesn't create a proper golden record.",
//         multiSelect: true
//     },
//     {
//         question: "Which field type in Salesforce is most appropriate for storing sensitive personal information that requires encryption at rest?",
//         answers: {
//             a: "Text Encrypted field",
//             b: "Protected Text field",
//             c: "Rich Text Area field with masking",
//             d: "Text field with Shield Platform Encryption"
//         },
//         correctAnswer: "d",
//         explanation: "Text fields with Shield Platform Encryption provide encryption at rest for sensitive personal information, supporting GDPR and other privacy requirements. The other options mentioned either don't exist or don't provide proper encryption at rest.",
//         multiSelect: false
//     },
//     {
//         question: "What are the benefits of implementing a canonical data model in a multi-system Salesforce integration landscape? (Select all that apply)",
//         answers: {
//             a: "Reduced point-to-point mappings between systems",
//             b: "Standardized data definitions across the enterprise",
//             c: "Elimination of the need for data transformation",
//             d: "Simplified addition of new systems to the integration landscape",
//             e: "Automatic data quality validation"
//         },
//         correctAnswer: ["a", "b", "d"],
//         explanation: "A canonical model provides reduced point-to-point mappings (a), standardized data definitions (b), and simpler integration of new systems (d). It doesn't eliminate transformation needs or automatically validate data quality.",
//         multiSelect: true
//     },
//     {
//         question: "When designing a data model for Salesforce with Large Data Volumes (LDV), which approach helps mitigate performance issues related to sharing calculations?",
//         answers: {
//             a: "Increasing the number of sharing rules",
//             b: "Using Private organization-wide defaults with selective sharing",
//             c: "Setting organization-wide defaults to Public Read/Write",
//             d: "Creating multiple roles for each user"
//         },
//         correctAnswer: "b",
//         explanation: "Using Private OWDs with selective sharing (b) minimizes the sharing calculation load. Increasing sharing rules or roles increases calculation complexity, and completely public OWDs may create security issues.",
//         multiSelect: false
//     },
//     {
//         question: "Which methods are appropriate for virtualizing data in Salesforce? (Select all that apply)",
//         answers: {
//             a: "External Objects with OData",
//             b: "Lightning Connect",
//             c: "Salesforce Connect",
//             d: "Custom Web Services",
//             e: "Salesforce to Salesforce"
//         },
//         correctAnswer: ["a", "c", "e"],
//         explanation: "Data virtualization in Salesforce can be achieved through External Objects with OData (a), Salesforce Connect (c), and Salesforce to Salesforce (e). Lightning Connect is now called Salesforce Connect, and custom web services alone don't provide virtualization.",
//         multiSelect: true
//     },
//     {
//         question: "Which statement about Platform Events in Salesforce is correct?",
//         answers: {
//             a: "Platform Events are stored permanently in Salesforce for auditing purposes",
//             b: "Platform Events enable real-time, event-driven integrations",
//             c: "Platform Events can trigger workflow rules but not process builder flows",
//             d: "Platform Events are limited to internal Salesforce use only"
//         },
//         correctAnswer: "b",
//         explanation: "Platform Events enable real-time, event-driven integrations (b). They aren't stored permanently, can trigger flows but not workflow rules, and can be used with external systems, not just internally.",
//         multiSelect: false
//     },
//     {
//         question: "What are the most effective approaches for improving data quality during a migration to Salesforce? (Select all that apply)",
//         answers: {
//             a: "Implementing field-level validation rules",
//             b: "Using Data Loader's built-in cleansing features",
//             c: "Performing data profiling before migration",
//             d: "Setting up duplicate management rules",
//             e: "Conducting data standardization and normalization"
//         },
//         correctAnswer: ["a", "c", "e"],
//         explanation: "Data quality is improved through validation rules (a), pre-migration data profiling (c), and data standardization/normalization (e). Data Loader doesn't have built-in cleansing, and duplicate rules help prevent rather than fix data issues.",
//         multiSelect: true
//     },
//     {
//         question: "Which is the most appropriate approach for archiving transactional data that must remain accessible for occasional reporting but doesn't need real-time access?",
//         answers: {
//             a: "Use standard Salesforce objects with field history tracking",
//             b: "Implement a Big Object solution with an appropriate index",
//             c: "Store data in external systems accessible via Salesforce Connect",
//             d: "Create a separate Salesforce sandbox for archived data"
//         },
//         correctAnswer: "b",
//         explanation: "Big Objects (b) are designed specifically for this scenario - archiving large volumes of data that need occasional access but not real-time processing, while maintaining the data within the Salesforce platform.",
//         multiSelect: false
//     },
//     {
//         question: "When designing a multi-org strategy in Salesforce, what are appropriate techniques for maintaining customer data consistency? (Select all that apply)",
//         answers: {
//             a: "Implementing Salesforce to Salesforce connections",
//             b: "Using an Enterprise Service Bus (ESB) for synchronization",
//             c: "Creating a dedicated master data management (MDM) hub",
//             d: "Maintaining duplicate data in all orgs for redundancy",
//             e: "Using cross-org Change Data Capture"
//         },
//         correctAnswer: ["a", "b", "c"],
//         explanation: "Customer data consistency across orgs can be maintained using Salesforce to Salesforce (a), an ESB for synchronization (b), and a dedicated MDM hub (c). Maintaining duplicates isn't a consistency strategy, and Change Data Capture has limited cross-org capabilities.",
//         multiSelect: true
//     },
//     {
//         question: "What Salesforce license type would be most appropriate for an employee who needs to view but not modify customer data and run standard reports?",
//         answers: {
//             a: "Salesforce Platform License",
//             b: "Salesforce Chatter Only License",
//             c: "Lightning Platform Starter License",
//             d: "Salesforce Platform Read Only License"
//         },
//         correctAnswer: "d",
//         explanation: "The Salesforce Platform Read Only License is specifically designed for users who need to view data and run reports but do not need to modify data, making it the most cost-effective option for this scenario.",
//         multiSelect: false
//     },
//     {
//         question: "What are valid approaches for improving performance when migrating Large Data Volumes (LDV) into Salesforce? (Select all that apply)",
//         answers: {
//             a: "Temporarily disabling triggers, workflows, and validation rules during migration",
//             b: "Using Bulk API rather than SOAP API",
//             c: "Loading data in ascending order of primary keys",
//             d: "Creating all the relationships after loading the primary data",
//             e: "Increasing batch sizes to maximum allowed values"
//         },
//         correctAnswer: ["a", "b", "d"],
//         explanation: "Performance during LDV migration is improved by temporarily disabling automation (a), using Bulk API (b), and creating relationships after primary data load (d). Loading in ascending order has minimal impact, and larger batch sizes can actually reduce performance by causing timeouts.",
//         multiSelect: true
//     },
//     {
//         question: "Which Salesforce feature allows implementing type 2 Slowly Changing Dimensions (SCD) to track historical changes to master data?",
//         answers: {
//             a: "Field History Tracking",
//             b: "Change Data Capture",
//             c: "Field Audit Trail",
//             d: "Big Object with custom timestamps"
//         },
//         correctAnswer: "a",
//         explanation: "Field History Tracking provides the ability to track changes to field values over time, creating a historical record that supports type 2 Slowly Changing Dimensions for master data in Salesforce.",
//         multiSelect: false
//     },
//     {
//         question: "Which data export techniques in Salesforce are best suited for regularly scheduled, automated data extracts? (Select all that apply)",
//         answers: {
//             a: "Data Export Service",
//             b: "Data Loader Command Line",
//             c: "Report Export API",
//             d: "Dataloader.io scheduled jobs",
//             e: "Manual CSV downloads from list views"
//         },
//         correctAnswer: ["a", "b", "d"],
//         explanation: "Automated, scheduled data extracts can be performed using Data Export Service (a), Data Loader Command Line with scheduling (b), and third-party tools like dataloader.io with scheduling capabilities (d). Report API and manual CSV downloads don't support automated scheduling.",
//         multiSelect: true
//     },
//     {
//         question: "What is the primary advantage of using External Objects versus standard Custom Objects in Salesforce?",
//         answers: {
//             a: "External Objects have better performance for high-volume transactions",
//             b: "External Objects allow real-time access to data residing outside Salesforce",
//             c: "External Objects support more field types than Custom Objects",
//             d: "External Objects provide enhanced security features"
//         },
//         correctAnswer: "b",
//         explanation: "The primary advantage of External Objects is that they allow real-time access to data residing outside Salesforce without copying that data into Salesforce storage, creating a virtualization layer.",
//         multiSelect: false
//     },
//     {
//         question: "Which features are important components of a comprehensive data governance program in Salesforce? (Select all that apply)",
//         answers: {
//             a: "Established data quality metrics and monitoring",
//             b: "Documented data dictionary and business glossary",
//             c: "Data stewardship roles and responsibilities",
//             d: "Automatic data cleansing processes",
//             e: "External system integration documentation"
//         },
//         correctAnswer: ["a", "b", "c"],
//         explanation: "A comprehensive data governance program includes data quality metrics (a), data dictionaries and glossaries (b), and defined data stewardship roles (c). Automatic cleansing is a tool, not a governance component, and integration docs are important but not core governance components.",
//         multiSelect: true
//     },
//     {
//         question: "When consolidating customer data from multiple sources, which criteria should be used to determine the winning attribute values? (Select all that apply)",
//         answers: {
//             a: "Source system reliability rankings",
//             b: "Timestamp of data creation or modification",
//             c: "Completeness of the attribute value",
//             d: "User preference settings",
//             e: "Hierarchical authority of the data source"
//         },
//         correctAnswer: ["a", "b", "c"],
//         explanation: "When determining winning attributes during consolidation, valid criteria include source system reliability (a), data freshness via timestamps (b), and data completeness (c). User preferences and arbitrary hierarchical rankings are less reliable determinants of data quality.",
//         multiSelect: true
//     },
//     {
//         question: "What is the primary limitation of using roll-up summary fields in a Large Data Volume (LDV) context?",
//         answers: {
//             a: "They don't support custom summary formulas",
//             b: "They can cause lock contention during record updates",
//             c: "They require sharing rule recalculation",
//             d: "They're limited to 10 per object"
//         },
//         correctAnswer: "b",
//         explanation: "In LDV contexts, roll-up summary fields can cause significant lock contention during record updates, as updating a child record requires an exclusive lock on both the child and parent records, potentially causing performance issues.",
//         multiSelect: false
//     },
//     {
//         question: "Which statements about data classification in Salesforce are correct? (Select all that apply)",
//         answers: {
//             a: "It's a prerequisite for implementing Shield Platform Encryption",
//             b: "It helps identify fields containing sensitive or personal information",
//             c: "Salesforce automatically classifies all custom fields during creation",
//             d: "It's required for GDPR compliance",
//             e: "It supports automated enforcement of retention policies"
//         },
//         correctAnswer: ["b", "d"],
//         explanation: "Data classification helps identify sensitive/personal information fields (b) and is required for GDPR compliance (d). It's not a prerequisite for Shield Encryption, Salesforce doesn't auto-classify fields, and classification alone doesn't enforce retention policies.",
//         multiSelect: true
//     },
//     {
//         question: "What benefits does a proper data lineage implementation provide to a Salesforce organization? (Select all that apply)",
//         answers: {
//             a: "Impact analysis for potential changes",
//             b: "Compliance with regulatory requirements",
//             c: "Traceability of data from origin to consumption",
//             d: "Automatic correction of data quality issues",
//             e: "Reduced storage costs"
//         },
//         correctAnswer: ["a", "b", "c"],
//         explanation: "Data lineage provides impact analysis for changes (a), supports regulatory compliance (b), and enables traceability from origin to consumption (c). It doesn't automatically correct quality issues or reduce storage costs.",
//         multiSelect: true
//     },
//     {
//         question: "Which approach is most appropriate for managing hierarchical data in Salesforce?",
//         answers: {
//             a: "Using the standard Parent-Child relationship field",
//             b: "Creating a custom self-relationship lookup field",
//             c: "Implementing a junction object pattern",
//             d: "Using the Path Assistant feature"
//         },
//         correctAnswer: "b",
//         explanation: "For managing hierarchical data (like employees to managers, or category hierarchies), creating a custom self-relationship lookup field on the object that references the same object is the most appropriate pattern in Salesforce.",
//         multiSelect: false
//     },
//     {
//         question: "When implementing data quality controls for an integration, which approaches are most effective? (Select all that apply)",
//         answers: {
//             a: "Implementing validation rules in Salesforce",
//             b: "Using middleware for data transformation and validation",
//             c: "Relying on users to correct errors manually",
//             d: "Creating error handling and notification processes",
//             e: "Implementing matching rules in Salesforce"
//         },
//         correctAnswer: ["a", "b", "d"],
//         explanation: "Effective data quality controls for integrations include validation rules (a), middleware validation/transformation (b), and error handling processes (d). Relying on manual correction isn't systematic, and matching rules are for duplicate management, not general quality control.",
//         multiSelect: true
//     },
//     {
//         question: "Which statement about Skinny Tables in Salesforce is correct?",
//         answers: {
//             a: "They are automatically created for all custom objects",
//             b: "They contain a subset of fields from the main tables to optimize reporting performance",
//             c: "They allow storage of data beyond standard object limits",
//             d: "They require purchasing additional storage licenses"
//         },
//         correctAnswer: "b",
//         explanation: "Skinny Tables contain a subset of fields from main tables specifically to optimize reporting performance by creating a streamlined copy that includes only the most frequently used fields.",
//         multiSelect: false
//     },
//     {
//         question: "What are valid benefits of implementing a Customer 360 data model in Salesforce? (Select all that apply)",
//         answers: {
//             a: "Creating a unified view of customer interactions across channels",
//             b: "Reducing data storage costs",
//             c: "Improving customer service through more complete information",
//             d: "Enabling more targeted marketing and personalization",
//             e: "Eliminating the need for data governance"
//         },
//         correctAnswer: ["a", "c", "d"],
//         explanation: "A Customer 360 data model provides a unified view of interactions (a), improves customer service through more complete information (c), and enables targeted marketing (d). It typically doesn't reduce storage costs and actually increases the need for data governance.",
//         multiSelect: true
//     }
//     // Users can add more questions here in the same format
// ];

// Export the quiz data
export { quizData };