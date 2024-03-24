import './App.css';
import ImportingAndExportingComponents from './components/ImportingAndExportingComponents';
import JavaScriptInJSXWithCurlyBraces from './components/JavaScriptInJSXWithCurlyBraces';
import PassingPropsToAComponent from './components/PassingPropsToAComponent';
import { WritingMarkupWithJSX } from './components/WritingMarkupWithJSX';
import YourFirstComponent from './components/YourFirstComponent';
import ConditionalRendering from './components/ConditionalRendering/ConditionalRendering';
import List from './components/RenderingLists/RenderingLists';
import KeepingComponentsPure from './components/KeepingComponentsPure/KeepingComponentsPure';


function App() {
  return (
    <div className="App">
      {/* <YourFirstComponent/> */}
      {/* <ImportingAndExportingComponents/> */}
      {/* <WritingMarkupWithJSX/> */}
      {/* <JavaScriptInJSXWithCurlyBraces/> */}
      {/* <PassingPropsToAComponent/> */}
      {/* <ConditionalRendering/> */}
      {/* <List/> */}
      <KeepingComponentsPure/>
    </div>
  );
}

export default App;
