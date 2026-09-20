# playwright cli automation

### official documentation for reference

https://playwright.dev/agent-cli/introduction

https://github.com/microsoft/playwright-cli

### high level details

#### Agent.md

It defines how an agent behaves

#### skills.md

what your agents can do (tools/format/other access etc)

### Follow the project structure:

.playwright-cli folder > it contains all yml files, which are structure of a web page
.claude > all ai info goes in here such as
.claude > agents > name_of_agent.md > agent details
.claude > skills > name_of_skill,md > any tool access, any references details
Note: In agent.md :-> these are optional, model,tools,memory but critical set is to define the context for an agent like giving it a realistic role to drive the work. Example is: You're a senior QZ engineer whose responsible for.. with steps.

### Automatic agents:

So claude or any main agent, can also create a custom agent.md file (sub-agents) by itslef if ask it to create it for us. a sample prompt is attached.
