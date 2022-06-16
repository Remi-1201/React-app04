const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "#dbe7e4"
};

// 1- props = AppのDOMで定義されたChildAreaのprops
export const ChildArea = (props) => {
  const { open } = props;
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
        </div>
      ) : null}
    </>
  );
};
