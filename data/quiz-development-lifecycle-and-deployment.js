/**
 * Salesforce Development Lifecycle and Deployment Architect Quiz Questions
 * (Batch 1: Questions 1-30)
 * * Format for each question:
 * {
 * question: "The question text",
 * answers: {
 * a: "Option A",
 * b: "Option B",
 * ...
 * },
 * correctAnswer: "a" or ["a", "b"] for multiple correct answers,
 * explanation: "Explanation of the correct answer(s)",
 * multiSelect: true/false - Whether question allows multiple selections
 * }
 */

[
    {
      "question": "Universal Containers has started building a customer Lightning community that contains a few dozen Aura components. The development team lead has come to the Salesforce architect about questions regarding testing the Lightning components. What two knowledge points can the architect pass to the development team lead?",
      "answers": {
        "a": "There is a $T test helper object that can be used to create the instance of the Lightning component, and it is promise enabled.",
        "b": "The testing of the JavaScript part of the Aura component can be tested in the Jest framework and the Apex controllers can be tested using test classes.",
        "c": "Install the Lightning test service AppExchange package to enable the Aura component testing.",
        "d": "The testing can be viewed in the lightning.force.com/c/jasminetests.app URL. The page loads and runs Jasmine test and writes pass/fail information to the screen."
      },
      "correctAnswer": ["b", "c"],
      "explanation": "Testing Aura components involves two main parts: the server-side Apex controllers and the client-side JavaScript. Apex controllers are tested using standard Apex test classes. The client-side JavaScript was historically tested using the Lightning Testing Service (LTS), which was an AppExchange package (C). While Jest is the modern standard for LWC, it can also be adapted for Aura component JavaScript, making (B) a valid point, especially the part about Apex controllers.",
      "multiSelect": true
    },
    {
      "question": "What are three advantages of using the SFDX?",
      "answers": {
        "a": "Can store code on a local machine, or a version control system.",
        "b": "Can use native Deployment Rollback Tool to quickly revert to prior state.",
        "c": "Can quickly deploy metadata using Execute Anonymous.",
        "d": "Can install application metadata from a central repository.",
        "e": "Can create scratch orgs."
      },
      "correctAnswer": ["a", "d", "e"],
      "explanation": "SFDX (Salesforce Developer Experience) revolutionizes development by being source-driven. This allows code to be stored and versioned in a version control system (A). It facilitates installing metadata from a central repository (like Git) (D) and introduces scratch orgs, which are temporary, disposable orgs for development and testing (E). There is no native SFDX rollback tool (B), and Execute Anonymous (C) is a debugging tool, not a deployment mechanism.",
      "multiSelect": true
    },
    {
      "question": "Universal Containers (UC) Customer Community is scheduled to go live in the Europe, Middle East, and Africa (EMEA) region in 3 months. UC follows a typical centralized governance model. Two weeks ago, the project stakeholders informed the project team about the recent changes in mandatory compliance requirements needed to go live. The project team analyzed the requirements and have estimated additional budget needs of 30% of the project cost for incorporating the compliance requirements. Which management team is empowered to approve this additional budget requirements?",
      "answers": {
        "a": "Executive Steering Committee",
        "b": "Change Control Board",
        "c": "Security Review Committee",
        "d": "Project Management Committee"
      },
      "correctAnswer": "a",
      "explanation": "The Executive Steering Committee is typically responsible for the overall project success, including strategic alignment, funding, and major decisions. A 30% budget increase is a significant financial decision that falls under their authority, especially as it's driven by mandatory compliance, which has strategic implications.",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) is planning to move to Salesforce Sales Cloud and retire its homegrown on-premise system. As part of the project, UC will need to migrate 5 million Accounts, 10 million Contacts, and 5 million Leads to Salesforce. Which three areas should be tested as part of data migration?",
      "answers": {
        "a": "Page layout assignments",
        "b": "Lead assignment",
        "c": "Account and Lead ownership",
        "d": "Data transformation against source system",
        "e": "Contact association with contact account"
      },
      "correctAnswer": ["b", "c", "e"],
      "explanation": "After data is migrated, it's critical to test that business logic triggered by that data works correctly. This includes testing Lead assignment rules (B), ensuring correct Account and Lead ownership (C), and verifying record relationships, like a Contact's association to its Account (E). Page layouts (A) and data transformation (D) are part of the build and migration *process* itself, not post-migration functional testing.",
      "multiSelect": true
    },
    {
      "question": "Universal Containers uses multiple Salesforce orgs for its different lines of business (LOBS). In a recent analysis, the architect found that UC could have a more complete view of its customers by gathering customer data from different orgs. What two options can an architect recommend to accomplish the customer 360-degree view?",
      "answers": {
        "a": "Implement a Complete Graph multi-org strategy by allowing each org to connect directly to every other, reading and writing customer data from the orgs where it has originally created.",
        "b": "Migrate from multi-org to single-org strategy, consolidating customer data in the process.",
        "c": "Implement a Single Package multi-org strategy by developing and deploying to all orgs a managed package which reads and consolidates customer 360-degree view from the different orgs.",
        "d": "Implement a Hub-and-Spoke multi-org strategy by consolidating customer data in a single org, which will be the master of customer data, and using integration strategies to let the LOBS orgs read and write from it."
      },
      "correctAnswer": ["b", "d"],
      "explanation": "The two primary strategies to achieve a 360-degree customer view are to either consolidate all business units into a single org (B) or to designate one org as the 'hub' or 'master' for all customer data, with other orgs ('spokes') integrating with it (D). A 'complete graph' (A) is unmanageable. A managed package (C) is a deployment model, not a data consolidation strategy.",
      "multiSelect": true
    },
    {
      "question": "Universal Containers (UC) have developed a managed package targeted for AppExchange. The product includes some Apex code to customize and create layouts. UC is in the testing phase of the package, so it's not certified yet. During testing on the target org, the Apex code for the layouts fails. Why are the Apex classes not able to access the metadata of the target org during testing?",
      "answers": {
        "a": "Apex Settings to allow the access to metadata is not switched on.",
        "b": "UC needs to turn on Apex Settings within the custom metadata type.",
        "c": "UC needs to get the managed package certified by the Salesforce security review.",
        "d": "The solution is flawed. UC should utilize the Tooling API from a web service call to modify the layouts."
      },
      "correctAnswer": "c",
      "explanation": "By default, Apex in a managed package cannot access the subscribing org's metadata (like describing objects or modifying layouts) until the package has passed the Salesforce security review and been certified. This is a security measure to protect subscribers.",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) is hiring offshore agile development teams to decrease costs and enhance UC's capability of delivering new features to its customers. However, the CTO is not able to follow or measure the work of those teams. What should an architect recommend to increase transparency?",
      "answers": {
        "a": "Request the offshore teams to send daily emails to the CTO with the progress of the teams.",
        "b": "Schedule a daily stand-up meeting with representatives of all offshore teams to share the progress of the teams.",
        "c": "Ask the offshore teams to add their progress and status in a shared spreadsheet.",
        "d": "Request the offshore teams to share their work in progress in a virtual Kanban board tool."
      },
      "correctAnswer": "d",
      "explanation": "A virtual Kanban board is a core Agile tool designed for this exact purpose. It provides real-time, visual transparency into what work is in progress, what is completed, and what is blocked. This is far more efficient and effective than daily emails (A), spreadsheets (C), or even daily stand-ups (B) for a CTO-level overview.",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) has multiple teams working on different projects. Multiple projects will be deployed to many production orgs. During code reviews, the architect finds inconsistently named variables and lack of best practices. What should an architect recommend to improve consistency?",
      "answers": {
        "a": "Execute regression testing before code can be committed.",
        "b": "Require pull requests to be reviewed by two developers before merging.",
        "c": "Create a Center of Excellence for release management.",
        "d": "Use static code analysis to enforce coding standards."
      },
      "correctAnswer": "d",
      "explanation": "Static code analysis tools (like PMD, Checkmarx, or SonarQube) are designed to automatically scan code and enforce predefined coding standards, such as naming conventions and best practices. This provides immediate, consistent feedback to developers and prevents inconsistent code from being committed.",
      "multiSelect": false
    },
    {
      "question": "Sales and Service products will be created by two teams that will use second generation managed package(s). The Sales team will use a specific function of the Service product, but the architect wants to ensure that this team will only use the functions exposed by the Service team. No other team will use these same functions. What should an architect recommend?",
      "answers": {
        "a": "Create a managed package with both products and create a code review process with an approver from each team.",
        "b": "Create two second generation managed packages with the same namespace and set the methods that should be shared with the @namespaceAccessible Annotation.",
        "c": "Create two managed packages. Create an authentication function in the Service package that will return a token if a Sales user is authorized to call the exposed function. Validate the token in the Service functions.",
        "d": "Create two managed packages with Sales and Service namespaces. Set the methods to be shared with the @salesAccessible annotation."
      },
      "correctAnswer": "b",
      "explanation": "When you need to share Apex code between packages, the standard mechanism is to put both packages in the same namespace. Then, the 'Service' package can expose specific methods to other packages *in the same namespace* using the `@namespaceAccessible` annotation. This maintains encapsulation while allowing controlled sharing.",
      "multiSelect": false
    },
    {
      "question": "Northern Trail Outfitters (NTO) has well-defined release management processes for both large and small projects. NTO's development team created a workflow and a trigger for the changes in its opportunity renewal process. What should the architect recommend for release planning of these changes?",
      "answers": {
        "a": "Plan this as a minor release with training and change management.",
        "b": "Plan this as a major release and align with a Salesforce major release.",
        "c": "Plan this as an interim release after checking with Salesforce support.",
        "d": "Plan this as a patch release and align with the Salesforce patch release."
      },
      "correctAnswer": "a",
      "explanation": "Changes to a core business process like opportunity renewals, even if technically just a workflow and a trigger, will change how users work. This requires training and change management to ensure adoption and prevent confusion. It's a 'minor release' because it delivers new functionality, as opposed to a 'patch' (a bug fix) or a 'major release' (a large-scale project).",
      "multiSelect": false
    },
    {
      "question": "What are three advantages of the package development model?",
      "answers": {
        "a": "Improving team development and collaboration",
        "b": "Providing its own source control, so the source can be deployed in any sandbox orgs",
        "c": "Facilitating automated testing and continuous integration.",
        "d": "Significantly reducing the need for manually tracking changes.",
        "e": "Eliminating the need of using change set, which should no longer be used as it can get messy working with package development models."
      },
      "correctAnswer": ["a", "c", "d"],
      "explanation": "The package development model groups metadata into logical, versionable artifacts. This modularity improves team collaboration by isolating workstreams (A), facilitates CI/CD by creating a deployable artifact that can be automatically tested (C), and drastically reduces manual change tracking because the package version *is* the source of truth (D).",
      "multiSelect": true
    },
    {
      "question": "What would a technical architect recommend to avoid possible delays while deploying a change set?",
      "answers": {
        "a": "Change set performance is independent of included components.",
        "b": "Manually validate change sets before deployment.",
        "c": "Manually create new custom objects and new custom fields.",
        "d": "Manually apply the field type changes."
      },
      "correctAnswer": "b",
      "explanation": "Validating a change set allows you to run all tests and check for dependencies *before* the actual deployment window. This surfaces any errors (like test failures or missing components) ahead of time, so they can be fixed without delaying the final deployment.",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) is working with Salesforce CPQ, which uses configuration SObjects to drive business logic. What are two best practice recommendations an architect should propose to allow UC to deploy CPQ features as part of their CI/CD process?",
      "answers": {
        "a": "Use data loader to deploy CSV files.",
        "b": "Use an open source SFDX plugin and version control.",
        "c": "Build an Apex framework to deploy CPQ records.",
        "d": "Use a third-party product."
      },
      "correctAnswer": ["b", "d"],
      "explanation": "CPQ configuration is stored as *data* (records) in SObjects, not metadata. Standard CI/CD tools deploy metadata. To deploy this data, you need specialized tools. Third-party DevOps tools (like Copado, Gearset, etc.) (D) have built-in solutions for this. Alternatively, the community has created open-source SFDX plugins (B) that can extract this data to JSON/CSV, commit it to version control, and deploy it as part of a pipeline.",
      "multiSelect": true
    },
    {
      "question": "Universal Containers (UC) has multi-cloud architecture in a single org. The Sales Cloud dev team is working in a Dev Pro sandbox (DevPro1) of delivering a release in three months. The business requirements from Service Cloud warrant a quicker release in four weeks, but need part of the Sales Cloud work that is completed in DevPro1. The decision of using a separate Dev Pro sandbox (DevPro2) is still pending. The DevPro1 was upgraded to preview for next salesforce major release two weeks ago. What should an Architect recommend?",
      "answers": {
        "a": "Ask the second work stream team to work on the same DevPro1 sandbox.",
        "b": "Push back on the requirements because adding another work stream will bring some risks with it.",
        "c": "Clone the DevPro1 sandbox and name it DevPro2 for the second work stream to work on the Service Cloud requirements.",
        "d": "DevPro1 cannot be cloned because it is on a different version from Production. Just create new DevPro2, and migrate metadata from DevPro1."
      },
      "correctAnswer": "d",
      "explanation": "A key rule of sandbox management is that you cannot create a sandbox (or clone one) on a *different major Salesforce version* from its source org. Since DevPro1 is on the preview and Production (the source of all new sandboxes) is not, DevPro1 cannot be cloned. The correct approach is to create a new sandbox (DevPro2) from Production and then use a metadata deployment tool (like SFDX or ANT) to migrate the *completed* work from DevPro1 to DevPro2.",
      "multiSelect": false
    },
    {
      "question": "Which are two recommended methods of creating test data in Salesforce?",
      "answers": {
        "a": "Utilize Heroku Connect to provide test class data.",
        "b": "Reference data from middleware directly within your test class.",
        "c": "Host a mock endpoint to produce sample information from an endpoint.",
        "d": "Load a CSV as a static resource and reference it in a test class."
      },
      "correctAnswer": ["c", "d"],
      "explanation": "To create realistic test data: (D) You can store large, complex data sets in a CSV file, upload it as a static resource, and then have your test class read and parse this file to create records. This is ideal for testing complex logic. (C) When testing a callout, you can't use a real endpoint. Instead, you create a mock endpoint (using `HttpCalloutMock`) that returns a predefined, sample JSON/XML response for your test to consume.",
      "multiSelect": true
    },
    {
      "question": "Northern Trail Outfitters (NTO) recently acquired Eastern Trail Outfitters (ETO). NTO's sales leadership team had hands-on experience with the ETO's Sales Optimization app and have given the feedback that the app would benefit NTO's sales team. Which option should the architect recommend for having ETO's Sales Optimization app in NTO's Salesforce org in the shortest possible time?",
      "answers": {
        "a": "Create users in ETO's org and provide access to NTO's sales team.",
        "b": "Create an unmanaged package of the app and deploy in NTO's org.",
        "c": "Create a managed package of the app and deploy in NTO's org.",
        "d": "Create a core team and build the Sales Optimization app in NTO's org."
      },
      "correctAnswer": "b",
      "explanation": "An unmanaged package is the fastest way to move metadata (the app) from one org to another. It's a simple container for components. A managed package (C) is for commercial distribution and adds complexity (like IP protection and security review) that isn't needed here. Re-building the app (D) is the slowest option. Giving users access to another org (A) doesn't move the app.",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) is looking for advice on how often it should refresh its sandboxes. UC currently uses a development lifecycle that starts with developer environments and moves to integration testing, QA testing, UAT, and then production. They have many scrum teams working concurrently and the teams do not agree on when refreshes should occur. What two recommendations should the architect suggest?",
      "answers": {
        "a": "Development environments should generally be refreshed after each working feature has been successfully migrated.",
        "b": "Sandboxes should be refreshed on the day when the refresh is allowed for that type of sandbox.",
        "c": "Productions is the only pristine environment.",
        "d": "Integration sandboxes should be refreshed rarely because of the burden of maintaining the various API."
      },
      "correctAnswer": ["a", "c"],
      "explanation": "Production is the single source of truth (the 'pristine environment') (C). All development should start from a recent copy of production's metadata. Developer sandboxes (or scratch orgs) should be refreshed or recreated frequently (A) to prevent 'configuration drift' and ensure developers are always building on the most current baseline, integrating changes from other teams.",
      "multiSelect": true
    },
    {
      "question": "Universal Containers (UC) is embarked on an enterprise salesforce transformation journey, UC would like to streamline and automate deployment to different sandboxes during the build phase. Upon customer acceptance in UAT, the company requested to automate the production deployment as well. As the deployment architect, what is the recommendation to satisfy the customer requirements?",
      "answers": {
        "a": "Recommend using SFDX and documents the deployment commands with steps to be executed for each environment.",
        "b": "Recommend using the ANT script and build a custom application to run the script and use change sets to deploy supported metadata.",
        "c": "Recommend using an AppExchange solution that packages the deployment components and you can run the deployment wizard to track deployment result.",
        "d": "Recommend using the Continues integration and the Continues deployment tool and build the pipeline to deploy to sandboxes and production."
      },
      "correctAnswer": "d",
      "explanation": "The requirement is to 'streamline and automate' deployments to all environments, including production. This is the definition of Continuous Integration (CI) and Continuous Deployment (CD). A CI/CD tool (like Jenkins, GitLab CI, Copado, Gearset, etc.) builds a 'pipeline' that automatically deploys, tests, and promotes changes through the sandbox lifecycle and into production.",
      "multiSelect": false
    },
    {
      "question": "The CTO at Universal Containers decided to implement the Scrum framework for its agile teams, and communicated a set of Scrum principles to the company. Which describes a Scrum principle?",
      "answers": {
        "a": "Create transparency by being honest and clear about timing, planning, and obstacles",
        "b": "Respect other teams by not doing their work (a developer should not test the software).",
        "c": "Deliver working software, so if a software component is working, avoid changing it",
        "d": "Embrace change by working on a different scope every day."
      },
      "correctAnswer": "a",
      "explanation": "Transparency (or 'Openness' in the Scrum values) is a foundational principle. The team and stakeholders agree to be transparent about their work, progress, and obstacles (e.g., in the daily stand-up and sprint review) so that they can effectively inspect and adapt. (B) is incorrect; Scrum teams are cross-functional (developers *do* test).",
      "multiSelect": false
    },
    {
      "question": "A developer was trying to retrieve the metadata from an org and ran the sfdx force:source:retrieve command. When the command was run, the developer received the error message: 'This command is required to run from within an SFDX project.' What can be two possible reasons that caused this problem?",
      "answers": {
        "a": "The developer created the project, but ran the Command outside of the project directory.",
        "b": "The developer hadn't run the sfdx force:project:create command.",
        "c": "The developer forgot to add then option with a project name as a command line argument.",
        "d": "The developer created the project within VSCode, but ran the command in a separate terminal"
      },
      "correctAnswer": ["a", "b"],
      "explanation": "SFDX commands must be run from within a directory that has been initialized as an SFDX project (which contains the `sfdx-project.json` file). This error occurs if either the developer never created the project in the first place (B), or they created the project but their terminal's current working directory is outside that project folder (A).",
      "multiSelect": true
    },
    {
      "question": "What are two limitations an architect should consider when designing a strategy for managing technical reference data, with multiple related objects?",
      "answers": {
        "a": "HTTP response size",
        "b": "Apex CPU limits",
        "c": "Circular relationships",
        "d": "Depth of nested relationships"
      },
      "correctAnswer": ["c", "d"],
      "explanation": "When deploying data with relationships (e.g., parent-child), data-loading tools must understand the order of operations. This becomes difficult or impossible if there are circular relationships (e.g., A refers to B, and B refers to A) (C) or very deep, nested relationships (e.g., A->B->C->D->E) (D). Both of these complicate the process of exporting and importing data while maintaining relational integrity.",
      "multiSelect": true
    },
    {
      "question": "Universal Containers is adopting Scrum as an agile methodology and wants to choose a software tool to support the adoption. What three key features of an agile development support tool should an architect look for?",
      "answers": {
        "a": "Product backlog prioritization",
        "b": "Sprint backlog management",
        "c": "Work (for example, user stories or tasks) assignment",
        "d": "Kanban board",
        "e": "Email notifications when work is created or changed"
      },
      "correctAnswer": ["a", "b", "c"],
      "explanation": "A tool supporting Scrum must be able to manage the core artifacts of Scrum. This includes the 'Product Backlog' and the ability to prioritize it (A), the 'Sprint Backlog' to manage work within an iteration (B), and the ability to assign that work (user stories, tasks) to team members (C). A Kanban board (D) is also a common feature but is more central to the Kanban methodology, whereas A, B, and C are essential for Scrum.",
      "multiSelect": true
    },
    {
      "question": "The team at Universal Containers is building an application on Java that will interact with its Salesforce application. They want to use SOQL queries to retrieve and make changes to smaller pieces of Salesforce metadata through this application. Which API should the team leverage?",
      "answers": {
        "a": "Metadata API",
        "b": "User Interface AP!",
        "c": "Tooling API",
        "d": "Any Salesforce API"
      },
      "correctAnswer": "c",
      "explanation": "The Tooling API is designed for building development tools. It provides SOQL access to metadata (like Apex Classes, Triggers, Custom Fields) and is optimized for retrieving or modifying *smaller pieces* of metadata, which is exactly what the Java application needs to do. The Metadata API is for large-scale, file-based metadata migration, not granular SOQL queries.",
      "multiSelect": false
    },
    {
      "question": "Universal Containers' architect is documenting the application lifecycle management (ALM) process to communicate it to the development teams from different Implementation partners. Which three steps apply to any Salesforce development project?",
      "answers": {
        "a": "Build Release",
        "b": "Test",
        "c": "Develop",
        "d": "Continuous Integration.",
        "e": "Change Sets"
      },
      "correctAnswer": ["a", "b", "c"],
      "explanation": "Application Lifecycle Management (ALM) describes the core process of building software. At its simplest, this involves developing the feature (C), testing the feature to ensure quality (B), and building a release artifact to deploy the feature (A). Continuous Integration (D) and Change Sets (E) are *tools or methodologies* used to execute these steps, but the steps themselves (Develop, Test, Build) are universal.",
      "multiSelect": true
    },
    {
      "question": "Cloud Kicks (CK) is launching a new sneaker line during the upcoming holiday season and needs to do a thorough batch data testing before Go-Live. CK is using Salesforce unlimited edition. What two sandbox types should the architect recommend for batch data testing?",
      "answers": {
        "a": "Developer sandbox",
        "b": "Developer Pro sandbox",
        "c": "Partial Copy sandbox",
        "d": "Full sandbox"
      },
      "correctAnswer": ["c", "d"],
      "explanation": "Batch data testing implies testing with a large, realistic volume of data. Developer and Developer Pro sandboxes have very limited data storage. A Partial Copy sandbox (C) provides a large data set (up to 5GB) based on a sandbox template, and a Full sandbox (D) is an exact replica of production, including all its data. Both are suitable for large data volume testing.",
      "multiSelect": true
    },
    {
      "question": "Universal Containers (UC) is a high-tech company using SFDX tools and methodologies for its Salesforce development Configuration to Unlocked Packages. Which two best practices should an architect recommend to support UC's new package development strategy?",
      "answers": {
        "a": "Version control does not need to be used, as packages manage all the code and configuration.",
        "b": "Consult the metadata coverage report to identify features supported by packages.",
        "c": "Test developed packages in test environments before installing to production.",
        "d": "Move everything in the existing codebase to a single monolithic package."
      },
      "correctAnswer": ["b", "c"],
      "explanation": "When adopting unlocked packages, it's crucial to first check the 'Metadata Coverage Report' (B) to see which metadata types are even supported in packages. Second, a core principle of packaging is to build and test the package *version* as an artifact in a sandbox environment (C) before promoting that same immutable package to production. (A) is wrong (VCS is essential), and (D) is an anti-pattern (the goal is modularity, not a monolith).",
      "multiSelect": true
    },
    {
      "question": "Universal Containers (UC) is embarking on a large program of work, with different projects and different vendors. UC created a center of excellence (COE) that struggling with scope creep between the different projects. What role should the architect suggest be added to the COE?",
      "answers": {
        "a": "Change managers",
        "b": "Scrum master",
        "c": "Product owner",
        "d": "Release managers"
      },
      "correctAnswer": "c",
      "explanation": "The role explicitly responsible for managing, prioritizing, and protecting the scope is the Product Owner. A C-level Product Owner (or Program Owner) would be responsible for defining the boundaries between projects and managing the overall backlog, thereby preventing scope creep.",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) is an enterprise financial company that operates in EMEA, AMER, and APAC. Because of regulatory requirements, UC has a separate Salesforce org for each region. Each org has its own customizations that fit for the region needs, but there are also standard processes that apply to all region's requirements. As the deployment architect, what should be considered for the multi-org deployment strategy?",
      "answers": {
        "a": "Deploy metadata to production orgs using change sets.",
        "b": "Deploy metadata to production orgs using package development model.",
        "c": "Deploy metadata to production orgs using unmanaged packages.",
        "d": "Deploy metadata to production orgs using managed packages."
      },
      "correctAnswer": "b",
      "explanation": "The package development model (specifically Unlocked Packages) is the best-practice for managing multi-org deployments. It allows UC to create a 'base' package of standard processes and deploy that *same version* to all orgs, ensuring consistency. Then, each region can deploy its own regional extension packages on top. Change sets (A) cannot be used between different production orgs.",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) is considering implementing a minor change policy for a series of low-risk user stories that are commonly received by the UC admins. The policy would allow admins to make these changes directly in production. UC does not have continuous integration/continuous delivery (CI/CD) in place. Which three best practices should the architect suggest UC follow for their new change policy?",
      "answers": {
        "a": "Minor changes should be thoroughly documented and follow some type of standard cadence.",
        "b": "Minor changes do not need to be documented and can be made at any time.",
        "c": "Downstream environments will not be automatically updated when production changes.",
        "d": "All changes should still be tested.",
        "e": "CI/CD is required in to successfully manage minor changes."
      },
      "correctAnswer": ["a", "c", "d"],
      "explanation": "Even 'minor' changes in production carry risk. Therefore, all changes must be tested (D), even if it's just in a dev sandbox. The changes must be documented (A) for traceability. A critical best practice is to have a plan to 'back-propagate' these changes to downstream sandboxes (C), because those environments are now out of sync, which will cause future deployments to fail.",
      "multiSelect": true
    },
    {
      "question": "Universal Containers (UC) has created a custom REST web service. This web service receives Orders and Order Line Items data from an external endpoint and runs business logic and validations on it before inserting it into the database. UC is expecting to receive more than 100K orders a day and each order can have up to 10-line items. Each inbound request will contain only one order and its corresponding line items. What two testing types should an architect recommend to ensure users don’t face platform slowdowns during peak business hours? Choose 2 answers",
      "answers": {
        "a": "Unit Testing",
        "b": "Load Testing",
        "c": "Performance Testing",
        "d": "Stress Testing"
      },
      "correctAnswer": ["b", "c"],
      "explanation": "The scenario describes a high volume of transactions (100K orders/day). 'Load Testing' (B) is required to simulate this expected peak volume to see if the system can handle it. 'Performance Testing' (C) is a broader category that includes load testing and is done to measure system responsiveness (speed, scalability) under load, directly addressing the 'platform slowdowns' concern.",
      "multiSelect": true
    },
    {
      "question": "Universal Containers (UC) currently uses the org development model and utilizes the Salesforce CLI as the deployment tool. After the feature release artifact file) has been tested in a lower sandbox, it is being deployed to the full sandbox for performance testing and production deployment readiness check. Since quick deployment options are not being used, what is the correct way to deploy the artifact to the full sandbox?",
      "answers": {
        "a": "Authorize to the Full sandbox; Validate with sfdx:source: deploy On successful validation, deploy with sfdx:mdapi:deploy",
        "b": "Authorize to the Full sandbox org; Validate with sfdx:mdapi:deploy On successful validation, deploy with sfdx:mdapi:deploy",
        "c": "Authorize to the Full sandbox org; Validate with sfdx:source: deploy; On successful validation, deploy with sfdx:source:deploy",
        "d": "Authorize to the Full sandbox org; Validate with sfdx: mdapi:deploy; On successful validation, deploy with sfdx:source:deploy"
      },
      "correctAnswer": "b",
      "explanation": "The 'artifact file' implies a metadata-format .zip file, which is deployed using the `mdapi` commands, not `source` commands. The correct process is to first authorize to the org, then run `sfdx:mdapi:deploy` with a validation flag (e.g., `--checkonly`). [cite_start]After that validation succeeds, you run the same `sfdx:mdapi:deploy` command without the validation flag to perform the actual deployment. [cite: 239]",
      "multiSelect": false
    },
    {
      "question": "A Salesforce partner intends to build a commercially available application by creating a managed package for distribution through AppExchange. What two types of environments can the partner use for development of the managed package? Choose 2 answers",
      "answers": {
        "a": "Developer Edition",
        "b": "Developer Pro sandbox",
        "c": "Developer sandbox",
        "d": "Partner Developer Edition"
      },
      "correctAnswer": ["a", "d"],
      "explanation": "Managed packages must be created in an org with a unique namespace. Both Developer Edition (DE) orgs (A) and Partner Developer Edition (PDE) orgs (D) are free, persistent orgs that can be used to register a namespace and create managed packages. Sandboxes (B, C) are tied to a parent production org and cannot be used to create a new namespace.",
      "multiSelect": true
    },
    {
      "question": "Universal Containers has an active production org and they are planning to release some new features to it next month. The team is working to prepare a deployment plan and reached out to the technical architect for inputs on rollback strategy. What should a technical architect recommend?",
      "answers": {
        "a": "Backup the existing metadata using ANT Migration Tool. To roll back deployment, manually delete new components and deploy again to production using backed up metadata.",
        "b": "Backup the existing metadata using the ANT Migration Tool. To roll back deployment, deploy again to production using backed up metadata.",
        "c": "Create a sandbox from production to take the backup of existing metadata. To roll back deployment, manually delete new components and then deploy again to production Using metadata from this sandbox.",
        "d": "Create a sandbox from production to take the backup of existing metadata. To roll back deployment, use destructivechanges.xml to delete new components and then Deploy again to production using metadata from this sandbox."
      },
      "correctAnswer": "d",
      "explanation": "A proper rollback requires two actions: deploying the previous version of modified components and cleanly *deleting* any newly added components. [cite_start]Option D correctly identifies both steps: use a backup (from a sandbox or metadata retrieval) for the old versions, and use a `destructivechanges.xml` file to explicitly delete the new components as part of the rollback deployment. [cite: 257, 258]",
      "multiSelect": false
    },
    {
      "question": "Cloud Kicks is switching to Salesforce from a different CRM. They have existing datasets for all standard Salesforce objects. In which optimized order should the architect recommend these objects be loaded?",
      "answers": {
        "a": "Accounts, Contacts, Leads, Products, Opportunities, Opportunity Line Items",
        "b": "Leads, Contacts, Accounts, Opportunities, Products, Opportunity Line Items",
        "c": "Leads, Accounts, Contacts, Products, Opportunities, Opportunity Line Items",
        "d": "Accounts, Contacts, Opportunities, Products, Opportunity Line Items, Leads"
      },
      "correctAnswer": "c",
      "explanation": "Data must be loaded in order of dependency (parent records before child records). Leads are standalone. Accounts are parents to Contacts and Opportunities. Products are parents (via Pricebook) to Opportunity Line Items. Opportunities are also parents to Opportunity Line Items. [cite_start]Therefore, a correct order is: Leads (standalone), Accounts (parent), Contacts (child of Account), Products (parent), Opportunities (child of Account), Opportunity Line Items (child of Opportunity and Product). [cite: 264]",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) have developed a managed package targeted for AppExchange. The product includes some Apex code to customize and create layouts. UC is in the testing phase of the package, so it’s not certified yet. During testing on the target org, the Apex code for the layouts fails. Why are the Apex classes not able to access the metadata of the target org during testing?",
      "answers": {
        "a": "Apex Settings to allow the access to metadata is not switched on.",
        "b": "UC needs to turn on Apex Settings within the custom metadata type.",
        "c": "UC needs to get the managed package certified by the Salesforce security review.",
        "d": "The solution is flawed. UC should utilize the Tooling API from a web service call to modify the layouts."
      },
      "correctAnswer": "c",
      "explanation": "This is a duplicate of Q6. By default, Apex in a managed package cannot access the subscribing org's metadata (like describing objects or modifying layouts) until the package has passed the Salesforce security review and been certified. [cite_start]This is a security measure to protect subscribers. [cite: 273]",
      "multiSelect": false
    },
    {
      "question": "There are many types of quality assurance techniques... Which two techniques should an architect recommend, for Universal Containers to incorporate into its overall CI/CD pipeline? Choose 2 answers",
      "answers": {
        "a": "Static code quality analysis",
        "b": "Automated browser testing",
        "c": "Stress testing.",
        "d": "Business verification testing"
      },
      "correctAnswer": ["a", "b"],
      "explanation": "A CI/CD pipeline relies on automation. 'Static code quality analysis' (A) is an automated step (using tools like PMD, Sonar) that checks code health *before* deployment. 'Automated browser testing' (B) is an automated step (using tools like Selenium) that tests the UI *after* deployment. Business verification (D) is typically a manual UAT step.",
      "multiSelect": true
    },
    {
      "question": "Universal Containers has a highly integrated environment with significant process orchestration between systems. When refreshing UAT, Objects that have external Idsfrom Production no longer point to valid External Ids in the UAT environment. What should an Architect do to resolve this?",
      "answers": {
        "a": "Mask the External Id so nobody can see the production value.",
        "b": "In the post refresh plan, modify external ids to a known valid set of values for UAT.",
        "c": "Let UAT point to production integrations and rollback each transaction after it finishes.",
        "d": "Delete all the data and use an Automated testing tool to create new data across all the systems in UAT."
      },
      "correctAnswer": "b",
      "explanation": "After a sandbox refresh, the data from production (including external IDs) must be modified to work with the sandbox's non-production endpoints. This is a standard part of a 'post-refresh plan'. [cite_start]A script or data job should be run to update these external IDs to valid values for the UAT environment, re-establishing the integration links. [cite: 286]",
      "multiSelect": false
    },
    {
      "question": "What are three benefits of managing change with Packaged Development? Choose 3 answers",
      "answers": {
        "a": "Manage the number of sandboxes needed to successfully deploy.",
        "b": "Clearly divides developers and testers.",
        "c": "Modular development process with specification of dependencies among packages.",
        "d": "Versioning to help with change management.",
        "e": "Making the release cycle more efficient and agile."
      },
      "correctAnswer": ["c", "d", "e"],
      "explanation": "Package development is about modularity. This allows for (C) a modular process where you can define dependencies between packages. It introduces (D) explicit versioning (e.g., 'MyPackage v1.1'), which is a huge benefit for change management. By deploying small, versioned, and independent packages, the entire release cycle becomes (E) more efficient and agile.",
      "multiSelect": true
    },
    {
      "question": "Universal Containers is about to begin the release of a major project... they have several sandboxes... [that are]... a mix of preview and non-preview instances. What should the architect recommend?",
      "answers": {
        "a": "Refresh all non-preview sandboxes during the release preview window.",
        "b": "No advice needed, mixing instance types is important for regression testing.",
        "c": "Refresh all non-preview sandboxes when the release management team has time.",
        "d": "Contact support to rollback the release when Salesforce upgrades the sandboxes."
      },
      "correctAnswer": "a",
      "explanation": "All sandboxes in a deployment path (e.g., DEV -> QA -> UAT) must be on the same Salesforce major release version to avoid metadata compatibility issues. [cite_start]The correct action is to refresh the non-preview sandboxes *during* the preview window, which will upgrade them to the preview version and align all environments. [cite: 299]",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) is on the Unlimited Edition... [They have]... four Developer Pro sandboxes... one partial copy... one full sandbox... [and] another full sandbox... no longer being actively used. ...none of the sandboxes can be refreshed. What is the most probable action...?",
      "answers": {
        "a": "Contact the Salesforce Account Team to do a sandbox License Count.",
        "b": "It appears the org is using more sandboxes than the license permits. The Partial Copy sandbox shouldn't be used.",
        "c": "Create a Salesforce support case, someone should know what is wrong.",
        "d": "Delete the full sandbox used for performance testing."
      },
      "correctAnswer": "d",
      "explanation": "Unlimited Edition includes licenses for 1 Full sandbox. UC is using 2 Full sandboxes, putting them over their licensed limit (the second one was likely an add-on that expired). When an org is over its sandbox license limit, all sandbox creation and refresh operations are locked. [cite_start]The most direct action is to delete the unused Full sandbox, which will bring the org back into compliance. [cite: 311]",
      "multiSelect": false
    },
    {
      "question": "At Universal Containers, Salesforce administrators are making changes to the permission sets under instruction from the business. Randomly, various SOQL statements are failing. What strategy could be advised to bring this issue to the developer’s attention earlier?",
      "answers": {
        "a": "Extract each permission set, commit and merge to source control, and run through Cl checks.",
        "b": "Ask administrators to only make changes to profiles instead",
        "c": "Create a sandbox refresh strategy to ensure each sandbox is refreshed every day.",
        "d": "Advice developers to switch to SOSL queries that are more robust instead."
      },
      "correctAnswer": "a",
      "explanation": "The issue is that declarative changes (Permission Sets) are breaking programmatic code (SOQL) because they aren't being tested together. The best practice is to treat all changes, including admin changes, as code. [cite_start]The change should be committed to source control and run through a Continuous Integration (CI) pipeline, which would automatically run all Apex tests and catch the failure. [cite: 315]",
      "multiSelect": false
    },
    {
      "question": "A team has completed a sprint and intends to deploy these changes after business approval, but they will immediately begin the next sprint. What strategy should an architect recommend?",
      "answers": {
        "a": "The first task of the new sprint must be the deployment approval. After that, the other tasks of the sprint can be performed in the environments and Git.",
        "b": "Migrate the current code to the UAT sandbox. Begin new sprint development in the Dev sandbox. Make fixes in the UAT environment and deploy UAT for production after business approval.",
        "c": "Commit upcoming changes to the features branch without merging into the develop branch. Deploy from the develop branch and then merge new sprint features develop branch.",
        "d": "Using Git, create a release branch from the develop branch. All fixes must be made in the release branch. After deployment, merge release with develop."
      },
      "correctAnswer": "d",
      "explanation": "This describes a standard Git branching strategy. When a sprint is 'done' (code is in the 'develop' branch), you create a 'release' branch from 'develop'. This release branch is what gets deployed to UAT for testing. The development team can immediately start new work (for the next sprint) from 'develop'. [cite_start]Any bugs found in UAT are fixed *in the release branch*. [cite: 327, 328]",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) has recently acquired other companies that have their own Salesforce orgs. These companies have been merged as new UC business Units. The CEO hasrequested an architect to review the org strategy,taking into consideration two main factors: • The CEO wants business process standardization among all business units. • Business process integration is not required as the different business units have different customers and expertise. Which org strategy should the architect recommend in this scenario, and why?",
      "answers": {
        "a": "Single-org strategy, as costs increase as the number of orgs go up.",
        "b": "Single-org strategy, as the high level of business process standardization will be easier to implement in a single org.",
        "c": "Multi-org strategy, as it is uncommon for the diversified business units to get used to working in the same space as the other business units.",
        "d": "Multi-org strategy, as they could deploy a common managed package into the orgs of the different business units."
      },
      "correctAnswer": "d",
      "explanation": "This scenario has competing needs. The CEO wants standardization (favors single-org), but the business units are separate, with different customers and no integration needs (favors multi-org). [cite_start]Option (D) provides the best compromise: a multi-org strategy respects the business unit separation, while a 'common managed package' (or unlocked package) can be deployed to all orgs to enforce standardization. [cite: 337]",
      "multiSelect": false
    },
    {
      "question": "Universal Containers has a highly customized Salesforce org, with many different pieces of configuration and code. Which configuration item should be covered by executable tests?",
      "answers": {
        "a": "Active Process Builders",
        "b": "Validation Rules",
        "c": "Workflow Rules",
        "d": "Case Assignment Rules"
      },
      "correctAnswer": "b",
      "explanation": "Executable tests (Apex tests) perform DML operations (insert, update). These operations will fail if they violate any 'Validation Rules'. Therefore, test classes *must* 'cover' validation rules by providing valid data for positive tests, and asserting that invalid data is correctly blocked (testing the negative case). While other automation (A, C, D) should also be tested, validation rules are fundamental to whether the DML in the test can even succeed.",
      "multiSelect": false
    },
    {
      "question": "Universal Containers has discovered a Servo defect in production. Tens of thousands of records will be created with incorrect data in minutes, producing significant brand damage as a consequence. The Salesforce administrator has suggested that the defective text field be replaced with a new picklist field directly in production. The page layout will be modified so that the text field is removed and the new picklist field added. What should the Salesforce architect advise?",
      "answers": {
        "a": "Deny the suggestion and explain to everyone that the risk is too high and the next release window is on the weekend",
        "b": "Pair with the administrator, and review each change as it happens",
        "c": "Call the security team and begin organizing a penetration test.",
        "d": "Explain that only developers are certified to make changes directly in production."
      },
      "correctAnswer": "b",
      "explanation": "This is a critical P0 production issue (a 'hotfix') that is actively causing data corruption. Waiting for the next release (A) is not an option. The correct procedure for an emergency hotfix is to make the change as quickly but as safely as possible. [cite_start]The architect should 'pair' with the admin (B) to validate the proposed change, review it for any unintended consequences, and oversee its immediate application to production to stop the 'bleeding'. [cite: 350]",
      "multiSelect": false
    },
    {
      "question": "Which two actions will contribute to an improvement of code security? Choose 2 answers",
      "answers": {
        "a": "Use two developers to review and fix current code vulnerabilities.",
        "b": "Implement a pull request and secure code review.",
        "c": "Integrate a static code security analysis tool in the $Cl/CD$ process.",
        "d": "Hire a company specialized in secure code review the current code."
      },
      "correctAnswer": ["b", "c"],
      "explanation": "A robust code security strategy has two main components: automated and manual. (C) 'Integrate a static code security analysis tool' provides the automated defense, scanning every change for common vulnerabilities as part of the CI/CD pipeline. (B) 'Implement a pull request and secure code review' provides the manual defense, ensuring a human reviews the code for logic flaws or vulnerabilities the automated tool might miss.",
      "multiSelect": true
    },
    {
      "question": "Universal Containers has many backlog items and competing stakeholders who cannot agree on priority. What should an architect do to overcome this?",
      "answers": {
        "a": "Take over prioritization for the stakeholders.",
        "b": "Facilitate the design of a prioritization model with the stakeholders.",
        "c": "Organize a sprint planning meeting with the Scrum team.",
        "d": "Allow the delivery teams to pick the best work for the business."
      },
      "correctAnswer": "b",
      "explanation": "The root problem is the *lack of an agreed-upon system* for ranking items. The architect or product owner should not unilaterally decide (A), but should instead *facilitate* a meeting with the stakeholders to help them jointly *design a prioritization model* (e.g., scoring by business value, effort, risk, etc.). [cite_start]Once the stakeholders agree on the *model*, they can use it to objectively prioritize the backlog. [cite: 361]",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) has been on the org development model with scratch orgs are already enabled, but they haven’t been taking advantage of the scratch orgs. Now UC is ready to move to the package development model. What step must be done by an administrator?",
      "answers": {
        "a": "In setup, switch both the Enable Dev Hub and Enable 2nd-Generation Managed Packages to Enabled.",
        "b": "In setup, switch the Enable Unlocked Packages to Enabled, keep the Enable Second Generation Managed Packages as disabled.",
        "c": "In setup, switch the Enable Unlocked Packages and Second-Generation Managed Packages to Enabled.",
        "d": "In setup, switch the Enable Dev Hub to Enabled, then switch the Enable Source Tracking for Scratch Orgs to Enabled."
      },
      "correctAnswer": "c",
      "explanation": "To enable package development (both unlocked and 2nd-generation managed packages), an administrator must first enable the Dev Hub in the production org. After the Dev Hub is enabled, two separate toggles become available on the same page: 'Enable Unlocked Packages' and 'Enable Second-Generation Managed Packages'. [cite_start]Both of these must be switched to 'Enabled'. [cite: 368]",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) is embarked on a large Salesforce transformation journey, UC’s DevOps team raised a question about tracking Salesforce metadata throughout the development lifecycle across sandboxes all the way to production. As the deployment architect of the project, what should be the recommendation to track which version of each feature in different environments?",
      "answers": {
        "a": "Use Salesforce SFDX commands to deploy to different sandboxes.",
        "b": "Use an Excel sheet to track deployment steps and document the SFDX commands.",
        "c": "Use an AppExchange or third-party tool that is specialized in Salesforce deployment.",
        "d": "Use ChangeSet to track deployed customizations."
      },
      "correctAnswer": "c",
      "explanation": "Tracking which version of code exists in which environment is a core challenge of Salesforce DevOps. While version control is the source of truth, it doesn't intrinsically know what's in each org. Specialized AppExchange/third-party DevOps tools (like Copado, Gearset, etc.) are built to solve this. [cite_start]They provide pipelines and dashboards that clearly show which features/versions have been deployed to which environments. [cite: 374]",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) has multiple development teams that work on separate streams of work, with different timelines. Each stream has different releases... What is a suitable branching policy to recommend?",
      "answers": {
        "a": "GitHub flow",
        "b": "Leaf-based development",
        "c": "Trunk-based development",
        "d": "Scratch-org-based development"
      },
      "correctAnswer": "a",
      "explanation": "GitHub Flow (or a similar feature-branching model like Git Flow) is ideal for this scenario. Each 'stream of work' is built in its own isolated feature branch. This allows teams to work in parallel without impacting each other. [cite_start]A branch is only merged to the main branch when it's ready for release, accommodating the 'different timelines'. [cite: 379]",
      "multiSelect": false
    },
    {
      "question": "All AppExchange products are subject to Salesforce security reviews. What is the most common reason that the prospect AppExchange products fail the security review?",
      "answers": {
        "a": "Session hacking",
        "b": "CRUD/FLS (field level security)",
        "c": "SOQL injection",
        "d": "Cross-site scripting"
      },
      "correctAnswer": "b",
      "explanation": "While all are serious security issues, the most frequent failure point in Salesforce security reviews is the improper enforcement of Create, Read, Update, Delete (CRUD) and Field-Level Security (FLS). [cite_start]Developers must write Apex code that explicitly checks if the running user has the necessary object and field permissions *before* performing a DML operation or SOQL query. [cite: 385]",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) has decided to improve the quality of work by the development teams. As part of the effort, UC has acquired some code review software Licensesto help the developers with code quality. Which are two recommended practices to follow when conducting secure code reviews? Choose 2 answers",
      "answers": {
        "a": "Conduct a review that combines human efforts and automatic checks by the tool to detect all flaws.",
        "b": "Use the code review software as the tool to flag which developer has committed the errors, so the developer can improve.",
        "c": "Generate a code review checklist to ensure consistency between reviews and different reviewers.",
        "d": "Focus on the aggregated reviews to save time and effort, to remove the need to continuously monitor each meaningful change."
      },
      "correctAnswer": ["a", "c"],
      "explanation": "A high-quality code review process combines automation and human-centric process. (A) The automated tool catches common syntax and security flaws, while the human reviewer focuses on business logic and architectural soundness. (C) A checklist ensures that all human reviews are consistent, thorough, and follow the same standards, regardless of who is performing the review.",
      "multiSelect": true
    },
    {
      "question": "Universal Containers wants to introduce data volume testing... Regulations prohibit the use of production data... Which two options can the architect recommend? Choose 2 answers",
      "answers": {
        "a": "Perform data masking on full sandbox after a refresh.",
        "b": "Generate mock data that mimics production data shape and volume.",
        "c": "Use Query Analyzer in production.",
        "d": "Request a partial Sandbox copy after the next Salesforce release."
      },
      "correctAnswer": ["a", "b"],
      "explanation": "The requirement is to test with large data volumes *without* using real production PII. (A) 'Data masking' is a process that anonymizes the data in a Full sandbox after it's refreshed. This preserves the volume and shape of the data while removing the regulatory risk. (B) 'Generating mock data' is an alternative approach where you use a tool to create a large volume of realistic, but entirely fake, data in a sandbox.",
      "multiSelect": true
    },
    {
      "question": "Which two options should be considered when making production changes in a highly regulated and audited environment? Choose 2 answers",
      "answers": {
        "a": "No manual steps should be carried out.",
        "b": "All changes including hotfixes should be reviewed Salesforce Partner Against security principles.",
        "c": "Any production change should have explicit stakeholder approval.",
        "d": "After deployment, the development team should test and verify functionality in production."
      },
      "correctAnswer": ["a", "c"],
      "explanation": "'Highly regulated and audited' environments prioritize traceability and approval. (C) 'Explicit stakeholder approval' (often via a Change Advisory Board or CAB) is mandatory for audit trails. (A) 'No manual steps' is a best practice because automated deployments are repeatable, auditable, and less error-prone. Manual post-deployment steps are hard to track and prove in an audit.",
      "multiSelect": true
    },
    {
      "question": "Universal Containers (UC) is using Salesforce Performance Edition. They are planning to host weekly training sessions for the next four weeks. Each training will be five days long and a new set of trainees will attend every week. UC wants to train these users on samples of production data and delete all the data generated during the training session at the end of the week. What optimal option should a technical architect recommend?",
      "answers": {
        "a": "Refresh a Developer Pro sandbox every weekend and include an appropriate sandbox template.",
        "b": "Refresh a Partial Copy sandbox every weekend and include an appropriate sandbox template.",
        "c": "Refresh a Partial Copy sandbox every weekend and load data needed using data loader.",
        "d": "Refresh a Developer Pro sandbox every weekend and load data needed using data loader,"
      },
      "correctAnswer": "b",
      "explanation": "The key requirements are 'samples of production data' and a weekly 'reset'. A Partial Copy sandbox is the *only* sandbox type that can be populated with 'samples of production data' automatically, which is done using a 'sandbox template'. [cite_start]Refreshing this sandbox (even with its 5-day interval limit) is the mechanism to 'delete all the data' and reset it for the next training class. [cite: 416]",
      "multiSelect": false
    },
    {
      "question": "Universal Containers has decided on a single-org strategy, despite having to deal with the complexity of having multiple lines of business (LOBS) inside a single org. What are two common challenges in single-org strategy for multiple LOBS? Choose 2 answers",
      "answers": {
        "a": "Lack of declarative sharing and visibility capabilities to ensure correct visibility of objects and records.",
        "b": "Apex design will need to be mature and adhere to strict guidelines to support a large enterprise model.",
        "c": "Making Salesforce work with multiple currencies.",
        "d": "The data model becomes more complex the scope in the org increases."
      },
      "correctAnswer": ["b", "d"],
      "explanation": "In a single-org, multi-LOB environment, two major challenges are: (D) Data Model Complexity, as each LOB adds its own fields and objects, leading to 'bloated' objects (like a 1000-field Account object); and (B) Apex Design, as all LOBs share the same Apex triggers. This requires a mature, robust trigger framework to manage and isolate each LOB's logic.",
      "multiSelect": true
    },
    {
      "question": "Universal Containers is having trouble aligning releases between major, minor, and Salesforce seasonal releases. What should an architect recommend?",
      "answers": {
        "a": "Create a release calendar, train and align all the teams.",
        "b": "Share the test plans between the teams on each release type.",
        "c": "Create a spreadsheet of metadata changes and reconcile the overlaps.",
        "d": "Gate all release decisions at the center of excellence."
      },
      "correctAnswer": "a",
      "explanation": "The core problem is a lack of visibility and alignment. The best-practice solution is to create a master 'Release Calendar' that plots out all planned release types (the company's major/minor releases) against the mandatory 'Salesforce seasonal releases'. [cite_start]This calendar provides a single source of truth for all teams, allowing them to align their work and plan for regression testing. [cite: 428]",
      "multiSelect": false
    },
    {
      "question": "Which two statements are accurate about why Mock objects are needed when writing test classes? Choose 2 answers",
      "answers": {
        "a": "Mock is needed whenever the code makes an HTTP callout.",
        "b": "Some methods are invoking long running processes, using Mock is a shortcut of bypassing the long executions.",
        "c": "Mock can also be used on the classes that extend the batchable interface to bypass the batch jobs.",
        "d": "Using a Mock allows the test class to bypass the dependencies of other objects, methods, state, or behaviors. Therefore, the developer has total control of his own code."
      },
      "correctAnswer": ["a", "d"],
      "explanation": "Mocks are used for two primary reasons. (A) Apex tests are not allowed to make real HTTP callouts, so you *must* use `HttpCalloutMock` to simulate the external service's response. (D) More generally, mocks allow you to test a piece of code in isolation by 'mocking' its dependencies. This lets you control the dependent behavior (e.g., 'simulate a service failure') and test your own class's logic.",
      "multiSelect": true
    },
    {
      "question": "Universal Containers (UC) has developed extensions of Salesforce Service Cloud for the use of its customer service Teams using the change set development model. Recently, UC acquired a company that develops extensions of an AppExchange app. The development team of the acquired company uses the org development model. The Universal Containers CTO wants both teams to work on a single org and follow the same set of processes Which development model should the architect recommend to be used by the consolidated development team?",
      "answers": {
        "a": "Org development model, because the acquired company's team is already using it, and it is better than the change set development model.",
        "b": "Package development model, because it allows packages to be created and deployed using declarative (point-and-click) development tools, without writing code.",
        "c": "Change set development model, because UC is already using it, so it will face less resistance.",
        "d": "Package development model, so teams can build release artifacts that can be tested and released independently from artifacts for other projects."
      },
      "correctAnswer": "d",
      "explanation": "The 'Package Development Model' (using Unlocked Packages) is the modern, scalable solution for multiple teams working in a single org. It allows each team to build their 'extensions' as a separate, versioned package (a 'release artifact'). [cite_start]This artifact can be tested and released independently, which is crucial for managing different projects and timelines without conflicts. [cite: 448]",
      "multiSelect": false
    },
    {
      "question": "Universal Containers has seven orgs in different regions. Its processes are global and standardized but each region needs the flexibility to be able to understand the global code and customize some aspects for its regions. Which development model is optimized for this need?",
      "answers": {
        "a": "Create a centralized Git with all the code and where the global team approves the changes. made by the local teams.",
        "b": "Use a managed package for global code and another managed package for all regions code.",
        "c": "Use unlocked packages to deploy the global code and allow each country to create its customized unlocked package extensions.",
        "d": "Use a managed package to deploy the global code and allow local teams to request the addition of code within that package."
      },
      "correctAnswer": "c",
      "explanation": "The requirement is for a 'global standard' (base) plus 'local flexibility' (extensions). Unlocked packages are designed for this. A global, base unlocked package (with the global code) can be deployed to all orgs, and then each region can create and deploy its own separate unlocked package (which can depend on the base) for its local customizations.",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) is midway through a large enterprise project... The system is live with users, and a serious production issue is identified at the start of a sprint, which is narrowed down to a bug in some Apex code. Which three approaches should an architect recommend to address this bug?",
      "answers": {
        "a": "Investigate potential data impacts.",
        "b": "Fix the bug in a hotfix branch.",
        "c": "Wait until the next release to deploy the fix.",
        "d": "Attempt to fix the bug directly in production.",
        "e": "Seek stakeholder approval for thehotfix."
      },
      "correctAnswer": ["a", "b", "e"],
      "explanation": "This is a serious production bug (hotfix). The correct process is: (B) Create an isolated 'hotfix' branch from the production code to make the fix. (A) Immediately investigate any data corruption the bug may have caused. (E) Because this is an emergency, out-of-cycle release, it requires explicit stakeholder approval to proceed.",
      "multiSelect": true
    },
    {
      "question": "Cloud Kicks is considering using an automated testing tool to help manage deployments between environments. When should the architect recommend the use of an automated testing tool?",
      "answers": {
        "a": "Automated tests should be run when branches are merged.",
        "b": "Automated tests should be run dally in all Developer Orgs.",
        "c": "Automated tests should be run only when merging into Full or Partial Copy sandboxes.",
        "d": "Automated tests should be run daily in all Developer Orgs, and when branches are merged."
      },
      "correctAnswer": "a",
      "explanation": "The primary value of automated testing in a CI/CD pipeline is to provide fast feedback and prevent bad code from being integrated. Tests should be run *when branches are merged* (or as part of the pull request *before* the merge) to ensure the new code works and doesn't break existing functionality in the main branch.",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) is a large enterprise... UC is looking to support is rollback of metadata after a deployment, and the backup and restore of data... Regulations... mean that UC must be able to provide strategies to recover and rollback... What should an architect advise?",
      "answers": {
        "a": "Salesforce backs up all data and will restore it for customers on request.",
        "b": "Evaluate third-party and AppExchange products.",
        "c": "Advise stakeholders that rollback is not possible for Salesforce.",
        "d": "Custom build a feature rollback and data restore tool for Salesforce."
      },
      "correctAnswer": "b",
      "explanation": "Salesforce does not provide a native, on-demand data restore or metadata rollback feature. (A) is incorrect; Salesforce's backup is for disaster recovery, not customer restores. (C) is incorrect; rollback is possible. (D) is extremely complex and expensive. The standard, best-practice recommendation is to (B) evaluate and purchase a third-party AppExchange tool that specializes in Salesforce data backup/restore and metadata deployment/rollback.",
      "multiSelect": false
    },
    {
      "question": "Universal Containers has many development teams deploying into a single org... approaching its busiest season. The business owner comes to you asking for your advice about its next major production release. What best practice should an architect recommend?",
      "answers": {
        "a": "Make declarative changes in production only.",
        "b": "Bypass regression testing for minor changes.",
        "c": "Avoid releasing near peak business periods.",
        "d": "Developers should conduct user acceptance testing."
      },
      "correctAnswer": "c",
      "explanation": "A core principle of release management is to minimize business risk. Deploying a 'major production release' just before or during the 'busiest season' is a huge, unnecessary risk. The best practice is to (C) avoid major releases during these critical business periods (often called a 'release freeze' or 'blackout period').",
      "multiSelect": false
    },
    {
      "question": "The opportunity Service and opportunity Service Test classes are in package A but are used only in package B. Both second-generation packages have the same namespace. Therefore, they should be moved to package B for better organization and control. What should the architect recommend for this process?",
      "answers": {
        "a": "Set the classes as deprecated in package A and recreate them in package B.",
        "b": "Move the classes of package A to package 8 and change the code for package B that called this class from package A.",
        "c": "Move the classes of package A to package B and create new package versions.",
        "d": "Set the classes as deprecated in package A and recreate them in package B with new names."
      },
      "correctAnswer": "a",
      "explanation": "You cannot simply move a class from one package to another if it's referenced. The correct refactoring process for unlocked packages in the same namespace is to (A) mark the class as `@deprecated` in the source package (Package A), create a new version of A, then recreate the class (with the same name) in the destination package (Package B) and create a new version of B. This allows a graceful transition during deployment.",
      "multiSelect": false
    },
    {
      "question": "Since Universal Containers (UC) has adopted agile methodologies, the CEO is requesting the development teams to deliver more and more work... the developers are not able to deliver the jobs they are committing to. What evidence can be gathered in an agile tool to support the CTO's claims?",
      "answers": {
        "a": "The definition of done (DoD)",
        "b": "A burndown chart showing team finishes early sprint after sprint",
        "c": "A Kanban board showing there's always the maximum allowed amount of work in progress (WIP)",
        "d": "A burndown chart showing the team misses their forecast sprint after sprint"
      },
      "correctAnswer": "d",
      "explanation": "A burndown chart visually tracks 'work remaining' vs. 'time' in a sprint. The 'forecast' is the team's commitment to burn the work down to zero. If the team (D) 'misses their forecast sprint after sprint', the burndown line will consistently finish *above* the zero-axis, providing clear, visual evidence that the committed work is not being completed.",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) has gone through a global organization restructuring... decided to start a project to merge its Salesforce orgs, going from a multi-org to a single-org strategy. In this scenario, what are three benefits going to a single-org strategy?",
      "answers": {
        "a": "Lower administration overhead costs.",
        "b": "Improved Chatter collaboration across different business units.",
        "c": "Consolidating the business processes would be simplified.",
        "d": "Automatically unify data model among all lines of business.",
        "e": "Easier to get a 3120-view of the customer."
      },
      "correctAnswer": ["a", "b", "e"],
      "explanation": "A single-org strategy means one set of users and one database. The benefits include: (A) Lower administration overhead (only one org to maintain, patch, and manage), (B) Improved collaboration (all users are in the same Chatter instance), and (E) an easier path to a 360-view of the customer (all customer data is in one database). Consolidation (C) and data unification (D) are prerequisites *for* the project and are extremely complex, not benefits.",
      "multiSelect": true
    },
    {
      "question": "An architect is working on a Universal Containers (UC) project... a central release management team will be responsible for performing production deployments... How should an architect leverage the Metadata API to ensure any metadata components necessary... Are properly communicated to the release management team?",
      "answers": {
        "a": "Provide a spreadsheet of all components and utilize the metadata API'sreadMetadata() call.",
        "b": "Communicate the unlocked package version to the release management team.",
        "c": "Create a change set in each sandbox and download the package.xml file for the release management team.",
        "d": "Provide the release management team a copy of the audit trail from the sandbox you wish to deploy from."
      },
      "correctAnswer": "b",
      "explanation": "In a modern, package-based development model, the deliverable *is* the package version itself. The architect's team builds, tests, and validates a specific, immutable package version (e.g., 'v1.2.0'). They then hand this artifact (B) to the release team, whose only job is to run the command to install that *exact* version in production. This is the cleanest, most reliable, and most auditable method.",
      "multiSelect": false
    },
    {
      "question": "Universal Containers has 80% code coverage. Despite the creation of a test plan for each sprint, the number of defects is large. What two items should the architect recommend to reduce defects? Choose 2 answers",
      "answers": {
        "a": "The test script should be used to define the test classes.",
        "b": "The code coverage should be increased to 95%.",
        "c": "The test analyst who creates the test plan must also create the test classes.",
        "d": "The acceptance criteria should have more details."
      },
      "correctAnswer": ["a", "d"],
      "explanation": "High code coverage with many defects means the tests are not validating the *correct business logic*. The problem starts with requirements. (D) More detailed acceptance criteria ensure the desired behavior is clearly defined. (A) The QA team's test scripts (which detail the business-level test cases) should then be used as the blueprint for developers when writing their Apex test classes, ensuring that the tests validate *functionality*, not just cover lines of code.",
      "multiSelect": true
    },
    {
      "question": "A developer... recently created a flow... deactivated it and made updates multiple times before the flow worked as desired. Now the developer is planning to use a change set to migrate the flow... What two statements should be considered when migrating the flow with change sets?",
      "answers": {
        "a": "When a change set with a multiple versioned flow is uploaded, it includes only the active version of the flow.",
        "b": "When a change set with a multiple versioned flow is uploaded, it includes all the versions of the flow.",
        "c": "When a change set with a multiple versioned flow is uploaded, and no active version is available, it includes the most recent inactive version of the flow.",
        "d": "When a change set with a multiple versioned flow is uploaded, and no active version is available, it throws an exception."
      },
      "correctAnswer": ["a", "c"],
      "explanation": "Change sets have specific, and sometimes confusing, behavior for flows. (A) If an active version of the flow exists, the change set will *only* include that active version, ignoring all others. (C) If *no* active version exists, the change set will instead include the single, most recent *inactive* version of the flow.",
      "multiSelect": true
    },
    {
      "question": "Cloud Kicks is switching to Salesforce from a different CRM. They have existing datasets for all standard Salesforce objects. In which optimized order should the architect recommend these objects be loaded?",
      "answers": {
        "a": "Accounts, Contacts, Leads, Products, Opportunities, Opportunity Line Items",
        "b": "Leads, Accounts, Contacts, Products, Opportunities, Opportunity Line Items",
        "c": "Leads, Contacts, Accounts, Opportunities, Products, Opportunity Line Items",
        "d": "Accounts, Contacts, Opportunities, Products, Opportunity Line Items, Leads"
      },
      "correctAnswer": "b",
      "explanation": "This is a duplicate of Q35. Data must be loaded in order of dependency (parent records before child records). Leads are standalone. Accounts are parents to Contacts and Opportunities. Products are parents (via Pricebook) to Opportunity Line Items. Opportunities are also parents to Opportunity Line Items. Therefore, a correct order is: Leads (standalone), Accounts (parent), Contacts (child of Account), Products (parent), Opportunities (child of Account), Opportunity Line Items (child of Opportunity and Product).",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) started to use the GitHub workflow... an Experience Cloud developer and a Service Cloud developer both need to work on the Case object... Both developers branched off the same UCDev branch... The Experience Cloud... finished early, and the change was successfully merged into the UCDev branch... At what point will the Service Cloud developer see the conflict and need to resolve the conflict?",
      "answers": {
        "a": "At command: git commit -m \"Service Cloud Notes\"",
        "b": "The conflict would show in GitHub when a pull request is created from ServiceCase to UCDev.",
        "c": "At command: git push origin ServiceCase",
        "d": "At Command: git add force-app/main/default"
      },
      "correctAnswer": "b",
      "explanation": "The conflict doesn't exist on the developer's local machine until they try to integrate the changes. The `commit`, `add`, and `push` commands will all work successfully as they only affect the local branch and the remote branch (ServiceCase). The conflict will be detected by the Git platform (e.g., GitHub) when the developer (B) creates a pull request to merge their 'ServiceCase' branch *into* the 'UCDev' branch, because 'UCDev' has new, conflicting commits since 'ServiceCase' was created.",
      "multiSelect": false
    },
    {
      "question": "Universal Containers has five development teams. The performance of the teams has been good, but the number of bugs has been increasing. After each sprint, they need more time to understand the code and make changes. What are two ways to improve the performance?",
      "answers": {
        "a": "Define a team that will analyze/approve all changes.",
        "b": "Define and follow code standards.",
        "c": "Sprint review process.",
        "d": "Version control system to identify who is generating the bugs."
      },
      "correctAnswer": ["b", "c"],
      "explanation": "The key symptom 'need more time to understand the code' points to a lack of consistency and growing technical debt. (B) Defining and following code standards directly addresses this, making code more maintainable and reducing bugs. (C) A Sprint Review process ensures that work is demonstrated to stakeholders, increasing visibility and accountability for quality. Defects found here will drive the team to improve its practices (like adhering to standards) in subsequent sprints.",
      "multiSelect": true
    },
    {
      "question": "Universal Containers' org is complex but well-organized in unlocked packages with their dependencies. The development team was asked for a new feature, and the package that will be changed has already been identified. Which environment should be used for this development?",
      "answers": {
        "a": "A Developer Pro sandbox with all packages installed.",
        "b": "A scratch org with all installed packages.",
        "c": "A Developer Pro sandbox with the package code that will be changed and its dependencies installed.",
        "d": "A scratch org with the package code that will be changed and its dependencies."
      },
      "correctAnswer": "d",
      "explanation": "The best practice for package development is to use a clean, disposable environment. (D) A scratch org is ideal. You would not install *all* packages, but only the source code for the package you are actively developing *and its declared dependencies*. This ensures your new feature doesn't accidentally rely on metadata from an unrelated package, which would break the build.",
      "multiSelect": false
    },
    {
      "question": "Universal Containers has defined a software tool to support Agile processes, but the development team is not regularly updating the status of their work in progress. What Scrum value is compromised by this bad practice, and why?",
      "answers": {
        "a": "Courage, because the teams should be transparent about progress and speak up when they need help.",
        "b": "Openness, because the team is not open to a new methodology.",
        "c": "Focus, because the teams are not focusing in the agile process expected activities.",
        "d": "Commitment, because the team is not committed to follow the Agile methodology."
      },
      "correctAnswer": "b",
      "explanation": "The Scrum value of 'Openness' (also known as Transparency) is about making all aspects of the work—progress, obstacles, and plans—visible to everyone. By not updating the tool, the team is not being *open* about the status of their work, which compromises this core value and prevents proper inspection and adaptation.",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) has a large backlog of work. They have noticed that despite their best efforts, valuable enhancements... are not being completed... Many of these items are low effort... What should the architect recommend that will minimize additional costs and allow UC to accomplish more from the backlog?",
      "answers": {
        "a": "UC should hire a partner to complete the needed backlog items.",
        "b": "UC should eliminate low-value items from the backlog.",
        "c": "UC should hire additional resources to reduce the backlog.",
        "d": "UC should start a citizen development program."
      },
      "correctAnswer": "d",
      "explanation": "The key requirements are to handle 'low effort' items and 'minimize additional costs'. Hiring (A, C) directly increases costs. (D) A citizen development program empowers business users and admins (who are already on staff) with low-code tools (like Flow Builder) to build these simple enhancements themselves. This frees up the expensive pro-development team for complex work, increasing overall throughput with minimal new cost.",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) has noticed that unit tests are failing in production during deployments... investigations have revealed that administrators are making minor changes in production without regard to dependent components. What two suggestions can the architect make to help UC discover these failing unit tests earlier?",
      "answers": {
        "a": "Stop administrators from making all changes.",
        "b": "Ask administrators to run unit tests before every change.",
        "c": "Train the administrators to make their changes in a special 'admin changes' sandbox, and then promote to production.",
        "d": "Ensure a metadata backup is committed to version control every day and a diff published to the release team."
      },
      "correctAnswer": ["c", "d"],
      "explanation": "The problem is untested changes in production. (C) The best solution is a *process* change: admins must make changes in a sandbox, where tests are run upon validation/deployment. This discovers the failure *before* it hits production. (D) A complementary *technical* solution is to run a daily CI job that backs up production metadata to version control. This job can also run all production Apex tests, discovering any failures within 24 hours, which is much 'earlier' than the next big deployment.",
      "multiSelect": true
    },
    {
      "question": "Universal Containers is reviewing its environment strategy. They have identified a need for a new hotfix environment to resolve any urgent production issues. Which two sandbox types would be appropriate to use as the hotfix environment?",
      "answers": {
        "a": "Partial Copy sandbox",
        "b": "Developer sandbox",
        "c": "Full sandbox",
        "d": "Developer Pro sandbox"
      },
      "correctAnswer": ["b", "d"],
      "explanation": "A hotfix environment must be created or refreshed *quickly* from production to investigate an urgent bug. Developer (B) and Developer Pro (D) sandboxes are the fastest to refresh (can be done daily) and are intended for this type of isolated, code-based work. Full (C) and Partial (A) sandboxes have long refresh intervals (29 days and 5 days, respectively) and are too slow for emergency hotfixes.",
      "multiSelect": true
    },
    {
      "question": "A technical lead is performing all code reviews for a team and is finding many errors and improvement points. This is delaying the team's deliveries. Which two actions can effectively contribute to the quality and agility of the team?",
      "answers": {
        "a": "Choose the most senior developer to help the technical lead in the code review.",
        "b": "Create development standards and train teams in those standards.",
        "c": "Skip the code review and focus on functional tests and UAT.",
        "d": "Use static code analysis tool in the pipeline before manual code review."
      },
      "correctAnswer": ["b", "d"],
      "explanation": "The team lead is a bottleneck, and quality is low. The solution is to 'shift left' and 'automate'. (B) Creating and training on development standards empowers developers to write better code from the start. (D) A static code analysis tool automates the 'easy' part of the review (finding syntax errors, DML in loops), allowing the human reviewer (the lead) to focus only on complex business logic, which increases both quality *and* agility.",
      "multiSelect": true
    },
    {
      "question": "Universal Containers (UC) is looking at implementing a large number of features using an AppExchange product. This product uses Sobjects to store and configure important business logic within the application. Which two options should an architect recommend, as the source of truth for storing this reference data?",
      "answers": {
        "a": "Store the records in sandboxes and production.",
        "b": "Store the records in a version control system.",
        "c": "Use a third-party product to manage these records.",
        "d": "Attach CSV files to the user stories in a project management system."
      },
      "correctAnswer": ["b", "c"],
      "explanation": "This 'configuration as data' is critical and must be versioned just like code. (B) The ultimate 'source of truth' should be a Version Control System (VCS), where the data is exported (as JSON/CSV) and committed. (C) Specialized third-party (DevOps) products (like Copado, Gearset) are built to manage this exact problem, enabling the extraction, versioning in the VCS, and deployment of this data as part of a CI/CD pipeline.",
      "multiSelect": true
    },
    {
      "question": "Metadata API supports deploy () and retrieve () calls for file-based deployment. Which two scenarios are the primary use cases for writing code to call retrieve () and deploy () methods directly?",
      "answers": {
        "a": "Team development of an application in a Developer Edition organization. After completing development and testing, the application is Distributed via Lightning Platform AppExchange.",
        "b": "Development of a custom application in a scratch org. After completing development and testing, the application is then deployed into an upper sandbox using Salesforce CLI (SFDX)",
        "c": "Development of a customization in a sandbox organization. The deployment team then utilize the Ant Migration Tool to deploy the customization to an upper sandbox for testing.",
        "d": "Development of a custom application in a sandbox organization. After completing development and testing, the application is then deployed Into a production organization using Metadata API."
      },
      "correctAnswer": ["a", "d"],
      "explanation": "The question asks when you would *write your own code* to call the Metadata API, rather than using a pre-built tool like the SFDX CLI (B) or the ANT Migration Tool (C). (A) An AppExchange partner (ISV) often builds custom tools to automate their unique build and packaging processes, which would require direct API calls. (D) Similarly, a large enterprise might build a custom in-house deployment tool (e.g., in Java or Python) that integrates with their existing systems, which would also require direct API calls.",
      "multiSelect": true
    },
    {
      "question": "Product owners at Universal Containers want to ensure that all the requirements have test cases associated with them so that no functionality is left untested during user acceptance testing. What project artifact can help meet the needs of the business?",
      "answers": {
        "a": "User acceptance test scripts",
        "b": "Testing strategy",
        "c": "Test execution plan",
        "d": "Requirement traceability matrix"
      },
      "correctAnswer": "d",
      "explanation": "A Requirement Traceability Matrix (RTM) is a document specifically designed for this purpose. It (D) traces and maps user requirements (like user stories) to their corresponding test cases (UAT scripts, unit tests, etc.). This matrix provides a clear view of which requirements are covered by tests and which are not.",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) has four different business units (BUS) with different processes that shares global customers. They have implemented a multi-org strategy with one org consolidating customer 360-degree view... UC is now launching a new BU... It does not share customers... and needs flexibility... What should an architect recommend as org strategy for this new BU",
      "answers": {
        "a": "Use a new stand-alone Salesforce org for the new BU, not integrated with the others.",
        "b": "Deploy the new BU in customer 360-degree view org, and read and write customer information from it without need of custom integration.",
        "c": "Use the same Salesforce org of another BU that shares geographical localization with the new BU.",
        "d": "Use a new Salesforce org for the new BU, and customize integration so that it reads and writes customer information from the customer data org."
      },
      "correctAnswer": "a",
      "explanation": "The new business unit has two key attributes: it 'does not share customers' with the other BUs, and it 'needs flexibility' in its processes. These requirements mean there is no value in integrating it with the customer 360 hub org (ruling out B and D) and it should not be constrained by another BU's processes (ruling out C). The best strategy is (A) a new, standalone org that gives it maximum flexibility.",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) had been using change sets for deploying all of the modifications to its Sales Cloud apps... As an architect, which two statements can be made to articulate the differences between the change set model and package development model?",
      "answers": {
        "a": "In package development, the source of truth is the metadata in the package project, which makes it easy to integrate to a version controlSystem.",
        "b": "A change set can be retrieved from the developer's workbench as a package, then pushed into the version control system to achieve theVersioning control.",
        "c": "In change set development, the source of truth is a combination of the metadata already in the environment and the content of your change Set.",
        "d": "In package development, the best practice is to consider the dependencies and build the dependencies into the package so it can be deploye In any other target orgs."
      },
      "correctAnswer": ["a", "c"],
      "explanation": "These two options perfectly define the core difference in 'source of truth'. (C) In change set development, the 'source of truth' *is the org*. You are just deploying a *delta* of changes (the change set) on top of the target org. (A) In package development, the 'source of truth' *shifts to your project code* in a version control system. The package is a self-contained artifact built from that source.",
      "multiSelect": true
    },
    {
      "question": "By towhat three tools should an architect recommend to support application lifecycle methodology",
      "answers": {
        "a": "Database managementsystems",
        "b": "Version control repository",
        "c": "Middleware",
        "d": "Continuous integration tool",
        "e": "Issue tracking Ttool"
      },
      "correctAnswer": ["b", "d", "e"],
      "explanation": "A modern Application Lifecycle Management (ALM) process is supported by three key tool categories: (E) an 'Issue tracking tool' (e.g., Jira, Agile Accelerator) to manage requirements and user stories, (B) a 'Version control repository' (e.g., Git) to act as the source of truth for all code and metadata, and (D) a 'Continuous integration tool' (e.g., Jenkins, Copado) to automate the building, testing, and deployment of that code.",
      "multiSelect": true
    },
    {
      "question": "Universal Containers is a global organization that maintains regional production instances of Salesforce. One region has created a new application... The CIO has requested that this new application be used globally... and further maintained... by local administrators. Which two deployment tools will support the request?",
      "answers": {
        "a": "Change Sets B",
        "b": "Developer Console",
        "c": "ANT Migration Tool",
        "d": "VS Code with Salesforce Extension"
      },
      "correctAnswer": ["c", "d"],
      "explanation": "The requirement is to deploy metadata (the 'application') from one production org to *other* production orgs. Change Sets (A) cannot be used between orgs that don't share a common production org. The Developer Console (B) is not a deployment tool for applications. Both the (C) ANT Migration Tool and (D) VS Code with Salesforce Extensions (which uses SFDX) are API-based tools that can retrieve metadata from any org and deploy it to any other org.",
      "multiSelect": true
    },
    {
      "question": "Universal Containers (UC) had implemented two full sandboxes. One, known as Stage... for performance, regression testing... The other is used primarily for user acceptance testing (UAT)... UC needs to release on the current Salesforce version, but also wants to make sure the new Salesforce release does not break anything. What should an architect recommend?",
      "answers": {
        "a": "Refresh Stage now, and do not refresh UAT. This way, Stage will be on preview and UAT will not.",
        "b": "Use the Sandbox Preview Guide to check if there is any necessary action needed. UC might have to prepare, refresh, and redeploy to UAT.",
        "c": "Visit trust.salesforce.com to figure out the preview cutoff dates, if the dates had passed, work with support to get on the preview instance.",
        "d": "Refresh Stage from UAT now. After preview cutoff, use the upgraded one for regression test, use the non-upgraded one for user acceptance Test."
      },
      "correctAnswer": "a",
      "explanation": "The team needs two environments: one for the *current* release (on the current Salesforce version) and one for *future* regression testing (on the new Salesforce preview version). The UAT sandbox is needed for the current release, so it should *not* be refreshed. (A) Refreshing the 'Stage' sandbox *before* the preview cutoff date will upgrade it to the new preview version, making it the perfect environment for regression testing, while UAT remains on the current version for the production release.",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) has multiple teams with major projects working concurrently in their own developer sandboxes. After deploying to production, a bug is discovered. Due to tight timelines, the development team has suggested correcting the bug in the user acceptance testing (UAT) environment, which is a full copy sandbox. What should the architect recommend?",
      "answers": {
        "a": "UC should spin up a new sandbox to use as a hot fix environment. Once the bug is corrected, the change should be applied to production and downstream environments.",
        "b": "The fix should be made in the developer environment where the project work was done. Once the fix has been made, it should go through a full deployment/testing process and adhere to the normal project cadence.",
        "c": "Since the issue was found in production, it should be treated as a change request and go into the backlog as an enhancement.",
        "d": "Correcting the bug in UAT is ideal. Since UAT is a full copy, it will be the fastest location to fix and test the resolution."
      },
      "correctAnswer": "a",
      "explanation": "This is a production bug, which requires a 'hotfix' process. (D) Developing in UAT is an anti-pattern; UAT is for testing, not development. (B) Waiting for the next release cadence is not an option for a production bug. (A) The correct process is to spin up a new, clean sandbox (a 'hotfix' sandbox), replicate and fix the bug there, test it, deploy the fix to production, and then *critically* merge that fix back into all downstream development environments.",
      "multiSelect": false
    },
    {
      "question": "A developer on the Universal Containers team has written a test class to test a method that involves a web service callout. Within the test class, the developer... forgot to use the Test.setMock() method step. What would happen when the developer runs this test class?",
      "answers": {
        "a": "The test class fails without error message since the test class will simply skip the web service callout during the execution.",
        "b": "The test class fails and the developer will see a message stating: Methods defined as TestMethod do not support Web service callouts.",
        "c": "The test class would make the web service callout and may or may not fail depending on the circumstances on the web service end",
        "d": "It is impossible to miss the Test.setMock() statement, the Developer Console will not let the developer save it since the test methou callout."
      },
      "correctAnswer": "b",
      "explanation": "Apex test methods are not allowed to make real-time web service callouts. This is a hard platform restriction. If a test method attempts a callout without `Test.setMock()` being set, the test will fail immediately and (B) throw a `System.CalloutException` with the error message: 'Methods defined as TestMethod do not support Web service callouts.'",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) maintains its Salesforce org using its internal tools and processes... The UC team has been facing challenges on their development processes... The architect has recommended the UC team to follow the org development model... Which two characteristics of the org development model will help UC address the challenges?",
      "answers": {
        "a": "Automated deployment",
        "b": "Automated defect fixing",
        "c": "Automated sandbox provisioning",
        "d": "Automated change tracking"
      },
      "correctAnswer": ["c", "d"],
      "explanation": "The 'org development model' (in the context of SFDX) has two key features that address common development challenges: (D) 'Automated change tracking' (using SFDX source tracking) which automatically detects changes made in an org, and (C) 'Automated sandbox provisioning' (using scratch orgs) which allows developers to spin up new, clean, source-tracked environments from a script.",
      "multiSelect": true
    },
    {
      "question": "Universal Containers is having trouble deploying metadata from SIT to UAT. UAT is complaining that it does not recognize some new Salesforce metadata types to be deployed. The deployment from Dev to SIT worked perfectly. What could be the problem?",
      "answers": {
        "a": "There is no problem, this is expected behavior.",
        "b": "UAT is on a preview release and SIT is not.",
        "c": "SIT is on a preview release and UAT is not.",
        "d": "Use the DX command line instead."
      },
      "correctAnswer": "c",
      "explanation": "This is a classic Salesforce release version mismatch. The 'new metadata types' exist in the 'SIT' sandbox because it has been upgraded to the next Salesforce release (it's on 'preview'). The 'UAT' sandbox is still on the current, older production release and therefore doesn't recognize this new metadata, causing the deployment to fail.",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) just started configuration and customization of its Salesforce organization. The architect suggested the definition of an application lifecycle management (ALM) process. What are three benefits of following an ALM process?",
      "answers": {
        "a": "Avoiding defects from being deployed to production.",
        "b": "Training new users after each minor and major release.",
        "c": "Defining metrics for application development project success.",
        "d": "Releasing new features on a consistent schedule.",
        "e": "Preventing existing working functionality from stopping."
      },
      "correctAnswer": ["a", "d", "e"],
      "explanation": "A robust ALM process provides predictability and quality. It ensures changes are tested, (A) avoiding defects in production. It establishes a clear, repeatable process for development and testing, enabling (D) releases on a consistent schedule. It also includes regression testing, (E) preventing new changes from breaking existing functionality (regressions).",
      "multiSelect": true
    },
    {
      "question": "Universal Containers (UC) environment management architect is using the package development model for deployment to different orgs. Which metadata changes does the architect need to track manually?",
      "answers": {
        "a": "No manual tracking required. All changes are automatically tracked.",
        "b": "All metadata changes for the release.",
        "c": "Changes to components not yet supported by source tracking.",
        "d": "Only the changes made via the Setup UI."
      },
      "correctAnswer": "c",
      "explanation": "While SFDX source tracking is powerful, it does not support every single metadata type in Salesforce. The architect must be aware of the 'Metadata Coverage Report' and (C) manually track any changes made to metadata types that are not supported by source tracking, as these will not be automatically detected.",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) development team is developing a managed package for AppExchange. The product team has finished developing and testing, and wants to submit a Security Review. However, the product manager has concerns on the few errors from the Checkmarx code scanner. How should the product team proceed?",
      "answers": {
        "a": "Review the Checkmarx errors. If there is no need to fix, mark them as false positive and attach explanation, then submit.",
        "b": "Leave them to the Salesforce security review team, they would catch it if those are true problems.",
        "c": "Leavee a partner support case, the partner manager will engage Salesforce support resources to help.",
        "d": "Review the Checkmarx errors and fix all of them before submitting security review. Salesforce security review team will reject the request if any error remains."
      },
      "correctAnswer": "a",
      "explanation": "The Checkmarx (or 'Code Scanner') report is a required part of the security review submission. It is common for these automated tools to produce 'false positives'. (A) The correct process is to review every reported error, fix the ones that are real, and for those that are false positives, provide a clear, written explanation of *why* it is a false positive. This documentation is submitted along with the report.",
      "multiSelect": false
    },
    {
      "question": "What advice should a technical architect provide in a Change Advisory Board meeting?",
      "answers": {
        "a": "Functionality meets the business needs.",
        "b": "Solution is usable by the business.",
        "c": "Solution is technically sound.",
        "d": "Troubleshooting strategies for deployment issues."
      },
      "correctAnswer": "c",
      "explanation": "The Change Advisory Board (CAB) is a governance body that approves changes for production release. The Technical Architect's role in this meeting is to (C) vouch for the *technical* aspects of the change—that it is well-designed, scalable, secure, and doesn't conflict with other parts of the system. The Product Owner would speak to (A) and (B).",
      "multiSelect": false
    },
    {
      "question": "Universal Containers is a Salesforce AppExchange partner and they are planning to launch a new app. The technical architect recommended that they use a partner development org for development. What are the three benefits of using a partner development org over an individual development org in this scenario?",
      "answers": {
        "a": "Partner development org has a greater number of licenses available for the team.",
        "b": "Partner development org offers higher API limit.",
        "c": "Only partner development org supports managed beta testing.",
        "d": "Partner development org never expires.",
        "e": "Partner development org offers more storage."
      },
      "correctAnswer": ["a", "b", "e"],
      "explanation": "Partner Developer Edition (PDE) orgs are specifically for partners and are superior to standard Developer Edition (DE) orgs. They come with (A) more user licenses, (B) higher API limits, and (E) more data and file storage. This makes them much more suitable for building and testing a robust commercial application. (C) is incorrect, and (D) applies to both DE and PDE orgs.",
      "multiSelect": true
    },
    {
      "question": "In the effort of improving the code quality, Universal Containers (UC) has asked a third-party system integrator to perform some independent code reviews. One piece of the feedback is the development team is seemingly not doing enough negative unit testing. Which are three usual symptoms of inadequate negative tests?",
      "answers": {
        "a": "Developers often have to turn to the debug log for details of the failed Apex executions.",
        "b": "When an Apex batch job runs at a scheduled time, an increased number of Apex execution errors occur over all.",
        "c": "An Apex process runs into an un-handled exception when an HTTP callout has an unexpected status code in the response body.",
        "d": "Developers constantly ask the testers for a screenshot of the error and the exact steps of reproducing the error.",
        "e": "The delivered user interfaces are regularly not meeting the expectations of the business users."
      },
      "correctAnswer": ["b", "c", "d"],
      "explanation": "Negative tests check how code handles errors and unexpected inputs. (C) An unhandled exception from a callout is a classic sign that the 'failure' scenario was never tested. (B) Batch jobs running into errors also suggest testing was only done on 'happy path' data. (D) Developers asking testers for reproduction steps indicates they don't have a test class that already triggers the error, a clear symptom of missing negative test coverage.",
      "multiSelect": true
    },
    {
      "question": "Universal Containers would like to conduct performance testing on its new major release. What three things should the architect consider when discussing performance testing?",
      "answers": {
        "a": "Salesforce must be informed at least 7 days before starting performance tests.",
        "b": "Salesforce will monitor test activity to ensure there are no issues with Salesforce Services.",
        "c": "Performance tests must be run in a sandbox.",
        "d": "A business justification must be provided to Salesforce in order to run performance testing.",
        "e": "Performance tests may be run without advanced notice, but Salesforce will not store performance logs."
      },
      "correctAnswer": ["a", "b", "c"],
      "explanation": "Salesforce is a multi-tenant platform, so you cannot run large-scale performance tests without permission. The official process requires that (C) tests must be run in a sandbox (never production), and (A) you must notify Salesforce (typically 2 weeks, but 7 days is the closest answer) in advance by opening a support case. As part of this, (B) Salesforce will monitor the test activity to ensure it doesn't impact other customers on the same instance.",
      "multiSelect": true
    },
    {
      "question": "A team of developers at Universal Containers has developed Apex Triggers and Apex Classes in a sandbox. The team has also written test classesto unit test these triggers and classes. When executed in the sandbox, all the test methods pass and all the classes meet the minimum code coverage requirement. But when they tried deploying these components to production, a few of these test methods failed What should an architect recommend?",
      "answers": {
        "a": "Create test data in production before deploying the test classes",
        "b": "Set SeeAllData to True to use the data in production.",
        "c": "Explicitly set SeeAllData to True and generate data in test methods.",
        "d": "Do not use SeeAllData and generate data in the test methods."
      },
      "correctAnswer": "d",
      "explanation": "This is a best-practice issue. The tests are likely failing in production because they are (implicitly or explicitly) relying on data that exists in the sandbox but *not* in production. The best practice is (D) to ensure all test methods have `SeeAllData=false` (which is the default) and are 100% self-contained by *generating their own test data* inside the test method or a test utility class.",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) had added a Service team to the Salesforce Platform. The Service team would like to have a few dozen of the service centers entered into the system as technical reference data... In the past, they had to manually add any new service centers in each sandbox... they would like to eliminate the manual work... What is an optimal way to accomplish this requirement?",
      "answers": {
        "a": "Add the service centers to a hierarchical custom settings.",
        "b": "Add the service centers to a list custom settings.",
        "c": "Define a brand-new custom object with a picklist field to host all of the service centers.",
        "d": "Add all of the service centers to a custom metadata type."
      },
      "correctAnswer": "d",
      "explanation": "The requirement is for *data* (the list of service centers) that needs to be *deployed* just like *metadata*. This is the exact use case for (D) Custom Metadata Types. Records created in a Custom Metadata Type are considered metadata and can be retrieved, put into version control, and deployed through the ALM pipeline (e.g., in a change set or package), eliminating the manual, org-by-org data entry.",
      "multiSelect": false
    },
    {
      "question": "What are the three considerations that the architect should recommend for Change Set deployment? Choose 3 answers",
      "answers": {
        "a": "Change Sets cannot be automated..",
        "b": "Change Sets cannot be validated before deployment",
        "c": "Change Sets cannot be used for orgs affiliated with same production org.",
        "d": "Change Sets cannot be rolled back.",
        "e": "Change Sets cannot be reused between Production Salesforce orgs."
      },
      "correctAnswer": ["a", "d", "e"],
      "explanation": "Change Sets have significant limitations. (A) They are a manual, point-and-click process and cannot be automated or called from a CI/CD pipeline. (D) There is no 'rollback' button; to undo a change set, you must create a *new* change set that undoes the changes (or deletes components). (E) They can *only* be used between orgs in the *same* production environment (e.g., sandbox-to-prod). They cannot be used to deploy between two different production orgs.",
      "multiSelect": true
    },
    {
      "question": "Universal Containers is delivering many changes to its Salesforce system. Adoption reports are discovering that many features are unused. The steering committee wants this to change and is looking to the architect for advice. What should an architect recommend to overcome this?",
      "answers": {
        "a": "Using Lightning Web Components for every user interface.",
        "b": "Adopting user centered design to understand user needs before building the solution.",
        "c": "Stop development until current features start being used.",
        "d": "Sending weekly communication emails reporting on least engaged users."
      },
      "correctAnswer": "b",
      "explanation": "The problem is a disconnect between *what is being built* and *what users actually need*. (B) 'User-Centered Design' (UCD) is a methodology that directly addresses this by focusing on understanding user needs, goals, and pain points *before* and *during* the development process. This ensures that the final product is both useful and usable, driving higher adoption.",
      "multiSelect": false
    },
    {
      "question": "Ursa Major Solar (UMS) has used Aura components significantly in its Salesforce application development. UMS has established a robust test framework and the development team follows the Salesforce recommended testing practices. UMS team uses Salesforce’stest tool To check for common accessibility issues. In which two environments the UMS team can call Aura accessibility tests?",
      "answers": {
        "a": "JSTEST",
        "b": "ACCTEST",
        "c": "WebDriver Test",
        "d": "AuraDriver Test"
      },
      "correctAnswer": ["b", "c"],
      "explanation": "Salesforce provides specific tools for testing Aura component accessibility (a11y). These tests can be run (B) in the 'ACCTEST' environment, which is a specific harness for accessibility tests, and (C) as part of a 'WebDriver Test' (using Selenium WebDriver), which allows for end-to-end UI test automation, including accessibility checks.",
      "multiSelect": true
    },
    {
      "question": "Which two ways should a developer working on a data loading integration that operates between different Salesforce environments insert multiple related records in one call or transaction? Choose 2 answers",
      "answers": {
        "a": "REST API SObject Tree Request",
        "b": "Bulk API 2.0",
        "c": "REST API Composite Request",
        "d": "Streaming API"
      },
      "correctAnswer": ["a", "c"],
      "explanation": "The requirement is to insert *related* records in a *single transaction*. (C) The 'REST API Composite Request' allows you to batch up to 25 separate API calls (e.g., create Account, then create Contact) into a single call that either fully succeeds or fully fails. (A) The 'REST API SObject Tree Request' is even more specialized, allowing you to insert a nested JSON structure (e.g., an Account with its child Contacts) in one request.",
      "multiSelect": true
    },
    {
      "question": "Universal Containers (UC) is using custom metadata types to control the behavior of a few of the custom functionalities. UC wants to Deploy custom metadata types to production using Metadata API. Which two data types does UC need to include?",
      "answers": {
        "a": "CustomMetadataType",
        "b": "CustomMetadata",
        "c": "CustomObject",
        "d": "Custom Field"
      },
      "correctAnswer": ["a", "b"],
      "explanation": "When deploying Custom Metadata, you must deploy two separate things: (A) The *definition* of the custom metadata type itself (the object and its fields), which has the API name 'CustomMetadataType'. (B) The actual *records* of that type, which have the API name 'CustomMetadata'.",
      "multiSelect": true
    },
    {
      "question": "The team at Universal Containers is building an application on Java that will interact with its Salesforce application. They want to use SOQL queries to retrieve and make changes to smaller pieces of Salesforce metadata through this application. Which API should the team leverage?",
      "answers": {
        "a": "User Interface API",
        "b": "Tooling API",
        "c": "Metadata API",
        "d": "Any Salesforce API"
      },
      "correctAnswer": "b",
      "explanation": "This is a duplicate of Q24. The Tooling API is designed for building development tools. It provides SOQL access to metadata (like Apex Classes, Triggers, Custom Fields) and is optimized for retrieving or modifying *smaller pieces* of metadata, which is exactly what the Java application needs to do. The Metadata API is for large-scale, file-based metadata migration.",
      "multiSelect": false
    },
    {
      "question": "Northern Trail Outfitter’s development team has built new features for its sales team in the Asia-Pacific region. While testing the Apex classes, the developers are constantly hitting the governor limits. What should the architect recommend during the review to address this issue?",
      "answers": {
        "a": "Use test.startTest() and test.stop Test() methods to reset governor limits.",
        "b": "Use an AppExchange product which can temporarily increase the governor limits.",
        "c": "Use the auto reset property to automatically reset governor limits during off-hours.",
        "d": "Use test.setLimit() and test.resetLimit() methods to reset governor limits."
      },
      "correctAnswer": "a",
      "explanation": "It is a standard best practice to wrap the code you are *actually* testing inside a `Test.startTest()` and `Test.stopTest()` block. This is because (A) it creates a *new, fresh set* of governor limits for that block of code, allowing your test setup code (like data creation) to not consume the limits needed by the method being tested.",
      "multiSelect": false
    },
    {
      "question": "Universal Containers wants to delete the day's test data in a partial copy sandbox every night, setting the sandbox back to a fresh state for tomorrows testing. The test data is approximately 1GB. What is the best strategy the architect should recommend?",
      "answers": {
        "a": "Manually delete all records individually.",
        "b": "Execute a batch job that deletes all records created on the day.",
        "c": "Create a new developer copy sandbox every night.",
        "d": "Refresh the sandbox every night."
      },
      "correctAnswer": "b",
      "explanation": "A Partial Copy sandbox has a 5-day refresh interval, so (D) is not possible. A Developer sandbox (C) doesn't have 1GB of storage. (B) Executing a batch delete job on 1GB of data is the most programmatically sound and repeatable way to 'reset' the sandbox. This batch job can be scheduled to run every night to delete records based on their `CreatedDate`.",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) innovative apps division is releasing an application that can be installed in its trading partners Salesforce environments. The application lets the trading partners book containers... The partners can then build on top of the application... What is the recommended mechanism for releasing the application...?",
      "answers": {
        "a": "Change sets",
        "b": "Unmanaged package",
        "c": "Managed package",
        "d": "Zip file deployable by SFDX or ANT"
      },
      "correctAnswer": "c",
      "explanation": "The requirements—distributing to *external partners*, allowing them to *build on top* of the app, and *keeping the app up to date* (push upgrades)—are the exact use case for a (C) Managed Package. Managed packages protect the developer's intellectual property (IP) while allowing them to push upgrades to subscribers.",
      "multiSelect": false
    },
    {
      "question": "The CEO at Universal Containers (UC) is receiving constant complaints from business stakeholders that the development teams are not frequently delivering value to the end-user... architect suggests... implement Kanban... How can Kanban help clarify whether value is being delivered to the business?",
      "answers": {
        "a": "Kanban teams respond to unplanned work and changes by dropping everything and jumping on the new request, ensuring agility.",
        "b": "Kannan traits includes metrics, like lead time and throughput, which increases transparency.",
        "c": "Kanban can make use of the Salesforce Agile Accelerator to speed up delivery.",
        "d": "Kanban limits work in progress, so the executives will know the development team is not overworked."
      },
      "correctAnswer": "b",
      "explanation": "Kanban is a 'flow-based' system focused on metrics. (B) Key metrics like 'Lead Time' (total time from request to delivery) and 'Throughput' (items delivered per week) provide objective, transparent data on *exactly how much value* is being delivered and how frequently. This directly clarifies the disagreement between the CEO and CTO.",
      "multiSelect": false
    },
    {
      "question": "An architect has been working on a large project for the past 6 months. This project must be live by the end of the current month. Which two planning techniques should the architect use to ensure all metadata changes deploy smoothly and on time?",
      "answers": {
        "a": "Create a new sandbox and perform a test deployment to that environment.",
        "b": "Ensure all code that is being deployed is checked into source control.",
        "c": "Upload a change set from sandbox to production as early as possible.",
        "d": "Validate the final deployment package against production prior to go-live"
      },
      "correctAnswer": ["a", "d"],
      "explanation": "To ensure a smooth deployment, you must 'de-risk' it. (D) 'Validating' the final package against production runs all tests and checks for missing dependencies *without* committing the changes. This is the single most important step. (A) Performing a 'test deployment' (also called a 'staging' or 'dress rehearsal') into a new, clean sandbox that mirrors production is another key technique to find errors before the real deployment.",
      "multiSelect": true
    },
    {
      "question": "What is a main characteristic of an agile team?",
      "answers": {
        "a": "The team uses Scrum, Kanban, and Extreme Programming.",
        "b": "The team has biweekly sprints to ensure on-time delivery.",
        "c": "The team delivers new releases on dates defined in the beginning of the project, following a project plan",
        "d": "The team improves and evolves its processes and frequently delivers value to the end users."
      },
      "correctAnswer": "d",
      "explanation": "The core of 'agile' is not a specific framework (A) or sprint length (B). It is a mindset. (D) An agile team focuses on *frequently delivering value* (working software) and *continuously improving* its own processes (e.g., in retrospectives). (C) describes a waterfall, not agile, model.",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) has a customized repository... UC currently is trying to shift from the org development model to the package development model... In the org development model, each developer starts their work within their own personal sandbox... what should a Salesforce architect recommend?",
      "answers": {
        "a": "Start using scratch orgs because a developer can spin up a scratch org to start a new project, start a new feature branch, or start automated Testing.",
        "b": "Start using scratch orgs that tracks all of the changes automatically and proceed with a staggered approach since scratch orgs can coexist With other models.",
        "c": "Keep developing in the dev sandboxes because scratch orgs are not within the code deployment path.",
        "d": "Keep developing in the dev sandboxes, so that the developers feel no impact at all as they are used to the sandbox development."
      },
      "correctAnswer": "a",
      "explanation": "The 'package development model' is designed to be used with (A) 'scratch orgs'. Scratch orgs are temporary, source-driven, and configurable environments that are spun up from a definition file in your project. This allows a developer to create a new, clean, purpose-built org for *every single feature* or task, which is the best practice.",
      "multiSelect": false
    },
    {
      "question": "Universal Containers (UC) has been using Salesforce Sales Cloud for many years following a highly customized, single-org strategy with great success so far. What two reasons can justify a change to a multi-org strategy?",
      "answers": {
        "a": "UC is launching a new line of business with independent processes and adding any new feature to it is too complex.",
        "b": "UC wants to use Chatter for collaboration among different business units and stop working in silos.",
        "c": "UC follows a unification enterprise architecture operating model by having orgs with the same processes implemented for each business unit.",
        "d": "Acquired company that has its own Salesforce org and operates in a different business with its own set of regulatory requirements."
      },
      "correctAnswer": ["a", "d"],
      "explanation": "A single-org becomes problematic when business units are too different. (A) If a new LOB is so 'independent' that its processes conflict with the core org, and customization becomes 'too complex' (hitting governor limits, bloated objects), a separate org is justified. (D) An acquisition with its *own org*, *different business*, and *separate regulatory requirements* is the classic, textbook reason to adopt a multi-org strategy.",
      "multiSelect": true
    },
    {
      "question": "Universal Containers are concerned that after each release, reports and dashboards seem to roll back to previous versions... Executives spend many hours crafting these dashboards... What can the Salesforce architect advise to stop the rollbacks from happening?",
      "answers": {
        "a": "Use a third-party data warehouse.",
        "b": "Remove the executive's ability to change reports, and only allow developers to do that.",
        "c": "Ensure report metadata is exported daily and that it is merged into the developer branches before the next release.",
        "d": "Back up all the reports just before the release, then reimport them after the release,"
      },
      "correctAnswer": "c",
      "explanation": "The problem is that executives are making changes in production, but the development team's deployment is based on an *older version* of that metadata from source control. The deployment is overwriting the executive's changes. The solution is to (C) implement a process (like a daily CI job) that exports the production metadata, finds any changes (the 'diff'), and *merges those changes back into the developer branches*. This keeps the source of truth in sync with production.",
      "multiSelect": false
    },
    {
      "question": "Universal Containers has a full sandbox that will be used to analyze and fix bugs found in production. Which two items should the architect recommend to ensure that bugs found in production are more easily analyzed in this full sandbox?",
      "answers": {
        "a": "Refresh the full sandbox after every deployment in production.",
        "b": "Create a daily process of copying new and changed data in production to the full sandbox.",
        "c": "Before any deployment in production, the same process must be performed in this sandbox.",
        "d": "Perform a Refresh Data in the full sandbox."
      },
      "correctAnswer": ["a", "c"],
      "explanation": "For a 'bug analysis' sandbox to be useful, it must be an *exact replica* of production in both metadata and data. (A) Refreshing the full sandbox (which copies both metadata and data) after every release ensures it stays in sync. (C) Furthermore, any new deployment must be sent to this sandbox *before* production, not just to test the deployment, but to ensure this sandbox *remains* a mirror of what production will look like.",
      "multiSelect": true
    },
    {
      "question": "What two things are needed to delete metadata with a deploy() call? Choose 2 answers",
      "answers": {
        "a": "Package.XML file.",
        "b": "The CURRENT API version must be used.",
        "c": "DestructiveChanges.xml file.",
        "d": "PurgeOnDelete option must be set to TRUE."
      },
      "correctAnswer": ["a", "c"],
      "explanation": "A destructive deployment package has two key files. (C) A file named `destructiveChanges.xml` that lists the components you want to delete. (A) A file named `package.xml` that is *empty* (or lists any components you are adding/updating). Both files are bundled into the .zip file that is sent to the `deploy()` call.",
      "multiSelect": true
    },
    {
      "question": "The CTO at Universal Containers is complaining to the software development managers that he has no visibility of their teams' work status. What two software development methodologies should an architect suggest to solve this issue, and why?",
      "answers": {
        "a": "Waterfall, because it defines a fixed schedule and duration for each activity.",
        "b": "DevOps, because monitoring and logging practices help you stay informed of performance in real time.",
        "c": "Scrum, because openness is one of the five core Scrum values.",
        "d": "Kanban, because one of its basic elements is to make everything visible, creating consistent transparency of work items."
      },
      "correctAnswer": ["c", "d"],
      "explanation": "The problem is a lack of 'visibility'. (D) Kanban directly solves this as one of its core principles is to 'make work visible' using a Kanban board, which provides real-time transparency. (C) Scrum also solves this through its value of 'Openness' (transparency) and its mandatory 'ceremonies' like the Daily Stand-up and Sprint Review, which are specifically designed to make status and obstacles visible to all stakeholders.",
      "multiSelect": true
    },
    {
      "question": "What are two advantages of automated test data loads over manual data loads Choose 2 answers",
      "answers": {
        "a": "Automated loads can be done with no human oversight.",
        "b": "FRED Automated loads are reliable in their results.",
        "c": "Automated loads cannot be scripted by CICD tools.",
        "d": "Automated loads will increase costs."
      },
      "correctAnswer": ["a", "b"],
      "explanation": "Automating data loads as part of a CI/CD pipeline or testing process is superior to manual loads because (B) automation is 'reliable'—it follows the same script and produces the same, predictable outcome every time. (A) Because it is a script, it can be run 'with no human oversight', for example, as part of a nightly build or sandbox refresh, saving valuable time.",
      "multiSelect": true
    },
    {
      "question": "Universal Containers (UC) uses a managed package to install an internal Sales app in five orgs... UC wants to use unlocked packages for better integration with CI/CD processes. What would the Salesforce architect recommend for this migration?",
      "answers": {
        "a": "Export all data from objects/fields of the managed package, uninstall it, install the unlocked package with the same namespace as the Managed package and restore all data.",
        "b": "Export all data from objects/fields of the managed package, uninstall it, install the unlocked package without namespace and restore all data.",
        "c": "Do not change to unlocked package as it is possible to perform all CI/CD processes with the managed package.",
        "d": "Migrate all classes, Visualforce, and components from the managed package to the unlocked package. Install the new version of the managed package (objects/fields only) and the unlocked package with the other components."
      },
      "correctAnswer": "a",
      "explanation": "This describes a 'Managed to Unlocked' package conversion. The key is that the new Unlocked package *must* be created with the *same namespace* as the original Managed package. The process is to (A) back up all data, uninstall the managed package, install the new unlocked package (with the same namespace), and then restore the data. Because the namespace (and thus all the API names) are identical, the data will map correctly to the 'new' objects.",
      "multiSelect": false
    }
  ]