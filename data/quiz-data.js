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

const quizData = [
    {
        question: "Which relationship type should be used to model a many-to-many relationship between two standard objects in Salesforce, requiring a custom junction object?",
        answers: {
            a: "Lookup Relationship",
            b: "Master-Detail Relationship",
            c: "Hierarchical Relationship",
            d: "Two Master-Detail Relationships on the Junction Object"
        },
        correctAnswer: "d",
        explanation: "A junction object with two Master-Detail relationships is the proper way to implement a many-to-many relationship in Salesforce. Each Master-Detail relationship links the junction to one of the two 'master' objects.",
        multiSelect: false
    },
    {
        question: "When designing a data model for Large Data Volumes (LDV), which factors are MOST critical to consider for performance? (Select all that apply)",
        answers: {
            a: "Number of formula fields on the object",
            b: "Use of standard vs. custom fields",
            c: "Selectivity of filters used in queries and reports",
            d: "Indexing strategy for frequently queried fields"
        },
        correctAnswer: ["c", "d"],
        explanation: "For Large Data Volume performance, selective queries (c) are critical to prevent full table scans, while proper indexing (d) ensures that the database can efficiently locate records.",
        multiSelect: true
    },
    {
        question: "What is the primary purpose of an External ID field in Salesforce?",
        answers: {
            a: "To enforce unique values across the organization",
            b: "To store sensitive data securely",
            c: "To act as a unique identifier for records when integrating with external systems",
            d: "To create a relationship between two objects"
        },
        correctAnswer: "c",
        explanation: "External ID fields are used as unique identifiers for records when integrating with external systems, particularly for upsert operations and matching records from other systems.",
        multiSelect: false
    },
    {
        question: "In a Master-Detail relationship, what happens to detail records when the master record is deleted?",
        answers: {
            a: "Detail records are automatically deleted (cascade delete).",
            b: "Detail records become orphaned and need manual cleanup.",
            c: "The lookup field on the detail records is cleared.",
            d: "An error prevents the deletion of the master record if detail records exist."
        },
        correctAnswer: "a",
        explanation: "In a Master-Detail relationship, when a master record is deleted, all associated detail records are automatically deleted as well. This is known as cascade deletion.",
        multiSelect: false
    },
    {
        question: "Which Salesforce features allow controlling record access based on criteria? (Select all that apply)",
        answers: {
            a: "Organization-Wide Defaults (OWD)",
            b: "Role Hierarchy",
            c: "Criteria-Based Sharing Rules",
            d: "Ownership-Based Sharing Rules"
        },
        correctAnswer: ["c", "d"],
        explanation: "Criteria-Based Sharing Rules extend access beyond OWD based on record attributes, while Ownership-Based Sharing Rules can grant access based on the record owner's role, group, or territory.",
        multiSelect: true
    },
    {
        question: "When dealing with data skew (e.g., one Account owning millions of Contacts), which performance issues are most likely? (Select all that apply)",
        answers: {
            a: "Problems running reports on the parent object (Account).",
            b: "Record locking contention when updating child records (Contacts) linked to the skewed parent.",
            c: "Difficulty creating new fields on the child object.",
            d: "Apex governor limit errors related to SOQL query rows."
        },
        correctAnswer: ["b", "d"],
        explanation: "Data skew causes record locking contention when updating child records (b) and can lead to hitting governor limits in Apex due to retrieving too many related records (d).",
        multiSelect: true
    },
    {
        question: "What are the key benefits of using Schema Builder in Salesforce? (Select all that apply)",
        answers: {
            a: "Visual representation of objects and their relationships",
            b: "Ability to create and modify objects, fields, and relationships graphically",
            c: "Automated data cleansing and deduplication",
            d: "Performance testing of complex queries",
            e: "View of field dependencies and relationships"
        },
        correctAnswer: ["a", "b", "e"],
        explanation: "Schema Builder provides a visual representation of objects (a), allows creating and modifying fields/relationships graphically (b), and shows field dependencies and relationships (e). It doesn't handle data cleansing or performance testing.",
        multiSelect: true
    },
    {
        question: "When implementing a GDPR-compliant data model in Salesforce, which approach is most appropriate for handling customer deletion requests?",
        answers: {
            a: "Create a flag field to mark records as deleted but keep the data",
            b: "Implement a hard delete process using the Recycle Bin",
            c: "Use Data Retention Policies and Field Encryption",
            d: "Implement custom code to anonymize sensitive fields rather than deleting records"
        },
        correctAnswer: "d",
        explanation: "For GDPR compliance, anonymization of sensitive fields (d) is often preferred as it preserves system integrity while protecting personal data. Hard deletes can impact referential integrity, and simply flagging records doesn't remove the personal data as required.",
        multiSelect: false
    },
    {
        question: "Which statement about Big Objects in Salesforce is correct?",
        answers: {
            a: "Big Objects support all standard relationship types found in standard objects",
            b: "Big Objects are ideal for storing data that needs to be regularly updated",
            c: "Big Objects can store massive amounts of data and are optimized for data archival",
            d: "Big Objects support workflow rules and process builder automation"
        },
        correctAnswer: "c",
        explanation: "Big Objects are designed specifically to store massive amounts of data and are optimized for data archival (c). They don't support standard relationships, aren't ideal for frequently updated data, and don't work with workflow rules or process builder.",
        multiSelect: false
    },
    {
        question: "Which techniques should be considered when designing a scalable data model for Large Data Volumes (LDV) in Salesforce? (Select all that apply)",
        answers: {
            a: "Strategic use of indexed fields for frequently filtered queries",
            b: "Selective use of roll-up summary fields",
            c: "Extensive use of formula fields that reference multiple objects",
            d: "Implementation of skinny tables for reporting purposes",
            e: "Creating multiple master-detail relationships on objects with millions of records"
        },
        correctAnswer: ["a", "b", "d"],
        explanation: "For LDV performance, strategic indexing (a), selective use of roll-up fields (b), and skinny tables (d) are recommended. Extensive formula fields spanning objects and multiple master-detail relationships can cause performance issues with large volumes.",
        multiSelect: true
    },
    {
        question: "Which master data management (MDM) implementation style is most appropriate when you need to create a comprehensive, authoritative source of truth that other systems must conform to?",
        answers: {
            a: "Registry style",
            b: "Coexistence style",
            c: "Centralized style",
            d: "Hybrid style"
        },
        correctAnswer: "c",
        explanation: "The centralized MDM style creates a definitive master repository that serves as the system of record and source of truth, with all other systems conforming to its data definitions and structures.",
        multiSelect: false
    },
    {
        question: "What are valid approaches for handling duplicate data when establishing a 'golden record' in Salesforce? (Select all that apply)",
        answers: {
            a: "Using Duplicate Management rules and matching rules",
            b: "Implementing survivorship rules based on data source reliability",
            c: "Applying weighted scoring to determine which attributes survive",
            d: "Automatically keeping the most recently modified record",
            e: "Storing all duplicates in a custom object for future reference"
        },
        correctAnswer: ["a", "b", "c"],
        explanation: "Establishing a golden record typically involves duplicate management rules (a), survivorship rules based on source reliability (b), and weighted scoring systems (c). Simply keeping the latest record or storing all duplicates doesn't create a proper golden record.",
        multiSelect: true
    },
    {
        question: "Which field type in Salesforce is most appropriate for storing sensitive personal information that requires encryption at rest?",
        answers: {
            a: "Text Encrypted field",
            b: "Protected Text field",
            c: "Rich Text Area field with masking",
            d: "Text field with Shield Platform Encryption"
        },
        correctAnswer: "d",
        explanation: "Text fields with Shield Platform Encryption provide encryption at rest for sensitive personal information, supporting GDPR and other privacy requirements. The other options mentioned either don't exist or don't provide proper encryption at rest.",
        multiSelect: false
    },
    {
        question: "What are the benefits of implementing a canonical data model in a multi-system Salesforce integration landscape? (Select all that apply)",
        answers: {
            a: "Reduced point-to-point mappings between systems",
            b: "Standardized data definitions across the enterprise",
            c: "Elimination of the need for data transformation",
            d: "Simplified addition of new systems to the integration landscape",
            e: "Automatic data quality validation"
        },
        correctAnswer: ["a", "b", "d"],
        explanation: "A canonical model provides reduced point-to-point mappings (a), standardized data definitions (b), and simpler integration of new systems (d). It doesn't eliminate transformation needs or automatically validate data quality.",
        multiSelect: true
    },
    {
        question: "When designing a data model for Salesforce with Large Data Volumes (LDV), which approach helps mitigate performance issues related to sharing calculations?",
        answers: {
            a: "Increasing the number of sharing rules",
            b: "Using Private organization-wide defaults with selective sharing",
            c: "Setting organization-wide defaults to Public Read/Write",
            d: "Creating multiple roles for each user"
        },
        correctAnswer: "b",
        explanation: "Using Private OWDs with selective sharing (b) minimizes the sharing calculation load. Increasing sharing rules or roles increases calculation complexity, and completely public OWDs may create security issues.",
        multiSelect: false
    },
    {
        question: "Which methods are appropriate for virtualizing data in Salesforce? (Select all that apply)",
        answers: {
            a: "External Objects with OData",
            b: "Lightning Connect",
            c: "Salesforce Connect",
            d: "Custom Web Services",
            e: "Salesforce to Salesforce"
        },
        correctAnswer: ["a", "c", "e"],
        explanation: "Data virtualization in Salesforce can be achieved through External Objects with OData (a), Salesforce Connect (c), and Salesforce to Salesforce (e). Lightning Connect is now called Salesforce Connect, and custom web services alone don't provide virtualization.",
        multiSelect: true
    },
    {
        question: "Which statement about Platform Events in Salesforce is correct?",
        answers: {
            a: "Platform Events are stored permanently in Salesforce for auditing purposes",
            b: "Platform Events enable real-time, event-driven integrations",
            c: "Platform Events can trigger workflow rules but not process builder flows",
            d: "Platform Events are limited to internal Salesforce use only"
        },
        correctAnswer: "b",
        explanation: "Platform Events enable real-time, event-driven integrations (b). They aren't stored permanently, can trigger flows but not workflow rules, and can be used with external systems, not just internally.",
        multiSelect: false
    },
    {
        question: "What are the most effective approaches for improving data quality during a migration to Salesforce? (Select all that apply)",
        answers: {
            a: "Implementing field-level validation rules",
            b: "Using Data Loader's built-in cleansing features",
            c: "Performing data profiling before migration",
            d: "Setting up duplicate management rules",
            e: "Conducting data standardization and normalization"
        },
        correctAnswer: ["a", "c", "e"],
        explanation: "Data quality is improved through validation rules (a), pre-migration data profiling (c), and data standardization/normalization (e). Data Loader doesn't have built-in cleansing, and duplicate rules help prevent rather than fix data issues.",
        multiSelect: true
    },
    {
        question: "Which is the most appropriate approach for archiving transactional data that must remain accessible for occasional reporting but doesn't need real-time access?",
        answers: {
            a: "Use standard Salesforce objects with field history tracking",
            b: "Implement a Big Object solution with an appropriate index",
            c: "Store data in external systems accessible via Salesforce Connect",
            d: "Create a separate Salesforce sandbox for archived data"
        },
        correctAnswer: "b",
        explanation: "Big Objects (b) are designed specifically for this scenario - archiving large volumes of data that need occasional access but not real-time processing, while maintaining the data within the Salesforce platform.",
        multiSelect: false
    },
    {
        question: "When designing a multi-org strategy in Salesforce, what are appropriate techniques for maintaining customer data consistency? (Select all that apply)",
        answers: {
            a: "Implementing Salesforce to Salesforce connections",
            b: "Using an Enterprise Service Bus (ESB) for synchronization",
            c: "Creating a dedicated master data management (MDM) hub",
            d: "Maintaining duplicate data in all orgs for redundancy",
            e: "Using cross-org Change Data Capture"
        },
        correctAnswer: ["a", "b", "c"],
        explanation: "Customer data consistency across orgs can be maintained using Salesforce to Salesforce (a), an ESB for synchronization (b), and a dedicated MDM hub (c). Maintaining duplicates isn't a consistency strategy, and Change Data Capture has limited cross-org capabilities.",
        multiSelect: true
    },
    {
        question: "What Salesforce license type would be most appropriate for an employee who needs to view but not modify customer data and run standard reports?",
        answers: {
            a: "Salesforce Platform License",
            b: "Salesforce Chatter Only License",
            c: "Lightning Platform Starter License",
            d: "Salesforce Platform Read Only License"
        },
        correctAnswer: "d",
        explanation: "The Salesforce Platform Read Only License is specifically designed for users who need to view data and run reports but do not need to modify data, making it the most cost-effective option for this scenario.",
        multiSelect: false
    },
    {
        question: "What are valid approaches for improving performance when migrating Large Data Volumes (LDV) into Salesforce? (Select all that apply)",
        answers: {
            a: "Temporarily disabling triggers, workflows, and validation rules during migration",
            b: "Using Bulk API rather than SOAP API",
            c: "Loading data in ascending order of primary keys",
            d: "Creating all the relationships after loading the primary data",
            e: "Increasing batch sizes to maximum allowed values"
        },
        correctAnswer: ["a", "b", "d"],
        explanation: "Performance during LDV migration is improved by temporarily disabling automation (a), using Bulk API (b), and creating relationships after primary data load (d). Loading in ascending order has minimal impact, and larger batch sizes can actually reduce performance by causing timeouts.",
        multiSelect: true
    },
    {
        question: "Which Salesforce feature allows implementing type 2 Slowly Changing Dimensions (SCD) to track historical changes to master data?",
        answers: {
            a: "Field History Tracking",
            b: "Change Data Capture",
            c: "Field Audit Trail",
            d: "Big Object with custom timestamps"
        },
        correctAnswer: "a",
        explanation: "Field History Tracking provides the ability to track changes to field values over time, creating a historical record that supports type 2 Slowly Changing Dimensions for master data in Salesforce.",
        multiSelect: false
    },
    {
        question: "Which data export techniques in Salesforce are best suited for regularly scheduled, automated data extracts? (Select all that apply)",
        answers: {
            a: "Data Export Service",
            b: "Data Loader Command Line",
            c: "Report Export API",
            d: "Dataloader.io scheduled jobs",
            e: "Manual CSV downloads from list views"
        },
        correctAnswer: ["a", "b", "d"],
        explanation: "Automated, scheduled data extracts can be performed using Data Export Service (a), Data Loader Command Line with scheduling (b), and third-party tools like dataloader.io with scheduling capabilities (d). Report API and manual CSV downloads don't support automated scheduling.",
        multiSelect: true
    },
    {
        question: "What is the primary advantage of using External Objects versus standard Custom Objects in Salesforce?",
        answers: {
            a: "External Objects have better performance for high-volume transactions",
            b: "External Objects allow real-time access to data residing outside Salesforce",
            c: "External Objects support more field types than Custom Objects",
            d: "External Objects provide enhanced security features"
        },
        correctAnswer: "b",
        explanation: "The primary advantage of External Objects is that they allow real-time access to data residing outside Salesforce without copying that data into Salesforce storage, creating a virtualization layer.",
        multiSelect: false
    },
    {
        question: "Which features are important components of a comprehensive data governance program in Salesforce? (Select all that apply)",
        answers: {
            a: "Established data quality metrics and monitoring",
            b: "Documented data dictionary and business glossary",
            c: "Data stewardship roles and responsibilities",
            d: "Automatic data cleansing processes",
            e: "External system integration documentation"
        },
        correctAnswer: ["a", "b", "c"],
        explanation: "A comprehensive data governance program includes data quality metrics (a), data dictionaries and glossaries (b), and defined data stewardship roles (c). Automatic cleansing is a tool, not a governance component, and integration docs are important but not core governance components.",
        multiSelect: true
    },
    {
        question: "When consolidating customer data from multiple sources, which criteria should be used to determine the winning attribute values? (Select all that apply)",
        answers: {
            a: "Source system reliability rankings",
            b: "Timestamp of data creation or modification",
            c: "Completeness of the attribute value",
            d: "User preference settings",
            e: "Hierarchical authority of the data source"
        },
        correctAnswer: ["a", "b", "c"],
        explanation: "When determining winning attributes during consolidation, valid criteria include source system reliability (a), data freshness via timestamps (b), and data completeness (c). User preferences and arbitrary hierarchical rankings are less reliable determinants of data quality.",
        multiSelect: true
    },
    {
        question: "What is the primary limitation of using roll-up summary fields in a Large Data Volume (LDV) context?",
        answers: {
            a: "They don't support custom summary formulas",
            b: "They can cause lock contention during record updates",
            c: "They require sharing rule recalculation",
            d: "They're limited to 10 per object"
        },
        correctAnswer: "b",
        explanation: "In LDV contexts, roll-up summary fields can cause significant lock contention during record updates, as updating a child record requires an exclusive lock on both the child and parent records, potentially causing performance issues.",
        multiSelect: false
    },
    {
        question: "Which statements about data classification in Salesforce are correct? (Select all that apply)",
        answers: {
            a: "It's a prerequisite for implementing Shield Platform Encryption",
            b: "It helps identify fields containing sensitive or personal information",
            c: "Salesforce automatically classifies all custom fields during creation",
            d: "It's required for GDPR compliance",
            e: "It supports automated enforcement of retention policies"
        },
        correctAnswer: ["b", "d"],
        explanation: "Data classification helps identify sensitive/personal information fields (b) and is required for GDPR compliance (d). It's not a prerequisite for Shield Encryption, Salesforce doesn't auto-classify fields, and classification alone doesn't enforce retention policies.",
        multiSelect: true
    },
    {
        question: "What benefits does a proper data lineage implementation provide to a Salesforce organization? (Select all that apply)",
        answers: {
            a: "Impact analysis for potential changes",
            b: "Compliance with regulatory requirements",
            c: "Traceability of data from origin to consumption",
            d: "Automatic correction of data quality issues",
            e: "Reduced storage costs"
        },
        correctAnswer: ["a", "b", "c"],
        explanation: "Data lineage provides impact analysis for changes (a), supports regulatory compliance (b), and enables traceability from origin to consumption (c). It doesn't automatically correct quality issues or reduce storage costs.",
        multiSelect: true
    },
    {
        question: "Which approach is most appropriate for managing hierarchical data in Salesforce?",
        answers: {
            a: "Using the standard Parent-Child relationship field",
            b: "Creating a custom self-relationship lookup field",
            c: "Implementing a junction object pattern",
            d: "Using the Path Assistant feature"
        },
        correctAnswer: "b",
        explanation: "For managing hierarchical data (like employees to managers, or category hierarchies), creating a custom self-relationship lookup field on the object that references the same object is the most appropriate pattern in Salesforce.",
        multiSelect: false
    },
    {
        question: "When implementing data quality controls for an integration, which approaches are most effective? (Select all that apply)",
        answers: {
            a: "Implementing validation rules in Salesforce",
            b: "Using middleware for data transformation and validation",
            c: "Relying on users to correct errors manually",
            d: "Creating error handling and notification processes",
            e: "Implementing matching rules in Salesforce"
        },
        correctAnswer: ["a", "b", "d"],
        explanation: "Effective data quality controls for integrations include validation rules (a), middleware validation/transformation (b), and error handling processes (d). Relying on manual correction isn't systematic, and matching rules are for duplicate management, not general quality control.",
        multiSelect: true
    },
    {
        question: "Which statement about Skinny Tables in Salesforce is correct?",
        answers: {
            a: "They are automatically created for all custom objects",
            b: "They contain a subset of fields from the main tables to optimize reporting performance",
            c: "They allow storage of data beyond standard object limits",
            d: "They require purchasing additional storage licenses"
        },
        correctAnswer: "b",
        explanation: "Skinny Tables contain a subset of fields from main tables specifically to optimize reporting performance by creating a streamlined copy that includes only the most frequently used fields.",
        multiSelect: false
    },
    {
        question: "What are valid benefits of implementing a Customer 360 data model in Salesforce? (Select all that apply)",
        answers: {
            a: "Creating a unified view of customer interactions across channels",
            b: "Reducing data storage costs",
            c: "Improving customer service through more complete information",
            d: "Enabling more targeted marketing and personalization",
            e: "Eliminating the need for data governance"
        },
        correctAnswer: ["a", "c", "d"],
        explanation: "A Customer 360 data model provides a unified view of interactions (a), improves customer service through more complete information (c), and enables targeted marketing (d). It typically doesn't reduce storage costs and actually increases the need for data governance.",
        multiSelect: true
    }
    // Users can add more questions here in the same format
];

// Export the quiz data
export { quizData };