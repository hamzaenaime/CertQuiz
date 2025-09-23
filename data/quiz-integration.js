const quizData = [
    {
        "question": "Service Agents at Northern Trail Outfitters use Salesforce to manage cases and B2C Commerce for ordering. Which integration solution should an architect recommend in order for the service agents to see order history from a B2C Commerce system? ",
        "answers": {
            "a": "Salesforce B2C Commerce to Service Cloud Connector ",
            "b": "A REST API offered by Commerce Platform ",
            "c": "Mulesoft Anypoint Platform ",
            "d": "REST API offered by Salesforce Platform "
        },
        "correctAnswer": "a",
        "explanation": "The Salesforce B2C Commerce to Service Cloud Connector is a pre-built, managed solution designed specifically for this use case. It provides the quickest and most reliable way for service agents to view B2C Commerce order history directly within the Service Cloud console without requiring complex custom development.",
        "multiSelect": false
    },
    {
        "question": "Northern Trail Outfitters needs to use Shield Platform Encryption to encrypt social security numbers in order to meet a business requirement. Which two considerations should an Integration Architect do prior to the implementation of Shield Platform Encryption? ",
        "answers": {
            "a": "Review shield platform encryption configurations. ",
            "b": "Use Shield Platform Encryption as a user authentication or authorization tool. ",
            "c": "Encrypt the data using the most current key. ",
            "d": "Encrypt all the data so that it is secure. "
        },
        "correctAnswer": ["a", "c"],
        "explanation": "Before implementing Shield, it's crucial to review its configurations (A) to understand the impact on features like SOQL filtering, reporting, and search. Additionally, establishing a robust key management strategy, which includes using the most current key for encryption and planning for key rotation (C), is a fundamental prerequisite for a secure implementation.",
        "multiSelect": true
    },
    {
        "question": "Universal Containers (UC) is a global financial company where support agents need to execute credit checks for customers through external agencies during an account opening process. Up to 30 concurrent agents will be using the service. What error handling mechanism should be built to display an error to the agent when the credit verification process fails? ",
        "answers": {
            "a": "In case the verification process is down, Use mock service to send the response to the agent. ",
            "b": "Handle integration errors in the middleware; in case the verification process is down, then the middleware should retry processing the request multiple times. ",
            "c": "Handle verification process error in the Verification Webservice API in case there is a connection issue to the Webservice if it responds with an error. ",
            "d": "In case the verification process is down, use fire and forget mechanism instead of request and reply to allow the agent to get the response back when the service is back online. "
        },
        "correctAnswer": "c",
        "explanation": "This is a synchronous, user-facing process where the agent needs immediate feedback. The correct approach is for the calling system to handle errors directly. If the external webservice is unavailable or returns an error, the API call handler should catch that exception or error response and immediately display a clear message to the agent in the UI.",
        "multiSelect": false
    },
    {
        "question": "A business needs to automate checking the phone number type (mobile vs. landline) for up to 100,000 incoming calls per day using an external API. The updates can happen in batches overnight. A Remote-Call-In pattern with a middleware is the chosen architecture. Which component should an architect recommend to implement this? ",
        "answers": {
            "a": "Configure Remote Site Settings in Salesforce to authenticate the middleware. ",
            "b": "Firewall and reverse proxy are required to protect internal APIs and resource being exposed. ",
            "c": "Connected App configured in Salesforce to authenticate the middleware. ",
            "d": "An API Gateway that authenticates requests from Salesforce into the Middleware (ETL/ESB). "
        },
        "correctAnswer": "c",
        "explanation": "The 'Remote Call-In' pattern means the external middleware system is calling *into* Salesforce to update records. The standard and most secure method to authenticate an external application for Salesforce API access is to create a Connected App. The middleware can then use an OAuth 2.0 flow to obtain an access token and securely make its API calls.",
        "multiSelect": false
    },
    {
        "question": "A large B2C customer is implementing Salesforce with the goals of achieving a 360-degree customer view and leveraging Salesforce for Marketing, Sales, and Service processes. They intend to reuse their existing Quoting and Order Management systems. Based on the provided system landscape, which three systems can be retired? ",
        "answers": {
            "a": "Sales Activity System ",
            "b": "Order Management System ",
            "c": "Quoting System ",
            "d": "Case Management System ",
            "e": "Email Marketing System "
        },
        "correctAnswer": ["a", "d", "e"],
        "explanation": "The goals explicitly state an intent to use Salesforce for Sales, Service, and Marketing. Therefore, Salesforce Sales Cloud can replace the 'Sales Activity System', Service Cloud can replace the 'Case Management System', and Marketing Cloud can replace the 'Email Marketing System'. The goals also explicitly state that the Quoting and Order Management systems will be reused.",
        "multiSelect": true
    },
    {
        "question": "Northern Trail Outfitters needs to make synchronous callouts to an 'available to promise' service to query product availability during customer checkout. Which two considerations are most important for building a scalable integration solution? ",
        "answers": {
            "a": "How many concurrent service calls are being placed. ",
            "b": "The typical and worst-case historical response times. ",
            "c": "The number of batch jobs that can run concurrently. ",
            "d": "The maximum query cursors open per user on the service. "
        },
        "correctAnswer": ["a", "b"],
        "explanation": "For a synchronous callout in a user-facing process, performance and reliability are key. An architect must understand the number of concurrent calls (A) to ensure the system can handle peak load, and the response time (B) to prevent hitting Salesforce governor limits and ensure a good user experience.",
        "multiSelect": true
    },
    {
        "question": "Which three considerations should an Integration Architect consider when recommending Platform Events as an integration solution? ",
        "answers": {
            "a": "When you delete an event definition, it's permanently removed and can't be restored. ",
            "b": "Inability to query event messages using SOQL. ",
            "c": "Inability to create a Lightning record page for platform events. ",
            "d": "You can use Event Monitoring to track user activity, such as logins and running reports. ",
            "e": "Subscribe to an AssetToken Event stream to monitor OAuth 2.0 authentication activity. "
        },
        "correctAnswer": ["a", "b", "c"],
        "explanation": "When working with Platform Events, it is crucial to know their specific characteristics. Deleting an event definition is a permanent action (A). Unlike sObjects, past event messages cannot be queried with SOQL (B). Also, since they are not records in the traditional sense, they do not have layouts or Lightning record pages (C).",
        "multiSelect": true
    },
    {
        "question": "Northern Trail Outfitters uses a custom Java application to display code coverage and test results for all of its enterprise applications and wants to include Salesforce data. Which Salesforce API should an Integration Architect use to meet this requirement? ",
        "answers": {
            "a": "SOAP API",
            "b": "Analytics REST API ",
            "c": "Metadata API ",
            "d": "Tooling API "
        },
        "correctAnswer": "d",
        "explanation": "The Tooling API is specifically designed for building development and deployment tools. It provides access to development-related metadata and information, including objects like `ApexCodeCoverage` and `ApexTestResult`, which are required to get code coverage and test result data.",
        "multiSelect": false
    },
    {
        "question": "Universal Containers needs to send a meeting invite from their marketing automation system to contacts of accounts that do not qualify for a business extension. This process will affect approximately 1 million contacts per month. What is the recommended solution? ",
        "answers": {
            "a": "Use Trigger. ",
            "b": "Use Batch Apex. ",
            "c": "Use Time-based workflow rule. ",
            "d": "Use Process builder. "
        },
        "correctAnswer": "b",
        "explanation": "Processing 1 million records and making external callouts requires a solution that can handle large data volumes without hitting governor limits. Batch Apex is the ideal Salesforce feature for this, as it processes records in manageable chunks, allowing for stateful operations and callouts within each chunk.",
        "multiSelect": false
    },
    {
        "question": "Universal Containers uses a three-tier API-led architecture. There is a business requirement to return data to different systems of engagement (e.g., web, mobile) in different formats and with different security protocols. What should an architect recommend? ",
        "answers": {
            "a": "Leverage an Identity Provider solution that communicates with the API tiers via SAML. ",
            "b": "Enforce separate security protocols and return formats at the first tier of the API-led architecture. ",
            "c": "Implement an API gateway that all systems of engagement must interface with first. ",
            "d": "Enforce separate security protocols and return formats at the second tier of the API-led architecture. "
        },
        "correctAnswer": "b",
        "explanation": "In an API-led architecture, the first tier is the 'Experience Layer'. Its purpose is to cater specifically to the needs of different front-end applications (systems of engagement). This layer is responsible for tasks like transforming data formats, orchestrating calls to process APIs, and applying channel-specific security policies.",
        "multiSelect": false
    },
    {
        "question": "An integration architect needs a Streaming API solution that minimizes data loss, even if the client reconnects after being offline for a couple of days. Which two types of Streaming API events should be considered? ",
        "answers": {
            "a": "Push Topic Events ",
            "b": "High Volume Platform Events ",
            "c": "Generic Events ",
            "d": "Change Data Capture Events "
        },
        "correctAnswer": ["b", "d"],
        "explanation": "Both High-Volume Platform Events and Change Data Capture Events support message retention for up to 72 hours (3 days). This allows a disconnected client to 'replay' the event stream from the last known replay ID, ensuring that any messages published during the downtime can be retrieved. PushTopic events only offer a 24-hour retention window.",
        "multiSelect": true
    },
    {
        "question": "Northern Trail Outfitters needs a low-code solution to send a near real-time notification to a middleware's REST endpoint when an Order record is created in Salesforce. Which two options will fulfill the requirements? ",
        "answers": {
            "a": "Use Remote Process Invocation fire and forget pattern on insert on the order object using Flow Builder. ",
            "b": "Use a process builder to create a Platform Event, selecting the record type as the Platform Event Name on insert of record. ",
            "c": "Implement a Workflow Rule with Outbound Messaging to send SOAP messages to the designated endpoint. ",
            "d": "Implement Change Data Capture on the order object and leverage the replay Id in the middleware solution. "
        },
        "correctAnswer": ["b", "d"],
        "explanation": "Both Platform Events and Change Data Capture provide modern, event-driven, near real-time integration patterns that are highly scalable and require low-to-no code. A Platform Event can be published from a Flow when an order is created (B). Alternatively, simply enabling Change Data Capture on the Order object (D) will automatically publish events for any record change. The middleware can then subscribe to either of these event streams.",
        "multiSelect": true
    },
    {
        "question": "Developers at Northern Trail Outfitters are creating numerous point-to-point integrations using asynchronous @future callouts. The CIO is concerned about the scalability of this approach. What should be recommended to mitigate these concerns? ",
        "answers": {
            "a": "Refactor the existing future methods to use Enhanced External Services, import Open API 2.0 schemas and update flows to use services instead of Apex. ",
            "b": "Implement an Enterprise Service Bus for service orchestration, mediation, routing and to decouple dependencies across systems. ",
            "c": "Implement an ETL tool and perform nightly batch data loads to reduce network traffic using last modified dates on the opportunity object to extract the right records. ",
            "d": "Develop a comprehensive catalog of Apex classes to eliminate the need for redundant code and use custom metadata to hold the endpoint information for each integration. "
        },
        "correctAnswer": "b",
        "explanation": "The current approach of direct, point-to-point integrations creates a brittle 'spaghetti architecture' that is difficult to manage and scale. The standard architectural solution is to introduce a middleware layer like an Enterprise Service Bus (ESB) or an integration platform. This creates a hub-and-spoke model, which decouples the systems and provides a central point for routing, transformation, and monitoring, making the entire landscape more scalable and maintainable.",
        "multiSelect": false
    },
    {
        "question": "While merging two Salesforce orgs, Northern Trail Outfitters needs to keep the old org active for a short time to capture leads from web forms. New leads must appear in the new org within 30 minutes. Which two approaches require the least development effort for this org-to-org integration? ",
        "answers": {
            "a": "Call the Salesforce REST API to insert the lead into the target system. ",
            "b": "Configure named credentials in the source org. ",
            "c": "Use the tooling API with Process Builder to insert leads in real time. ",
            "d": "Use the Composite REST API to aggregate multiple leads in a single call. "
        },
        "correctAnswer": ["a", "b"],
        "explanation": "This requires an outbound callout from the source org to the target org. The best practice is to configure a Named Credential (B) in the source org to securely handle the authentication and endpoint URL for the target org. The Apex code in the source org would then make a callout to the standard Salesforce REST API (A) on the target org to create the new Lead record. These two components form the core of a standard, low-effort org-to-org integration.",
        "multiSelect": true
    },
    {
        "question": "Northern Trail Outfitters is planning to create a native employee-facing mobile app that has the look and feel of Salesforce's Lightning Experience and integrates with their Salesforce org. Which Salesforce API should be used? ",
        "answers": {
            "a": "REST API ",
            "b": "Connect REST API ",
            "c": "Streaming API ",
            "d": "User Interface API "
        },
        "correctAnswer": "d",
        "explanation": "The User Interface (UI) API is specifically designed for this use case. It provides data and metadata in a single response, structured according to Salesforce layouts and respecting user permissions (field-level security, sharing). This allows a developer to build a custom front-end that mirrors the Lightning Experience without having to re-implement the complex UI metadata logic.",
        "multiSelect": false
    },
    {
        "question": "Salesforce users need to read data from an external system via an HTTPS request. Which two security methods should an integration architect leverage within Salesforce to secure this outbound integration? ",
        "answers": {
            "a": "Named Credentials ",
            "b": "Authorization Provider ",
            "c": "Two way SSL ",
            "d": "Connected App "
        },
        "correctAnswer": ["a", "c"],
        "explanation": "For outbound HTTPS requests (callouts), Named Credentials (A) are the best practice for securely storing the endpoint URL and authentication parameters, abstracting them from code. For a higher level of security, Two-way SSL (also known as mutual authentication) (C) can be implemented. This requires Salesforce to present its unique client certificate to the external system, which can then verify that the request is coming from a trusted source.",
        "multiSelect": true
    },
    {
        "question": "A global company is implementing Salesforce and has complex authentication requirements for different user types (internal via local AD, customers via Google/native, partners via a central system). Which three areas should the integration architect evaluate when designing the solution? ",
        "answers": {
            "a": "Evaluate Salesforce solution for customers and for partners, using third party solution for internal users. ",
            "b": "Assess security requirements for internal systems and decide Integration methods that support the requirements. ",
            "c": "Consider Third party Single Sign On solution supporting all user authentication including customer and partner. ",
            "d": "Evaluate Salesforce native authentication mechanism for all users including customers and partners. ",
            "e": "Evaluate the build of a custom authentication mechanism for users in each country and support for customers and partners. "
        },
        "correctAnswer": ["a", "b", "c"],
        "explanation": "Given the diverse requirements, the architect must perform a thorough evaluation. This includes assessing a hybrid approach using Salesforce Community identity for externals and a federated SSO solution for internals (A), analyzing the security needs of all integrated systems to choose appropriate patterns (B), and considering a central third-party Identity Provider (like Okta, Azure AD) as a strategic option to manage identity for all user populations (C).",
        "multiSelect": true
    },
    {
        "question": "Northern Trail Outfitters needs to integrate three external systems for nightly data enrichment. The solution must follow the principle of least privilege and ensure all activities can be audited. What should the architect recommend? ",
        "answers": {
            "a": "A shared Connected App for the three external system integrations. ",
            "b": "A shared integration user for the three external system integrations. ",
            "c": "A unique integration user for each external system integration. ",
            "d": "A Connected App for each external system integration. "
        },
        "correctAnswer": "c",
        "explanation": "To meet both least privilege and auditing requirements, each external system needs a distinct identity. The best practice is to create a unique integration user for each system. This allows for assigning a tailored Profile and Permission Set with only the necessary permissions (least privilege). Furthermore, any records created or modified by that system will be stamped with that unique user's ID in fields like `CreatedById`, enabling a clear audit trail.",
        "multiSelect": false
    },
    {
        "question": "Northern Trail Outfitters wants to automatically post a Chatter item to Twitter whenever the post includes the hashtag #thanksNTO. Which API should be used to interact with the Chatter feeds? ",
        "answers": {
            "a": "Streaming API ",
            "b": "REST API ",
            "c": "Connect REST API ",
            "d": "Apex REST "
        },
        "correctAnswer": "c",
        "explanation": "The Connect REST API is specifically designed for building applications that interact with Salesforce's social and collaborative features, including Chatter, files, communities, and recommendations. It provides a rich set of resources for working with feeds, comments, and users, making it the ideal choice for this use case.",
        "multiSelect": false
    },
    {
        "question": "In the provided sequence diagram, which computation represents the end-to-end response time from the user's perspective, defined as the time from the initial click to the final UI render? ",
        "answers": {
            "a": "Sum of A, G, and H",
            "b": "Sum of A to F ",
            "c": "Sum of A to H ",
            "d": "Sum of A and H "
        },
        "correctAnswer": "d",
        "explanation": "The user's perceived response time starts with their action (1: onClick) and ends when the result is displayed (3: render). The duration 'A' represents the time taken for all synchronous processing, including the calls to middleware and backend systems. The process 'G' runs asynchronously and does not block the UI. After the synchronous data is returned at step 2.4, the UI takes duration 'H' to render it. Therefore, the total time the user waits is the sum of the synchronous processing time (A) and the rendering time (H).",
        "multiSelect": false
    },
    {
        "question": "Universal Containers needs to allow third-party agencies to view 2.5 GB design files, currently stored on-premise, within a Salesforce community. Which solution should an integration architect recommend? ",
        "answers": {
            "a": "Create a lightning component with a Request and Reply integration pattern to allow the community users to download the design files. ",
            "b": "Define an External Data Source and use Salesforce Connect to upload the files to an external object. Link the external object using Indirect lookup. ",
            "c": "Create a custom object to store the file location URL, when community user clicks on the file URL, redirect the user to the on-prem system file location. ",
            "d": "Use Salesforce Files to link the files to Salesforce records and display the record and the files in the community. "
        },
        "correctAnswer": "c",
        "explanation": "The 2.5 GB file size exceeds the 2 GB limit for Salesforce Files, so the file cannot be stored directly in Salesforce. The most practical solution is to leave the large file in its on-premise location. By creating a Salesforce record that stores the URL to the file, community users can simply click a link that redirects them to the on-premise system to view or download it. This approach, known as 'data virtualization' for files, avoids data duplication and respects platform limits.",
        "multiSelect": false
    },
    {
        "question": "What should an Architect recommend to ensure all integrations to the Northern Trail Outfitters company portal use SSL mutual authentication? ",
        "answers": {
            "a": "Enable My Domain and SSL/TLS. ",
            "b": "Enforce SSL/TLS Mutual Authentication. ",
            "c": "Generate a Self-signed Certificate. ",
            "d": "Generate a CA-signed Certificate. "
        },
        "correctAnswer": "b",
        "explanation": "While generating and uploading a certificate is part of the process, the specific setting that enforces the requirement is the 'Enforce SSL/TLS Mutual Authentication' user permission. When this permission is assigned to an API integration user, Salesforce will reject any login attempt from that user that does not present the required client certificate, thus enforcing mutual authentication.",
        "multiSelect": false
    },
    {
        "question": "A company needs to push 2 million records daily from Salesforce to a system behind a corporate firewall. The integration does not need to be real-time. What is a key consideration for the integration architect? ",
        "answers": {
            "a": "Due to high volume of records, a third party integration tool is required to stage records off platform. ",
            "b": "Due to high volume of records, number of concurrent requests can hit the limit for the REST API call to external system. ",
            "c": "Due to high volume of records, salesforce will need to make a REST API call to external system. ",
            "d": "Due to high volume of records, the external system will need to use a BULK API Rest endpoint to connect to salesforce. "
        },
        "correctAnswer": "b",
        "explanation": "A daily push of 2 million records from Salesforce will likely be implemented using multiple Batch Apex jobs that make callouts. A critical Salesforce governor limit is the number of concurrent long-running Apex requests (which includes callouts). The architect must design the solution to manage and throttle the number of concurrent batches to avoid exceeding this limit, which would cause jobs to fail.",
        "multiSelect": false
    },
    {
        "question": "A healthcare company's policy states that identifiable patient prescription data must only exist in their secure external database. This data is exposed via RESTful services. Which two capabilities are required for their Salesforce Community Cloud portal (for viewing data) and Einstein Analytics (for analyzing de-identified data)? ",
        "answers": {
            "a": "Encryption in transit and at rest ",
            "b": "Bulk load for Einstein Analytics ",
            "c": "Identity token data storage ",
            "d": "Callouts to RESTful services "
        },
        "correctAnswer": ["b", "d"],
        "explanation": "Since identifiable data cannot be stored in Salesforce, the Community portal must make real-time callouts to the external RESTful services (D) to fetch and display the data on-demand (data virtualization). For Einstein Analytics, which uses de-identified data, the most efficient way to load this large, transformed dataset would be via a bulk load mechanism (B).",
        "multiSelect": false
    },
    {
        "question": "Universal Containers needs a near real-time feed of student registrations from Salesforce to an external learning system. The architect recommends using a Salesforce event. Which API should the external system use to subscribe to these events? ",
        "answers": {
            "a": "Tooling API ",
            "b": "SOAP API ",
            "c": "Streaming API ",
            "d": "REST API "
        },
        "correctAnswer": "c",
        "explanation": "The Streaming API is the Salesforce API that allows external clients to subscribe to event streams from the platform. The external learning system would use the Streaming API to maintain a connection to a specific event channel (for Platform Events, Change Data Capture, etc.) and receive notifications in near real-time as they are published by Salesforce.",
        "multiSelect": false
    },
    {
        "question": "A security assessment found secrets (passwords, tokens) stored in plain text for callouts from Salesforce. Which two persistence mechanisms should be used to protect these secrets from exposure? ",
        "answers": {
            "a": "Encrypted Custom Fields ",
            "b": "Named Credentials ",
            "c": "Protected Custom Metadata Types ",
            "d": "Protected Custom Settings "
        },
        "correctAnswer": ["b", "c"],
        "explanation": "Named Credentials (B) are the best practice for securely storing callout endpoints and authentication details, as they abstract the secrets from code and are encrypted at rest. For other secrets used within Apex that are not part of a direct callout (e.g., an API key for signing a request), Protected Custom Metadata Types (C) provide a secure storage mechanism, especially within managed packages, as they are not visible to subscribers.",
        "multiSelect": true
    },
    {
        "question": "A daily lead import is followed by a territory assignment process run by a legacy system. This integration has latency issues. Which two recommendations should an Architect make to improve the integration performance when using the Bulk API? ",
        "answers": {
            "a": "Reduce batch size of asynchronous BULK API. ",
            "b": "Legacy system should submit in parallel mode. ",
            "c": "Legacy system should submit in serial mode. ",
            "d": "Reduce batch size of synchronous BULK API. "
        },
        "correctAnswer": ["a", "b"],
        "explanation": "To maximize throughput with the Bulk API, the external system should submit its data batches in parallel mode (B), which allows Salesforce to process multiple batches concurrently. While it may seem counterintuitive, sometimes very large batches can cause database lock contention; reducing the batch size (A) can lead to faster processing for each individual batch, and when combined with parallel mode, can result in a higher overall throughput.",
        "multiSelect": true
    },
    {
        "question": "An application uses Platform Events to synchronize multiple systems. If events are currently only being published from an Apex transaction, what can be said about the timing of the publication? ",
        "answers": {
            "a": "The platform events are published immediately before the Apex transaction completes. ",
            "b": "The platform events are published after the Apex transaction completes. ",
            "c": "The platform events has a trigger in Apex. ",
            "d": "The platform events are being published from Apex. "
        },
        "correctAnswer": "b",
        "explanation": "Platform Event publication is tied to the success of the Apex transaction. When `EventBus.publish()` is called, the event is queued but not sent immediately. The platform only sends the event to the event bus *after* the entire transaction has successfully completed and been committed to the database. If the transaction rolls back, the event is never published.",
        "multiSelect": false
    },
    {
        "question": "A global financial company with a core banking system that processes 10M transactions per day wants to allow customers to view their financial transactions in a community portal. What solution should be recommended? ",
        "answers": {
            "a": "Use Salesforce External Service to display financial transactions in a community lightning page. ",
            "b": "Use Salesforce Connect to display the financial transactions as an external object. ",
            "c": "Use Iframe to display core banking financial transactions data in the customer community. ",
            "d": "Use Salesforce Connect to display the financial transactions as an external object. "
        },
        "correctAnswer": "b",
        "explanation": "This is a classic use case for Salesforce Connect. The volume of data is too high to replicate into Salesforce. Salesforce Connect allows you to define an External Object that provides a live, real-time connection to the data in the external system. Community users can view, search, and interact with the external object records as if they were native Salesforce data, but without storing the data in Salesforce.",
        "multiSelect": false
    },
    {
        "question": "Universal Containers is implementing Salesforce as their CRM, replacing separate systems for leads, contacts (in Outlook), and activities, while integrating with an existing ERP. What is the most important initial step for an Integration Consultant? ",
        "answers": {
            "a": "Explore Out of box Salesforce connectors for integration with ERP, Marketing and Microsoft Outlook systems. ",
            "b": "Propose a middleware system that can support interface between systems with Salesforce. ",
            "c": "Plan for migration of customer and sales data across systems on a regular basis to keep them in sync. ",
            "d": "Evaluate current and future data and system usage and then identify potential integration requirements to Salesforce. "
        },
        "correctAnswer": "d",
        "explanation": "Before proposing any specific technology or solution (like connectors or middleware), the foundational first step is a thorough discovery and analysis. The consultant must evaluate the existing systems, data flows, business processes, and future-state goals to properly identify and document the detailed integration requirements. This analysis forms the basis for all subsequent architectural and design decisions.",
        "multiSelect": false
    },
    {
        "question": "An Architect must integrate with an External Data Source via a Named Credential and an Apex callout due to technical constraints. How is authentication achieved? ",
        "answers": {
            "a": "Handle authentication with login flows. ",
            "b": "Handle authentication in the code. ",
            "c": "Connect via Salesforce Connect. ",
            "d": "Connect via Communities. "
        },
        "correctAnswer": "b",
        "explanation": "While a Named Credential typically handles authentication automatically, the phrase 'due to technical constraints' implies a non-standard scenario. For example, the external system might require a custom HMAC signature or a dynamically generated token. In such cases, the developer would use Apex code to construct the necessary authentication headers or parameters before making the callout, even while using the Named Credential to manage the base URL and other secrets.",
        "multiSelect": false
    },
    {
        "question": "Northern Trail Outfitters needs to perform a one-time load of 90 million records into Salesforce, and then extract 30 million records to an external system. What API strategy should be used to complete this within a day? ",
        "answers": {
            "a": "Insert using Bulk API 2.0 and query using REST API. ",
            "b": "Insert and query using Bulk API 1.0. ",
            "c": "Insert using Bulk API 1.0 and query using REST API. ",
            "d": "Insert and query using Bulk API 2.0. "
        },
        "correctAnswer": "d",
        "explanation": "For data volumes of this magnitude, the Bulk API is the only suitable choice for both loading and extracting data. Bulk API 2.0 is the modern, simplified version that automatically handles the creation and management of batches (chunking), making it easier to use than Bulk API 1.0. Using Bulk API 2.0 for both the insert and the query job is the most efficient and scalable approach.",
        "multiSelect": false
    },
    {
        "question": "A CIO wants recommendations for monitoring nightly Bulk API jobs that are run from a custom Java application. Which two recommendations are most appropriate? ",
        "answers": {
            "a": "Use the getBatchInfo method in the Java application to monitor the status of the jobs from the Java application. ",
            "b": "Write the error response from the Bulk API status to a custom error logging object in Salesforce using an Apex trigger and create reports on the object. ",
            "c": "Set the Salesforce debug logs level to 'finest' and add the user Id running the job to monitor in the 'Debug Logs' in the setup menu. ",
            "d": "Visually monitor in the Salesforce UI using the 'Bulk Data Load Jobs' page in the setup menu. "
        },
        "correctAnswer": ["a", "d"],
        "explanation": "A robust monitoring strategy should include both automated and manual methods. The Java application should be built to programmatically poll for the status of the jobs and batches it creates using the appropriate API calls (A), enabling automated logging and alerting. For manual inspection and high-level oversight by administrators, the built-in 'Bulk Data Load Jobs' page in Salesforce Setup provides a simple and effective user interface (D).",
        "multiSelect": true
    },

    {
        "question": "Northern Trail Outfitters needs to present shipping costs and estimated delivery times to their customers. Shipping services used vary by region, and have similar but distinct service request parameters. Which integration component capability should be used?",
        "answers": {
            "a": "Enterprise Service Bus to determine which shipping service to use, and transform requests to the necessary format.",
            "b": "Outbound Messaging to request costs and delivery times from Shipper delivery services with automated error retry.",
            "c": "APEX REST Service to implement routing logic to the various shipping service.",
            "d": "Enterprise Service Bus user interface to collect shipper-specific form data."
        },
        "correctAnswer": "a",
        "explanation": "Using an Enterprise Service Bus (ESB) is the best solution because it can provide routing, transformation, mediation, and orchestration capabilities for integrating different services. An ESB abstracts the complexity of the various shipping services from the main application, simplifying the integration.",
        "multiSelect": false
    },
    {
        "question": "Northern Trail Outfitters (NTO) uses different shipping services for each of the 34 countries it serves. Services are added and removed frequently to optimize shipping times and costs. Sales Representatives serve all NTO customers globally and need to select between valid service(s) for the customer's country and request shipping estimates from that service. Which two solutions should an architect propose?",
        "answers": {
            "a": "Use Platform Events to construct and publish shipper-specific events.",
            "b": "Invoke middleware service to retrieve valid shipping methods.",
            "c": "Use middleware to abstract the call to the specific shipping services.",
            "d": "Store shipping services in a picklist that is dependent on a country picklist."
        },
        "correctAnswer": [
            "b",
            "c"
        ],
        "explanation": "A middleware service can act as a single point of entry to retrieve valid shipping methods for a given country. It can also abstract the complexity of calling the specific shipping services, handling the different request/response formats and hiding the heterogeneity of the underlying systems from Salesforce.",
        "multiSelect": true
    },
    {
        "question": "An integration architect needs to build a solution that will be using the Streaming API, but the data loss should be minimized, even when the client re-connects every couple of days. Which two types of Streaming API events should be considered?",
        "answers": {
            "a": "Generic Events",
            "b": "Change Data Capture Events",
            "c": "Push Topic Events",
            "d": "High Volume Platform Events"
        },
        "correctAnswer": [
            "b",
            "d"
        ],
        "explanation": "Both Change Data Capture (CDC) Events and High Volume Platform Events support reliable event delivery. This means events are stored for up to 72 hours and can be replayed by subscribers using a replay ID if they disconnect, which minimizes data loss.",
        "multiSelect": true
    },
    {
        "question": "A company needs to integrate a legacy on premise application that can only support SOAP API. After the Integration Architect has evaluated the requirements and volume, they determined that the Fire and Forget integration pattern will be most appropriate for sending data from Salesforce to the external application and getting response back in a strongly typed format. Which integration capabilities should be used to integrate the two systems?",
        "answers": {
            "a": "Outbound Message for Salesforce to Legacy System direction and SOAP API using Enterprise WSDL for the communication back from legacy system to salesforce.",
            "b": "Platform Events for Salesforce to Legacy System direction and SOAP API using Partner WSDL for the communication back from legacy system to salesforce.",
            "c": "Platform Events for Salesforce to Legacy System direction and SOAP API using Enterprise WSDL for the communication back from legacy system to salesforce.",
            "d": "Outbound Message for Salesforce to Legacy System direction and SOAP API using Partner WSDL for the communication back from legacy system to salesforce."
        },
        "correctAnswer": "a",
        "explanation": "Outbound Message is a declarative, SOAP-based feature that fits the 'Fire and Forget' pattern for sending data from Salesforce. For the return communication, the Enterprise WSDL should be used because it is strongly typed, meaning it's tied to a specific Salesforce configuration, which matches the requirement for a 'strongly typed format'.",
        "multiSelect": false
    },
    {
        "question": "A company in a heavily regulated industry requires data in legacy systems to be displayed in Salesforce user interfaces (UIs). They are proficient in their cloud-based ETL (extract, transform, load) tools. They expose APIs built on their on-premise middleware to cloud and on-premise applications. Which two findings about their current state will allow copies of legacy data in Salesforce?",
        "answers": {
            "a": "Only on-premise systems are allowed access to legacy systems.",
            "b": "Cloud-based ETL can access Salesforce and supports queues.",
            "c": "On-premise middleware provides APIs to legacy systems data.",
            "d": "Legacy systems can use queues for on-premise integration."
        },
        "correctAnswer": [
            "b",
            "c"
        ],
        "explanation": "The fact that the on-premise middleware provides APIs to the legacy data (C) means the data is accessible. The fact that their cloud-based ETL tool can access Salesforce (B) means they have a mechanism to move that accessible data into Salesforce. These two findings together confirm the feasibility of the project.",
        "multiSelect": true
    },
    {
        "question": "An architect decided to use Platform Events for integrating Salesforce with an external system for a company. Which three things should an architect consider when proposing this type of integration mechanism?",
        "answers": {
            "a": "To subscribe to an event, the integration user in Salesforce needs read access to the event entity.",
            "b": "Salesforce needs to be able to store information about the external system in order to know which event to send out.",
            "c": "External system needs to have the same uptime in order to be able to keep up with Salesforce Platform Events.",
            "d": "To publish an event, the integration user in salesforce needs create permission on the event entity.",
            "e": "Error handling must be performed by the remote service because the event is effectively handed off to the remote system for further processing."
        },
        "correctAnswer": [
            "a",
            "d",
            "e"
        ],
        "explanation": "Using Platform Events requires the integration user to have 'Create' permission on the event object to publish events and 'Read' permission to subscribe to them. Because Platform Events follow a 'fire-and-forget' model, Salesforce does not guarantee delivery or acknowledgment; therefore, any error handling must be implemented by the subscribing remote system.",
        "multiSelect": true
    },
    {
        "question": "A developer has been tasked by the integration architect to build a solution based on the Streaming API. The developer has done some research and has found there are different implementations of the events in Salesforce (Push Topic Events, Change Data Capture, Generic Streaming, Platform Events), but is unsure of to proceed with the implementation. The developer asks the system architect for some guidance. What should the architect consider when making the recommendation?",
        "answers": {
            "a": "Push Topic Event can define a custom payload.",
            "b": "Change Data Capture can be published from Apex.",
            "c": "Apex triggers can subscribe to Generic Events."
        },
        "correctAnswer": "a",
        "explanation": "One key differentiator is that Push Topic Events allow for a custom payload. They are based on a SOQL query, and you can specify the exact fields to be returned in the event message using the SELECT clause. This allows you to customize the payload according to your integration needs. *Note: The source document provides 'B' as the answer but gives an explanation for 'A'. The explanation for 'A' is correct, while 'B' is incorrect as CDC events are published by the platform, not Apex. This response uses the correct answer based on the explanation.*",
        "multiSelect": false
    },
    {
        "question": "Universal Containers (UC) currently owns a middleware tool and they have developed an API-led integration architecture with three API tiers. The first-tier interfaces directly with the systems of engagement, the second tier implements business logic and aggregates data, while the third-tier interfaces directly with systems of record. Some of the systems of engagement will be a mobile application, a web application, and Salesforce. UC has a business requirement to return data to the systems of engagement in different formats while also enforcing different security protocols. What should an Integration Architect recommend to meet these requirements?",
        "answers": {
            "a": "Enforce separate security protocols and return formats at the first tier of the API-led architecture.",
            "b": "Implement an API gateway that all systems of engagement must interface with first.",
            "c": "Enforce separate security protocols and return formats at the second tier of the API-led architecture.",
            "d": "Leverage an Identity Provider solution that communicates with the API tiers via SAML"
        },
        "correctAnswer": "a",
        "explanation": "The first tier in an API-led architecture is the 'Experience Layer'. Its purpose is to provide a tailored interface for each system of engagement (e.g., mobile app, web app). It is the ideal place to handle transformations for different data formats and enforce security protocols specific to each consuming application.",
        "multiSelect": false
    },
    {
        "question": "What should an Architect recommend to ensure all integrations to the Northern Trail Outfitters company portal use SSL mutual authentication?",
        "answers": {
            "a": "Enable My Domain and SSL/TLS.",
            "b": "Enforce SSL/TLS Mutual Authentication.",
            "c": "Generate a Self-signed Certificate.",
            "d": "Generate a CA-signed Certificate."
        },
        "correctAnswer": "b",
        "explanation": "To ensure all integrations use mutual authentication, the specific user permission 'Enforce SSL/TLS Mutual Authentication' must be assigned to the integration users. This forces the client to present a valid certificate that Salesforce can verify, in addition to the standard server certificate verification.",
        "multiSelect": false
    },
    {
        "question": "When designing an integration between Salesforce and an order fulfillment system using Outbound Messaging, which two key questions should an integration architect consider?",
        "answers": {
            "a": "Can the fulfillment system create new addresses within the Order Create service?",
            "b": "Can the fulfillment system make a callback into Salesforce?",
            "c": "Can the fulfillment system implement a contract-first Outbound Messaging interface?",
            "d": "Is the product catalog data identical at all times in both systems?"
        },
        "correctAnswer": [
            "b",
            "c"
        ],
        "explanation": "For a robust integration, the architect needs to confirm if the fulfillment system can implement a listener based on the WSDL provided by Salesforce (contract-first) (C). Additionally, confirming if the system can make a callback to Salesforce (B) is crucial for updating the order status in Salesforce after the fulfillment system has processed the order.",
        "multiSelect": true
    },
    {
        "question": "Northern Trail Outfitters has recently experienced intermittent network outages in its call center. When network service resumes, Sales representatives have inadvertently created duplicate orders in the manufacturing system because the order was placed but the return acknowledgement was lost during the outage. Which solution should an architect recommend to avoid duplicate order booking?",
        "answers": {
            "a": "Use Outbound Messaging to ensure manufacturing acknowledges receipt of order.",
            "b": "Use scheduled apex to query manufacturing system for potential duplicate or missing orders.",
            "c": "Implement idempotent design and have Sales Representatives retry order(s) in question.",
            "d": "Have scheduled Apex resubmit orders that do not have a successful response."
        },
        "correctAnswer": "c",
        "explanation": "An idempotent design ensures that making the same request multiple times produces the same result as making it once. This is perfect for scenarios with network failures. If an order submission is retried, the manufacturing system would recognize it (e.g., via a unique transaction ID) and not create a duplicate order.",
        "multiSelect": false
    },
    {
        "question": "A large consumer goods manufacturer operating in multiple countries is planning to implement Salesforce. They have various security requirements for internal users, customers, and partners across different systems. Which three aspects should the integration architect evaluate while designing the integration needs of this project?",
        "answers": {
            "a": "Evaluate Salesforce solution for customers and for partners, using third party solution for internal users.",
            "b": "Assess security requirements for internal systems and decide Integration methods that support the requirements.",
            "c": "Evaluate the build of a custom authentication mechanism for users in each country and support for customers and partners.",
            "d": "Consider Third party Single Sign On solution supporting all user authentication including customer and partner.",
            "e": "Evaluate Salesforce native authentication mechanism for all users including customers and partners."
        },
        "correctAnswer": [
            "b",
            "c",
            "e"
        ],
        "explanation": "The architect must assess security for integrated internal systems like the ERP (B). Given the diverse requirements (local Active Directory, Google login, etc.), they must evaluate building a custom authentication solution (C) and also consider the capabilities and limitations of Salesforce's native authentication features (E) to find the right mix of solutions.",
        "multiSelect": true
    },
    {
        "question": "A customer is migrating from an old legacy system to Salesforce. As part of the modernization effort, they would like to integrate all existing systems that currently work with their legacy application with Salesforce. Which three constraints and pain-points should an integration architect consider when choosing the integration pattern/mechanism?",
        "answers": {
            "a": "System types - APIs, File systems, Email",
            "b": "Reporting and usability requirements",
            "c": "Multi-language and multi-currency requirement",
            "d": "Error handling mechanisms",
            "e": "Data Volume and Processing volume"
        },
        "correctAnswer": [
            "a",
            "d",
            "e"
        ],
        "explanation": "When integrating with multiple existing systems, the architect must consider the types of interfaces available (APIs, files, etc.) (A), the expected data and transaction volumes to ensure scalability (E), and how errors will be handled across these disparate systems to ensure reliability (D).",
        "multiSelect": true
    },
    {
        "question": "Northern Trail Outfitters is planning to create a native employee facing mobile app with the look and feel of Salesforce's Lighting Experience. The mobile app needs to integrate with their Salesforce org. Which Salesforce API should be used to implement this integration?",
        "answers": {
            "a": "Streaming API",
            "b": "REST API",
            "c": "Connect REST API",
            "d": "User Interface API"
        },
        "correctAnswer": "d",
        "explanation": "The User Interface API is specifically designed to build native mobile apps and custom web apps with the Salesforce look and feel. It provides access to metadata, data, and UI components like layouts and actions, handling the rendering logic so the developer doesn't have to.",
        "multiSelect": false
    },
    {
        "question": "A training company needs to verify trainer credentials from 10 different accreditation agencies before they can provide training. Each agency has its own web service and response times can take days. What is the recommended approach to automate this process?",
        "answers": {
            "a": "Use Salesforce external service to make the call out, Salesforce external service should check the verification agencies until the result is verified, then update the trainer status to 'verified'.",
            "b": "Create a trigger on the trainer record to make a Callout to each verification agencies, write business logic to consolidate the verification then update the trainer status to verified'.",
            "c": "Make an apex callout using @future annotation to make the call out to all different agencies. The response should update the trainer status to 'verified'.",
            "d": "Use middleware to handle the call out to the 10 different verification services, the middleware will handle the business logic of consolidating the verification result from the 10 services, then make a call-in to salesforce and update the verification status to 'verified'."
        },
        "correctAnswer": "d",
        "explanation": "This is a complex, long-running process (orchestration) involving multiple external systems. Middleware is the ideal solution as it is designed to handle such complexity. It can manage the asynchronous callouts to all 10 services, consolidate the results over several days, handle errors and retries, and then make a single, clean call back to Salesforce to update the record.",
        "multiSelect": false
    },
    {
        "question": "A business needs to check and update the phone number type (mobile vs. landline) for up to 100,000 incoming calls per day. The check is done via an external service API. This process can be done in batches overnight. A Remote-Call-In pattern via middleware has been selected. Which component should an integration architect recommend to implement this pattern?",
        "answers": {
            "a": "Connected App configured in Salesforce to authenticate the middleware.",
            "b": "Configure Remote Site Settings in Salesforce to authenticate the middleware.",
            "c": "An API Gateway that authenticates requests from Salesforce into the Middleware (ETL/ESB).",
            "d": "Firewall and reverse proxy are required to protect internal APIs and resource being exposed."
        },
        "correctAnswer": "a",
        "explanation": "In a Remote-Call-In pattern, an external system (the middleware) calls into Salesforce. A Connected App is the modern framework for enabling external applications to integrate with Salesforce APIs. It uses standard protocols like OAuth 2.0 to securely authenticate the middleware and authorize its access to Salesforce data.",
        "multiSelect": false
    },
    {
        "question": "Which WSDL should an architect consider when creating an integration that might be used for more than one Salesforce organization and different metadata?",
        "answers": {
            "a": "Corporate WSDL",
            "b": "Partner WSDL",
            "c": "SOAP API WSDL",
            "d": "Enterprise WSDL"
        },
        "correctAnswer": "b",
        "explanation": "The Partner WSDL is loosely typed and static. It is not tied to a specific Salesforce org's configuration. This makes it ideal for building integrations that are intended to work across multiple Salesforce orgs, as it can adapt to different metadata and custom objects at runtime.",
        "multiSelect": false
    },
    {
        "question": "Universal Containers is planning to implement Salesforce as their CRM, replacing several existing systems for leads, contacts, and activities. Inventory and billing remain in their ERP. The goal is a single view of the customer. What should an Integration Consultant consider first to support the proposed CRM system strategy?",
        "answers": {
            "a": "Plan for migration of customer and sales data across systems on a regular basis to keep them in sync.",
            "b": "Evaluate current and future data and system usage and then identify potential integration requirements to Salesforce.",
            "c": "Explore Out of box Salesforce connectors for integration with ERP, Marketing and Microsoft Outlook systems.",
            "d": "Propose a middleware system that can support interface between systems with Salesforce."
        },
        "correctAnswer": "b",
        "explanation": "Before proposing any specific tool or pattern, the first and most critical step is to perform a thorough analysis. The consultant must understand the business needs, data flows, volume, frequency, and security requirements to properly identify and design the necessary integrations.",
        "multiSelect": false
    },
    {
        "question": "An Architect is required to integrate with an External Data Source via a Named Credential with an Apex callout due to technical constraints. How is authentication achieved?",
        "answers": {
            "a": "Handle authentication with login flows.",
            "b": "Handle authentication in the code.",
            "c": "Connect via Salesforce Connect.",
            "d": "Connect via Communities."
        },
        "correctAnswer": "b",
        "explanation": "When using a Named Credential with an Apex callout, the Apex code itself handles the invocation. The Named Credential stores the endpoint URL and authentication parameters, but the HttpRequest class in Apex is used to construct and send the request, effectively handling the authentication process as defined in the Named Credential.",
        "multiSelect": false
    },
    {
        "question": "What are two key considerations an Integration Architect should make prior to the implementation of Shield Platform Encryption?",
        "answers": {
            "a": "Encrypt the data using the most current key.",
            "b": "Review shield platform encryption configurations.",
            "c": "Encrypt all the data so that it is secure.",
            "d": "Use Shield Platform Encryption as a user authentication or authorization tool."
        },
        "correctAnswer": [
            "b",
            "c"
        ],
        "explanation": "Before implementation, it's crucial to review all configurations, such as key management and encryption policies, to ensure they align with business requirements (B). Additionally, the goal is to encrypt all sensitive data that falls under the policy to ensure it is secure at rest, not just new data (C). Shield Platform Encryption is not an authentication tool.",
        "multiSelect": true
    },
    {
        "question": "Universal Containers (UC) would like to expose data from on-premise applications, which are behind a corporate network, to Salesforce for a unified user experience. The data must be accessible from Salesforce in real-time. Which two actions should be recommended to fulfill this system requirement?",
        "answers": {
            "a": "Develop an application in Heroku that connects to the on-premisedatabase via an ODBC string and VPC connection.",
            "b": "Develop custom APIs on the company's network that are invokable by Salesforce.",
            "c": "Deploy MuleSoft to the on-premise network and design externally facing APIs to expose the data.",
            "d": "Run a batch job with an ETL tool from an on-premise server to move data to Salesforce."
        },
        "correctAnswer": [
            "b",
            "c"
        ],
        "explanation": "Both options provide a way to expose on-premise data via real-time APIs. Developing custom APIs (B) is a direct approach. Using an integration platform like MuleSoft (C) can also achieve this, often with added benefits like security, orchestration, and transformation capabilities. Batch jobs (D) are not real-time.",
        "multiSelect": true
    },
    {
        "question": "A call center needs to view historical case data which is archived in a separate, performant data store (20M+ records). When reviewing a case in Salesforce, agents need to see the related historical items. Which mechanism and pattern are recommended to maximize declarative configuration?",
        "answers": {
            "a": "Use ESB tool with Data Virtualization pattern, expose OData endpoint, and then use Salesforce Connect to consume and display the External Object alongside with the Case object.",
            "b": "Use an ESB tool with a fire and forget pattern and then publish a platform event for the requested historical data.",
            "c": "Use an ESB tool with Request-Reply pattern and then make a real-time Apex callout to the ESB endpoint to fetch and display component related to Case object",
            "d": "Use an ETL tool with a Batch Data Synchronization pattern to migrate historical data into Salesforce and into a custom object (historical data) related to Case object."
        },
        "correctAnswer": "a",
        "explanation": "This scenario is a perfect fit for data virtualization. Salesforce Connect allows you to access data from external systems in real-time without storing it in Salesforce. By having the middleware (ESB) expose the historical data via an OData endpoint, Salesforce Connect can declaratively create an External Object that can be displayed on the Case page layout, avoiding code and data replication.",
        "multiSelect": false
    },
    {
        "question": "An Architect is asked to build a solution that allows a service to access Salesforce through the API. What is the first thing the Architect should do?",
        "answers": {
            "a": "Create a new user with System Administrator profile.",
            "b": "Authenticate the integration using existing Single Sign-On.",
            "c": "Authenticate the integration using existing Network-Based Security.",
            "d": "Create a special user solely for the integration purposes."
        },
        "correctAnswer": "d",
        "explanation": "The best practice for security, accountability, and traceability is to create a dedicated integration user for each integration. This user should be configured with a profile that grants only the minimum necessary permissions for the integration to function (principle of least privilege).",
        "multiSelect": false
    },
    {
        "question": "Universal Containers (UC) uses Salesforce as the system of record for customers. Customer data also exists in an ERP, ticketing system, and data lake, each with its own unique identifier. UC plans to use middleware and needs to update the proper external system when a Salesforce record changes, and vice versa. Which two solutions should an Integration Architect recommend?",
        "answers": {
            "a": "Locally cache external ID'S at the middleware layer and design business logic to map updates between systems.",
            "b": "Store unique identifiers in an External ID field in Salesforce and use this to update the proper records across systems.",
            "c": "Use Change Data Capture to update downstream systems accordingly when a record changes.",
            "d": "Design an MDM solution that maps external ID's to the Salesforce record ID."
        },
        "correctAnswer": [
            "c",
            "d"
        ],
        "explanation": "Change Data Capture (CDC) is a scalable way to publish record changes from Salesforce in near real-time, which the middleware can subscribe to for updating downstream systems (C). For a robust, long-term solution that manages identities across multiple systems, a Master Data Management (MDM) solution is the best practice. MDM creates a central hub to map all identifiers to a master record, ensuring data quality and consistency (D).",
        "multiSelect": true
    },
    {
        "question": "A company needs to send data from Salesforce to a homegrown system behind a corporate firewall. The data needs to be pushed one way, not in real time, with an average volume of 2 million records per day. What should an integration architect consider when choosing the right option?",
        "answers": {
            "a": "Due to high volume of records, number of concurrent requests can hit the limit for the REST API call to external system.",
            "b": "Due to high volume of records, a third-party integration tool is required to stage records off platform.",
            "c": "Due to high volume of records, the external system will need to use a BULK API Rest endpoint to connect to salesforce.",
            "d": "Due to high volume of records, salesforce will need to make a REST API call to external system."
        },
        "correctAnswer": "b",
        "explanation": "Pushing 2 million records per day directly from Salesforce via Apex callouts would quickly exhaust daily API and governor limits. A third-party integration (ETL) tool is designed for such high-volume data movement. It can extract the data from Salesforce efficiently (e.g., using the Bulk API), stage it, and then handle the process of loading it into the on-premise system, managing performance and reliability off-platform.",
        "multiSelect": false
    },
    {
        "question": "Northern Trail Outfitters (NTO) has recently implemented middleware. The ERP system requires transactions to be captured in near real time at a REST endpoint, initiated when an order is created in Salesforce. The Salesforce team has limited development resources and requires a low-code solution. Which two options will fulfill the use case requirements?",
        "answers": {
            "a": "Use Remote Process Invocation fire and forget pattern on insert on the order object using Flow Builder.",
            "b": "Implement a Workflow Rule with Outbound Messaging to send SOAP messages to the designated endpoint.",
            "c": "Implement Change Data Capture on the order object and leverage the replay Id in the middleware solution.",
            "d": "Use a process builder to create a Platform Event, selecting the record type as the Platform Event Name on insert of record."
        },
        "correctAnswer": [
            "a",
            "c"
        ],
        "explanation": "Flow Builder allows for a low-code implementation of a 'fire-and-forget' callout to the REST endpoint (A). Alternatively, Change Data Capture (CDC) is a scalable, near real-time, event-based solution. The middleware can subscribe to the order change events and process them reliably using the replay ID (C). Outbound Messaging (B) is SOAP-based, not REST.",
        "multiSelect": true
    },
    {
        "question": "A company's single page application consolidates data through synchronous and asynchronous calls. To measure performance, every call's start and finish time is logged (A to H in a diagram showing the flow). Which computation represents the end-to-end response time from the user's perspective?",
        "answers": {
            "a": "Sum of A to H",
            "b": "Sum of A to F",
            "c": "Sum of A, G, and H",
            "d": "Sum of A and H"
        },
        "correctAnswer": "d",
        "explanation": "From the user's perspective, the response time is the duration from when they initiate an action until they see the final result on their screen. This corresponds to the initial synchronous call from the UI to the application (A) and the final synchronous call from the application back to the UI (H). The intermediate asynchronous calls (B to G) happen in the background and do not block the user interface, so they are not part of the perceived response time.",
        "multiSelect": false
    },
    {
        "question": "A Lightning Web Component (LWC) displays transactions from a custom object in Salesforce. This object is updated periodically and may not have all the necessary transactions at any given time. A middleware service provides RESTful APIs that can retrieve all transactions from the source systems. What should the Integration Architect specify so the LWC can display all required transactions?",
        "answers": {
            "a": "Call the Enterprise APIs directly from the LWC's JavaScript code and redisplay the LWC on receipt of the API response.",
            "b": "Let the Lightning Data Service with an wire adapter display new values when the custom object records change.",
            "c": "Use the Continuation class to call the Enterprise APIs and then process the response in a callback method.",
            "d": "Publish a Platform Event, have the middleware subscribe and update the custom object on receipt of Platform Event."
        },
        "correctAnswer": "a",
        "explanation": "To get the most up-to-date and complete data, the LWC should make a direct call to the middleware's REST API. This is done from the LWC's JavaScript controller using the Fetch API. Upon receiving the response, the JavaScript can then process the data and re-render the component to display the complete list of transactions to the user. This provides a real-time view without waiting for the periodic replication to Salesforce.",
        "multiSelect": false
    },
    {
        "question": "A data migration team is decommissioning a legacy CRM and migrating data to Salesforce. They asked for a recommendation to optimize the performance of the data load. Which approach should be used to meet the requirement?",
        "answers": {
            "a": "Use Bulk API to process jobs in parallel mode.",
            "b": "Contact Salesforce support to schedule performance load.",
            "c": "Use Bulk API to process jobs in serial mode.",
            "d": "Use Bulk API to process jobs in high performance mode."
        },
        "correctAnswer": "a",
        "explanation": "The Bulk API is designed for loading large data sets. To maximize performance, jobs should be processed in parallel mode. This allows Salesforce to process multiple batches from the job simultaneously, significantly speeding up the overall data load time compared to serial mode, which processes one batch at a time.",
        "multiSelect": false
    },
    {
        "question": "An architect needs to integrate three separate external systems with Salesforce and wants to ensure proper security, auditing, and monitoring for each. What is the best practice to achieve this?",
        "answers": {
            "a": "A shared integration user for the three external system integrations.",
            "b": "A shared Connected App for the three external system integrations.",
            "c": "A unique integration user for each external system integration.",
            "d": "A Connected App for each external system integration."
        },
        "correctAnswer": "d",
        "explanation": "Using a separate Connected App for each external system provides the most granular control and visibility. Each Connected App can have its own OAuth policies (IP restrictions, refresh token policies), and API usage is tracked separately, which simplifies monitoring, auditing, and troubleshooting for each specific integration.",
        "multiSelect": false
    },
    {
        "question": "Northern Trail Outfitters needs to make synchronous callouts to 'available to promise' services to query product availability and reserve inventory during customer checkout. Which two considerations should an integration architect make when building a scalable integration solution?",
        "answers": {
            "a": "The typical and worst-case historical response times.",
            "b": "The number batch jobs that can run concurrently.",
            "c": "How many concurrent service calls are being placed.",
            "d": "The maximum query cursors open per user on the service."
        },
        "correctAnswer": [
            "a",
            "c"
        ],
        "explanation": "For a synchronous callout during a user process like checkout, performance is critical. The architect must know the response times of the external service to set appropriate timeouts and manage user experience (A). They must also understand the volume of concurrent calls to ensure the solution can handle peak load without hitting Salesforce or external system limits (C).",
        "multiSelect": true
    },
    {
        "question": "An integration uses Platform Events to send leads to a third-party AI system, which returns a prediction score. A trigger on the Platform Event that receives the score back is failing in Production. What type of monitoring should the Integration Consultant have considered?",
        "answers": {
            "a": "Monitor Platform Events created per hour limits across the Salesforce instance.",
            "b": "Set up debug logs for Platform Event triggers to monitor performance.",
            "c": "Validate the Platform Event definition matches leads definition.",
            "d": "Monitor the volume of leads that are created in Salesforce."
        },
        "correctAnswer": "a",
        "explanation": "Platform Events have publishing and delivery limits that are enforced on an hourly basis. A common reason for failures in a high-volume production environment is exceeding these allocation limits. Proactive monitoring of the 'HourlyPublishedPlatformEvents' limit would have helped anticipate this issue.",
        "multiSelect": false
    },
    {
        "question": "A mobile application for Salesforce users needs a new feature to obtain the device's GPS coordinates and store them on a custom geolocation field. The field is secured with Field Level Security (FLS) so users can only view it, not edit it. The app is already secured with OAuth. What should be done to meet the requirement?",
        "answers": {
            "a": "The mobile device makes a SOAP API inbound call. The mobile device receives a REST Apex callout call.",
            "b": "The mobile device makes a REST API inbound call.",
            "c": "The mobile device makes a REST Apex inbound call."
        },
        "correctAnswer": "c",
        "explanation": "Since FLS prevents the user from directly editing the field, a standard REST API update call would fail. The solution is to create a custom Apex REST Service. The mobile app makes an inbound call to this service. The Apex class then runs in system context (without sharing), which allows it to bypass the FLS and update the field with the provided GPS coordinates.",
        "multiSelect": false
    },
    {
        "question": "A large enterprise in a regulated industry is integrating Salesforce with multiple critical back-office systems. Reliability and monitoring of these integrations are required. Which integration solution should the architect consider?",
        "answers": {
            "a": "Architect Services in back-office systems to support callouts from Salesforce and build reliability, monitoring and reporting capabilities.",
            "b": "Decouple back-office system callouts into separate distinct services that have inbuilt error logging and monitoring frameworks.",
            "c": "Build a custom integration gateway to support back-office system integrations and ensure reliability and monitoring capabilities.",
            "d": "Leverage Middleware for all back-office system integrations ensuring real time alerting, monitoring and reporting capabilities."
        },
        "correctAnswer": "d",
        "explanation": "For a complex landscape with critical integrations requiring high reliability and monitoring, a dedicated middleware platform is the best practice. Middleware provides a centralized layer for handling data transformation, routing, security, and, crucially, robust error handling, logging, monitoring, and alerting capabilities out of the box.",
        "multiSelect": false
    },
    {
        "question": "A company is rolling out Salesforce to all Sales and Service staff. Senior Management has requested that monitoring be in place for Operations to be notified of any degradation in Salesforce performance. How should an integration consultant implement monitoring?",
        "answers": {
            "a": "Use Salesforce limits API to capture current API usage and configure alerts for monitoring.",
            "b": "Use APIEVENT to track all user-initiated API calls through SOAP, REST or BULK APIs.",
            "c": "Identify critical business processes and establish automation to monitor performance against established benchmarks.",
            "d": "Request Salesforce to monitor the Salesforce instance and notify when there is degradation in performance."
        },
        "correctAnswer": "c",
        "explanation": "Effective performance monitoring isn't just about technical limits; it's about business impact. The best approach is to identify the most critical business processes (e.g., 'Create a Quote', 'Save a Case'), establish performance benchmarks for them, and then use automation (e.g., synthetic monitoring tools) to continuously test these processes and alert when performance degrades.",
        "multiSelect": false
    },
    {
        "question": "A large enterprise is implementing Sales Cloud. Business requirements include accessing current inventory, generating quotes with pricing from the ERP, accessing invoices, and using an external BI tool for dashboards. The MDM is the system of record for customers. Which systems must be integrated with Salesforce?",
        "answers": {
            "a": "ERP, MDM, BI tool and Data Warehouse",
            "b": "ERP, Inventory, Pricing Engine, Invoices system",
            "c": "ERP, MDM, Data Warehouse, Invoices system",
            "d": "ERP, Invoices system, Data Warehouse and BI Tool"
        },
        "correctAnswer": "a",
        "explanation": "Based on the requirements: 1) Pricing and Invoices are in the ERP. 2) Customer data comes from the MDM. 3) Dashboards are in the BI tool, which needs sales data from Salesforce. 4) Inventory data might be in the ERP or a separate system, but ERP is the common source. A Data Warehouse is often used to feed the BI tool. Therefore, integrating with ERP, MDM, and providing data to the BI tool (often via a Data Warehouse) are the key integration points.",
        "multiSelect": false
    },
    {
        "question": "An integration requires all Apex REST API clients to adhere to RAML specifications, which serve as interface contracts. Which two design specifications should the architect include to ensure that Apex unit tests confirm adherence to the RAML specs?",
        "answers": {
            "a": "Call the Apex REST API Clients in a test context to get the mock response.",
            "b": "Require the Apex REST API Clients to implement the HttpCalloutMock.",
            "c": "Call the HttpCalloutMock implementation from the Apex REST API Clients.",
            "d": "Implement HttpCalloutMock to return responses per RAML specification."
        },
        "correctAnswer": [
            "a",
            "d"
        ],
        "explanation": "To test a callout, you must use a mock response. The architect should specify that a class implementing the HttpCalloutMock interface be created, and that this class must return mock HTTP responses that strictly follow the RAML specification (D). The unit test for the client class must then invoke the callout method within a test context (Test.startTest()/stopTest()) so that the mock implementation is used instead of making a real callout (A).",
        "multiSelect": true
    },
    {
        "question": "An architect recommended using Apex code to make callouts to an external system to process an insurance quote. What governor limit should the integration architect consider to make sure this is the right option for the integration?",
        "answers": {
            "a": "The maximum callouts in a single Apex transaction.",
            "b": "The maximum number of parallel Apex callouts in a single continuation.",
            "c": "The limit on long-running requests (total execution time).",
            "d": "The limit of pending operations in the same transaction."
        },
        "correctAnswer": "a",
        "explanation": "A key governor limit for Apex callouts is the number of callouts allowed in a single transaction (currently 100). The architect must evaluate if the business process for processing a quote will ever require more than this limit within one execution context. If so, an asynchronous pattern or a different integration approach may be needed.",
        "multiSelect": false
    },
    {
        "question": "An integration is being set up between a Salesforce org and an external data source using Salesforce Connect. The external data source supports Open Data Protocol (OData). Which three configurations should an Integration Architect recommend to secure requests coming from Salesforce?",
        "answers": {
            "a": "Configure Identity Type for OData connection.",
            "b": "Configure a Certificate for OData connection.",
            "c": "Configure Special Compatibility for OData connection.",
            "d": "Configure CSRF Protection for OData connection.",
            "e": "Configure CSRF Protection on External Data Source."
        },
        "correctAnswer": [
            "a",
            "b",
            "d"
        ],
        "explanation": "To secure the connection, you must configure the authentication method using the 'Identity Type' setting (e.g., Named Principal, OAuth 2.0) (A). To protect data in transit, you can use a 'Certificate' for SSL/TLS encryption (B). To prevent cross-site request forgery attacks, you should enable the 'CSRF Protection' setting on the External Data Source definition in Salesforce (D).",
        "multiSelect": true
    },
    {
        "question": "A company needs to check customer communication preferences from an external service in real-time within a Lightning Flow. The external service exposes a REST API with an OpenAPI 2.0 specification. The flow needs Boolean and string values back to make decisions. Which pattern and mechanism is most suitable?",
        "answers": {
            "a": "Fire and Forget: Process-driven platform events publishes events on Salesforce Event Bus.",
            "b": "Remote Call-In: Salesforce REST API with REST Composite Resources.",
            "c": "Request-Reply: Enhanced External Services invokes a REST API.",
            "d": "Data Virtualization: Salesforce Connect map data external REST data in external objects."
        },
        "correctAnswer": "c",
        "explanation": "Enhanced External Services is designed for this exact use case. It allows you to declaratively register an external service using its OpenAPI spec and then invoke its methods as actions directly within a Flow. This fits the synchronous Request-Reply pattern needed to get an immediate response for the flow's logic, all without writing Apex code.",
        "multiSelect": false
    },
    {
        "question": "Which three considerations should an Integration Architect consider when recommending Platform Event as an Integration solution?",
        "answers": {
            "a": "Inability to query event messages using SOQL",
            "b": "Subscribe to an AssetToken Event stream to monitor OAuth2.0 authentication activity.",
            "c": "Inability to create a Lightning record page for platform events.",
            "d": "When you delete an event definition, it's permanently removed and can't be restored.",
            "e": "You can use Event Monitoring to track user activity, such as logins and running reports."
        },
        "correctAnswer": [
            "a",
            "c",
            "d"
        ],
        "explanation": "When proposing Platform Events, an architect must highlight their characteristics and limitations. Key considerations include: event messages are not stored in standard objects and thus cannot be queried via SOQL (A); they are not data objects and do not have record pages (C); and deleting an event's definition is a permanent, irreversible metadata change (D).",
        "multiSelect": true
    },
    {
        "question": "An integration solution uses the REST API to update Account, Contact, and other related information. Data volumes have increased, and daily API call limits are being exceeded. The customer wants to decrease the number of API calls using bulk updates but prefers to continue using the REST API. Which REST API composite resource should the architect use to allow up to 200 records in one API call?",
        "answers": {
            "a": "SObject Collections",
            "b": "SObject Tree",
            "c": "Batch",
            "d": "Composite"
        },
        "correctAnswer": "a",
        "explanation": "The SObject Collections resource is specifically designed for creating, updating, or deleting a collection of records of the same SObject type in a single request. It supports up to 200 records per call, making it ideal for bulk operations on unrelated records and reducing API call consumption.",
        "multiSelect": false
    },
    {
        "question": "A company accepts payment requests 24x7. Their SLA requires every request to be processed by their Payment System. They are encountering intermittent update errors when multiple processes try to update the same Payment Request record simultaneously. Which two recommendations should an integration architect make to improve SLA and handle update conflicts?",
        "answers": {
            "a": "Middleware should coordinate request delivery and payment processing.",
            "b": "Data Entry Point and Middleware should automatically retry requests.",
            "c": "Payment System should process a payment request only once.",
            "d": "Payment System and Middleware should automatically retry requests."
        },
        "correctAnswer": [
            "a",
            "c"
        ],
        "explanation": "Using middleware to mediate and coordinate the flow of requests ensures reliable, ordered delivery and can manage retries centrally, preventing a chaotic free-for-all (A). To prevent duplicate processing and handle race conditions, the Payment System itself must be idempotent—it should use the globally unique identifier to ensure that it processes any given payment request exactly once, regardless of how many times it receives the request (C).",
        "multiSelect": true
    },
    {
        "question": "A customer imports data into Salesforce using the Bulk API in parallel mode with a batch size of 2000. Batches frequently fail with the error 'Max CPU time exceeded'. A smaller batch size will fix this error. Which two options should be considered as potential side effects of using a smaller batch size?",
        "answers": {
            "a": "Smaller batch size may cause record-locking errors.",
            "b": "Smaller batch size may increase time required to execute bulk jobs.",
            "c": "Smaller batch size may exceed the concurrent API request limits.",
            "d": "Smaller batch size can trigger 'Too many concurrent batches' error."
        },
        "correctAnswer": [
            "a",
            "b"
        ],
        "explanation": "Reducing the batch size means more batches will be created for the same amount of data. This increases the overall processing overhead and can extend the total job execution time (B). Additionally, having more, smaller batches running in parallel increases the likelihood of two batches attempting to lock the same parent record or related records, leading to record-locking errors (A).",
        "multiSelect": true
    },
    {
        "question": "Northern Trail Outfitters (NTO) uses a custom mobile app with Salesforce Chatter Feeds. NTO wants to automatically post a Chatter item to Twitter whenever the post includes the #thanksNTO hashtag. Which API should an Integration Architect use to meet this requirement?",
        "answers": {
            "a": "Connect REST API",
            "b": "REST API",
            "c": "Streaming API",
            "d": "Apex REST"
        },
        "correctAnswer": "a",
        "explanation": "The Connect REST API is specifically designed for accessing Chatter feeds and social data like users, groups, and files. It is the most direct and feature-rich API for interacting with Chatter content, making it the ideal choice for a process that needs to read Chatter posts.",
        "multiSelect": false
    },
    {
        "question": "A B2C company is expanding to Latin America and must be able to completely delete a customer's personal data on demand, in compliance with anticipated privacy regulations. Data is stored in legacy mainframes, Salesforce Clouds (Commerce, Service, etc.), and other systems. Which three requirements should the integration architect prioritize?",
        "answers": {
            "a": "Manual steps and procedures that may be necessary.",
            "b": "Impact of deleted records on system functionality.",
            "c": "Ability to delete personal data in every system.",
            "d": "Feasibility to restore deleted records when needed.",
            "e": "Ability to provide a 360-degree view of the customer."
        },
        "correctAnswer": [
            "a",
            "b",
            "c"
        ],
        "explanation": "First, the solution must technically be able to delete data in every single system where it resides (C). The architect must analyze the downstream impact of these deletions on system functionality, such as reporting or related records (B). Given the complexity and legacy systems involved, it's also critical to identify and document any necessary manual steps or procedures that cannot be automated to ensure the process can be completed successfully (A).",
        "multiSelect": true
    },
    {
        "question": "A company wants to standardize exception tracking. The plan is to build a company-wide logging service on middleware, create Salesforce Case records for exceptions based on certain thresholds, and change all Apex Loggers to publish exceptions as custom Platform Events. Which two specifications should the architect include in the logging service architecture?",
        "answers": {
            "a": "Receive Application Events through Change Data Capture (CDC).",
            "b": "Create Salesforce Cases using the Salesforce REST, SOAP or Bulk API.",
            "c": "Create Salesforce Cases conditionally using automatic Case creation rules.",
            "d": "Subscribe to the Application Exceptions using the Salesforce Streaming API."
        },
        "correctAnswer": [
            "b",
            "d"
        ],
        "explanation": "The logging service, which is external to Salesforce, needs to listen for the Application Exception Platform Events. It can do this by subscribing to the event channel using the Streaming API (CometD) (D). Once the service receives an event and determines a Case is needed, it will act as an API client and use a standard inbound API (like REST or SOAP) to create the Case record in Salesforce (B).",
        "multiSelect": true
    },
    {
        "question": "Customer Support agents need seamless access to customer billing information from an Enterprise Billing System (EBS) and view generated bills from a Document Management System (DMS). Only authorized users are allowed access to these systems. Which three authorization and authentication needs should an integration consultant consider?",
        "answers": {
            "a": "Users should be authorized to view information specific to the customer they are servicing without a need to search for customer.",
            "b": "Identify options to maintain DMS and EBS authentication and authorization details in Salesforce.",
            "c": "Consider Enterprise security needs for access to DMS and EBS.",
            "d": "Consider options to migrate DMS and EBS into Salesforce.",
            "e": "Users should be authenticated into DMS and EBS without having to enter username and password."
        },
        "correctAnswer": [
            "a",
            "c",
            "e"
        ],
        "explanation": "The solution must be seamless, so users should not have to log in again, indicating a need for Single Sign-On (SSO) (E). The access should be contextual, automatically showing billing info for the customer record being viewed in Salesforce (A). Finally, the entire solution must comply with the broader enterprise security policies for accessing these critical systems (C).",
        "multiSelect": true
    },
    {
        "question": "What is the first thing an Integration Architect should validate if a callout from a Lightning Web Component to an external endpoint is failing?",
        "answers": {
            "a": "The endpoint domain has been added to Cross-Origin Resource Sharing.",
            "b": "The endpoint URL has been added to Content Security Policies.",
            "c": "The endpoint URL has added been to an outbound firewall rule.",
            "d": "The endpoint URL has been added to Remote Site Settings."
        },
        "correctAnswer": "a",
        "explanation": "Callouts made directly from a browser-side component like an LWC are subject to the browser's same-origin policy. For the callout to a different domain to succeed, that domain must be registered in Salesforce's Cross-Origin Resource Sharing (CORS) allowlist. A missing CORS entry is the most common reason for these callouts to be blocked by the browser.",
        "multiSelect": false
    },
    {
        "question": "When an order is marked as 'Fulfilled' in Salesforce, all order and line item data must be sent to an existing finance application's web service for invoicing. The business requires a guarantee that each fulfilled order reaches the finance application exactly once. Which integration approach meets these requirements?",
        "answers": {
            "a": "Trigger invokes Queueable Apex method, with custom error handling process.",
            "b": "Trigger makes @future Apex method, with custom error handling process.",
            "c": "Button press invokes synchronous callout, with user handling retries in case of error",
            "d": "Outbound Messaging, which will automatically handle error retries to the service."
        },
        "correctAnswer": "a",
        "explanation": "Queueable Apex is superior to @future for this use case because it allows for more complex logic, chaining jobs, and better error handling. By invoking a Queueable job from a trigger, the process is asynchronous. Within the Queueable class, the developer can implement custom error handling and retry logic, and by implementing the Database.Stateful interface, can track the job's state to ensure the 'exactly once' delivery requirement is met.",
        "multiSelect": false
    },
    {
        "question": "A customer is evaluating Platform Events and Outbound Messages for a near-real time integration with 3,000 consumers. Which three considerations should be evaluated when deciding between the solutions?",
        "answers": {
            "a": "Both Platform Events and Outbound Message offer declarative means for asynchronous near-real time needs. They aren't best suited for real-time integrations.",
            "b": "In both Platform Events and Outbound Messages, the event messages are retried by and delivered in sequence, and only once. Salesforce ensures there is no duplicate message delivery.",
            "c": "Message sequence is possible in Outbound Message but not guaranteed with Platform Events. Both offer very high reliability. Fault handling and recovery are fully handled by Salesforce.",
            "d": "Number of concurrent subscribers to Platform Events is capped at 2,000. An Outbound Message configuration can pass only 100 notifications in a single message to a SOAP end point.",
            "e": "Both Platform Events and Outbound Message are highly scalable. However, unlike Outbound Message, only Platform Events have Event Delivery and Event Publishing limits to be considered."
        },
        "correctAnswer": [
            "a",
            "c",
            "e"
        ],
        "explanation": "Both are asynchronous, near-real-time solutions that can be configured declaratively (A). A key difference is that Outbound Message guarantees in-order delivery, while Platform Events do not (C). Finally, it's crucial to know that Platform Events are subject to specific publishing and delivery limits based on the org's license, whereas Outbound Messages have different types of limits (E). The number of subscribers (3,000) is also a critical factor, as standard Platform Events have a concurrent subscriber limit of 2,000 (mentioned in option D, though D is not a correct comparison overall).",
        "multiSelect": true
    },
    {
        "question": "Northern Trail Outfitters needs to present shipping costs and estimated delivery times to their customers. Shipping services used vary by region, and have similar but distinct service request parameters. Which integration component capability should be used?",
        "answers": {
            "a": "Enterprise Service Bus to determine which shipping service to use, and transform requests to the necessary format.",
            "b": "Outbound Messaging to request costs and delivery times from Shipper delivery services with automated error retry.",
            "c": "APEX REST Service to implement routing logic to the various shipping service.",
            "d": "Enterprise Service Bus user interface to collect shipper-specific form data."
        },
        "correctAnswer": "a",
        "explanation": "Using an Enterprise Service Bus (ESB) is the best solution because it can provide routing, transformation, mediation, and orchestration capabilities for integrating different services. An ESB abstracts the complexity of the various shipping services from the main application, simplifying the integration.",
        "multiSelect": false
    },
    {
        "question": "Northern Trail Outfitters (NTO) uses different shipping services for each of the 34 countries it serves. Services are added and removed frequently to optimize shipping times and costs. Sales Representatives serve all NTO customers globally and need to select between valid service(s) for the customer's country and request shipping estimates from that service. Which two solutions should an architect propose?",
        "answers": {
            "a": "Use Platform Events to construct and publish shipper-specific events.",
            "b": "Invoke middleware service to retrieve valid shipping methods.",
            "c": "Use middleware to abstract the call to the specific shipping services.",
            "d": "Store shipping services in a picklist that is dependent on a country picklist."
        },
        "correctAnswer": [
            "b",
            "c"
        ],
        "explanation": "A middleware service can act as a single point of entry to retrieve valid shipping methods for a given country. It can also abstract the complexity of calling the specific shipping services, handling the different request/response formats and hiding the heterogeneity of the underlying systems from Salesforce.",
        "multiSelect": true
    },
    {
        "question": "An integration architect needs to build a solution that will be using the Streaming API, but the data loss should be minimized, even when the client re-connects every couple of days. Which two types of Streaming API events should be considered?",
        "answers": {
            "a": "Generic Events",
            "b": "Change Data Capture Events",
            "c": "Push Topic Events",
            "d": "High Volume Platform Events"
        },
        "correctAnswer": [
            "b",
            "d"
        ],
        "explanation": "Both Change Data Capture (CDC) Events and High Volume Platform Events support reliable event delivery. This means events are stored for up to 72 hours and can be replayed by subscribers using a replay ID if they disconnect, which minimizes data loss.",
        "multiSelect": true
    },
    {
        "question": "A company needs to integrate a legacy on premise application that can only support SOAP API. After the Integration Architect has evaluated the requirements and volume, they determined that the Fire and Forget integration pattern will be most appropriate for sending data from Salesforce to the external application and getting response back in a strongly typed format. Which integration capabilities should be used to integrate the two systems?",
        "answers": {
            "a": "Outbound Message for Salesforce to Legacy System direction and SOAP API using Enterprise WSDL for the communication back from legacy system to salesforce.",
            "b": "Platform Events for Salesforce to Legacy System direction and SOAP API using Partner WSDL for the communication back from legacy system to salesforce.",
            "c": "Platform Events for Salesforce to Legacy System direction and SOAP API using Enterprise WSDL for the communication back from legacy system to salesforce.",
            "d": "Outbound Message for Salesforce to Legacy System direction and SOAP API using Partner WSDL for the communication back from legacy system to salesforce."
        },
        "correctAnswer": "a",
        "explanation": "Outbound Message is a declarative, SOAP-based feature that fits the 'Fire and Forget' pattern for sending data from Salesforce. For the return communication, the Enterprise WSDL should be used because it is strongly typed, meaning it's tied to a specific Salesforce configuration, which matches the requirement for a 'strongly typed format'.",
        "multiSelect": false
    },
    {
        "question": "A company in a heavily regulated industry requires data in legacy systems to be displayed in Salesforce user interfaces (UIs). They are proficient in their cloud-based ETL (extract, transform, load) tools. They expose APIs built on their on-premise middleware to cloud and on-premise applications. Which two findings about their current state will allow copies of legacy data in Salesforce?",
        "answers": {
            "a": "Only on-premise systems are allowed access to legacy systems.",
            "b": "Cloud-based ETL can access Salesforce and supports queues.",
            "c": "On-premise middleware provides APIs to legacy systems data.",
            "d": "Legacy systems can use queues for on-premise integration."
        },
        "correctAnswer": [
            "b",
            "c"
        ],
        "explanation": "The fact that the on-premise middleware provides APIs to the legacy data (C) means the data is accessible. The fact that their cloud-based ETL tool can access Salesforce (B) means they have a mechanism to move that accessible data into Salesforce. These two findings together confirm the feasibility of the project.",
        "multiSelect": true
    },
    {
        "question": "An architect decided to use Platform Events for integrating Salesforce with an external system for a company. Which three things should an architect consider when proposing this type of integration mechanism?",
        "answers": {
            "a": "To subscribe to an event, the integration user in Salesforce needs read access to the event entity.",
            "b": "Salesforce needs to be able to store information about the external system in order to know which event to send out.",
            "c": "External system needs to have the same uptime in order to be able to keep up with Salesforce Platform Events.",
            "d": "To publish an event, the integration user in salesforce needs create permission on the event entity.",
            "e": "Error handling must be performed by the remote service because the event is effectively handed off to the remote system for further processing."
        },
        "correctAnswer": [
            "a",
            "d",
            "e"
        ],
        "explanation": "Using Platform Events requires the integration user to have 'Create' permission on the event object to publish events and 'Read' permission to subscribe to them. Because Platform Events follow a 'fire-and-forget' model, Salesforce does not guarantee delivery or acknowledgment; therefore, any error handling must be implemented by the subscribing remote system.",
        "multiSelect": true
    },
    {
        "question": "A developer has been tasked by the integration architect to build a solution based on the Streaming API. The developer has done some research and has found there are different implementations of the events in Salesforce (Push Topic Events, Change Data Capture, Generic Streaming, Platform Events), but is unsure of to proceed with the implementation. The developer asks the system architect for some guidance. What should the architect consider when making the recommendation?",
        "answers": {
            "a": "Push Topic Event can define a custom payload.",
            "b": "Change Data Capture can be published from Apex.",
            "c": "Apex triggers can subscribe to Generic Events."
        },
        "correctAnswer": "a",
        "explanation": "One key differentiator is that Push Topic Events allow for a custom payload. They are based on a SOQL query, and you can specify the exact fields to be returned in the event message using the SELECT clause. This allows you to customize the payload according to your integration needs. *Note: The source document provides 'B' as the answer but gives an explanation for 'A'. The explanation for 'A' is correct, while 'B' is incorrect as CDC events are published by the platform, not Apex. This response uses the correct answer based on the explanation.*",
        "multiSelect": false
    },
    {
        "question": "Universal Containers (UC) currently owns a middleware tool and they have developed an API-led integration architecture with three API tiers. The first-tier interfaces directly with the systems of engagement, the second tier implements business logic and aggregates data, while the third-tier interfaces directly with systems of record. Some of the systems of engagement will be a mobile application, a web application, and Salesforce. UC has a business requirement to return data to the systems of engagement in different formats while also enforcing different security protocols. What should an Integration Architect recommend to meet these requirements?",
        "answers": {
            "a": "Enforce separate security protocols and return formats at the first tier of the API-led architecture.",
            "b": "Implement an API gateway that all systems of engagement must interface with first.",
            "c": "Enforce separate security protocols and return formats at the second tier of the API-led architecture.",
            "d": "Leverage an Identity Provider solution that communicates with the API tiers via SAML"
        },
        "correctAnswer": "a",
        "explanation": "The first tier in an API-led architecture is the 'Experience Layer'. Its purpose is to provide a tailored interface for each system of engagement (e.g., mobile app, web app). It is the ideal place to handle transformations for different data formats and enforce security protocols specific to each consuming application.",
        "multiSelect": false
    },
    {
        "question": "What should an Architect recommend to ensure all integrations to the Northern Trail Outfitters company portal use SSL mutual authentication?",
        "answers": {
            "a": "Enable My Domain and SSL/TLS.",
            "b": "Enforce SSL/TLS Mutual Authentication.",
            "c": "Generate a Self-signed Certificate.",
            "d": "Generate a CA-signed Certificate."
        },
        "correctAnswer": "b",
        "explanation": "To ensure all integrations use mutual authentication, the specific user permission 'Enforce SSL/TLS Mutual Authentication' must be assigned to the integration users. This forces the client to present a valid certificate that Salesforce can verify, in addition to the standard server certificate verification.",
        "multiSelect": false
    },
    {
        "question": "When designing an integration between Salesforce and an order fulfillment system using Outbound Messaging, which two key questions should an integration architect consider?",
        "answers": {
            "a": "Can the fulfillment system create new addresses within the Order Create service?",
            "b": "Can the fulfillment system make a callback into Salesforce?",
            "c": "Can the fulfillment system implement a contract-first Outbound Messaging interface?",
            "d": "Is the product catalog data identical at all times in both systems?"
        },
        "correctAnswer": [
            "b",
            "c"
        ],
        "explanation": "For a robust integration, the architect needs to confirm if the fulfillment system can implement a listener based on the WSDL provided by Salesforce (contract-first) (C). Additionally, confirming if the system can make a callback to Salesforce (B) is crucial for updating the order status in Salesforce after the fulfillment system has processed the order.",
        "multiSelect": true
    },
    {
        "question": "Northern Trail Outfitters has recently experienced intermittent network outages in its call center. When network service resumes, Sales representatives have inadvertently created duplicate orders in the manufacturing system because the order was placed but the return acknowledgement was lost during the outage. Which solution should an architect recommend to avoid duplicate order booking?",
        "answers": {
            "a": "Use Outbound Messaging to ensure manufacturing acknowledges receipt of order.",
            "b": "Use scheduled apex to query manufacturing system for potential duplicate or missing orders.",
            "c": "Implement idempotent design and have Sales Representatives retry order(s) in question.",
            "d": "Have scheduled Apex resubmit orders that do not have a successful response."
        },
        "correctAnswer": "c",
        "explanation": "An idempotent design ensures that making the same request multiple times produces the same result as making it once. This is perfect for scenarios with network failures. If an order submission is retried, the manufacturing system would recognize it (e.g., via a unique transaction ID) and not create a duplicate order.",
        "multiSelect": false
    },
    {
        "question": "A large consumer goods manufacturer operating in multiple countries is planning to implement Salesforce. They have various security requirements for internal users, customers, and partners across different systems. Which three aspects should the integration architect evaluate while designing the integration needs of this project?",
        "answers": {
            "a": "Evaluate Salesforce solution for customers and for partners, using third party solution for internal users.",
            "b": "Assess security requirements for internal systems and decide Integration methods that support the requirements.",
            "c": "Evaluate the build of a custom authentication mechanism for users in each country and support for customers and partners.",
            "d": "Consider Third party Single Sign On solution supporting all user authentication including customer and partner.",
            "e": "Evaluate Salesforce native authentication mechanism for all users including customers and partners."
        },
        "correctAnswer": [
            "b",
            "c",
            "e"
        ],
        "explanation": "The architect must assess security for integrated internal systems like the ERP (B). Given the diverse requirements (local Active Directory, Google login, etc.), they must evaluate building a custom authentication solution (C) and also consider the capabilities and limitations of Salesforce's native authentication features (E) to find the right mix of solutions.",
        "multiSelect": true
    },
    {
        "question": "A customer is migrating from an old legacy system to Salesforce. As part of the modernization effort, they would like to integrate all existing systems that currently work with their legacy application with Salesforce. Which three constraints and pain-points should an integration architect consider when choosing the integration pattern/mechanism?",
        "answers": {
            "a": "System types - APIs, File systems, Email",
            "b": "Reporting and usability requirements",
            "c": "Multi-language and multi-currency requirement",
            "d": "Error handling mechanisms",
            "e": "Data Volume and Processing volume"
        },
        "correctAnswer": [
            "a",
            "d",
            "e"
        ],
        "explanation": "When integrating with multiple existing systems, the architect must consider the types of interfaces available (APIs, files, etc.) (A), the expected data and transaction volumes to ensure scalability (E), and how errors will be handled across these disparate systems to ensure reliability (D).",
        "multiSelect": true
    },
    {
        "question": "Northern Trail Outfitters is planning to create a native employee facing mobile app with the look and feel of Salesforce's Lighting Experience. The mobile app needs to integrate with their Salesforce org. Which Salesforce API should be used to implement this integration?",
        "answers": {
            "a": "Streaming API",
            "b": "REST API",
            "c": "Connect REST API",
            "d": "User Interface API"
        },
        "correctAnswer": "d",
        "explanation": "The User Interface API is specifically designed to build native mobile apps and custom web apps with the Salesforce look and feel. It provides access to metadata, data, and UI components like layouts and actions, handling the rendering logic so the developer doesn't have to.",
        "multiSelect": false
    },
    {
        "question": "A training company needs to verify trainer credentials from 10 different accreditation agencies before they can provide training. Each agency has its own web service and response times can take days. What is the recommended approach to automate this process?",
        "answers": {
            "a": "Use Salesforce external service to make the call out, Salesforce external service should check the verification agencies until the result is verified, then update the trainer status to 'verified'.",
            "b": "Create a trigger on the trainer record to make a Callout to each verification agencies, write business logic to consolidate the verification then update the trainer status to verified'.",
            "c": "Make an apex callout using @future annotation to make the call out to all different agencies. The response should update the trainer status to 'verified'.",
            "d": "Use middleware to handle the call out to the 10 different verification services, the middleware will handle the business logic of consolidating the verification result from the 10 services, then make a call-in to salesforce and update the verification status to 'verified'."
        },
        "correctAnswer": "d",
        "explanation": "This is a complex, long-running process (orchestration) involving multiple external systems. Middleware is the ideal solution as it is designed to handle such complexity. It can manage the asynchronous callouts to all 10 services, consolidate the results over several days, handle errors and retries, and then make a single, clean call back to Salesforce to update the record.",
        "multiSelect": false
    },
    {
        "question": "A business needs to check and update the phone number type (mobile vs. landline) for up to 100,000 incoming calls per day. The check is done via an external service API. This process can be done in batches overnight. A Remote-Call-In pattern via middleware has been selected. Which component should an integration architect recommend to implement this pattern?",
        "answers": {
            "a": "Connected App configured in Salesforce to authenticate the middleware.",
            "b": "Configure Remote Site Settings in Salesforce to authenticate the middleware.",
            "c": "An API Gateway that authenticates requests from Salesforce into the Middleware (ETL/ESB).",
            "d": "Firewall and reverse proxy are required to protect internal APIs and resource being exposed."
        },
        "correctAnswer": "a",
        "explanation": "In a Remote-Call-In pattern, an external system (the middleware) calls into Salesforce. A Connected App is the modern framework for enabling external applications to integrate with Salesforce APIs. It uses standard protocols like OAuth 2.0 to securely authenticate the middleware and authorize its access to Salesforce data.",
        "multiSelect": false
    },
    {
        "question": "Which WSDL should an architect consider when creating an integration that might be used for more than one Salesforce organization and different metadata?",
        "answers": {
            "a": "Corporate WSDL",
            "b": "Partner WSDL",
            "c": "SOAP API WSDL",
            "d": "Enterprise WSDL"
        },
        "correctAnswer": "b",
        "explanation": "The Partner WSDL is loosely typed and static. It is not tied to a specific Salesforce org's configuration. This makes it ideal for building integrations that are intended to work across multiple Salesforce orgs, as it can adapt to different metadata and custom objects at runtime.",
        "multiSelect": false
    },
    {
        "question": "Universal Containers is planning to implement Salesforce as their CRM, replacing several existing systems for leads, contacts, and activities. Inventory and billing remain in their ERP. The goal is a single view of the customer. What should an Integration Consultant consider first to support the proposed CRM system strategy?",
        "answers": {
            "a": "Plan for migration of customer and sales data across systems on a regular basis to keep them in sync.",
            "b": "Evaluate current and future data and system usage and then identify potential integration requirements to Salesforce.",
            "c": "Explore Out of box Salesforce connectors for integration with ERP, Marketing and Microsoft Outlook systems.",
            "d": "Propose a middleware system that can support interface between systems with Salesforce."
        },
        "correctAnswer": "b",
        "explanation": "Before proposing any specific tool or pattern, the first and most critical step is to perform a thorough analysis. The consultant must understand the business needs, data flows, volume, frequency, and security requirements to properly identify and design the necessary integrations.",
        "multiSelect": false
    },
    {
        "question": "An Architect is required to integrate with an External Data Source via a Named Credential with an Apex callout due to technical constraints. How is authentication achieved?",
        "answers": {
            "a": "Handle authentication with login flows.",
            "b": "Handle authentication in the code.",
            "c": "Connect via Salesforce Connect.",
            "d": "Connect via Communities."
        },
        "correctAnswer": "b",
        "explanation": "When using a Named Credential with an Apex callout, the Apex code itself handles the invocation. The Named Credential stores the endpoint URL and authentication parameters, but the HttpRequest class in Apex is used to construct and send the request, effectively handling the authentication process as defined in the Named Credential.",
        "multiSelect": false
    },
    {
        "question": "What are two key considerations an Integration Architect should make prior to the implementation of Shield Platform Encryption?",
        "answers": {
            "a": "Encrypt the data using the most current key.",
            "b": "Review shield platform encryption configurations.",
            "c": "Encrypt all the data so that it is secure.",
            "d": "Use Shield Platform Encryption as a user authentication or authorization tool."
        },
        "correctAnswer": [
            "b",
            "c"
        ],
        "explanation": "Before implementation, it's crucial to review all configurations, such as key management and encryption policies, to ensure they align with business requirements (B). Additionally, the goal is to encrypt all sensitive data that falls under the policy to ensure it is secure at rest, not just new data (C). Shield Platform Encryption is not an authentication tool.",
        "multiSelect": true
    },
    {
        "question": "Universal Containers (UC) would like to expose data from on-premise applications, which are behind a corporate network, to Salesforce for a unified user experience. The data must be accessible from Salesforce in real-time. Which two actions should be recommended to fulfill this system requirement?",
        "answers": {
            "a": "Develop an application in Heroku that connects to the on-premisedatabase via an ODBC string and VPC connection.",
            "b": "Develop custom APIs on the company's network that are invokable by Salesforce.",
            "c": "Deploy MuleSoft to the on-premise network and design externally facing APIs to expose the data.",
            "d": "Run a batch job with an ETL tool from an on-premise server to move data to Salesforce."
        },
        "correctAnswer": [
            "b",
            "c"
        ],
        "explanation": "Both options provide a way to expose on-premise data via real-time APIs. Developing custom APIs (B) is a direct approach. Using an integration platform like MuleSoft (C) can also achieve this, often with added benefits like security, orchestration, and transformation capabilities. Batch jobs (D) are not real-time.",
        "multiSelect": true
    },
    {
        "question": "A call center needs to view historical case data which is archived in a separate, performant data store (20M+ records). When reviewing a case in Salesforce, agents need to see the related historical items. Which mechanism and pattern are recommended to maximize declarative configuration?",
        "answers": {
            "a": "Use ESB tool with Data Virtualization pattern, expose OData endpoint, and then use Salesforce Connect to consume and display the External Object alongside with the Case object.",
            "b": "Use an ESB tool with a fire and forget pattern and then publish a platform event for the requested historical data.",
            "c": "Use an ESB tool with Request-Reply pattern and then make a real-time Apex callout to the ESB endpoint to fetch and display component related to Case object",
            "d": "Use an ETL tool with a Batch Data Synchronization pattern to migrate historical data into Salesforce and into a custom object (historical data) related to Case object."
        },
        "correctAnswer": "a",
        "explanation": "This scenario is a perfect fit for data virtualization. Salesforce Connect allows you to access data from external systems in real-time without storing it in Salesforce. By having the middleware (ESB) expose the historical data via an OData endpoint, Salesforce Connect can declaratively create an External Object that can be displayed on the Case page layout, avoiding code and data replication.",
        "multiSelect": false
    },
    {
        "question": "An Architect is asked to build a solution that allows a service to access Salesforce through the API. What is the first thing the Architect should do?",
        "answers": {
            "a": "Create a new user with System Administrator profile.",
            "b": "Authenticate the integration using existing Single Sign-On.",
            "c": "Authenticate the integration using existing Network-Based Security.",
            "d": "Create a special user solely for the integration purposes."
        },
        "correctAnswer": "d",
        "explanation": "The best practice for security, accountability, and traceability is to create a dedicated integration user for each integration. This user should be configured with a profile that grants only the minimum necessary permissions for the integration to function (principle of least privilege).",
        "multiSelect": false
    },
    {
        "question": "Universal Containers (UC) uses Salesforce as the system of record for customers. Customer data also exists in an ERP, ticketing system, and data lake, each with its own unique identifier. UC plans to use middleware and needs to update the proper external system when a Salesforce record changes, and vice versa. Which two solutions should an Integration Architect recommend?",
        "answers": {
            "a": "Locally cache external ID'S at the middleware layer and design business logic to map updates between systems.",
            "b": "Store unique identifiers in an External ID field in Salesforce and use this to update the proper records across systems.",
            "c": "Use Change Data Capture to update downstream systems accordingly when a record changes.",
            "d": "Design an MDM solution that maps external ID's to the Salesforce record ID."
        },
        "correctAnswer": [
            "c",
            "d"
        ],
        "explanation": "Change Data Capture (CDC) is a scalable way to publish record changes from Salesforce in near real-time, which the middleware can subscribe to for updating downstream systems (C). For a robust, long-term solution that manages identities across multiple systems, a Master Data Management (MDM) solution is the best practice. MDM creates a central hub to map all identifiers to a master record, ensuring data quality and consistency (D).",
        "multiSelect": true
    },
    {
        "question": "A company needs to send data from Salesforce to a homegrown system behind a corporate firewall. The data needs to be pushed one way, not in real time, with an average volume of 2 million records per day. What should an integration architect consider when choosing the right option?",
        "answers": {
            "a": "Due to high volume of records, number of concurrent requests can hit the limit for the REST API call to external system.",
            "b": "Due to high volume of records, a third-party integration tool is required to stage records off platform.",
            "c": "Due to high volume of records, the external system will need to use a BULK API Rest endpoint to connect to salesforce.",
            "d": "Due to high volume of records, salesforce will need to make a REST API call to external system."
        },
        "correctAnswer": "b",
        "explanation": "Pushing 2 million records per day directly from Salesforce via Apex callouts would quickly exhaust daily API and governor limits. A third-party integration (ETL) tool is designed for such high-volume data movement. It can extract the data from Salesforce efficiently (e.g., using the Bulk API), stage it, and then handle the process of loading it into the on-premise system, managing performance and reliability off-platform.",
        "multiSelect": false
    },
    {
        "question": "Northern Trail Outfitters (NTO) has recently implemented middleware. The ERP system requires transactions to be captured in near real time at a REST endpoint, initiated when an order is created in Salesforce. The Salesforce team has limited development resources and requires a low-code solution. Which two options will fulfill the use case requirements?",
        "answers": {
            "a": "Use Remote Process Invocation fire and forget pattern on insert on the order object using Flow Builder.",
            "b": "Implement a Workflow Rule with Outbound Messaging to send SOAP messages to the designated endpoint.",
            "c": "Implement Change Data Capture on the order object and leverage the replay Id in the middleware solution.",
            "d": "Use a process builder to create a Platform Event, selecting the record type as the Platform Event Name on insert of record."
        },
        "correctAnswer": [
            "a",
            "c"
        ],
        "explanation": "Flow Builder allows for a low-code implementation of a 'fire-and-forget' callout to the REST endpoint (A). Alternatively, Change Data Capture (CDC) is a scalable, near real-time, event-based solution. The middleware can subscribe to the order change events and process them reliably using the replay ID (C). Outbound Messaging (B) is SOAP-based, not REST.",
        "multiSelect": true
    },
    {
        "question": "A company's single page application consolidates data through synchronous and asynchronous calls. To measure performance, every call's start and finish time is logged (A to H in a diagram showing the flow). Which computation represents the end-to-end response time from the user's perspective?",
        "answers": {
            "a": "Sum of A to H",
            "b": "Sum of A to F",
            "c": "Sum of A, G, and H",
            "d": "Sum of A and H"
        },
        "correctAnswer": "d",
        "explanation": "From the user's perspective, the response time is the duration from when they initiate an action until they see the final result on their screen. This corresponds to the initial synchronous call from the UI to the application (A) and the final synchronous call from the application back to the UI (H). The intermediate asynchronous calls (B to G) happen in the background and do not block the user interface, so they are not part of the perceived response time.",
        "multiSelect": false
    },
    {
        "question": "A Lightning Web Component (LWC) displays transactions from a custom object in Salesforce. This object is updated periodically and may not have all the necessary transactions at any given time. A middleware service provides RESTful APIs that can retrieve all transactions from the source systems. What should the Integration Architect specify so the LWC can display all required transactions?",
        "answers": {
            "a": "Call the Enterprise APIs directly from the LWC's JavaScript code and redisplay the LWC on receipt of the API response.",
            "b": "Let the Lightning Data Service with an wire adapter display new values when the custom object records change.",
            "c": "Use the Continuation class to call the Enterprise APIs and then process the response in a callback method.",
            "d": "Publish a Platform Event, have the middleware subscribe and update the custom object on receipt of Platform Event."
        },
        "correctAnswer": "a",
        "explanation": "To get the most up-to-date and complete data, the LWC should make a direct call to the middleware's REST API. This is done from the LWC's JavaScript controller using the Fetch API. Upon receiving the response, the JavaScript can then process the data and re-render the component to display the complete list of transactions to the user. This provides a real-time view without waiting for the periodic replication to Salesforce.",
        "multiSelect": false
    },
    {
        "question": "A data migration team is decommissioning a legacy CRM and migrating data to Salesforce. They asked for a recommendation to optimize the performance of the data load. Which approach should be used to meet the requirement?",
        "answers": {
            "a": "Use Bulk API to process jobs in parallel mode.",
            "b": "Contact Salesforce support to schedule performance load.",
            "c": "Use Bulk API to process jobs in serial mode.",
            "d": "Use Bulk API to process jobs in high performance mode."
        },
        "correctAnswer": "a",
        "explanation": "The Bulk API is designed for loading large data sets. To maximize performance, jobs should be processed in parallel mode. This allows Salesforce to process multiple batches from the job simultaneously, significantly speeding up the overall data load time compared to serial mode, which processes one batch at a time.",
        "multiSelect": false
    },
    {
        "question": "An architect needs to integrate three separate external systems with Salesforce and wants to ensure proper security, auditing, and monitoring for each. What is the best practice to achieve this?",
        "answers": {
            "a": "A shared integration user for the three external system integrations.",
            "b": "A shared Connected App for the three external system integrations.",
            "c": "A unique integration user for each external system integration.",
            "d": "A Connected App for each external system integration."
        },
        "correctAnswer": "d",
        "explanation": "Using a separate Connected App for each external system provides the most granular control and visibility. Each Connected App can have its own OAuth policies (IP restrictions, refresh token policies), and API usage is tracked separately, which simplifies monitoring, auditing, and troubleshooting for each specific integration.",
        "multiSelect": false
    },
    {
        "question": "Northern Trail Outfitters needs to make synchronous callouts to 'available to promise' services to query product availability and reserve inventory during customer checkout. Which two considerations should an integration architect make when building a scalable integration solution?",
        "answers": {
            "a": "The typical and worst-case historical response times.",
            "b": "The number batch jobs that can run concurrently.",
            "c": "How many concurrent service calls are being placed.",
            "d": "The maximum query cursors open per user on the service."
        },
        "correctAnswer": [
            "a",
            "c"
        ],
        "explanation": "For a synchronous callout during a user process like checkout, performance is critical. The architect must know the response times of the external service to set appropriate timeouts and manage user experience (A). They must also understand the volume of concurrent calls to ensure the solution can handle peak load without hitting Salesforce or external system limits (C).",
        "multiSelect": true
    },
    {
        "question": "An integration uses Platform Events to send leads to a third-party AI system, which returns a prediction score. A trigger on the Platform Event that receives the score back is failing in Production. What type of monitoring should the Integration Consultant have considered?",
        "answers": {
            "a": "Monitor Platform Events created per hour limits across the Salesforce instance.",
            "b": "Set up debug logs for Platform Event triggers to monitor performance.",
            "c": "Validate the Platform Event definition matches leads definition.",
            "d": "Monitor the volume of leads that are created in Salesforce."
        },
        "correctAnswer": "a",
        "explanation": "Platform Events have publishing and delivery limits that are enforced on an hourly basis. A common reason for failures in a high-volume production environment is exceeding these allocation limits. Proactive monitoring of the 'HourlyPublishedPlatformEvents' limit would have helped anticipate this issue.",
        "multiSelect": false
    },
    {
        "question": "A mobile application for Salesforce users needs a new feature to obtain the device's GPS coordinates and store them on a custom geolocation field. The field is secured with Field Level Security (FLS) so users can only view it, not edit it. The app is already secured with OAuth. What should be done to meet the requirement?",
        "answers": {
            "a": "The mobile device makes a SOAP API inbound call. The mobile device receives a REST Apex callout call.",
            "b": "The mobile device makes a REST API inbound call.",
            "c": "The mobile device makes a REST Apex inbound call."
        },
        "correctAnswer": "c",
        "explanation": "Since FLS prevents the user from directly editing the field, a standard REST API update call would fail. The solution is to create a custom Apex REST Service. The mobile app makes an inbound call to this service. The Apex class then runs in system context (without sharing), which allows it to bypass the FLS and update the field with the provided GPS coordinates.",
        "multiSelect": false
    },
    {
        "question": "A large enterprise in a regulated industry is integrating Salesforce with multiple critical back-office systems. Reliability and monitoring of these integrations are required. Which integration solution should the architect consider?",
        "answers": {
            "a": "Architect Services in back-office systems to support callouts from Salesforce and build reliability, monitoring and reporting capabilities.",
            "b": "Decouple back-office system callouts into separate distinct services that have inbuilt error logging and monitoring frameworks.",
            "c": "Build a custom integration gateway to support back-office system integrations and ensure reliability and monitoring capabilities.",
            "d": "Leverage Middleware for all back-office system integrations ensuring real time alerting, monitoring and reporting capabilities."
        },
        "correctAnswer": "d",
        "explanation": "For a complex landscape with critical integrations requiring high reliability and monitoring, a dedicated middleware platform is the best practice. Middleware provides a centralized layer for handling data transformation, routing, security, and, crucially, robust error handling, logging, monitoring, and alerting capabilities out of the box.",
        "multiSelect": false
    },
    {
        "question": "A company is rolling out Salesforce to all Sales and Service staff. Senior Management has requested that monitoring be in place for Operations to be notified of any degradation in Salesforce performance. How should an integration consultant implement monitoring?",
        "answers": {
            "a": "Use Salesforce limits API to capture current API usage and configure alerts for monitoring.",
            "b": "Use APIEVENT to track all user-initiated API calls through SOAP, REST or BULK APIs.",
            "c": "Identify critical business processes and establish automation to monitor performance against established benchmarks.",
            "d": "Request Salesforce to monitor the Salesforce instance and notify when there is degradation in performance."
        },
        "correctAnswer": "c",
        "explanation": "Effective performance monitoring isn't just about technical limits; it's about business impact. The best approach is to identify the most critical business processes (e.g., 'Create a Quote', 'Save a Case'), establish performance benchmarks for them, and then use automation (e.g., synthetic monitoring tools) to continuously test these processes and alert when performance degrades.",
        "multiSelect": false
    },
    {
        "question": "A large enterprise is implementing Sales Cloud. Business requirements include accessing current inventory, generating quotes with pricing from the ERP, accessing invoices, and using an external BI tool for dashboards. The MDM is the system of record for customers. Which systems must be integrated with Salesforce?",
        "answers": {
            "a": "ERP, MDM, BI tool and Data Warehouse",
            "b": "ERP, Inventory, Pricing Engine, Invoices system",
            "c": "ERP, MDM, Data Warehouse, Invoices system",
            "d": "ERP, Invoices system, Data Warehouse and BI Tool"
        },
        "correctAnswer": "a",
        "explanation": "Based on the requirements: 1) Pricing and Invoices are in the ERP. 2) Customer data comes from the MDM. 3) Dashboards are in the BI tool, which needs sales data from Salesforce. 4) Inventory data might be in the ERP or a separate system, but ERP is the common source. A Data Warehouse is often used to feed the BI tool. Therefore, integrating with ERP, MDM, and providing data to the BI tool (often via a Data Warehouse) are the key integration points.",
        "multiSelect": false
    },
    {
        "question": "An integration requires all Apex REST API clients to adhere to RAML specifications, which serve as interface contracts. Which two design specifications should the architect include to ensure that Apex unit tests confirm adherence to the RAML specs?",
        "answers": {
            "a": "Call the Apex REST API Clients in a test context to get the mock response.",
            "b": "Require the Apex REST API Clients to implement the HttpCalloutMock.",
            "c": "Call the HttpCalloutMock implementation from the Apex REST API Clients.",
            "d": "Implement HttpCalloutMock to return responses per RAML specification."
        },
        "correctAnswer": [
            "a",
            "d"
        ],
        "explanation": "To test a callout, you must use a mock response. The architect should specify that a class implementing the HttpCalloutMock interface be created, and that this class must return mock HTTP responses that strictly follow the RAML specification (D). The unit test for the client class must then invoke the callout method within a test context (Test.startTest()/stopTest()) so that the mock implementation is used instead of making a real callout (A).",
        "multiSelect": true
    },
    {
        "question": "An architect recommended using Apex code to make callouts to an external system to process an insurance quote. What governor limit should the integration architect consider to make sure this is the right option for the integration?",
        "answers": {
            "a": "The maximum callouts in a single Apex transaction.",
            "b": "The maximum number of parallel Apex callouts in a single continuation.",
            "c": "The limit on long-running requests (total execution time).",
            "d": "The limit of pending operations in the same transaction."
        },
        "correctAnswer": "a",
        "explanation": "A key governor limit for Apex callouts is the number of callouts allowed in a single transaction (currently 100). The architect must evaluate if the business process for processing a quote will ever require more than this limit within one execution context. If so, an asynchronous pattern or a different integration approach may be needed.",
        "multiSelect": false
    },
    {
        "question": "An integration is being set up between a Salesforce org and an external data source using Salesforce Connect. The external data source supports Open Data Protocol (OData). Which three configurations should an Integration Architect recommend to secure requests coming from Salesforce?",
        "answers": {
            "a": "Configure Identity Type for OData connection.",
            "b": "Configure a Certificate for OData connection.",
            "c": "Configure Special Compatibility for OData connection.",
            "d": "Configure CSRF Protection for OData connection.",
            "e": "Configure CSRF Protection on External Data Source."
        },
        "correctAnswer": [
            "a",
            "b",
            "d"
        ],
        "explanation": "To secure the connection, you must configure the authentication method using the 'Identity Type' setting (e.g., Named Principal, OAuth 2.0) (A). To protect data in transit, you can use a 'Certificate' for SSL/TLS encryption (B). To prevent cross-site request forgery attacks, you should enable the 'CSRF Protection' setting on the External Data Source definition in Salesforce (D).",
        "multiSelect": true
    },
    {
        "question": "A company needs to check customer communication preferences from an external service in real-time within a Lightning Flow. The external service exposes a REST API with an OpenAPI 2.0 specification. The flow needs Boolean and string values back to make decisions. Which pattern and mechanism is most suitable?",
        "answers": {
            "a": "Fire and Forget: Process-driven platform events publishes events on Salesforce Event Bus.",
            "b": "Remote Call-In: Salesforce REST API with REST Composite Resources.",
            "c": "Request-Reply: Enhanced External Services invokes a REST API.",
            "d": "Data Virtualization: Salesforce Connect map data external REST data in external objects."
        },
        "correctAnswer": "c",
        "explanation": "Enhanced External Services is designed for this exact use case. It allows you to declaratively register an external service using its OpenAPI spec and then invoke its methods as actions directly within a Flow. This fits the synchronous Request-Reply pattern needed to get an immediate response for the flow's logic, all without writing Apex code.",
        "multiSelect": false
    },
    {
        "question": "Which three considerations should an Integration Architect consider when recommending Platform Event as an Integration solution?",
        "answers": {
            "a": "Inability to query event messages using SOQL",
            "b": "Subscribe to an AssetToken Event stream to monitor OAuth2.0 authentication activity.",
            "c": "Inability to create a Lightning record page for platform events.",
            "d": "When you delete an event definition, it's permanently removed and can't be restored.",
            "e": "You can use Event Monitoring to track user activity, such as logins and running reports."
        },
        "correctAnswer": [
            "a",
            "c",
            "d"
        ],
        "explanation": "When proposing Platform Events, an architect must highlight their characteristics and limitations. Key considerations include: event messages are not stored in standard objects and thus cannot be queried via SOQL (A); they are not data objects and do not have record pages (C); and deleting an event's definition is a permanent, irreversible metadata change (D).",
        "multiSelect": true
    },
    {
        "question": "An integration solution uses the REST API to update Account, Contact, and other related information. Data volumes have increased, and daily API call limits are being exceeded. The customer wants to decrease the number of API calls using bulk updates but prefers to continue using the REST API. Which REST API composite resource should the architect use to allow up to 200 records in one API call?",
        "answers": {
            "a": "SObject Collections",
            "b": "SObject Tree",
            "c": "Batch",
            "d": "Composite"
        },
        "correctAnswer": "a",
        "explanation": "The SObject Collections resource is specifically designed for creating, updating, or deleting a collection of records of the same SObject type in a single request. It supports up to 200 records per call, making it ideal for bulk operations on unrelated records and reducing API call consumption.",
        "multiSelect": false
    },
    {
        "question": "A company accepts payment requests 24x7. Their SLA requires every request to be processed by their Payment System. They are encountering intermittent update errors when multiple processes try to update the same Payment Request record simultaneously. Which two recommendations should an integration architect make to improve SLA and handle update conflicts?",
        "answers": {
            "a": "Middleware should coordinate request delivery and payment processing.",
            "b": "Data Entry Point and Middleware should automatically retry requests.",
            "c": "Payment System should process a payment request only once.",
            "d": "Payment System and Middleware should automatically retry requests."
        },
        "correctAnswer": [
            "a",
            "c"
        ],
        "explanation": "Using middleware to mediate and coordinate the flow of requests ensures reliable, ordered delivery and can manage retries centrally, preventing a chaotic free-for-all (A). To prevent duplicate processing and handle race conditions, the Payment System itself must be idempotent—it should use the globally unique identifier to ensure that it processes any given payment request exactly once, regardless of how many times it receives the request (C).",
        "multiSelect": true
    },
    {
        "question": "A customer imports data into Salesforce using the Bulk API in parallel mode with a batch size of 2000. Batches frequently fail with the error 'Max CPU time exceeded'. A smaller batch size will fix this error. Which two options should be considered as potential side effects of using a smaller batch size?",
        "answers": {
            "a": "Smaller batch size may cause record-locking errors.",
            "b": "Smaller batch size may increase time required to execute bulk jobs.",
            "c": "Smaller batch size may exceed the concurrent API request limits.",
            "d": "Smaller batch size can trigger 'Too many concurrent batches' error."
        },
        "correctAnswer": [
            "a",
            "b"
        ],
        "explanation": "Reducing the batch size means more batches will be created for the same amount of data. This increases the overall processing overhead and can extend the total job execution time (B). Additionally, having more, smaller batches running in parallel increases the likelihood of two batches attempting to lock the same parent record or related records, leading to record-locking errors (A).",
        "multiSelect": true
    },
    {
        "question": "Northern Trail Outfitters (NTO) uses a custom mobile app with Salesforce Chatter Feeds. NTO wants to automatically post a Chatter item to Twitter whenever the post includes the #thanksNTO hashtag. Which API should an Integration Architect use to meet this requirement?",
        "answers": {
            "a": "Connect REST API",
            "b": "REST API",
            "c": "Streaming API",
            "d": "Apex REST"
        },
        "correctAnswer": "a",
        "explanation": "The Connect REST API is specifically designed for accessing Chatter feeds and social data like users, groups, and files. It is the most direct and feature-rich API for interacting with Chatter content, making it the ideal choice for a process that needs to read Chatter posts.",
        "multiSelect": false
    },
    {
        "question": "A B2C company is expanding to Latin America and must be able to completely delete a customer's personal data on demand, in compliance with anticipated privacy regulations. Data is stored in legacy mainframes, Salesforce Clouds (Commerce, Service, etc.), and other systems. Which three requirements should the integration architect prioritize?",
        "answers": {
            "a": "Manual steps and procedures that may be necessary.",
            "b": "Impact of deleted records on system functionality.",
            "c": "Ability to delete personal data in every system.",
            "d": "Feasibility to restore deleted records when needed.",
            "e": "Ability to provide a 360-degree view of the customer."
        },
        "correctAnswer": [
            "a",
            "b",
            "c"
        ],
        "explanation": "First, the solution must technically be able to delete data in every single system where it resides (C). The architect must analyze the downstream impact of these deletions on system functionality, such as reporting or related records (B). Given the complexity and legacy systems involved, it's also critical to identify and document any necessary manual steps or procedures that cannot be automated to ensure the process can be completed successfully (A).",
        "multiSelect": true
    },
    {
        "question": "A company wants to standardize exception tracking. The plan is to build a company-wide logging service on middleware, create Salesforce Case records for exceptions based on certain thresholds, and change all Apex Loggers to publish exceptions as custom Platform Events. Which two specifications should the architect include in the logging service architecture?",
        "answers": {
            "a": "Receive Application Events through Change Data Capture (CDC).",
            "b": "Create Salesforce Cases using the Salesforce REST, SOAP or Bulk API.",
            "c": "Create Salesforce Cases conditionally using automatic Case creation rules.",
            "d": "Subscribe to the Application Exceptions using the Salesforce Streaming API."
        },
        "correctAnswer": [
            "b",
            "d"
        ],
        "explanation": "The logging service, which is external to Salesforce, needs to listen for the Application Exception Platform Events. It can do this by subscribing to the event channel using the Streaming API (CometD) (D). Once the service receives an event and determines a Case is needed, it will act as an API client and use a standard inbound API (like REST or SOAP) to create the Case record in Salesforce (B).",
        "multiSelect": true
    },
    {
        "question": "Customer Support agents need seamless access to customer billing information from an Enterprise Billing System (EBS) and view generated bills from a Document Management System (DMS). Only authorized users are allowed access to these systems. Which three authorization and authentication needs should an integration consultant consider?",
        "answers": {
            "a": "Users should be authorized to view information specific to the customer they are servicing without a need to search for customer.",
            "b": "Identify options to maintain DMS and EBS authentication and authorization details in Salesforce.",
            "c": "Consider Enterprise security needs for access to DMS and EBS.",
            "d": "Consider options to migrate DMS and EBS into Salesforce.",
            "e": "Users should be authenticated into DMS and EBS without having to enter username and password."
        },
        "correctAnswer": [
            "a",
            "c",
            "e"
        ],
        "explanation": "The solution must be seamless, so users should not have to log in again, indicating a need for Single Sign-On (SSO) (E). The access should be contextual, automatically showing billing info for the customer record being viewed in Salesforce (A). Finally, the entire solution must comply with the broader enterprise security policies for accessing these critical systems (C).",
        "multiSelect": true
    },
    {
        "question": "What is the first thing an Integration Architect should validate if a callout from a Lightning Web Component to an external endpoint is failing?",
        "answers": {
            "a": "The endpoint domain has been added to Cross-Origin Resource Sharing.",
            "b": "The endpoint URL has been added to Content Security Policies.",
            "c": "The endpoint URL has added been to an outbound firewall rule.",
            "d": "The endpoint URL has been added to Remote Site Settings."
        },
        "correctAnswer": "a",
        "explanation": "Callouts made directly from a browser-side component like an LWC are subject to the browser's same-origin policy. For the callout to a different domain to succeed, that domain must be registered in Salesforce's Cross-Origin Resource Sharing (CORS) allowlist. A missing CORS entry is the most common reason for these callouts to be blocked by the browser.",
        "multiSelect": false
    },
    {
        "question": "When an order is marked as 'Fulfilled' in Salesforce, all order and line item data must be sent to an existing finance application's web service for invoicing. The business requires a guarantee that each fulfilled order reaches the finance application exactly once. Which integration approach meets these requirements?",
        "answers": {
            "a": "Trigger invokes Queueable Apex method, with custom error handling process.",
            "b": "Trigger makes @future Apex method, with custom error handling process.",
            "c": "Button press invokes synchronous callout, with user handling retries in case of error",
            "d": "Outbound Messaging, which will automatically handle error retries to the service."
        },
        "correctAnswer": "a",
        "explanation": "Queueable Apex is superior to @future for this use case because it allows for more complex logic, chaining jobs, and better error handling. By invoking a Queueable job from a trigger, the process is asynchronous. Within the Queueable class, the developer can implement custom error handling and retry logic, and by implementing the Database.Stateful interface, can track the job's state to ensure the 'exactly once' delivery requirement is met.",
        "multiSelect": false
    },
    {
        "question": "A customer is evaluating Platform Events and Outbound Messages for a near-real time integration with 3,000 consumers. Which three considerations should be evaluated when deciding between the solutions?",
        "answers": {
            "a": "Both Platform Events and Outbound Message offer declarative means for asynchronous near-real time needs. They aren't best suited for real-time integrations.",
            "b": "In both Platform Events and Outbound Messages, the event messages are retried by and delivered in sequence, and only once. Salesforce ensures there is no duplicate message delivery.",
            "c": "Message sequence is possible in Outbound Message but not guaranteed with Platform Events. Both offer very high reliability. Fault handling and recovery are fully handled by Salesforce.",
            "d": "Number of concurrent subscribers to Platform Events is capped at 2,000. An Outbound Message configuration can pass only 100 notifications in a single message to a SOAP end point.",
            "e": "Both Platform Events and Outbound Message are highly scalable. However, unlike Outbound Message, only Platform Events have Event Delivery and Event Publishing limits to be considered."
        },
        "correctAnswer": [
            "a",
            "c",
            "e"
        ],
        "explanation": "Both are asynchronous, near-real-time solutions that can be configured declaratively (A). A key difference is that Outbound Message guarantees in-order delivery, while Platform Events do not (C). Finally, it's crucial to know that Platform Events are subject to specific publishing and delivery limits based on the org's license, whereas Outbound Messages have different types of limits (E). The number of subscribers (3,000) is also a critical factor, as standard Platform Events have a concurrent subscriber limit of 2,000 (mentioned in option D, though D is not a correct comparison overall).",
        "multiSelect": true
    }
];

export { quizData };