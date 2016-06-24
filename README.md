# mikey
### *Mikey* is a React-Redux framework for generating React-Redux projects and React-Redux files.

Inspired by Rails generate; *Mikey* is a CLI / Framework for React/Redux applications. *Mikey* was designed to be simple, intuitive to use, and increase development speed and productivity of React/Redux applications. *Mikey* can generate React/Redux projects and files, saving the developer valuable time that can be spent building features. *Mikey* can also be used in any React/Redux project and is intended to be a broad solution.

___
### Installation

<strong>To Install *Mikey*:</strong>

```$ npm install mikey -g```

To see a list of commands:

```$ mikey```
___
### Project Generation

<strong>To Generate a new project:</strong>

```$ mikey new projectName```

When you create a new project, *Mikey* will run ```npm install``` automatically in the created project directory. All you have to do is be patient, it is not frozen.

Once it is done, you can start the server with:

```$ npm start```

*Mikey* projects are compatible with React / Redux Dev Chrome Extensions and also have hot reloading enabled. Dependencies are kept as minimal as possible. *Mikey* also contains ES6, SCSS/CSS Loading, Testing Setup, Production/Dev Config, and are Source Mapped.

To build for production:

```$ npm run build```

You will see a build file inside of your project directory which can you upload.
___
### File Generation

<strong>To generate a new react file:</strong>

```$ mikey g_action fileName```

```$ mikey g_component fileName```   

```$ mikey g_container fileName```  

```$ mikey g_reducer fileName```  

```$ mikey g_helper fileName```

#### <strong>*Mikey* classification and description of file type:</strong>

<strong>[Containers](http://redux.js.org/docs/basics/UsageWithReact.html)</strong> are components which hold logic such as mapping state to props, lifecycle methods, dispatching, and random methods. Containers act as further separation of logic and view.

<strong>[Components](http://redux.js.org/docs/basics/UsageWithReact.html)</strong> are primarily the view layer and rendered inside of Containers.

<strong>[Reducers](http://redux.js.org/docs/basics/Reducers.html)</strong> are responsible for updating the state of your application. Reducers are pure functions, meaning they do not mutate the state. Reducers take the current state and return a new state object.

<strong>[Actions](http://redux.js.org/docs/basics/Actions.html)</strong> are dispatched with a type and payload. Actions work with Reducers in updating the application store. Actions can contain Ajax requests or new information generated by a User.

<strong>Helpers</strong> are used for organizing random methods which can clutter your Containers and Components.

##### <strong>On File Creation Specifics:</strong>

On file creation, *Mikey* will look through your working project directory for actions/components/containers/reducers/helpers folders and create the corresponding file type. If none of these folders exist, *Mikey* will create them in the root of your project.

*Mikey* also creates ```.mikeyPath``` folder in your project and saves the path of the file type generated. This is to optimize the speed of creation afterwards so *Mikey* does not have to dynamically find the folder again after each generated file.

A Test file is also generated when you generate a file.

If your project directory changes at all, delete ```.mikeyPath``` folder to recache folder paths. ```.mikeyPath``` folder is added to ```.gitignore``` also.

You cannot create files that already exist.
___
### Adding Imports on File Generation

<strong>To generate a new file and import one or multiple dependencies to top of file:</strong>

```$ mikey g_container fileName -i depName```  

or to import multiple dependencies to top of file:

```$ mikey g_component fileName -i depName -i depName -i depName```

If you import a dependency with curly brackets it will remove them like this:

```import {thisThing} from 'thisThing'```

If you import a dependency from something titled like this:

```import {connect} from 'react-redux';```

You can import it with a comma and it will split it correctly:

```$ mikey g_action thisActionFile -i {connect},react-redux```
___
### Defaults
<strong>*Mikey* will remember</strong> the things you've imported and store them as defaults for each file type. This way, you will never have to import the same file over and over again for each file type. Also, stored imports are only stored once.

You can include defaults by typing ```-d Y``` (Yes) for using defaults, at the end of the generation command:

```$ mikey g_component JimmyBob -i {gravy},train-attack -d Y```
___
#### <strong>To list defaults:</strong>

```$ mikey list actions``` | ```$ mikey list components``` | ```$ mikey list containers``` | ```$ mikey list helpers``` | ```$ mikey list reducers```

Or:

```$ mikey -l actions``` | ```$ mikey -l components``` | ```$ mikey -l containers``` | ```$ mikey -l helpers``` | ```$ mikey -l reducers```

If you want to list all stored defaults:

```$ mikey list all```    |    ```$ mikey -l all```
___
#### <strong>To erase defaults:</strong>

```$ mikey erase actions``` | ```$ mikey erase components``` | ```$ mikey erase containers``` | ```$ mikey erase helpers``` | ```$ mikey erase reducers```

Or:

```$ mikey -e actions``` | ```$ mikey -e components``` | ```$ mikey -e containers``` | ```$ mikey -e helpers``` | ```$ mikey -e reducers```

If you want to erase all stored defaults:

```$ mikey erase all```    |    ```$ mikey -e all```
___
#### <strong>For help and more commands:</strong>

```$ mikey -h``` | ```$ mikey -V``` | ```$ mikey```
___
### Custom Templates

#### Saving Custom Templates:
<strong>*Mikey*</strong> will allow you to save files as templates in your current project. Create a file in containers / components / reducers / actions / helpers folder and use the:

`$ mikey save_template fileType`

command to copy into Custom Template directory in *Mikey*. File selection is <strong>without the .js extension</strong>

#### Generating Custom Files from Custom Templates:
Once you've saved a template, you can reuse it.

`$ mikey g_custom fileType`

A list of custom templates of that file type will be displayed. A prompt will be displayed in the console for template name and desired file name on completion. File selection is <strong>without the .js extension</strong>

#### Deleting Custom Files from Custom Templates:
If you want to delete a custom template:

`$ mikey delete_template fileType`

A list of custom templates of that file type will be displayed. The prompt will then ask which file you would like to delete. File selection is <strong>without the .js extension</strong>

#### List Custom Files from Custom Templates:
If you would like to look at saved custom templates:

`$ mikey list_templates fileType`

This will display all custom templates for current file type
### Contribute
<strong>If you would like to contribute, it would be greatly appreciated.</strong>

Looking to add much more to this such as :

More Templates, Auto dependency installation, and more?...

#### <strong>Version History:</strong>

<strong>Current: 1.6.1</strong>: Added Custom Template generation/saving/deletion/listing. Refactored file generation to be DRY'er. When you deal with custom templates, prompts will be given to obtain more details about files. List is displayed on template deletion command. Ability to save a file in current project to reuse.

<strong>1.5.0</strong>: Changed Project generation to `spawn` instead of `exec`. Added some fun tidbits like colors and art to project generation. Refactored project generation to be cleaner and output more helpful information. Updated project template dependencies.

<strong>1.4.4</strong>: Mikey displays help when just typing ```mikey```. Modified Project Template App.js and store.js file to be more logical. Added actions index to import all actions to.

<strong>1.3.6</strong>: Generating files also generate corresponding tests. Switched testing files to .test.js to keep with consistency of other aspects of mikey. Previous generated projects will need to switch test script in package.json to be compatible with newly generated tests. Added new container template.

<strong>1.2.4</strong>: Project Template uses enzyme for testing.

<strong>1.1.8</strong>: New CLI Commands which are direct and logical, testing integrated in Project Creation Template. README reflects all changes for New CLI Commands and movement towards *Mikey* as a Framework.

<strong>1.0.0</strong>: New Project Creation Template with More Concise Documentation.
