/* eslint-disable react/no-unescaped-entities */

import { Helmet } from "react-helmet-async";
import "./table.css";
const Blogs = () => {
  return (
    <div>
      <Helmet>
        <title>Cheesy | Blogs</title>
      </Helmet>
      <div className="border-4 border-violet-600 p-4 mb-4">
        <h1 className="text-4xl font-bold">What is one way data binding?</h1>
        One-way data binding is a concept often used in web development,
        especially in frameworks like AngularJS or React. It describes a
        unidirectional flow of data, where the data source (often the model) is
        bound to the UI (View), but the changes made in the model reflect in the
        view, not the other way around. In one-way data binding: Data flows in
        one direction: Changes in the model update the view. If the model
        changes, the view is updated to reflect those changes. View is a
        representation of the model: The view is essentially a representation of
        the current state of the data. Any changes in the model update the view
        automatically, but changes in the view do not affect the model directly.
        For instance, in an AngularJS context, a variable in the JavaScript
        controller can be bound to an HTML element in the view. Any changes made
        to the variable will automatically reflect in the associated HTML
        element, but changes made in the HTML element will not affect the
        variable directly. This unidirectional flow simplifies the data flow and
        makes it easier to manage state and update the user interface based on
        changes in the application data. However, it also means that updating
        the view or UI requires explicit changes in the data model rather than
        being automatically handled bidirectionally.
      </div>
      <div className="border-4 border-yellow-600 p-4">
        <h1 className="text-4xl font-bold">What is npm in node.js?</h1>
        NPM stands for Node Package Manager. It is the default package manager
        for Node.js, which is an open-source, cross-platform JavaScript runtime
        environment used to execute JavaScript code on the server-side. NPM is
        bundled with Node.js and provides a vast ecosystem of packages and tools
        that help developers manage Node.js modules and dependencies for their
        projects. Key functionalities and features of NPM include: Package
        Installation: NPM allows developers to install and manage packages (also
        referred to as modules or libraries) for Node.js. These packages can be
        easily installed using the npm install command and specifying the
        package name. Dependency Management: NPM simplifies the management of
        dependencies by allowing developers to define, install, and update
        project dependencies through the package.json file, which lists the
        required packages along with their specific versions. Version Control:
        It enables developers to specify the versions of packages their projects
        depend on, ensuring consistent and reproducible builds. CLI (Command
        Line Interface): NPM provides a command-line interface that allows
        developers to perform various tasks such as installing packages,
        updating packages, running scripts, managing versions, and more.
        Publishing and Sharing: Developers can publish their own packages to the
        NPM registry, allowing others to use and benefit from their code. This
        sharing and collaboration aspect is a fundamental part of the NPM
        ecosystem. Scripts: NPM also allows developers to define custom scripts
        in the package.json file, which can be executed via the command line
        using the npm run command. NPM has become an integral part of the
        Node.js ecosystem and is widely used by developers to streamline the
        development process by providing access to a vast library of reusable
        code, making it easier to build and manage Node.js applications.
      </div>
      <div>
      <h1 className="text-4xl font-bold">
          Different between mongodb database vs mySQL database?
        </h1>
        <div className="flex justify-center border-4 border-red-600 p-4 mt-4">
      
        <table className="table">
          <tr>
            <th>MYSQL</th>
            <th>MongoDB</th>
          </tr>
          <tr>
            <td>MySQL represents data in tables and rows</td>
            <td>MongoDB represents data as JSON documents</td>
          </tr>
          <tr>
            <td>MySQL requires you to define your tables and columns before you can store anything, and every row in a table must have the same columns</td>
            <td>In MongoDB, you don’t need to define the schema. Instead, you just drop in documents don’t even need to have the same fields.</td>
          </tr>
          <tr>
            <td>MySQL uses Structured Query Language (SQL) for database access. You can’t change the schema.</td>
            <td>MongoDB has a pre-defined structure that can be defined and adhered to, but also, if you need different documents in a collection, it can have different structures.</td>
          </tr>
          <tr>
            <td>Supported languages are C++, C and JavaScript</td>
            <td>Supported languages are C++, C</td>
          </tr>
          <tr>
            <td>Constant development is done by the Oracle Corporation.</td>
            <td>Ongoing development is done by MongoDB, Inc</td>
          </tr>
          <tr>
            <td>MySQL supports master-slave replication and </td>
            <td>MongoDB supports built-in replication, sharding, and auto-elections.</td>
          </tr>
        </table>
      </div>

      </div>
      
    </div>
  );
};

export default Blogs;
