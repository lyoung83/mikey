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

<strong>To Generate a new universal project:</strong>

```$ mikey universal projectName```

When you create a new project, *Mikey* will run ```npm install``` automatically in the created project directory. All you have to do is be patient, it is not frozen.

Once it is done, cd to project and start the server with:

```$ npm start```

Or for Universal projects use:

```$ npm run dev```


*Mikey* projects are compatible with React / Redux Dev Chrome Extensions and also have hot reloading enabled. Dependencies are kept as minimal as possible. *Mikey* also contains ES6, SCSS/CSS Loading, Testing Setup, Production/Dev Config, and Source Mapping.

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

Custom Files(section blow):

```$ mikey g_file fileType```

<strong>Use these commands in the root of your project.</strong>

#### <strong>*Mikey* classification and description of file type:</strong>

<strong>[Containers](http://redux.js.org/docs/basics/UsageWithReact.html)</strong> are components which hold logic such as mapping state to props, lifecycle methods, dispatching, and random methods. Containers act as further separation of logic and view.

<strong>[Components](http://redux.js.org/docs/basics/UsageWithReact.html)</strong> are primarily the view layer and rendered inside of Containers.

<strong>[Reducers](http://redux.js.org/docs/basics/Reducers.html)</strong> are responsible for updating the state of your application. Reducers are pure functions, meaning they do not mutate the state. Reducers take the current state and return a new state object.

<strong>[Actions](http://redux.js.org/docs/basics/Actions.html)</strong> are dispatched with a type and payload. Actions work with Reducers in updating the application store. Actions can contain Ajax requests or new information generated by a User.

<strong>Helpers</strong> are used for organizing random methods which can clutter your Containers and Components. Using helpers enable you to reuse methods over and over throughout your project (DRYer).

##### <strong>On File Creation Specifics:</strong>

On file creation, *Mikey* will look through your working project directory for actions/components/containers/reducers/helpers folders and create the corresponding file type. If none of these folders exist, *Mikey* will create the file in the root of your project.

*Mikey* also creates ```.mikeyPath``` folder in your project and saves the path of the file type generated. This is to optimize the speed of file creation. By saving this path *Mikey* does not have to dynamically find the folder again after each generated file.

<strong>A Test file is also generated when you generate a file.</strong>

If your project directory changes at all, delete ```.mikeyPath``` folder to recache folder paths. ```.mikeyPath``` folder is added to ```.gitignore``` also.

You cannot create files that already exist.
___
### Adding Imports on File Generation

<strong>To generate a new file and import one or multiple dependencies to top of file:</strong>

```$ mikey g_container fileName -i depName```  

<strong>To import multiple dependencies to top of file:</strong>

```$ mikey g_component fileName -i depName -i depName -i depName```

<strong>To import with curly brackets:</strong>

```$ mikey g_action thisActionFile -i {connect},react-redux```

You can import with a comma and it will split it correctly:

```import {connect} from 'react-redux';```

___
### Defaults

<strong>*Mikey* will remember</strong> previous imports and store them as defaults for each file type. Stored imports are only stored once per file type.

You can include defaults by typing ```-d Y``` (Yes) for using defaults, at the end of the generation command:

```$ mikey g_component JimmyBob -d Y```
___
#### <strong>To list defaults:</strong>

```$ mikey list fileType```    |    ```$ mikey -l fileType```

If you want to list all stored defaults:

```$ mikey list all```    |    ```$ mikey -l all```
___
#### <strong>To erase defaults:</strong>

```$ mikey erase fileType```    |    ```$ mikey -e actions```

If you want to erase all stored defaults:

```$ mikey erase all```    |    ```$ mikey -e all```

___
### Custom Templates

#### Saving Custom Templates:
<strong>*Mikey*</strong> will allow you to save react files as templates from your current project. Create a file in containers / components / reducers / actions / helpers folders and use the:

```$ mikey save_template fileType```

This command will save the file inside of *Mikey* as a template. File selection is <strong>without the .js extension</strong>. A list of files you can save will be displayed.

#### Generating Custom Files from Custom Templates:

Once you've saved a template, you can reuse it in any project.

```$ mikey g_file fileType```

A list of custom templates of that file type will be displayed. A prompt will be displayed in the console for template choice and desired file name. The template file name will be used by default if no new name is entered. File selection is <strong>without the .js extension</strong>

#### Deleting Custom Files from Custom Templates:

If you want to delete a custom template:

```$ mikey delete_template fileType```

A list of custom templates of that file type will be displayed. The prompt will then ask which file you would like to delete. File selection is <strong>without the .js extension</strong>

#### List Custom Files from Custom Templates:

If you would like to look at saved custom templates:

```$ mikey list_templates fileType```

This will display all saved custom templates for current file type.

### Contribute
<strong>If you would like to contribute, it would be greatly appreciated.</strong>

___
#### <strong>For help and more commands:</strong>

```$ mikey -h``` | ```$ mikey -V``` | ```$ mikey```

___

#### <strong>Version History:</strong>

<strong>Current: 2.0.3</strong>: Added Universal / Isomorphic project generation with `mikey universal projectName`.

<strong>1.7.3</strong>: Added more test templates. Test template is chosen based on which file you are generating. Fixed README and added LICENSE text. Removed some console.log statements which were redundant. Changed helper template to contain basic const.

<strong>1.6.3</strong>: Added Custom Template generation/saving/deletion/listing. Refactored file generation to be DRY'er. When you deal with custom templates, prompts will be given to obtain more details about files. List is displayed on template deletion command. Ability to save a file in current project to reuse.

<strong>1.5.0</strong>: Changed Project generation to `spawn` instead of `exec`. Added some fun tidbits like colors and art to project generation. Refactored project generation to be cleaner and output more helpful information. Updated project template dependencies.

<strong>1.4.4</strong>: Mikey displays help when just typing ```mikey```. Modified Project Template App.js and store.js file to be more logical. Added actions index to import all actions to.

<strong>1.3.6</strong>: Generating files also generate corresponding tests. Switched testing files to .test.js to keep with consistency of other aspects of mikey. Previous generated projects will need to switch test script in package.json to be compatible with newly generated tests. Added new container template.

<strong>1.2.4</strong>: Project Template uses enzyme for testing.

<strong>1.1.8</strong>: New CLI Commands which are direct and logical, testing integrated in Project Creation Template. README reflects all changes for New CLI Commands and movement towards *Mikey* as a Framework.

<strong>1.0.0</strong>: New Project Creation Template with More Concise Documentation.
