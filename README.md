Welcome to the Testing library!

This library is designed to minimize setup, boilerplate, and decision fatigue.

Components are built to be:
- Immediately usable after import
- Predictable in behavior
- Explicit in how they handle data, state, and events

The goal is not abstraction for its own sake, but fast, reliable access to common UI patterns without sacrificing control.

For starters there are currently 336 active components at least they render...
Well they don't throw errors usually

Its pretty simple, if you think about it.

First we create a project

        npx create-next-app

then we install the library to the env of your project

next we import from the library like any other dependency

        import {} from "Testing"

then throw up a div in your page.js file like so

        export default function Home() {
        return (
          <div>

          </div>
          );
        }

choose any component lets say the SimpleBanner components from the banner components

        export default function Home() {
        return (
          <div>
            <SimpleBanner title={'hello'} description={'World!'} />
          </div>
          );
        }

And with that you've created your first component with the testing library, congrats!


Simplicity & Scale

Simplicity is the primary design goal of the testing library — even at scale.

With 275+ unique props and 500+ total variables, complexity is inevitable. The library addresses this by enforcing a small, predictable set of prop types rather than expanding the API surface.

There are four primary prop categories you can expect to encounter throughout the library. The two most critical are:

Arrays — used for structured, repeatable data and internal mappings

Handlers — function-based props that define behavior and interaction

By constraining the system to a limited number of prop types, the library remains approachable despite its size, allowing users to reason about components quickly without memorizing bespoke APIs.

Of all four types being arrays, handlers, strings and the secret fifth one is state or true or false.
they can all be somewhat identified by the variable names. Lets not get ahead of ourselves just yet though.
This library currently contains 336 active components. All components render successfully and are actively maintained to avoid runtime errors under normal usage.

Components are intentionally self-identifying through descriptive variable names, allowing developers to understand purpose and usage without excessive indirection or abstraction.

Architecturally, nearly every component is implemented using arrow functions. Rather than relying on rigid class hierarchies or fixed object construction patterns, the library is designed to be entirely props-driven.

This approach prioritizes flexibility and composability over strict structural constraints. Components accept props dynamically, allowing usage patterns to remain lightweight and adaptable. While this design does not enforce static typing, it reflects a deliberate choice to optimize for speed of iteration and ease of use.

A TypeScript port is a future consideration, following the same migration path previously used when transitioning from vanilla React.


Variables & Naming Philosophy

    The library follows a semantic naming convention to       make prop intent obvious without needing excessive documentation.

Supported prop categories include:

    Arrays

    Handlers (functions)

    Strings

    Integers

    Booleans

    Floats may also work in certain cases, but are not a primary focus.


Strings

    String props are used for:

    Text

    Labels

    Descriptions

    Display content

Ints

    Integer props are used for numeric values such as:

    Dates

    Percentages

    Quantitative configuration values

    These values rely on standard libraries for parsing and formatting. Ensure inputs follow the expected formats (especially for dates) to avoid unexpected behavior.

Handlers

    Event handlers follow a consistent naming convention using the on* prefix (e.g., onClick), making intent immediately clear without additional documentation.

Most handlers are implemented through mapped, pre-configured components, which provide common interaction patterns out of the box. While this approach introduces some constraints, it significantly reduces boilerplate for standard use cases.

Importantly, handlers are not restricted to predefined behaviors. All handlers ultimately accept functions, allowing developers to define custom logic freely.

If you want a button to perform an action on user interaction, you retain full control over that behavior — the library provides structure, not limitation.

Arrays

    Array props use pluralized naming (e.g., options) and are predefined and internally mapped. Their usage is limited by design, but they are stable and predictable within supported components.

Booleans 

    Boolean props represent state or feature toggles (e.g., true / false).

They are used to control visibility, enable/disable behavior, or switch component modes without introducing additional complexity.


Functions

comming soon!! Here's to functionality!

If you want more documentation please visit the components folder of the library. Each folder contains the
components that pertain to the folder via namesake. if you want documentation for the common components or any
other the .md file is located beside each file containing the components
as well as the test folder indicated by the **tests** folder
test generation is done by a python script with all 275 unique variables accounted for and tuned to write the
most complete tests to ease my work here.
