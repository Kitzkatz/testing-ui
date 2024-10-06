Welcome to the Testing library it's not very useful, but it's something.

For starters there are currently 336 active components at least they render...
Well they don't throw errors usually.

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

Now because I'm impatient lets move on to some other info i think is important for the user to understand.
Simplicity is the goal with the testing library, Now with 275 unique variables and 507 total variables that's tricky.
there are four total types you can expect to see the two most important being arrays and handlers.

Of all four types being arrays, handlers, strings and the secret fifth one is state or true or false.
they can all be somewhat identified by the variable names. Lets not get ahead of ourselves just yet though.
Firstly almost every single function, class, whatever you want to call these components use arrow functions
and instead of using a rigid function or object creation this library is 100% props. It may not be standard
but it is the way of this library. The props is passed and you can't really know what type your looking for
to bad i didnt use typescript maybe later ill port it over like I did from vanilla react.

Variables
On the topic of understanding this library first you must be aware of my naming convention. Arrays, handlers,
strings, ints, booleans and i bet floats would work too.. in some cases.

Strings

Text, description, things like this will take strings dont overthink it much ok.

Ints

dates, percentage stuff like this will take int now i am using standard libraries for this so use the correct
formatting for things like dates ok.

Handlers

Handlers are named using the word "on" if the variables name is onClick I think you'll understand what's happening
most arrays use mappings, which are done through the pre-configured components which does have its restraints
and may not work for all cases but the handlers except functions which is what I think is great about
this library. You want a button to do something when the user clicks it, well you are the master of your code.

Arrays

Arrays can be identified from a plural "options" while only used once in this library is a good example of this.
Arrays are predefined, mapped and seem to work.

Functions

comming soon!! Here's to functionality!

If you want more documentation please visit the components folder of the library. Each folder contains the
components that pertain to the folder via namesake. if you want documentation for the common components or any
other the .md file is located beside each file containing the components
as well as the test folder indicated by the **tests** folder
test generation is done by a python script with all 275 unique variables accounted for and tuned to write the
most complete tests to ease my work here.
