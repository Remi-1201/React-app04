// 3- propsが更新されない限りChildAreaコンポネントが
// 3- レンダリングされないようにmemoを導入
// 3- InputAreaに入力してもChildAreaがレンダリングされない
import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "#dbe7e4"
};

// 1- props = AppのDOMで定義されたChildAreaのprops
// 3- memoでコンポネントの全て(アロー関数の部分)を囲ってあげる
export const ChildArea = memo((props) => {
  // 4- Add new prop "onClickClose"
  const { open, onClickClose } = props;
  console.log("ChildArea is being render");
  // 2- レンダリングコストの高いコンポーネント
  // const data = [...Array(2000).keys()];
  // data.forEach(() => {
  //   console.log("...");
  // })

  return (
    <>
      {/* 1- {open? (true) : (false)}
       * the default is false */}
      {open ? (
        <div style={style}>
          <p>Child Component</p>
          {/* 4- useCallbackのためボタン追加 */}
          <button onClick={onClickClose}>Close</button>
        </div>
      ) : null}
    </>
  );
});
