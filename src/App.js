import { useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  // 1- 変化が起きるごとにこのコンポネントの部分が
  // 再レンダーリングされ、DOM(return~)に差分を反映する
  console.log("App");
  // 1- for Input area
  const [text, setText] = useState("");
  // 1- for show/ hide the text
  const [open, setOpen] = useState(false);

  // 1- e = event, setTextでtext関数を更新する
  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>Show</button>
      {/* 1- <ChildArea でエンター押すとコンポネントが
      自動的にinmportされる 
      * open = component's prop, {open} = the open function above*/}
      <ChildArea open={open} />
    </div>
  );
}
