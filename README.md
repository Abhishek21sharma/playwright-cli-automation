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

Also, we can ask main agent, to review custom agent.md file as well

## claude code important concepts

EVERYTHING related to CLAUDE will be in .claude dir
name it: rules,hooks,skills,agents,settings,commands
all stays here, related to project

/terminal-setup: now we can press shift+enter for a new line in the terminal
/config: to update all config related tasks
/init: it create CLAUDE.md filw which will go in as a base prompt when we ask claude anything

if we add some permissions (Auto-permission) or other user related settings, it will create and add .claude/ --> settings.local.json

claude code --> to change to plane mode/auto mode/ accept mode/manual mode use --> shift + tab

MCP: a set of tools which claude can use. for eg: writing to a file, running a comamnd on terminal.
so basically, all other tools have opened there apis for claude to let it use it's various services.
it allows LLM agents (like claude) to interact with 3rd party service and being able to interact with 3rd party services.

to note: if there is no document to follow, claude will answer whatever comes on top of there mind and very generic. it's easily and high likely will go out of hand.
so it's very important to create custom agents, skills, rules and hooks.

## important for claude code

custom /slash commands:: go to .claude dir and create a directory called 'commands', so any markdown file (.md file) will work as a custom command and picked up by claude after a restart.
tell/prompt claude as what it suppose to do (/create-and-update data-fetching.md)
we can provide arguments to this slash command and it will be accpeted by the .md file as $1 (1st argument), $2(second argument) and so on..

sub-agents: it runs with it's own context and memory
can create it mannually or using commadn itself (recommended)
note: it will create a markdown file (agen_name.md) inside .claude/agents/agent_name.md
to create an agent with recommended way is to:
/agents --> create agent --> project --> choose claude to create agent
Add your prompt details here
note: it will create the examples automatically
select Tools which it should have access to (by edfault it has access to all tools + MCPs)
select the modals (opus/sonnet/haku etc)
save it
